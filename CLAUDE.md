# Mi Dermatologia — landing page

Landing page de uma clínica fictícia de dermatologia com abordagem coreana. A página tem uma única conversão: agendar avaliação pelo WhatsApp.

## Quem trabalha aqui

O dono do projeto está aprendendo a usar o Claude Code e não tem experiência com front-end (tem base sólida em computação). Por isso:
- Trabalhe em passos pequenos: uma seção ou uma mudança por vez.
- Ao terminar cada passo, explique em poucas linhas o que fez e por quê, sem jargão desnecessário.
- Antes de qualquer decisão de design que não esteja documentada em `docs/`, proponha e peça confirmação.
- Se algo nas fontes da verdade estiver ambíguo ou contraditório, pergunte em vez de supor.

## Stack

HTML, CSS e JavaScript puros. Sem frameworks, sem etapa de build, sem dependências npm. O site deve funcionar abrindo `index.html` direto no navegador.

```
index.html        a página
css/tokens.css    variáveis do design system (não editar sem pedir)
css/main.css      layout e componentes (no topo: tamanhos do design system que não estão em tokens.css)
js/menu.js        menu do mobile (abre/fecha a navegação do cabeçalho)
js/motion.js      animações (entrada da hero e revelações no scroll)
img/              fotos (ainda não existem)
docs/             fontes da verdade (não são código do site)
```

## Fontes da verdade

- `docs/brief-e-copy.md`: brief, guia de tom e a copy aprovada. **Use o texto exatamente como está.** Não reescreva, não resuma e não acrescente frases sem pedir.
- `docs/design-system.md`: cores, tipografia, espaçamento, forma, movimento e componentes.
- `css/tokens.css`: os valores do design system como variáveis CSS.
- `docs/mockups/pagina-desktop.html` (1440px) e `docs/mockups/pagina-mobile.html` (390px): referência visual da página completa. São protótipos com estilos inline: reproduza o visual, mas **não copie o código**.

## Regras de código

- Use sempre as variáveis de `css/tokens.css`. Nenhum valor de cor, espaçamento ou raio solto no CSS.
- HTML semântico: `header`, `main`, `section` com `id`, um único `h1`, hierarquia de títulos correta, `figure`/`blockquote` nos depoimentos.
- CSS mobile-first, com classes legíveis e comentários curtos por seção. Nada de estilos inline.
- Os mockups cobrem só 390px e 1440px. Larguras intermediárias (tablet) não foram desenhadas: proponha o comportamento e peça confirmação.
- Acessibilidade: contraste mínimo de 4.5:1 no texto, foco visível em todo elemento interativo, `alt` nas imagens, glifo 미 decorativo com `aria-hidden="true"`, área de toque de pelo menos 44px.
- Animações: só `transform`, `opacity` e `clip-path`; tudo desativado com `prefers-reduced-motion: reduce`.
- Fontes pelo Google Fonts: Gowun Batang (400, 700) e Gowun Dodum (400).

## Anti-padrões visuais (nunca usar)

Fundo creme ou off-white, palavras em itálico nos títulos, rótulos numerados de seção ("01/02/03"), rótulos em monoespaçada ou caixa-alta, botões em pílula, cards com borda lateral colorida, gradientes, sombras, emoji, ícones decorativos, animação com quique ou efeito elástico, botão de WhatsApp flutuante, qualquer elemento de urgência.

## Restrições de conteúdo (publicidade médica, CFM)

Sem superlativos, sem promessa de resultado, sem antes e depois, sem comparação com outros profissionais. CRM e RQE visíveis na hero, na seção da médica e no rodapé.

## Decisões já tomadas

- Todo botão "Agendar avaliação" abre o WhatsApp em nova aba: `https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20pele.` O número é placeholder.
- Sob o CTA final vai a linha "O agendamento é feito pelo WhatsApp."
- As fotos ainda não existem: use a moldura em arco com a descrição entre colchetes, como nos mockups.
- Endereço, número e horários do rodapé ficam como `[ENDEREÇO]`, `[NÚMERO]`, `[HORÁRIOS]`.
- Pendente de validação com a médica: o terceiro depoimento (fala de resultado) e a mensagem pré-preenchida do WhatsApp.
- Tamanhos de fonte e de componentes que não estão em `tokens.css` ficam como variáveis no topo de `css/main.css`. O `tokens.css` segue intocado.
- Quando mockup e design system divergem em tamanhos (ex.: títulos de item 26px no mockup, 24px no design system), vale o design system.
- Larguras: mobile até 767px; tablet de 768 a 1279px (layout do mobile numa coluna de 640px centralizada, botões na largura natural, arcos centralizados); desktop a partir de 1280px. Acima de 1440px o conteúdo fica numa coluna de 1440px centralizada e o fundo ocupa a tela toda. Toda faixa usa `--page-inline` como padding lateral.
- Cabeçalho rola junto com a página (não é fixo).
- Menu do mobile: painel abaixo do cabeçalho que empurra o conteúdo, com os 4 links e o botão "Agendar avaliação"; fecha ao tocar num link, com Esc ou no próprio botão. O ícone continua o de duas linhas. Sem JavaScript, a navegação fica sempre visível.
- Perguntas frequentes ficam sempre abertas (sem acordeão).
- Revelações no scroll: linhas do método e das perguntas (fade + subida, 160ms entre itens que entram juntos) e foto da médica (revelação do arco). Sem parallax do glifo. Animações só na tela (não na impressão).
- Os botões "Agendar avaliação" têm o aviso "(abre o WhatsApp em nova aba)" só para leitores de tela.
- Pendente de validação: o sobretítulo "A médica" vem do mockup e não está na copy do brief.

## Como verificar

Abra `index.html` no navegador e compare com os mockups em 390px e 1440px (a ferramenta de dispositivos do navegador simula as larguras). Ao fim de cada passo, liste o que o dono deve conferir visualmente.

## Git

Um commit por passo concluído e aprovado, com mensagem curta em português descrevendo a mudança.
