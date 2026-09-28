# Design system — Mi Dermatologia

A ciência coreana da pele, com olhar brasileiro.

Mi (미, "beleza" em coreano) é uma clínica fictícia que adapta a dermatologia coreana à pele brasileira. Este sistema foi extraído dos mockups da direção B (Celadon) da landing page, cuja única conversão é agendar uma avaliação pelo WhatsApp. Toda decisão visual serve a três adjetivos: **natural, delicada, científica**.

## Conteúdo e tom

Cada frase deve refletir os três adjetivos. Na dúvida, descreva a abordagem em vez de prometer resultado.

| Adjetivo | Usar | Evitar |
| --- | --- | --- |
| Natural | preservar, respeitar, seus traços, no seu tempo | transformar, renovar-se por completo, "nova você" |
| Delicada | frases curtas, ritmo calmo, validar receios | imperativos agressivos, exclamações, urgência |
| Científica | diagnóstico, protocolo, fototipo, barreira da pele, sempre explicados | jargão solto, "revolucionário", "tecnologia de ponta" |

Restrições de publicidade médica (CFM), obrigatórias em qualquer peça: sem superlativos, sem promessa de resultado, sem galeria de antes e depois, sem comparação com outros profissionais. CRM e RQE da responsável técnica ficam visíveis na hero, na seção da médica e no rodapé. Depoimentos são permitidos se forem sóbrios e falarem do atendimento, não de resultado.

Exemplos da voz: "Por isso, aqui tudo começa com um diagnóstico." / "Você decide com clareza e no seu tempo." / "Quatro etapas. Nenhuma começa antes da anterior."

## Fundamentos visuais

**Cor.** A página vive em celadon, o verde-jade da cerâmica coreana. `celadon-100` é o fundo principal e `celadon-050` alterna as seções, marcando a transição entre elas sem linhas nem sombras. O texto é `ink` e `ink-muted`. `accent` é reservado ao CTA principal e a destaques curtos. A seção escura (`ink`) aparece uma única vez, no CTA final e no rodapé, fechando a página. Não há gradientes nem sombras.

**Tipografia.** Duas famílias com raiz coreana, ambas do Google Fonts: Gowun Batang (serifa, estilos Display) para títulos, depoimentos e frases de fechamento; Gowun Dodum (sans, estilos Texto) para o corpo. As duas só têm pesos 400 e 700. Títulos usam 400; só os títulos de item (`item`) usam 700.

**Espaço.** Grade de 12 colunas com gap `space-6` no desktop (1440px), margem lateral `page-gutter-desktop` e seções com `section-y-desktop` de padding vertical. No mobile (390px), tudo empilha em uma coluna, com `page-gutter-mobile` e `section-y-mobile`. O ritmo é generoso: espaço vazio faz parte do "delicada".

**Forma.** Dois motivos formam a assinatura da marca:
- **O arco:** moldura de foto com topo em semicírculo (`radius-arch-desktop` ou `radius-arch-mobile`, sempre metade da largura) e base com `radius-md`. Usado na hero e na foto da médica.
- **O glifo 미:** em tamanho muito grande, com contraste mínimo (`celadon-200` sobre celadon-100, `ink-glyph` sobre ink), aparece no topo da hero e no fundo do CTA final. É sempre decorativo (`aria-hidden`) e nunca carrega informação.

Botões têm cantos `radius-sm`. Cards de tecnologia usam `celadon-050` com `radius-md`, sem borda.

**Anti-padrões.** Não usar: fundo creme ou off-white, palavras em itálico nos títulos, rótulos numerados de seção ("01/02/03"), rótulos em monoespaçada ou caixa-alta, botões em pílula, cards com borda lateral colorida, animação com quique ou efeito elástico.

## Fotografia

Luz natural, pele sem retoque, enquadramento calmo. A foto nunca pode sugerir resultado de procedimento. Enquanto não há fotos reais, a moldura em arco mostra um espaço reservado descrito entre colchetes, por exemplo "[Foto: retrato em luz natural, pele sem retoque]".

## Iconografia e logotipo

O sistema quase não usa ícones: a hierarquia vem da tipografia e do espaço. O único ícone é o menu do mobile, com duas linhas horizontais em traço de 1,5px, na cor do texto. Não usar emoji nem ícones decorativos em cards.

Não há arquivo de logotipo. A marca é tipográfica: "Mi" em Gowun Batang 700, um fio vertical em `sage-500` e "Dermatologia" em Gowun Dodum 400 com espaçamento 0.06em, em `ink-muted`.

## Ação

Todo botão "Agendar avaliação" abre uma conversa no WhatsApp com a mensagem "Olá! Gostaria de agendar uma avaliação de pele.". O CTA final traz a linha "O agendamento é feito pelo WhatsApp." para a paciente não ser surpreendida por outro aplicativo abrindo. Não usar botão flutuante nem qualquer elemento de urgência.

## Tokens

Os valores estão em `css/tokens.css`, como variáveis CSS (`var(--nome)`).

### Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `--celadon-100` | `#dce5de` | Fundo principal da página: hero e seções ímpares. É a cor pela qual a marca é reconhecida. |
| `--celadon-050` | `#f2f5f2` | Fundo das seções alternadas e dos cards sobre celadon-100. Nunca usar como fundo da página inteira. |
| `--celadon-200` | `#ccd9cf` | Somente o glifo 미 decorativo sobre celadon-100. Contraste propositalmente baixo: nunca usar para texto. |
| `--celadon-300` | `#c3d2c8` | Preenchimento das molduras de foto em arco (ArchFrame) enquanto não há imagem. |
| `--line-strong` | `#a9bdb0` | Borda da moldura em arco e fio superior dos blocos de princípios. |
| `--line` | `#b9c9be` | Divisores entre linhas de listas (método, perguntas frequentes) e acima do CRM na seção da médica. |
| `--sage-500` | `#7e948a` | Fio vertical entre 'Mi' e 'Dermatologia' no logotipo. Decorativo: 2,5:1 sobre celadon-100, abaixo do 3:1 exigido para bordas de controle, então não usar em bordas de botões ou campos. |
| `--ink` | `#1b2a24` | Texto principal sobre celadon-100 e celadon-050; fundo do botão do menu e da seção escura (CTA final e rodapé). |
| `--ink-muted` | `#3f5249` | Texto secundário (parágrafos, legendas, CRM) sobre celadon-100 (6,5:1) e celadon-050. |
| `--accent` | `#3e6b5a` | Fundo do CTA principal e texto de destaque curto (sobretítulo, frases de fechamento). Como texto: 4,7:1 sobre celadon-100, 5,5:1 sobre celadon-050. |
| `--on-accent` | `#ffffff` | Texto sobre accent (6:1). |
| `--ink-inverse` | `#eef3ef` | Títulos sobre ink e fundo do botão na seção escura. |
| `--ink-inverse-muted` | `#c4d2c9` | Texto secundário sobre ink (9,4:1). |
| `--ink-glyph` | `#22342c` | Somente o glifo 미 decorativo sobre ink. Nunca usar para texto. |
| `--ink-line` | `#33473e` | Divisor entre o CTA final e o rodapé, sobre ink. |

### Tipografia

Famílias: `--font-display` (Gowun Batang) e `--font-sans` (Gowun Dodum). Carregar pelo Google Fonts: Gowun Batang 400 e 700, Gowun Dodum 400.

| Estilo | Família | Tamanho | Altura de linha | Peso | Uso |
| --- | --- | --- | --- | --- | --- |
| `hero` | `--font-display` | 66px | 1.15 | 400 | Título da hero no desktop. Único h1 da página., espaçamento -0.01em |
| `hero-mobile` | `--font-display` | 38px | 1.2 | 400 | Título da hero no mobile. |
| `cta-final` | `--font-display` | 56px | 1.2 | 400 | Título do CTA final, sobre ink. |
| `section` | `--font-display` | 46px | 1.2 | 400 | Títulos de seção (h2) no desktop. |
| `section-mobile` | `--font-display` | 32px | 1.25 | 400 | Títulos de seção (h2) no mobile. |
| `item` | `--font-display` | 24px | 1.35 | 700 | Títulos de item (h3): etapas, princípios, tecnologias. 22px no mobile. |
| `quote` | `--font-display` | 22px | 1.6 | 400 | Depoimentos e frases de fechamento de seção. 19px no mobile. |
| `lead` | `--font-sans` | 20px | 1.7 | 400 | Subtítulo da hero e textos de abertura. 17px no mobile. |
| `body` | `--font-sans` | 17px | 1.7 | 400 | Texto corrido no desktop. |
| `body-mobile` | `--font-sans` | 16px | 1.7 | 400 | Texto corrido no mobile. |
| `eyebrow` | `--font-sans` | 15px | 1.4 | 400 | Sobretítulo curto acima de títulos, sempre em accent. Sem caixa-alta e sem monoespaçada., espaçamento 0.08em |
| `caption` | `--font-sans` | 13px | 1.6 | 400 | CRM/RQE, avisos curtos e legendas. |

### Espaçamento

| Token | Valor | Uso |
| --- | --- | --- |
| `--space-2` | `8px` | Menor ajuste entre elementos agrupados. |
| `--space-3` | `12px` | Título de item e seu texto, no mobile. |
| `--space-4` | `16px` | Título de item e seu texto, no desktop; grade de cards no mobile. |
| `--space-5` | `20px` | Título de seção e sua linha de apoio. |
| `--space-6` | `24px` | Padding vertical das linhas de lista; gap de colunas da grade de 12. |
| `--space-8` | `32px` | Gap entre blocos de texto da hero; entre título e coluna de texto nas linhas do método. |
| `--space-12` | `48px` | Gap entre colunas de princípios e depoimentos. |
| `--space-14` | `56px` | Entre o título de uma seção e seu conteúdo, no desktop. |
| `--page-gutter-desktop` | `88px` | Margem lateral da página no desktop (1440px). |
| `--page-gutter-mobile` | `24px` | Margem lateral da página no mobile (390px). |
| `--section-y-desktop` | `112px` | Padding vertical das seções no desktop. |
| `--section-y-mobile` | `72px` | Padding vertical das seções no mobile. |

### Raios

| Token | Valor | Uso |
| --- | --- | --- |
| `--radius-sm` | `6px` | Botões. Nunca usar formato de pílula. |
| `--radius-md` | `8px` | Cards de tecnologia e cantos inferiores da moldura em arco. |
| `--radius-arch-desktop` | `240px` | Cantos superiores da moldura em arco da hero no desktop (metade de 480px de largura). |
| `--radius-arch-mobile` | `171px` | Cantos superiores da moldura em arco no mobile (metade de 342px de largura). |

### Durações

| Token | Valor | Uso |
| --- | --- | --- |
| `--duration-rise` | `1000ms` | Entrada dos textos e do CTA (fade com subida de 10px). |
| `--duration-arch` | `1600ms` | Revelação da moldura em arco, de baixo para cima. |
| `--duration-glyph` | `2400ms` | Surgimento do glifo 미 ao fundo. |

### Curvas de easing

| Token | Valor | Uso |
| --- | --- | --- |
| `--ease-out-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entradas: textos, CTA e glifo. Desacelera longamente, sem ultrapassar o destino. |
| `--ease-in-out-reveal` | `cubic-bezier(0.65, 0, 0.35, 1)` | Revelações por máscara, como a do arco. |

## Movimento

O movimento segue o "delicada": lento, suave e raro. Cada animação precisa de um propósito (guiar o olhar, dar continuidade) e roda uma única vez.

### Princípios

- Uma entrada de destaque por página: a da hero. Todo o resto são revelações discretas no scroll.
- Animar só `transform`, `opacity` e `clip-path`, para manter a fluidez.
- Nada de quique, efeito elástico ou movimento que ultrapasse o destino.
- O CTA nunca chama atenção por movimento: nada de pulsar, tremer ou brilhar.
- Com `prefers-reduced-motion: reduce`, a página aparece direto no estado final, sem animação.

### Entrada da hero

Sequência do protótipo, em milissegundos a partir do carregamento:

| Início | Elemento | Animação | Duração | Curva |
| --- | --- | --- | --- | --- |
| 0 | Glifo 미 | fade + escala de 1.04 para 1 | `duration-glyph` | `ease-out-soft` |
| 200 | Moldura em arco | revelação de baixo para cima (`clip-path: inset`) | `duration-arch` | `ease-in-out-reveal` |
| 400 | Sobretítulo | fade + subida de 10px | `duration-rise` | `ease-out-soft` |
| 560 | Título | fade + subida de 10px | `duration-rise` | `ease-out-soft` |
| 780 | Subtítulo | fade + subida de 10px | `duration-rise` | `ease-out-soft` |
| 960 | CTA e CRM | fade + subida de 10px | `duration-rise` | `ease-out-soft` |

### Revelações no scroll (a implementar)

Previstas, mas ainda não prototipadas: as linhas do método e das perguntas frequentes aparecem uma a uma ao entrar na tela, com o mesmo fade + subida da hero; a foto da médica usa a mesma revelação do arco. O parallax sutil do glifo 미 na hero é opcional.

## Componentes

### Button

O botão de ação da Mi, usado quase só para "Agendar avaliação", que abre o WhatsApp.

Três variantes, uma por contexto:
- **Principal:** fundo `accent`, texto `on-accent`, 56px de altura (52px no mobile, na largura toda). Na hero.
- **Menu:** fundo `ink`, texto `ink-inverse`, 44px de altura. No cabeçalho do desktop.
- **Inverso:** fundo `ink-inverse`, texto `ink`, 56px de altura. No CTA final, sobre ink.

Todas usam `radius-sm`, texto em Gowun Dodum 17px (15px no menu) e padding horizontal entre 22 e 36px. Nunca em formato de pílula, nunca com ícone de WhatsApp e nunca com animação de destaque.

O consumidor fornece o link do WhatsApp (`https://wa.me/<número>?text=<mensagem>`), aberto em nova aba. O rótulo é sempre "Agendar avaliação". Uma página tem no máximo três botões: menu, hero e CTA final.

### ArchFrame

A moldura de foto em arco, assinatura visual da Mi, usada na hero e na foto da médica.

O topo é um semicírculo perfeito: o raio dos cantos superiores é sempre metade da largura (`radius-arch-desktop` para 480px, `radius-arch-mobile` para 342px). Os cantos inferiores usam `radius-md`. Proporção de cerca de 3:4 (480 × 640 na hero desktop, 440 × 580 na seção da médica, 342 × 420 no mobile).

Sem imagem, a moldura usa fundo `celadon-300`, borda de 1px em `line-strong` e uma descrição da foto entre colchetes, centralizada, em Gowun Dodum 15px `ink-muted`. Com imagem, a foto preenche a moldura (`object-fit: cover`) e a borda sai.

O consumidor fornece a foto e o texto alternativo. A foto segue as regras de Fotografia: luz natural, pele sem retoque e nada que sugira resultado de procedimento.

Na hero, a moldura entra com a revelação de baixo para cima descrita em Movimento.

### StepList

Lista de itens separados por fios finos, usada no método Mi e nas perguntas frequentes.

Cada linha tem um título em Gowun Batang 700 (estilo `item`, 24px no método e 22px nas perguntas) e um texto em `body` `ink-muted`. Um fio de 1px em `line` fica acima de cada linha, e mais um fecha a última. O padding vertical é `space-6`.

No desktop do método, título e texto ficam lado a lado (coluna de 240px para o título, gap `space-8`). Nas perguntas frequentes e no mobile, o texto fica abaixo do título. A lista ocupa as colunas 6 a 12 da grade, com o título da seção nas colunas 1 a 4.

A ordem importa e é dada pela sequência vertical: não usar números nem rótulos "01/02". O consumidor fornece os pares de título e texto; nas perguntas, o título é a pergunta.

### Quote

Depoimento de paciente, com a frase em Gowun Batang e a identificação discreta abaixo.

A frase usa o estilo `quote` (22px no desktop, 19px no mobile) em `ink`, entre aspas curvas. A identificação traz primeiro nome e idade ("Carolina, 36") em Gowun Dodum 15px `ink-muted`, com `space-5` de distância. Marcação: `figure` com `blockquote` e `figcaption`. No desktop, três depoimentos em colunas com gap `space-12`; no mobile, empilhados.

Regra de conteúdo (CFM): o depoimento fala do atendimento ou da experiência, nunca de resultado, e não usa adjetivos de superioridade. O consumidor fornece a frase aprovada pela médica responsável, o primeiro nome e a idade. Sem foto da paciente.
