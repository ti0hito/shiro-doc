"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, Command } from "lucide-react";
import Fuse from "fuse.js";
import { ALL_PAGES } from "@/lib/nav";

const fuse = new Fuse(ALL_PAGES, {
  keys: ["title", "description"],
  threshold: 0.35,
  includeScore: true,
});

import { SiDiscord } from "react-icons/si";

export default function DocsHeader() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.trim() ? fuse.search(query).slice(0, 8) : [];

  // Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (slug: string) => {
    setOpen(false);
    setQuery("");
    router.push(`/docs/${slug}`);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 gap-4"
        style={{
          height: "var(--header-height)",
          background: "rgba(8,8,8,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--sidebar-border)",
        }}
      >
        {/* Logo (visible on mobile) */}
        <Link href="/docs/intro" className="flex items-center gap-2 lg:hidden shrink-0">
          <div className="w-6 h-6 rounded-md bg-[var(--shiro-soft)] flex items-center justify-center border border-[#5865f2]/25">
            <span className="text-[#5865f2] text-[10px] font-bold">S</span>
          </div>
          <span className="text-sm font-semibold text-white">Shiro Docs</span>
        </Link>

        {/* Search trigger */}
        <button
          onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[var(--muted-foreground)] text-sm hover:text-foreground transition-colors border border-[var(--border)] bg-[var(--muted)] hover:border-[#5865f2]/30"
          style={{ minWidth: 200 }}
        >
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span className="flex-1 text-left text-[0.8125rem]">Buscar docs...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 text-[0.65rem] border border-[var(--border)] bg-[var(--background)] px-1.5 py-0.5 rounded">
            <Command className="w-2.5 h-2.5" /> K
          </kbd>
        </button>

        {/* Right links */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://discord.gg/39jZxY68mR"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[0.8125rem] text-[var(--muted-foreground)] hover:text-white transition-colors"
          >
            <SiDiscord className="w-4 h-4" />
            Discord
          </a>
          <a
            href="https://shirobot.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8125rem] px-3 py-1 rounded-md border border-[#5865f2]/40 text-[#5865f2] hover:bg-[#5865f2]/10 transition-colors font-medium"
          >
            Dashboard →
          </a>
        </div>
      </header>

      {/* Search Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          style={{ background: "rgba(0,0,0,0.65)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-[var(--border)] shadow-2xl overflow-hidden"
            style={{ background: "var(--card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-[var(--border)]">
              <Search className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar na documentação..."
                className="flex-1 bg-transparent py-3.5 text-sm text-foreground placeholder-[var(--muted-foreground)] outline-none"
              />
              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4 text-[var(--muted-foreground)] hover:text-white transition-colors" />
              </button>
            </div>

            {query && (
              <ul className="max-h-72 overflow-y-auto p-2">
                {results.length === 0 ? (
                  <li className="text-center py-8 text-sm text-[var(--muted-foreground)]">
                    Nenhum resultado para &quot;{query}&quot;
                  </li>
                ) : (
                  results.map(({ item }) => (
                    <li key={item.slug}>
                      <button
                        onClick={() => handleSelect(item.slug)}
                        className="w-full text-left px-3 py-2.5 rounded-md hover:bg-white/[0.04] transition-colors"
                      >
                        <p className="text-[0.875rem] font-medium text-foreground">{item.title}</p>
                        {item.description && (
                          <p className="text-[0.78rem] text-[var(--muted-foreground)] mt-0.5 truncate">{item.description}</p>
                        )}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}

            {!query && (
              <div className="px-4 py-3 text-[0.75rem] text-[var(--muted-foreground)]">
                Digite para pesquisar em todos os artigos
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
