# Matriz de migração de páginas

Esta matriz registra todas as páginas encontradas no baseline. Uma ação planejada não autoriza exclusão, substituição ou redirect.

| URL atual | Arquivo | Ação | Página futura | Estado |
| --------- | ------- | ---- | ------------- | ------ |
| `/` | `index.html` | REESCREVER | `/` com foco exclusivo em cursos | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/catalogo-bolos.html` | `pages/catalogo-bolos.html` | REDIRECT OU 410 | `[ROTA FUTURA] /cursos/bolos/`, somente se houver sucessor semântico | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/catalogo-casamentos.html` | `pages/catalogo-casamentos.html` | REDIRECT OU 410 | `[ROTA FUTURA] /cursos/bolos-de-casamento/`, somente se houver sucessor | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/central-de-links.html` | `pages/central-de-links.html` | ADAPTAR | `[ROTA FUTURA] /cursos/` | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/cursos-presenciais.html` | `pages/cursos-presenciais.html` | ADAPTAR | `[ROTA FUTURA] /cursos/` ou `/cursos/presenciais/` | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/delivery-semanal.html` | `pages/delivery-semanal.html` | PROVÁVEL 410 | Nenhuma substituta confirmada | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/ebook.html` | `pages/ebook.html` | MANTER INICIALMENTE | Mesma URL; futura área de materiais depende da cliente | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/faq.html` | `pages/faq.html` | REESCREVER | `[ROTA FUTURA] /duvidas/` | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/galeria.html` | `pages/galeria.html` | ADAPTAR | `[ROTA FUTURA] /resultados/` | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/pascoa-2026.html` | `pages/pascoa-2026.html` | 410 OU SUCESSOR VALIDADO | Nenhuma substituta confirmada | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/sobre.html` | `pages/sobre.html` | REESCREVER | `[ROTA FUTURA] /sobre/` | NÃO AUTORIZADO PARA REMOÇÃO |
| `/pages/temas.html` | `pages/temas.html` | VALIDAR COM A CLIENTE | Curso temático semanticamente equivalente ou 410 | NÃO AUTORIZADO PARA REMOÇÃO |

## Dependências de decisão

- Catálogos: `DEPENDE DE SUCESSOR` e `DEPENDE DE MÉTRICAS`.
- Cursos presenciais: `DEPENDE DA CLIENTE` quanto a continuidade da modalidade.
- E-book: `DEPENDE DA CLIENTE` quanto a manutenção comercial.
- Delivery e Páscoa: `DEPENDE DA CLIENTE` para confirmar encerramento definitivo.
- Galeria/resultados: `DEPENDE DA CLIENTE` para depoimentos e autorizações de imagem.
- Temas: `DEPENDE DA CLIENTE` e de eventual sucessor educacional.

Todas permanecem `NÃO AUTORIZADO PARA REMOÇÃO` até aprovação explícita da matriz final de publicação.
