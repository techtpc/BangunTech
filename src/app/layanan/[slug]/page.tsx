"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { SERVICES } from "@/data";
import Btn from "@/components/Btn";
import Badge from "@/components/Badge";
import SectionHead from "@/components/SectionHead";
import Card from "@/components/Card";
import Divider from "@/components/Divider";
import Icon from "@/components/Icon";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.slug as string;
  const svc = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const others = SERVICES.filter((s) => s.id !== serviceId).slice(0, 3);

  return (
    <div className="pt-[68px]">
      {/* Hero */}
      <div
        className="px-8 pt-24 pb-20"
        style={{
          background: "linear-gradient(135deg,#F8FAFF,#EEF8FF)",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-[6px] text-[13px] font-semibold no-underline mb-4"
            style={{ color: "#4A6080" }}
          >
            ← Semua Layanan
          </Link>
          <div className="flex gap-3 items-center mb-5 mt-4">
            <Badge color={svc.col}>{svc.sub}</Badge>
            {svc.badge && (
              <Badge color={svc.badge === "NEW" ? "#22C55E" : svc.col} small>
                {svc.badge}
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-10 items-center max-md:grid-cols-1">
            <div>
              <h1
                className="text-[clamp(32px,5vw,60px)] font-black tracking-[-2px] mb-5 leading-[1.05]"
                style={{ color: "#1A2B42" }}
              >
                {svc.title}
              </h1>
              <p
                className="text-[17px] max-w-[620px] leading-[1.75] mb-9"
                style={{ color: "#4A6080" }}
              >
                {svc.desc}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/kontak">
                  <Btn>Diskusikan Proyek Ini →</Btn>
                </Link>
                <Link href="/harga">
                  <Btn variant="outline">Lihat Harga</Btn>
                </Link>
                {svc.id === "secureforce" && (
                  <Link href="/demo">
                    <Btn
                      style={{
                        background: "#f59e0b",
                        boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
                      }}
                    >
                      <span className="flex items-center gap-1.5"><Icon name="play" size={15} color="#fff" /> Live Demo</span>
                    </Btn>
                  </Link>
                )}
              </div>
            </div>
            <div className="text-center max-md:hidden">
              <div
                className="w-[120px] h-[120px] rounded-[28px] flex items-center justify-center"
                style={{
                  background: `${svc.col}18`,
                  border: `3px solid ${svc.col}33`,
                  boxShadow: `0 8px 40px ${svc.col}22`,
                }}
              >
                <Icon name={svc.id} size={56} color={svc.col} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[1280px] mx-auto px-8 pt-[90px] pb-[90px]">
        <div className="grid grid-cols-[1fr_1fr] gap-12 mb-[90px] max-md:grid-cols-1">
          <div>
            <SectionHead
              badge="Fitur Utama"
              title="Yang Anda Dapatkan"
              center={false}
            />
            <div className="grid gap-4">
              {svc.features.map((f, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start bg-white rounded-[12px] p-5"
                  style={{
                    border: "1.5px solid #DDE6F5",
                    boxShadow: "0 2px 20px rgba(26,111,255,0.09)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-[8px] flex items-center justify-center text-[13px] font-extrabold flex-shrink-0"
                    style={{
                      background: `${svc.col}12`,
                      border: `1px solid ${svc.col}22`,
                      color: svc.col,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    className="text-[14px] font-semibold pt-1"
                    style={{ color: "#1A2B42" }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHead
              badge="Investasi"
              title="Paket & Harga"
              center={false}
            />
            <div
              className="bg-white rounded-[18px] p-10"
              style={{
                border: `2px solid ${svc.col}`,
                boxShadow: "0 12px 60px rgba(26,111,255,0.18)",
              }}
            >
              <div
                className="text-[10px] font-bold tracking-[2px] uppercase mb-3"
                style={{ color: svc.col }}
              >
                Mulai dari
              </div>
              <div
                className="text-[40px] font-black tracking-[-1.5px] leading-[1] mb-2"
                style={{ color: svc.col }}
              >
                {svc.price}
              </div>
              <div
                className="text-[13px] mb-8"
                style={{ color: "#8BA0BA" }}
              >
                {svc.unit}
              </div>
              <Divider />
              <div
                className="py-6 text-[14px] leading-[1.75]"
                style={{ color: "#4A6080" }}
              >
                <strong style={{ color: "#1A2B42" }}>
                  Target klien ideal:
                </strong>
                <br />
                {svc.target}
              </div>
              <Divider />
              <div className="py-6 pb-7">
                <div
                  className="text-[13px] mb-1"
                  style={{ color: "#4A6080" }}
                >
                  🕐 Timeline implementasi
                </div>
                <div className="font-bold" style={{ color: "#1A2B42" }}>
                  30 hari dari penandatanganan kontrak
                </div>
              </div>
              <Link href="/kontak">
                <Btn full>Minta Proposal Gratis →</Btn>
              </Link>
              <p
                className="text-[11px] text-center mt-4"
                style={{ color: "#8BA0BA" }}
              >
                Tanpa biaya & tanpa komitmen
              </p>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="rounded-[18px] p-12 flex justify-between items-center flex-wrap gap-6"
          style={{
            background: `linear-gradient(135deg,${svc.col}0A,${svc.col}18)`,
            border: `1.5px solid ${svc.col}30`,
          }}
        >
          <div>
            <div
              className="text-[20px] font-black mb-2"
              style={{ color: "#1A2B42" }}
            >
              Tertarik dengan {svc.title}?
            </div>
            <div className="text-[14px]" style={{ color: "#4A6080" }}>
              Jadwalkan konsultasi gratis dan dapatkan proposal kustom dalam 3
              hari kerja.
            </div>
          </div>
          <Link href="/kontak">
            <Btn
              style={{
                background: svc.col,
                boxShadow: `0 6px 24px ${svc.col}44`,
              }}
            >
              Konsultasi Sekarang →
            </Btn>
          </Link>
        </div>

        {/* Other services */}
        <div className="mt-[90px]">
          <h3
            className="text-[22px] font-extrabold mb-8"
            style={{ color: "#1A2B42" }}
          >
            Layanan Lainnya
          </h3>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {others.map((s) => (
              <Link
                key={s.id}
                href={"/layanan/" + s.id}
                className="no-underline"
              >
                <Card>
                  <div className="flex gap-3 items-center mb-3">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center"
                      style={{ background: `${s.col}12` }}
                    >
                      <Icon name={s.id} size={20} color={s.col} />
                    </div>
                    <div
                      className="font-extrabold text-[15px]"
                      style={{ color: "#1A2B42" }}
                    >
                      {s.title}
                    </div>
                  </div>
                  <p
                    className="text-[13px] leading-[1.6] mb-5"
                    style={{ color: "#4A6080" }}
                  >
                    {s.tagline}
                  </p>
                  <span
                    className="font-bold text-[13px]"
                    style={{ color: s.col }}
                  >
                    Pelajari lebih lanjut →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
