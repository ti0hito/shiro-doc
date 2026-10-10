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
      { title: "Perfil do Usuário", slug: "perfil-dash" },
      { title: "Canais & Cargos", slug: "canais-dash" },
      { title: "Modal Role", slug: "actions-dash" },
    ],
  },
  {
    id: "dashboard-mod",
    title: "Dashboard - Moderação",
    pages: [
      { title: "Verificação", slug: "verificacao-dash" },
      { title: "Restrição de Cargos", slug: "restricao-cargos-dash", badge: "novo" },
      { title: "Anti-Selfbot", slug: "anti-selfbot", badge: "novo" },
      { title: "Canal Armadilha", slug: "honeypot" },
      { title: "Blacklist", slug: "blacklist-dash" },
      { title: "Apelações de Ban", slug: "apelacoes-dash" },
      { title: "Avisos", slug: "warns-dash" },
      { title: "Logs & Auditoria", slug: "logs-dash", badge: "novo" },
    ],
  },
  {
    id: "dashboard-comunidade",
    title: "Dashboard - Comunidade",
    pages: [
      { title: "Progresso de XP", slug: "sistema-xp" },
      { title: "Cargo por Agendamento", slug: "agendamentos-dash" },
      { title: "Voz Dinâmica", slug: "dynamicvoice-dash" },
      { title: "Alertas de Live", slug: "livealerts-dash" },
      { title: "Sorteios", slug: "sorteios-dash", badge: "novo" },
      { title: "Feedbacks", slug: "feedbacks-dash", badge: "novo" },
      { title: "Tickets", slug: "tickets-dash", badge: "novo" },
    ],
  },
  {
    id: "dashboard-economia",
    title: "Dashboard - Economia",
    pages: [
      { title: "Loja & Recompensas", slug: "loja-dash" },
      { title: "Recompensas VIP", slug: "vip-rewards-dash", badge: "novo" },
      { title: "Shiro VIP", slug: "premium", badge: "premium" },
    ],
  },
  {
    id: "site",
    title: "Site",
    pages: [
      { title: "Builder de Mensagens", slug: "builder", badge: "novo" },
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
