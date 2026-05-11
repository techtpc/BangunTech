"use client";

import { useState } from "react";
import { CASES } from "@/data";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Btn from "@/components/Btn";
import Link from "next/link";

export default function StudiKasusPage() {
  const [filter, setFilter] = useState("all");
  const services = ["all", ...new Set(CASES.map((c) => c.service))];
  const filtered =
    filter === "all" ? CASES : CASES.filter((c) => c.service === filter);

  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-[72px] pb-14 text-center"
        style={{
          background: "#F8FAFF",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <Badge>Studi Kasus</Badge>
        <h1
          className="text-[clamp(30px,5vw,56px)] font-black tracking-[-2px] mt-4 mb-[14px]"
          style={{ color: "#1A2B42" }}
        >
          Hasil yang Kami
          <br />
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            Capai Bersama Klien
          </span>
        </h1>
        <p
          className="text-[16px] max-w-[560px] mx-auto mb-8 leading-[1.7]"
          style={{ color: "#4A6080" }}
        >
          Setiap proyek adalah bukti nyata dampak teknologi yang tepat terhadap
          efisiensi dan pertumbuhan bisnis.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          {services.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="px-[18px] py-2 rounded-[999px] text-[12px] font-bold cursor-pointer font-sans transition-all duration-200"
              style={{
                background:
                  filter === s
                    ? "linear-gradient(135deg,#1A6FFF,#00B4FF)"
                    : "#fff",
                border: `1.5px solid ${filter === s ? "transparent" : "#DDE6F5"}`,
                color: filter === s ? "#fff" : "#4A6080",
                boxShadow:
                  filter === s
                    ? "0 6px 36px rgba(26,111,255,0.14)"
                    : "none",
              }}
            >
              {s === "all" ? "Semua" : s}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-7 pt-16 pb-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-6">
          {filtered.map((c) => (
            <Card key={c.id} style={{ cursor: "default" }}>
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div
                    className="text-[10px] font-bold tracking-[2px] uppercase mb-[8px]"
                    style={{ color: c.col }}
                  >
                    {c.tag} · {c.loc}
                  </div>
                  <h3
                    className="text-[19px] font-black tracking-[-0.3px] leading-[1.2]"
                    style={{ color: "#1A2B42" }}
                  >
                    {c.title}
                  </h3>
                </div>
              </div>
              <p
                className="text-[13.5px] leading-[1.65] mb-5"
                style={{ color: "#4A6080" }}
              >
                {c.excerpt}
              </p>
              <p
                className="text-[13px] leading-[1.7] mb-6 p-5 rounded-[10px]"
                style={{
                  color: "#4A6080",
                  background: "#F8FAFF",
                  border: "1px solid #DDE6F5",
                }}
              >
                {c.detail}
              </p>
              <div className="grid grid-cols-3 gap-[10px] mb-5">
                {c.stats.map(([v, l]) => (
                  <div
                    key={l}
                    className="rounded-[10px] p-[14px_10px] text-center"
                    style={{ background: "#F8FAFF" }}
                  >
                    <div
                      className="text-[22px] font-black"
                      style={{ color: c.col }}
                    >
                      {v}
                    </div>
                    <div
                      className="text-[10px] mt-[5px] font-bold uppercase tracking-[0.5px]"
                      style={{ color: "#8BA0BA" }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="pt-5 flex justify-between items-center"
                style={{ borderTop: "1px solid #DDE6F5" }}
              >
                <Badge color={c.col} small>
                  {c.service}
                </Badge>
                <Link
                  href="/kontak"
                  className="font-bold text-[13px] no-underline"
                  style={{ color: c.col }}
                >
                  Diskusikan proyek serupa →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 rounded-[18px] p-10 max-md:p-7 text-center"
          style={{
            background: "linear-gradient(135deg,#F8FAFF,#EEF8FF)",
            border: "1.5px solid #DDE6F5",
          }}
        >
          <h3
            className="text-[26px] font-black mb-3 tracking-[-0.5px]"
            style={{ color: "#1A2B42" }}
          >
            Proyek Anda Bisa Menjadi Studi Kasus Berikutnya
          </h3>
          <p
            className="text-[15px] mb-7 max-w-[500px] mx-auto leading-[1.7]"
            style={{ color: "#4A6080" }}
          >
            Konsultasikan kebutuhan bisnis Anda dan biarkan kami merancang solusi
            yang menghasilkan dampak terukur.
          </p>
          <Link href="/kontak">
            <Btn>Mulai Proyek Anda →</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
}
