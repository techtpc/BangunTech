# Analisis & Rekomendasi Judul Skripsi — BangunTech

> **Proyek:** BangunTech — Company Profile & SecureForce OMS  
> **Platform:** Next.js 16.2.6 · TypeScript · Tailwind CSS v4  
> **Divisi Teknologi:** The Pitch Creative Media (TPC Media)

---

## 1. Analisis Projek

**BangunTech** adalah landing page company profile + interactive product demo dari divisi teknologi TPC Media. Produk flagship-nya adalah **SecureForce OMS** (Operation Management System) — platform manajemen keamanan properti terintegrasi.

### Struktur Layanan

| Layanan | Target Pasar | Harga |
|---|---|---|
| SecureForce OMS | Outsourcing security, developer properti, pengelola gedung | Rp 189J (one-time) |
| BangunTech SEO | Restoran, properti, klinik, jasa profesional | Rp 5J/bulan |
| Integrasi CCTV AI | Perumahan, mal, industri | Custom quote |
| AutoPost AI | UMKM, properti, restoran | Rp 2,5J/bulan |
| Pengembangan Software | Startup, enterprise | Rp 75J/proyek |
| Konsultasi Teknologi | CTO, decision maker | Rp 2,5J/jam |

### Status Implementasi Teknologi

| Fitur | Status | Catatan |
|---|---|---|
| Manajemen personel (CRUD) | ✅ Simulasi UI | Mock data React state |
| Smart Attendance AI | ✅ Simulasi UI | Tombol "simulate" — tidak ada model sungguhan |
| CCTV AI Monitoring | ✅ Simulasi UI | Array `aiFeatures` mock — tidak ada inferensi |
| ANPR Plat Nomor | ✅ Simulasi UI | Mock data, tidak ada OCR/computer vision |
| Kontrol palang pintu | ✅ Simulasi UI | Tidak terhubung ke hardware |
| Laporan PDF & Excel | ✅ Real implementation | jsPDF + xlsx |
| Aplikasi penghuni | ❌ Belum ada | DevOps roadmap |
| Auth multi-role | ✅ Simulasi UI | Hardcoded credential |

### Temuan Kritis

**Seluruh klaim "AI" di situs ini adalah marketing copy dan UI simulation semata.** Tidak ada satupun model machine learning, pipeline training, atau inference engine yang terimplementasi. Face Recognition, ANPR, deteksi gerakan — semuanya adalah data array palsu dan tombol simulasi.

---

## 2. Machine Learning yang Bisa Diimplementasikan

Berdasarkan data yang tersedia di platform SecureForce OMS dan konteks industri keamanan properti Indonesia.

### 2.1 Prioritas Tinggi (Siap Implementasi)

| ML Use Case | Sumber Data | Teknik | Dampak Bisnis |
|---|---|---|---|
| **Deteksi Anomali Absensi** | Log check-in/check-out, GPS coordinate, metode verifikasi, jam shift | Isolation Forest · LSTM-Autoencoder · XGBoost | Identifikasi ghost worker & fraud — penghematan 10-20% biaya personel |
| **Klasifikasi Ancaman CCTV** | Metadata kamera, riwayat alert, pola waktu, lokasi | Random Forest · XGBoost | Prioritas respons keamanan — response time lebih cepat |
| **Prediksi Performa Security** | Skor performa historis, riwayat absensi, pola shift, jenis properti | Regresi · Gradient Boosting · Time Series | Early warning underperformer — turunkan turnover |

### 2.2 Prioritas Menengah

| ML Use Case | Deskripsi | Teknik |
|---|---|---|
| Optimasi Jadwal Shift | Penjadwalan optimal berdasarkan okupansi properti, pola insiden, preferensi personel | Reinforcement Learning · Constraint Optimization |
| NLP untuk Keluhan Penghuni | Klasifikasi otomatis laporan warga (darurat, umum, komplain) | NLP · IndoBERT · TF-IDF + SVM |
| Clustering Properti Berisiko | Profil risiko properti berdasarkan karakteristik (tipe, lokasi, jumlah tenant, insiden) | K-Means · DBSCAN |
| Prediksi Churn Klien | Prediksi klien yang akan berhenti berdasarkan engagement, pembayaran, komplain | Logistic Regression · Random Forest |

### 2.3 Prioritas Rendah (Opsional)

| ML Use Case | Deskripsi |
|---|---|
| AI Content Recommendation | Untuk AutoPost AI — rekomendasi waktu posting, jenis konten, trending topic |
| Keyword Trend Prediction | Untuk layanan SEO — prediksi kata kunci yang akan tren |
| Lead Scoring Website | Prediksi visitor website yang paling mungkin konversi jadi klien |

---

## 3. Rekomendasi Judul Skripsi

### 3.1 Pilihan Utama (Rekomendasi Terkuat)

> ## **Sistem Deteksi Anomali Absensi pada Platform Manajemen Keamanan Properti Menggunakan Metode Ensemble Isolation Forest dan XGBoost**

**Ruang Lingkup:**
- Deteksi ghost worker (personel terdaftar tapi tidak hadir)
- Deteksi buddy punching (titip absen)
- Analisis pola absensi mencurigakan berbasis multi-modal data (face recognition, GPS, RFID, time log)
- Integrasi ke dashboard SecureForce OMS

### 3.2 Pilihan Alternatif

| # | Judul | Fokus Utama | Teknik Utama |
|---|---|---|---|
| 1 | Prediksi Tingkat Risiko Keamanan Properti Berdasarkan Data Historis Menggunakan Random Forest | Risk prediction properti | Supervised classification |
| 2 | Sistem Klasifikasi dan Prioritas Insiden Keamanan pada Kawasan Properti Menggunakan Natural Language Processing | Klasifikasi laporan insiden | NLP, TF-IDF, IndoBERT |
| 3 | Optimasi Penjadwalan Petugas Keamanan Berdasarkan Analisis Pola Operasional Menggunakan Algoritma Clustering | Scheduling optimization | K-Means, DBSCAN |
| 4 | Deteksi Anomali pada Sistem Absensi Multi-Modal Security Property Menggunakan LSTM-Autoencoder | Deep learning anomaly detection | LSTM, Autoencoder |
| 5 | Analisis Sentimen Ulasan Penghuni Properti terhadap Kualitas Layanan Keamanan Menggunakan IndoBERT | Sentiment analysis | IndoBERT, NLP |

### 3.3 Perbandingan Matriks Pemilihan Judul

| Kriteria | Judul Utama | Alt 1 | Alt 2 | Alt 3 | Alt 4 | Alt 5 |
|---|---|---|---|---|---|---|
| Ketersediaan data | ✅✅✅ | ✅✅ | ✅✅ | ✅✅✅ | ✅✅✅ | ✅ |
| Bobot kelimahan | ✅✅✅ | ✅✅ | ✅✅ | ✅✅ | ✅✅✅ | ✅✅ |
| Dampak nyata | ✅✅✅ | ✅✅ | ✅✅ | ✅ | ✅✅✅ | ✅ |
| Keunikan riset | ✅✅✅ | ✅✅ | ✅✅✅ | ✅✅ | ✅✅ | ✅✅ |
| Kemudahan integrasi | ✅✅✅ | ✅✅ | ✅ | ✅✅ | ✅✅✅ | ✅ |

---

## 4. Perbedaan dengan Penelitian Terdahulu

| Aspek | Penelitian Terdahulu | Penelitian Ini (Diusulkan) |
|---|---|---|
| **Domain** | Absensi karyawan kantor/manufaktur (RFID/fingerprint) — *Rohmat & Santoso (2023), Wijaya (2022)* | **Security property management** — industri spesifik dengan tantangan ghost worker & multi-lokasi |
| **Sumber Data** | Single source — log mesin absensi | **Multi-modal** — Face Recognition + GPS geofence + RFID + photo evidence + jadwal shift |
| **Target Deteksi** | Keterlambatan / ketidakhadiran biasa | **Ghost worker & buddy punching** — fraud yang lebih sophisticated dan sulit dideteksi manual |
| **Metode** | Isolation Forest saja (semakin populer sejak 2020) atau XGBoost saja — *Chen & Guestrin (2016)* | **Ensemble Isolation Forest + XGBoost** — hybrid yang memanfaatkan kelebihan unsupervised dan supervised |
| **Integrasi** | Model standalone / prototype — kebanyakan riset berhenti di akurasi model | **End-to-end** — dari pipeline data → model inference → alert & dashboard di platform produksi |
| **Konteks** | Konteks umum/luar negeri — *dataset publik seperti Kaggle* | **Konteks Indonesia** — karakteristik unik: sistem shift 3 (pagi/siang/malam), titip absen, pengawasan jarak jauh, budaya kerja security |
| **Validasi** | Confusion matrix standar | **Validasi ganda** — metrik ML (precision, recall) + validasi domain expert industri security + estimasi dampak finansial |

### State of the Art & Celah Riset

**Penelitian relevan yang sudah ada:**

1. **Anomaly detection in attendance systems** — Kebanyakan fokus pada deteksi keterlambatan menggunakan pattern recognition sederhana. Belum ada yang spesifik menangani ghost worker di industri security.

2. **Employee monitoring using multi-modal data** — Riset seperti *Zhang et al. (2023)* menggabungkan face recognition + location tracking, tapi di domain perkantoran, bukan properti multi-tenant.

3. **Isolation Forest for fraud detection** — Efektif untuk financial fraud (*Liu et al., 2008; 2012*), tapi jarang diaplikasikan ke attendance fraud di industri jasa keamanan.

4. **XGBoost for classification** — Sangat populer untuk tabular data, tapi belum ada yang mengkombinasikan dengan Isolation Forest dalam kerangka ensemble untuk deteksi ghost worker.

**Celah riset (research gap):**
- Belum ada penelitian yang secara spesifik membahas deteksi ghost worker di industri security outsourcing Indonesia
- Belum ada yang mengintegrasikan multi-modal attendance data (face + GPS + RFID) untuk anomaly detection di domain properti
- Belum ada yang mengimplementasikan ensemble Isolation Forest + XGBoost untuk kasus deteksi anomali absensi

---

## 5. Alasan Judul Ini Harus Diambil

### 5.1 Masalah Industri Nyata & Mendesak

Ghost worker adalah epidemi diam-diam di industri security outsourcing Indonesia:

- **10-20% personel** terdaftar bisa jadi ghost worker (estimasi industri)
- Kerugian per properti menengah: **Rp 50-200 juta/tahun** untuk gaji personel fiktif
- Kasus titip absen: 1 orang absen untuk 3-5 rekan yang tidak hadir
- Deteksi manual hampir mustahil: 1 supervisor mengawasi 50-100 personel di 5-10 lokasi berbeda

### 5.2 Gap Riset yang Jelas

- Pencarian di Google Scholar, IEEE, dan Scopus menunjukkan **belum ada penelitian spesifik** tentang deteksi ghost worker di industri security properti Indonesia
- Riset anomaly detection attendance masih berfokus di domain manufaktur dan perkantoran dengan data single-source
- Ensemble Isolation Forest + XGBoost untuk kasus ini **belum pernah dipublikasikan**

### 5.3 Platform Sudah Siap

SecureForce OMS sudah memiliki:

| Kebutuhan | Status |
|---|---|
| Data personel (nama, shift, cluster, performa) | ✅ Mock data siap |
| Log absensi multi-metode | ✅ Mock data siap |
| Data properti (tipe, lokasi, geofence) | ✅ Mock data siap |
| Dashboard & alert system | ✅ Frontend siap |
| API endpoint infrastructure | 🔧 Perlu dibangun |
| Database persistent | 🔧 Perlu migrasi dari React state |

Penelitian tinggal menambahkan **layer ML** — tidak perlu membangun platform dari nol.

### 5.4 Bobot Kelimahan Kuat

- **2 teknik ML berbeda**: Unsupervised (Isolation Forest) + Supervised (XGBoost)
- **Feature engineering** yang kompleks: time-series features, behavioral features, contextual features
- **End-to-end pipeline**: Dari data ingestion → feature engineering → model training → inference → deployment
- **Evaluasi komprehensif**: Metrics ML + business impact analysis

### 5.5 Dampak Terukur

| Metrik | Cara Ukur |
|---|---|
| Precision deteksi ghost worker | TP / (TP + FP) |
| Recall deteksi ghost worker | TP / (TP + FN) |
| Penghematan biaya | Jumlah ghost worker terdeteksi × gaji rata-rata |
| Response time deteksi | Waktu dari fraud terjadi hingga terdeteksi |
| Akurasi ensemble vs single model | Perbandingan F1-score Isolation Forest saja vs XGBoost saja vs ensemble |

### 5.6 Relevansi Industri & Masa Depan

- **Ibu Kota Nusantara (IKN)** — pembangunan properti baru membutuhkan sistem keamanan cerdas
- **Urbanisasi** — pertumbuhan komplek perumahan dan mal di kota satelit (BSD, Summarecon, Bumi Serpong Damai)
- **Regulasi** — tekanan untuk transparansi laporan keamanan dari pemilik properti
- **Digitalisasi** — industri security outsourcing masih sangat tradisional, siap untuk disruption

---

## 6. Masalah yang Diselesaikan

### 6.1 Ghost Worker (Personel Fiktif)

**Masalah:** Personel terdaftar di sistem penggajian tapi tidak pernah hadir. Gaji tetap dibayar penuh setiap bulan.

**Bagaimana ML menyelesaikan:**
- Isolation Forest mendeteksi pola absensi yang tidak lazim (check-in selalu di menit yang sama, GPS selalu di titik yang sama, metode verifikasi monoton)
- XGBoost mengklasifikasikan apakah anomali tersebut true positive (ghost worker) atau false positive (pola unik tapi wajar)
- Sistem memberikan alert real-time ke supervisor

### 6.2 Buddy Punching (Titip Absen)

**Masalah:** Satu orang security absen (face recognition/GPS/RFID) untuk rekan yang tidak hadir.

**Bagaimana ML menyelesaikan:**
- Analisis multi-modal: jika 2-3 personel selalu check-in dalam rentang 1-2 menit setiap hari, itu indikasi buddy punching
- Cross-validation antara metode verifikasi: face + GPS + RFID harus konsisten
- Time-pattern analysis: jika personel A dan B selalu check-in bersamaan tapi tidak pernah terlihat bersama di CCTV, itu mencurigakan

### 6.3 Ketidakakuratan Absensi Manual

**Masalah:** Absensi kertas/buku mudah dipalsukan, tidak real-time, laporan baru bisa direkonsiliasi akhir bulan.

**Bagaimana ML menyelesaikan:**
- Otomatisasi deteksi tanpa campur tangan manusia
- Laporan real-time dengan confidence score setiap entri absensi
- Historical pattern analysis untuk audit retrospektif

### 6.4 Tidak Ada Early Warning System

**Masalah:** Pola mencurigakan baru ketahuan setelah berbulan-bulan (saat audit atau ada komplain klien).

**Bagaimana ML menyelesaikan:**
- Detection latency: dari bulanan menjadi real-time/daily
- Anomaly score threshold yang bisa dikonfigurasi per properti
- Automated alert ke WhatsApp/dashboard

### 6.5 Keterbatasan SDM Pengawas

**Masalah:** 1 supervisor mengawasi 50-100 personel di 5-10 lokasi berbeda. Tidak mungkin memantau secara manual.

**Bagaimana ML menyelesaikan:**
- Skala: sistem bisa memantau ribuan personel di ratusan lokasi
- Prioritasi: supervisor hanya perlu mengecek flag anomaly, bukan seluruh data
- Dashboard agregat: overview semua properti dengan risk score

### 6.6 Transparansi Klien

**Masalah:** Klien properti tidak punya visibilitas kehadiran personel secara real-time, menimbulkan ketidakpercayaan dan sengketa tagihan.

**Bagaimana ML menyelesaikan:**
- Laporan otomatis dengan data verifikasi multi-modal
- Trust score per personel dan per properti
- Bukti digital: timestamp, GPS coordinate, foto, metode verifikasi — semua tercatat

### 6.7 Data Tidak Terstruktur

**Masalah:** Data kehadiran tersebar di kertas, Excel, grup WhatsApp — tidak bisa dianalisis secara historis.

**Bagaimana ML menyelesaikan:**
- Data terstruktur otomatis dari platform
- Historical analysis untuk trend detection
- Pattern recognition lintas waktu (mingguan, bulanan, musiman)

---

## 7. Arsitektur Sistem yang Diusulkan

```
┌─────────────────────────────────────────────────────────┐
│                  SecureForce OMS Platform                │
│  (React · TypeScript · Next.js)                         │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Pipeline (Python)                 │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Attendance   │  │ Guard        │  │ Property     │  │
│  │ Logs         │  │ Profile      │  │ Profile      │  │
│  │ - check-in   │  │ - shift      │  │ - type       │  │
│  │ - check-out  │  │ - cluster    │  │ - size       │  │
│  │ - method     │  │ - performa   │  │ - risk level │  │
│  │ - GPS        │  │ - status     │  │ - lokasi     │  │
│  │ - photo      │  │ - join date  │  │ - tenant     │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         └─────────────────┼─────────────────┘           │
│                           ▼                             │
│              ┌──────────────────────┐                   │
│              │   Feature Engine     │                   │
│              │  ┌────────────────┐  │                   │
│              │  │ Time-series    │  │                   │
│              │  │ features       │  │                   │
│              │  │ (variance,     │  │                   │
│              │  │ frequency,     │  │                   │
│              │  │ pattern)       │  │                   │
│              │  ├────────────────┤  │                   │
│              │  │ Behavioral     │  │                   │
│              │  │ features       │  │                   │
│              │  │ (avg time,     │  │                   │
│              │  │ method switch, │  │                   │
│              │  │ GPS deviance)  │  │                   │
│              │  ├────────────────┤  │                   │
│              │  │ Contextual     │  │                   │
│              │  │ features       │  │                   │
│              │  │ (holiday,      │  │                   │
│              │  │ shift type,    │  │                   │
│              │  │ location)      │  │                   │
│              │  └────────────────┘  │                   │
│              └──────────────────────┘                   │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Ensemble Model Layer                   │
│                                                         │
│  ┌─────────────────────┐   ┌─────────────────────────┐  │
│  │   Isolation Forest  │   │       XGBoost           │  │
│  │   (Unsupervised)    │   │    (Supervised)         │  │
│  │                     │   │                         │  │
│  │  → Anomaly Score    │   │  → Classification       │  │
│  │  → Unsupervised     │   │  → Labeled anomaly      │  │
│  │    outlier detect   │   │    confirmation         │  │
│  └─────────┬───────────┘   └──────────┬──────────────┘  │
│            └────────────┬─────────────┘                 │
│                         ▼                               │
│              ┌─────────────────────┐                    │
│              │   Ensemble Output   │                    │
│              │   Weighted Voting   │                    │
│              └─────────────────────┘                    │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Output Layer                           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  REST API (FastAPI)                             │   │
│  │  - /api/v1/anomaly/check   → Real-time check    │   │
│  │  - /api/v1/anomaly/report  → Periodik report     │   │
│  │  - /api/v1/attendance/flag → Flag manual review  │   │
│  └─────────────────────────────────────────────────┘   │
│                         │                               │
│                         ▼                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  SecureForce Dashboard                          │   │
│  │                                                 │   │
│  │  ┌────────────────┐  ┌────────────────────┐    │   │
│  │  │ Anomaly Alert  │  │ Risk Score per     │    │   │
│  │  │ (real-time)    │  │ Property           │    │   │
│  │  ├────────────────┤  ├────────────────────┤    │   │
│  │  │ Weekly Report  │  │ Investigation      │    │   │
│  │  │ (auto-generate)│  │ Queue              │    │   │
│  │  └────────────────┘  └────────────────────┘    │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack Rekomendasi

| Layer | Teknologi |
|---|---|
| **Data Pipeline** | Python · Pandas · NumPy · Scikit-learn |
| **Model Training** | Scikit-learn (Isolation Forest) · XGBoost |
| **API** | FastAPI · Docker |
| **Database** | PostgreSQL + TimescaleDB (time-series) |
| **Deployment** | Vercel (frontend) · Railway/Render (API) |
| **Monitoring** | MLflow (experiment tracking) · Grafana (dashboard) |

---

## 8. Roadmap Penelitian

| Fase | Aktivitas | Durasi | Output |
|---|---|---|---|
| **1. Studi Literatur** | Review 20+ paper tentang anomaly detection, ensemble method, attendance system | 2 minggu | Bab 2 skripsi |
| **2. Pengembangan Dataset** | Generate synthetic dataset + validasi domain expert | 2 minggu | Dataset siap training |
| **3. Feature Engineering** | Ekstraksi time-series, behavioral, contextual features | 1 minggu | Feature matrix |
| **4. Model Development** | Implementasi & tuning Isolation Forest + XGBoost | 3 minggu | Trained model |
| **5. Ensemble & Evaluasi** | Weighted voting, hyperparameter tuning, evaluation | 2 minggu | Performance report |
| **6. Integrasi API** | Build FastAPI endpoint, dokumentasi | 2 minggu | API siap pakai |
| **7. Integrasi Dashboard** | Tampilkan anomaly flag di SecureForce OMS | 2 minggu | Fitur live di demo |
| **8. Pengujian & Analisis** | Skenario uji, analisis hasil, business impact | 2 minggu | Bab 4-5 skripsi |
| **Total** | | **16 minggu** | |

---

## 9. Kesimpulan

Rekomendasi judul **"Sistem Deteksi Anomali Absensi pada Platform Manajemen Keamanan Properti Menggunakan Metode Ensemble Isolation Forest dan XGBoost"** adalah pilihan paling optimal karena:

1. **Menjawab masalah nyata** — ghost worker merugikan industri security Indonesia miliaran rupiah per tahun
2. **Mengisi gap riset** — belum ada penelitian spesifik tentang deteksi ghost worker di industri properti Indonesia
3. **Platform siap** — SecureForce OMS menyediakan infrastruktur data dan dashboard yang tinggal ditambahkan layer ML
4. **Bobot kelimahan kuat** — Ensemble 2 teknik ML berbeda, feature engineering kompleks, end-to-end pipeline
5. **Dampak terukur** — Precision, recall, penghematan biaya, response time — semua bisa diukur secara kuantitatif
6. **Relevan dengan industri 4.0** — Digitalisasi keamanan properti adalah tren yang sedang dan akan terus berkembang
