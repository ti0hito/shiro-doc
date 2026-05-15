"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Bot, LayoutDashboard, HelpCircle, Home } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const GROUP_ICONS: Record<string, React.ReactNode> = {
  inicio:    <Home className="w-3.5 h-3.5" />,
  bot:       <Bot className="w-3.5 h-3.5" />,
  "dashboard-global": <LayoutDashboard className="w-3.5 h-3.5" />,
  "dashboard-mod": <LayoutDashboard className="w-3.5 h-3.5" />,
  "dashboard-comunidade": <LayoutDashboard className="w-3.5 h-3.5" />,
  "dashboard-economia": <LayoutDashboard className="w-3.5 h-3.5" />,
  suporte:   <SiDiscord className="w-3.5 h-3.5" />,
};

const BADGE_COLORS: Record<string, string> = {
  novo:    "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  premium: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  admin:   "bg-red-500/15 text-red-400 border-red-500/20",
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="sidebar-scroll fixed top-[var(--header-height)] left-0 z-30 h-[calc(100dvh-var(--header-height))] overflow-y-auto"
      style={{ width: "var(--sidebar-width)", background: "var(--sidebar-bg)"}}
    >
      {/* Logo area */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-[var(--sidebar-border)]">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[var(--shiro-soft)]">
          <img src="https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/default/Shiro_Icon_Rounded_color.webp" />
        </div>
        <span className="text-sm font-semibold text-white">Shiro Docs</span>
      </div>

      {/* Nav */}
      <nav className="px-2 py-4 space-y-5">
        {NAV_GROUPS.map((group) => (
          <div key={group.id}>
            {/* Group header */}
            <div className="flex items-center gap-1.5 px-2 mb-1">
              <span className="text-[var(--muted-foreground)]">
                {GROUP_ICONS[group.id]}
              </span>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                {group.title}
              </span>
            </div>

            {/* Pages */}
            <ul className="space-y-0.5">
              {group.pages.map((page) => {
                const isActive = pathname === `/docs/${page.slug}`;
                return (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      className={cn(
                        "flex items-center justify-between gap-2 px-3 py-1.5 rounded-md text-[0.8375rem] transition-colors duration-150 pl-4 relative",
                        isActive
                          ? "bg-[var(--sidebar-active-bg)] text-white font-medium border border-[var(--sidebar-active-border)] before:content-[''] before:absolute before:left-0 before:top-[20%] before:h-[60%] before:w-[2px] before:bg-[#5865f2] before:rounded-full"
                          : "text-[var(--muted-foreground)] hover:text-foreground hover:bg-white/[0.03] border border-transparent"
                      )}
                    >
                      <span className="truncate">{page.title}</span>
                      {page.badge && (
                        <span className={cn(
                          "text-[0.6rem] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded border shrink-0",
                          BADGE_COLORS[page.badge]
                        )}>
                          {page.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom link */}
      <div className="px-4 pb-4 pt-2 border-t border-[var(--sidebar-border)] mt-2">
        <a
          href="https://shirobot.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[0.78rem] text-[var(--muted-foreground)] hover:text-white transition-colors"
        >
          ← Voltar para shirobot.xyz
        </a>
      </div>
    </aside>
  );
}
