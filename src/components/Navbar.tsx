"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES, LOGO } from "@/data";
import Btn from "./Btn";
import Icon from "./Icon";
import { ChevronDown } from "lucide-react";

const mainLinks = [
  { id: "tentang", l: "Tentang Kami" },
  { id: "studi-kasus", l: "Studi Kasus" },
  { id: "harga", l: "Harga" },
  { id: "blog", l: "Blog" },
  { id: "kontak", l: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  const [svcDD, setSvcDD] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[500] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "#fff",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "#DDE6F5" : "transparent"}`,
        boxShadow: scrolled ? "0 2px 20px rgba(26,111,255,0.07)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-7 h-[72px] flex items-center justify-between">
        <Link href="/">
          <img src={LOGO} alt="BangunTech" className="h-12 max-md:h-9 cursor-pointer object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Layanan dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSvcDD(true)}
            onMouseLeave={() => setSvcDD(false)}
          >
            <button
              className="bg-none border-none cursor-pointer font-sans text-[13.5px] font-semibold px-[18px] py-2 rounded-[8px] flex items-center gap-1 transition-colors duration-200"
              style={{ color: "#4A6080" }}
            >
              Layanan <ChevronDown size={14} className="text-[#8BA0BA]" />
            </button>
            {svcDD && (
              <div
                className="absolute top-full left-0 bg-white rounded-[14px] p-2 min-w-[280px] z-[100]"
                style={{
                  border: "1.5px solid #DDE6F5",
                  boxShadow: "0 12px 60px rgba(26,111,255,0.18)",
                }}
              >
                <div
                  className="px-4 pb-2 text-[10px] font-bold tracking-[1.5px] uppercase"
                  style={{ color: "#8BA0BA" }}
                >
                  Semua Layanan
                </div>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={"/layanan/" + s.id}
                    className="flex gap-[12px] items-center px-4 py-[10px] rounded-[8px] cursor-pointer transition-colors duration-150 hover:bg-[#F8FAFF] no-underline"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${s.col}12`, border: `1px solid ${s.col}22` }}
                    >
                      <Icon name={s.id} size={18} color={s.col} />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold" style={{ color: "#1A2B42" }}>
                        {s.title}
                      </div>
                      <div className="text-[11px]" style={{ color: "#8BA0BA" }}>
                        {s.sub}
                      </div>
                    </div>
                  </Link>
                ))}
                <div
                  className="mt-2 pt-2"
                  style={{ borderTop: "1px solid #DDE6F5" }}
                >
                  <Link
                    href="/layanan"
                    className="block text-[13px] font-bold px-4 py-[6px] no-underline"
                    style={{ color: "#1A6FFF" }}
                  >
                    Lihat Semua Layanan →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {mainLinks.map((l) => (
            <Link
              key={l.id}
              href={"/" + l.id}
              className="bg-none border-none cursor-pointer font-sans text-[13.5px] font-semibold px-[18px] py-2 rounded-[8px] no-underline transition-colors duration-200 hover:text-[#1A6FFF]"
              style={{ color: "#4A6080" }}
            >
              {l.l}
            </Link>
          ))}
          <Link href="/kontak" className="ml-2 no-underline">
            <Btn small>Mulai Proyek →</Btn>
          </Link>
        </div>

        <button
          className="lg:hidden bg-none border border-[#DDE6F5] rounded-[8px] p-2 cursor-pointer text-[16px] flex items-center justify-center"
          style={{ color: "#1A2B42" }}
          onClick={() => setMob(!mob)}
        >
          <Icon name={mob ? "close" : "menu"} size={20} />
        </button>
      </div>

      {/* Mobile */}
      {mob && (
        <div
          className="lg:hidden flex flex-col bg-white max-h-[85vh] overflow-y-auto"
          style={{
            borderTop: "1px solid #DDE6F5",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="px-4 pb-1 pt-3 text-[10px] font-bold tracking-[1.5px]"
            style={{ color: "#8BA0BA" }}
          >
            LAYANAN
          </div>
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              href={"/layanan/" + s.id}
              className="flex gap-3 items-center bg-none border-none border-b border-[#DDE6F5] px-5 py-3 text-left cursor-pointer text-[13px] font-semibold no-underline"
              style={{ color: "#1A2B42" }}
              onClick={() => setMob(false)}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ background: `${s.col}12` }}
              >
                <Icon name={s.id} size={16} color={s.col} />
              </div>
              {s.title}
            </Link>
          ))}
          <div
            className="px-4 pb-1 pt-3 text-[10px] font-bold tracking-[1.5px] mt-2"
            style={{ color: "#8BA0BA" }}
          >
            NAVIGASI
          </div>
          {mainLinks.map((l) => (
            <Link
              key={l.id}
              href={"/" + l.id}
              className="bg-none border-none border-b border-[#DDE6F5] px-5 py-4 text-left cursor-pointer text-[14px] font-semibold no-underline"
              style={{ color: "#4A6080" }}
              onClick={() => setMob(false)}
            >
              {l.l}
            </Link>
          ))}
          <div className="p-4">
            <Link href="/kontak" className="no-underline" onClick={() => setMob(false)}>
              <Btn full>Mulai Proyek →</Btn>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
