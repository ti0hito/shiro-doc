import { cn } from "@/lib/utils";
import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react";

type CalloutVariant = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const CONFIG: Record<CalloutVariant, { icon: React.ReactNode; colors: string; titleDefault: string }> = {
  info: {
    icon: <Info className="w-4 h-4 shrink-0 mt-0.5" />,
    colors: "bg-blue-500/8 border-blue-500/25 text-blue-300 [&_p]:text-blue-200/80",
    titleDefault: "Informação",
  },
  warning: {
    icon: <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />,
    colors: "bg-amber-500/8 border-amber-500/25 text-amber-300 [&_p]:text-amber-200/80",
    titleDefault: "Atenção",
  },
  tip: {
    icon: <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />,
    colors: "bg-emerald-500/8 border-emerald-500/25 text-emerald-300 [&_p]:text-emerald-200/80",
    titleDefault: "Dica",
  },
  danger: {
    icon: <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />,
    colors: "bg-red-500/8 border-red-500/25 text-red-300 [&_p]:text-red-200/80",
    titleDefault: "Cuidado",
  },
};

export function Callout({ variant = "info", title, children }: CalloutProps) {
  const { icon, colors, titleDefault } = CONFIG[variant];
  return (
    <div className={cn("flex gap-3 border rounded-lg px-4 py-3 my-5 not-prose", colors)}>
      {icon}
      <div className="flex-1 min-w-0">
        {(title ?? titleDefault) && (
          <p className="text-[0.8125rem] font-semibold mb-1 !text-current">{title ?? titleDefault}</p>
        )}
        <div className="text-[0.8375rem] leading-6">{children}</div>
      </div>
    </div>
  );
}
