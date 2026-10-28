# Multiverso em Colapso: wiki e ranking online

Wiki do jogo Multiverso em Colapso (heróis, inimigos, como jogar, controles e novidades) com o ranking online ao vivo.

Endereço: https://fstlopes.github.io/multiverso-ranking/

Os números da wiki saíram do código da v0.77. O ranking vem do Supabase (tabela `ranking`), lido com a chave pública do projeto.

## Onde fica cada coisa

| Pasta / arquivo | O que tem |
| --- | --- |
| `index.html` | Só a moldura: menu do topo, rodapé e a lista de CSS e scripts |
| `paginas/` | O texto de cada página da wiki (`inicio.html`, `torres.html`, `ranking.html`...) |
| `css/base.css` | Cores do jogo, fonte Poppins e fundo |
| `css/topo.css` | Menu do topo e títulos |
| `css/componentes.css` | Painel de quadrinho, tabelas e botões |
| `css/paginas.css` | Página inicial e fichas de heróis e inimigos |
| `css/ranking.css` | Pódio, tabela e selo "ao vivo" |
| `js/dados/` | Números dos heróis (`torres.js`) e dos inimigos (`inimigos.js`). Mude aqui quando o jogo mudar |
| `js/config.js` | Endereço do Supabase e chave pública |
| `js/ranking.js` | Leitura e atualização ao vivo do ranking |
| `js/fichas.js`, `js/navegacao.js`, `js/util.js`, `js/main.js` | Montagem das fichas, troca de página e início |
| `img/fundos`, `img/herois`, `img/inimigos`, `img/interface` | Imagens tiradas do jogo |

Para testar no PC, abra com um servidor local (por exemplo `python -m http.server`), porque as páginas são carregadas com `fetch` e não abrem direto do arquivo.

## Regra de atualização

Sempre que sair uma versão nova do jogo, a wiki é atualizada junto: a página Novidades, os números em `js/dados/`, Como jogar, Controles e a versão no rodapé (`index.html`).
