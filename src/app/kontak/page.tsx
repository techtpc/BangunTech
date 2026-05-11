"use client";

import { useState } from "react";
import { SERVICES } from "@/data";
import Btn from "@/components/Btn";
import Badge from "@/components/Badge";

const inpStyle =
  "w-full px-4 py-3 rounded-[10px] border text-[14px] font-sans transition-colors duration-200 box-border" as const;

export default function KontakPage() {
  const [form, setF] = useState({
    name: "",
    co: "",
    email: "",
    phone: "",
    svc: "secureforce",
    budget: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);
  const upd = (k: string, v: string) =>
    setF((p) => ({ ...p, [k]: v }));

  const send = () => {
    if (!form.name || !form.email) {
      alert("Nama dan Email wajib diisi.");
      return;
    }
    setSent(true);
  };

  const contactInfo = [
    { ic: "📧", l: "Email", v: "hello@banguntech.id" },
    { ic: "📱", l: "WhatsApp", v: "+62 8xx-xxxx-xxxx" },
    { ic: "📍", l: "Kantor", v: "Jakarta · Bandung · Remote-first" },
    {
      ic: "🕐",
      l: "Jam Operasional",
      v: "Senin–Jumat, 09.00–18.00 WIB",
    },
    { ic: "⚡", l: "Waktu Respons", v: "Kurang dari 4 jam (hari kerja)" },
  ];

  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-[72px] pb-14"
        style={{
          background: "#F8FAFF",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-[1fr_1fr] gap-16 max-md:gap-10 items-center max-md:grid-cols-1">
          <div>
            <Badge>Hubungi Kami</Badge>
            <h1
              className="text-[clamp(30px,5vw,54px)] font-black tracking-[-2px] mt-4 mb-4 leading-[1.05]"
              style={{ color: "#1A2B42" }}
            >
              Mari Memulai
              <br />
              <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
                Percakapan
              </span>
            </h1>
            <p
              className="text-[16px] leading-[1.75] mb-10"
              style={{ color: "#4A6080" }}
            >
              Konsultasi gratis 30 menit, tanpa komitmen. Tim kami akan
              menganalisis kebutuhan Anda dan memberikan rekomendasi serta
              estimasi yang realistis.
            </p>
            <div className="flex flex-col gap-5">
              {contactInfo.map((i) => (
                <div
                  key={i.l}
                  className="flex gap-[14px] items-center"
                >
                  <div
                    className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center text-[18px] flex-shrink-0"
                    style={{
                      border: "1.5px solid #DDE6F5",
                      boxShadow:
                        "0 2px 20px rgba(26,111,255,0.09)",
                    }}
                  >
                    {i.ic}
                  </div>
                  <div>
                    <div
                      className="text-[11px] font-bold uppercase tracking-[1px]"
                      style={{ color: "#8BA0BA" }}
                    >
                      {i.l}
                    </div>
                    <div
                      className="text-[14px] font-semibold"
                      style={{ color: "#1A2B42" }}
                    >
                      {i.v}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-white rounded-[20px] p-10 max-md:p-7"
            style={{
              border: "1.5px solid #DDE6F5",
              boxShadow: "0 12px 60px rgba(26,111,255,0.18)",
            }}
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-[60px] mb-4">✅</div>
                <h3
                  className="text-[24px] font-black mb-2"
                  style={{ color: "#1A2B42" }}
                >
                  Pesan Terkirim!
                </h3>
                <p className="text-[15px]" style={{ color: "#4A6080" }}>
                  Tim kami akan merespons dalam 4 jam kerja. Terima kasih
                  telah menghubungi BangunTech.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="text-[20px] font-black mb-8"
                  style={{ color: "#1A2B42" }}
                >
                  Kirim Pesan
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                      style={{ color: "#8BA0BA" }}>
                      Nama Lengkap *
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => upd("name", e.target.value)}
                      className={inpStyle}
                      placeholder="Nama Anda"
                      style={{
                        border: "1.5px solid #DDE6F5",
                        background: "#FAFCFF",
                        color: "#1A2B42",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                      style={{ color: "#8BA0BA" }}>
                      Perusahaan
                    </label>
                    <input
                      value={form.co}
                      onChange={(e) => upd("co", e.target.value)}
                      className={inpStyle}
                      placeholder="Nama perusahaan"
                      style={{
                        border: "1.5px solid #DDE6F5",
                        background: "#FAFCFF",
                        color: "#1A2B42",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                      style={{ color: "#8BA0BA" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => upd("email", e.target.value)}
                      className={inpStyle}
                      placeholder="email@perusahaan.com"
                      style={{
                        border: "1.5px solid #DDE6F5",
                        background: "#FAFCFF",
                        color: "#1A2B42",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                      style={{ color: "#8BA0BA" }}>
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => upd("phone", e.target.value)}
                      className={inpStyle}
                      placeholder="+62 8xx-xxxx-xxxx"
                      style={{
                        border: "1.5px solid #DDE6F5",
                        background: "#FAFCFF",
                        color: "#1A2B42",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                    style={{ color: "#8BA0BA" }}>
                    Layanan yang Diminati
                  </label>
                  <select
                    value={form.svc}
                    onChange={(e) => upd("svc", e.target.value)}
                    className={inpStyle}
                    style={{
                      border: "1.5px solid #DDE6F5",
                      background: "#FAFCFF",
                      color: "#1A2B42",
                      outline: "none",
                    }}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">
                      Lainnya / Belum yakin
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                    style={{ color: "#8BA0BA" }}>
                    Estimasi Anggaran
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => upd("budget", e.target.value)}
                    className={inpStyle}
                    style={{
                      border: "1.5px solid #DDE6F5",
                      background: "#FAFCFF",
                      color: "#1A2B42",
                      outline: "none",
                    }}
                  >
                    <option value="">Pilih estimasi anggaran</option>
                    <option value="<50jt">
                      Di bawah Rp 50.000.000
                    </option>
                    <option value="50-200jt">
                      Rp 50.000.000 – Rp 200.000.000
                    </option>
                    <option value="200-500jt">
                      Rp 200.000.000 – Rp 500.000.000
                    </option>
                    <option value=">500jt">
                      Di atas Rp 500.000.000
                    </option>
                    <option value="monthly">
                      Model berlangganan bulanan
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[11px] font-bold uppercase tracking-[1px] mb-2"
                    style={{ color: "#8BA0BA" }}>
                    Deskripsi Kebutuhan
                  </label>
                  <textarea
                    value={form.msg}
                    onChange={(e) => upd("msg", e.target.value)}
                    rows={4}
                    className={inpStyle}
                    placeholder="Ceritakan kebutuhan atau tantangan bisnis Anda..."
                    style={{
                      border: "1.5px solid #DDE6F5",
                      background: "#FAFCFF",
                      color: "#1A2B42",
                      outline: "none",
                      resize: "vertical",
                      minHeight: 100,
                    }}
                  />
                </div>
                <Btn onClick={send} full>
                  Kirim Pesan →
                </Btn>
                <p
                  className="text-[11px] text-center mt-3"
                  style={{ color: "#8BA0BA" }}
                >
                  Kami akan merespons dalam 4 jam kerja · Konsultasi
                  gratis, tanpa komitmen
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
