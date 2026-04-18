import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/ui/PageLoader";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Md. Azad | Electrical & Electronics Engineer",
    template: "%s | Md. Azad",
  },
  description:
    "Portfolio of Md. Azad, Assistant Manager at ACI Motors Limited. EEE engineer specializing in solar energy systems, inverter/UPS design, electrical panels, energy auditing, and project management in Dhaka, Bangladesh.",
  keywords: [
    "electrical engineer Bangladesh",
    "solar energy engineer Dhaka",
    "EEE engineer portfolio",
    "Md. Azad",
    "ACI Motors",
    "renewable energy",
    "power systems",
  ],
  authors: [{ name: "Md. Azad" }],
  openGraph: {
    title: "Md. Azad | Electrical & Electronics Engineer",
    description:
      "Portfolio of Md. Azad, Assistant Manager at ACI Motors Limited. Specializing in solar energy systems, inverter/UPS design, and electrical engineering.",
    url: "https://azad-portfolio.vercel.app",
    siteName: "Md. Azad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Azad | Electrical & Electronics Engineer",
    description:
      "Portfolio of Md. Azad, Assistant Manager at ACI Motors Limited. Specializing in solar energy systems and electrical engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <PageLoader />
        <LazyMotion features={domAnimation}>
          <LenisProvider>
            <Navbar />
            {children}
          </LenisProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
