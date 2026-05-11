import Link from "next/link";
import { SERVICES, LOGO } from "@/data";

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
  { l: "IG", h: "#" },
  { l: "YT", h: "#" },
  { l: "TT", h: "#" },
  { l: "LI", h: "#" },
];

export default function Footer() {
  return (
    <footer className="px-7 pt-[72px] max-md:pt-12 pb-8" style={{ background: "#0A1628" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:gap-8 mb-14 max-md:mb-10 max-lg:grid-cols-2">
          <div>
            <img
              src={LOGO}
              alt="BangunTech"
              className="h-12 mb-5 object-contain brightness-0 invert-[0.9]"
            />
            <p
              className="text-[13px] leading-[1.75] max-w-[300px] mb-7"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Building Solutions, Empowering Futures.
              <br />
              Mitra teknologi terpercaya untuk bisnis Indonesia yang ingin bertumbuh di era digital.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.l}
                  href={s.h}
                  className="w-9 h-9 rounded-[7px] flex items-center justify-center text-[11px] font-extrabold no-underline transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {s.l}
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
            © {new Date().getFullYear()} BangunTech · Divisi dari{" "}
            <span className="font-bold" style={{ color: "#00B4FF" }}>
              The Pitch Creative Media
            </span>
          </div>
          <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            Jakarta · Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
