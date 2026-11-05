# Estado atual da publicação — Manu Rosa

_Registro local em 29/10/2026 (America/Sao_Paulo). Este documento não executa publicação e não substitui uma verificação direta no cPanel._

## Fatos confirmados localmente

- O código-fonte do site atual está em `astro-site/`. A configuração Astro declara saída estática (`output: 'static'`) e o domínio `https://manurosabakery.com.br`.
- A saída para publicação é `astro-site/dist/`. Ela contém `index.html`, `contato/`, `cursos/`, `duvidas/`, `ebooks/`, `sobre/`, `_astro/`, `robots.txt`, `sitemap.xml` e `og-manu-rosa.jpg`.
- A rota `/cursos/a-base-dos-cookies-perfeitos/` está acessível publicamente. A saída local correspondente é `astro-site/dist/cursos/a-base-dos-cookies-perfeitos/index.html`.
- O legado na raiz (`index.html`, `pages/`, `assets/` e `.htaccess`) permanece no repositório e deve ser preservado enquanto a avaliação de rotas antigas não terminar.
- O `.htaccess` local da raiz é diferente da configuração hospedada. Ele deve ser tratado como configuração do legado, não como cópia autorizada da configuração atual de produção.
- Há um `.gitignore` na raiz que ignora somente artefatos locais do Astro, arquivos de ambiente, o ZIP local de HostGator e temporários comuns de Windows/macOS. Ele não ignora `src/assets/`, `docs/`, `assets/` ou `pages/`.

## Evidência da captura do cPanel

A captura do Gerenciador de Arquivos mostra, em `public_html`:

| Item | Data/hora mostrada |
|---|---|
| `_astro/` | 24/09/2026 18:39 |
| `contato/`, `cursos/`, `duvidas/`, `ebooks/`, `sobre/` | 24/09/2026 18:39 |
| `index.html` | 24/09/2026 18:35 |
| `sitemap.xml` | 24/09/2026 17:15 |
| `.htaccess` | 07/08/2026 14:49 — 655 bytes |
| `og-manu-rosa.jpg` | 07/08/2026 13:30 — 128,92 KB |
| `robots.txt` | 07/08/2026 11:10 — 77 bytes |

Essa estrutura é consistente com uma publicação estática Astro: `_astro/` contém assets gerados e as páginas aparecem como diretórios com `index.html`. As datas da captura são evidência operacional, mas não provam isoladamente qual conjunto exato de bytes foi enviado.

### `.htaccess` hospedado (confirmado no cPanel)

O `.htaccess` de `public_html` contém, conforme conferido no cPanel:

- forçamento de HTTPS e domínio canônico;
- remoção/redirecionamento de `/index.html`;
- redirects de duas URLs antigas para `/`;
- bloco PHP gerenciado pelo cPanel.

Ele é distinto do `.htaccess` local da raiz, que possui apenas a regra para `/index.html` e um redirect temporário de `pages/pascoa-2026.html` para `pages/central-de-links.html`. Não copiar esta configuração local para `astro-site/public/` nem substituir o arquivo hospedado automaticamente.

## ZIP de HostGator comparado à saída atual

O arquivo `manu-rosa-hostgator-v1.zip` foi analisado em memória antes de ser preservado fora do repositório. Seus caminhos não tinham uma pasta-base comum; foram normalizados apenas com separadores `/` para a comparação com `astro-site/dist/`.

| Resultado da comparação ZIP × `astro-site/dist/` | Quantidade |
|---|---:|
| Arquivos no ZIP | 450 |
| Arquivos no `dist` local | 545 |
| Caminhos em comum | 448 |
| Arquivos idênticos por SHA-256 | 445 |
| Caminhos comuns com conteúdo diferente | 3 |
| Itens somente no `dist` local | 97 |
| Itens somente no ZIP | 2 |

Os três caminhos comuns diferentes são `index.html`, `ebooks/index.html` e `sitemap.xml`. Os dois itens exclusivos do ZIP são bundles CSS em `_astro/`. Os 97 itens exclusivos do `dist` incluem a rota e os assets gerados da masterclass de cookies.

## Inferência operacional

Com confiança alta, `public_html` está servindo uma publicação Astro, e não o conjunto legado da raiz: a estrutura capturada, o ZIP e `astro-site/dist/` têm o mesmo modelo de rotas e de assets `_astro/`. O ZIP é um snapshot anterior, muito próximo da saída atual, mas não representa integralmente o `dist` local atual.

Essa conclusão não torna arquivos legados obsoletos. Eles podem continuar atendendo URLs existentes, servindo como referência de conteúdo ou sendo necessários em outros diretórios/regras do servidor.

## Estado Git registrado

- Branch: `cliente/manu-cursos-online`.
- Commit atual: `3af103092c17c0af54a8660c5554139c3d1ed154` — `feat: finalize masterclass checkout and production readiness` (24/09/2026 18:00:30 -03:00).
- Arquivo local novo não commitado: `.gitignore`.
- Alterações locais ainda não commitadas e preservadas:
  - `astro-site/src/components/masterclass-cookies/MasterclassCookiesHero.astro`;
  - `astro-site/src/components/masterclass-cookies/MasterclassCookiesLearn.astro`;
  - `astro-site/src/assets/masterclass-cookies/processo-forno-manu-enquadrado.png`;
  - `astro-site/src/assets/masterclass-cookies/processo-forno-manu.jpeg`.

## Verificações ainda dependentes do cPanel

1. Conferir a existência e os bytes de `public_html/cursos/a-base-dos-cookies-perfeitos/index.html` e seus assets em `public_html/_astro/`.
2. Comparar a listagem completa de `public_html/_astro/` com o `dist` que se pretende publicar, incluindo hashes quando a interface permitir.
3. Preservar e revisar o texto integral do `.htaccess` hospedado antes de qualquer alteração de redirects, HTTPS, domínio canônico ou PHP.
4. Verificar se `public_html/pages/` e `public_html/assets/` ainda existem, e mapear eventuais URLs legadas atendidas por eles.
5. Confirmar o document root efetivo do domínio e se não há subdomínio, redirecionamento ou outra pasta servindo parte do site.
