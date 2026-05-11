import { BLOG_POSTS } from "@/data";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Btn from "@/components/Btn";

export default function BlogPage() {
  return (
    <div className="pt-[68px]">
      <div
        className="px-7 pt-[72px] pb-14 text-center"
        style={{
          background: "#F8FAFF",
          borderBottom: "1px solid #DDE6F5",
        }}
      >
        <Badge>Insights & Artikel</Badge>
        <h1
          className="text-[clamp(30px,5vw,56px)] font-black tracking-[-2px] mt-4 mb-[14px]"
          style={{ color: "#1A2B42" }}
        >
          Pengetahuan untuk
          <br />
          <span className="bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] bg-clip-text text-transparent">
            Bisnis yang Lebih Cerdas
          </span>
        </h1>
        <p
          className="text-[16px] max-w-[520px] mx-auto leading-[1.7]"
          style={{ color: "#4A6080" }}
        >
          Artikel, panduan, dan analisis dari tim BangunTech mengenai teknologi,
          SEO, dan digitalisasi bisnis di Indonesia.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-7 pt-16 pb-16">
        {/* Featured */}
        <div
          className="bg-white rounded-[20px] p-10 max-md:p-7 mb-12 max-md:mb-8 grid grid-cols-[1fr_auto] gap-10 max-md:gap-6 items-center max-md:grid-cols-1"
          style={{
            border: "1.5px solid #DDE6F5",
            boxShadow: "0 6px 36px rgba(26,111,255,0.14)",
          }}
        >
          <div>
            <div className="flex gap-[10px] items-center mb-5">
              <Badge color="#1A6FFF" small>
                Artikel Unggulan
              </Badge>
              <span className="text-[12px]" style={{ color: "#8BA0BA" }}>
                {BLOG_POSTS[0].date}
              </span>
              <span className="text-[12px]" style={{ color: "#8BA0BA" }}>
                · {BLOG_POSTS[0].readTime} baca
              </span>
            </div>
            <h2
              className="text-[clamp(20px,3vw,30px)] font-black tracking-[-0.8px] mb-[14px] leading-[1.2]"
              style={{ color: "#1A2B42" }}
            >
              {BLOG_POSTS[0].title}
            </h2>
            <p
              className="text-[15px] leading-[1.75] mb-7"
              style={{ color: "#4A6080" }}
            >
              {BLOG_POSTS[0].excerpt}
            </p>
            <button
              className="font-bold text-[14px] bg-none border-none cursor-pointer font-sans p-0"
              style={{ color: "#1A6FFF" }}
            >
              Baca Selengkapnya →
            </button>
          </div>
          <div
            className="w-20 h-20 rounded-[16px] flex items-center justify-center text-[40px] flex-shrink-0"
            style={{
              background: "#1A6FFF12",
              border: "2px solid #DDE6F5",
            }}
          >
            🤖
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {BLOG_POSTS.slice(1).map((p) => (
            <Card key={p.id} style={{ cursor: "pointer" }}>
              <div className="flex justify-between items-center mb-4">
                <Badge color="#1A6FFF" small>
                  {p.cat}
                </Badge>
                <span className="text-[11px]" style={{ color: "#8BA0BA" }}>
                  {p.date}
                </span>
              </div>
              <h3
                className="text-[17px] font-extrabold tracking-[-0.3px] mb-4 leading-[1.3]"
                style={{ color: "#1A2B42" }}
              >
                {p.title}
              </h3>
              <p
                className="text-[13.5px] leading-[1.65] mb-5"
                style={{ color: "#4A6080" }}
              >
                {p.excerpt}
              </p>
              <div
                className="flex justify-between items-center pt-5"
                style={{ borderTop: "1px solid #DDE6F5" }}
              >
                <span className="text-[12px]" style={{ color: "#8BA0BA" }}>
                  🕐 {p.readTime} baca
                </span>
                <button
                  className="font-bold text-[13px] bg-none border-none cursor-pointer font-sans"
                  style={{ color: "#1A6FFF" }}
                >
                  Baca →
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-10 pt-10"
          style={{ borderTop: "1px solid #DDE6F5" }}
        >
          <p
            className="text-[15px] mb-5"
            style={{ color: "#4A6080" }}
          >
            Dapatkan artikel terbaru langsung di inbox Anda.
          </p>
          <div className="flex gap-3 justify-center max-w-[400px] mx-auto">
            <input
              placeholder="Alamat email Anda"
              className="flex-1 rounded-[10px] px-4 py-3 text-[14px] border font-sans"
              style={{
                border: "1.5px solid #DDE6F5",
                background: "#FAFCFF",
                color: "#1A2B42",
                outline: "none",
              }}
            />
            <Btn style={{ flexShrink: 0 }}>Berlangganan</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
