import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  small?: boolean;
}

export default function Badge({ children, color = "#1A6FFF", small }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-[999px] font-bold uppercase tracking-[1.5px] ${
        small ? "px-[10px] py-[3px] text-[10px]" : "px-[14px] py-[5px] text-[11px]"
      }`}
      style={{
        color,
        background: `${color}12`,
        border: `1px solid ${color}28`,
      }}
    >
      {children}
    </span>
  );
}
