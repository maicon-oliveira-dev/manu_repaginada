# Matriz preliminar de redirects

Este documento é somente planejamento. Nenhuma regra foi adicionada ou alterada no `.htaccess`.

| Origem | Destino proposto | Código | Confiança | Dependência | Estado |
| ------ | ---------------- | -----: | --------- | ----------- | ------ |
| `/index.html` | `/` | 301 | Alta | Regra atual preservada | PRESERVADO — JÁ IMPLEMENTADO |
| `/pages/catalogo-bolos.html` | `[ROTA FUTURA] /cursos/bolos/` | 301 | Baixa | Curso sucessor semanticamente compatível e métricas da URL; caso contrário 410 | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/catalogo-casamentos.html` | `[ROTA FUTURA] /cursos/bolos-de-casamento/` | 301 | Baixa | Curso sucessor semanticamente compatível e métricas; caso contrário 410 | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/central-de-links.html` | `[ROTA FUTURA] /cursos/` | 301 | Alta | Nova listagem publicada e validada | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/cursos-presenciais.html` | `[ROTA FUTURA] /cursos/presenciais/` | 301 | Média | Confirmação de que cursos presenciais continuam | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/cursos-presenciais.html` | `[ROTA FUTURA] /cursos/` | 301 | Baixa | Alternativa somente se a modalidade for incorporada ao catálogo | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/delivery-semanal.html` | Sem destino | 410 | Média/alta | Confirmação de encerramento definitivo pela cliente | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/ebook.html` | Preservar URL atual | — | Alta | Confirmação de manutenção do produto | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/faq.html` | `[ROTA FUTURA] /duvidas/` | 301 | Alta | Nova página de dúvidas publicada | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/galeria.html` | `[ROTA FUTURA] /resultados/` | 301 | Média | Conteúdo educacional equivalente e autorizações de imagem | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/pascoa-2026.html` | Sem destino | 410 | Média | Encerramento definitivo e análise de métricas | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/pascoa-2026.html` | `[ROTA FUTURA] /materiais/[sucessor-sazonal]/` | 301 | Baixa | Somente se existir sucessor educacional semanticamente equivalente | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/sobre.html` | `[ROTA FUTURA] /sobre/` | 301 | Alta | Nova página Sobre publicada | PROPOSTA — NÃO IMPLEMENTADO |
| `/pages/temas.html` | `[ROTA FUTURA] /cursos/[curso-tematico]/` | 301 | Baixa | Curso real equivalente; caso contrário 410 | PROPOSTA — NÃO IMPLEMENTADO |

## Regras de decisão

1. Uma URL só recebe 301 quando o destino responder à mesma intenção de busca.
2. Conteúdo encerrado sem sucessor coerente deve ser avaliado para 410.
3. Nenhuma URL deve ser enviada para a home apenas para evitar um 404.
4. Métricas de tráfego, backlinks e conversão devem ser verificadas antes da decisão final.
5. A URL do e-book permanece preservada inicialmente.
6. O redirect existente de `/index.html` para `/` permanece preservado.
7. O redirect sazonal atual de Páscoa não deve ser promovido a 301 sem uma nova decisão.
