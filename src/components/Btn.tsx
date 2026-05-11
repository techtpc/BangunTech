"use client";

import { CSSProperties, ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  full?: boolean;
  small?: boolean;
  style?: CSSProperties;
}

export default function Btn({ children, onClick, variant = "primary", full, small, style }: BtnProps) {
  const base =
    "inline-flex items-center justify-center rounded-[10px] font-bold tracking-[0.2px] cursor-pointer font-sans border-none transition-all duration-[0.22s]";
  const size = small ? "px-5 py-[9px] text-[13px]" : "px-7 py-[13px] text-[14px]";
  const width = full ? "w-full" : "";

  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-[#1A6FFF] to-[#00B4FF] text-white shadow-[0_6px_36px_rgba(26,111,255,0.14)]"
      : variant === "secondary"
        ? "bg-[#0A1628] text-white"
        : "bg-transparent border-2 border-[#1A6FFF] text-[#1A6FFF]";

  return (
    <button
      onClick={onClick}
      className={`${base} ${size} ${width} ${classes}`}
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        if (variant === "primary") e.currentTarget.style.boxShadow = "0 12px 60px rgba(26,111,255,0.18)";
        else if (variant === "outline") e.currentTarget.style.boxShadow = "0 4px 16px rgba(26,111,255,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        if (variant === "primary") e.currentTarget.style.boxShadow = "0 6px 36px rgba(26,111,255,0.14)";
        else e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
}
