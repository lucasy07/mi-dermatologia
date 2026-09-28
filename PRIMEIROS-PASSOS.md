# Primeiros passos com o Claude Code

Roteiro para aprender o Claude Code construindo a landing page da Mi. Cada etapa pratica um conceito da ferramenta. Os prompts são sugestões: adapte à vontade, mas mantenha o hábito de pedir uma coisa por vez.

## 0. Preparar o ambiente

1. Instale o Claude Code (confira o comando atual em https://code.claude.com/docs/en/quickstart):
   - macOS ou Linux: `curl -fsSL https://claude.ai/install.sh | bash`
   - Windows (PowerShell): `irm https://claude.ai/install.ps1 | iex`
2. Descompacte este kit, entre na pasta e salve o ponto de partida no git:
   ```
   cd mi-dermatologia
   git init
   git add .
   git commit -m "Kit inicial do projeto"
   ```
3. Inicie com `claude` e faça login quando ele pedir.

## 1. Conferir se o contexto chegou

**Conceito:** o `CLAUDE.md` é lido automaticamente e funciona como memória do projeto. Os arquivos em `docs/` ele lê quando precisa.

> Leia o CLAUDE.md e os arquivos em docs/. Depois me explique, em poucas linhas, o que é o projeto, quais são as regras mais importantes e como você pretende organizar o código. Não escreva código ainda.

Se a explicação vier errada ou incompleta, o problema está no contexto, não no código. Corrija o `CLAUDE.md` antes de seguir.

## 2. Planejar antes de construir

**Conceito:** revisar um plano é muito mais barato que revisar código pronto.

> Proponha um plano para construir a estrutura estática da página (sem animações), dividido em passos pequenos. Para cada passo, diga quais arquivos vai criar ou alterar. Não escreva código ainda.

Discuta o plano: peça para juntar, separar ou reordenar passos até fazer sentido para você.

## 3. Primeiro passo: cabeçalho e hero

**Conceito:** permissões e revisão. O Claude Code pede autorização antes de criar ou alterar arquivos e rodar comandos. Leia o que ele quer fazer antes de aprovar.

> Execute o primeiro passo do plano: crie index.html e css/main.css com o cabeçalho e a hero, seguindo os mockups. Ao terminar, me diga o que conferir no navegador.

Abra `index.html` no navegador, compare com `docs/mockups/pagina-desktop.html` e peça ajustes específicos ("o título está maior que no mockup"). Quando estiver bom:

> Faça o commit deste passo.

## 4. As outras seções, uma por vez

**Conceito:** ritmo de trabalho. Um passo, revisão, commit. Se um passo der errado, o git permite voltar ao último commit bom.

Ordem: tensão, filosofia, método, tecnologias, médica, depoimentos, perguntas frequentes, CTA final e rodapé.

> Siga para a próxima seção do plano.

Depois de algumas seções, confira o mobile: na ferramenta de dispositivos do navegador, simule 390px e compare com `docs/mockups/pagina-mobile.html`.

## 5. Uma decisão que os mockups não cobrem

**Conceito:** usar o Claude Code para pensar, não só para executar.

> Os mockups não cobrem larguras de tablet. Me mostre duas ou três opções de como a página deve se comportar entre 390px e 1440px, com os prós e contras de cada uma. Eu escolho antes de você implementar.

## 6. Movimento

> Implemente a entrada da hero em js/motion.js seguindo a seção Movimento do design system, incluindo o suporte a prefers-reduced-motion. Explique como testar o modo de movimento reduzido.

Depois, num passo separado, as revelações no scroll.

## 7. Dar olhos ao Claude Code

**Conceito:** MCP. Servidores MCP dão ferramentas novas ao Claude Code. Com o Playwright MCP, ele abre a página num navegador, tira screenshots e compara com os mockups sozinho.

1. Adicione o servidor com `claude mcp add`, usando o comando indicado no README do projeto microsoft/playwright-mcp no GitHub. Guia geral: https://code.claude.com/docs/en/mcp-quickstart
2. Dentro do Claude Code, `/mcp` mostra os servidores conectados.

> Abra o index.html e os dois mockups nas larguras de 390px e 1440px, compare os screenshots e liste as diferenças visuais, da mais importante para a menos importante.

## 8. Revisão final

> Revise o site inteiro contra o CLAUDE.md: regras de código, acessibilidade, anti-padrões e restrições do CFM. Liste os problemas encontrados antes de corrigir qualquer coisa.

## Hábitos que valem para qualquer projeto

- **Seja específico ao corrigir.** Aponte o elemento, o arquivo e o que está diferente do esperado.
- **Pergunte o porquê.** "Por que você usou grid aqui e não flexbox?" é a forma mais rápida de aprender com o que ele faz.
- **Interrompa cedo.** Se ele tomar um rumo errado, `Esc` interrompe. Corrija a direção em vez de esperar terminar.
- **Faça commit antes de mudanças arriscadas.** Assim experimentar não custa nada.
- **Limpe a conversa entre etapas grandes.** `/clear` começa uma conversa nova; o `CLAUDE.md` continua valendo.
- **Atualize o CLAUDE.md.** Toda vez que você corrigir a mesma coisa duas vezes, a regra vai para lá.
