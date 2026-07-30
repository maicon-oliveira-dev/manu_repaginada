# Roadmap de implementação — Manu Rosa Cursos

Cada bloco exige revisão antes do seguinte. As listas de arquivos são previsões, não autorização para criá-los neste bloco.

## Bloco 0 — baseline e arquitetura

**Objetivo:** preservar o estado atual e formalizar arquitetura, páginas, redirects, dados e dependências.

**Arquivos esperados:** os sete documentos em `docs/manu-cursos/`.

**Pré-requisitos:** `main` limpa e sincronizada; branch isolada.

**Riscos:** documentação divergir do repositório ou uma proposta ser interpretada como autorização de remoção.

**Critérios de aceite:** somente os sete documentos novos; site e `.htaccess` intactos; sem commit ou push; status revisado.

## Bloco 1 — scaffold Astro

**Objetivo:** criar o projeto mínimo, validar build estático e preservar o site atual sem migrar conteúdo.

**Arquivos esperados:** `package.json`, lockfile, `astro.config.*`, `tsconfig.json`, `src/`, `public/` e configurações de qualidade estritamente necessárias.

**Pré-requisitos:** ADR revisada; versões e gerenciador de pacotes aprovados; estratégia para coexistência do legado.

**Riscos:** sobrescrever arquivos públicos, alterar URLs, copiar assets desnecessariamente ou introduzir SSR.

**Critérios de aceite:** build estático reproduzível; nenhum servidor Node exigido em produção; site legado preservado; artefato isolado e vazio de conteúdo comercial inventado.

## Bloco 2 — design system base

**Objetivo:** definir fundações visuais acessíveis e reutilizáveis.

**Arquivos esperados:** tokens, estilos globais, fontes, componentes primitivos e documentação visual.

**Pré-requisitos:** scaffold aprovado; identidade e paleta validadas.

**Riscos:** reproduzir contraste insuficiente, criar tokens duplicados ou migrar CSS morto.

**Critérios de aceite:** cores com contraste WCAG AA; escalas coerentes; foco visível; containers e componentes testados nos breakpoints acordados.

## Bloco 3 — layout global

**Objetivo:** criar shell compartilhado, header, navegação, footer e SEO base.

**Arquivos esperados:** layouts, `Header`, `Navigation`, `Footer`, componente SEO e configuração global do site.

**Pré-requisitos:** design system; navegação futura aprovada; canais de contato definidos.

**Riscos:** links para rotas ainda inexistentes, menu inacessível ou metadata placeholder em produção.

**Critérios de aceite:** layout único; menu completo por teclado; skip link; landmarks; metadata padrão; nenhum CTA de encomenda/delivery.

## Bloco 4 — modelo e catálogo de cursos

**Objetivo:** implementar contrato de dados, validação, cards, listagem e estados dos cursos.

**Arquivos esperados:** schema/coleção de conteúdo, tipos, fixtures exclusivamente locais, `CourseCard` e rota `/cursos/`.

**Pré-requisitos:** contrato revisado; lista mínima de cursos ou autorização explícita para fixtures locais.

**Riscos:** placeholder comercial ser publicado; slug instável; estado e CTA incoerentes.

**Critérios de aceite:** validação automática dos campos; estados renderizados corretamente; drafts fora do build público; cards acessíveis; nenhum preço inferido.

## Bloco 5 — página individual

**Objetivo:** criar template completo para cada curso.

**Arquivos esperados:** rota dinâmica estática, seções de módulos, benefícios, instrutora, FAQ, prova social e CTA.

**Pré-requisitos:** dados reais suficientes; regras de acesso, certificado, suporte e checkout definidas.

**Riscos:** claims não comprovados, depoimentos sem consentimento, checkout incorreto ou promessa juridicamente inconsistente.

**Critérios de aceite:** todos os campos obrigatórios presentes; CTA coerente com `status`; checkout oficial somente em `open`; schema e metadata válidos.

## Bloco 6 — páginas institucionais

**Objetivo:** implementar home, Sobre, resultados, dúvidas, suporte e materiais.

**Arquivos esperados:** rotas estáticas e componentes editoriais dessas páginas.

**Pré-requisitos:** arquitetura de informação e conteúdo-base aprovados; decisão sobre e-book e resultados.

**Riscos:** duplicar conteúdo, manter linguagem de produtos físicos ou publicar prova social fictícia.

**Critérios de aceite:** jornada centrada em cursos; um H1 por página; CTAs consistentes; nenhum conteúdo antigo sem contexto educacional aprovado.

## Bloco 7 — conteúdo real

**Objetivo:** substituir todo material de protótipo por conteúdo e imagens aprovados.

**Arquivos esperados:** entradas de cursos, conteúdo institucional, imagens otimizadas e registros editoriais.

**Pré-requisitos:** pacote de conteúdo da cliente; autorizações; evidências de claims.

**Riscos:** divergência de versões, imagens sem direito de uso, arquivos pesados ou placeholders residuais.

**Critérios de aceite:** nenhum marcador `[VALIDAR COM A CLIENTE]` presente no conteúdo publicável; claims rastreáveis; depoimentos autorizados; imagens responsivas e otimizadas.

## Bloco 8 — redirects e SEO

**Objetivo:** finalizar migração de URLs e indexação.

**Arquivos esperados:** `.htaccess`, sitemap, robots, página 404, canonicals, metadata e schemas.

**Pré-requisitos:** todas as rotas futuras publicadas; métricas antigas analisadas; matriz final aprovada.

**Riscos:** loops, cadeias, soft 404, perda de backlinks, redirect sem equivalência ou indexação prematura.

**Critérios de aceite:** cada URL antiga tem decisão; 301 levam a sucessor equivalente; 410 justificados; nenhum loop; sitemap e robots válidos; canonicals autoconsistentes.

## Bloco 9 — qualidade

**Objetivo:** validar acessibilidade, responsividade, performance, integrações e staging.

**Arquivos esperados:** testes, configurações de auditoria, relatórios e correções aprovadas.

**Pré-requisitos:** build funcional com conteúdo real; staging protegido de indexação.

**Riscos:** diferenças entre staging e Apache, falhas de checkout, analytics duplicado ou regressão mobile.

**Critérios de aceite:** testes em 320, 375, 768, 1024 e desktop; fluxo por teclado; contraste AA; links e checkout válidos; metas de Web Vitals/orçamento atendidas; eventos confirmados.

## Bloco 10 — publicação

**Objetivo:** publicar com backup, verificação, observabilidade e rollback.

**Arquivos esperados:** artefato estático final, backup verificável, checklist e registro da versão publicada.

**Pré-requisitos:** aceite dos blocos anteriores; janela de publicação; acessos; responsáveis; rollback ensaiado.

**Riscos:** upload parcial, cache antigo, permissão incorreta, redirect divergente ou indisponibilidade de checkout.

**Critérios de aceite:** backup restaurável; deploy completo; smoke tests HTTP e funcionais; Search Console/analytics monitorados; zero 404 inesperado; rollback disponível durante a janela.

## Ordem obrigatória

```text
0 Baseline
→ 1 Scaffold
→ 2 Design system
→ 3 Layout global
→ 4 Catálogo
→ 5 Página individual
→ 6 Institucionais
→ 7 Conteúdo real
→ 8 Redirects e SEO
→ 9 Qualidade
→ 10 Publicação
```

Nenhuma remoção de página antiga deve ocorrer antes da aprovação dos blocos 7, 8 e 9.
