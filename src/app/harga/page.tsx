"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import SectionHead from "@/components/SectionHead";
import Btn from "@/components/Btn";
import Link from "next/link";

const tiers = [
  {
    n: "SEO Starter",
    tag: "F&B · UMKM · Startup",
    price: "5.000.000",
    unit: "/bulan",
    features: [
      "Audit teknis & on-page SEO",
      "5 riset kata kunci prioritas",
      "Optimasi Google My Business",
      "On-page untuk 5 halaman",
      "Laporan performa bulanan",
    ],
    col: "#22C55E",
    cta: "Mulai Paket SEO",
  },
  {
    n: "SecureForce Pro",
    tag: "Paket Paling Populer",
    price: "499.000.000",
    unit: "one-time license",
    sub: "+ Rp 25.000.000 / bulan maintenance",
    badge: "★ Terpopuler",
    features: [
      "Platform keamanan lengkap",
      "Integrasi CCTV AI",
      "Kontrol palang pintu otomatis",
      "Aplikasi penghuni (PWA)",
      "Hingga 20 cluster properti",
      "Dukungan prioritas 12 bulan",
    ],
    col: "#1A6FFF",
    cta: "Pilih Paket Pro",
    highlight: true,
  },
  {
    n: "Enterprise",
    tag: "Developer & Korporasi Besar",
    price: "Sesuai Kebutuhan",
    unit: "",
    features: [
      "Seluruh layanan BangunTech",
      "Account manager dedikasi",
      "Opsi deployment on-premise",
      "SLA 99.9% uptime tertulis",
      "Aplikasi native iOS & Android",
      "Kepemilikan kode sumber (source code)",
    ],
    col: "#8B5CF6",
    cta: "Hubungi Sales",
  },
];

const faqs = [
  {
    q: "Apakah ada biaya tersembunyi setelah pembelian?",
    a: "Tidak ada biaya tersembunyi. Setiap biaya sudah terinci dalam proposal yang kami sampaikan. Biaya maintenance opsional dan akan dikomunikasikan secara eksplisit.",
  },
  {
    q: "Berapa lama proses implementasi SecureForce OMS?",
    a: "Rata-rata 30 hari dari penandatanganan kontrak hingga sistem aktif (go-live), tergantung kompleksitas infrastruktur hardware di lokasi klien.",
  },
  {
    q: "Apakah source code menjadi milik klien?",
    a: "Untuk paket Enterprise, kepemilikan source code dapat dinegosiasikan. Untuk paket Pro, klien mendapatkan lisensi penggunaan penuh tanpa batasan.",
  },
  {
    q: "Apakah tersedia garansi atau SLA?",
    a: "Ya. Semua paket disertai SLA uptime 99.9% dan garansi respons support dalam waktu yang telah disepakati dalam kontrak.",
  },
];

export default function HargaPage() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-[72px] pb-14 text-center"
        style={{
          background: "#F8FAFF",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <Badge>Investasi</Badge>
        <h1
          className="text-[clamp(30px,5vw,56px)] font-black tracking-[-2px] mt-4 mb-[14px]"
          style={{ color: "#1A2B42" }}
        >
          Harga{" "}
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            Transparan
          </span>
          , Nilai yang{" "}
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            Terukur
          </span>
        </h1>
        <p
          className="text-[16px] max-w-[560px] mx-auto leading-[1.7]"
          style={{ color: "#4A6080" }}
        >
          Tidak ada biaya tersembunyi. Source code adalah milik Anda. Fleksibel
          dan dapat disesuaikan.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-7 pt-[72px] pb-[72px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-[72px]">
          {tiers.map((t) => (
            <div
              key={t.n}
              className="bg-white rounded-[18px] p-8 max-md:p-6 relative"
              style={{
                border: t.highlight
                  ? `2.5px solid ${t.col}`
                  : "1.5px solid #DDE6F5",
                boxShadow: t.highlight
                  ? "0 12px 60px rgba(26,111,255,0.18)"
                  : "0 2px 20px rgba(26,111,255,0.09)",
                transform: t.highlight ? "scale(1.03)" : "scale(1)",
              }}
            >
              {t.badge && (
                <div
                  className="absolute top-[-14px] left-1/2 -translate-x-1/2 text-white px-[18px] py-[5px] rounded-[999px] text-[11px] font-extrabold tracking-[1px] whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg,#1A6FFF,#00B4FF)",
                    boxShadow: "0 12px 60px rgba(26,111,255,0.18)",
                  }}
                >
                  {t.badge}
                </div>
              )}
              <div className="mb-8">
                <div
                  className="text-[10px] font-bold tracking-[2px] uppercase mb-[6px]"
                  style={{ color: t.col }}
                >
                  {t.tag}
                </div>
                <div
                  className="text-[22px] font-black"
                  style={{ color: "#1A2B42" }}
                >
                  {t.n}
                </div>
              </div>
              <div
                className="pb-8 mb-8"
                style={{ borderBottom: "1px solid #DDE6F5" }}
              >
                <div className="flex items-baseline gap-1 flex-wrap">
                  {t.price !== "Sesuai Kebutuhan" && (
                    <span
                      className="text-[13px] font-bold"
                      style={{ color: "#4A6080" }}
                    >
                      Rp
                    </span>
                  )}
                  <span
                    className={`${t.price.length > 8 ? "text-[24px]" : "text-[36px]"} font-black tracking-[-1px] leading-[1]`}
                    style={{ color: t.col }}
                  >
                    {t.price}
                  </span>
                  <span className="text-[13px]" style={{ color: "#8BA0BA" }}>
                    {t.unit}
                  </span>
                </div>
                {t.sub && (
                  <div className="text-[11px] mt-[6px]" style={{ color: "#8BA0BA" }}>
                    {t.sub}
                  </div>
                )}
              </div>
              <div className="mb-8">
                {t.features.map((f) => (
                  <div
                    key={f}
                    className="flex gap-[10px] py-3 text-[13.5px]"
                    style={{
                      color: "#4A6080",
                      borderBottom: "1px solid #F8FAFF",
                    }}
                  >
                    <span
                      className="font-extrabold flex-shrink-0"
                      style={{ color: t.col }}
                    >
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/kontak">
                <button
                  className="w-full py-[14px] rounded-[10px] text-[14px] font-extrabold cursor-pointer font-sans"
                  style={{
                    background: t.highlight
                      ? "linear-gradient(135deg,#1A6FFF,#00B4FF)"
                      : "transparent",
                    border: t.highlight
                      ? "none"
                      : `2px solid ${t.col}`,
                    color: t.highlight ? "#fff" : t.col,
                    boxShadow: t.highlight
                      ? "0 12px 60px rgba(26,111,255,0.18)"
                      : "none",
                  }}
                >
                  {t.cta} →
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <SectionHead
          badge="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          sub="Jawaban atas pertanyaan umum terkait layanan dan investasi bersama BangunTech."
        />
        <div className="grid gap-3 max-w-[760px] mx-auto">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-[12px] p-6 cursor-pointer"
              style={{
                border: "1.5px solid #DDE6F5",
                boxShadow: "0 2px 20px rgba(26,111,255,0.09)",
              }}
              onClick={() =>
                setSelectedFaq(selectedFaq === i ? null : i)
              }
            >
              <div
                className="font-extrabold text-[15px] mb-3 flex justify-between items-center"
                style={{ color: "#1A2B42" }}
              >
                Q: {f.q}
                <span className="text-[12px]" style={{ color: "#8BA0BA" }}>
                  {selectedFaq === i ? "−" : "+"}
                </span>
              </div>
              {selectedFaq === i && (
                <div
                  className="text-[14px] leading-[1.7]"
                  style={{ color: "#4A6080" }}
                >
                  A: {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
