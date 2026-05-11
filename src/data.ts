export const LOGO = "/logo%20banguntech.png";

export const C = {
  white: "#FFFFFF",
  bg: "#F8FAFF",
  bg2: "#EEF3FC",
  dark: "#0A1628",
  dark2: "#1E2E45",
  text: "#1A2B42",
  textSub: "#4A6080",
  textMut: "#8BA0BA",
  blue: "#1A6FFF",
  blueD: "#0D52CC",
  blueL: "#4F95FF",
  cyan: "#00B4FF",
  grad: "linear-gradient(135deg,#1A6FFF,#00B4FF)",
  gradD: "linear-gradient(135deg,#0D52CC,#1A6FFF)",
  border: "#DDE6F5",
  shadow: "0 2px 20px rgba(26,111,255,0.09)",
  shadowMd: "0 6px 36px rgba(26,111,255,0.14)",
  shadowLg: "0 12px 60px rgba(26,111,255,0.18)",
};

export interface Service {
  id: string;
  slug: string;
  icon: string;
  badge: string | null;
  title: string;
  sub: string;
  tagline: string;
  desc: string;
  features: string[];
  col: string;
  price: string;
  unit: string;
  target: string;
}

export const SERVICES: Service[] = [
  {
    id: "secureforce",
    slug: "secureforce",
    icon: "🛡️",
    badge: "FLAGSHIP",
    title: "SecureForce OMS",
    sub: "Smart Security & Property Management",
    tagline: "Sistem manajemen keamanan terintegrasi untuk era modern.",
    desc: "Platform end-to-end yang menyatukan manajemen personel security, CCTV berbasis AI, kontrol akses palang pintu otomatis, dan aplikasi penghuni properti dalam satu ekosistem digital.",
    features: [
      "Absensi otomatis via AI Face Recognition",
      "Monitoring CCTV 24/7 dengan deteksi cerdas",
      "Kontrol palang pintu (RFID · ANPR · QR Code)",
      "Aplikasi penghuni untuk komunikasi & pelaporan",
      "Laporan PDF & Excel otomatis setiap bulan",
      "Portal terpisah untuk klien & outsourcing",
    ],
    col: "#1A6FFF",
    price: "Mulai Rp 189.000.000",
    unit: "one-time license",
    target: "Outsourcing security · Developer properti · Pengelola gedung & mal",
  },
  {
    id: "seo",
    slug: "seo",
    icon: "📈",
    badge: "NEW",
    title: "BangunTech SEO",
    sub: "Optimasi Mesin Pencari Lokal & AI",
    tagline: "Visibilitas bisnis Anda di Google, Perplexity, dan ChatGPT Search.",
    desc: "Strategi SEO komprehensif yang mencakup technical audit, optimasi pencarian lokal, dan AI Search Optimization (GEO/AEO) — dirancang khusus untuk bisnis Indonesia yang ingin mendominasi hasil pencarian.",
    features: [
      "Audit teknis & on-page SEO mendalam",
      "Optimasi Google My Business (Peta & Lokal)",
      "AI Search Optimization untuk Perplexity & ChatGPT",
      "Strategi konten berbasis data & riset kata kunci",
      "Pembuatan tautan berkualitas (link building)",
      "Laporan performa bulanan yang transparan",
    ],
    col: "#22C55E",
    price: "Mulai Rp 5.000.000",
    unit: "per bulan",
    target: "Restoran & F&B · Properti · Klinik & kesehatan · Jasa profesional",
  },
  {
    id: "cctv",
    slug: "cctv",
    icon: "📹",
    badge: null,
    title: "Integrasi CCTV AI",
    sub: "Pengawasan Cerdas Berbasis Kecerdasan Buatan",
    tagline: "CCTV yang tidak sekadar merekam — tetapi berpikir dan memberi peringatan.",
    desc: "Integrasi sistem kamera CCTV (Hikvision, Dahua, Uniview) dengan engine AI untuk deteksi wajah, pengenalan plat nomor (ANPR), deteksi penyusup, dan peringatan otomatis secara real-time.",
    features: [
      "Kompatibel dengan kamera ONVIF (brand apapun)",
      "VMS berbasis Frigate (open-source, on-premise)",
      "Pengenalan wajah & database whitelist",
      "ANPR untuk identifikasi kendaraan otomatis",
      "Alert real-time ke dashboard & WhatsApp",
      "Penyimpanan rekaman cloud 30 hari",
    ],
    col: "#8B5CF6",
    price: "Berdasarkan kebutuhan",
    unit: "custom quote",
    target: "Komplek perumahan · Mal & gedung komersial · Industri & manufaktur",
  },
  {
    id: "autopost",
    slug: "autopost",
    icon: "🤖",
    badge: null,
    title: "AutoPost AI",
    sub: "Otomasi Konten Media Sosial",
    tagline: "Kelola media sosial bisnis Anda secara efisien dengan kecerdasan buatan.",
    desc: "Platform otomasi konten yang mengintegrasikan AI untuk menghasilkan caption, hashtag, dan jadwal posting ke Instagram, TikTok, Facebook, dan LinkedIn — menghemat hingga 80% waktu tim pemasaran.",
    features: [
      "Generator caption AI berbasis konteks brand",
      "Posting serentak ke multi-platform",
      "Kalender konten bulanan otomatis",
      "Integrasi notifikasi WhatsApp",
      "Dashboard analitik performa konten",
      "Template visual siap pakai per industri",
    ],
    col: "#F59E0B",
    price: "Mulai Rp 2.500.000",
    unit: "per bulan",
    target: "UMKM & brand lokal · Agen properti · Restoran & retail · Klinik",
  },
  {
    id: "custom",
    slug: "custom",
    icon: "💻",
    badge: null,
    title: "Pengembangan Software",
    sub: "Aplikasi Web & Mobile Sesuai Kebutuhan",
    tagline: "Dari konsep hingga produksi — solusi digital yang dibangun tepat untuk bisnis Anda.",
    desc: "Pengembangan aplikasi web dan mobile dari nol menggunakan teknologi modern. Cocok untuk SaaS, marketplace, dashboard internal, atau platform bisnis khusus. Metodologi sprint-based dengan update mingguan.",
    features: [
      "Frontend: React & Next.js",
      "Mobile: React Native (iOS & Android)",
      "Backend: Node.js + PostgreSQL + Supabase",
      "Deployment cloud (Vercel, AWS, GCP)",
      "UI/UX design professional",
      "Garansi bug fix 30 hari pasca-launch",
    ],
    col: "#EC4899",
    price: "Mulai Rp 75.000.000",
    unit: "per proyek",
    target: "Startup & scale-up · Perusahaan yang butuh digitalisasi · Investor tech",
  },
  {
    id: "consulting",
    slug: "consulting",
    icon: "🎯",
    badge: null,
    title: "Konsultasi Teknologi",
    sub: "Strategi & Arsitektur Digital",
    tagline: "Keputusan teknologi yang tepat adalah fondasi pertumbuhan bisnis.",
    desc: "Layanan konsultasi strategis untuk membantu organisasi membuat keputusan teknologi yang tepat: audit sistem, desain arsitektur, evaluasi vendor, hingga strategi rekrutmen tim engineering.",
    features: [
      "Audit sistem & identifikasi bottleneck",
      "Desain arsitektur sistem yang skalabel",
      "Evaluasi & seleksi vendor teknologi",
      "Strategi & proses rekrutmen tim engineering",
      "Review kode & standar best practice",
      "Workshop & pelatihan tim internal",
    ],
    col: "#3B82F6",
    price: "Rp 2.500.000",
    unit: "per jam",
    target: "CTO & decision maker · Perusahaan yang ingin pivot digital",
  },
];

export interface CaseStudy {
  id: number;
  tag: string;
  loc: string;
  title: string;
  excerpt: string;
  stats: [string, string][];
  service: string;
  col: string;
  detail: string;
}

export const CASES: CaseStudy[] = [
  {
    id: 1,
    tag: "Smart Security",
    loc: "BSD City, Tangerang",
    title: "Transformasi Sistem Keamanan Komplek 200 Unit",
    excerpt:
      "Eliminasi ghost workers dan absensi manual menghasilkan penghematan operasional signifikan dalam 90 hari.",
    stats: [["47%", "Pengurangan Biaya"], ["95%", "Tingkat Kehadiran"], ["0", "Ghost Workers"]],
    service: "SecureForce OMS",
    col: "#1A6FFF",
    detail:
      "Komplek perumahan dengan 200 unit dan 24 personel security sebelumnya mengoperasikan sistem absensi berbasis kertas yang rentan manipulasi. Setelah implementasi SecureForce OMS dengan AI Face Recognition, seluruh proses absensi menjadi otomatis dan terverifikasi.",
  },
  {
    id: 2,
    tag: "SEO Lokal",
    loc: "Tangerang Selatan",
    title: "Pertumbuhan 10x Traffic Organik Restoran F&B",
    excerpt:
      "Dari nol visibilitas di Google menjadi peringkat #1 untuk kata kunci utama dalam 6 bulan.",
    stats: [["10x", "Pertumbuhan Traffic"], ["#1", "Peringkat Google"], ["3x", "Reservasi & Walk-in"]],
    service: "BangunTech SEO",
    col: "#22C55E",
    detail:
      "Restoran dengan 3 cabang di Tangerang Selatan tidak memiliki kehadiran digital yang terstruktur. Strategi Local SEO yang mencakup optimasi Google My Business, konten hiperlokal berbahasa Indonesia, dan technical SEO menghasilkan peningkatan traffic organik yang konsisten.",
  },
  {
    id: 3,
    tag: "CCTV AI",
    loc: "Jakarta Barat",
    title: "Sistem Pengawasan Cerdas untuk Mal 4 Lantai",
    excerpt:
      "32 kamera terintegrasi dengan AI menghasilkan zero blind spot dan respons insiden lebih cepat.",
    stats: [["32", "Kamera Terintegrasi"], ["<30s", "Respons Alert"], ["100%", "Area Terpantau"]],
    service: "Integrasi CCTV AI",
    col: "#8B5CF6",
    detail:
      "Pengelola mal memerlukan sistem pengawasan yang dapat mendeteksi aktivitas mencurigakan secara proaktif. Implementasi Frigate VMS dengan engine AI memungkinkan deteksi loitering, pengenalan plat nomor, dan alert otomatis ke tim keamanan.",
  },
  {
    id: 4,
    tag: "Custom Software",
    loc: "Jakarta Selatan",
    title: "Platform Manajemen Outsourcing Terintegrasi",
    excerpt:
      "Sistem SaaS multi-tenant yang mengelola 500+ personel security di 40 lokasi secara terpusat.",
    stats: [["500+", "Personel Terkelola"], ["40", "Lokasi Aktif"], ["98%", "Client Retention"]],
    service: "Pengembangan Software",
    col: "#EC4899",
    detail:
      "Perusahaan outsourcing security terkemuka memerlukan platform digital untuk menggantikan proses manual yang tidak efisien. Sistem SaaS yang dibangun mencakup modul payroll otomatis, monitoring real-time, dan portal klien yang transparan.",
  },
];

export interface BlogPost {
  id: number;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    cat: "Smart Security",
    date: "12 Mei 2025",
    title: "Mengapa AI Face Recognition Lebih Akurat dari RFID untuk Absensi Security",
    excerpt:
      "Teknologi pengenalan wajah modern mampu mencapai akurasi 99.7% bahkan dalam kondisi pencahayaan rendah. Pelajari bagaimana hal ini mengubah standar industri keamanan di Indonesia.",
    readTime: "6 menit",
  },
  {
    id: 2,
    cat: "SEO & Digital",
    date: "8 Mei 2025",
    title: "GEO vs SEO: Strategi Baru agar Bisnis Anda Muncul di Hasil Pencarian AI",
    excerpt:
      "Generative Engine Optimization (GEO) adalah evolusi SEO untuk era AI Search. Pelajari perbedaan mendasarnya dan langkah pertama yang perlu dilakukan bisnis Anda.",
    readTime: "8 menit",
  },
  {
    id: 3,
    cat: "Properti & PropTech",
    date: "5 Mei 2025",
    title: "PropTech 2025: 5 Teknologi yang Wajib Dipertimbangkan Developer Properti Indonesia",
    excerpt:
      "Dari aplikasi penghuni hingga sistem keamanan berbasis AI — peta teknologi properti yang relevan dan terjangkau untuk pasar Indonesia tahun ini.",
    readTime: "7 menit",
  },
  {
    id: 4,
    cat: "Bisnis & Teknologi",
    date: "1 Mei 2025",
    title: "ROI Digitalisasi: Kapan Investasi Teknologi Mulai Menguntungkan Bisnis?",
    excerpt:
      "Analisis mendalam mengenai titik impas investasi teknologi untuk bisnis jasa, properti, dan UMKM — dilengkapi kalkulator sederhana untuk estimasi ROI.",
    readTime: "10 menit",
  },
];

export const TEAM = [
  { name: "Ricko", role: "CEO & Founder · The Architect", img: "👨‍💼", bio: "Memimpin strategi, product development, dan client engagement. Fokus pada AI, automation, dan solusi teknologi properti." },
  { name: "Kero", role: "Lead Developer & IT", img: "👨‍💻", bio: "Mengarsiteki solusi teknis dari frontend hingga infrastructure. Spesialis React, Node.js, dan hardware integration." },
  { name: "Arsya", role: "Content Manager", img: "👨‍🎨", bio: "Mengelola strategi konten dan SEO. Memastikan pesan brand tersampaikan dengan tepat sasaran di setiap platform." },
  { name: "Nadiva", role: "Lead Designer", img: "👩‍🎨", bio: "Merancang pengalaman visual yang profesional dan memorable untuk klien BangunTech." },
  { name: "Shella", role: "Admin & Operations", img: "👩‍💼", bio: "Memastikan operasional berjalan lancar — mulai dari administrasi klien hingga koordinasi proyek." },
];
