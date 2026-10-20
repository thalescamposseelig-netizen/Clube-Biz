# Clube Biz MINDSET — direção de produto e UX

## 1. Diagnóstico estratégico

**Informação das fontes:** o Clube é descrito como gratuito, aberto a solicitações de qualquer pessoa e sujeito a aprovação manual. O público prioritário inclui médicos, diretores, executivos, empresários, lideranças e profissionais próximos à comunidade Biz. A Biz é apresentada nos materiais como ecossistema de aceleração com sete motores e atuação em saúde, varejo, indústria, serviços e entidades.

**Informação do site oficial consultado em 20/10/2026:** a página apresenta estratégia, mercado e execução, sete etapas/motores e cases institucionais. Esses cases comprovam contexto e experiência da Biz, não resultados ou benefícios do Clube.

**Análise:** uma lista de marcas isoladas teria pouca explicação e poderia parecer agregador de cupons. A experiência deve mostrar primeiro o valor mais amplo — benefício, experiência, conhecimento e oportunidade —, depois exemplificar a seleção e explicar claramente a aprovação manual.

**Métrica principal recomendada:** cadastros válidos concluídos / visitantes únicos da LP. Métricas auxiliares: clique no CTA, início do cadastro, taxa de erro, abandono por campo, decisões de aprovação e ativação do acesso. Mensurar apenas com configuração de privacidade adequada.

## 2. Posicionamento

**Direção:** Clube Biz MINDSET — “Benefícios exclusivos para quem busca mais.”

**Apoio:** “Um clube gratuito que conecta benefícios, experiências, conhecimento e oportunidades para quem está em movimento.”

**Promessa operacional:** cadastro gratuito, sujeito à validação; aprovação não é automática nem garantida. A exclusividade vem do acesso e da experiência, não de cobrança.

## 3. Arquitetura da informação

1. Início / proposta de valor
2. O que é o Clube / quatro pilares
3. Benefícios resumidos
4. Como funciona / etapas
5. FAQ
6. Cadastro e consentimento
7. Privacidade e suporte

Produto futuro, sujeito à seleção de tecnologia: `/cadastro`, `/login`, `/beneficios`, `/beneficios/:slug`, `/mentoria`, `/admin`. Sugestão de domínio: `clube.bizmindset.com.br`.

## 4. User flow

**Visitante:** LP → conhece proposta e benefícios resumidos → consulta FAQ → CTA → cadastro validado → confirmação de recebimento → análise manual → (aprovado) convite com link temporário seguro → define senha → login → lista restrita → página do benefício → instruções e condições atuais.

**Administração:** Thiago autentica com MFA → fila pendente → revisa dados mínimos → aprova/reprova com registro de data e responsável → aprovação cria convite de senha com expiração → usuário define senha → status e trilha são atualizados. Bloqueio invalida sessões e impede novo acesso. A autoridade de Thiago precisa ser confirmada na entrada em produção.

## 5. Wireframe e copy pública

O protótipo em `index.html` materializa o seguinte wireframe:

- Header enxuto: marca, âncoras de navegação e CTA.
- Hero editorial: H1 “Benefícios exclusivos para quem busca mais.”, apoio, CTA “Quero fazer parte”, CTA secundário “Conhecer benefícios”, nota de gratuidade e validação.
- Introdução: “Um lugar para se conectar ao que vem pela frente.” e pilares.
- Benefícios em linhas editoriais (não grade de cupons): marca, categoria, valor resumido e ressalva sobre condição.
- Passos 01–04 com validação explícita.
- CTA intermediário depois da explicação do fluxo, antes do FAQ.
- Faixa de valor de comunidade.
- FAQ com dúvidas de custo, elegibilidade, aprovação, cadastro, uso dos benefícios, acesso, senha, mudança de ofertas e dados.
- Formulário com labels e erros; confirmação visual deixa claro que o protótipo não envia dados.
- Rodapé e aviso de que a política do Clube precisa ser criada.

Não há prova social específica do Clube. Não usar os cases da Biz como se fossem depoimentos de membros ou resultados de benefícios.

## 6. Copy de cadastro

Título: “Faça parte do Clube Biz MINDSET.”

Texto: “Solicite seu acesso gratuito e descubra novas formas de se conectar a benefícios, experiências e oportunidades.”

CTA: “Solicitar acesso”. Consentimento: “Concordo com o tratamento dos meus dados para fins de cadastro, contato e gestão do Clube de Benefícios Biz MINDSET.” O texto final e sua base legal exigem revisão jurídica e política publicada.

O brief lista nome, empresa, cargo, e-mail, telefone, cidade e estado, mas pede que a obrigatoriedade seja avaliada. No protótipo, somente nome, e-mail e consentimento são obrigatórios; empresa, cargo, telefone, cidade e estado são opcionais para reduzir fricção e coleta de dados. Confirmar com a operação se algum campo opcional é necessário para a validação.

## 7. Direção visual e Design System

- Direção editorial: executiva, espaçosa, alto contraste e com o preto predominante nos fundos. Camadas em preto e grafite organizam a leitura; amarelo destaca ações e palavras-chave; branco é reservado aos logos e ao formulário. Linhas e nós discretos representam conexões; não há fotografia genérica. Usa logos fornecidos e uma composição geométrica feita em CSS.
- Tipografia: Pogonia Bold/Semibold fornecida para títulos; Arial como fallback de corpo. Inter foi indicada no Design System, mas nenhum arquivo Inter local foi encontrado; incluir Inter otimizada/licenciada antes de produção ou escolher uma alternativa aprovada.
- Divergência de paleta nas fontes: o brief do Clube nomeia `#F7C022`, `#FFFFFF`, `#231F20`; o Design System geral usa `#F7C022`, `#FFFFFF`, `#111111`; a folha de cor antiga traz `#F6C123` e `#231F20`. O pedido mais recente define predominância do preto. O protótipo usa `#111111` como fundo principal, grafite para criar camadas, `#F7C022` como destaque e branco para conteúdo em contraste. Confirmar o código hexadecimal institucional final com a Biz antes da publicação.
- Escala: display fluida 44–76 px; H2 fluido 36–58 px; corpo 16 px; apoio 10–14 px. Espaçamento em múltiplos de 8; containers até 1320 px.
- Botões: primário amarelo/preto, secundário em texto sublinhado; foco visível, hover com movimento mínimo, disabled/loading reservado à integração.
- Estados: menu móvel aberto/fechado; campos default, erro e foco; formulário válido demonstra aviso sem transmitir submissão; FAQ fechado/aberto. Estados de backend (loading, enviado, duplicado, erro de rede) devem ser construídos na integração.

## 8. Componentes

Header e navegação, CTA, hero, marcador de seção, pilar, linha de benefício, passo numerado, FAQ nativo com `details`, campo com label/erro, consentimento, feedback de formulário e rodapé. O layout usa CSS responsivo próprio, sem dependências JavaScript.

## 9. Responsividade e acessibilidade

- Desktop: hero em duas colunas e conteúdo editorial; tablets reorganizam proporções; mobile empilha hero e formulário, menu vira disclosure e formulário fica em coluna única. As seções mantêm base preta/grafite em todas as larguras.
- HTML semântico, link para pular ao conteúdo, navegação por teclado, outline visível, labels persistentes, erros associados visualmente, `aria-live` no feedback, FAQ via disclosure nativo, preferência `prefers-reduced-motion`, alvos de toque ampliados.
- Revisar contraste WCAG AA em todas as combinações, foco em menu/FAQ, leitores de tela e zoom antes do lançamento. O amarelo deve ficar em superfícies com texto preto.

## 10. CRO e analytics

CTA primário é consistente e repetido após entendimento do produto. FAQ responde objeções antes do formulário. “Gratuito” e “sujeito à validação” são visíveis perto do CTA. Não usar escassez, urgência falsa, pré-seleção de consentimento ou aprovação implícita.

Eventos recomendados: `club_lp_view`, `club_cta_click` (com posição), `club_form_start`, `club_form_error` (sem valores pessoais), `club_form_submit_success`, `club_login`, `benefit_view`, `benefit_click`. Não enviar PII para analytics.

## 11. Fluxos de produto e banco de dados

**Entidades mínimas:** `users` (id, nome, empresa, cargo, email normalizado, telefone, cidade, UF, status, created_at, approved_at, approved_by, last_login_at); `status_history` (user_id, status anterior/novo, ator, timestamp, motivo operacional); `benefits` (id, slug, parceiro, categoria, resumo público, descrição privada, condições, logo, links, validade, status); `admins` (id, user_id, papel, MFA); `password_invites` (user_id, hash do token, expiração, consumido_em). Senhas só via provedor de autenticação com hash apropriado; idealmente não manter tabela própria de hashes.

**Status:** Pendente, Aprovado, Reprovado, Bloqueado. Guardar timestamps e responsável para decisões. Uma tabela separada de histórico mínimo permite auditoria. Coletar o mínimo e limitar acesso administrativo.

**Aprovação/login:** aprovação cria link único, de uso único e expiração curta para criação de senha; e-mail não contém senha permanente. Login, logout, recuperação, troca de senha, sessão segura e autorização server-side são requisitos de produto, não implementados no protótipo estático.

## 12. Painel administrativo

Fila de pendentes com nome, empresa, cargo, e-mail, data e status; visão individual; ações Aprovar/Reprovar/Bloquear com confirmação e trilha; busca e filtro por status/data; estados vazio/erro. Uma tela separada de benefícios permite ativar, atualizar, suspender e registrar validade. Apenas papéis autorizados acessam. Primeiro administrador proposto: Thiago Baisch, sujeito à confirmação.

## 13. Requisitos técnicos e segurança

O workspace não especifica hospedagem/runtime nem serviço de banco, autenticação ou e-mail; portanto não foi escolhido stack e o cadastro permanece demonstrativo. Antes da seleção: confirmar hospedagem, suporte a backend, backups, domínio/subdomínio, manutenção, custo, capacidade de autenticação, banco relacional, e-mail transacional, MFA e logs.

MVP de produção precisa de persistência server-side, validação no servidor, proteção contra abuso, rate limiting, CSRF conforme arquitetura, controle de acesso por papel, segredos fora do repositório, TLS, backup testado, minimização de PII, retenção definida e fluxo de exclusão/retificação. E-mail de aviso para `thiago@bizmindset.com.br` foi indicado no brief, mas precisa de confirmação operacional e configuração segura. Notificação deve evitar dados pessoais além do necessário.

## 14. SEO e performance

Title, meta description, Open Graph, H1 único e lang `pt-BR` estão configurados. Benefícios individuais podem ter `noindex` até que o negócio defina se são públicos. Evitar schema de ofertas sem valores e condições confirmados. Logos locais, sem scripts de terceiros; fontes Pogonia fornecidas. O diretório contém TTF/OTF, não WOFF2; a fonte carregada é TTF e Inter ainda não está local, pontos a otimizar/decidir na produção.

## 15. FAQ: lacunas a resolver

O protótipo responde com base no brief somente onde há informação. Permanecem pendentes: regra de compartilhamento individual, canal e prazo de retorno, critérios concretos de elegibilidade/aprovação, procedimento para exclusão/retificação, validade por benefício, disponibilidade por parceiro e termos da mentoria. Não afirmar prazos ou garantias até confirmação.

## 16. Política e regulamentação — sugestão de estrutura para validação jurídica

**Não é regulamento oficial.** A Biz ainda não forneceu política de privacidade nem regulamento do Clube. Criar/revisar antes da publicação, cobrindo: elegibilidade; cadastro e aprovação; conta e segurança; uso individual; parceiros e responsabilidades; condições, validade e mudanças de benefícios; suspensão e encerramento; privacidade, finalidade, retenção e direitos; segurança; marcas e propriedade intelectual; canais de suporte. Definir controlador, contato de privacidade, prazos e bases legais com assessoria responsável.

## 17. Pendências críticas pré-lançamento

1. Confirmar o código hexadecimal oficial do preto e autorização de uso dos logos/marcas.
2. Aprovar a descrição pública de cada benefício e receber matriz atualizada (condições, elegibilidade, validade, disponibilidade, resgate, links/contatos).
3. Confirmar Thiago como único aprovador atual e endereço de notificação.
4. Confirmar com a operação se algum campo opcional do cadastro é necessário para validar solicitações.
5. Criar Política de Privacidade e Regulamento; revisar consentimento e textos legais.
6. Escolher backend, banco, auth, e-mail, hospedagem, retenção e processo de suporte.
7. Definir confirmação de cadastro, prazo/canal de retorno e motivo de reprovação.
8. Realizar revisão de acessibilidade, segurança, contraste e conteúdo legal antes da publicação.

## 18. Entregáveis neste workspace

- `index.html`, `styles.css`, `script.js`: protótipo responsivo interativo da Landing Page e formulário demonstrativo.
- `PROJETO-CLUBE-BIZ.md`: estratégia, arquitetura, fluxos, UX/UI, requisitos, lacunas e recomendações.
- `assets/brand`, `assets/partners`, `assets/fonts`: cópias dos logos e das fontes usados pelo protótipo, para manter a entrega autocontida.

O formulário não salva nem envia dados; a aprovação, autenticação, área restrita e painel administrativo estão especificados para a próxima fase e não devem ser interpretados como implementados.
