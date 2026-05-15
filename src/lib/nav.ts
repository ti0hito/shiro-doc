export interface NavPage {
  title: string;
  slug: string;
  description?: string;
  badge?: "novo" | "premium" | "admin";
}

export interface NavGroup {
  id: string;
  title: string;
  pages: NavPage[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "inicio",
    title: "Início",
    pages: [
      { title: "Introdução", slug: "intro" },
      { title: "Instalação", slug: "instalacao" },
    ],
  },
  {
    id: "bot",
    title: "Comandos do Bot",
    pages: [
      { title: "Moderação & Config", slug: "moderacao" },
      { title: "XP, Níveis & Quests", slug: "xp" },
      { title: "Loja & Carteira", slug: "loja" },
      { title: "Verificação", slug: "verificacao" },
      { title: "Utilitários", slug: "utilidades" },
      { title: "Arte & Galeria", slug: "arte" },
    ],
  },
  {
    id: "dashboard-global",
    title: "Dashboard - Global",
    pages: [
      { title: "Como Acessar", slug: "como-acessar" },
      { title: "Visão Geral", slug: "overview-dash" },
      { title: "Analytics", slug: "analytics-dash", badge: "novo" },
      { title: "Perfil do Usuário", slug: "perfil-dash", badge: "novo" },
      { title: "Canais & Cargos", slug: "canais-dash" },
      { title: "Painel de Ações", slug: "actions-dash", badge: "novo" },
    ],
  },
  {
    id: "dashboard-mod",
    title: "Dashboard - Moderação",
    pages: [
      { title: "Verificação", slug: "verificacao-dash" },
      { title: "Auto Moderação", slug: "automod" },
      { title: "Blacklist", slug: "blacklist-dash" },
      { title: "Apelações de Ban", slug: "apelacoes-dash" },
      { title: "Avisos & Relatórios", slug: "warns-dash" },
    ],
  },
  {
    id: "dashboard-comunidade",
    title: "Dashboard - Comunidade",
    pages: [
      { title: "Sistema de XP", slug: "sistema-xp" },
      { title: "Cargos Agendados", slug: "agendamentos-dash", badge: "novo" },
      { title: "Voz Dinâmica", slug: "dynamicvoice-dash" },
      { title: "Alertas de Live", slug: "livealerts-dash", badge: "novo" },
    ],
  },
  {
    id: "dashboard-economia",
    title: "Dashboard - Economia",
    pages: [
      { title: "Loja de Pontos", slug: "loja-dash" },
      { title: "Card VTuber", slug: "card-vtuber", badge: "novo" },
      { title: "Shiro VIP", slug: "premium", badge: "premium" },
    ],
  },
  {
    id: "suporte",
    title: "Suporte",
    pages: [
      { title: "Discord", slug: "discord" },
      { title: "Changelog", slug: "changelog" },
    ],
  },
];

export const ALL_PAGES = NAV_GROUPS.flatMap((g) => g.pages);

export function getAdjacentPages(slug: string) {
  const index = ALL_PAGES.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? ALL_PAGES[index - 1] : null,
    next: index < ALL_PAGES.length - 1 ? ALL_PAGES[index + 1] : null,
  };
}
