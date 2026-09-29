# Mi Dermatologia

Landing page de uma clínica **fictícia** de dermatologia que adapta a abordagem coreana à pele brasileira. A página tem uma única conversão: agendar uma avaliação pelo WhatsApp.

Projeto de estudo, feito em HTML, CSS e JavaScript puros: sem frameworks, sem dependências e sem etapa de build.

## Como ver a página

1. Clone o repositório:
   ```
   git clone https://github.com/lucasy07/mi-dermatologia.git
   cd mi-dermatologia
   ```
2. Abra o `index.html` no navegador (dois cliques no arquivo, ou `open index.html` no macOS, `start index.html` no Windows, `xdg-open index.html` no Linux).

As fontes vêm do Google Fonts; sem internet, a página usa fontes de reserva.

### Conferindo as larguras

No navegador, abra as ferramentas de desenvolvedor (F12) e ative o modo de dispositivos (Ctrl+Shift+M, ou Cmd+Shift+M no Mac):

| Largura | Layout |
| --- | --- |
| até 767px | Mobile, com menu de duas linhas |
| 768 a 1279px | Tablet: layout do mobile numa coluna de leitura centralizada |
| a partir de 1280px | Desktop; acima de 1440px o conteúdo fica centralizado |

Os mockups de referência estão em `docs/mockups/` (390px e 1440px).

Para testar sem animações, emule `prefers-reduced-motion: reduce` (F12 → Ctrl+Shift+P → "reduced motion") e recarregue.

## Estrutura

```
index.html        a página
css/tokens.css    variáveis do design system (cores, espaçamento, raios, movimento)
css/main.css      layout e componentes, mobile-first
js/menu.js        menu do mobile
js/motion.js      entrada da hero e revelações no scroll
docs/             brief, copy aprovada, design system e mockups
CLAUDE.md         regras do projeto e decisões tomadas
```

## Princípios

- **Copy:** o texto da página é exatamente o de `docs/brief-e-copy.md`.
- **Design:** cores, tipografia e espaçamentos vêm de `css/tokens.css` e `docs/design-system.md`.
- **Acessibilidade:** contraste mínimo de 4,5:1, foco visível, áreas de toque de 44px, HTML semântico e animações desligadas com movimento reduzido.
- **Publicidade médica (CFM):** sem superlativos, sem promessa de resultado, sem antes e depois; CRM e RQE visíveis na hero, na seção da médica e no rodapé.

As regras completas e as decisões de layout estão no [`CLAUDE.md`](CLAUDE.md).

## Pendências

Conteúdo que depende da médica ou da clínica antes de publicar:

- Validar o terceiro depoimento (fala de resultado), a mensagem pré-preenchida do WhatsApp e o sobretítulo "A médica".
- Número de WhatsApp, endereço e horários (hoje `[NÚMERO]`, `[ENDEREÇO]`, `[HORÁRIOS]`).
- Fotos reais para a hero e para a seção da médica.
