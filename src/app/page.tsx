"use client";

import Link from "next/link";
import { SERVICES, CASES } from "@/data";
import Btn from "@/components/Btn";
import Badge from "@/components/Badge";
import SectionHead from "@/components/SectionHead";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center px-7 pt-[120px] pb-20 relative overflow-hidden bg-white"
      >
        <div
          className="absolute top-[-15%] right-[-8%] w-[55%] h-[130%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse,#EEF3FF 0%,rgba(26,111,255,0.04) 50%,transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(#DDE6F5 1px,transparent 1px),linear-gradient(90deg,#DDE6F5 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-[1200px] mx-auto w-full relative z-[1]">
          <div className="grid grid-cols-[1.15fr_0.85fr] gap-[72px] max-lg:gap-10 items-center max-lg:grid-cols-1">
            <div>
              <div className="mb-6 flex items-center gap-[10px]">
                <div
                  className="w-2 h-2 rounded-full animate-[pulse_2s_infinite]"
                  style={{ background: "#22C55E", boxShadow: "0 0 10px #22C55E88" }}
                />
                <span
                  className="text-[12px] font-semibold"
                  style={{ color: "#4A6080" }}
                >
                  Sistem Aktif · 99.9% Uptime · Respons &lt;4 Jam
                </span>
              </div>
              <h1
                className="text-[clamp(40px,6vw,76px)] font-black leading-[1] tracking-[-2.5px] mb-6"
                style={{ color: "#1A2B42" }}
              >
                Solusi Teknologi
                <br />
                <span
                  className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent"
                >
                  untuk Bisnis
                </span>
                <br />
                yang Bertumbuh.
              </h1>
              <p
                className="text-[clamp(15px,1.6vw,18px)] leading-[1.75] max-w-[520px] mb-10"
                style={{ color: "#4A6080" }}
              >
                Dari platform keamanan properti berbasis AI hingga optimasi mesin
                pencari — kami membangun teknologi yang benar-benar bekerja untuk
                bisnis Indonesia.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <Link href="/kontak">
                  <Btn>Konsultasi Gratis →</Btn>
                </Link>
                <Link href="/layanan">
                  <Btn variant="outline">Lihat Semua Layanan</Btn>
                </Link>
              </div>
              <div className="flex gap-3 flex-wrap">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={"/layanan/" + s.id}
                    className="px-[14px] py-[6px] rounded-[999px] text-[12px] font-semibold no-underline transition-all duration-200 hover:border-[#1A6FFF] hover:text-[#1A6FFF]"
                    style={{
                      background: "#F8FAFF",
                      border: "1px solid #DDE6F5",
                      color: "#4A6080",
                    }}
                  >
                    {s.icon} {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="relative max-lg:hidden">
              <div
                className="bg-white rounded-[20px] p-6"
                style={{
                  boxShadow: "0 12px 60px rgba(26,111,255,0.18)",
                  border: "1.5px solid #DDE6F5",
                }}
              >
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <div
                      className="text-[11px] font-bold tracking-[1px] uppercase mb-[2px]"
                      style={{ color: "#8BA0BA" }}
                    >
                      SecureForce OMS
                    </div>
                    <div
                      className="text-[17px] font-extrabold"
                      style={{ color: "#1A2B42" }}
                    >
                      Dashboard Keamanan
                    </div>
                  </div>
                  <Badge small color="#22C55E">
                    LIVE
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-[10px] mb-[18px]">
                  {[
                    { l: "Security", v: "24", c: "#22C55E" },
                    { l: "Kamera", v: "8/8", c: "#1A6FFF" },
                    { l: "Gate", v: "3", c: "#F59E0B" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-[10px] p-[14px_10px] text-center"
                      style={{ background: "#F8FAFF" }}
                    >
                      <div
                        className="text-[22px] font-black"
                        style={{ color: s.c }}
                      >
                        {s.v}
                      </div>
                      <div
                        className="text-[10px] font-semibold mt-[2px]"
                        style={{ color: "#8BA0BA" }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
                {[
                  ["Tingkat Kehadiran", 95, "#22C55E"],
                  ["Uptime CCTV", 100, "#1A6FFF"],
                  ["Adopsi Aplikasi", 83, "#8B5CF6"],
                ].map(([l, v, c]) => (
                  <div key={l as string} className="mb-[10px]">
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-[12px] font-semibold"
                        style={{ color: "#4A6080" }}
                      >
                        {l as string}
                      </span>
                      <span
                        className="text-[12px] font-extrabold"
                        style={{ color: c as string }}
                      >
                        {v as number}%
                      </span>
                    </div>
                    <div
                      className="h-[6px] rounded-[99px] overflow-hidden"
                      style={{ background: "#F8FAFF" }}
                    >
                      <div
                        className="h-full rounded-[99px]"
                        style={{
                          width: `${v as number}%`,
                          background: `linear-gradient(90deg,${c as string},${(c as string) + "99"})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="absolute top-[-18px] right-[-14px] bg-white rounded-[12px] p-[12px_16px] flex gap-[10px] items-center animate-[bob1_4s_ease-in-out_infinite]"
                style={{
                  boxShadow: "0 6px 36px rgba(26,111,255,0.14)",
                  border: "1.5px solid #DDE6F5",
                }}
              >
                <div
                  className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-[18px]"
                  style={{ background: "#1A6FFF15" }}
                >
                  🤖
                </div>
                <div>
                  <div className="text-[12px] font-extrabold" style={{ color: "#1A2B42" }}>
                    AI Terdeteksi
                  </div>
                  <div className="text-[10px] font-bold" style={{ color: "#22C55E" }}>
                    ● 3 personel dikenali
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-[-14px] left-[-18px] bg-white rounded-[12px] p-[12px_16px] flex gap-[10px] items-center animate-[bob2_5s_ease-in-out_infinite]"
                style={{
                  boxShadow: "0 6px 36px rgba(26,111,255,0.14)",
                  border: "1.5px solid #DDE6F5",
                }}
              >
                <div
                  className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-[18px]"
                  style={{ background: "#22C55E15" }}
                >
                  📈
                </div>
                <div>
                  <div className="text-[12px] font-extrabold" style={{ color: "#1A2B42" }}>
                    SEO Traffic
                  </div>
                  <div className="text-[10px] font-bold" style={{ color: "#22C55E" }}>
                    ↑ +340% organik
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-4 mt-[72px] max-lg:grid-cols-2 max-sm:grid-cols-2"
            style={{
              borderTop: "1px solid #DDE6F5",
              borderBottom: "1px solid #DDE6F5",
            }}
          >
            {[
              { v: "6+", l: "Lini Layanan" },
              { v: "47%", l: "Rata-rata Penghematan Biaya" },
              { v: "30 Hari", l: "Kontrak hingga Go-Live" },
              { v: "99.9%", l: "Uptime SLA Terjamin" },
            ].map((s, i) => (
              <div
                key={i}
                className="py-8 text-center"
                style={{
                  borderRight: i < 3 ? "1px solid #DDE6F5" : "none",
                }}
              >
                <div
                  className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] leading-[1] bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent"
                >
                  {s.v}
                </div>
                <div
                  className="text-[13px] max-sm:text-[12px] mt-[8px] font-semibold"
                  style={{ color: "#4A6080" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-7 py-24" style={{ background: "#F8FAFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHead
            badge="Layanan Kami"
            title={
              <>
                6 Layanan Terintegrasi,{" "}
                <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
                  Satu Tim Eksekutor
                </span>
              </>
            }
            sub="Tidak perlu melibatkan banyak vendor. Kami menyediakan solusi teknologi end-to-end yang dirancang khusus untuk kebutuhan bisnis Indonesia."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} href={"/layanan/" + s.id} className="no-underline">
                <Card>
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center text-[24px]"
                      style={{
                        background: `${s.col}12`,
                        border: `1.5px solid ${s.col}22`,
                      }}
                    >
                      {s.icon}
                    </div>
                    {s.badge && (
                      <Badge color={s.badge === "NEW" ? "#22C55E" : s.col} small>
                        {s.badge}
                      </Badge>
                    )}
                  </div>
                  <div
                    className="text-[10px] font-bold tracking-[1.5px] uppercase mb-1"
                    style={{ color: s.col }}
                  >
                    {s.sub}
                  </div>
                  <h3
                    className="text-[18px] font-extrabold mb-3"
                    style={{ color: "#1A2B42" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[13.5px] leading-[1.65] mb-5"
                    style={{ color: "#4A6080" }}
                  >
                    {s.desc.substring(0, 120)}...
                  </p>
                  <div
                    className="flex justify-between items-center pt-5"
                    style={{ borderTop: "1px solid #DDE6F5" }}
                  >
                    <span
                      className="font-extrabold text-[14px]"
                      style={{ color: s.col }}
                    >
                      {s.price}
                    </span>
                    <button
                      className="rounded-[8px] px-[14px] py-[7px] text-[12px] font-bold cursor-pointer font-sans"
                      style={{
                        background: `${s.col}10`,
                        border: `1.5px solid ${s.col}30`,
                        color: s.col,
                      }}
                    >
                      Detail →
                    </button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-7 py-24 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <SectionHead
            badge="Cara Kerja"
            title="Proses yang Terstruktur, Hasil yang Terukur"
            sub="Empat tahap yang telah terbukti menghasilkan proyek tepat waktu, sesuai anggaran, dan sesuai ekspektasi klien."
            accent="#22C55E"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {[
              {
                n: "01",
                ic: "🎯",
                t: "Penemuan & Analisis",
                d: "Konsultasi gratis 30 menit. Kami memahami kebutuhan, tantangan, dan anggaran Anda sebelum merekomendasikan solusi apapun.",
              },
              {
                n: "02",
                ic: "📋",
                t: "Proposal & Persetujuan",
                d: "Proposal kustom dengan rincian teknis, jadwal pelaksanaan, dan harga yang transparan. Disampaikan dalam 3 hari kerja.",
              },
              {
                n: "03",
                ic: "⚡",
                t: "Pengembangan Sprint",
                d: "Pengembangan berbasis sprint dengan pembaruan progres mingguan. Anda selalu mengetahui perkembangan proyek secara real-time.",
              },
              {
                n: "04",
                ic: "🚀",
                t: "Peluncuran & Dukungan",
                d: "Peluncuran produksi disertai pelatihan tim, monitoring 30 hari, dan paket dukungan berkelanjutan sesuai kebutuhan.",
              },
            ].map((s) => (
              <Card key={s.n}>
                <div
                  className="w-[44px] h-[44px] rounded-full flex items-center justify-center text-[15px] font-extrabold mb-5 text-white"
                  style={{
                    background: "linear-gradient(135deg,#1A6FFF,#00B4FF)",
                    boxShadow: "0 4px 16px rgba(26,111,255,0.2)",
                  }}
                >
                  {s.n}
                </div>
                <div className="text-[30px] mb-4">{s.ic}</div>
                <h3
                  className="text-[17px] font-extrabold mb-3"
                  style={{ color: "#1A2B42" }}
                >
                  {s.t}
                </h3>
                <p
                  className="text-[13.5px] leading-[1.65]"
                  style={{ color: "#4A6080" }}
                >
                  {s.d}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="px-7 py-24" style={{ background: "#F8FAFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHead
            badge="Hasil Nyata"
            title="Dipercaya oleh Bisnis yang Bertumbuh"
            sub="Setiap angka mencerminkan dampak nyata yang kami hasilkan bersama klien kami."
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-6 mb-10">
            {CASES.slice(0, 2).map((c) => (
              <Card key={c.id}>
                <div
                  className="text-[10px] font-bold tracking-[2px] uppercase mb-3"
                  style={{ color: c.col }}
                >
                  {c.tag} · {c.loc}
                </div>
                <h3
                  className="text-[21px] font-black leading-[1.2] mb-4 tracking-[-0.4px]"
                  style={{ color: "#1A2B42" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.65] mb-7"
                  style={{ color: "#4A6080" }}
                >
                  {c.excerpt}
                </p>
                <div className="grid grid-cols-3 gap-[10px]">
                  {c.stats.map(([v, l]) => (
                    <div
                      key={l}
                      className="rounded-[10px] p-[14px_10px] text-center"
                      style={{ background: "#F8FAFF" }}
                    >
                      <div
                        className="text-[22px] font-black tracking-[-0.5px]"
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
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/studi-kasus">
              <Btn variant="outline">Lihat Semua Studi Kasus →</Btn>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-7 py-20 bg-white">
        <div
          className="max-w-[800px] mx-auto text-center py-[60px] px-6 max-md:px-6 md:px-12 rounded-[24px]"
          style={{
            background: "linear-gradient(135deg,#F8FAFF,#EEF8FF)",
            border: "1.5px solid #DDE6F5",
            boxShadow: "0 6px 36px rgba(26,111,255,0.14)",
          }}
        >
          <Badge>Mulai Sekarang</Badge>
          <h2
            className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.5px] mt-4 mb-[14px]"
            style={{ color: "#1A2B42" }}
          >
            Siap Membawa Bisnis Anda
            <br />
            ke Tingkat Berikutnya?
          </h2>
          <p
            className="text-[16px] mb-8 leading-[1.7]"
            style={{ color: "#4A6080" }}
          >
            Konsultasi gratis 30 menit. Kami akan menganalisis kebutuhan Anda dan
            memberikan estimasi ROI yang realistis — tanpa komitmen.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/kontak">
              <Btn>Jadwalkan Konsultasi Gratis</Btn>
            </Link>
            <Link href="/harga">
              <Btn variant="outline">Lihat Paket & Harga</Btn>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
