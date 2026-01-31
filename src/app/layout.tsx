import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Font loading optimization
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiom | Kuşkudan Kesinliğe",
  description: "2-18 yaş arası çocuklar için yapay zeka destekli gelişim ve pedagoji analizi. Bilimsel veriye dayalı çözümler.",
  keywords: ["pedagoji", "çocuk gelişimi", "yapay zeka", "eğitim", "psikolojik analiz", "axiom", "gelişim analizi"],
  authors: [{ name: "Axiom" }],
  icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/axiom-icon-light.svg",
  },
  openGraph: {
    title: "Axiom | Kuşkudan Kesinliğe",
    description: "2-18 yaş arası çocuklar için yapay zeka destekli gelişim ve pedagoji analizi.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiom | Kuşkudan Kesinliğe",
    description: "2-18 yaş arası çocuklar için yapay zeka destekli gelişim ve pedagoji analizi.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#2C3E50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
