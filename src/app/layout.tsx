import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BangunTech — Building Solutions, Empowering Futures",
  description:
    "Solusi Teknologi untuk Bisnis yang Bertumbuh. Dari platform keamanan properti berbasis AI hingga optimasi mesin pencari — kami membangun teknologi yang benar-benar bekerja untuk bisnis Indonesia.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* WhatsApp */}
        <a
          href="https://wa.me/628123456789"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-7 right-7 z-[500] w-14 h-14 rounded-full flex items-center justify-center text-[26px] no-underline animate-[waFloat_3s_ease-in-out_infinite]"
          style={{
            background: "#25D366",
            boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
          }}
        >
          💬
        </a>
      </body>
    </html>
  );
}
