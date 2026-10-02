// Content library using MDX components
// Based on topgg-commands-simple.json (Official List)

const DOCS: Record<string, string> = {
  intro: `
# Bem-vindo à Documentação da Shiro

A **Shiro** é uma bot multifuncional para Discord focada em comunidades de criadores de conteúdo, com moderação avançada, Anti-Selfbot, sistema de XP, loja de cargos, sorteios e muito mais.

<Callout variant="tip">
  A Shiro foi desenhada para ser leve, poderosa, completa e focada na experiência do usuário.
</Callout>

[![Shiro Preview](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/docs/home_update.png)](https://shirobot.xyz)

## Como navegar nesta documentação
Use a barra lateral à esquerda para navegar entre as seções.

1.  **Comandos do Bot** — Tudo que você pode fazer via slash commands no Discord.
2.  **Dashboard** — Guia completo do painel de controle web em [shirobot.xyz](https://shirobot.xyz).

<Callout variant="info" title="Busca Rápida">
  Pressione <kbd className="bg-muted px-1 rounded text-xs">Ctrl+K</kbd> em qualquer página para abrir a busca global.
</Callout>
`,

  instalacao: `
# Instalação

Adicione a Shiro ao seu servidor em poucos segundos e comece a transformar sua comunidade.

<Callout variant="info">
  Para instalar o bot, você precisa ter a permissão de **Gerenciar Servidor** ou **Administrador** no servidor de destino.
</Callout>

## Passo 1: Convite Oficial
Acesse o link de convite oficial abaixo para adicionar a Shiro. Você será redirecionado para a página de autorização do Discord.
[Clique Aqui para adicionar a Shiro](https://discord.com/oauth2/authorize?client_id=1452768777585299486) ou na imagem abaixo:

[![INVITE SHIRO](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/how_to_invite.png)](https://discord.com/oauth2/authorize?client_id=1452768777585299486)

<Callout variant="warning">
  **Importante:** Recomendamos manter a permissão de **Administrador** marcada. Isso garante que a Shiro consiga gerenciar cargos, deletar mensagens da blacklist e criar canais de voz dinâmica sem erros de permissão.
</Callout>

## Passo 2: Hierarquia de Cargos
Para que a Shiro consiga gerenciar cargos (como dar cargos de verificação ou remover cargos agendados), o cargo dela no Discord deve estar **acima** dos cargos que ela vai gerenciar.

1. Vá em **Configurações do Servidor** > **Cargos**.
2. Procure o cargo chamado **Shiro**.
3. Arraste-o para o topo da lista (ou acima dos cargos de membros/VIPs).

## Passo 3: Configuração Inicial
Após adicionar o bot, você pode começar a configurar as funcionalidades principais:

*   **Via Dashboard (Recomendado):** Acesse [shirobot.xyz/dashboard](https://shirobot.xyz/dashboard), faça login e selecione seu servidor.
*   **Via Comandos:** Use o comando \`/configurar geral\` para receber o atalho direto para a configuração do seu servidor na Dashboard.

## Próximos Passos
Agora que a Shiro está no seu servidor, que tal configurar os módulos principais?
*   [Configurar Verificação de Artistas](/docs/verificacao-dash)
*   [Ativar Sistema de XP](/docs/sistema-xp)
*   [Configurar Anti-Selfbot](/docs/anti-selfbot)
*   [Configurar Canal Armadilha](/docs/honeypot)
`,

  moderacao: `
# Moderação & Configuração

Gerencie seu servidor com precisão e configure as regras do bot.

<Callout variant="tip">
  **Dica:** Quase todas as configurações de moderação, como verificações, apelações de ban, blacklist, Anti-Selfbot e logs, podem ser ajustadas visualmente pela nossa [Dashboard](https://shirobot.xyz/dashboard).
</Callout>

<Callout variant="warning">
  **Atenção Staff:** Quase todos os comandos nesta seção exigem permissões administrativas ou de moderação (Banir, Expulsar, Moderar Membros, Gerenciar Mensagens, Gerenciar Cargos ou Administrador).
</Callout>

## Atalhos para a Dashboard
<CommandCard 
  name="/configurar geral" 
  description="Atalho para a configuração geral do servidor na Dashboard." 
  usage="/configurar geral"
/>
<CommandCard 
  name="/configurar verificacao" 
  description="Atalho para a configuração das Verificações na Dashboard." 
  usage="/configurar verificacao"
/>
<CommandCard 
  name="/configurar feedback" 
  description="Atalho para a configuração do Sistema de Feedbacks na Dashboard." 
  usage="/configurar feedback"
/>
<CommandCard 
  name="/analytics" 
  description="Atalho para as estatísticas e gráficos do servidor na Dashboard." 
  usage="/analytics"
/>
<CommandCard 
  name="/honeypot" 
  description="Explica o Canal Armadilha e leva para a seção Anti-Selfbot da Dashboard." 
  usage="/honeypot"
/>
<CommandCard 
  name="/docs" 
  description="Acesse a documentação oficial da Shiro." 
  usage="/docs"
/>

## Punições
<CommandCard 
  name="/ban" 
  description="Bane um ou mais usuários. Com silent, não avisa no canal; com clear, apaga as mensagens recentes." 
  usage="/ban usuarios: @Membro motivo: Spam silent: false clear: true"
/>
<CommandCard 
  name="/unban" 
  description="Remove o banimento de um ou mais usuários pelo ID." 
  usage="/unban usuario_id: ID_DO_USUARIO motivo: Apelação aceita"
/>
<CommandCard 
  name="/kick" 
  description="Expulsa um ou mais usuários do servidor." 
  usage="/kick usuarios: @Membro motivo: Flood"
/>
<CommandCard 
  name="/mute aplicar" 
  description="Silencia (castigo) um ou mais usuários por um tempo." 
  usage="/mute aplicar usuarios: @Membro tempo: 4 horas motivo: Flood"
/>
<CommandCard 
  name="/mute remover" 
  description="Remove o silenciamento de um ou mais usuários." 
  usage="/mute remover usuarios: @Membro"
/>

## Avisos (Warns)
<CommandCard 
  name="/warn add" 
  description="Aplica um aviso a um ou mais usuários. As punições automáticas por quantidade de avisos são configuradas na Dashboard." 
  usage="/warn add usuarios: @Membro motivo: Desrespeito"
/>
<CommandCard 
  name="/warn ver" 
  description="Mostra todos os avisos de um usuário." 
  usage="/warn ver usuario: @Membro"
/>
<CommandCard 
  name="/warn edit" 
  description="Edita o motivo de um aviso específico." 
  usage="/warn edit usuario: @Membro indice: 1 novo_motivo: Spam"
/>
<CommandCard 
  name="/warn remove" 
  description="Remove um aviso específico." 
  usage="/warn remove usuario: @Membro indice: 1"
/>
<CommandCard 
  name="/warn clear" 
  description="Remove todos os avisos de um ou mais usuários." 
  usage="/warn clear usuarios: @Membro"
/>

## Consultas
<CommandCard 
  name="/baninfo" 
  description="Consulta os detalhes de um banimento (motivo, autor e data)." 
  usage="/baninfo usuario: ID_DO_USUARIO"
/>
<CommandCard 
  name="/banlist" 
  description="Gera uma lista de todos os usuários banidos do servidor." 
  usage="/banlist"
/>

## Blacklist de Palavras
<CommandCard 
  name="/blacklist adicionar" 
  description="Adiciona uma palavra ou frase à blacklist." 
  usage="/blacklist adicionar texto: palavra"
/>
<CommandCard 
  name="/blacklist remover" 
  description="Remove uma palavra ou frase da blacklist." 
  usage="/blacklist remover texto: palavra"
/>
<CommandCard 
  name="/blacklist listar" 
  description="Lista todas as palavras e frases bloqueadas." 
  usage="/blacklist listar"
/>
<CommandCard 
  name="/blacklist configurar" 
  description="Define o canal onde a Shiro avisa a moderação." 
  usage="/blacklist configurar canal: #mod-logs"
/>
<CommandCard 
  name="/blacklist habilitar" 
  description="Liga ou desliga a blacklist." 
  usage="/blacklist habilitar ativo: true"
/>
<CommandCard 
  name="/blacklist ver" 
  description="Mostra as configurações atuais da blacklist." 
  usage="/blacklist ver"
/>

## Ferramentas de Staff
<CommandCard 
  name="/clear todos" 
  description="Apaga as últimas mensagens do canal." 
  usage="/clear todos quantidade: 50"
/>
<CommandCard 
  name="/clear usuario" 
  description="Apaga as mensagens de um usuário específico." 
  usage="/clear usuario usuario: @Membro quantidade: 20"
/>
<CommandCard 
  name="/clear bots" 
  description="Apaga apenas as mensagens de bots." 
  usage="/clear bots quantidade: 30"
/>
<CommandCard 
  name="/dm" 
  description="Envia uma mensagem oficial da Shiro na DM de um ou mais membros, com título, cor e imagem opcionais." 
  usage="/dm usuario: @Membro mensagem: Olá!"
/>
<CommandCard 
  name="/webhook create" 
  description="Cria ou atualiza o webhook global do servidor (usado por Modal Role, Verificação e Sorteios)." 
  usage="/webhook create channel: #canal"
/>
<CommandCard 
  name="/webhook listar" 
  description="Lista os webhooks configurados no servidor e suas URLs." 
  usage="/webhook listar"
/>
<CommandCard 
  name="/webhook delete" 
  description="Apaga o webhook global do servidor." 
  usage="/webhook delete"
/>
<CommandCard 
  name="/timed_role adicionar" 
  description="Dá um cargo temporário a um usuário (duração em horas)." 
  usage="/timed_role adicionar usuario: @Membro cargo: @Evento duracao: 168"
/>
<CommandCard 
  name="/timed_role estender" 
  description="Estende a duração de um cargo temporário." 
  usage="/timed_role estender usuario: @Membro cargo: @Evento horas: 24"
/>
<CommandCard 
  name="/timed_role remover" 
  description="Remove um cargo temporário antes do prazo." 
  usage="/timed_role remover usuario: @Membro cargo: @Evento"
/>
<CommandCard 
  name="/timed_role listar" 
  description="Lista os cargos temporários ativos." 
  usage="/timed_role listar"
/>
<CommandCard 
  name="/cargo-agendamento criar" 
  description="Cria um painel onde membros agendam o recebimento de um cargo após alguns dias." 
  usage="/cargo-agendamento criar cargo: @Fundador titulo: Resgate dias: 7"
/>
<CommandCard 
  name="/cargo-agendamento listar" 
  description="Lista os painéis de agendamento do servidor." 
  usage="/cargo-agendamento listar"
/>
<CommandCard 
  name="/cargo-agendamento remover" 
  description="Remove um painel de agendamento." 
  usage="/cargo-agendamento remover painel-id: ID_DO_PAINEL"
/>
<CommandCard 
  name="/ticket-setup" 
  description="Explica como configurar o sistema de tickets da Shiro." 
  usage="/ticket-setup"
/>

## Apelações de Ban (Staff)
<CommandCard 
  name="/apelar revisar" 
  description="Mostra as apelações pendentes." 
  usage="/apelar revisar"
/>
<CommandCard 
  name="/apelar aprovar" 
  description="Aprova uma apelação e desbane o usuário." 
  usage="/apelar aprovar id: ID_DA_APELACAO"
/>
<CommandCard 
  name="/apelar recusar" 
  description="Recusa uma apelação informando o motivo." 
  usage="/apelar recusar id: ID_DA_APELACAO motivo: Reincidência"
/>
<CommandCard 
  name="/apelar toggle" 
  description="Liga ou desliga o sistema de apelação." 
  usage="/apelar toggle ativar: true"
/>
<CommandCard 
  name="/apelar config_canal" 
  description="Define o canal que recebe as apelações." 
  usage="/apelar config_canal canal: #apelacoes"
/>
`,

  xp: `
# XP, Níveis & Quests

Recompense a atividade dos seus membros com experiência e moedas.

<Callout variant="tip">
  **Dica:** Você pode configurar os prêmios de nível, canais ignorados e bônus pela nossa Dashboard no menu **Sistema de XP**.
</Callout>

## Comandos de Nível
<CommandCard 
  name="/xp ver" 
  description="Exibe o seu nível atual, XP acumulado e progresso. Informe um usuário para ver o de outro membro." 
  usage="/xp ver usuario: @Hito"
/>
<CommandCard 
  name="/xp ranking" 
  description="Exibe o ranking de XP do servidor, com páginas." 
  usage="/xp ranking pagina: 2"
/>

## Missões e Daily
<CommandCard 
  name="/quests" 
  description="Veja seu progresso nas missões semanais." 
  usage="/quests"
/>
<CommandCard 
  name="/daily" 
  description="Resgate suas moedas diárias (100 a 350 moedas + bônus de streak)." 
  usage="/daily"
/>

<Callout variant="tip">
  As Quests são ideais para ganhar bônus massivos de XP e moedas rapidamente!
</Callout>

## Configuração (Staff)
<CommandCard 
  name="/xp-config habilitar" 
  description="Liga ou desliga o sistema de XP no servidor." 
  usage="/xp-config habilitar ativo: true"
/>
<CommandCard 
  name="/xp-config blacklist" 
  description="Adiciona ou remove um canal da blacklist de XP." 
  usage="/xp-config blacklist acao: adicionar canal: #spam"
/>
<CommandCard 
  name="/xp-config notificacao" 
  description="Configura como as notificações de level up são enviadas." 
  usage="/xp-config notificacao tipos: canal canal: #level-up"
/>
<CommandCard 
  name="/xp-config ver" 
  description="Mostra as configurações atuais do sistema de XP." 
  usage="/xp-config ver"
/>
`,

  loja: `
# Loja & Carteira

Sistema de economia dinâmica e recompensas.

<Callout variant="tip">
  **Dica:** É muito mais fácil gerenciar, adicionar e editar itens da loja pela nossa Dashboard no menu **Loja de Pontos**.
</Callout>

## Comandos da Loja
<CommandCard 
  name="/loja ver" 
  description="Abre o menu interativo da loja para explorar os itens." 
  usage="/loja ver"
/>
<CommandCard 
  name="/loja comprar" 
  description="Compra um item diretamente usando o ID." 
  usage="/loja comprar item_id: ID_DO_ITEM"
/>
<CommandCard 
  name="/loja historico" 
  description="Mostra suas últimas compras e itens temporários." 
  usage="/loja historico"
/>
<CommandCard 
  name="/loja abrir-mao" 
  description="Abre mão de um cargo que você comprou." 
  usage="/loja abrir-mao"
/>
<CommandCard 
  name="/market" 
  description="Abre o Mercado de Revenda de Cargos, onde membros revendem cargos comprados." 
  usage="/market"
/>

## Carteira & Saldo
<CommandCard 
  name="/wallet" 
  description="Mostra seu saldo de moedas no servidor e na carteira global. Informe um usuário para ver o de outro membro." 
  usage="/wallet usuario: @Membro"
/>

<Callout variant="warning">
  **Atenção Staff:** Os comandos abaixo são para a moderação do servidor.
</Callout>

## Gestão da Loja (Staff)
<CommandCard 
  name="/loja adicionar" 
  description="Adiciona um item ou cargo à loja, com custo, estoque, tempo de resgate e duração do cargo opcionais." 
  usage="/loja adicionar nome: VIP descricao: Cargo VIP custo: 5000 cargo: @VIP"
/>
<CommandCard 
  name="/loja remover" 
  description="Remove um item da loja usando o ID." 
  usage="/loja remover item_id: ID_DO_ITEM"
/>
`,

  verificacao: `
# Verificação

Sistema de triagem e curadoria para comunidades de criadores e talentos.

<Callout variant="tip">
  **Dica:** Toda a gestão das solicitações (aprovação/rejeição) é feita de forma muito mais prática pela nossa [Dashboard](https://shirobot.xyz/dashboard) no menu **Verificações**.
</Callout>

## Solicitar Verificação
O sistema de verificação da Shiro permite que membros solicitem cargos especiais (como Artista, Streamer ou Editor) preenchendo um formulário interativo diretamente no Discord.

<Callout variant="info">
  Você também pode usar Webhooks para disparar os formulários de verificação através de botões ou menus personalizados.
</Callout>

## Comandos de Usuário
<CommandCard 
  name="/verificar" 
  description="Abre o formulário de verificação. O tipo é detectado pelo canal onde o comando foi usado." 
  usage="/verificar"
/>
<CommandCard 
  name="/verificar-artista" 
  description="Abre direto o formulário de verificação de Artista. Também existem: /verificar-desenvolvedor, /verificar-editor, /verificar-musico, /verificar-streamer e /verificar-youtuber." 
  usage="/verificar-artista"
/>
<CommandCard 
  name="/status" 
  description="Mostra o status da sua solicitação de verificação." 
  usage="/status"
/>

## Gestão (Staff)
<CommandCard 
  name="/revisar pendentes" 
  description="Lista as solicitações pendentes." 
  usage="/revisar pendentes"
/>
<CommandCard 
  name="/revisar aprovar" 
  description="Aprova uma solicitação, com nota opcional." 
  usage="/revisar aprovar id: ID nota: Bem-vindo!"
/>
<CommandCard 
  name="/revisar rejeitar" 
  description="Rejeita uma solicitação informando o motivo." 
  usage="/revisar rejeitar id: ID motivo: Portfólio incompleto"
/>
<CommandCard 
  name="/revisar deletar" 
  description="Apaga uma solicitação." 
  usage="/revisar deletar id: ID"
/>

<Callout variant="info">
  Ao ser aprovado ou rejeitado, o usuário recebe uma notificação automática da Shiro informando o resultado e os próximos passos!
</Callout>
`,

  utilidades: `
# Utilitários

Comandos essenciais de ajuda, identidade e status.

## Identidade & Ajuda
<CommandCard 
  name="/help" 
  description="Central de Ajuda oficial da Shiro." 
  usage="/help"
/>
<CommandCard 
  name="/perfil" 
  description="Mostra o perfil detalhado de um usuário na Shiro." 
  usage="/perfil usuario: @Hito"
/>
<CommandCard 
  name="/actions" 
  description="Abre um painel do Modal Role configurado na Dashboard." 
  usage="/actions painel: nome_do_painel"
/>

## Comunidade & Denúncias
<CommandCard 
  name="/report_abuse criar" 
  description="Denuncia um servidor que esteja usando a Shiro para fins ilícitos." 
  usage="/report_abuse criar"
/>
<CommandCard 
  name="/report_abuse listar" 
  description="Lista as denúncias que você fez." 
  usage="/report_abuse listar"
/>
<CommandCard 
  name="/report_abuse status" 
  description="Mostra o andamento de uma denúncia." 
  usage="/report_abuse status id: ID_DA_DENUNCIA"
/>
<CommandCard 
  name="/bug_report" 
  description="Reporta um bug da Shiro para os desenvolvedores, com passos, comportamento esperado e print opcionais." 
  usage="/bug_report titulo: Erro no /xp descricao: O comando não responde"
/>

## Informação & Diversão
<CommandCard 
  name="/apod hoje" 
  description="Mostra a Foto Astronômica do Dia da NASA." 
  usage="/apod hoje"
/>
<CommandCard 
  name="/apod config" 
  description="Configura a postagem automática diária do APOD (Staff)." 
  usage="/apod config canal: #astronomia horario: 09:00"
/>
<CommandCard 
  name="/apod desativar" 
  description="Desativa a postagem automática do APOD (Staff)." 
  usage="/apod desativar"
/>
<CommandCard 
  name="/steam" 
  description="Busca informações de um jogo na Steam." 
  usage="/steam jogo: nome_do_jogo"
/>
<CommandCard 
  name="/resumo_server" 
  description="Mostra um resumo geral do servidor com dados e estatísticas." 
  usage="/resumo_server"
/>
<CommandCard 
  name="/server_stats_image" 
  description="Gera um cartão gráfico com as estatísticas do servidor." 
  usage="/server_stats_image"
/>
<CommandCard 
  name="/shiro_news" 
  description="Mostra as notícias e novidades da Shiro." 
  usage="/shiro_news"
/>

## Status e Suporte
<CommandCard 
  name="/dashboard" 
  description="Acesse o painel de controle pelo site." 
  usage="/dashboard"
/>
<CommandCard 
  name="/uptime" 
  description="Mostra há quanto tempo o bot está online." 
  usage="/uptime"
/>
<CommandCard 
  name="/suporte" 
  description="Link para o servidor de suporte oficial." 
  usage="/suporte"
/>
<CommandCard 
  name="/vote" 
  description="Apoie a Shiro votando no Top.gg e ganhe moedas e Double XP." 
  usage="/vote"
/>
<CommandCard 
  name="/thanks" 
  description="Mostra os créditos e desenvolvedores da Shiro." 
  usage="/thanks"
/>
<CommandCard 
  name="/terms" 
  description="Termos de Uso e Política de Privacidade da Shiro." 
  usage="/terms"
/>
`,

  arte: `
# Arte & Galeria

Ferramentas completas para artistas e criadores visuais.

## Galeria e Mural
<CommandCard 
  name="/artistas view" 
  description="Explora a Galeria Global de talentos cadastrados." 
  usage="/artistas view"
/>
<CommandCard 
  name="/register" 
  description="Registre seu portfólio no Mural de Artistas da Shiro!" 
  usage="/register"
/>

## Ferramentas de Imagem
<CommandCard 
  name="/color_palette" 
  description="Extrai a paleta de cores predominante de uma imagem." 
  usage="/color_palette imagem: [arquivo]"
/>
<CommandCard 
  name="/exif" 
  description="Remove dados EXIF e metadados ocultos de imagens por segurança." 
  usage="/exif imagem: [arquivo]"
/>
<CommandCard 
  name="/resize" 
  description="Redimensiona imagens para os tamanhos das redes sociais (Instagram, Twitter, TikTok e outros)." 
  usage="/resize imagem: [arquivo] preset: Instagram Post (1080x1080)"
/>
<CommandCard 
  name="/convert" 
  description="Converte arquivos entre formatos (PNG, JPEG, WEBP, AVIF e GIF) com qualidade ajustável." 
  usage="/convert arquivo: [arquivo] formato: webp qualidade: 80"
/>
<CommandCard 
  name="/reduzir" 
  description="Reduz o peso de imagens e GIFs mantendo a qualidade visual." 
  usage="/reduzir imagem: [arquivo] nivel: Média"
/>
`,

  'como-acessar': `
# Navegação e Menu Principal

A [Dashboard da Shiro](https://shirobot.xyz/dashboard) é o seu painel de controle central. Para acessar, basta fazer login com sua conta do Discord.

![Exemplo da Dashboard](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/docs/how_to_acess_update.png)
![Exemplo da Dashboard](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/docs/how_to_acess_update2.png)

## Menu de Seleção de Servidor
Logo ao entrar, você verá a lista de todos os servidores onde possui permissão administrativa. No topo da página fica o atalho para o **Shiro VIP**, onde você assina os planos (Bronze, Silver e Gold) e libera recursos extras.

## Gerenciando um Servidor
Ao clicar em **"Gerenciar"** no card de um servidor, você entrará no painel específico dele. 
Caso a bot não esteja no servidor, você verá um botão **"Adicionar Bot"**.

*Dica:* Em alguns servidores, você também verá um atalho para o **Shiro Café** (uma página pública de apoio/gorjetas do servidor).

## Estrutura do Painel do Servidor
A barra lateral esquerda divide as configurações em 4 grandes grupos:
*   **Global:** Visão Geral, Analytics, Canais & Cargos e Modal Role.
*   **Moderação:** Verificações, Restrição de Cargos, Anti-Selfbot, Blacklist, Apelações de Ban e Avisos.
*   **Comunidade:** Sistema de XP, Cargo por Agendamento, Voz Dinâmica, Alertas de Live, Sorteios, Feedbacks e Tickets.
*   **Economia:** Loja de Pontos e Recompensas VIP.
`,

  'overview-dash': `
# Visão Geral (Overview)

A página de Visão Geral é a primeira tela que você vê ao entrar no painel de um servidor específico. Ela funciona como um centro de comando rápido, reunindo as informações mais importantes da sua comunidade.

![Visão Geral](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/overview.png)

## O que você encontra aqui?

*   **Estatísticas em Tempo Real:** Cards superiores mostrando contadores rápidos (ex: verificações pendentes, artistas aprovados e total de artistas globais).
*   **Feed de Verificações:** Uma lista dinâmica com as últimas solicitações de verificação do seu servidor. Você pode filtrar rapidamente entre "Pendentes" e "Aprovadas" para acompanhar o trabalho da moderação.
*   **Top Membros Ativos (XP):** Um ranking rápido com os 5 usuários mais engajados no servidor, mostrando seus avatares, níveis e XP acumulado. (Você pode clicar em "Ver Ranking Completo" para abrir a lista total).
*   **Fluxo de Membros:** Um gráfico prático mostrando a relação de "Entradas" e "Saídas" do seu servidor nos últimos 7 dias.

<Callout variant="tip">
  A Visão Geral é atualizada constantemente. Use-a como um painel diário para verificar a saúde e o engajamento da sua comunidade antes de mexer em configurações mais complexas.
</Callout>
`,

  'analytics-dash': `
# Analytics

Acompanhe o crescimento e a atividade do seu servidor ao longo dos últimos 30 dias com gráficos e dados reais.

![Analytics](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/analitycs_2.png)

## Métricas Disponíveis
Na aba Analytics, você tem acesso a relatórios detalhados divididos em duas grandes áreas:

*   **Estatísticas Gerais (30d):** Contadores resumindo o volume de *Mensagens*, *Tempo em Call (Voz)*, *Novos Membros* e total de *Punições* aplicadas no período.
*   **Gráficos de Engajamento:** 
    *   **Texto e Voz:** Um gráfico mostrando a evolução diária de mensagens e minutos em call para identificar os horários ou dias de maior pico.
    *   **Crescimento da Comunidade:** Um gráfico focado no fluxo de membros (Entradas vs. Saídas) para medir o crescimento líquido do seu servidor.
`,

  'perfil-dash': `
# Perfil do Usuário

O Perfil do Usuário é a sua área pessoal (global) dentro da Shiro. Ele não está preso a um servidor específico, mas sim à sua conta do Discord.

Você pode acessá-lo clicando no seu avatar/nome de usuário no menu lateral ou através do cabeçalho principal da Dashboard.

[![Perfil do Usuário](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/profile.png)](https://shirobot.xyz/perfil)

## O que você pode fazer no Perfil?
*   **Identidade Visual:** Exiba suas insígnias (Badges), conquistas e redes sociais em um cartão dinâmico exclusivo. *(Em Breve)*
*   **Carteira Global (Wallet):** Acesse seu saldo global de moedas Shiro, que podem ser enviadas para diferentes servidores.
*   **Mercado de Revenda:** Acompanhe o Mercado Global, onde você pode revender cargos comprados em servidores que habilitam essa função, calculando lucros baseados na raridade do cargo.
*   **Estatísticas de Votação:** Veja quantas vezes você apoiou a Shiro no Top.gg.

<Callout variant="tip">
  Seu perfil é a sua assinatura no ecossistema da Shiro. Membros VIP (Bronze, Silver ou Gold) ganham badges exclusivas e destaque em seus perfis!
</Callout>
`,

  'canais-dash': `
# Canais & Cargos

Esta é a central de automação básica do seu servidor na Dashboard.

<Callout variant="tip">
  Configure Auto-Roles, logs e gerencie permissões de comandos e mídia de forma visual.
</Callout>

## Funcionalidades Principais
1. **Entradas e Auto-Role:** Defina cargos que os usuários (ou bots) recebem automaticamente ao entrar.
2. **Logs e Avisos:** Escolha os canais de feedback e de registro das ações da Shiro.
3. **Cargo para a Tag do Servidor:** Dê um cargo automaticamente para quem começar a usar a tag do seu servidor no perfil.
4. **Monitor de Cargo:** Receba um alerta quando alguém receber um cargo específico.
5. **Restrições de Mídia:** Defina quais canais permitem apenas imagens, apenas textos ou links, bloqueando spams visuais.
6. **Canais Bloqueados:** Canais onde os comandos da Shiro são ignorados (administradores continuam podendo usar).
7. **Comandos Desabilitados:** Desligue comandos específicos da Shiro no servidor.
8. **Restrições de Comandos por Cargo:** Permita que apenas o cargo "Staff", por exemplo, use o comando \`/clear\`.

![Canais & Cargos](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/channels_roles.png)
`,

  'actions-dash': `
# Modal Role

Crie menus interativos avançados para que os membros do seu servidor possam escolher seus próprios cargos de forma autônoma e segura.

<Callout variant="tip">
  Esqueça os velhos sistemas de "reaction roles" com emojis confusos. A Shiro utiliza Botões e Modais modernos (com Checkboxes ou botões de Radio) para oferecer uma experiência visual muito superior.
</Callout>

O Modal Role é uma ferramenta poderosa da Dashboard que permite configurar botões interativos que abrem um menu pop-up direto na tela do usuário no Discord.

## Principais Funcionalidades

*   **Modais Interativos:** Configure painéis de múltipla escolha (Checkboxes) para seleção livre, ou de escolha única (Radio) para que o usuário seja forçado a escolher apenas uma opção (ótimo para cores ou times).
*   **Restrições de Acesso:** Você pode limitar a interação definindo "Cargos Obrigatórios". Se ativado, apenas membros com aquele cargo poderão clicar no botão e abrir o painel.
*   **Integração Simples:** Todo o layout e opções dos cargos são configurados e salvos pela aba visual na Dashboard.
*   **Suporte a Webhooks:** Agora você pode disparar painéis do Modal Role a partir de mensagens personalizadas criadas em ferramentas como o [discord.builders](https://discord.builders/). Basta vincular o customId do seu botão ou menu ao ID de gatilho do painel na Dashboard.

![Actions](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/actions.png)

## Vínculos entre Painéis (Links)
Uma das funções mais avançadas do Modal Role é a capacidade de vincular um painel a outro, permitindo que a seleção de um cargo afete automaticamente outros grupos.

Existem dois comportamentos principais para os vínculos:

1.  **Exclusivo (Exclusive):** Ao selecionar qualquer opção no painel principal, a Shiro removerá automaticamente **todos** os cargos que pertencem ao painel vinculado. 
    *   *Exemplo:* Útil para sistemas de "Troca de Classe", onde escolher uma nova classe remove todos os cargos da classe anterior.
2.  **Cascata (Cascade):** Este modo "espelha" a seleção por ordem de posição. Se o usuário marcar a 1ª e a 3ª opção do painel atual, a Shiro também aplicará a 1ª e a 3ª opção do painel vinculado.
    *   *Exemplo:* Útil para vincular cargos de cores a cargos de ícones, mantendo a seleção sincronizada.

![Action Config](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/action_config.png)

## Como usar no Discord?
Após criar e configurar o seu painel na Dashboard, qualquer membro (que tenha o cargo obrigatório, se configurado) pode abrir o menu interativo usando o comando:
\`/actions [nome_do_painel]\`

**O que acontece:**
Ao digitar o comando, a Shiro abrirá instantaneamente um **Menu Pop-up (Modal)** na tela do usuário, permitindo que ele selecione os cargos desejados e salve a escolha na mesma hora. Não é necessário enviar botões fixos nos canais, o acesso é feito sob demanda via comando slash!

![Interaction Example](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/action_example.png)

`,

  'sistema-xp': `
# Sistema de XP

Transforme seu servidor em um ambiente engajado através do módulo de XP. Membros ganham experiência ao conversar e participar de calls de voz, sobem de nível, desbloqueiam recompensas e competem no ranking do servidor.

<Callout variant="tip">
  Gerencie todas as configurações abaixo pela nossa Dashboard no menu **Sistema de XP**, na aba **Configurações**.
</Callout>

![XP](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_system.png)

## Ativar / Desativar o Sistema
O primeiro passo é ligar o módulo de XP no seu servidor. Enquanto estiver desativado, nenhum membro ganhará experiência ou moedas.
*   **Dashboard:** Acesse a aba **Progresso de XP** > **Configuração** e alterne o botão de **Status do Sistema**.

![XP On](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_on.png)

## Como se Ganha XP?

### XP por Mensagens (Texto)
Cada mensagem enviada rende entre **12 e 40 XP**, calculados automaticamente com base na qualidade da mensagem:
*   **Tamanho:** Mensagens mais longas rendem um bônus de até **+15 XP** (1 XP extra a cada 5 caracteres).
*   **Complexidade:** Mensagens com mais palavras ganham um bônus de até **+10 XP** (1 XP extra a cada 3 palavras).
*   **Variância Natural:** Um ajuste aleatório de ±3 XP é aplicado para que o ganho pareça orgânico.
*   **Cooldown:** Existe um intervalo de **5 segundos** entre ganhos de XP para evitar flood.

<Callout variant="info" title="Anti-Spam Inteligente">
  A Shiro ignora automaticamente mensagens muito curtas (menos de 3 caracteres), com caracteres repetidos excessivos (ex: "kkkkkkkkkkkk"), keyboard mash e mensagens duplicadas enviadas mais de 3 vezes seguidas. Essas mensagens não contam para XP.
</Callout>

### XP por Voz (Call)
Participar de canais de voz também rende XP! A cada minuto em call, o membro recebe:
*   **Base:** 15 XP/min em uma call com 2+ pessoas.
*   **Câmera Ligada:** +15 XP/min de bônus.
*   **Transmitindo Tela (Stream):** +10 XP/min de bônus.
*   **Teto Máximo:** 40 XP/min (combinando todos os bônus).

<Callout variant="warning">
  **Anti-Farm:** Se o membro estiver **sozinho** na call, o ganho é reduzido drasticamente para apenas **2 XP/min**, desencorajando o farm de XP em canais vazios.
</Callout>

## Conversão de XP em Moedas
O XP acumulado é convertido automaticamente em **moedas locais** do servidor na proporção de **1 moeda a cada 15 XP**. Essas moedas são usadas para comprar itens na Loja de Pontos do servidor.

## Sistema de Streak (Dias Consecutivos)
Manter atividade diária no servidor recompensa o membro com multiplicadores crescentes de XP:

| Dias Consecutivos | Multiplicador de XP |
|:---|:---:|
| 🔥 3 dias | **+10%** |
| 🔥 7 dias | **+20%** |
| 🔥 14 dias | **+30%** |
| 🔥 30+ dias | **+50%** |

<Callout variant="warning">
  **Importante:** Se o membro ficar **1 dia sem atividade**, o streak é resetado para 0. Membros **VIP** possuem tolerância extra (dias de folga sem perder o streak).
</Callout>

*   Itens da **CoffeeShop** podem conceder proteção de streak temporária.

## Milestones (Marcos Especiais)
Ao atingir determinados níveis, o membro recebe um bônus massivo de moedas como recompensa:

| Nível Alcançado | Recompensa em Moedas |
|:---:|:---:|
| **Nível 10** | 🪙 700 moedas |
| **Nível 25** | 🪙 1.500 moedas |
| **Nível 50** | 🪙 3.000 moedas |
| **Nível 75** | 🪙 7.500 moedas |
| **Nível 100** | 🪙 10.000 moedas |

## Notificações de Level Up
Configure como a Shiro deve avisar quando um membro subir de nível. Você pode escolher entre 3 modos:
*   **Resposta no Chat:** A Shiro responde diretamente à mensagem que causou o level up.
*   **Canal Específico:** Todas as notificações de level up são enviadas para um canal de texto dedicado (ex: #level-ups).
*   **Mensagem Direta (DM):** O membro recebe a notificação via DM privada.

![XP Notificação](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_notify.png)

## Canais Bloqueados (Blacklist)
Impeça que membros ganhem XP em canais específicos. Útil para excluir canais onde o conteúdo não deve contar como atividade:
*   **Canais de Texto:** Selecione canais como \`#bot-commands\`, \`#spam\` ou \`#off-topic\` onde mensagens não devem render XP.
*   **Canais de Voz:** Selecione canais de voz como \`🎵 Música\` ou \`AFK\` onde o tempo em call não deve contar.

![XP Canais Bloqueados](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_block.png)

## Cargos Bloqueados
Membros que possuírem qualquer cargo desta lista **não ganharão XP nem moedas** ao enviar mensagens ou ficar em call. Ideal para:
*   Cargos de punição (ex: "Muted", "Isolado").
*   Bots ou contas de serviço.
*   Membros que você não deseja que participem do ranking.

![XP Cargos Bloqueados](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_block_roles.png)

## Cargos de Pódio (Top 3)
Recompense os membros mais ativos automaticamente com cargos exclusivos! Configure um cargo para cada posição do pódio:
*   **🥇 Top 1:** O membro com mais XP competitivo recebe este cargo.
*   **🥈 Top 2:** O segundo colocado.
*   **🥉 Top 3:** O terceiro colocado.

![XP Cargos de Pódio](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_podium.png)

### Intervalo de Reset do Pódio
O ranking competitivo pode ser resetado automaticamente em ciclos configuráveis:
*   **Eterno (Forever):** O ranking nunca reseta. O pódio é vitalício.
*   **Semanal:** Reseta toda semana, os cargos são redistribuídos.
*   **Quinzenal:** Reseta a cada 2 semanas.
*   **Mensal:** Reseta todo mês.

<Callout variant="info">
  Os cargos de pódio são atualizados automaticamente a cada reset. O membro que perder sua posição terá o cargo removido e o novo líder o receberá.
</Callout>

## Missões Semanais (Quests)
Ative o sistema de missões para dar aos membros objetivos concretos e recompensas extras:
*   Missões são geradas automaticamente a cada semana.
*   Exemplos: "Envie 50 mensagens", "Fique 30 minutos em call", "Mantenha um streak de 3 dias".
*   Ao completar uma quest, o membro ganha bônus de XP e moedas.

Use o comando \`/quests\` no Discord para visualizar as missões disponíveis.

![XP Missões](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_quests.png)

## Ferramentas Administrativas (Zona de Perigo)
Na aba de configurações, administradores têm acesso a ferramentas destrutivas para gestão de dados:
*   **Resetar XP do Servidor:** Zera todo o XP acumulado por todos os membros. Os níveis voltam ao 1. **Esta ação é irreversível.**
*   **Deletar XP e Moedas:** Remove completamente todos os dados de XP e moedas do servidor. *(Restrito a desenvolvedores.)*

<Callout variant="warning">
  **Atenção:** Ambas as ações exigem confirmação via diálogo e são **permanentes**. Recomendamos usar apenas em casos extremos, como reiniciar completamente o sistema de economia do servidor.
</Callout>

![XP Ferramentas Administrativas](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_tools.png)

## Comandos Relacionados
*   \`/xp ver\` — Veja seu nível, XP e progresso atual.
*   \`/xp ver [usuario]\` — Confira o XP de outro membro.
*   \`/xp ranking\` — Veja o Top 10 do servidor.
*   \`/quests\` — Visualize suas missões semanais.
*   \`/wallet\` — Confira seu saldo de moedas.
`,

  'anti-selfbot': `
# Anti-Selfbot

A Shiro vigia contas que mandam a **mesma mensagem em vários canais** (o padrão dos selfbots de spam) e age em segundos, enquanto a conta ainda está mandando.

<Callout variant="tip">
  Na Dashboard, a seção **Anti-Selfbot** tem duas abas: **Detecção inteligente** (esta página) e **Canal Armadilha** ([veja aqui](/docs/honeypot)). As duas funcionam juntas e você pode ligar uma, a outra ou as duas.
</Callout>

## Como ela decide
A análise é rápida e acontece toda na memória do bot:

*   **Compara cada mensagem com as anteriores da mesma conta.** Com anexos, compara os **arquivos** (tipo e tamanho), então mudar o texto não engana.
*   **Dispara** quando a mesma mensagem aparece em vários canais dentro da janela da sensibilidade escolhida, ou muitas vezes no mesmo canal. Textos curtinhos ("oi", "kkk") precisam de mais canais para contar.
*   **Calcula a confiança** (alta ou média) com base nos chats de call usados, imagens por mensagem, links e convites, idade da conta, tempo no servidor e a flag de spammer do Discord.
*   **Depois de pegar alguém**, as próximas cópias da mesma mensagem somem na hora por 10 minutos.
*   O **canal armadilha** fica de fora da contagem: quem escrever lá segue as regras da aba Canal Armadilha.

## Configurações
*   **Ação:** só avisar no canal de logs, apagar as cópias, apagar + castigo (timeout), apagar + expulsar ou banir (apaga as mensagens da última hora).
*   **Duração do castigo:** de 10 minutos a 28 dias (só para a ação de castigo).
*   **Sensibilidade:**
    - **Alta:** 3 canais em até 2 minutos.
    - **Normal (recomendado):** 4 canais em até 1 minuto.
    - **Baixa:** 5 canais em até 1 minuto.
    - **Personalizada:** você escolhe em quantos canais a mesma mensagem precisa aparecer (de 2 a 10) e dentro de quanto tempo (de 15 segundos a 10 minutos).
*   **Canal de logs:** recebe um relatório com a análise e os botões **Banir** e **Falso positivo**.
*   **Cargos ignorados:** membros com esses cargos nunca são analisados.

<Callout variant="warning">
  **Quem nunca é analisado:** bots, webhooks, o dono do servidor, quem tem \`Administrador\`, \`Gerenciar Mensagens\` ou \`Gerenciar Servidor\` e os cargos ignorados.
</Callout>

## Falso positivo
Se a Shiro pegar alguém por engano, use o botão **Falso positivo** no relatório do canal de logs ou na lista de ocorrências da Dashboard. O castigo (ou o ban) é removido na hora. As mensagens apagadas não voltam.

## Ocorrências e privacidade
*   Cada detecção fica registrada na Dashboard com a análise completa (conteúdo, canais, tempo, motivo e ação tomada).
*   Os registros ficam guardados por **30 dias** e depois são **apagados por completo** do banco de dados, sem cópias.
*   Você pode limpar o histórico do servidor a qualquer momento pelo botão **Limpar**.
*   O relatório enviado no canal de logs é uma mensagem do Discord e continua lá até a sua equipe apagá-la.
`,

  honeypot: `
# Honeypot (Canais Armadilha)

Configure armadilhas em canais de texto ou voz para punir automaticamente selfbots e usuários maliciosos.

<Callout variant="info">
  O Canal Armadilha agora fica dentro da seção **Anti-Selfbot** da Dashboard, na aba **Canal Armadilha**. Na outra aba está a [Detecção inteligente](/docs/anti-selfbot), que pega selfbots que espalham a mesma mensagem por vários canais.
</Callout>

<Callout variant="tip">
  Esta é uma das defesas mais eficazes contra bots de divulgação (selfbots) que entram no servidor para enviar DMs maliciosas para seus membros.
</Callout>

![Honeypot Channel](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/honeypot_system.png)

## Como funciona?
Diferente do que muitos pensam, os selfbots só interagem com canais que eles conseguem **visualizar**. Por isso, a estratégia da Shiro é criar uma "isca" atraente que capture apenas usuários com intenções maliciosas ou contas automatizadas.

### 1. Honeypot Chat (Texto)
*   **O Canal:** Você cria um canal de texto específico para servir de armadilha.
*   **A Isca:** O canal deve ser visível para os membros, mas com um aviso claro (enviado por um moderador ou dono) dizendo para **NÃO** enviar mensagens ali.
*   **A Captura:** Selfbots ignoram avisos e tentam postar em qualquer canal visível. Ao enviar uma mensagem, a punição é imediata.

### 2. Honeypot Call (Voz)
*   **O Canal:** Monitora o chat de texto integrado aos canais de voz.
*   **A Isca:** Assim como no chat, recomenda-se deixar um aviso no chat da call para que membros legítimos não digitem ali.
*   **A Captura:** Bots que entram em calls para spammar o chat de voz serão capturados assim que enviarem a primeira mensagem.

## Como configurar?

### 1. Preparação do Canal
Para que a armadilha funcione, o canal precisa ter as permissões corretas para que o bot malicioso consiga "morder a isca":

*   **Para Honeypot Chat:** O canal de texto deve permitir que o cargo @everyone possa:
    - \`Visualizar Canal\`
    - \`Enviar Mensagens\`
    - \`Inserir Links\` e \`Anexar Arquivos\` (selfbots costumam usar esses recursos).
*   **Para Honeypot Call:** O canal de voz deve permitir que o cargo @everyone possa:
    - \`Todas as Permissões Anteriores\`
    - \`Conectar\` (essencial para que o bot consiga acessar o chat da call).
    - \`Enviar Mensagens no Chat de Voz\`.

### 2. O Aviso de Segurança (Crucial)
Para evitar que membros legítimos caiam na armadilha por acidente:
1. Crie o canal de Honeypot.
2. Como Dono ou Moderador, envie uma mensagem fixada ou bem visível dizendo: **"CANAL DE TESTE/SEGURANÇA: NÃO ENVIE MENSAGENS AQUI. O DESCUMPRIMENTO RESULTARÁ EM BANIMENTO AUTOMÁTICO."**
3. Ative o Honeypot na Dashboard da Shiro.

### 3. Ativação na Dashboard
Na seção **Anti-Selfbot**, aba **Canal Armadilha**, selecione os canais preparados e ative as chaves correspondentes (Chat ou Call).

## Configurações Principais
*   **Punição:** Escolha entre **Ban** (Recomendado), **Kick** ou **Timeout de 24h**.
*   **Limpeza de Histórico:** Ao optar pelo **Ban**, você pode configurar para que todas as mensagens daquele bot no servidor (retroativas de 1h a 7 dias) sejam excluídas magicamente.
*   **Notificação DM:** Texto personalizado que a Shiro enviará para a conta banida.

<Callout variant="warning">
  **Imunidade Automática:** Usuários com permissão de \`Administrador\` são completamente imunes aos canais armadilha.
</Callout>
`,

  'verificacao-dash': `
# Verificação de Membros

Gerencie candidaturas de artistas, desenvolvedores e outros talentos de forma profissional e centralizada pela Dashboard.

<Callout variant="tip">
  Esta aba permite que você analise portfólios, veja redes sociais e aprove membros para receber cargos específicos conforme as categorias configuradas na Dashboard (exemplo: Artista, Editor, Streamer).
</Callout>

Diferente de um simples captcha, o sistema de Verificação da Shiro é focado em **curadoria de talentos** e organização de comunidades artísticas ou de nicho.

![Verificação](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/verify.png)

## Gerenciamento de Solicitações
Nesta aba, você encontrará a fila de espera organizada por ordem de chegada. Para cada solicitação, a Shiro exibe:
*   **Dados do Usuário:** Nome, ID e tempo de espera na fila.
*   **Categoria:** O tipo de verificação (Artista, Editor, Streamer, etc).
*   **Portfólio & Redes:** Links diretos e imagens de exemplo anexadas pelo usuário no Discord.

## Ações da Staff
Você pode processar cada pedido com um clique:
1.  **Aprovar:** Concede automaticamente o cargo configurado ao usuário e envia uma notificação de sucesso.
2.  **Rejeitar:** Abre um campo para você escrever o motivo da recusa. O usuário receberá o aviso e poderá corrigir os dados para tentar novamente.

## Configuração do Painel
Lembre-se que o visual do painel que aparece no Discord (título, banner e canal) deve ser configurado na aba **Canais & Cargos** na Dashboard. O painel final é enviado ao canal de sua escolha para que os membros possam clicar e iniciar o processo.

## Criador de Verificações (VIP)
Na aba **Criador**, servidores com plano **Silver** ou **Gold** podem montar verificações próprias, com até **5 perguntas** personalizadas no formulário que o membro preenche no Discord. O plano Silver permite até 3 verificações customizadas e o Gold até 5.

`,

  'restricao-cargos-dash': `
# Restrição de Cargos

Impeça que cargos sensíveis sejam dados por qualquer pessoa. Quando ativado, os cargos restritos só podem ser atribuídos por quem estiver na whitelist.

## Como funciona
*   **Cargos Restritos:** selecione os cargos que ninguém pode atribuir, exceto a whitelist.
*   **Whitelist:** cargos e usuários (por ID) que podem continuar dando os cargos restritos.
*   **Canal de Log:** a Shiro registra as tentativas bloqueadas.

<Callout variant="warning">
  A Shiro precisa da permissão **Gerenciar Cargos** e o cargo dela tem que estar **acima** dos cargos restritos na hierarquia.
</Callout>
`,

  'blacklist-dash': `
# Blacklist de Palavras

Mantenha o ambiente do seu servidor saudável bloqueando ofensas, spam ou termos proibidos automaticamente.

A Shiro monitora todas as mensagens em tempo real e compara com a sua lista personalizada configurada nesta aba.

![Blacklist](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/blacklist.png)

## Gerenciamento de Termos
Você pode adicionar termos à Blacklist com dois modos de detecção:
*   **Correspondência Exata:** O bot só agirá se a palavra for dita exatamente como escrita (ex: "spam").
*   **Correspondência Parcial:** O bot agirá se o termo estiver contido em qualquer parte de uma palavra (ex: "bob" bloquearia "bobo" e "boboca").

## O que acontece ao detectar?
1. **Deleção Instantânea:** A mensagem é removida antes mesmo que outros membros a vejam.
2. **Registro nos Logs:** A Shiro envia um alerta para o seu canal de logs configurado, informando quem tentou dizer o termo proibido.
`,

  'apelacoes-dash': `
# Apelações de Ban

Ofereça uma segunda chance de forma justa e organizada para membros que foram banidos, mas que desejam solicitar uma revisão.

O sistema de apelações da Shiro centraliza todas as solicitações em uma fila de revisão exclusiva na Dashboard, evitando que sua staff precise lidar com pedidos bagunçados via DM.

![Apelações](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/apelacoes.png)

## Fluxo da Apelação
1. **O Pedido:** O usuário banido acessa o link de apelação ou usa o comando \`/apelar\` e preenche um formulário detalhando sua justificativa.
2. **Fila na Dashboard:** O pedido aparece nesta aba com a mensagem do usuário, o motivo original do banimento e a data.
3. **Decisão da Staff:**
    *   **Aceitar:** O usuário é desbanido automaticamente e recebe uma notificação informando que sua volta foi permitida.
    *   **Recusar:** O usuário recebe uma mensagem informando que seu banimento foi mantido, com uma nota opcional da staff.

## Aviso de Banimento
Antes de banir alguém, a Shiro envia uma DM para a pessoa avisando do banimento e do motivo. Em **Apelações de Ban > Aviso de Banimento** você pode incluir nessa DM o convite de um servidor de suporte, para que a pessoa consiga pedir a revisão. Use um convite que não expira (discord.gg/...).

## Vantagens
*   **Histórico Preservado:** Todas as apelações ficam salvas para consulta futura, mesmo as rejeitadas.
*   **Segurança:** Somente administradores ou cargos com permissão de moderador podem tomar decisões sobre apelações.
`,

  'warns-dash': `
# Avisos

Mantenha um controle total sobre o comportamento da comunidade e o histórico de ações da sua staff.

## Gestão de Avisos (Warns)
Nesta seção, você pode visualizar todos os avisos ativos que membros do servidor possuem. 
*   **Edição de Motivos:** Errou ao dar um warn? Você pode alterar a descrição da infração diretamente pelo painel.
*   **Remoção (Revogar):** Limpe o histórico de um usuário removendo warns antigos ou injustos.
*   **Histórico por Membro:** Busque por um usuário específico para ver todas as advertências acumuladas ao longo do tempo.

![Warns](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/warns.png)
`,

  'agendamentos-dash': `
# Cargo por Agendamento

Crie painéis onde os membros agendam o recebimento de um cargo em uma data futura. Ideal para cargos de "Fundador", recompensas de tempo de casa ou liberação de áreas depois de alguns dias.

![Scheduled Roles](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/schedule_role.png)

## Como funciona
1. **Crie um painel:** a Shiro posta no canal escolhido uma mensagem com o botão **Agendar Resgate**.
2. **O membro clica:** ele recebe uma confirmação privada com a data prevista.
3. **No dia marcado:** o cargo é entregue automaticamente e o membro recebe uma DM.

## Configurações do Painel
*   **Título e Descrição:** o texto da mensagem enviada no Discord.
*   **Cargo a Conceder:** o cargo que será entregue.
*   **Dias de Espera:** quantos dias até a entrega (0 entrega logo após o agendamento).
*   **Auto-Trigger (opcional):** quem receber um cargo específico é agendado automaticamente, sem precisar clicar no botão.

## Gestão na Dashboard
*   **Agendamentos:** veja cada agendamento com status Pendente, Entregue ou Cancelado.
*   **Editar painel:** a mensagem no Discord é atualizada (ou reenviada, se tiver sido apagada).

<Callout variant="info">
  Também dá para gerenciar os painéis pelo comando \`/cargo-agendamento\` (criar, listar e remover).
</Callout>
`,

  'dynamicvoice-dash': `
# Voz Dinâmica (Call de Voz)

Diga adeus àquela lista infinita de canais de voz vazios. Com a Voz Dinâmica, a Shiro mantém sempre uma quantidade certa de calls livres em uma categoria: cria novas quando as livres enchem e apaga as que sobram quando esvaziam.

## Como funciona?
1. **A Categoria:** Você escolhe uma categoria do servidor. Só os canais de voz dessa categoria são gerenciados.
2. **A Margem:** Você define quantas calls vazias devem ficar sempre disponíveis (ex: 1).
3. **Criação Automática:** Quando alguém entra na última call livre, a Shiro cria uma nova na hora.
4. **Auto-Limpeza:** Quando sobram calls vazias além da margem, as excedentes são apagadas.
5. **Numeração Organizada:** O \`#\` do nome vira o menor número livre na categoria. Calls com gente dentro nunca são renomeadas.

## Configurações na Dashboard
*   **Categoria:** onde as calls dinâmicas ficam.
*   **Margem de Canais Vazios:** quantas calls livres manter abertas.
*   **Template de Nome:** use \`#\` para o número da call (ex: \`Call #\` vira Call 1, Call 2...).
*   **Limite de Usuários:** limite padrão de pessoas por call (0 = ilimitado).
*   **Canais Ignorados:** canais da categoria que a Shiro não conta nem apaga.
*   **Várias Categorias:** cada categoria pode ter sua própria configuração. A quantidade depende do plano VIP do servidor.

![Dynamic Voice](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/dynamic_voice.png)
`,

  'livealerts-dash': `
# Alertas de Live

Sempre que você entrar ao vivo na Twitch ou YouTube, a Shiro notificará seu servidor com um anúncio personalizado e visualmente atraente.

## Funcionalidades
*   **Suporte Multi-Plataforma:** Adicione múltiplos canais da Twitch e YouTube para monitoramento.
*   **Embeds Customizáveis:** A Shiro envia um card com a thumb da live, título e o jogo atual.
*   **Menções Inteligentes:** Escolha se deseja marcar \`@everyone\`, \`@here\` ou um cargo específico de inscritos/seguidores.

## Configuração
Basta inserir o link do canal ou o nome de usuário na Dashboard e selecionar o canal de texto onde o alerta deve ser postado. A Shiro cuidará do resto!

![Live Alerts](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/live_alert.png)
`,

  'sorteios-dash': `
# Sorteios

Crie e gerencie sorteios do servidor direto pela Dashboard, com prévia em tempo real de como a mensagem vai aparecer no Discord.

## Tipos de Sorteio
*   **Sorteio no Discord:** os membros participam clicando em um botão na mensagem publicada no canal.
*   **Sorteio na Dashboard:** o sorteio é conduzido pela Dashboard.

## Configurações
*   **Título, descrição e número de vencedores.**
*   **Canal de destino:** onde o painel é publicado.
*   **Agendamento (opcional):** data de início e de fim.
*   **Cargos Permitidos (opcional):** só quem tem esses cargos pode participar. Vazio libera para todos.
*   **Botão Customizado (opcional):** cole o ID de um botão criado em um construtor de mensagens (como o discord.builders) e a Shiro registra os participantes que clicarem nele.

## Durante e depois do sorteio
*   **Status:** Rascunho, Agendado, Ativo, Finalizado ou Cancelado.
*   **Ações:** publicar no Discord, iniciar, forçar o início, realizar o sorteio e finalizar.
*   **Vencedores:** envie uma DM para os vencedores com uma mensagem opcional.
*   **Reaproveitar:** crie um novo sorteio a partir de um antigo.
`,

  'feedbacks-dash': `
# Feedbacks

Receba opiniões e sugestões dos membros de forma organizada.

## Como funciona
1. Configure os canais e envie o **Painel de Abertura** em um canal do servidor.
2. Os membros clicam no botão do painel e enviam o feedback.
3. A equipe recebe os feedbacks no **Canal de Moderação** e o histórico fica no **Canal de Logs**.

## Configurações
*   **Sistema Ativado/Desativado.**
*   **Permitir Feedbacks Anônimos.**
*   **Tempo limite para edição:** por quantos minutos o autor ainda pode editar o feedback (máx. 300).
*   **Canais:** Canal do Painel, Canal de Moderação (Staff) e Canal de Logs (Histórico).
*   **Cargo de Gerenciamento:** quem pode gerenciar os feedbacks.
*   **Painel personalizado:** monte o embed do painel ou use o Custom ID de um botão criado em um construtor de mensagens.

<Callout variant="info">
  Atalho pelo Discord: \`/configurar feedback\`.
</Callout>
`,

  'tickets-dash': `
# Tickets

O sistema de tickets da Shiro (Nekomura Tickets) é uma aplicação própria do ecossistema, com um painel separado otimizado para atendimento. Na Dashboard, a seção **Tickets** leva você direto para o painel de tickets do seu servidor.

## Recursos
*   **Painéis Interativos:** mensagens com botões e seletores para os membros abrirem atendimento.
*   **Categorias & Permissões:** organize tipos de chamado (denúncias, dúvidas, compras) e defina quais cargos atendem cada um.
*   **Formulários Prévios:** peça informações antes de abrir o ticket (nickname, motivo, prints).
*   **Transcripts & Histórico:** exporte as conversas em texto ou HTML para auditoria.

<Callout variant="info">
  No Discord, use \`/ticket-setup\` para ver o passo a passo de configuração.
</Callout>
`,

  'loja-dash': `
# Loja de Pontos

Monetize a atividade do seu servidor com uma loja completa. Seus membros podem gastar o XP e moedas que ganharam conversando para adquirir recompensas exclusivas.

## Criação de Itens
Pelo painel visual, você pode criar diversos tipos de itens:
*   **Venda de Cargos:** O item mais comum. Ao comprar, o usuário recebe um cargo automaticamente (ex: Cargo VIP ou Cor Exclusiva).
*   **Itens de Mensagem:** O usuário compra um item que envia uma notificação para a staff (ex: "Pedido de Música" ou "Destaque no Mural").
*   **Estoque e Preços:** Defina um valor justo e limite a quantidade de itens disponíveis.

## Mercado de Revenda
A Shiro suporta um sistema de revenda onde usuários podem colocar seus itens comprados de volta à venda para outros membros, criando uma economia interna vibrante.

![Shop Dashboard](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/xp_rewards.png)
`,

  'vip-rewards-dash': `
# Recompensas VIP

Dê cargos automaticamente para quem tem assinatura VIP da Shiro.

## Como funciona
Quando um membro entra no servidor ou interage com a Shiro, ela confere o plano VIP dele e entrega o cargo configurado para aquele plano.

*   **Um cargo por plano:** Bronze, Silver e Gold.
*   **Global VIP:** um cargo dado a qualquer assinante, independente do plano.
`,

  premium: `
# Shiro VIP & Economia

Evolua sua experiência na Shiro e apoie o desenvolvimento do projeto com nossos planos de assinatura e pacotes de moedas.

A Shiro oferece um ecossistema de benefícios que afeta tanto o seu perfil global quanto os servidores que você gerencia ou frequenta.

[![Vip Overview](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/vip_overview.png)](https://shirobot.xyz/vip)

## Tiers de Assinatura (VIP)

Temos três níveis de assinatura, **Bronze**, **Silver** e **Gold**, cada um com foco em diferentes necessidades. Assinantes antigos dos planos Espresso, Cappuccino e Macchiato foram migrados automaticamente para Bronze, Silver e Gold.

[![VIP Tiers](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/vip_tiers.png)](https://shirobot.xyz/vip)

---

## Tabela de Vantagens

Compare os benefícios de cada plano e escolha o que melhor se encaixa no seu estilo:

[![Vantagens XP](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_xp.png)](https://shirobot.xyz/vip)
[![Vantagens Limits](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_limits.png)](https://shirobot.xyz/vip)
[![Vantagens Benefits](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_benefits.png)](https://shirobot.xyz/vip)

---

## Pacotes de Moedas (Coins)

Se você não deseja uma assinatura mensal, mas precisa de moedas agora para comprar aquele cargo exclusivo na loja do seu servidor favorito, você pode adquirir **Pacotes de Moedas** avulsos.

[![Care Package](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/care_package.png)](https://shirobot.xyz/vip)

As moedas adquiridas são adicionadas à sua **Carteira Global (Wallet)** e podem ser enviadas para qualquer servidor que utilize o sistema de economia da Shiro.

<Callout variant="info">
  Para assinar ou comprar moedas, acesse a aba **Shiro VIP** no menu principal da Dashboard. Todos os pagamentos são processados de forma segura e os benefícios são ativados instantaneamente!
</Callout>
`,

  builder: `
# Builder de Mensagens

Monte mensagens do Discord com **Components V2** (containers, seções, galerias, botões e menus), veja a prévia em tempo real e envie por webhook. É grátis e não precisa de login.

<Callout variant="tip">
  Acesse pelo menu **⋯ > Builder de Mensagens** no topo do site, ou direto em [shirobot.xyz/builder](https://shirobot.xyz/builder).
</Callout>

## Montando a mensagem
*   **Blocos:** adicione Container, Texto, Seção, Galeria, Separador e Botões/Menu. Arraste pelo ícone de pontinhos para reordenar.
*   **Prévia ao lado:** mostra a mensagem como ela aparece no Discord. Clique num bloco da prévia para abrir o campo dele no editor.
*   **Desfazer e refazer:** \`Ctrl+Z\` e \`Ctrl+Y\`.
*   **Rascunho automático:** a mensagem fica salva no seu navegador e volta quando você abre a página de novo.
*   **Validação:** o builder avisa o que o Discord recusaria (texto vazio, link inválido, mais de 40 componentes ou 4000 caracteres) antes de enviar.

## Markdown do Discord
Os campos de texto têm uma barra de formatação e a prévia entende o markdown completo do Discord:
*   \`# Título\`, \`## Título\`, \`### Subtítulo\` e \`-# texto pequeno\`
*   \`**negrito**\`, \`*itálico*\`, \`__sublinhado__\`, \`~~riscado~~\` e \`||spoiler||\`
*   \`\`código\`\` e blocos de código com três crases
*   Listas (\`- item\` e \`1. item\`), citações (\`> texto\` e \`>>> várias linhas\`)
*   Links \`[texto](https://...)\`, menções \`<@&id>\` e \`<#id>\`, emojis \`<:nome:id>\` e datas \`<t:1767225600:R>\`

## Exportar e importar JSON
Na aba **JSON** você pode **copiar**, **baixar o .json** ou colar um JSON e clicar em **Carregar**. O formato é o da API do Discord, então funciona com outros bots e ferramentas.

<Callout variant="info">
  A aba JSON existe em **todos** os builders da Shiro: aqui e nos painéis da Dashboard (Feedbacks, Verificações, Modal Role, Cargo por Agendamento e Canal Armadilha).
</Callout>

## Enviando por webhook
1. No Discord, abra **Editar canal > Integrações > Webhooks** e crie (ou copie) um webhook.
2. Cole a **URL do webhook** no campo do builder.
3. Se quiser, troque o **nome** e o **avatar** de quem envia, ou informe o **ID de um tópico/post** de fórum.
4. Clique em **Enviar mensagem**.

Para **editar** uma mensagem que você já mandou por esse webhook, cole o link (ou o ID) da mensagem em **Editar mensagem enviada** e clique em **Editar mensagem**.

<Callout variant="warning">
  **Webhooks só aceitam botões de link.** Botões com ação e menus de seleção precisam de um bot respondendo; nesses casos, use os painéis da Dashboard, onde a própria Shiro responde aos botões.
</Callout>

## Privacidade
A mensagem é enviada direto do seu navegador para o Discord. A **URL do webhook nunca é salva** (nem no navegador, nem nos servidores da Shiro). Só o rascunho da mensagem fica guardado no seu navegador.
`,

  discord: `
# Comunidade & Suporte

Precisa de ajuda, quer reportar um bug ou apenas conversar com outros usuários e criadores? Nosso servidor do Discord é o lugar ideal!

<Callout variant="tip">
  **Acesso Rápido:** [Entre no nosso servidor oficial](https://discord.gg/bEKsKrzEHJ)
</Callout>

No nosso Discord você encontra:
*   **Suporte Técnico:** Nossa equipe está pronta para ajudar com qualquer configuração que você não tenha encontrado aqui na Wiki.
*   **Anúncios:** Fique sabendo em primeira mão de todas as atualizações da Shiro.
*   **Sugestões:** Tem uma ideia legal para o bot ou para a Dashboard? Mande pra gente!
*   **Comunidade:** Interaja com outros criadores, artistas e donos de servidores.

![Discord](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/discord_sv.png)

`,

  changelog: `
# Histórico de Atualizações (Changelog)

Acompanhe as últimas novidades, correções de bugs e funcionalidades adicionadas à Shiro e à nossa Dashboard.

<Callout variant="info">
  **Nota:** As atualizações menores e correções de bugs não são postadas ao publico, apenas atualizações importantes são postadas.
</Callout>

## Atualização - Builder de Mensagens 02/10/2026
*   **Builder de Mensagens:** novo menu no site (⋯ > Builder de Mensagens) para montar mensagens Components V2, exportar o JSON e enviar ou editar por webhook.
*   **Painéis com builder:** Feedbacks, Verificações, Modal Role, Cargo por Agendamento e Canal Armadilha agora usam o mesmo builder, com botões já ligados às ações da Shiro.
*   **Alertas de Live:** prévia fiel com markdown completo, linha do link editável e botão de link para a live.
*   **Ferramentas:** página reorganizada por categorias e novo **Removedor de Fundo**, que roda direto no navegador.
*   **Modal Role:** a seção "Painel de Ações" da Dashboard agora se chama **Modal Role**. Nada muda no funcionamento.

## Atualização - Anti-Selfbot 01/10/2026
*   **Anti-Selfbot:** A seção Canais Armadilha virou **Anti-Selfbot**. Além do Canal Armadilha, agora a Shiro detecta contas que mandam a mesma mensagem em vários canais e age em segundos, com sensibilidade em presets ou personalizada.
*   **Ocorrências por 30 dias:** As detecções ficam na Dashboard por 30 dias e depois são apagadas por completo.
*   **Voz Dinâmica:** Calls ocupadas não são mais renomeadas e a criação de novas calls ficou mais confiável.
*   **Remoção do Card VTuber e do Sistema de Times:** Recursos descontinuados foram retirados da documentação.

## Atualização - Remoções e Adições 08/05/2026
*   **Honeypot Chat e Call:** Sistema de canais armadilhas em chat de call e chat de texto com aleatoriedade de nomes para evitar selfbots.
*   **Remoção dos Relatórios:** Remoção completa dos relatórios de punição.
*   **Remoção do Sistema de Comissões:** Remoção do sistema de comissões antigo.
*   **Nekomura Tickets:** Sistema de tickets personalizados da Shiro adicionado.
*   **Resgate automatico por XP:** Resgate automatico de recompensas por xp ao invés de moedas.
*   **Atualização no Header e Footer:** Adição do redirecionamento para os tickets no Header e no Footer.
`,
}

export function getDocContent(slug: string): string {
  return DOCS[slug] ?? `# Página não encontrada\nO conteúdo para **${slug}** ainda não está disponível.`;
}
