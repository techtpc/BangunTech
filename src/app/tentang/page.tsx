import Badge from "@/components/Badge";
import Icon from "@/components/Icon";
import Btn from "@/components/Btn";
import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-24 pb-16 text-center"
        style={{
          background: "linear-gradient(135deg,#F8FAFF,#EEF8FF)",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <Badge>Tentang Kami</Badge>
        <h1
          className="text-[clamp(32px,5vw,58px)] font-black tracking-[-2px] mt-4 mb-4"
          style={{ color: "#1A2B42" }}
        >
          Kami Membangun Teknologi
          <br />
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            yang Bermakna
          </span>
        </h1>
        <p
          className="text-[17px] max-w-[580px] mx-auto leading-[1.75]"
          style={{ color: "#4A6080" }}
        >
          BangunTech didirikan dengan satu tujuan: membantu bisnis Indonesia bertumbuh melalui teknologi yang tepat guna.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-7 pt-[72px] pb-[96px]">
        {/* Story */}
        <div className="grid grid-cols-[1fr_1fr] gap-16 max-md:gap-10 items-center max-md:grid-cols-1 mb-20">
          <div>
            <Badge color="#22C55E">Kisah Kami</Badge>
            <h2
              className="text-[clamp(26px,3.5vw,40px)] font-black tracking-[-1px] mt-4 mb-5 leading-[1.1]"
              style={{ color: "#1A2B42" }}
            >
              Mitra Teknologi
              <br />
              Untuk Bisnis Anda
            </h2>
            <p
              className="text-[15px] leading-[1.8] mb-5"
              style={{ color: "#334155" }}
            >
              BangunTech lahir dari pengamatan mendalam bahwa banyak bisnis di
              Indonesia — terutama di sektor properti, keamanan, dan UMKM —
              masih mengoperasikan proses kritis secara manual, padahal solusi
              teknologi yang efektif dan terjangkau sudah tersedia.
            </p>
            <p
              className="text-[15px] leading-[1.8] mb-8"
              style={{ color: "#334155" }}
            >
              Kami tidak hanya membangun perangkat lunak. Kami menjadi mitra
              strategis yang memahami konteks bisnis klien dari dalam — mulai
              dari tantangan operasional sehari-hari hingga target pertumbuhan
              jangka panjang.
            </p>
            <div className="flex gap-10">
              {[
                { v: "2024", l: "Tahun Berdiri" },
                { v: "6+", l: "Lini Produk" },
                { v: "Jakarta", l: "Basis Operasi" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-[28px] font-black tracking-[-1px]"
                    style={{ color: "#1A6FFF" }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="text-[12px] font-semibold"
                    style={{ color: "#8BA0BA" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-[20px] p-10"
            style={{
              background: "linear-gradient(135deg,#EEF3FC,#EEF8FF)",
              border: "1.5px solid #DDE6F5",
              boxShadow: "0 10px 40px -10px rgba(26,111,255,0.08)",
            }}
          >
            <div
              className="text-[11px] font-bold tracking-[2px] uppercase mb-4"
              style={{ color: "#1A6FFF" }}
            >
              Visi & Misi
            </div>
            {[
              {
                icon: "visi",
                t: "Visi",
                d: "Menjadi mitra teknologi pilihan utama bagi bisnis di Indonesia yang ingin memanfaatkan kecerdasan buatan dan otomasi untuk tumbuh lebih efisien.",
              },
              {
                icon: "misi",
                t: "Misi",
                d: "Membangun solusi teknologi yang relevan, terjangkau, dan memberikan dampak nyata bagi operasional dan pendapatan bisnis klien kami.",
              },
              {
                icon: "nilai",
                t: "Nilai",
                d: "Transparansi, integritas teknis, dan kemitraan jangka panjang adalah fondasi setiap hubungan yang kami bangun dengan klien.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="flex gap-5 py-5"
                style={{
                  borderBottom:
                    i < 2 ? "1px solid #DDE6F5" : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "#1A6FFF12", border: "1px solid #1A6FFF22" }}
                >
                  <Icon name={v.icon} size={20} color="#1A6FFF" />
                </div>
                <div>
                  <div
                    className="font-extrabold text-[15px] mb-2"
                    style={{ color: "#1A2B42" }}
                  >
                    {v.t}
                  </div>
                  <div
                    className="text-[13.5px] leading-[1.65]"
                    style={{ color: "#4A6080" }}
                  >
                    {v.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-[24px] p-12 max-md:p-8 flex justify-between items-center flex-wrap gap-8"
          style={{
            background: "linear-gradient(135deg, #0A1628, #1A2B42)",
            boxShadow: "0 20px 50px -15px rgba(10,22,40,0.4)",
          }}
        >
          <div className="max-w-[560px]">
            <Badge color="#00B4FF">Konsultasi Gratis</Badge>
            <h3 className="text-[clamp(22px,3vw,32px)] font-black text-white mt-3 mb-3 tracking-[-0.5px]">
              Siap Bertransformasi Bersama BangunTech?
            </h3>
            <p className="text-[14.5px] leading-[1.7] text-slate-300">
              Diskusikan tantangan operasional dan kebutuhan teknologi bisnis Anda bersama tim pakar kami.
            </p>
          </div>
          <Link href="/kontak" className="no-underline">
            <Btn>Mulai Konsultasi →</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
}
