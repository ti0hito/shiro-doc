"use client";
import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandCardProps {
  name: string;
  description: string;
  usage?: string;
  permission?: string;
  premium?: boolean;
}

export function CommandCard({ name, description, usage, permission, premium }: CommandCardProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (!usage) return;
    navigator.clipboard.writeText(usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group border border-[var(--border)] rounded-lg p-4 hover:border-[#5865f2]/30 transition-colors bg-[var(--card)] mb-3">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <code className="text-[0.875rem] font-mono font-medium text-[#7c8ff5]">{name}</code>
          {permission && (
            <span className="text-[0.65rem] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded border bg-red-500/10 text-red-400 border-red-500/20">
              {permission}
            </span>
          )}
          {premium && (
            <span className="text-[0.65rem] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded border bg-amber-500/10 text-amber-400 border-amber-500/20">
              premium
            </span>
          )}
        </div>
      </div>

      <p className="text-[0.8375rem] text-[var(--muted-foreground)] mb-3 leading-relaxed">{description}</p>

      {usage && (
        <div
          onClick={copy}
          className="flex items-center justify-between gap-2 bg-[var(--muted)] border border-[var(--border)] rounded-md px-3 py-2 cursor-pointer hover:border-[#5865f2]/30 transition-colors group/code"
        >
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-[var(--muted-foreground)] shrink-0" />
            <code className="text-[0.8125rem] font-mono text-[#7c8ff5] truncate">{usage}</code>
          </div>
          <div className={cn("shrink-0 transition-colors", copied ? "text-emerald-400" : "text-[var(--muted-foreground)] group-hover/code:text-white")}>
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </div>
        </div>
      )}
    </div>
  );
}
