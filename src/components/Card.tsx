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
      className="bg-white rounded-[16px] p-8 max-md:p-6 transition-all duration-[0.25s]"
      style={{
        border: `1.5px solid ${hov && hover ? "#1A6FFF44" : "#DDE6F5"}`,
        boxShadow: hov && hover ? "0 6px 36px rgba(26,111,255,0.14)" : "0 2px 20px rgba(26,111,255,0.09)",
        transform: hov && hover ? "translateY(-3px)" : "none",
        ...style,
      }}
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
}
