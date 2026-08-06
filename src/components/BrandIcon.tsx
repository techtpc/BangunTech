import React from "react";
import * as BrandIcons from "@thesvg/react";

export type BrandName =
  | "Instagram"
  | "Tiktok"
  | "Facebook"
  | "Linkedin"
  | "Youtube"
  | "Google"
  | "Whatsapp"
  | "Figma"
  | "React"
  | "Nextdotjs"
  | "Nodedotjs"
  | "Tailwindcss"
  | "Typescript"
  | "Chatgpt"
  | "Perplexity";

interface BrandIconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export default function BrandIcon({ name, size = 24, color, className }: BrandIconProps) {
  // Normalize name to match exported component names
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = (BrandIcons as Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>>)[formattedName] || (BrandIcons as Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>>)[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}
