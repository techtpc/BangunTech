import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  Camera,
  Bot,
  Code2,
  Target,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Zap,
  Compass,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Play,
  Sparkles,
  Users,
  Building2,
  Video,
  FileText,
  BarChart3,
  CreditCard,
  AlertTriangle,
  Lock,
  Search,
  Eye,
  Check,
  ChevronDown,
  Menu,
  X,
  LucideProps,
} from "lucide-react";

export type IconName =
  | "shield"
  | "secureforce"
  | "trending"
  | "seo"
  | "camera"
  | "cctv"
  | "bot"
  | "autopost"
  | "code"
  | "custom"
  | "target"
  | "consulting"
  | "mail"
  | "whatsapp"
  | "location"
  | "clock"
  | "zap"
  | "visi"
  | "misi"
  | "nilai"
  | "check"
  | "arrow-right"
  | "play"
  | "sparkles"
  | "users"
  | "building"
  | "video"
  | "file-text"
  | "chart"
  | "credit-card"
  | "alert"
  | "lock"
  | "search"
  | "eye"
  | "menu"
  | "close";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

export default function Icon({ name, size = 20, color, className, ...props }: IconProps) {
  const iconProps = { size, color, className, ...props };

  switch (name?.toLowerCase()) {
    case "secureforce":
    case "shield":
    case "🛡️":
      return <ShieldCheck {...iconProps} />;
    case "seo":
    case "trending":
    case "📈":
      return <TrendingUp {...iconProps} />;
    case "cctv":
    case "camera":
    case "📹":
      return <Camera {...iconProps} />;
    case "autopost":
    case "bot":
    case "🤖":
      return <Bot {...iconProps} />;
    case "custom":
    case "code":
    case "💻":
      return <Code2 {...iconProps} />;
    case "consulting":
    case "target":
    case "🎯":
      return <Target {...iconProps} />;
    case "mail":
    case "📧":
      return <Mail {...iconProps} />;
    case "whatsapp":
    case "phone":
    case "📱":
      return <MessageSquare {...iconProps} />;
    case "location":
    case "kantor":
    case "📍":
      return <MapPin {...iconProps} />;
    case "clock":
    case "🕐":
    case "⏰":
      return <Clock {...iconProps} />;
    case "zap":
    case "⚡":
      return <Zap {...iconProps} />;
    case "visi":
    case "🔭":
      return <Eye {...iconProps} />;
    case "misi":
      return <Target {...iconProps} />;
    case "nilai":
    case "💡":
      return <Lightbulb {...iconProps} />;
    case "check":
    case "✅":
      return <CheckCircle2 {...iconProps} />;
    case "arrow-right":
    case "→":
      return <ArrowRight {...iconProps} />;
    case "play":
    case "🔴":
    case "▶️":
      return <Play {...iconProps} />;
    case "sparkles":
    case "✨":
      return <Sparkles {...iconProps} />;
    case "users":
    case "👮":
      return <Users {...iconProps} />;
    case "building":
    case "🏢":
      return <Building2 {...iconProps} />;
    case "video":
      return <Video {...iconProps} />;
    case "file-text":
    case "📋":
    case "📑":
      return <FileText {...iconProps} />;
    case "chart":
    case "📊":
      return <BarChart3 {...iconProps} />;
    case "credit-card":
    case "💰":
    case "💸":
      return <CreditCard {...iconProps} />;
    case "alert":
    case "🚨":
      return <AlertTriangle {...iconProps} />;
    case "lock":
    case "🚧":
      return <Lock {...iconProps} />;
    case "search":
      return <Search {...iconProps} />;
    case "menu":
    case "☰":
      return <Menu {...iconProps} />;
    case "close":
    case "✕":
      return <X {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}
