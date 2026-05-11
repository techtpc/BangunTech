"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        href="https://wa.me/62812301828"
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
    </>
  );
}
