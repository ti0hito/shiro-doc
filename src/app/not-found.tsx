import Link from "next/link";
import { notFound } from "next/navigation";
import { NAV_GROUPS } from "@/lib/nav";
import DocsHeader from "@/components/DocsHeader";
import Sidebar from "@/components/Sidebar";

export default function NotFound() {
  return (
    <>
      <DocsHeader />
      <div className="flex min-h-dvh pt-[var(--header-height)]">
        <Sidebar />
        <main className="flex-1 min-w-0 flex items-center justify-center" style={{ marginLeft: "var(--sidebar-width)" }}>
          <div className="text-center px-6">
            <p className="text-[5rem] font-bold text-[var(--border)] leading-none mb-4">404</p>
            <h1 className="text-xl font-semibold text-white mb-2">Página não encontrada</h1>
            <p className="text-[var(--muted-foreground)] text-sm mb-8">Esta página não existe ou foi movida.</p>
            <Link href="/docs/intro" className="text-[0.875rem] text-[#5865f2] hover:underline">
              ← Voltar para o início
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
