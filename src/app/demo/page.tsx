"use client";

import SecureForce from "@/components/SecureForce";

export default function DemoPage() {
  return (
    <>
      <SecureForce />
      <style>{`
        @media (max-width: 768px) {
          div[style*="width: 240"][style*="position: fixed"] {
            width: 100% !important;
            height: auto !important;
            position: relative !important;
            inset: auto !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          div[style*="margin-left: 240"] {
            margin-left: 0 !important;
            padding: 16px !important;
          }
          div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns: 1.5fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: 1fr 1fr"][style*="gap"] {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 18px !important;
          }
          nav button {
            font-size: 11px !important;
            padding: 8px 10px !important;
          }
          div[style*="max-width: 440"] {
            max-width: 100% !important;
            padding: 0 16px !important;
          }
        }
        table {
          display: block;
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
