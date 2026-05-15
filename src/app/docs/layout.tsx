import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import DocsHeader from "@/components/DocsHeader";

export const metadata: Metadata = {
  title: "Shiro Docs",
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DocsHeader />
      <div className="flex min-h-dvh pt-[var(--header-height)]">
        <Sidebar />
        <main
          className="flex-1 min-w-0"
          style={{ marginLeft: "var(--sidebar-width)" }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
