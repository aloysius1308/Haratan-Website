import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/data/site-content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haratan.com.sg"),
  title: {
    default: `${company.name} | Remittance & Money Changer Singapore`,
    template: `%s | ${company.name}`
  },
  description:
    "Singapore-based remittance and money changing services for personal, Indonesian corridor, and business overseas payments.",
  keywords: [
    "Haratan",
    "Singapore remittance",
    "money changer Singapore",
    "Indonesia remittance",
    "business overseas payments"
  ],
  openGraph: {
    title: company.name,
    description:
      "Fast, reliable remittance and currency exchange services in Singapore.",
    url: "https://haratan.com.sg",
    siteName: company.name,
    locale: "en_SG",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-SG" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
