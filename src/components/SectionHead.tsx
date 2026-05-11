import { ReactNode } from "react";
import Badge from "./Badge";

interface SectionHeadProps {
  badge?: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  accent?: string;
}

export default function SectionHead({ badge, title, sub, center = true, accent = "#1A6FFF" }: SectionHeadProps) {
  return (
    <div
      className={`${center ? "text-center mx-auto" : "text-left"} mb-[60px] max-md:mb-10`}
      style={{ maxWidth: center ? 660 : "100%" }}
    >
      {badge && (
        <div className="mb-[14px]">
          <Badge color={accent}>{badge}</Badge>
        </div>
      )}
      <h2
        className="text-[clamp(28px,4vw,48px)] font-black leading-[1.08] tracking-[-1.2px] mb-[14px]"
        style={{ color: "#1A2B42" }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-[16px] leading-[1.75]" style={{ color: "#4A6080" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
