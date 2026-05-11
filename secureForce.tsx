// @ts-nocheck
/**
 * SecureForce OMS v3
 * ===================
 * NEW FEATURES:
 * - Full CRUD: Add/Edit/Delete Security, CCTV, Gates, Properties
 * - Smart Attendance: Face Recognition + GPS Geofencing + Auto-detection
 * - Client Reports: PDF & Excel download with date range
 *
 * INSTALL DEPENDENCIES (di project React lo):
 *   npm install xlsx jspdf jspdf-autotable
 *
 * For artifact preview: jsPDF loaded via CDN, xlsx available in artifact runtime
 */

import { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";

// ─── INITIAL DATA ─────────────────────────────────────────────────────────────
const INITIAL_GUARDS = [
  { id: "SG001", name: "Ahmad Fauzi", nik: "3174012003900001", phone: "0812-3456-7890", cluster: "Grand Duta Residence", position: "Security Chief", shift: "Pagi 06:00-14:00", baseSalary: 4200000, performance: 92, status: "active", joinDate: "2023-01-15", photo: "👮", faceId: "FC-001" },
  { id: "SG002", name: "Budi Santoso", nik: "3174012003900002", phone: "0813-9876-5432", cluster: "Grand Duta Residence", position: "Security Guard", shift: "Pagi 06:00-14:00", baseSalary: 3800000, performance: 88, status: "active", joinDate: "2023-03-20", photo: "👮", faceId: "FC-002" },
  { id: "SG003", name: "Cecep Ridwan", nik: "3174012003900003", phone: "0811-2345-6789", cluster: "Mal Artha Gading", position: "Security Guard", shift: "Siang 14:00-22:00", baseSalary: 3800000, performance: 76, status: "active", joinDate: "2024-02-01", photo: "👮", faceId: "FC-003" },
  { id: "SG004", name: "Dian Pratama", nik: "3174012003900004", phone: "0817-1234-5678", cluster: "Mal Artha Gading", position: "Security Guard", shift: "Malam 22:00-06:00", baseSalary: 4000000, performance: 84, status: "active", joinDate: "2023-08-15", photo: "👮", faceId: "FC-004" },
  { id: "SG005", name: "Eko Wahyudi", nik: "3174012003900005", phone: "0856-7890-1234", cluster: "Summarecon Bekasi", position: "Security Chief", shift: "Pagi 06:00-14:00", baseSalary: 4200000, performance: 95, status: "active", joinDate: "2022-11-10", photo: "👮", faceId: "FC-005" },
  { id: "SG006", name: "Fajar Nugroho", nik: "3174012003900006", phone: "0822-3456-7890", cluster: "Summarecon Bekasi", position: "Security Guard", shift: "Siang 14:00-22:00", baseSalary: 3800000, performance: 70, status: "active", joinDate: "2024-04-01", photo: "👮", faceId: "FC-006" },
  { id: "SG007", name: "Gunawan Hadi", nik: "3174012003900007", phone: "0813-1111-2222", cluster: "Grand Duta Residence", position: "Security Guard", shift: "Malam 22:00-06:00", baseSalary: 4000000, performance: 81, status: "leave", joinDate: "2023-06-15", photo: "👮", faceId: "FC-007" },
  { id: "SG008", name: "Hendra Setiawan", nik: "3174012003900008", phone: "0856-2222-3333", cluster: "Puri Indah Mall", position: "Security Guard", shift: "Pagi 06:00-14:00", baseSalary: 3800000, performance: 89, status: "active", joinDate: "2023-09-20", photo: "👮", faceId: "FC-008" },
];

const INITIAL_CLUSTERS = [
  { id: "C001", name: "Grand Duta Residence", type: "Komplek", client: "PT Duta Properti", address: "Jl. Raya Serpong KM 7, BSD City", totalUnits: 200, totalGuards: 3, managementFee: 1500000, guardFee: 3800000, geofence: { lat: -6.2972, lng: 106.6716, radius: 500 } },
  { id: "C002", name: "Mal Artha Gading", type: "Mall", client: "PT Artha Gading", address: "Jl. Boulevard Artha Gading, Kelapa Gading", totalUnits: 0, totalGuards: 2, managementFee: 2000000, guardFee: 4000000, geofence: { lat: -6.1448, lng: 106.8896, radius: 300 } },
  { id: "C003", name: "Summarecon Bekasi", type: "Komplek", client: "PT Duta Properti", address: "Jl. Bulevar Selatan, Summarecon Bekasi", totalUnits: 350, totalGuards: 2, managementFee: 1800000, guardFee: 3800000, geofence: { lat: -6.2350, lng: 107.0008, radius: 800 } },
  { id: "C004", name: "Puri Indah Mall", type: "Mall", client: "PT Puri Nusa", address: "Jl. Puri Indah Raya Blok U1, Kembangan", totalUnits: 0, totalGuards: 3, managementFee: 2200000, guardFee: 4200000, geofence: { lat: -6.1864, lng: 106.7395, radius: 400 } },
];

const INITIAL_CAMERAS = [
  { id: "CAM01", name: "Gerbang Utama", cluster: "Grand Duta Residence", ipAddress: "192.168.1.100", rtspUrl: "rtsp://admin:***@192.168.1.100:554/h264", brand: "Hikvision", model: "DS-2CD2143G2", aiFeatures: ["motion", "anpr"], status: "online", uptime: 99.8 },
  { id: "CAM02", name: "Lobby Lift Tower A", cluster: "Grand Duta Residence", ipAddress: "192.168.1.101", rtspUrl: "rtsp://admin:***@192.168.1.101:554/h264", brand: "Dahua", model: "IPC-HFW2231", aiFeatures: ["motion"], status: "online", uptime: 99.9 },
  { id: "CAM03", name: "Pos Satpam Utama", cluster: "Grand Duta Residence", ipAddress: "192.168.1.102", rtspUrl: "rtsp://admin:***@192.168.1.102:554/h264", brand: "Hikvision", model: "DS-2CD2143G2", aiFeatures: ["face"], status: "online", uptime: 100 },
  { id: "CAM04", name: "Parkir Lantai 2", cluster: "Mal Artha Gading", ipAddress: "192.168.2.100", rtspUrl: "rtsp://admin:***@192.168.2.100:554/h264", brand: "Hikvision", model: "DS-2CD2143G2", aiFeatures: ["face", "motion"], status: "online", uptime: 98.2 },
  { id: "CAM05", name: "Service Entrance", cluster: "Mal Artha Gading", ipAddress: "192.168.2.101", rtspUrl: "rtsp://admin:***@192.168.2.101:554/h264", brand: "Dahua", model: "IPC-HFW2231", aiFeatures: [], status: "offline", uptime: 0 },
];

const INITIAL_GATES = [
  { id: "GT01", name: "Main Gate Masuk", cluster: "Grand Duta Residence", controllerIp: "192.168.1.50", controllerType: "ZKTeco InBio260", method: "RFID + ANPR", status: "closed", relayDuration: 5 },
  { id: "GT02", name: "Main Gate Keluar", cluster: "Grand Duta Residence", controllerIp: "192.168.1.51", controllerType: "ZKTeco InBio260", method: "ANPR", status: "closed", relayDuration: 5 },
  { id: "GT03", name: "Drop-off Mall", cluster: "Mal Artha Gading", controllerIp: "192.168.2.50", controllerType: "Hikvision DS-K2604T", method: "ANPR", status: "open", relayDuration: 3 },
];

const CLIENTS = [
  { id: "CL001", name: "PT Duta Properti", email: "admin@dutaproperti.co.id", password: "client123", clusterIds: ["C001", "C003"] },
  { id: "CL002", name: "PT Artha Gading", email: "admin@arthagading.co.id", password: "client123", clusterIds: ["C002"] },
  { id: "CL003", name: "PT Puri Nusa", email: "admin@purinusa.co.id", password: "client123", clusterIds: ["C004"] },
];

const OUTSOURCE_ADMIN = { email: "admin@secureforce.co.id", password: "admin123", company: "SecureForce Indonesia" };

// ─── UTILITIES ────────────────────────────────────────────────────────────────
const fmt = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
const fmtK = (n) => `Rp ${(n / 1000000).toFixed(1)}Jt`;
const getPerformanceColor = (p) => p >= 90 ? "#22c55e" : p >= 80 ? "#f59e0b" : p >= 70 ? "#f97316" : "#ef4444";
const today = () => new Date().toISOString().split("T")[0];
const generateId = (prefix, existing) => {
  const nums = existing.map(e => parseInt(e.id.replace(prefix, "")) || 0);
  const next = Math.max(0, ...nums) + 1;
  return `${prefix}${String(next).padStart(3, "0")}`;
};

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────────
function Badge({ children, color = "#f59e0b", size = "sm" }) {
  return (
    <span style={{
      background: `${color}22`, color, border: `1px solid ${color}44`,
      borderRadius: 4, padding: size === "sm" ? "2px 8px" : "4px 12px",
      fontSize: size === "sm" ? 11 : 12, fontWeight: 700,
      letterSpacing: "0.5px", textTransform: "uppercase",
      whiteSpace: "nowrap", display: "inline-block",
    }}>{children}</span>
  );
}

function StatCard({ icon, label, value, sub, accent = "#f59e0b" }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12, padding: "20px 24px",
      display: "flex", flexDirection: "column", gap: 6,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: accent }} />
      <div style={{ fontSize: 22 }}>{icon}</div>
      <div style={{ color: "#94a3b8", fontSize: 12, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>{label}</div>
      <div style={{ color: "#f1f5f9", fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ color: "#64748b", fontSize: 12 }}>{sub}</div>}
    </div>
  );
}

function ProgressBar({ value, color = "#f59e0b" }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 999, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, transition: "width 0.6s ease" }} />
    </div>
  );
}

// ─── MODAL FORM SYSTEM ────────────────────────────────────────────────────────
function Modal({ open, onClose, title, children, maxWidth = 600 }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
      backdropFilter: "blur(8px)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20, animation: "fadeIn 0.2s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#0a0e1a", border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: 16, maxWidth, width: "100%",
        maxHeight: "90vh", overflowY: "auto",
        boxShadow: "0 0 80px rgba(245,158,11,0.15)",
        animation: "slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{
          padding: "20px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          position: "sticky", top: 0, background: "#0a0e1a", zIndex: 10,
        }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{title}</div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            color: "#94a3b8", borderRadius: 8, width: 32, height: 32,
            cursor: "pointer", fontSize: 18, fontWeight: 700,
          }}>×</button>
        </div>
        <div style={{ padding: 28 }}>{children}</div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
}

function Field({ label, children, required, hint }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, marginBottom: 6, letterSpacing: "0.5px", textTransform: "uppercase" }}>
        {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
      </div>
      {children}
      {hint && <div style={{ color: "#64748b", fontSize: 11, marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "10px 14px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8, color: "#f1f5f9", fontSize: 14,
  outline: "none", boxSizing: "border-box", fontFamily: "inherit",
};

function Input({ value, onChange, ...rest }) {
  return <input value={value || ""} onChange={e => onChange(e.target.value)} style={inputStyle} {...rest} />;
}

function Select({ value, onChange, options, ...rest }) {
  return (
    <select value={value || ""} onChange={e => onChange(e.target.value)} style={inputStyle} {...rest}>
      {options.map(o => <option key={typeof o === "object" ? o.value : o} value={typeof o === "object" ? o.value : o}>{typeof o === "object" ? o.label : o}</option>)}
    </select>
  );
}

function FormButtons({ onCancel, onSubmit, submitLabel = "Simpan", deleteLabel, onDelete }) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "space-between", marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div>
        {onDelete && (
          <button onClick={onDelete} style={{
            background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444", borderRadius: 8, padding: "10px 16px",
            fontSize: 13, fontWeight: 700, cursor: "pointer",
          }}>🗑 {deleteLabel || "Hapus"}</button>
        )}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={onCancel} style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
          color: "#94a3b8", borderRadius: 8, padding: "10px 20px",
          fontSize: 13, fontWeight: 600, cursor: "pointer",
        }}>Batal</button>
        <button onClick={onSubmit} style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)", border: "none",
          color: "#000", borderRadius: 8, padding: "10px 24px",
          fontSize: 13, fontWeight: 800, cursor: "pointer",
        }}>{submitLabel}</button>
      </div>
    </div>
  );
}

// ─── GUARD FORM ───────────────────────────────────────────────────────────────
function GuardForm({ guard, clusters, onSave, onCancel, onDelete }) {
  const [data, setData] = useState(guard || {
    id: "", name: "", nik: "", phone: "", cluster: clusters[0]?.name || "",
    position: "Security Guard", shift: "Pagi 06:00-14:00",
    baseSalary: 3800000, performance: 80, status: "active",
    joinDate: today(), photo: "👮", faceId: "",
  });

  const update = (k, v) => setData(prev => ({ ...prev, [k]: v }));

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Nama Lengkap" required>
          <Input value={data.name} onChange={v => update("name", v)} placeholder="Ahmad Fauzi" />
        </Field>
        <Field label="NIK" required hint="16 digit nomor KTP">
          <Input value={data.nik} onChange={v => update("nik", v)} placeholder="3174012003900001" maxLength={16} />
        </Field>
        <Field label="No. Telepon" required>
          <Input value={data.phone} onChange={v => update("phone", v)} placeholder="0812-3456-7890" />
        </Field>
        <Field label="Tanggal Bergabung" required>
          <Input type="date" value={data.joinDate} onChange={v => update("joinDate", v)} />
        </Field>
        <Field label="Cluster Penempatan" required>
          <Select value={data.cluster} onChange={v => update("cluster", v)} options={clusters.map(c => ({ value: c.name, label: c.name }))} />
        </Field>
        <Field label="Posisi" required>
          <Select value={data.position} onChange={v => update("position", v)} options={["Security Guard", "Security Chief", "Senior Security", "Patrol Officer"]} />
        </Field>
        <Field label="Shift" required>
          <Select value={data.shift} onChange={v => update("shift", v)} options={["Pagi 06:00-14:00", "Siang 14:00-22:00", "Malam 22:00-06:00"]} />
        </Field>
        <Field label="Status" required>
          <Select value={data.status} onChange={v => update("status", v)} options={[{ value: "active", label: "Aktif" }, { value: "leave", label: "Cuti" }, { value: "terminated", label: "Resign" }]} />
        </Field>
        <Field label="Gaji Pokok (Rp)" required>
          <Input type="number" value={data.baseSalary} onChange={v => update("baseSalary", +v)} />
        </Field>
        <Field label="Skor Performa Awal" hint="0-100">
          <Input type="number" min="0" max="100" value={data.performance} onChange={v => update("performance", +v)} />
        </Field>
      </div>
      <Field label="🎯 Face Recognition ID" hint="ID wajah untuk auto-attendance lewat AI CCTV">
        <Input value={data.faceId} onChange={v => update("faceId", v)} placeholder="FC-001 (auto-generated saat foto di-upload)" />
      </Field>
      <FormButtons
        onCancel={onCancel}
        onSubmit={() => onSave(data)}
        submitLabel={guard ? "Update Data" : "+ Tambah Security"}
        onDelete={guard ? onDelete : null}
      />
    </>
  );
}

// ─── CAMERA FORM ──────────────────────────────────────────────────────────────
function CameraForm({ camera, clusters, onSave, onCancel, onDelete }) {
  const [data, setData] = useState(camera || {
    id: "", name: "", cluster: clusters[0]?.name || "",
    ipAddress: "", rtspUrl: "", brand: "Hikvision", model: "",
    aiFeatures: [], status: "online", uptime: 100,
  });

  const update = (k, v) => setData(prev => ({ ...prev, [k]: v }));
  const toggleAI = (f) => {
    const features = data.aiFeatures.includes(f) ? data.aiFeatures.filter(x => x !== f) : [...data.aiFeatures, f];
    update("aiFeatures", features);
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Nama Kamera" required>
          <Input value={data.name} onChange={v => update("name", v)} placeholder="Gerbang Utama" />
        </Field>
        <Field label="Cluster Lokasi" required>
          <Select value={data.cluster} onChange={v => update("cluster", v)} options={clusters.map(c => ({ value: c.name, label: c.name }))} />
        </Field>
        <Field label="IP Address" required>
          <Input value={data.ipAddress} onChange={v => update("ipAddress", v)} placeholder="192.168.1.100" />
        </Field>
        <Field label="Brand" required>
          <Select value={data.brand} onChange={v => update("brand", v)} options={["Hikvision", "Dahua", "Uniview", "IMOU", "Axis", "Bosch"]} />
        </Field>
        <Field label="Model" required>
          <Input value={data.model} onChange={v => update("model", v)} placeholder="DS-2CD2143G2" />
        </Field>
        <Field label="Status">
          <Select value={data.status} onChange={v => update("status", v)} options={[{ value: "online", label: "Online" }, { value: "offline", label: "Offline" }, { value: "maintenance", label: "Maintenance" }]} />
        </Field>
      </div>
      <Field label="RTSP Stream URL" required hint="Format: rtsp://user:pass@ip:port/path">
        <Input value={data.rtspUrl} onChange={v => update("rtspUrl", v)} placeholder="rtsp://admin:pass@192.168.1.100:554/h264" />
      </Field>
      <Field label="🤖 AI Features Aktif" hint="Pilih fitur AI yang aktif di kamera ini">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            { v: "motion", l: "🏃 Motion Detection" },
            { v: "face", l: "👤 Face Recognition" },
            { v: "anpr", l: "🚗 ANPR Plat Nomor" },
            { v: "loitering", l: "⚠️ Loitering Alert" },
            { v: "intrusion", l: "🚨 Intrusion Detect" },
          ].map(f => (
            <button key={f.v} onClick={() => toggleAI(f.v)} style={{
              background: data.aiFeatures.includes(f.v) ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.04)",
              border: data.aiFeatures.includes(f.v) ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.1)",
              color: data.aiFeatures.includes(f.v) ? "#f59e0b" : "#94a3b8",
              borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600,
              cursor: "pointer",
            }}>{f.l}</button>
          ))}
        </div>
      </Field>
      <FormButtons onCancel={onCancel} onSubmit={() => onSave(data)} submitLabel={camera ? "Update Kamera" : "+ Tambah Kamera"} onDelete={camera ? onDelete : null} />
    </>
  );
}

// ─── GATE FORM ────────────────────────────────────────────────────────────────
function GateForm({ gate, clusters, onSave, onCancel, onDelete }) {
  const [data, setData] = useState(gate || {
    id: "", name: "", cluster: clusters[0]?.name || "",
    controllerIp: "", controllerType: "ZKTeco InBio260",
    method: "RFID", status: "closed", relayDuration: 5,
  });

  const update = (k, v) => setData(prev => ({ ...prev, [k]: v }));

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Nama Gate" required>
          <Input value={data.name} onChange={v => update("name", v)} placeholder="Main Gate Masuk" />
        </Field>
        <Field label="Cluster Lokasi" required>
          <Select value={data.cluster} onChange={v => update("cluster", v)} options={clusters.map(c => ({ value: c.name, label: c.name }))} />
        </Field>
        <Field label="IP Controller" required>
          <Input value={data.controllerIp} onChange={v => update("controllerIp", v)} placeholder="192.168.1.50" />
        </Field>
        <Field label="Tipe Controller" required>
          <Select value={data.controllerType} onChange={v => update("controllerType", v)} options={[
            "ZKTeco InBio260",
            "ZKTeco InBio460 Pro",
            "Suprema BioStar 2",
            "Hikvision DS-K2604T",
            "Raspberry Pi + Relay",
          ]} />
        </Field>
        <Field label="Method Akses" required>
          <Select value={data.method} onChange={v => update("method", v)} options={[
            "RFID",
            "RFID + ANPR",
            "ANPR",
            "QR Code",
            "RFID + QR + ANPR",
            "Manual",
          ]} />
        </Field>
        <Field label="Durasi Buka (detik)" required>
          <Input type="number" min="1" max="30" value={data.relayDuration} onChange={v => update("relayDuration", +v)} />
        </Field>
      </div>
      <FormButtons onCancel={onCancel} onSubmit={() => onSave(data)} submitLabel={gate ? "Update Gate" : "+ Tambah Gate"} onDelete={gate ? onDelete : null} />
    </>
  );
}

// ─── CLUSTER FORM ─────────────────────────────────────────────────────────────
function ClusterForm({ cluster, onSave, onCancel, onDelete }) {
  const [data, setData] = useState(cluster || {
    id: "", name: "", type: "Komplek", client: "",
    address: "", totalUnits: 0, totalGuards: 0,
    managementFee: 1500000, guardFee: 3800000,
    geofence: { lat: 0, lng: 0, radius: 500 },
  });

  const update = (k, v) => setData(prev => ({ ...prev, [k]: v }));
  const updateGeofence = (k, v) => setData(prev => ({ ...prev, geofence: { ...prev.geofence, [k]: v } }));

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Nama Properti" required>
          <Input value={data.name} onChange={v => update("name", v)} placeholder="Grand Duta Residence" />
        </Field>
        <Field label="Tipe Properti" required>
          <Select value={data.type} onChange={v => update("type", v)} options={["Komplek", "Mall", "Apartemen", "Kantor", "Pabrik"]} />
        </Field>
        <Field label="Klien (Pemilik)" required>
          <Select value={data.client} onChange={v => update("client", v)} options={CLIENTS.map(c => ({ value: c.name, label: c.name }))} />
        </Field>
        <Field label="Total Unit / Tenant">
          <Input type="number" value={data.totalUnits} onChange={v => update("totalUnits", +v)} />
        </Field>
      </div>
      <Field label="Alamat Lengkap" required>
        <Input value={data.address} onChange={v => update("address", v)} placeholder="Jl. Raya Serpong KM 7, BSD City" />
      </Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Field label="Management Fee (Rp/bulan)" required>
          <Input type="number" value={data.managementFee} onChange={v => update("managementFee", +v)} />
        </Field>
        <Field label="Fee per Security (Rp/bulan)" required>
          <Input type="number" value={data.guardFee} onChange={v => update("guardFee", +v)} />
        </Field>
      </div>
      <div style={{
        background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)",
        borderRadius: 10, padding: 16, marginTop: 8,
      }}>
        <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 13, marginBottom: 4 }}>📍 Geofence (untuk Smart Attendance GPS)</div>
        <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 12 }}>Lokasi untuk auto-detect security via GPS phone</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <Field label="Latitude">
            <Input type="number" step="0.0001" value={data.geofence.lat} onChange={v => updateGeofence("lat", +v)} placeholder="-6.2972" />
          </Field>
          <Field label="Longitude">
            <Input type="number" step="0.0001" value={data.geofence.lng} onChange={v => updateGeofence("lng", +v)} placeholder="106.6716" />
          </Field>
          <Field label="Radius (m)">
            <Input type="number" value={data.geofence.radius} onChange={v => updateGeofence("radius", +v)} />
          </Field>
        </div>
      </div>
      <FormButtons onCancel={onCancel} onSubmit={() => onSave(data)} submitLabel={cluster ? "Update Properti" : "+ Tambah Properti"} onDelete={cluster ? onDelete : null} />
    </>
  );
}

// ─── SMART ATTENDANCE PAGE ────────────────────────────────────────────────────
function SmartAttendancePage({ guards, clusters, attendance, setAttendance }) {
  const [scanning, setScanning] = useState(false);
  const [detectedGuard, setDetectedGuard] = useState(null);
  const [activeMethod, setActiveMethod] = useState("face");

  const checkInGuard = (guardId, method = "face") => {
    const guard = guards.find(g => g.id === guardId);
    if (!guard) return;

    const existing = attendance.find(a => a.guardId === guardId && a.date === today());
    if (existing) return; // already checked in

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const newEntry = {
      id: Date.now(),
      guardId,
      name: guard.name,
      cluster: guard.cluster,
      checkIn: timeStr,
      checkOut: null,
      date: today(),
      status: "hadir",
      late: now.getHours() > 6 || (now.getHours() === 6 && now.getMinutes() > 10),
      method,
      verified: true,
      gpsLocation: clusters.find(c => c.name === guard.cluster)?.geofence,
      photoEvidence: `evidence-${guardId}-${Date.now()}.jpg`,
    };

    setAttendance(prev => [newEntry, ...prev]);
    setDetectedGuard(newEntry);
    setTimeout(() => setDetectedGuard(null), 4000);
  };

  const simulateFaceDetection = () => {
    const unscanned = guards.filter(g =>
      g.status === "active" && !attendance.find(a => a.guardId === g.id && a.date === today())
    );
    if (unscanned.length === 0) return;
    setScanning(true);
    setTimeout(() => {
      checkInGuard(unscanned[0].id, "face");
      setScanning(false);
    }, 2000);
  };

  const todayAttendance = attendance.filter(a => a.date === today());
  const presentCount = todayAttendance.filter(a => a.status === "hadir").length;
  const totalActive = guards.filter(g => g.status === "active").length;

  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>🎯 Smart Attendance · Auto-Detection</h1>
      <p style={{ color: "#64748b", marginBottom: 24, fontSize: 14 }}>Zero manual input · 100% transparant · Multi-method verification</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
        <StatCard icon="✅" label="Hadir Hari Ini" value={`${presentCount}/${totalActive}`} sub={`${Math.round(presentCount/totalActive*100)}% kehadiran`} accent="#22c55e" />
        <StatCard icon="🤖" label="Auto-detected" value={todayAttendance.filter(a => a.method === "face").length} sub="Via Face Recognition" accent="#3b82f6" />
        <StatCard icon="📍" label="GPS Verified" value={todayAttendance.filter(a => a.method === "gps").length} sub="Geofence check-in" accent="#8b5cf6" />
        <StatCard icon="⏰" label="Terlambat" value={todayAttendance.filter(a => a.late).length} sub="Lewat dari 06:10" accent="#f59e0b" />
      </div>

      {/* Method Selector */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, padding: 4, background: "rgba(255,255,255,0.04)", borderRadius: 12, width: "fit-content" }}>
        {[
          { v: "face", l: "🤖 Face Recognition", c: "#22c55e" },
          { v: "gps", l: "📍 GPS Geofencing", c: "#3b82f6" },
          { v: "rfid", l: "🪪 RFID Tap", c: "#f59e0b" },
          { v: "audit", l: "📋 Audit Trail", c: "#8b5cf6" },
        ].map(m => (
          <button key={m.v} onClick={() => setActiveMethod(m.v)} style={{
            background: activeMethod === m.v ? `${m.c}22` : "transparent",
            border: activeMethod === m.v ? `1px solid ${m.c}55` : "1px solid transparent",
            color: activeMethod === m.v ? m.c : "#94a3b8",
            borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 700,
            cursor: "pointer",
          }}>{m.l}</button>
        ))}
      </div>

      {/* FACE RECOGNITION */}
      {activeMethod === "face" && (
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>
          <div onClick={simulateFaceDetection} style={{
            background: "#000", borderRadius: 12, overflow: "hidden",
            border: scanning ? "2px solid #22c55e" : "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer", aspectRatio: "16/9", position: "relative",
            boxShadow: scanning ? "0 0 60px rgba(34,197,94,0.4)" : "none",
            transition: "all 0.3s",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: `radial-gradient(ellipse at 50% 60%, rgba(100,150,200,0.3) 0%, transparent 50%), linear-gradient(180deg, #0a0e14 0%, #1a1f2e 50%, #0a0e14 100%)`,
              animation: "feedPulse 4s ease-in-out infinite",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 3px)",
              pointerEvents: "none",
            }} />

            {/* Top overlay */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              padding: "12px 16px",
              background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ color: "#22c55e", fontSize: 11, fontWeight: 800, letterSpacing: "1px" }}>🤖 AI FACE RECOGNITION</div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 2 }}>CAM03 · Pos Satpam Utama</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", animation: "blink 1s infinite" }} />
                <span style={{ color: "#ef4444", fontSize: 11, fontWeight: 800, letterSpacing: "1px" }}>LIVE</span>
              </div>
            </div>

            {/* Detection box */}
            {scanning && (
              <div style={{
                position: "absolute", top: "30%", left: "40%",
                width: "20%", height: "30%",
                border: "2px solid #22c55e",
                animation: "scanBox 1s infinite",
              }}>
                <div style={{ position: "absolute", top: -24, left: 0, color: "#22c55e", fontSize: 11, fontWeight: 700, letterSpacing: "1px", whiteSpace: "nowrap" }}>SCANNING...</div>
              </div>
            )}

            {detectedGuard && (
              <div style={{
                position: "absolute", top: "30%", left: "35%",
                width: "30%", height: "35%",
                border: "3px solid #22c55e",
                background: "rgba(34,197,94,0.1)",
                animation: "fadeIn 0.5s",
              }}>
                <div style={{
                  position: "absolute", top: -32, left: 0,
                  background: "#22c55e", color: "#000",
                  padding: "4px 10px", borderRadius: 4,
                  fontSize: 12, fontWeight: 800, whiteSpace: "nowrap",
                }}>✓ {detectedGuard.name}</div>
              </div>
            )}

            {/* Center prompt */}
            {!scanning && !detectedGuard && (
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 56, marginBottom: 8, opacity: 0.8 }}>🤖</div>
                <div style={{ color: "#22c55e", fontWeight: 800, fontSize: 16 }}>Klik untuk simulate AI Detection</div>
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Security otomatis ke-detect saat masuk frame</div>
              </div>
            )}
          </div>

          <div>
            <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12, padding: 20 }}>
              <div style={{ color: "#22c55e", fontWeight: 800, fontSize: 14, marginBottom: 8 }}>🎯 Cara Kerja</div>
              <div style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6 }}>
                <p style={{ marginBottom: 8, color: "inherit" }}>Setiap security yang udah di-enroll (foto wajah ter-register), saat lewat depan kamera AI di pos satpam = <b>otomatis tercatat absen</b>.</p>
                <p style={{ color: "inherit" }}>Zero manual. Zero tap. Zero ghost workers. Tamper-proof karena ada photo evidence.</p>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>Belum Check-in Hari Ini</div>
              {guards.filter(g => g.status === "active" && !attendance.find(a => a.guardId === g.id && a.date === today())).slice(0, 5).map(g => (
                <div key={g.id} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "8px 12px", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8, marginBottom: 6,
                }}>
                  <div style={{ fontSize: 18 }}>👮</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{g.name}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{g.cluster}</div>
                  </div>
                  <Badge color="#94a3b8">Standby</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GPS GEOFENCING */}
      {activeMethod === "gps" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 14 }}>📍 Geofence per Cluster</div>
            {clusters.map(c => (
              <div key={c.id} style={{
                padding: "12px 14px", background: "rgba(59,130,246,0.05)",
                border: "1px solid rgba(59,130,246,0.15)",
                borderRadius: 8, marginBottom: 8,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{c.name}</div>
                  <Badge color="#3b82f6">📍 Active</Badge>
                </div>
                <div style={{ color: "#64748b", fontSize: 11, fontFamily: "monospace" }}>
                  {c.geofence.lat.toFixed(4)}, {c.geofence.lng.toFixed(4)} · radius {c.geofence.radius}m
                </div>
                <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4 }}>
                  {guards.filter(g => g.cluster === c.name && g.status === "active").length} security · {todayAttendance.filter(a => a.cluster === c.name).length} hadir
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 16, fontSize: 14 }}>📱 Auto Check-in via Phone</div>
            <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 16 }}>
              Phone security tracked silently. Saat masuk geofence cluster + waktu shift → auto check-in. Saat keluar → auto check-out.
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {guards.filter(g => g.status === "active").slice(0, 4).map(g => {
                const att = todayAttendance.find(a => a.guardId === g.id);
                return (
                  <div key={g.id} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 12px", background: "rgba(255,255,255,0.03)",
                    borderRadius: 8,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: att ? "rgba(34,197,94,0.15)" : "rgba(148,163,184,0.1)",
                      border: `2px solid ${att ? "#22c55e" : "#94a3b8"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14,
                    }}>{att ? "✓" : "•"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{g.name}</div>
                      <div style={{ fontSize: 11, color: "#64748b" }}>
                        {att ? `Inside zone · ${att.checkIn}` : "Outside geofence"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* RFID */}
      {activeMethod === "rfid" && (
        <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🪪</div>
          <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>RFID Tap Mode</div>
          <div style={{ color: "#94a3b8", fontSize: 14, maxWidth: 500, margin: "0 auto 24px" }}>
            Backup mode kalau face recognition gagal. Security tap kartu RFID di reader ZKTeco di pos satpam.
          </div>
          <button onClick={() => {
            const unscanned = guards.filter(g => g.status === "active" && !attendance.find(a => a.guardId === g.id && a.date === today()));
            if (unscanned.length > 0) checkInGuard(unscanned[0].id, "rfid");
          }} style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            border: "none", borderRadius: 8, color: "#000",
            padding: "12px 32px", fontSize: 14, fontWeight: 800, cursor: "pointer",
          }}>📡 Simulate RFID Tap</button>
        </div>
      )}

      {/* AUDIT TRAIL */}
      {activeMethod === "audit" && (
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 700, fontSize: 14 }}>📋 Audit Trail · Tamper-proof Log</span>
            <Badge color="#8b5cf6">{todayAttendance.length} entries hari ini</Badge>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                {["Timestamp", "Security", "Cluster", "Method", "GPS", "Photo", "Status"].map(h => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", color: "#64748b", fontSize: 11, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {todayAttendance.map(a => (
                <tr key={a.id} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "10px 16px", fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>{a.date} {a.checkIn}</td>
                  <td style={{ padding: "10px 16px", fontWeight: 600 }}>{a.name}</td>
                  <td style={{ padding: "10px 16px", color: "#94a3b8", fontSize: 12 }}>{a.cluster}</td>
                  <td style={{ padding: "10px 16px" }}>
                    <Badge color={a.method === "face" ? "#22c55e" : a.method === "gps" ? "#3b82f6" : "#f59e0b"}>
                      {a.method === "face" ? "🤖 AI" : a.method === "gps" ? "📍 GPS" : "🪪 RFID"}
                    </Badge>
                  </td>
                  <td style={{ padding: "10px 16px", fontSize: 11, color: a.gpsLocation ? "#22c55e" : "#64748b" }}>
                    {a.gpsLocation ? "✓ Verified" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px", fontSize: 11, color: a.photoEvidence ? "#22c55e" : "#64748b" }}>
                    {a.photoEvidence ? "📸 Saved" : "—"}
                  </td>
                  <td style={{ padding: "10px 16px" }}><Badge color={a.late ? "#f59e0b" : "#22c55e"}>{a.late ? "Late" : "On-time"}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
        @keyframes blink { 0%,49%{opacity:1}50%,100%{opacity:0.3} }
        @keyframes feedPulse { 0%,100%{filter:brightness(1)}50%{filter:brightness(1.1)} }
        @keyframes scanBox { 0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:1;transform:scale(1.05)} }
      `}</style>
    </div>
  );
}

// ─── REPORT GENERATOR (CLIENT) ────────────────────────────────────────────────
function ReportsPage({ user, clusters, guards, attendance }) {
  const [reportType, setReportType] = useState("attendance");
  const [dateRange, setDateRange] = useState({ from: "2025-05-01", to: "2025-05-31" });
  const [generating, setGenerating] = useState(false);
  const [jsPDFLib, setJsPDFLib] = useState(null);

  const myClusters = clusters.filter(c => user.clusterIds.includes(c.id));
  const myClusterNames = myClusters.map(c => c.name);
  const myGuards = guards.filter(g => myClusterNames.includes(g.cluster));
  const myAttendance = attendance.filter(a => myClusterNames.includes(a.cluster));

  // Load jsPDF dynamically from CDN
  useEffect(() => {
    if (window.jspdf) {
      setJsPDFLib(window.jspdf);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = () => {
      const autotable = document.createElement("script");
      autotable.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.0/jspdf.plugin.autotable.min.js";
      autotable.onload = () => setJsPDFLib(window.jspdf);
      document.head.appendChild(autotable);
    };
    document.head.appendChild(script);
  }, []);

  const reportTypes = [
    { id: "attendance", icon: "📋", title: "Laporan Absensi", desc: "Detail kehadiran semua security per properti" },
    { id: "performance", icon: "📊", title: "Laporan Performa", desc: "Penilaian KPI dan rating security" },
    { id: "financial", icon: "💰", title: "Laporan Tagihan", desc: "Breakdown management fee & gaji security" },
    { id: "incidents", icon: "🚨", title: "Laporan Insiden", desc: "Daftar laporan & kejadian dari aplikasi warga" },
    { id: "summary", icon: "📑", title: "Laporan Lengkap", desc: "Semua di atas dalam satu dokumen" },
  ];

  // ─── PDF GENERATOR ─────────────────────────────────────────────────────────
  const downloadPDF = () => {
    if (!jsPDFLib) {
      alert("PDF library masih loading, coba sebentar lagi.");
      return;
    }
    setGenerating(true);

    try {
      const { jsPDF } = jsPDFLib;
      const doc = new jsPDF();
      const monthName = new Date(dateRange.from).toLocaleDateString("id-ID", { month: "long", year: "numeric" });

      // Header
      doc.setFillColor(245, 158, 11);
      doc.rect(0, 0, 210, 30, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      doc.setFont(undefined, "bold");
      doc.text("SecureForce OMS", 14, 15);
      doc.setFontSize(11);
      doc.setFont(undefined, "normal");
      doc.text("Laporan Bulanan untuk Klien", 14, 22);

      // Subheader
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont(undefined, "bold");
      doc.text(reportTypes.find(r => r.id === reportType).title, 14, 45);

      doc.setFontSize(10);
      doc.setFont(undefined, "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(`Klien: ${user.name}`, 14, 54);
      doc.text(`Periode: ${dateRange.from} s/d ${dateRange.to} (${monthName})`, 14, 60);
      doc.text(`Generated: ${new Date().toLocaleString("id-ID")}`, 14, 66);

      let yPos = 80;

      // ATTENDANCE REPORT
      if (reportType === "attendance" || reportType === "summary") {
        doc.setFontSize(13);
        doc.setFont(undefined, "bold");
        doc.setTextColor(0, 0, 0);
        doc.text("📋 Laporan Absensi", 14, yPos);
        yPos += 8;

        const presentCount = myAttendance.filter(a => a.status === "hadir").length;
        const absentCount = myAttendance.filter(a => a.status === "absen").length;
        const lateCount = myAttendance.filter(a => a.late).length;

        doc.setFontSize(9);
        doc.setFont(undefined, "normal");
        doc.text(`Total Hadir: ${presentCount} | Absen: ${absentCount} | Terlambat: ${lateCount}`, 14, yPos);
        yPos += 8;

        doc.autoTable({
          startY: yPos,
          head: [["ID", "Nama Security", "Cluster", "Check-in", "Check-out", "Status", "Method"]],
          body: myAttendance.slice(0, 30).map(a => [
            a.guardId, a.name, a.cluster,
            a.checkIn || "—", a.checkOut || "—",
            a.status,
            a.method === "face" ? "AI" : a.method === "gps" ? "GPS" : a.method === "rfid" ? "RFID" : "Manual",
          ]),
          theme: "striped",
          headStyles: { fillColor: [245, 158, 11], textColor: [0, 0, 0], fontStyle: "bold" },
          styles: { fontSize: 8 },
        });
        yPos = doc.lastAutoTable.finalY + 12;
      }

      // PERFORMANCE
      if (reportType === "performance" || reportType === "summary") {
        if (yPos > 240) { doc.addPage(); yPos = 20; }
        doc.setFontSize(13);
        doc.setFont(undefined, "bold");
        doc.text("📊 Laporan Performa Security", 14, yPos);
        yPos += 8;
        doc.autoTable({
          startY: yPos,
          head: [["Nama", "Posisi", "Cluster", "Performa", "Rating"]],
          body: myGuards.map(g => [
            g.name, g.position, g.cluster,
            `${g.performance}%`,
            g.performance >= 90 ? "Excellent" : g.performance >= 80 ? "Good" : g.performance >= 70 ? "Average" : "Poor",
          ]),
          theme: "striped",
          headStyles: { fillColor: [245, 158, 11], textColor: [0, 0, 0], fontStyle: "bold" },
          styles: { fontSize: 9 },
        });
        yPos = doc.lastAutoTable.finalY + 12;
      }

      // FINANCIAL
      if (reportType === "financial" || reportType === "summary") {
        if (yPos > 240) { doc.addPage(); yPos = 20; }
        doc.setFontSize(13);
        doc.setFont(undefined, "bold");
        doc.text("💰 Tagihan Bulanan", 14, yPos);
        yPos += 8;

        const totalBill = myClusters.reduce((s, c) => s + c.managementFee + (c.guardFee * c.totalGuards), 0);

        doc.autoTable({
          startY: yPos,
          head: [["Properti", "Mgmt Fee", "Fee Security", "Total Security", "Subtotal"]],
          body: myClusters.map(c => [
            c.name,
            fmt(c.managementFee),
            fmt(c.guardFee),
            c.totalGuards,
            fmt(c.managementFee + (c.guardFee * c.totalGuards)),
          ]),
          foot: [["", "", "", "TOTAL", fmt(totalBill)]],
          theme: "striped",
          headStyles: { fillColor: [245, 158, 11], textColor: [0, 0, 0], fontStyle: "bold" },
          footStyles: { fillColor: [34, 197, 94], textColor: [255, 255, 255], fontStyle: "bold" },
          styles: { fontSize: 9 },
        });
      }

      // Footer
      const pages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pages; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`SecureForce OMS · Powered by TPC Media · Page ${i}/${pages}`, 14, 290);
      }

      const filename = `SecureForce_${reportType}_${dateRange.from}_${user.name.replace(/\s/g, "_")}.pdf`;
      doc.save(filename);
    } catch (e) {
      console.error(e);
      alert("Gagal generate PDF: " + e.message);
    }
    setGenerating(false);
  };

  // ─── EXCEL GENERATOR ───────────────────────────────────────────────────────
  const downloadExcel = () => {
    setGenerating(true);

    try {
      const wb = XLSX.utils.book_new();

      // Summary sheet
      const summaryData = [
        ["LAPORAN BULANAN - " + reportTypes.find(r => r.id === reportType).title.toUpperCase()],
        [],
        ["Klien", user.name],
        ["Periode", `${dateRange.from} s/d ${dateRange.to}`],
        ["Generated", new Date().toLocaleString("id-ID")],
        [],
        ["RINGKASAN"],
        ["Total Properti", myClusters.length],
        ["Total Security", myGuards.length],
        ["Total Hadir Periode Ini", myAttendance.filter(a => a.status === "hadir").length],
        ["Total Absen", myAttendance.filter(a => a.status === "absen").length],
        ["Rata-rata Performa", `${Math.round(myGuards.reduce((s,g)=>s+g.performance,0) / (myGuards.length || 1))}%`],
        ["Total Tagihan Bulanan", fmt(myClusters.reduce((s, c) => s + c.managementFee + (c.guardFee * c.totalGuards), 0))],
      ];
      const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
      summarySheet["!cols"] = [{ wch: 30 }, { wch: 30 }];
      XLSX.utils.book_append_sheet(wb, summarySheet, "Ringkasan");

      // Attendance sheet
      if (reportType === "attendance" || reportType === "summary") {
        const attData = [
          ["No", "Tanggal", "ID Security", "Nama", "Cluster", "Check-in", "Check-out", "Status", "Terlambat", "Method", "GPS Verified", "Photo Evidence"],
          ...myAttendance.map((a, i) => [
            i + 1, a.date, a.guardId, a.name, a.cluster,
            a.checkIn || "—", a.checkOut || "—", a.status,
            a.late ? "Ya" : "Tidak",
            a.method === "face" ? "AI Face Recognition" : a.method === "gps" ? "GPS Geofence" : a.method === "rfid" ? "RFID Card" : "Manual",
            a.gpsLocation ? "✓" : "—",
            a.photoEvidence ? "✓" : "—",
          ]),
        ];
        const attSheet = XLSX.utils.aoa_to_sheet(attData);
        attSheet["!cols"] = [{ wch: 5 }, { wch: 12 }, { wch: 10 }, { wch: 22 }, { wch: 25 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 18 }, { wch: 12 }, { wch: 12 }];
        XLSX.utils.book_append_sheet(wb, attSheet, "Absensi");
      }

      // Performance sheet
      if (reportType === "performance" || reportType === "summary") {
        const perfData = [
          ["No", "ID", "Nama", "Posisi", "Cluster", "Shift", "Performa (%)", "Rating", "Tanggal Bergabung"],
          ...myGuards.map((g, i) => [
            i + 1, g.id, g.name, g.position, g.cluster, g.shift,
            g.performance,
            g.performance >= 90 ? "Excellent" : g.performance >= 80 ? "Good" : g.performance >= 70 ? "Average" : "Poor",
            g.joinDate,
          ]),
        ];
        const perfSheet = XLSX.utils.aoa_to_sheet(perfData);
        perfSheet["!cols"] = [{ wch: 5 }, { wch: 10 }, { wch: 22 }, { wch: 18 }, { wch: 25 }, { wch: 18 }, { wch: 12 }, { wch: 12 }, { wch: 14 }];
        XLSX.utils.book_append_sheet(wb, perfSheet, "Performa");
      }

      // Financial sheet
      if (reportType === "financial" || reportType === "summary") {
        const finData = [
          ["TAGIHAN BULANAN"],
          [`Periode: ${dateRange.from} s/d ${dateRange.to}`],
          [],
          ["Properti", "Tipe", "Mgmt Fee", "Fee per Security", "Jumlah Security", "Subtotal Fee Security", "Total"],
        ];
        let totalBill = 0;
        myClusters.forEach(c => {
          const subtotalSec = c.guardFee * c.totalGuards;
          const total = c.managementFee + subtotalSec;
          totalBill += total;
          finData.push([c.name, c.type, c.managementFee, c.guardFee, c.totalGuards, subtotalSec, total]);
        });
        finData.push([], ["", "", "", "", "", "TOTAL TAGIHAN", totalBill]);

        const finSheet = XLSX.utils.aoa_to_sheet(finData);
        finSheet["!cols"] = [{ wch: 25 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 18 }, { wch: 18 }];
        XLSX.utils.book_append_sheet(wb, finSheet, "Tagihan");
      }

      const filename = `SecureForce_${reportType}_${dateRange.from}_${user.name.replace(/\s/g, "_")}.xlsx`;
      XLSX.writeFile(wb, filename);
    } catch (e) {
      console.error(e);
      alert("Gagal generate Excel: " + e.message);
    }
    setGenerating(false);
  };

  return (
    <div>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>📑 Reports & Downloads</h1>
      <p style={{ color: "#64748b", marginBottom: 24, fontSize: 14 }}>Generate laporan bulanan dalam PDF atau Excel · Auto-compiled dari sistem</p>

      {/* Date range */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📅 Periode Laporan</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, alignItems: "end" }}>
          <Field label="Dari Tanggal">
            <Input type="date" value={dateRange.from} onChange={v => setDateRange({ ...dateRange, from: v })} />
          </Field>
          <Field label="Sampai Tanggal">
            <Input type="date" value={dateRange.to} onChange={v => setDateRange({ ...dateRange, to: v })} />
          </Field>
          <div style={{ marginBottom: 18, display: "flex", gap: 6 }}>
            <button onClick={() => setDateRange({ from: "2025-05-01", to: "2025-05-31" })} style={{
              flex: 1, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
              color: "#22c55e", borderRadius: 6, padding: "8px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>Bulan Ini</button>
            <button onClick={() => setDateRange({ from: "2025-04-01", to: "2025-04-30" })} style={{
              flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8", borderRadius: 6, padding: "8px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>Bulan Lalu</button>
          </div>
        </div>
      </div>

      {/* Report type selector */}
      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📋 Pilih Jenis Laporan</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 24 }}>
        {reportTypes.map(rt => (
          <div key={rt.id} onClick={() => setReportType(rt.id)} style={{
            background: reportType === rt.id ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.03)",
            border: reportType === rt.id ? "2px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 18, cursor: "pointer",
            transition: "all 0.2s",
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{rt.icon}</div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, color: reportType === rt.id ? "#22c55e" : "#fff" }}>{rt.title}</div>
            <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{rt.desc}</div>
          </div>
        ))}
      </div>

      {/* Preview */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>👁 Preview Data</div>
          <Badge color="#22c55e">{reportTypes.find(r => r.id === reportType).title}</Badge>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 14 }}>
            <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>TOTAL PROPERTI</div>
            <div style={{ color: "#22c55e", fontSize: 22, fontWeight: 800 }}>{myClusters.length}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 14 }}>
            <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>TOTAL SECURITY</div>
            <div style={{ color: "#3b82f6", fontSize: 22, fontWeight: 800 }}>{myGuards.length}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 14 }}>
            <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>RECORDS</div>
            <div style={{ color: "#8b5cf6", fontSize: 22, fontWeight: 800 }}>{myAttendance.length}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 14 }}>
            <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>TOTAL TAGIHAN</div>
            <div style={{ color: "#f59e0b", fontSize: 16, fontWeight: 800 }}>{fmtK(myClusters.reduce((s, c) => s + c.managementFee + (c.guardFee * c.totalGuards), 0))}</div>
          </div>
        </div>
      </div>

      {/* Download buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <button onClick={downloadPDF} disabled={generating || !jsPDFLib} style={{
          background: jsPDFLib ? "linear-gradient(135deg, #ef4444, #dc2626)" : "rgba(239,68,68,0.3)",
          border: "none", borderRadius: 12, padding: "20px 32px",
          color: "#fff", fontSize: 16, fontWeight: 800,
          cursor: jsPDFLib && !generating ? "pointer" : "not-allowed",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          opacity: generating ? 0.6 : 1,
          boxShadow: jsPDFLib ? "0 0 40px rgba(239,68,68,0.3)" : "none",
        }}>
          <span style={{ fontSize: 28 }}>📄</span>
          <div style={{ textAlign: "left" }}>
            <div>{generating ? "Generating..." : "Download PDF"}</div>
            <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.8 }}>{jsPDFLib ? "Format profesional" : "Loading library..."}</div>
          </div>
        </button>
        <button onClick={downloadExcel} disabled={generating} style={{
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          border: "none", borderRadius: 12, padding: "20px 32px",
          color: "#fff", fontSize: 16, fontWeight: 800,
          cursor: !generating ? "pointer" : "not-allowed",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          opacity: generating ? 0.6 : 1,
          boxShadow: "0 0 40px rgba(34,197,94,0.3)",
        }}>
          <span style={{ fontSize: 28 }}>📊</span>
          <div style={{ textAlign: "left" }}>
            <div>{generating ? "Generating..." : "Download Excel"}</div>
            <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.8 }}>Multi-sheet workbook</div>
          </div>
        </button>
      </div>

      <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: 8, fontSize: 12, color: "#94a3b8" }}>
        💡 <b style={{ color: "#3b82f6" }}>Tip:</b> Untuk laporan paling lengkap, pilih "Laporan Lengkap" — semua data dalam satu file siap kirim ke management atau audit.
      </div>
    </div>
  );
}

// ─── ADMIN: GUARDS WITH CRUD ──────────────────────────────────────────────────
function GuardsTab({ guards, setGuards, clusters }) {
  const [modal, setModal] = useState({ open: false, guard: null });
  const open = (guard = null) => setModal({ open: true, guard });
  const close = () => setModal({ open: false, guard: null });

  const save = (data) => {
    if (modal.guard) {
      setGuards(prev => prev.map(g => g.id === modal.guard.id ? data : g));
    } else {
      setGuards(prev => [...prev, { ...data, id: generateId("SG", prev), faceId: data.faceId || `FC-${prev.length + 1}` }]);
    }
    close();
  };

  const del = () => {
    if (confirm(`Hapus ${modal.guard.name}?`)) {
      setGuards(prev => prev.filter(g => g.id !== modal.guard.id));
      close();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Manajemen Security</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>Total {guards.length} security · Klik untuk edit</p>
        </div>
        <button onClick={() => open()} style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          border: "none", borderRadius: 8, color: "#000",
          padding: "10px 20px", fontSize: 13, fontWeight: 800, cursor: "pointer",
        }}>+ Tambah Security</button>
      </div>

      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              {["ID", "Nama", "Posisi", "Cluster", "Shift", "Performa", "Gaji", "Face ID", "Status"].map(h => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#64748b", fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {guards.map(g => (
              <tr key={g.id} onClick={() => open(g)} style={{ borderTop: "1px solid rgba(255,255,255,0.04)", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={{ padding: "12px 16px", color: "#64748b", fontFamily: "monospace", fontSize: 12 }}>{g.id}</td>
                <td style={{ padding: "12px 16px", color: "#f1f5f9", fontWeight: 600 }}>{g.name}</td>
                <td style={{ padding: "12px 16px" }}><Badge color={g.position.includes("Chief") ? "#f59e0b" : "#64748b"}>{g.position}</Badge></td>
                <td style={{ padding: "12px 16px", color: "#94a3b8", fontSize: 12 }}>{g.cluster}</td>
                <td style={{ padding: "12px 16px", color: "#64748b", fontSize: 12 }}>{g.shift?.split(" ")[0]}</td>
                <td style={{ padding: "12px 16px", width: 130 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1 }}><ProgressBar value={g.performance} color={getPerformanceColor(g.performance)} /></div>
                    <span style={{ color: getPerformanceColor(g.performance), fontSize: 12, fontWeight: 700, minWidth: 30 }}>{g.performance}</span>
                  </div>
                </td>
                <td style={{ padding: "12px 16px", fontFamily: "monospace", fontSize: 12 }}>{fmt(g.baseSalary)}</td>
                <td style={{ padding: "12px 16px" }}>
                  {g.faceId ? <Badge color="#22c55e">✓ {g.faceId}</Badge> : <Badge color="#64748b">No Face</Badge>}
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <Badge color={g.status === "active" ? "#22c55e" : g.status === "leave" ? "#f59e0b" : "#ef4444"}>
                    {g.status === "active" ? "Aktif" : g.status === "leave" ? "Cuti" : "Resign"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modal.open} onClose={close} title={modal.guard ? `Edit: ${modal.guard.name}` : "Tambah Security Baru"} maxWidth={680}>
        <GuardForm guard={modal.guard} clusters={clusters} onSave={save} onCancel={close} onDelete={del} />
      </Modal>
    </div>
  );
}

// ─── ADMIN: CAMERAS WITH CRUD ─────────────────────────────────────────────────
function CamerasTab({ cameras, setCameras, clusters }) {
  const [modal, setModal] = useState({ open: false, camera: null });
  const open = (c = null) => setModal({ open: true, camera: c });
  const close = () => setModal({ open: false, camera: null });

  const save = (data) => {
    if (modal.camera) {
      setCameras(prev => prev.map(c => c.id === modal.camera.id ? data : c));
    } else {
      setCameras(prev => [...prev, { ...data, id: generateId("CAM", prev) }]);
    }
    close();
  };

  const del = () => {
    if (confirm(`Hapus kamera ${modal.camera.name}?`)) {
      setCameras(prev => prev.filter(c => c.id !== modal.camera.id));
      close();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>📹 Manajemen Kamera CCTV</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>{cameras.length} kamera terdaftar</p>
        </div>
        <button onClick={() => open()} style={{
          background: "linear-gradient(135deg, #3b82f6, #2563eb)",
          border: "none", borderRadius: 8, color: "#fff",
          padding: "10px 20px", fontSize: 13, fontWeight: 800, cursor: "pointer",
        }}>+ Tambah Kamera</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {cameras.map(cam => (
          <div key={cam.id} onClick={() => open(cam)} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 18, cursor: "pointer", transition: "all 0.2s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{cam.name}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{cam.id} · {cam.cluster}</div>
              </div>
              <Badge color={cam.status === "online" ? "#22c55e" : "#ef4444"}>{cam.status}</Badge>
            </div>

            {/* Live preview */}
            <div style={{
              background: "#000", borderRadius: 6, aspectRatio: "16/9", marginBottom: 12,
              position: "relative", overflow: "hidden",
            }}>
              {cam.status === "online" ? (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(ellipse at 30% 40%, rgba(100,150,200,0.3) 0%, transparent 50%), linear-gradient(180deg, #0a0e14 0%, #1a1f2e 100%)",
                }} />
              ) : (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", fontSize: 11, fontWeight: 700 }}>NO SIGNAL</div>
              )}
              <div style={{ position: "absolute", top: 6, right: 6, display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: cam.status === "online" ? "#ef4444" : "#475569", animation: cam.status === "online" ? "blink 1s infinite" : "none" }} />
                <span style={{ color: cam.status === "online" ? "#ef4444" : "#475569", fontSize: 9, fontWeight: 800 }}>{cam.status === "online" ? "LIVE" : "OFF"}</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10, fontSize: 11 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "6px 10px" }}>
                <div style={{ color: "#64748b" }}>Brand</div>
                <div style={{ color: "#e2e8f0", fontWeight: 600 }}>{cam.brand}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "6px 10px" }}>
                <div style={{ color: "#64748b" }}>IP Address</div>
                <div style={{ color: "#e2e8f0", fontFamily: "monospace", fontSize: 10 }}>{cam.ipAddress}</div>
              </div>
            </div>
            {cam.aiFeatures.length > 0 && (
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {cam.aiFeatures.map(f => <Badge key={f} color="#8b5cf6">{f}</Badge>)}
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal open={modal.open} onClose={close} title={modal.camera ? `Edit: ${modal.camera.name}` : "Tambah Kamera Baru"} maxWidth={680}>
        <CameraForm camera={modal.camera} clusters={clusters} onSave={save} onCancel={close} onDelete={del} />
      </Modal>
    </div>
  );
}

// ─── ADMIN: GATES WITH CRUD ───────────────────────────────────────────────────
function GatesTab({ gates, setGates, clusters }) {
  const [modal, setModal] = useState({ open: false, gate: null });
  const open = (g = null) => setModal({ open: true, gate: g });
  const close = () => setModal({ open: false, gate: null });

  const save = (data) => {
    if (modal.gate) setGates(prev => prev.map(g => g.id === modal.gate.id ? data : g));
    else setGates(prev => [...prev, { ...data, id: generateId("GT", prev) }]);
    close();
  };

  const del = () => {
    if (confirm(`Hapus gate ${modal.gate.name}?`)) {
      setGates(prev => prev.filter(g => g.id !== modal.gate.id));
      close();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>🚧 Manajemen Akses Gate</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>{gates.length} gate terkonfigurasi</p>
        </div>
        <button onClick={() => open()} style={{
          background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
          border: "none", borderRadius: 8, color: "#fff",
          padding: "10px 20px", fontSize: 13, fontWeight: 800, cursor: "pointer",
        }}>+ Tambah Gate</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {gates.map(g => (
          <div key={g.id} onClick={() => open(g)} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 20, cursor: "pointer",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{g.name}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{g.id} · {g.cluster}</div>
              </div>
              <Badge color={g.status === "open" ? "#22c55e" : "#94a3b8"}>{g.status}</Badge>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ color: "#64748b", fontSize: 10 }}>CONTROLLER</div>
                <div style={{ color: "#e2e8f0", fontSize: 11, fontWeight: 600 }}>{g.controllerType}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ color: "#64748b", fontSize: 10 }}>IP ADDRESS</div>
                <div style={{ color: "#e2e8f0", fontFamily: "monospace", fontSize: 11 }}>{g.controllerIp}</div>
              </div>
            </div>
            <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 6, padding: "8px 12px", textAlign: "center" }}>
              <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 800 }}>🪪 {g.method}</div>
              <div style={{ color: "#94a3b8", fontSize: 10, marginTop: 2 }}>Open duration: {g.relayDuration}s</div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modal.open} onClose={close} title={modal.gate ? `Edit: ${modal.gate.name}` : "Tambah Gate Baru"} maxWidth={680}>
        <GateForm gate={modal.gate} clusters={clusters} onSave={save} onCancel={close} onDelete={del} />
      </Modal>
    </div>
  );
}

// ─── ADMIN: PROPERTIES WITH CRUD ──────────────────────────────────────────────
function PropertiesTab({ clusters, setClusters }) {
  const [modal, setModal] = useState({ open: false, cluster: null });
  const open = (c = null) => setModal({ open: true, cluster: c });
  const close = () => setModal({ open: false, cluster: null });

  const save = (data) => {
    if (modal.cluster) setClusters(prev => prev.map(c => c.id === modal.cluster.id ? data : c));
    else setClusters(prev => [...prev, { ...data, id: generateId("C", prev) }]);
    close();
  };

  const del = () => {
    if (confirm(`Hapus properti ${modal.cluster.name}?`)) {
      setClusters(prev => prev.filter(c => c.id !== modal.cluster.id));
      close();
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>🏢 Manajemen Properti</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>{clusters.length} properti aktif</p>
        </div>
        <button onClick={() => open()} style={{
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          border: "none", borderRadius: 8, color: "#fff",
          padding: "10px 20px", fontSize: 13, fontWeight: 800, cursor: "pointer",
        }}>+ Tambah Properti</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 16 }}>
        {clusters.map(c => (
          <div key={c.id} onClick={() => open(c)} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 20, cursor: "pointer",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{c.name}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{c.id} · {c.client}</div>
              </div>
              <Badge color={c.type === "Mall" ? "#8b5cf6" : "#22c55e"}>{c.type}</Badge>
            </div>
            <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 12 }}>📍 {c.address}</div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 12 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
                <div style={{ color: "#64748b", fontSize: 10 }}>UNIT</div>
                <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 800 }}>{c.totalUnits}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
                <div style={{ color: "#64748b", fontSize: 10 }}>SECURITY</div>
                <div style={{ color: "#22c55e", fontSize: 14, fontWeight: 800 }}>{c.totalGuards}</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
                <div style={{ color: "#64748b", fontSize: 10 }}>FEE/BLN</div>
                <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 800 }}>{fmtK(c.managementFee + c.guardFee * c.totalGuards)}</div>
              </div>
            </div>

            <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 6, padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#22c55e", fontSize: 11, fontWeight: 700 }}>📍 Geofence Active</span>
              <span style={{ color: "#94a3b8", fontSize: 10, fontFamily: "monospace" }}>r={c.geofence.radius}m</span>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modal.open} onClose={close} title={modal.cluster ? `Edit: ${modal.cluster.name}` : "Tambah Properti Baru"} maxWidth={720}>
        <ClusterForm cluster={modal.cluster} onSave={save} onCancel={close} onDelete={del} />
      </Modal>
    </div>
  );
}

// ─── LOGIN PAGE ───────────────────────────────────────────────────────────────
function LoginPage({ onLogin }) {
  const [role, setRole] = useState("outsource");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (role === "outsource") {
      if (email === OUTSOURCE_ADMIN.email && password === OUTSOURCE_ADMIN.password) onLogin({ role: "outsource", data: OUTSOURCE_ADMIN });
      else setError("Email atau password salah.");
    } else {
      const client = CLIENTS.find(c => c.email === email && c.password === password);
      if (client) onLogin({ role: "client", data: client });
      else setError("Email atau password salah.");
    }
  };

  const prefill = (r) => {
    setRole(r);
    if (r === "outsource") { setEmail("admin@secureforce.co.id"); setPassword("admin123"); }
    else { setEmail("admin@dutaproperti.co.id"); setPassword("client123"); }
    setError("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Sora', sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 440, padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ width: 64, height: 64, margin: "0 auto 16px", background: "linear-gradient(135deg, #f59e0b, #d97706)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🛡️</div>
          <div style={{ color: "#f1f5f9", fontSize: 24, fontWeight: 800 }}>SecureForce v3</div>
          <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Smart Attendance · Auto-Reports · Full CRUD</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 4 }}>
          {[["outsource", "🏢 Outsourcing"], ["client", "👤 Klien"]].map(([r, label]) => (
            <button key={r} onClick={() => prefill(r)} style={{
              background: role === r ? "rgba(245,158,11,0.15)" : "transparent",
              border: role === r ? "1px solid rgba(245,158,11,0.4)" : "1px solid transparent",
              color: role === r ? "#f59e0b" : "#64748b",
              borderRadius: 7, padding: "10px 0", fontSize: 13, fontWeight: 700, cursor: "pointer",
            }}>{label}</button>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
          {[["Email", "email"], ["Password", "password"]].map(([label, type], i) => (
            <div key={label} style={{ marginBottom: i === 0 ? 16 : 20 }}>
              <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: "uppercase" }}>{label}</div>
              <input type={type} value={i === 0 ? email : password} onChange={e => i === 0 ? setEmail(e.target.value) : setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} style={inputStyle} />
            </div>
          ))}
          {error && <div style={{ color: "#ef4444", fontSize: 13, marginBottom: 16, background: "rgba(239,68,68,0.1)", padding: "8px 12px", borderRadius: 6 }}>{error}</div>}
          <button onClick={handleLogin} style={{ width: "100%", padding: "13px 0", background: "linear-gradient(135deg, #f59e0b, #d97706)", border: "none", borderRadius: 8, color: "#000", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>Masuk ke Dashboard</button>
        </div>
      </div>
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
function OutsourceDashboard({ user, onLogout, state, setState }) {
  const [tab, setTab] = useState("overview");

  const tabs = [
    { k: "overview", l: "📊 Overview", section: "ops" },
    { k: "smart", l: "🎯 Smart Attendance", section: "ops" },
    { k: "guards", l: "👮 Security", section: "ops" },
    { k: "properties", l: "🏢 Properti", section: "ops" },
    { k: "payroll", l: "💰 Payroll", section: "ops" },
    { k: "cameras", l: "📹 CCTV", section: "infra" },
    { k: "gates", l: "🚧 Gate Akses", section: "infra" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", color: "#f1f5f9", fontFamily: "'Sora', sans-serif" }}>
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 240, background: "rgba(255,255,255,0.02)", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", overflowY: "auto" }}>
        <div style={{ padding: "0 20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #f59e0b, #d97706)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛡️</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800 }}>SecureForce</div>
            <div style={{ fontSize: 11, color: "#64748b" }}>Admin Panel · v3</div>
          </div>
        </div>

        <nav style={{ padding: "16px 12px" }}>
          <div style={{ color: "#475569", fontSize: 10, fontWeight: 700, padding: "0 12px 8px", letterSpacing: "1px" }}>OPERATIONS</div>
          {tabs.filter(t => t.section === "ops").map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              display: "block", width: "100%", padding: "10px 12px", borderRadius: 8,
              background: tab === t.k ? "rgba(245,158,11,0.12)" : "transparent",
              border: tab === t.k ? "1px solid rgba(245,158,11,0.25)" : "1px solid transparent",
              color: tab === t.k ? "#f59e0b" : "#64748b",
              fontSize: 13, fontWeight: tab === t.k ? 700 : 500, cursor: "pointer", marginBottom: 4, textAlign: "left",
            }}>{t.l}</button>
          ))}

          <div style={{ color: "#475569", fontSize: 10, fontWeight: 700, padding: "16px 12px 8px", letterSpacing: "1px" }}>INFRASTRUCTURE</div>
          {tabs.filter(t => t.section === "infra").map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              display: "block", width: "100%", padding: "10px 12px", borderRadius: 8,
              background: tab === t.k ? "rgba(34,197,94,0.12)" : "transparent",
              border: tab === t.k ? "1px solid rgba(34,197,94,0.25)" : "1px solid transparent",
              color: tab === t.k ? "#22c55e" : "#64748b",
              fontSize: 13, fontWeight: tab === t.k ? 700 : 500, cursor: "pointer", marginBottom: 4, textAlign: "left",
            }}>{t.l}</button>
          ))}
        </nav>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 4 }}>{user.company}</div>
          <button onClick={onLogout} style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", width: "100%" }}>Keluar</button>
        </div>
      </div>

      <div style={{ marginLeft: 240, padding: 32, minHeight: "100vh" }}>
        {tab === "overview" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Dashboard Overview</h1>
            <p style={{ color: "#64748b", marginBottom: 32, fontSize: 14 }}>Real-time monitoring · {today()}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
              <StatCard icon="👮" label="Total Security" value={state.guards.length} sub={`${state.attendance.filter(a => a.date === today() && a.status === "hadir").length} hadir`} />
              <StatCard icon="🏢" label="Properti" value={state.clusters.length} sub="Aktif" accent="#22c55e" />
              <StatCard icon="📹" label="Kamera" value={state.cameras.length} sub={`${state.cameras.filter(c => c.status === "online").length} online`} accent="#3b82f6" />
              <StatCard icon="🚧" label="Gate" value={state.gates.length} sub="Terkonfigurasi" accent="#8b5cf6" />
            </div>

            <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: 40 }}>🎯</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#f59e0b", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Smart Attendance Aktif</div>
                  <div style={{ color: "#94a3b8", fontSize: 13 }}>Auto-detection lewat AI Face Recognition + GPS Geofencing. Zero manual input. Klik tab "Smart Attendance" untuk monitor live.</div>
                </div>
                <button onClick={() => setTab("smart")} style={{
                  background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)",
                  color: "#f59e0b", borderRadius: 8, padding: "10px 20px",
                  fontSize: 13, fontWeight: 700, cursor: "pointer",
                }}>Buka →</button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {[
                { l: "+ Tambah Security", c: "#f59e0b", t: "guards" },
                { l: "+ Tambah Properti", c: "#22c55e", t: "properties" },
                { l: "+ Tambah Kamera", c: "#3b82f6", t: "cameras" },
                { l: "+ Tambah Gate", c: "#8b5cf6", t: "gates" },
              ].map(q => (
                <button key={q.t} onClick={() => setTab(q.t)} style={{
                  background: `${q.c}11`, border: `1px solid ${q.c}33`,
                  color: q.c, borderRadius: 10, padding: "16px",
                  fontSize: 13, fontWeight: 700, cursor: "pointer", textAlign: "left",
                }}>{q.l}</button>
              ))}
            </div>
          </div>
        )}

        {tab === "smart" && <SmartAttendancePage guards={state.guards} clusters={state.clusters} attendance={state.attendance} setAttendance={att => setState({ ...state, attendance: typeof att === "function" ? att(state.attendance) : att })} />}
        {tab === "guards" && <GuardsTab guards={state.guards} setGuards={g => setState({ ...state, guards: typeof g === "function" ? g(state.guards) : g })} clusters={state.clusters} />}
        {tab === "properties" && <PropertiesTab clusters={state.clusters} setClusters={c => setState({ ...state, clusters: typeof c === "function" ? c(state.clusters) : c })} />}
        {tab === "cameras" && <CamerasTab cameras={state.cameras} setCameras={c => setState({ ...state, cameras: typeof c === "function" ? c(state.cameras) : c })} clusters={state.clusters} />}
        {tab === "gates" && <GatesTab gates={state.gates} setGates={g => setState({ ...state, gates: typeof g === "function" ? g(state.gates) : g })} clusters={state.clusters} />}
        {tab === "payroll" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>💰 Payroll Bulan Ini</h1>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                    {["Nama", "Cluster", "Gaji Pokok", "Bonus", "Total"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#64748b", fontSize: 11, textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {state.guards.map(g => {
                    const bonus = g.performance >= 90 ? 300000 : g.performance >= 80 ? 150000 : 0;
                    return (
                      <tr key={g.id} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 600 }}>{g.name}</td>
                        <td style={{ padding: "12px 16px", color: "#94a3b8", fontSize: 12 }}>{g.cluster}</td>
                        <td style={{ padding: "12px 16px", fontFamily: "monospace", fontSize: 12 }}>{fmt(g.baseSalary)}</td>
                        <td style={{ padding: "12px 16px", fontFamily: "monospace", fontSize: 12, color: "#22c55e" }}>+{fmt(bonus)}</td>
                        <td style={{ padding: "12px 16px", fontFamily: "monospace", fontWeight: 700, color: "#f59e0b" }}>{fmt(g.baseSalary + bonus)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CLIENT DASHBOARD ─────────────────────────────────────────────────────────
function ClientDashboard({ user, onLogout, state }) {
  const [tab, setTab] = useState("overview");

  const myClusters = state.clusters.filter(c => user.clusterIds.includes(c.id));
  const myClusterNames = myClusters.map(c => c.name);
  const myGuards = state.guards.filter(g => myClusterNames.includes(g.cluster));
  const myAttendance = state.attendance.filter(a => myClusterNames.includes(a.cluster));
  const myCameras = state.cameras.filter(c => myClusterNames.includes(c.cluster));
  const myGates = state.gates.filter(g => myClusterNames.includes(g.cluster));

  const tabs = [
    { k: "overview", l: "📊 Overview" },
    { k: "properties", l: "🏢 Properti" },
    { k: "security", l: "👮 Security" },
    { k: "monitor", l: "📹 Live Monitor" },
    { k: "reports", l: "📑 Reports", highlight: true },
  ];

  const todayHadir = myAttendance.filter(a => a.date === today() && a.status === "hadir").length;
  const totalBill = myClusters.reduce((s, c) => s + c.managementFee + (c.guardFee * c.totalGuards), 0);

  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", color: "#f1f5f9", fontFamily: "'Sora', sans-serif" }}>
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 240, background: "rgba(255,255,255,0.02)", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", overflowY: "auto" }}>
        <div style={{ padding: "0 20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏢</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, lineHeight: 1.2 }}>{user.name}</div>
            <div style={{ fontSize: 11, color: "#64748b" }}>Portal Klien</div>
          </div>
        </div>

        <nav style={{ padding: "16px 12px" }}>
          {tabs.map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              display: "block", width: "100%", padding: "10px 12px", borderRadius: 8,
              background: tab === t.k ? (t.highlight ? "rgba(245,158,11,0.12)" : "rgba(34,197,94,0.12)") : "transparent",
              border: tab === t.k ? `1px solid ${t.highlight ? "rgba(245,158,11,0.25)" : "rgba(34,197,94,0.25)"}` : "1px solid transparent",
              color: tab === t.k ? (t.highlight ? "#f59e0b" : "#22c55e") : (t.highlight ? "#f59e0b" : "#64748b"),
              fontSize: 13, fontWeight: tab === t.k ? 700 : 500, cursor: "pointer", marginBottom: 4, textAlign: "left",
              position: "relative",
            }}>
              {t.l}
              {t.highlight && tab !== t.k && <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "#f59e0b", color: "#000", fontSize: 9, padding: "2px 6px", borderRadius: 999, fontWeight: 800 }}>NEW</span>}
            </button>
          ))}
        </nav>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 4 }}>{user.email}</div>
          <button onClick={onLogout} style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444", borderRadius: 6, padding: "6px 12px", fontSize: 12, cursor: "pointer", width: "100%" }}>Keluar</button>
        </div>
      </div>

      <div style={{ marginLeft: 240, padding: 32, minHeight: "100vh" }}>
        {tab === "overview" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Selamat Datang, {user.name}</h1>
            <p style={{ color: "#64748b", marginBottom: 32, fontSize: 14 }}>{today()} · {myClusters.length} properti</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
              <StatCard icon="🏢" label="Properti" value={myClusters.length} accent="#22c55e" />
              <StatCard icon="👮" label="Security" value={myGuards.length} sub={`${todayHadir} hadir`} />
              <StatCard icon="📹" label="CCTV" value={myCameras.length} accent="#3b82f6" />
              <StatCard icon="💸" label="Tagihan" value={fmtK(totalBill)} sub="/ bulan" accent="#8b5cf6" />
            </div>

            {/* Reports CTA */}
            <div onClick={() => setTab("reports")} style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(239,68,68,0.05))", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 14, padding: 24, marginBottom: 24, cursor: "pointer", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ fontSize: 40 }}>📑</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#f59e0b", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Download Laporan Bulanan</div>
                <div style={{ color: "#94a3b8", fontSize: 13 }}>Generate laporan PDF atau Excel berisi absensi, performa, tagihan, dan insiden — semua dalam satu klik.</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Badge color="#ef4444">PDF</Badge>
                <Badge color="#22c55e">Excel</Badge>
              </div>
            </div>

            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Status Properti</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {myClusters.map(c => {
                const cAtt = myAttendance.filter(a => a.cluster === c.name && a.date === today());
                const cHadir = cAtt.filter(a => a.status === "hadir").length;
                return (
                  <div key={c.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 15 }}>{c.name}</div>
                        <div style={{ color: "#64748b", fontSize: 12 }}>{c.type} · {c.totalGuards} security</div>
                      </div>
                      <Badge color="#22c55e">✓ Normal</Badge>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      {[["Hadir", `${cHadir}/${c.totalGuards}`, "#22c55e"], ["CCTV", `${myCameras.filter(x => x.cluster === c.name && x.status === "online").length}/${myCameras.filter(x => x.cluster === c.name).length}`, "#3b82f6"], ["Gate", myGates.filter(g => g.cluster === c.name).length, "#8b5cf6"]].map(([l, v, col]) => (
                        <div key={l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
                          <div style={{ color: "#64748b", fontSize: 10 }}>{l}</div>
                          <div style={{ color: col, fontWeight: 800, fontSize: 16, marginTop: 2 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "properties" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>Detail Properti</h1>
            {myClusters.map(c => (
              <div key={c.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{c.name}</div>
                    <div style={{ color: "#64748b", fontSize: 13 }}>{c.address}</div>
                  </div>
                </div>
                {myAttendance.filter(a => a.cluster === c.name && a.date === today()).map(a => (
                  <div key={a.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span>{a.name}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Badge color={a.method === "face" ? "#22c55e" : a.method === "gps" ? "#3b82f6" : "#f59e0b"}>{a.method?.toUpperCase()}</Badge>
                      <Badge color={a.status === "hadir" ? "#22c55e" : "#ef4444"}>{a.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === "security" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>Security Anda</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {myGuards.map(g => (
                <div key={g.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, background: `${getPerformanceColor(g.performance)}22`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👮</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{g.name}</div>
                      <div style={{ color: "#64748b", fontSize: 12 }}>{g.position} · {g.cluster}</div>
                    </div>
                    {g.faceId && <Badge color="#22c55e">🤖 AI Ready</Badge>}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: "#64748b" }}>Performa</span>
                    <span style={{ color: getPerformanceColor(g.performance), fontWeight: 700 }}>{g.performance}%</span>
                  </div>
                  <ProgressBar value={g.performance} color={getPerformanceColor(g.performance)} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "monitor" && (
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>📹 Live Monitor</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {myCameras.map(cam => (
                <div key={cam.id} style={{ background: "#000", borderRadius: 8, aspectRatio: "16/9", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {cam.status === "online" ? (
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(100,150,200,0.3) 0%, transparent 50%), linear-gradient(180deg, #0a0e14 0%, #1a1f2e 100%)" }} />
                  ) : (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}>NO SIGNAL</div>
                  )}
                  <div style={{ position: "absolute", top: 6, left: 8, right: 8, display: "flex", justifyContent: "space-between", color: "#fff", fontSize: 10 }}>
                    <span style={{ fontWeight: 700 }}>{cam.name}</span>
                    {cam.status === "online" && <span style={{ color: "#ef4444", fontWeight: 800 }}>● LIVE</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "reports" && <ReportsPage user={user} clusters={state.clusters} guards={state.guards} attendance={state.attendance} />}
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [session, setSession] = useState(null);
  const [state, setState] = useState({
    guards: INITIAL_GUARDS,
    clusters: INITIAL_CLUSTERS,
    cameras: INITIAL_CAMERAS,
    gates: INITIAL_GATES,
    attendance: [
      { id: 1, guardId: "SG001", name: "Ahmad Fauzi", cluster: "Grand Duta Residence", checkIn: "05:58", checkOut: "14:02", date: today(), status: "hadir", late: false, method: "face", verified: true, photoEvidence: "evidence-001.jpg" },
      { id: 2, guardId: "SG002", name: "Budi Santoso", cluster: "Grand Duta Residence", checkIn: "06:15", checkOut: "14:10", date: today(), status: "hadir", late: true, method: "face", verified: true, photoEvidence: "evidence-002.jpg" },
      { id: 3, guardId: "SG003", name: "Cecep Ridwan", cluster: "Mal Artha Gading", checkIn: "13:55", checkOut: null, date: today(), status: "hadir", late: false, method: "gps", verified: true },
      { id: 4, guardId: "SG005", name: "Eko Wahyudi", cluster: "Summarecon Bekasi", checkIn: "05:50", checkOut: "14:00", date: today(), status: "hadir", late: false, method: "face", verified: true, photoEvidence: "evidence-005.jpg" },
      { id: 5, guardId: "SG008", name: "Hendra Setiawan", cluster: "Puri Indah Mall", checkIn: "06:00", checkOut: null, date: today(), status: "hadir", late: false, method: "rfid", verified: true },
    ],
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  if (!session) return <LoginPage onLogin={setSession} />;
  if (session.role === "outsource") return <OutsourceDashboard user={session.data} onLogout={() => setSession(null)} state={state} setState={setState} />;
  return <ClientDashboard user={session.data} onLogout={() => setSession(null)} state={state} />;
}
