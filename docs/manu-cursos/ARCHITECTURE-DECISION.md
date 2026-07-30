# ADR-001 — Arquitetura estática para Manu Rosa Cursos

## Contexto

O site atual é composto por doze documentos HTML independentes. Header, navegação, footer, CTAs e inicializações JavaScript são repetidos, com pequenas divergências entre páginas. Não existe sistema de componentes, contrato de conteúdo ou geração de páginas por dados.

O novo posicionamento requer um catálogo de cursos, páginas individuais, metadados consistentes e estados comerciais como rascunho, em breve, matrículas abertas e encerradas. A manutenção manual dessas estruturas ampliaria a duplicação atual.

A hospedagem existente é Apache/HostGator e serve arquivos estáticos. Não há necessidade identificada de backend próprio, SSR, banco de dados ou servidor Node em produção. Checkout, comunicação e eventualmente plataforma de aulas permanecem integrações externas.

## Opções avaliadas

### A — HTML/CSS/JavaScript manual

Mantém o modelo atual e reorganiza as páginas manualmente.

- Menor mudança inicial.
- Compatibilidade direta com Apache.
- Continua exigindo duplicação ou sincronização manual.
- Escala mal para novos cursos e metadados.
- Maior risco de divergência entre páginas.

### B — templates/includes com saída estática

Adota includes ou um gerador simples para produzir HTML estático.

- Reduz duplicação de layout.
- Mantém entrega compatível com Apache.
- Introduz um build simples.
- Pode exigir convenções próprias para dados, validação e rotas.
- Oferece boa opção de fallback caso o scaffold Astro não seja aprovado.

### C — Astro com saída estática

Adota componentes Astro e geração estática para produzir HTML, CSS e assets publicáveis no Apache.

- Componentes reutilizáveis para layout e blocos de curso.
- Conteúdo estruturado e páginas geradas por dados.
- SEO e metadados centralizados.
- JavaScript enviado apenas quando necessário.
- Requer Node somente no desenvolvimento/build, não na hospedagem final.
- Introduz dependências e uma etapa formal de build.

## Decisão proposta

Adotar Astro com saída estática como arquitetura-alvo, sujeito à validação técnica no bloco de scaffold.

## Motivos

- Componentes reutilizáveis para header, footer, cards, FAQs e seções comerciais.
- Contrato estruturado para cursos e seus estados.
- Páginas individuais geradas por dados, sem cópia manual.
- SEO, canonicals, Open Graph e dados estruturados centralizados.
- Saída final compatível com hospedagem estática Apache.
- Melhor manutenção e capacidade de adicionar cursos.
- Oportunidades de performance por HTML pre-renderizado e JavaScript seletivo.
- Ausência de servidor Node em produção.

## Restrições

- Não usar SSR.
- Não criar backend próprio.
- Não exigir Node no servidor de produção.
- Preservar URLs antigas até os redirects serem aprovados e testados.
- Não migrar conteúdo comercial não validado.
- Não inventar cursos, preços, checkout, garantias ou depoimentos.
- Não modificar o site público durante o scaffold.
- Manter uma saída estática que possa ser validada antes da troca de publicação.

## Consequências

### Vantagens

- Uma única fonte para componentes compartilhados.
- Modelo previsível para listagem e páginas de curso.
- Menor risco de inconsistências de navegação e SEO.
- Build reproduzível e passível de validação automatizada.
- Compatibilidade com o ambiente atual de produção.

### Custos

- Criação e manutenção de ambiente Node apenas para desenvolvimento e build.
- Migração gradual dos HTML atuais para componentes e dados.
- Treinamento básico da equipe no framework e no processo de publicação.
- Necessidade de definir como o artefato `dist/` será entregue ao HostGator.

### Riscos

- URLs ou assets divergirem durante a migração.
- Publicação incompleta do diretório gerado.
- Conteúdo placeholder chegar a produção por falha de validação.
- Dependências ficarem sem atualização se não houver rotina de manutenção.

### Estratégia de rollback

1. Preservar integralmente o site atual enquanto o novo projeto é construído.
2. Gerar o novo site em diretório de build separado.
3. Validar em staging antes de trocar arquivos públicos.
4. Fazer backup verificável da publicação atual e do `.htaccess`.
5. Em falha, restaurar os arquivos estáticos preservados e as regras anteriores.
6. Não remover as rotas antigas até a validação pós-publicação.

## Status

PROPOSTA — AGUARDANDO VALIDAÇÃO DO SCAFFOLD
