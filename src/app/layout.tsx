import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "POSADA TOOLS — Built for Real Work",
    template: "%s | POSADA TOOLS",
  },
  description:
    "Professional-grade power tools, batteries, and accessories. Precision engineering built for real work.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "POSADA TOOLS",
    title: "POSADA TOOLS — Built for Real Work",
    description:
      "Professional-grade power tools, batteries, and accessories. Precision engineering built for real work.",
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
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
