"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const container = document.querySelector(".doc-content");
    if (!container) return;

    const headings = Array.from(container.querySelectorAll("h2, h3")) as HTMLElement[];
    const parsed: TocItem[] = headings.map((h) => ({
      id: h.id,
      text: h.textContent ?? "",
      level: parseInt(h.tagName[1]),
    }));
    setItems(parsed);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    headings.forEach((h) => h.id && observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-[calc(var(--header-height)+1.5rem)] self-start w-52 shrink-0">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
        Nesta página
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-[0.8125rem] leading-5 py-0.5 transition-colors duration-150 border-l-2",
                item.level === 3 ? "pl-4" : "pl-2.5",
                active === item.id
                  ? "border-[#5865f2] text-white font-medium"
                  : "border-transparent text-[var(--muted-foreground)] hover:text-foreground hover:border-[#5865f2]/40"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
