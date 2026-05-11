"use client";

import Link from "next/link";
import { SERVICES } from "@/data";
import Btn from "@/components/Btn";
import Badge from "@/components/Badge";

export default function LayananPage() {
  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-[72px] pb-14 text-center"
        style={{
          background: "#F8FAFF",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <Badge>Layanan Kami</Badge>
        <h1
          className="text-[clamp(32px,5vw,58px)] font-black tracking-[-2px] mt-4 mb-4"
          style={{ color: "#1A2B42" }}
        >
          Solusi Teknologi{" "}
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            End-to-End
          </span>
        </h1>
        <p
          className="text-[17px] max-w-[600px] mx-auto leading-[1.7]"
          style={{ color: "#4A6080" }}
        >
          Enam lini layanan yang saling terintegrasi untuk memenuhi kebutuhan
          digitalisasi bisnis Anda secara komprehensif.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-7 pt-[72px] pb-[72px]">
        <div className="grid gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-[18px] p-10 max-md:p-7 grid grid-cols-[auto_1fr_auto] gap-8 max-md:gap-5 items-center max-md:grid-cols-1"
              style={{
                border: "1.5px solid #DDE6F5",
                boxShadow: "0 2px 20px rgba(26,111,255,0.09)",
              }}
            >
              <div
                className="w-[68px] h-[68px] rounded-[16px] flex items-center justify-center text-[32px]"
                style={{
                  background: `${s.col}12`,
                  border: `2px solid ${s.col}22`,
                }}
              >
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-[10px] mb-3">
                  <div
                    className="text-[10px] font-bold tracking-[1.5px] uppercase"
                    style={{ color: s.col }}
                  >
                    {s.sub}
                  </div>
                  {s.badge && (
                    <Badge color={s.badge === "NEW" ? "#22C55E" : s.col} small>
                      {s.badge}
                    </Badge>
                  )}
                </div>
                <h2
                  className="text-[22px] font-black mb-3 tracking-[-0.3px]"
                  style={{ color: "#1A2B42" }}
                >
                  {s.title}
                </h2>
                <p
                  className="text-[14px] leading-[1.65] max-w-[680px]"
                  style={{ color: "#4A6080" }}
                >
                  {s.desc}
                </p>
                <div
                  className="mt-5 text-[12px] font-semibold"
                  style={{ color: "#8BA0BA" }}
                >
                  🎯 Target: {s.target}
                </div>
              </div>
              <div className="text-right min-w-[160px] max-md:text-left">
                <div
                  className="text-[11px] font-bold uppercase tracking-[1px] mb-1"
                  style={{ color: "#8BA0BA" }}
                >
                  Mulai dari
                </div>
                <div
                  className="font-black text-[17px] mb-5"
                  style={{ color: s.col }}
                >
                  {s.price}
                </div>
                <div className="flex gap-2">
                  <Link href={"/layanan/" + s.id}>
                    <Btn
                      style={{
                        background: s.col,
                        boxShadow: `0 4px 20px ${s.col}33`,
                      }}
                    >
                      Detail Layanan →
                    </Btn>
                  </Link>
                  {s.id === "secureforce" && (
                    <Link href="/demo">
                      <Btn
                        style={{
                          background: "#f59e0b",
                          boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                        }}
                      >
                        🔴 Demo
                      </Btn>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
