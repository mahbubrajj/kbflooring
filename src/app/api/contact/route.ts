import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Rate limiting state (in-memory sliding window)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 inquiries per 10 minutes per IP

// Periodic cleanup of expired rate limit entries
function cleanupRateLimits() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}

// Security: Strip HTML, control characters, and line breaks from single-line headers
function sanitizeSingleLine(input: unknown, maxLength = 100): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[\r\n]/g, " ") // prevent email header injection
    .replace(/[\x00-\x1F\x7F]/g, "") // strip control characters
    .trim()
    .slice(0, maxLength);
}

// Security: Strip dangerous tags and control characters from multi-line content
function sanitizeMultiLine(input: unknown, maxLength = 3000): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // strip script tags
    .replace(/<[^>]*>/g, "") // strip all other HTML tags
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // strip non-printable control chars except \n\r\t
    .trim()
    .slice(0, maxLength);
}

// Security: Phone number validation
function isValidPhone(phone: string): boolean {
  return /^[\d\s+\-().]{7,25}$/.test(phone);
}

// Security: Email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// Backup lead storage in case of SMTP server outage or pre-configuration
function backupLeadToFile(lead: Record<string, unknown>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "leads_backup.json");
    let existingLeads: Array<Record<string, unknown>> = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      try {
        existingLeads = JSON.parse(fileData);
      } catch {
        existingLeads = [];
      }
    }
    existingLeads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
  } catch (err) {
    console.error("[KB Flooring] Failed to backup lead to file:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";

    cleanupRateLimits();

    const now = Date.now();
    const rateRecord = rateLimitMap.get(ip);
    if (rateRecord) {
      if (now < rateRecord.resetAt) {
        if (rateRecord.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              error: "Too many requests. Please wait a few minutes before submitting another inquiry or call us directly at +880 1819-199876.",
            },
            {
              status: 429,
              headers: {
                "Retry-After": "600",
                "X-Content-Type-Options": "nosniff",
              },
            }
          );
        }
        rateRecord.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    }

    // 2. Parse request body
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400, headers: { "X-Content-Type-Options": "nosniff" } }
      );
    }

    // 3. Security: Honeypot check (bot trap)
    // If bot fills in the hidden `_gotcha` or `honeypot` field, return silent 200
    if (
      (body._gotcha && String(body._gotcha).trim().length > 0) ||
      (body.honeypot && String(body.honeypot).trim().length > 0) ||
      (body.company_website && String(body.company_website).trim().length > 0)
    ) {
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200, headers: { "X-Content-Type-Options": "nosniff" } }
      );
    }

    // 4. Security: Submission speed check (bot trap)
    if (body._timestamp) {
      const renderTime = Number(body._timestamp);
      if (!isNaN(renderTime) && now - renderTime < 800) {
        // Form submitted in less than 800ms -> automated bot script
        return NextResponse.json(
          { success: true, message: "Inquiry received successfully." },
          { status: 200, headers: { "X-Content-Type-Options": "nosniff" } }
        );
      }
    }

    // 5. Sanitize fields
    const name = sanitizeSingleLine(body.name || body.fullName, 100);
    const phone = sanitizeSingleLine(body.phone || body.mobileNumber, 25);
    const email = sanitizeSingleLine(body.email, 100);
    const service = sanitizeSingleLine(body.service, 100) || "General Flooring Consultation";
    const area = sanitizeSingleLine(body.area || body.estimatedArea, 50);
    const location = sanitizeSingleLine(body.location, 100);
    const message = sanitizeMultiLine(body.message || body.requirements, 3000);
    const source = sanitizeSingleLine(body.source, 50) || "Website Form";

    // 6. Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid contact name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!phone || !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number (e.g. +880 1819-199876)." },
        { status: 400 }
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 7. Structure the lead record
    const targetRecipient = "kbflooringbd@gmail.com";
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const leadRecord = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      dhakaTime: submissionTime,
      source,
      name,
      phone,
      email: email || "Not provided",
      service,
      area: area || "Not specified",
      location: location || "Not specified",
      message: message || "No additional comments",
      ip,
    };

    // Always preserve lead to disk so no inquiry is ever dropped
    backupLeadToFile(leadRecord);

    // 8. Configure Nodemailer transport
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || "kbflooringbd@gmail.com";
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    const emailSubject = `[New Inquiry] ${service} - ${name} (${phone})`;

    const emailText = `
NEW INQUIRY RECEIVED - KB FLOORING BD
=========================================
Time: ${submissionTime} (Dhaka Time)
Source: ${source}

CUSTOMER DETAILS:
- Name: ${name}
- Phone: ${phone}
- Email: ${email || "Not provided"}

PROJECT REQUIREMENTS:
- Service Line: ${service}
- Estimated Area: ${area || "Not specified"}
- Project Location: ${location || "Not specified"}
- Client Notes:
${message || "No additional notes provided."}

=========================================
IP: ${ip}
KB Flooring BD · Professional Flooring Solutions Across Bangladesh
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry - KB Flooring BD</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f8; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #d32323; max-width: 600px; width: 100%;">
          <!-- Header -->
          <tr>
            <td style="padding: 25px 30px; background-color: #0b1118; color: #ffffff;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                KB FLOORING BD
              </h1>
              <p style="margin: 5px 0 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">
                New Website Technical Consultation & Quote Request
              </p>
            </td>
          </tr>

          <!-- Summary Alert Banner -->
          <tr>
            <td style="padding: 16px 30px; background-color: #fef2f2; border-bottom: 1px solid #fee2e2;">
              <p style="margin: 0; font-size: 13px; color: #991b1b; font-weight: 600;">
                🔔 Action Required: New inquiry received via <span style="text-decoration: underline;">${source}</span>
              </p>
            </td>
          </tr>

          <!-- Customer Information -->
          <tr>
            <td style="padding: 25px 30px;">
              <h2 style="margin: 0 0 15px; font-size: 14px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                Customer Contact Details
              </h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 13px; color: #334155;">
                <tr>
                  <td width="35%" style="font-weight: 700; color: #64748b; padding-left: 0;">Full Name:</td>
                  <td style="font-weight: 700; color: #0f172a; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: 700; color: #64748b; padding-left: 0;">Mobile Number:</td>
                  <td>
                    <a href="tel:${phone}" style="color: #d32323; font-weight: 800; text-decoration: none; font-size: 15px;">
                      ${phone}
                    </a>
                    &nbsp;&nbsp;
                    <a href="https://wa.me/${phone.replace(/[^\d]/g, "")}" style="background-color: #25D366; color: #ffffff; padding: 2px 8px; border-radius: 3px; font-size: 11px; font-weight: 700; text-decoration: none;">
                      WhatsApp
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: 700; color: #64748b; padding-left: 0;">Email:</td>
                  <td>
                    ${
                      email
                        ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>`
                        : `<span style="color: #94a3b8; font-style: italic;">Not provided</span>`
                    }
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: 700; color: #64748b; padding-left: 0;">Inquiry Time:</td>
                  <td style="color: #475569;">${submissionTime}</td>
                </tr>
              </table>

              <!-- Project Specifications -->
              <h2 style="margin: 25px 0 15px; font-size: 14px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
                Project Specifications
              </h2>
              <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 13px; color: #334155;">
                <tr>
                  <td width="35%" style="font-weight: 700; color: #64748b; padding-left: 0;">Service Line:</td>
                  <td style="font-weight: 800; color: #d32323;">${service}</td>
                </tr>
                <tr>
                  <td style="font-weight: 700; color: #64748b; padding-left: 0;">Estimated Area:</td>
                  <td style="font-weight: 700; color: #0f172a;">${area || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="font-weight: 700; color: #64748b; padding-left: 0;">Project Location:</td>
                  <td style="color: #0f172a;">${location || "Not specified"}</td>
                </tr>
              </table>

              <!-- Client Message -->
              <h2 style="margin: 25px 0 10px; font-size: 14px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">
                Client Requirements & Notes
              </h2>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; font-size: 13px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
${message || "No additional notes provided by client."}
              </div>

              <!-- Action buttons -->
              <div style="margin-top: 30px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; background-color: #d32323; color: #ffffff; padding: 12px 24px; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; text-decoration: none; margin-right: 10px; margin-bottom: 10px;">
                  Call Customer (${phone})
                </a>
                ${
                  email
                    ? `<a href="mailto:${email}?subject=Regarding%20your%20flooring%20inquiry%20-%20KB%20Flooring%20BD" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 12px 24px; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; text-decoration: none; margin-bottom: 10px;">Reply By Email</a>`
                    : ""
                }
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center;">
              KB Flooring BD · Plot 12, Road 4, Section 10, Mirpur, Dhaka 1216<br>
              Phone: +880 1819-199876 · Email: kbflooringbd@gmail.com · Web: https://kbflooringbd.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // 9. Send email if credentials exist
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail({
        from: `"KB Flooring Inquiries" <${smtpUser}>`,
        to: targetRecipient,
        replyTo: email && isValidEmail(email) ? email : targetRecipient,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      console.log(`[KB Flooring] Inquiry email successfully delivered to ${targetRecipient}`);
    } else {
      console.warn(
        `[KB Flooring] Inquiry logged to backup storage. Set GMAIL_APP_PASSWORD or SMTP_PASS in .env.local to enable live dispatch to ${targetRecipient}.`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been logged and sent to our engineering team. We will call you shortly.",
      },
      {
        status: 200,
        headers: {
          "X-Content-Type-Options": "nosniff",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error: unknown) {
    console.error("[KB Flooring] Contact submission processing error:", error);

    // Defensive error handling: never leak stack traces to client
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please call us directly at +880 1819-199876 for immediate assistance.",
      },
      {
        status: 500,
        headers: {
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  }
}
