import { TEAM } from "@/data";
import Btn from "@/components/Btn";
import Badge from "@/components/Badge";
import SectionHead from "@/components/SectionHead";
import Card from "@/components/Card";
import Link from "next/link";

export default function TentangPage() {
  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-20 pb-16 text-center"
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
          BangunTech adalah divisi teknologi dari The Pitch Creative Media,
          didirikan dengan satu tujuan: membantu bisnis Indonesia bertumbuh
          melalui teknologi yang tepat guna.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-7 pt-[72px] pb-[72px]">
        {/* Story */}
        <div className="grid grid-cols-[1fr_1fr] gap-16 mb-24 max-md:mb-16 max-md:gap-10 items-center max-md:grid-cols-1">
          <div>
            <Badge color="#22C55E">Kisah Kami</Badge>
            <h2
              className="text-[clamp(26px,3.5vw,40px)] font-black tracking-[-1px] mt-4 mb-5 leading-[1.1]"
              style={{ color: "#1A2B42" }}
            >
              Dari Agensi Kreatif
              <br />
              Menjadi Mitra Teknologi
            </h2>
            <p
              className="text-[15px] leading-[1.8] mb-5"
              style={{ color: "#4A6080" }}
            >
              BangunTech lahir dari pengamatan mendalam bahwa banyak bisnis di
              Indonesia — terutama di sektor properti, keamanan, dan UMKM —
              masih mengoperasikan proses kritis secara manual, padahal solusi
              teknologi yang efektif dan terjangkau sudah tersedia.
            </p>
            <p
              className="text-[15px] leading-[1.8] mb-8"
              style={{ color: "#4A6080" }}
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
                icon: "🔭",
                t: "Visi",
                d: "Menjadi mitra teknologi pilihan utama bagi bisnis di Indonesia yang ingin memanfaatkan kecerdasan buatan dan otomasi untuk tumbuh lebih efisien.",
              },
              {
                icon: "🎯",
                t: "Misi",
                d: "Membangun solusi teknologi yang relevan, terjangkau, dan memberikan dampak nyata bagi operasional dan pendapatan bisnis klien kami.",
              },
              {
                icon: "💡",
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
                <span className="text-[22px]">{v.icon}</span>
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

        {/* Team */}
        <SectionHead
          badge="Tim Kami"
          title="Orang-orang di Balik BangunTech"
          sub="Tim multidisiplin dengan keahlian di teknologi, desain, konten, dan manajemen bisnis."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-[72px]">
          {TEAM.map((m) => (
            <Card key={m.name} style={{ textAlign: "center" }}>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-[32px]"
                style={{
                  background: "#1A6FFF12",
                  border: "2px solid #DDE6F5",
                }}
              >
                {m.img}
              </div>
              <div
                className="font-extrabold text-[16px] mb-2"
                style={{ color: "#1A2B42" }}
              >
                {m.name}
              </div>
              <div
                className="text-[11px] font-bold tracking-[0.5px] mb-4"
                style={{ color: "#1A6FFF" }}
              >
                {m.role}
              </div>
              <p
                className="text-[12.5px] leading-[1.65]"
                style={{ color: "#4A6080" }}
              >
                {m.bio}
              </p>
            </Card>
          ))}
        </div>

        {/* Connection to TPC */}
        <div
          className="rounded-[20px] p-10 max-md:p-7 flex justify-between items-center flex-wrap gap-8"
          style={{
            background: "linear-gradient(135deg,#F8FAFF,#EEF8FF)",
            border: "1.5px solid #DDE6F5",
          }}
        >
          <div className="max-w-[600px]">
            <div
              className="text-[10px] font-bold tracking-[2px] uppercase mb-3"
              style={{ color: "#1A6FFF" }}
            >
              Entitas Induk
            </div>
            <h3
              className="text-[clamp(20px,3vw,30px)] font-black mb-3 tracking-[-0.5px]"
              style={{ color: "#1A2B42" }}
            >
              The Pitch Creative Media
            </h3>
            <p
              className="text-[14px] leading-[1.75] mb-4"
              style={{ color: "#4A6080" }}
            >
              BangunTech beroperasi sebagai divisi teknologi dari The Pitch
              Creative Media (TPC Media) — agensi kreatif dan digital yang
              berbasis di Jakarta dengan spesialisasi di AI content, social media
              management, dan digital advertising.
            </p>
            <div className="flex gap-4 flex-wrap">
              {[
                "🌐 thepitchcreative.media",
                "📸 @tpcmedia_",
                "▶️ @thepitchcreativemedia",
              ].map((s) => (
                <span
                  key={s}
                  className="text-[12px] font-semibold"
                  style={{ color: "#8BA0BA" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <Link href="/kontak">
            <Btn>Hubungi Tim Kami →</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
}
