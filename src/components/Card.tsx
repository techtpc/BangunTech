"use client";

import { CSSProperties, ReactNode, useState } from "react";

interface CardProps {
  children: ReactNode;
  style?: CSSProperties;
  hover?: boolean;
}

export default function Card({ children, style = {}, hover = true }: CardProps) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="bg-white rounded-[18px] p-8 max-md:p-6 transition-all duration-300 ease-out"
      style={{
        border: `1.5px solid ${hov && hover ? "#1A6FFF44" : "#E2E8F0"}`,
        boxShadow: hov && hover ? "0 20px 40px -12px rgba(26,111,255,0.15)" : "0 4px 24px rgba(15,23,42,0.05)",
        transform: hov && hover ? "translateY(-6px)" : "none",
        ...style,
      }}
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
}
