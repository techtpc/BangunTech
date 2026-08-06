"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICES, LOGO } from "@/data";
import BrandIcon from "./BrandIcon";

const footerCols = [
  {
    title: "Layanan",
    items: SERVICES.map((s) => ({ l: s.title, p: "/layanan/" + s.id })),
  },
  {
    title: "Perusahaan",
    items: [
      { l: "Tentang Kami", p: "/tentang" },
      { l: "Studi Kasus", p: "/studi-kasus" },
      { l: "Blog", p: "/blog" },
      { l: "Harga", p: "/harga" },
      { l: "Karir", p: "/kontak" },
    ],
  },
  {
    title: "Hubungi",
    items: [
      { l: "Kontak", p: "/kontak" },
      { l: "hello@banguntech.id", p: "/kontak" },
      { l: "WhatsApp", p: "/kontak" },
      { l: "Privasi", p: "/kontak" },
      { l: "Syarat & Ketentuan", p: "/kontak" },
    ],
  },
];

const socials = [
  { l: "Instagram", h: "#" },
  { l: "Youtube", h: "#" },
  { l: "Tiktok", h: "#" },
  { l: "Linkedin", h: "#" },
];

export default function Footer() {
  return (
    <footer className="px-7 pt-[72px] max-md:pt-12 pb-8" style={{ background: "#0A1628" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:gap-8 mb-14 max-md:mb-10 max-lg:grid-cols-2">
          <div>
            <img
              src="/logo-footer.png"
              alt="BangunTech"
              className="h-28 max-md:h-20 mb-5 object-contain"
              style={{ mixBlendMode: "screen" }}
            />
            <p
              className="text-[13px] leading-[1.75] max-w-[300px] mb-7"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Building Solutions, Empowering Futures.
              <br />
              Mitra teknologi terpercaya untuk bisnis Indonesia yang ingin bertumbuh di era digital.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center no-underline transition-all duration-200 hover:bg-white/15"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  title={s.l}
                >
                  <BrandIcon name={s.l} size={18} color="#ffffff" />
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="text-white text-[12px] font-extrabold tracking-[1.5px] uppercase mb-5">
                {col.title}
              </div>
              {col.items.map((item) => (
                <Link
                  key={item.l}
                  href={item.p}
                  className="block text-[13px] mb-3 no-underline transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  {item.l}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          className="pt-6 flex justify-between items-center flex-wrap gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} BangunTech. All rights reserved.
          </div>
          <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            Jakarta · Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
