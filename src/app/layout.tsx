import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kbflooringbd.com"),
  title: {
    default: "KB Flooring BD | Seamless Epoxy Floors, PU Screed & Waterproofing Bangladesh",
    template: "%s | KB Flooring BD",
  },
  description:
    "KB Flooring BD is Dhaka's premier industrial flooring, heavy PU screed, and elastomeric roof waterproofing contractor. Certified European & Asian chemistry, planetary diamond grinding, and stamped written warranties across Greater Dhaka, Gazipur, Savar, Narayanganj, and Chattogram.",
  keywords: [
    "Epoxy flooring price in Bangladesh",
    "Epoxy flooring Bangladesh",
    "PU flooring Dhaka",
    "Waterproofing contractor Bangladesh",
    "Self leveling epoxy Dhaka",
    "Industrial floor hardener Narayanganj",
    "Polyurethane screed Bangladesh",
    "Cleanroom flooring Gazipur",
    "Concrete crack repair Dhaka",
    "KB Flooring BD Mirpur",
  ],
  authors: [{ name: "KB Flooring BD Engineering Bureau" }],
  creator: "KB Flooring BD",
  publisher: "KB Flooring BD",
  alternates: {
    canonical: "https://kbflooringbd.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://kbflooringbd.com",
    siteName: "KB Flooring BD",
    title: "KB Flooring BD | Industrial Flooring & Waterproofing in Bangladesh",
    description:
      "Seamless epoxy floors, heavy polyurethane screeds, and liquid elastomeric roof waterproofing engineered for Bangladesh manufacturing plants, showrooms, and commercial rooftops.",
    images: [
      {
        url: "/images/hero-floor.jpg",
        width: 1200,
        height: 630,
        alt: "KB Flooring BD Industrial Epoxy Floor Installation in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KB Flooring BD | Industrial Flooring Contractor Bangladesh",
    description:
      "Seamless epoxy, heavy-duty PU screed, and certified roof waterproofing across Greater Dhaka and national EPZs.",
    images: ["/images/hero-floor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Mirpur, Dhaka, Bangladesh",
    "geo.position": "23.8041;90.3667",
    ICBM: "23.8041, 90.3667",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${poppins.className} font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
