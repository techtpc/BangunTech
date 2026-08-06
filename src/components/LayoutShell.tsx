"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BrandIcon from "./BrandIcon";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname === "/demo";

  if (isDemo) return <>{children}</>;

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/628989891828"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-7 right-7 z-[500] w-14 h-14 rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:scale-110 animate-[waFloat_3s_ease-in-out_infinite]"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 30px rgba(37,211,102,0.45)",
        }}
        title="Chat via WhatsApp"
      >
        <BrandIcon name="Whatsapp" size={26} color="#ffffff" />
      </a>
    </>
  );
}
