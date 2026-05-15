// Content library using MDX components
// Based on topgg-commands-simple.json (Official List)

const DOCS: Record<string, string> = {
  intro: `
# Bem-vindo à Documentação da Shiro

A **Shiro** é uma bot multifuncional para Discord focada em comunidades de criadores de conteúdo, com moderação avançada, sistema de XP, loja de cargos, VTuber card e muito mais.

<Callout variant="tip">
  A Shiro foi desenhada para ser leve, poderosa, completa e focada na experiência do usuário.
</Callout>

![Shiro Preview](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/home_doc.png)

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
*   **Via Comandos:** Use o comando \`/config painel\` para abrir o menu de configuração interativo direto no Discord.

## Próximos Passos
Agora que a Shiro está no seu servidor, que tal configurar os módulos principais?
*   [Configurar Verificação de Artistas](/docs/verificacao-dash)
*   [Ativar Sistema de XP](/docs/sistema-xp)
*   [Personalizar o AutoMod](/docs/automod)
`,

  moderacao: `
# Moderação & Configuração

Gerencie seu servidor com precisão e configure as regras do bot.

<Callout variant="tip">
  **Dica:** Quase todas as configurações de moderação, como AutoMod e Logs, podem ser ajustadas visualmente pela nossa [Dashboard](https://shirobot.xyz/dashboard).
</Callout>

<Callout variant="warning">
  **Atenção Staff:** Quase todos os comandos nesta seção exigem permissões administrativas (Gerenciar Servidor ou Administrador).
</Callout>

## Punições e Gestão
<CommandCard 
  name="/ban" 
  description="Bane um usuário do servidor." 
  usage="/ban usuario: @Hito motivo: Spam"
/>
<CommandCard 
  name="/unban" 
  description="Remove o banimento de um usuário via ID." 
  usage="/unban usuario: ID_DO_USUARIO"
/>
<CommandCard 
  name="/kick" 
  description="Expulsa um usuário do servidor." 
  usage="/kick usuario: @Membro"
/>
<CommandCard 
  name="/timeout add" 
  description="Silencia um usuário temporariamente." 
  usage="/timeout add usuario: @Membro duracao: 60"
/>
<CommandCard 
  name="/warns" 
  description="Gerencia os avisos (advertências) de um usuário." 
  usage="/warns usuario: @Membro"
/>

## Configurações do Bot
<CommandCard 
  name="/server_config" 
  description="Configurações gerais do Shiro no servidor atual." 
  usage="/server_config"
/>
<CommandCard 
  name="/lockdown" 
  description="Sistema de modo pânico para trancar canais." 
  usage="/lockdown"
/>
<CommandCard 
  name="/blacklist" 
  description="Gerencia palavras e frases proibidas no servidor." 
  usage="/blacklist"
/>

## Ferramentas de Staff
<CommandCard 
  name="/clear" 
  description="Limpeza em massa de mensagens." 
  usage="/clear todos quantidade: 50"
/>
<CommandCard 
  name="/relatorio" 
  description="Inicia um relatório formal de punição." 
  usage="/relatorio"
/>
<CommandCard 
  name="/baninfo" 
  description="Consulta detalhes de um banimento específico." 
  usage="/baninfo"
/>
<CommandCard 
  name="/reason_update" 
  description="Altera o motivo de uma punição já aplicada." 
  usage="/reason_update"
/>
<CommandCard 
  name="/scheduled_role" 
  description="Agenda cargos para serem dados ou removidos automaticamente." 
  usage="/scheduled_role"
/>
<CommandCard 
  name="/timed_role" 
  description="Sistema de cargos temporários avançados." 
  usage="/timed_role"
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
  description="Exibe o seu nível atual, XP acumulado e progresso." 
  usage="/xp ver"
/>
<CommandCard 
  name="/xp ver [usuario]" 
  description="Verifica o nível e XP de outro membro do servidor." 
  usage="/xp ver usuario: @Hito"
/>
<CommandCard 
  name="/xp ranking" 
  description="Exibe o ranking global de XP do servidor (Top 10)." 
  usage="/xp ranking"
/>

## Missões (Quests)
<CommandCard 
  name="/quests" 
  description="Veja suas missões diárias e semanais disponíveis." 
  usage="/quests"
/>

<Callout variant="tip">
  As Quests são ideais para ganhar bônus massivos de XP e moedas rapidamente!
</Callout>
`,

  loja: `
# Loja & Carteira

Sistema de economia dinâmica e recompensas.

<Callout variant="tip">
  **Dica:** É muito mais fácil gerenciar, adicionar e editar itens da loja pela nossa Dashboard no menu **Loja**.
</Callout>

## Comandos da Loja
<CommandCard 
  name="/loja ver" 
  description="Abre o menu interativo da loja para explorar itens." 
  usage="/loja ver"
/>
<CommandCard 
  name="/loja comprar" 
  description="Compra um item diretamente usando o ID." 
  usage="/loja comprar item_id: ID_DO_ITEM"
/>
<CommandCard 
  name="/loja historico" 
  description="Verifica suas últimas compras e itens temporários." 
  usage="/loja historico"
/>

## Carteira & Saldo
<CommandCard 
  name="/wallet" 
  description="Ver seu saldo de moedas no servidor e na carteira global." 
  usage="/wallet"
/>
<CommandCard 
  name="/wallet [usuario]" 
  description="Verifica o saldo de outro membro do servidor." 
  usage="/wallet usuario: @Membro"
/>

<Callout variant="warning">
  **Atenção Staff:** Os comandos abaixo exigem a permissão de **Gerenciar Cargos**.
</Callout>

## Gestão da Loja (Staff Only)
<CommandCard 
  name="/loja adicionar" 
  description="Adiciona um novo item ou cargo à loja do servidor." 
  usage="/loja adicionar nome: VIP custo: 5000 cargo: @VIP"
/>
<CommandCard 
  name="/loja remover" 
  description="Remove um item existente da loja usando o ID." 
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

## Comandos de Usuário
<CommandCard 
  name="/verificar" 
  description="Abre o formulário de verificação (Modal) baseado no painel do canal." 
  usage="/verificar"
/>

## Gestão (Staff Only)
<CommandCard 
  name="/revisar" 
  description="Exibe as solicitações pendentes para revisão rápida via Discord." 
  usage="/revisar"
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
  description="Central de Ajuda oficial do Shiro." 
  usage="/help"
/>
<CommandCard 
  name="/vtuber card" 
  description="Gera a imagem do seu Card de Identidade VTuber." 
  usage="/vtuber card"
/>
<CommandCard 
  name="/vtuber card [usuario]" 
  description="Visualiza o Card VTuber de outro membro." 
  usage="/vtuber card usuario: @Hito"
/>
<CommandCard 
  name="/perfil" 
  description="Ver o perfil detalhado de um usuário na Shiro." 
  usage="/perfil [usuario]"
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
  description="Apoie o Shiro votando no Top.gg!" 
  usage="/vote"
/>

## Outros Comandos
*   \`/actions\` — Painel de ações interativo.
*   \`/thanks\` — Créditos dos desenvolvedores.
*   \`/terms\` — Termos de Uso e Privacidade.
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
  description="Remove metadados ocultos de imagens por segurança." 
  usage="/exif imagem: [arquivo]"
/>
<CommandCard 
  name="/resize" 
  description="Redimensiona imagens para tamanhos específicos." 
  usage="/resize largura: 1920 altura: 1080"
/>
<CommandCard 
  name="/convert" 
  description="Converte arquivos entre formatos (PNG, JPG, WEBP)." 
  usage="/convert formato: png"
/>
<CommandCard 
  name="/reduzir" 
  description="Reduz o peso de imagens mantendo a qualidade." 
  usage="/reduzir qualidade: 80"
/>
`,

  'card-vtuber': `
# Card VTuber

Crie e personalize sua identidade visual com o editor web premium da Shiro. O Card VTuber é uma assinatura digital que exibe suas estatísticas, redes sociais e status na comunidade.

<Callout variant="tip">
  **Dica:** O Card VTuber possui um editor visual completo na nossa Dashboard, onde você pode arrastar elementos e ver as mudanças em tempo real.
</Callout>

## Editor Visual (Drag & Drop)
Diferente de comandos de texto complicados, a Shiro oferece uma interface de "arrastar e soltar":
*   **Posicionamento Livre:** Mova seu avatar, nome e badges para qualquer lugar do card.
*   **Alinhamento Magnético:** Utilize as guias automáticas para garantir que tudo esteja perfeitamente centralizado.
*   **Personalização de Cores:** Ajuste a paleta do card para combinar com a sua identidade visual.

## Elementos do Card
*   **Status de Transmissão:** Exiba se você está em live ou gravando.
*   **Créditos de Arte:** Espaço dedicado para dar os devidos créditos aos artistas do seu modelo/ilustração.
*   **Redes Sociais:** Ícones clicáveis e arrobas das suas principais plataformas.

![VTuber Card Editor](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/vtuber_card.png)
`,

  'como-acessar': `
# Navegação e Menu Principal

A [Dashboard da Shiro](https://shirobot.xyz/dashboard) é o seu painel de controle central. Para acessar, basta fazer login com sua conta do Discord.

![Exemplo da Dashboard](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/how_to_acess.png)
![Exemplo da Dashboard](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/how_to_acess_2.png)

## Menu de Seleção de Servidor
Logo ao entrar, você verá a lista de todos os servidores onde possui permissão administrativa. Além dos seus servidores, o topo da página oferece atalhos rápidos para serviços globais:

1. **Card VTuber:** Abre o editor visual para você criar e personalizar sua identidade VTuber (gratuito para todos).
2. **Card Studio:** Área premium (exclusiva para VIPs) com ferramentas avançadas para a criação de banners e cards complexos.
3. **Shiro VIP:** Portal para assinar nossos planos (Espresso, Cappuccino, Macchiato) e liberar recursos extras.
4. **Moderação (Staff):** Atalho visível apenas para moderadores globais da Shiro.
5. **Painel Dev:** Atalho restrito aos desenvolvedores da bot.

## Gerenciando um Servidor
Ao clicar em **"Gerenciar"** no card de um servidor, você entrará no painel específico dele. 
Caso a bot não esteja no servidor, você verá um botão **"Adicionar Bot"**.

*Dica:* Em alguns servidores, você também verá um atalho para o **Shiro Café** (uma página pública de apoio/gorjetas do servidor).

## Estrutura do Painel do Servidor
A barra lateral esquerda divide as configurações em 4 grandes grupos:
*   **Global:** Visão Geral, Analytics e Configurações de Canais.
*   **Moderação:** Verificações, Auto Moderação, Blacklist, Apelações e Logs.
*   **Comunidade:** Sistema de XP, Cargos Agendados, Voz Dinâmica e Alertas de Live.
*   **Economia:** Comissões, Loja de Pontos e Recompensas VIP.
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

![Analytics](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/analitycs.png)

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

![Perfil do Usuário](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/profile.png)

## O que você pode fazer no Perfil?
*   **Identidade Visual:** Exiba suas insígnias (Badges), conquistas e redes sociais em um cartão dinâmico exclusivo. *(Em Breve)*
*   **Carteira Global (Wallet):** Acesse seu saldo global de moedas Shiro, que podem ser enviadas para diferentes servidores.
*   **Mercado de Revenda:** Acompanhe o Mercado Global, onde você pode revender cargos comprados em servidores que habilitam essa função, calculando lucros baseados na raridade do cargo.
*   **Estatísticas de Votação:** Veja quantas vezes você apoiou a Shiro no Top.gg.

<Callout variant="tip">
  Seu perfil é a sua assinatura no ecossistema da Shiro. Membros VIP (Espresso, Cappuccino ou Macchiato) ganham badges exclusivas e destaque em seus perfis!
</Callout>
`,

  'canais-dash': `
# Canais & Cargos

Esta é a central de automação básica do seu servidor na Dashboard.

<Callout variant="tip">
  Configure Auto-Roles, Avisos de Boas-vindas e gerencie permissões de comandos e mídia de forma visual.
</Callout>

## Funcionalidades Principais
1. **Auto-Role:** Defina cargos que os usuários (ou bots) recebem automaticamente ao entrar.
2. **Restrições de Mídia:** Defina quais canais permitem apenas imagens, apenas textos ou links, bloqueando spams visuais.
3. **Comandos Desabilitados:** Desligue comandos específicos da Shiro globalmente no servidor.
4. **Restrições de Comandos por Cargo:** Permita que apenas o cargo "Staff", por exemplo, use o comando \`/clear\`.

![Canais & Cargos](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/channels_roles.png)
`,

  'actions-dash': `
# Painel de Ações

Crie menus interativos avançados para que os membros do seu servidor possam escolher seus próprios cargos de forma autônoma e segura.

<Callout variant="tip">
  Esqueça os velhos sistemas de "reaction roles" com emojis confusos. A Shiro utiliza Botões e Modais modernos (com Checkboxes ou botões de Radio) para oferecer uma experiência visual muito superior.
</Callout>

O Painel de Ações é uma ferramenta poderosa da Dashboard que permite configurar botões interativos que abrem um menu pop-up direto na tela do usuário no Discord.

## Principais Funcionalidades

*   **Modais Interativos:** Configure painéis de múltipla escolha (Checkboxes) para seleção livre, ou de escolha única (Radio) para que o usuário seja forçado a escolher apenas uma opção (ótimo para cores ou times).
*   **Restrições de Acesso:** Você pode limitar a interação definindo "Cargos Obrigatórios". Se ativado, apenas membros com aquele cargo poderão clicar no botão e abrir o painel.
*   **Integração Simples:** Todo o layout e opções dos cargos são configurados e salvos pela aba visual na Dashboard.

![Actions](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/actions.png)

## Vínculos entre Painéis (Links)
Uma das funções mais avançadas do Painel de Ações é a capacidade de vincular um painel a outro, permitindo que a seleção de um cargo afete automaticamente outros grupos.

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

Transforme seu servidor em um ambiente engajado através do módulo de XP.

<Callout variant="tip">
  Gerencie canais ignorados, prêmios por nível e resets de podium pela nossa Dashboard no menu **Sistema de XP**.
</Callout>

## Configurações Principais
*   **Canais Ignorados:** Selecione canais onde o bot não dará XP por mensagens (ideal para chats de comandos ou spam).
*   **Recompensas por Nível:** Escolha quais cargos são dados em níveis específicos (ex: Nível 50 = Cargo Elite).
*   **Reset de Podium:** Configure ciclos (semanais, mensais) para resetar o ranking competitivo, premiando os usuários mais ativos de cada temporada.
*   **XP Multiplier (Eventos):** *Configuração avançada geralmente gerida via eventos globais ou boosts de VIP.*
`,

  automod: `
# Auto Moderação

Mantenha seu servidor protegido 24/7 com o sistema de AutoMod inteligente da Shiro. Esta ferramenta age instantaneamente ao detectar comportamentos nocivos, garantindo que a ordem seja mantida mesmo sem moderadores online.

![AutoMod](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/automod.png)

## Filtros de Conteúdo
Configure regras específicas pa ra manter o chat limpo:
*   **Filtro de Links:** Bloqueie links suspeitos, phishing ou URLs de convite de outros servidores.
*   **Controle de CAPS Lock:** Evite que usuários gritem no chat deletando mensagens com excesso de letras maiúsculas.
*   **Anti-Spam:** Detecte e remova mensagens repetitivas ou enviadas em alta velocidade por um mesmo usuário.
*   **Menções Excessivas:** Bloqueie mensagens que tentam "pingar" muitos membros ou cargos de uma só vez.

## Sistema de Punições (Escalonamento)
Você não precisa apenas deletar a mensagem; pode configurar consequências reais:
1.  **Limite de Infrações:** Defina quantas vezes um usuário pode quebrar uma regra antes da punição (ex: 3 avisos).
2.  **Ação Automática:** Escolha entre aplicar um **Aviso (Warn)** automático ou aplicar um **Silenciamento (Timeout)** de duração personalizada.

## Exceções e Ajustes
Nem todo canal ou cargo precisa seguir as mesmas regras rígidas:
*   **Canais Ignorados:** Adicione canais onde o AutoMod não deve agir (ex: canais de arte ou bot-commands).
*   **Cargos Imunes:** Defina cargos que nunca serão afetados pelos filtros (geralmente staff e membros confiáveis).
`,

  'verificacao-dash': `
# Verificação de Membros

Gerencie candidaturas de artistas, desenvolvedores e outros talentos de forma profissional e centralizada pela Dashboard.

<Callout variant="tip">
  Esta aba é sincronizada em tempo real com o comando \`/setup_verificar\` no Discord. Você pode analisar portfólios, ver redes sociais e aprovar membros sem precisar sair do navegador!
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
3. **Punição Automática:** Se configurado na [Auto Moderação](/docs/automod), o usuário pode receber um aviso (Warn) ou ser silenciado automaticamente após repetidas infrações.
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

## Vantagens
*   **Histórico Preservado:** Todas as apelações ficam salvas para consulta futura, mesmo as rejeitadas.
*   **Segurança:** Somente administradores ou cargos com permissão de moderador podem tomar decisões sobre apelações.
`,

  'warns-dash': `
# Avisos & Relatórios

Mantenha um controle total sobre o comportamento da comunidade e o histórico de ações da sua staff.

## Gestão de Avisos (Warns)
Nesta seção, você pode visualizar todos os avisos ativos que membros do servidor possuem. 
*   **Edição de Motivos:** Errou ao dar um warn? Você pode alterar a descrição da infração diretamente pelo painel.
*   **Remoção (Revogar):** Limpe o histórico de um usuário removendo warns antigos ou injustos.
*   **Histórico por Membro:** Busque por um usuário específico para ver todas as advertências acumuladas ao longo do tempo.

![Warns](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/warns.png)

## Central de Relatórios (Reports)
Quando um membro utiliza o sistema de denúncias da Shiro (clicando com o botão direito em uma mensagem ou via comando), a denúncia cai instantaneamente aqui.

*   **Evidências:** A Shiro anexa automaticamente o conteúdo da mensagem denunciada e o contexto para que a staff possa analisar sem precisar procurar no chat.
*   **Resolução:** Marque denúncias como "Resolvidas" ou "Ignoradas" para manter a fila limpa.

![Relatórios](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/relatorios.png)
`,

  'agendamentos-dash': `
# Cargos Agendados

Automatize a gestão de cargos temporários com precisão cirúrgica. Esta aba permite que você programe quando um cargo deve ser entregue ou retirado de um membro automaticamente.

![Scheduled Roles](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/schedule_role.png)

## Principais Casos de Uso
*   **Punições Leves:** Configure cargos de "Silenciado" ou "Isolado" que expiram sozinhos após algumas horas.
*   **Eventos:** Dê um cargo de "Participante" que será removido automaticamente quando o evento acabar.

## Gestão na Dashboard
*   **Fila de Agendamentos:** Visualize todos os agendamentos ativos, quem é o alvo e quanto tempo falta para a execução.
*   **Cancelamento Rápido:** Se precisar interromper um agendamento, basta um clique para revogar a ação futura.
`,

  'dynamicvoice-dash': `
# Voz Dinâmica (Call de Voz)

Diga adeus àquela lista infinita de canais de voz vazios. Com o sistema de Voz Dinâmica, os canais são criados apenas quando necessários e excluídos assim que ficam vazios.

## Como funciona?
1. **O Gerador:** Você configura um canal de voz como o "Gerador de Calls".
2. **Criação Instantânea:** Assim que um membro entra no canal gerador, a Shiro o move instantaneamente para um novo canal de voz privado criado na hora.
3. **Autonomia do Dono:** Quem criou o canal tem controle total (via comandos ou botões) para trancar a call, mudar o limite de membros ou renomear o canal.
4. **Auto-Limpeza:** Quando o último membro sai da call, o canal é deletado automaticamente, mantendo o servidor limpo.

## Configurações na Dashboard
*   **Nomenclatura Padrão:** Defina como os novos canais devem ser chamados (ex: "Call de {user}").
*   **Permissões:** Escolha quais cargos podem usar o sistema de voz dinâmica.

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

  premium: `
# Shiro VIP & Economia

Evolua sua experiência na Shiro e apoie o desenvolvimento do projeto com nossos planos de assinatura e pacotes de moedas.

A Shiro oferece um ecossistema de benefícios que afeta tanto o seu perfil global quanto os servidores que você gerencia ou frequenta.

![Vip Overview](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/vip_overview.png)

## Tiers de Assinatura (VIP)

Temos três níveis de assinatura inspirados em cafés, cada um com foco em diferentes necessidades:

![VIP Tiers](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/vip_tiers.png)

---

## Tabela de Vantagens

Compare os benefícios de cada plano e escolha o que melhor se encaixa no seu estilo:

![Vantagens XP](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_xp.png)
![Vantagens Limits](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_limits.png)
![Vantagens Benefits](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/advantages_benefits.png)

---

## Pacotes de Moedas (Coins)

Se você não deseja uma assinatura mensal, mas precisa de moedas agora para comprar aquele cargo exclusivo na loja do seu servidor favorito, você pode adquirir **Pacotes de Moedas** avulsos.

![Care Package](https://cdn.shardcloud.app/906a6e21-320c-4230-b796-04c5aa0caa40/doc/care_package.png)

As moedas adquiridas são adicionadas à sua **Carteira Global (Wallet)** e podem ser enviadas para qualquer servidor que utilize o sistema de economia da Shiro.

<Callout variant="info">
  Para assinar ou comprar moedas, acesse a aba **Shiro VIP** no menu principal da Dashboard. Todos os pagamentos são processados de forma segura e os benefícios são ativados instantaneamente!
</Callout>
`,

  discord: `
# Comunidade & Suporte

Precisa de ajuda, quer reportar um bug ou apenas conversar com outros usuários e criadores? Nosso servidor do Discord é o lugar ideal!

<Callout variant="tip">
  **Acesso Rápido:** [Entre no nosso servidor oficial](https://discord.gg/39jZxY68mR)
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

## Atualização Geral 14/05/2026
*   **Nova Dashboard:** Totalmente reescrita, mais rápida e com um design premium focado em UX.
*   **Documentação Oficial:** Lançamento deste portal completo de documentação.
*   **Sistema VIP:** Lançamento dos níveis de assinatura (Espresso, Cappuccino e Macchiato) com recompensas globais.
*   **Mercado de Revenda:** O sistema de Loja agora permite configurar a revenda de itens e cargos de forma muito mais robusta.
*   **Card Studio (VTuber):** Novo editor web drag-and-drop para criação de identidades visuais na Dashboard.
`,
};

export function getDocContent(slug: string): string {
  return DOCS[slug] ?? `# Página não encontrada\nO conteúdo para **${slug}** ainda não está disponível.`;
}
