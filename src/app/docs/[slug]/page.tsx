import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NAV_GROUPS, getAdjacentPages } from "@/lib/nav";
import TableOfContents from "@/components/TableOfContents";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getDocContent } from "@/lib/docs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = NAV_GROUPS.flatMap((g) => g.pages.map((p) => ({ slug: p.slug })));
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const allPages = NAV_GROUPS.flatMap((g) => g.pages);
  const page = allPages.find((p) => p.slug === slug);
  if (!page) return { title: "Página não encontrada" };
  return { title: page.title, description: page.description };
}

import { MDXRemote } from "next-mdx-remote/rsc";
import { CommandCard } from "@/components/CommandCard";
import { Callout } from "@/components/Callout";

// ... (anterior)

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const allPages = NAV_GROUPS.flatMap((g) => g.pages);
  const page = allPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const { prev, next } = getAdjacentPages(slug);
  const content = getDocContent(slug);

  const components = {
    CommandCard,
    Callout,
    h1: (props: any) => <h1 {...props} />,
    h2: (props: any) => <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />,
    h3: (props: any) => <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />,
    img: (props: any) => (
      <img 
        {...props} 
        className="rounded-xl border border-white/10 shadow-2xl my-8 max-w-full h-auto"
        loading="lazy"
      />
    ),
  };

  return (
    <div className="flex gap-12 px-8 py-10 max-w-[1100px] mx-auto relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#5865f2]/5 blur-[120px] pointer-events-none" />

      {/* Main content */}
      <article className="flex-1 min-w-0 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[0.78rem] text-[var(--muted-foreground)] mb-6">
          <Link href="/docs/intro" className="hover:text-foreground transition-colors">Docs</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{page.title}</span>
        </nav>

        {/* Doc content */}
        <div className="doc-content doc-fade">
          <MDXRemote source={content} components={components} />
        </div>
        
        {/* ... (restante igual) */}

        {/* Prev / Next */}
        <div className="flex items-center justify-between gap-4 mt-16 pt-6 border-t border-[var(--border)]">
          {prev ? (
            <Link
              href={`/docs/${prev.slug}`}
              className="flex items-center gap-2 text-[0.875rem] text-[var(--muted-foreground)] hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              href={`/docs/${next.slug}`}
              className="flex items-center gap-2 text-[0.875rem] text-[var(--muted-foreground)] hover:text-white transition-colors group ml-auto"
            >
              <span>{next.title}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : <span />}
        </div>
      </article>

      {/* Table of contents */}
      <TableOfContents />
    </div>
  );
}
