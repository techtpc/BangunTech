import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BangunTech — Building Solutions, Empowering Futures",
  description:
    "Solusi Teknologi untuk Bisnis yang Bertumbuh. Dari platform keamanan properti berbasis AI hingga optimasi mesin pencari — kami membangun teknologi yang benar-benar bekerja untuk bisnis Indonesia.",
  icons: {
    icon: "/logo%20banguntech.png",
    apple: "/logo%20banguntech.png",
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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
