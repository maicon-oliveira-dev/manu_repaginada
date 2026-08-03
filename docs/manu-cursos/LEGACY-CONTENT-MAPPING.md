# Mapeamento de conteúdo legado — Manu Rosa Cursos

## Status e identificação

| Item | Valor |
| --- | --- |
| Status | MAPEAMENTO EDITORIAL PARA REVISÃO |
| Data | 3 de agosto de 2026 |
| Branch | `cliente/manu-cursos-online` |
| HEAD de referência | `5ef4202 feat: establish Manu courses global layout and routes` |
| Escopo | Conteúdo institucional, educacional e comercial de cursos, treinamentos e e-books |
| Implementação | Não iniciada neste bloco |

Este documento é a fonte de verdade editorial para implementar as rotas `/`, `/cursos/`, `/ebooks/`, `/sobre/`, `/duvidas/` e `/contato/`. Caminhos e linhas referem-se ao estado do HEAD indicado acima.

## Decisão oficial e precedência

A decisão mais recente do responsável pelo projeto é: **“Preservar identidade visual e conteúdo educacional aprovados no site original.”**

Consequentemente:

- a identidade visual existente é a base oficial;
- a logo atual, incluindo a palavra “Bakery”, será preservada nesta fase;
- a família cromática rosa, creme, dourado e marrom será preservada;
- Cormorant Garamond e Manrope formarão o sistema tipográfico principal;
- as fotografias reais das áreas de cursos serão reutilizadas após seleção e otimização;
- história, formação, trajetória, proposta de ensino e claims já publicados podem ser mapeados como conteúdo legado aprovado;
- o novo recorte comercial é exclusivamente educacional;
- dados que variam com a oferta — preço, calendário, disponibilidade, checkout, duração, suporte, certificado e matrícula — continuam pendentes de valor atual.

Esta decisão substitui, para fins de mapeamento editorial, a necessidade anterior de solicitar uma identidade inteiramente nova. Ela não altera as restrições técnicas da arquitetura, o contrato `Course`, a publicação controlada nem a exigência de não inventar informação comercial.

## Escopo

### Incluído

- Cursos online e presenciais, treinamentos, workshops e formação profissional.
- Técnicas de confeitaria, metodologia, materiais educacionais e e-books.
- Trajetória da Manu como professora, turmas, certificados e comunidade.
- CTAs de descoberta, matrícula, aquisição de material e suporte educacional.

### Excluído da arquitetura nova

- Operação e venda de produtos físicos.
- Serviços para festas, celebrações e eventos.
- Campanhas comerciais sazonais sem sucessor educacional.
- Canais e CTAs cuja intenção seja exclusivamente o negócio físico.

As páginas antigas permanecem preservadas até a publicação e a aprovação da matriz final de redirects.

## Fontes analisadas

### Documentação arquitetural

- `docs/manu-cursos/ARCHITECTURE-DECISION.md`: Astro estático aceito; sem SSR, backend próprio ou Node em produção.
- `docs/manu-cursos/BASELINE.md`: doze páginas legadas, integrações existentes e riscos conhecidos.
- `docs/manu-cursos/CLIENT-CONTENT-DEPENDENCIES.md`: dependências comerciais e de publicação.
- `docs/manu-cursos/COURSE-DATA-CONTRACT.md`: campos, estados e integridade do contrato `Course`.
- `docs/manu-cursos/IMPLEMENTATION-ROADMAP.md`: migração gradual, conteúdo real antes de redirects e publicação.
- `docs/manu-cursos/PAGE-MIGRATION-MATRIX.md`: ações propostas sem autorização de remoção.
- `docs/manu-cursos/REDIRECT-MATRIX.md`: redirects e respostas 410 permanecem propostas.

### HTML legado lido integralmente

- `index.html`, linhas 1–519.
- `pages/sobre.html`, linhas 1–178.
- `pages/cursos-presenciais.html`, linhas 1–382.
- `pages/ebook.html`, linhas 1–438.
- `pages/faq.html`, linhas 1–172.
- `pages/central-de-links.html`, linhas 1–394.
- `pages/galeria.html`, linhas 1–180.
- `pages/temas.html`, linhas 1–195.

### Fontes complementares

- `pages/catalogo-bolos.html`, linhas 103–119: apresentação e claims de trajetória.
- `pages/pascoa-2026.html`, linhas 116–137: apresentação e claims repetidos.
- `pages/catalogo-casamentos.html` e `pages/delivery-semanal.html`: somente navegação compartilhada e conteúdo do negócio físico; sem nova fonte educacional substantiva.

## Política de tratamento

| Classificação | Regra |
| --- | --- |
| `KEEP_EXACT` | Preservar praticamente como publicado; corrigir somente espaços, pontuação, acentuação e erros evidentes. |
| `LIGHT_EDIT` | Preservar mensagem, fatos, voz e estrutura principal; reduzir repetição e adaptar para leitura web. |
| `REFRAME_EDUCATIONAL` | Reposicionar conteúdo ou imagem com valor técnico para ensino, sem transformar produto fotografado em curso. |
| `MERGE` | Consolidar trechos equivalentes e manter uma fonte-base, registrando as variações. |
| `CTA_REWRITE` | Preservar a intenção educacional e atualizar label, destino, contexto e hierarquia. |
| `EXCLUDE_PHYSICAL_BUSINESS` | Não migrar conteúdo de operação ou venda de produtos físicos e eventos. |
| `KEEP_AS_APPROVED_LEGACY_CLAIM` | Mapear informação já publicada e aprovada, sempre com origem; não representa verificação independente. |
| `NEEDS_CURRENT_COMMERCIAL_VALUE` | Mapear estrutura, mas aguardar definição atual de preço, checkout, disponibilidade, calendário, duração, suporte, certificado ou matrícula. |

## Identidade visual preservada

### Logo principal

- Arquivo-base: `assets/imagens novas/Logo Manu-01.png`.
- Uso planejado: header claro, páginas internas e referência principal da marca.
- A palavra “Bakery” será preservada por pertencer à identidade aprovada.
- Não redesenhar a logo neste bloco.

### Logo clara

- Arquivo-base: `assets/imagens novas/Logo Manu-02.png`.
- Uso planejado: footer escuro, fundos escuros e superfícies de maior contraste.
- `assets/imagens novas/Logo Manus-02.png` é duplicata binária e não deve ser copiada quando começar a migração de assets.

### Logo circular

- Arquivo: `assets/img/Manu Rosa - sem fundo.png`.
- Uso possível: selo editorial, assinatura, seção Sobre ou composição especial.
- Não usar como logo principal do header sem necessidade.

### Favicon

O favicon Astro atual é provisório. Planejar uma versão simplificada da identidade existente em etapa futura, sem redesenhar a marca completa neste bloco.

### Paleta preservada

| Papel visual | Cor legada | Aplicação futura | Tratamento de acessibilidade |
| --- | --- | --- | --- |
| Rosa principal | `#f473a7` | Reconhecimento, detalhes e superfícies | Não usar em texto normal sobre branco |
| Rosa escuro legado | `#e45c9a` | Ênfase secundária | Preferir variante Astro mais escura para texto e ação |
| Rosa-claro | `#fde4e1` | Fundos e seções suaves | Combinar com texto escuro |
| Rosa suave | `#f5c7c6` | Bordas, chips e superfícies | Uso não textual ou com foreground escuro |
| Dourado | `#b69151` | Detalhes e acentos | Não usar em texto pequeno sobre branco |
| Dourado escuro | `#8c6d34` | Ícones ou acento com maior contraste | Confirmar contraste por contexto |
| Marrom | `#463831` | Texto e identidade | Adequado sobre fundos claros |
| Texto secundário | `#6f6864` | Apoio e metadados | Usar em tamanho suficiente; contraste limítrofe em alguns fundos |
| Branco | `#ffffff` | Cards e superfícies | Combinar com foreground acessível |

Decisão de evolução:

- preservar aparência e reconhecimento da paleta original;
- usar rosa claro e creme em fundos e superfícies;
- usar versões escuras e acessíveis em texto, links e botões;
- manter o dourado como detalhe;
- não reconstruir o site com uma paleta completamente diferente;
- manter como evolução acessível os tokens Astro `#963052` (marca), `#fff8f5` (fundo), `#342722` (texto), `#76551d` (dourado) e `#0b6773` (foco).

Nenhum token será alterado neste bloco.

## Sistema tipográfico

Decisão:

- Cormorant Garamond para títulos;
- Manrope para corpo, navegação, botões e interface;
- Berkshire Swash apenas como acento visual pontual;
- Montserrat fora do sistema principal, salvo necessidade específica de material antigo.

| Função | Família | Pesos previstos |
| --- | --- | --- |
| H1 e títulos principais | Cormorant Garamond | 600 e 700 |
| H2 e H3 editoriais | Cormorant Garamond | 600 |
| Corpo | Manrope | 400 e 500 |
| Navegação | Manrope | 500 e 600 |
| Botões | Manrope | 600 e 700 |
| Eyebrow | Manrope | 600 ou 700 |
| Acento eventual | Berkshire Swash | 400 |

As fontes não serão importadas neste bloco.

## Mapa global das rotas

| Rota nova | Função | Fontes legadas principais | Conteúdo excluído |
| --- | --- | --- | --- |
| `/` | Posicionamento, apresentação, cursos, método, trajetória, comunidade, e-books e CTA final | `index.html`; `pages/cursos-presenciais.html`; `pages/sobre.html`; `pages/ebook.html`; `pages/central-de-links.html` | Operação física, eventos e campanhas sazonais de produtos |
| `/cursos/` | Modalidades, formação, workshops, metodologia, resultados e matrícula | `pages/cursos-presenciais.html`; blocos educacionais de `index.html`; assets de cursos e aulas | Ofertas não publicadas e consultoria de produto sem enquadramento educacional atual |
| `/ebooks/` | Materiais digitais, conteúdo, receitas, bônus, benefícios e aquisição | `pages/ebook.html`; `index.html`; `pages/central-de-links.html`; assets de e-book | Urgência sazonal e valores desatualizados |
| `/sobre/` | História, formação, marcos, ensino e missão | `pages/sobre.html`; `pages/cursos-presenciais.html`; `pages/central-de-links.html` | Operação do negócio antigo como oferta atual |
| `/duvidas/` | Cursos, modalidade, acesso, certificado, suporte, matrícula e e-books | FAQ de `pages/ebook.html`; informações de `pages/cursos-presenciais.html`; `pages/faq.html` apenas como fonte de exclusão | FAQ do negócio físico |
| `/contato/` | Atendimento sobre cursos, materiais, matrícula e suporte | `pages/central-de-links.html`; CTAs educacionais de `index.html` e `pages/cursos-presenciais.html` | Canais cuja mensagem seja exclusivamente de produtos físicos |

As seis rotas já existem no scaffold. Este documento não cria rotas nem altera sua implementação.

## Mapa detalhado da Home

| Ordem | Seção nova | Fonte e linhas | Conteúdo original resumido | Tratamento | Imagem | CTA | Observações |
| ---: | --- | --- | --- | --- | --- | --- | --- |
| 1 | Header | `index.html:74–109`; `pages/cursos-presenciais.html:34–63` | Logo e navegação repetida | `MERGE` + `CTA_REWRITE` | `assets/imagens novas/Logo Manu-01.png` | Início, Cursos, E-books, Sobre a Manu, Dúvidas, Contato | Remover destinos do negócio físico |
| 2 | Hero | `pages/cursos-presenciais.html:75–98`; `index.html:257–275` | Aprender confeitaria com experiência, técnica, base e segurança | `MERGE` + `LIGHT_EDIT` | Principal `assets/img/img_2/banner4.jpg`; alternativas `assets/imagens novas/Manu-142.JPG` e `assets/img/cursos/01_manu_rosa_batendo_massa.png` | Conhecer cursos; Conhecer e-books | Não levar duração ou modalidade ao H1 |
| 3 | Apresentação educacional | `pages/cursos-presenciais.html:110–114`; `pages/sobre.html:123–128` | Professora, técnica, proximidade, experiência e prazer em ensinar | `MERGE` + `LIGHT_EDIT` | `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Sobre a Manu | Separar claim factual de proposta de ensino |
| 4 | Cursos e treinamentos | `pages/cursos-presenciais.html:124–160`; `index.html:224–239`; `index.html:307–317` | Formação, presenciais, workshops, aulas e materiais | `MERGE`; valores variáveis em `NEEDS_CURRENT_COMMERCIAL_VALUE` | `assets/img/cursos/04_turma_com_bolos.jpeg` | Conhecer os cursos | Não criar curso a partir de foto ou título genérico |
| 5 | Como a Manu ensina | `pages/cursos-presenciais.html:166–180, 203–212`; `pages/cursos-presenciais.html:94–97` | Técnica, prática, repertório e aprendizagem em turma | `LIGHT_EDIT` | `assets/img/cursos/03_preparo_massa_na_tigela.jpeg`; `assets/img/cursos/05_maos_modelando_massa.jpeg` | Ver como funcionam as aulas | Evitar prometer acompanhamento não descrito |
| 6 | Trajetória resumida | `pages/sobre.html:82–120`; `pages/cursos-presenciais.html:112–114` | Início, formação, França, GNT e ensino | `MERGE` + `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/imagens novas/Manu-142.JPG` | Conhecer a trajetória | Versão longa pertence a `/sobre/` |
| 7 | Resultados e comunidade | `pages/cursos-presenciais.html:271–320`; `pages/central-de-links.html:297–305` | Números publicados, turmas, certificado e Grupo VIP | `KEEP_AS_APPROVED_LEGACY_CLAIM` + `LIGHT_EDIT` | `assets/img/cursos/04_turma_com_bolos.jpeg`; `assets/img/cursos/11_turma_brinde.jpeg`; `assets/img/cursos/12_aluna_com_certificado.jpeg` | Conhecer cursos; Entrar na comunidade | Não chamar imagens de depoimentos; validar canal antes de publicar |
| 8 | E-books e materiais | `index.html:315–365`; `pages/ebook.html:96–128, 179–189, 197–228, 277–308` | Cookbook, e-book natalino, conteúdo e bônus | `MERGE`; aquisição em `NEEDS_CURRENT_COMMERCIAL_VALUE` | Capa usada em `pages/ebook.html:128`; alternativas registradas abaixo | Conhecer e-books | Não fixar preço, checkout ou disponibilidade |
| 9 | CTA final | `pages/cursos-presenciais.html:330–339`; `pages/central-de-links.html:343–350` | Convite para falar sobre cursos e próximos passos | `CTA_REWRITE` | `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | Encontrar meu curso; Falar sobre cursos | Canal deve usar mensagem educacional aprovada |
| 10 | Footer | `index.html:495–508`; `pages/cursos-presenciais.html:359–372` | Marca, direitos, contato e e-book | `MERGE` + `CTA_REWRITE` | `assets/imagens novas/Logo Manu-02.png` | Navegação; Instagram; suporte educacional | Excluir botão genérico se continuar associado ao negócio físico |

## Mapa detalhado de Cursos

| Ordem | Seção | Fonte e linhas | Texto-base | Classificação | Imagem | Dado comercial pendente |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Hero de cursos | `pages/cursos-presenciais.html:67–98` | “Aprenda Confeitaria com a Chef Manu Rosa” e destaques de formação, workshops e prática | `LIGHT_EDIT` | `assets/img/cursos/01_manu_rosa_batendo_massa.png` ou `assets/img/img_2/banner4.jpg` | Modalidades atualmente abertas |
| 2 | Apresentação da formação | `pages/cursos-presenciais.html:103–120` | Trajetória técnica e forma de ensinar | `MERGE` + `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Nenhum, salvo atualização biográfica |
| 3 | Modalidades | `pages/cursos-presenciais.html:124–160` | Formação completa, workshops, presença e in company | `LIGHT_EDIT` + `NEEDS_CURRENT_COMMERCIAL_VALUE` | `assets/img/cursos/04_turma_com_bolos.jpeg` | Nomes oficiais, status e modalidade |
| 4 | Profissionalizante | `pages/cursos-presenciais.html:138–142, 217–264` | Registros distintos de formação completa e profissionalizante, com conteúdos e formatos próprios | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `assets/img/cursos/09_macarons.jpeg`; `assets/img/cursos/10_temperagem_chocolate.jpeg` | Relação entre as ofertas, nomes, duração, calendário, certificado e matrícula |
| 5 | Workshops | `pages/cursos-presenciais.html:144–148, 185–198`; `index.html:224–240, 335–341` | Receitas específicas e aulas com convidados | `MERGE` + `NEEDS_CURRENT_COMMERCIAL_VALUE` | `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg` | Agenda, convidado e workshops ativos |
| 6 | Técnicas e conteúdo | `pages/cursos-presenciais.html:166–180, 228–254` | Preparo, modelagem, macarons, bolos, chocolate e boas práticas | `LIGHT_EDIT` | `assets/img/cursos/03_preparo_massa_na_tigela.jpeg`; `assets/img/cursos/05_maos_modelando_massa.jpeg`; `assets/img/cursos/10_temperagem_chocolate.jpeg` | Módulos oficiais |
| 7 | Como funcionam as aulas | `pages/cursos-presenciais.html:94–97, 203–212, 257–263` | Prática real, turma e frequência publicada | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `assets/img/cursos/07_turma_selfie_oficina.jpeg` | Frequência, duração, turnos e suporte |
| 8 | Para quem é | `pages/cursos-presenciais.html:77–82, 129, 152–153, 170–171` | Pessoas que querem começar, aperfeiçoar técnica ou ampliar possibilidades profissionais | `MERGE` + `LIGHT_EDIT` | `assets/img/cursos/05_maos_modelando_massa.jpeg` | Público e pré-requisitos por curso |
| 9 | Trajetória da professora | `pages/cursos-presenciais.html:110–114`; `pages/sobre.html:93–108` | Formação, especialização e marco no GNT | `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/imagens novas/Manu-142.JPG` | Nenhum valor comercial |
| 10 | Turmas e resultados | `pages/cursos-presenciais.html:271–320` | Desde 2012; números publicados; celebração e certificado | `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/img/cursos/04_turma_com_bolos.jpeg`; `assets/img/cursos/11_turma_brinde.jpeg`; `assets/img/cursos/12_aluna_com_certificado.jpeg` | Autorização de imagem e contexto dos indicadores |
| 11 | Dúvidas | `pages/cursos-presenciais.html:239–264, 330–340` | Conteúdo, frequência, duração, certificado, horários e contato | `NEEDS_CURRENT_COMMERCIAL_VALUE` | Sem imagem obrigatória | Todos os dados devem refletir a oferta vigente |
| 12 | CTA de matrícula | `pages/cursos-presenciais.html:324–340` | “Vou adorar ter você como meu aluno” | `CTA_REWRITE` | `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | Canal, mensagem, status e destino de matrícula |

### Registro de ofertas distintas

Os registros abaixo não são variações automaticamente equivalentes. Até a cliente confirmar a relação entre eles, cada um permanece separado e nenhum dado de duração ou volume de aulas pode ser combinado.

| Registro legado | Fonte e linhas | Dados publicados no legado | Tratamento |
| --- | --- | --- | --- |
| Curso completo de Confeitaria | `pages/cursos-presenciais.html:138–142` | Formação semestral com mais de 30 aulas | Manter separado; nome, duração, conteúdo e status em `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Curso profissionalizante de confeitaria | `pages/cursos-presenciais.html:217–264` | Conteúdo próprio, 8 meses, encontros semanais, opções manhã/noite e certificado; o bloco também menciona 9 aulas de bolos | Manter separado; confirmar relação com o curso completo e todos os dados comerciais |
| Confeitaria Básica | `index.html:252–275` | 3 meses, 12 aulas e percurso do zero ao bolo recheado | Manter separado; confirmar oferta, modalidade, calendário e matrícula |
| Workshops e aulas especiais | `pages/cursos-presenciais.html:144–148, 185–198`; `index.html:224–240` | Formato pontual, temas específicos e convidados | Manter separado; confirmar agenda, temas, convidados e disponibilidade |
| In company/desenvolvimento | `pages/cursos-presenciais.html:156–160` | Treinamento ou desenvolvimento para empresas | Manter como serviço educacional distinto; confirmar escopo e disponibilidade |
| Menção a aulas presenciais e on-line | `pages/central-de-links.html:215–220` | Menção isolada, sem oferta estruturada | Não criar produto; solicitar nome, formato, conteúdo, duração e disponibilidade |

### Relação semântica das imagens de Cursos

| Asset | Relação |
| --- | --- |
| `assets/img/img_2/banner4.jpg` | Instrutora e demonstração |
| `assets/img/cursos/03_preparo_massa_na_tigela.jpeg` | Técnica |
| `assets/img/cursos/05_maos_modelando_massa.jpeg` | Metodologia prática |
| `assets/img/cursos/10_temperagem_chocolate.jpeg` | Técnica |
| `assets/img/cursos/04_turma_com_bolos.jpeg` | Formação e comunidade |
| `assets/img/cursos/07_turma_selfie_oficina.jpeg` | Comunidade/workshop |
| `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg` | Aula especial/convidado |
| `assets/img/cursos/09_macarons.jpeg` | Resultado técnico |
| `assets/img/cursos/11_turma_brinde.jpeg` | Comunidade |
| `assets/img/cursos/12_aluna_com_certificado.jpeg` | Conclusão/certificado |

Nenhuma dessas relações declara, por si só, a existência atual de uma oferta comercial.

## Mapa detalhado de E-books

| Ordem | Seção | Fonte e linhas | Conteúdo-base | Classificação | Material | Dado comercial pendente |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Hero de e-books | `index.html:118–123, 194–213`; `pages/ebook.html:92–128` | Cookbook e E-book Biscoitos de Natal | `MERGE` + `LIGHT_EDIT` | Capa atualmente usada em `pages/ebook.html:128` | Produto principal e disponibilidade |
| 2 | Apresentação dos materiais | `index.html:315–317, 322–365`; `pages/central-de-links.html:109–134` | Materiais digitais com receitas testadas | `MERGE` | Capas e fotos de receitas | Lista oficial de e-books |
| 3 | E-book principal | `pages/ebook.html:96–128` | Biscoitos de Natal, receitas e produção | `LIGHT_EDIT` | `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png` | Status, checkout e preço |
| 4 | O que contém | `pages/ebook.html:109–113, 179–185, 277–308` | Medidas, rendimento, forno, armazenamento, embalagem e bônus | `MERGE` | Fotos em `assets/img/ebook/` | Confirmar versão atual do arquivo |
| 5 | Receitas | `pages/ebook.html:194–228` | Lista de quinze receitas e orientações práticas | `KEEP_EXACT` com correções editoriais | Fotos de biscoitos | Confirmar sumário vigente |
| 6 | Bônus | `pages/ebook.html:233–249` | Cookie Box e dicas de montagem | `LIGHT_EDIT` | `assets/imagens novas/Cookie Box.png`; `assets/imagens novas/Bonus.png` | Inclusão atual do bônus |
| 7 | Benefícios | `pages/ebook.html:133–167, 220–228` | Praticidade, ponto, apresentação e conservação | `MERGE` + `LIGHT_EDIT` | `assets/imagens novas/Biscoitos de Natal.png`; `assets/imagens novas/biscoito.png` | Claims técnicos vigentes |
| 8 | Como funciona o acesso | `pages/ebook.html:40–44, 116–121, 351–354` | PDF enviado pelo e-mail do checkout | `NEEDS_CURRENT_COMMERCIAL_VALUE` | Sem imagem obrigatória | Plataforma, prazo e suporte |
| 9 | Dúvidas | `pages/ebook.html:32–77, 345–386` | Acesso, iniciantes, uso das receitas, bônus e suporte | `MERGE` | Sem imagem obrigatória | Política atual de acesso/garantia |
| 10 | CTA de aquisição | `pages/ebook.html:314–340`; `index.html:349–365` | Acessar material e garantir e-book | `CTA_REWRITE` + `NEEDS_CURRENT_COMMERCIAL_VALUE` | Capa oficial selecionada | Preço, checkout e disponibilidade |

### Materiais digitais existentes

| Material | Função provável | Uso legado | Texto incorporado | Tipo | Tratamento futuro |
| --- | --- | --- | --- | --- | --- |
| `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png` | Capa principal | `pages/ebook.html:128` | Sim | Capa | Otimizar; manter como versão atualmente usada até curadoria |
| `assets/imagens novas/Cookie Box.png` | Bônus | `pages/ebook.html:247` | Logo em embalagem | Fotografia | Otimizar e confirmar bônus vigente |
| `assets/imagens novas/Bonus.png` | Divulgação do bônus | Sem referência HTML encontrada | Não relevante | Fotografia promocional | Alternativa; não escolher definitivamente |
| `assets/imagens novas/Biscoitos de Natal.png` | Apoio de campanha | Sem referência HTML encontrada | Possível composição | Fotografia promocional | Otimizar se selecionada |
| `assets/imagens novas/biscoito.png` | Apoio/hero | Sem referência HTML encontrada | Não | Fotografia | Otimizar se selecionada |
| `assets/imagens novas/Anúncios - Bolos Caseiros -.png` | Divulgação do cookbook | Sem referência HTML encontrada | Sim | Anúncio | Mapear como alternativa do cookbook |
| `assets/img/booknatalimg/ebook-biscoitos-natal-768.jpg` | Card/mockup | `index.html:211`; `pages/central-de-links.html:125` | Sim | Mockup/capa | Alternativa concorrente; confirmar versão final |
| `assets/img/booknatalimg/img.png` | Mockup alternativo | Sem referência encontrada | Sim | Mockup | Possível duplicidade visual |
| `assets/img/booknatalimg/5756b9e2-253d-4fb4-a60f-c4b7965c3a90.png` | Mockup alternativo | Sem referência encontrada | Sim | Mockup | Possível duplicidade visual |
| `assets/img/booknatalimg/8e92a550-2b9c-43ba-9bc0-3627f54fe353.png` | Mockup alternativo | Sem referência encontrada | Sim | Mockup | Possível duplicidade visual |
| `assets/img/booknatalimg/Imagem do WhatsApp de 2025-10-22 à(s) 11.23.19_8d9fffc4.jpg` | Variação promocional | Sem referência encontrada | A verificar | Imagem promocional | Curadoria futura |
| `assets/img/ebook/*.jpg` | Ilustrar receitas | Uma foto em `index.html:360`; demais sem referência | Não | Fotografias de receitas | P2; otimizar e descrever semanticamente |

Não há escolha definitiva entre as capas concorrentes neste documento.

## Mapa detalhado de Sobre

| Ordem | Seção | Fonte e linhas | Conteúdo-base | Classificação | Imagem | Observação |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Hero com retrato | `pages/sobre.html:65–74` | Apresentação como chef pâtissier e professora | `LIGHT_EDIT` + `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/imagens novas/Manu-142.JPG` | Remover duplicação “sou” e excesso de exclamações |
| 2 | Apresentação | `pages/cursos-presenciais.html:110–114` | Chef confeiteira, proprietária e professora | `MERGE` | `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Fonte-base mais concisa |
| 3 | Início da trajetória | `pages/sobre.html:82–91` | Cookies, bolachas decoradas e descoberta da confeitaria | `LIGHT_EDIT` | `assets/img/cursos/01_manu_rosa_batendo_massa.png` | Tratar produtos como contexto histórico, não oferta |
| 4 | Formação | `pages/sobre.html:93–100` | Curso de chef em Curitiba e especialização em confeitaria na França | `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/img/img_2/banner4.jpg` | Preservar origem do claim |
| 5 | Especializações | `pages/sobre.html:131–133` | ENSP, École Ducasse/Sommet Education | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Sem imagem obrigatória | Não adicionar credenciais |
| 6 | Marco profissional | `pages/sobre.html:103–108` | Participação e vitória em episódio do GNT em 2016 | `KEEP_AS_APPROVED_LEGACY_CLAIM` | `assets/img/img_2/banner3.jpg`, se necessário | Fotografia com prêmio não substitui texto de origem |
| 7 | Experiência com ensino | `pages/sobre.html:93–100, 118–128`; `pages/cursos-presenciais.html:112–114` | Passagem a professora, cursos, workshops e forma de ensinar | `MERGE` + `LIGHT_EDIT` | `assets/img/cursos/04_turma_com_bolos.jpeg` | Manter foco educacional |
| 8 | Missão | `pages/sobre.html:123–128` | Paixão por ensinar e realização ao ver alunos produzindo | `LIGHT_EDIT` | `assets/img/cursos/07_turma_selfie_oficina.jpeg` | Evitar promessa garantida de prosperidade |
| 9 | Linha do tempo | `pages/sobre.html:82–120`; `pages/cursos-presenciais.html:113`; `pages/catalogo-bolos.html:111–118` | Início profissional, França, aulas, 2016 e 2018 | `MERGE` + `KEEP_AS_APPROVED_LEGACY_CLAIM` | Retratos alternados | Registrar divergência de tempo, abaixo |
| 10 | CTA para cursos | `pages/cursos-presenciais.html:330–339` | Convite pessoal para aprender com a Manu | `CTA_REWRITE` | `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | Destino `/cursos/` |

## Mapa de Dúvidas

`pages/faq.html:65–135` contém apenas perguntas do negócio físico e não fornece respostas educacionais migráveis. As perguntas abaixo vêm do FAQ real do e-book ou são formulações editoriais derivadas de dados publicados em Cursos; nenhuma resposta nova foi inventada.

| Categoria | Pergunta original ou derivada | Fonte e linhas | Resposta original/base | Tratamento | Página relacionada |
| --- | --- | --- | --- | --- | --- |
| Cursos | Como funcionam as aulas? `[derivada]` | `pages/cursos-presenciais.html:94–97, 166–180` | Aulas práticas, da base técnica ao acabamento | `LIGHT_EDIT` | `/cursos/` |
| Cursos presenciais | Há cursos presenciais? `[derivada]` | `pages/cursos-presenciais.html:75–86, 150–153` | A modalidade está publicada no legado | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/cursos/` |
| Modalidade | Quais modalidades são oferecidas? `[derivada]` | `pages/cursos-presenciais.html:124–160` | Formação, workshops, presencial e in company publicados | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/cursos/` |
| Matrícula | Como obter informações sobre a próxima turma? `[derivada]` | `pages/cursos-presenciais.html:330–340` | Contato pelo WhatsApp publicado | `CTA_REWRITE` + `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/contato/` |
| Duração | Qual é a duração? `[derivada]` | `pages/cursos-presenciais.html:239–263`; `index.html:257–268` | O legado contém 8 meses para o profissionalizante e 3 meses/12 aulas para o básico | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/cursos/` |
| Certificado | Há certificado? `[derivada]` | `pages/cursos-presenciais.html:247–254` | “Certificado de conclusão” | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/cursos/` |
| E-books/acesso | Como recebo o e-book? | `pages/ebook.html:40–44, 351–354` | Acesso ao PDF por e-mail após a compra | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/ebooks/` |
| E-books | O e-book é indicado para iniciantes? | `pages/ebook.html:47–52, 357–361` | Passo a passo, medidas e dicas de produção | `KEEP_EXACT` | `/ebooks/` |
| E-books | Posso vender os biscoitos? | `pages/ebook.html:55–60, 363–368` | Material publicado com rendimento, embalagem e validade | `LIGHT_EDIT` | `/ebooks/` |
| E-books/bônus | O bônus Cookie Box está incluso? | `pages/ebook.html:63–68, 372–377` | O guia está descrito como incluso | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/ebooks/` |
| Suporte | E se eu tiver problemas com o download? | `pages/ebook.html:379–384` | Responder ao e-mail de confirmação | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/contato/` |
| Garantia | Há reembolso? | `pages/ebook.html:71–76` | O texto fala apenas em resolver imprevistos de acesso | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/duvidas/` |
| Pagamento | Como funciona o pagamento do e-book? `[derivada]` | `pages/ebook.html:116–121, 328–339` | Checkout externo e pagamento seguro são mencionados | `NEEDS_CURRENT_COMMERCIAL_VALUE` | `/ebooks/` |
| Contato | Como falar sobre cursos ou materiais? `[derivada]` | `pages/cursos-presenciais.html:330–339`; `pages/central-de-links.html:343–350` | WhatsApp existente, com contexto misto | `CTA_REWRITE` | `/contato/` |

## Mapa de Contato

| Canal | Fonte | Uso atual | Uso educacional possível | Migrar | Tratamento |
| --- | --- | --- | --- | --- | --- |
| WhatsApp `+55 47 99655-2618` | `index.html:62–68, 92–97`; `pages/cursos-presenciais.html:116–119, 330–339` | Atendimento geral e cursos | Pré-venda, matrícula e dúvidas | Manter provisoriamente | Confirmar que o número atenderá educação e criar mensagens específicas |
| Instagram `@manurosabakery` | `index.html:59–60`; `pages/sobre.html:71–74` | Rede da marca | Conteúdo, autoridade e contato secundário | Sim | Preservar identidade atual |
| Grupo VIP de Confeitaria | `pages/central-de-links.html:137–148, 297–305` | Comunidade educacional | Cronograma, receitas, novidades e bastidores | Manter provisoriamente | Confirmar link e política do grupo |
| Grupo semanal físico | `pages/central-de-links.html:195–206`; `index.html:482–493` | Operação do negócio antigo | Nenhum | Não | `EXCLUDE_PHYSICAL_BUSINESS` |
| Hotmart | `pages/ebook.html:328–339` | Checkout do e-book natalino | Aquisição de material | Ainda não | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Kpages | `index.html:118–123, 165–175, 346–355`; `pages/central-de-links.html:109–120` | Landing page do cookbook | Aquisição de material | Ainda não | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| E-mail | Não encontrado | Ausente | Suporte e contato | Não disponível | Solicitar canal atual antes de publicar |
| Central de links | `pages/central-de-links.html:67–148` | Hub misto | Origem para página de contato/atalhos | Parcial | Manter apenas caminhos educacionais |

## Mapa de CTAs

| CTA original | Fonte | Destino atual | Contexto atual | CTA novo sugerido | Destino novo | Tratamento |
| --- | --- | --- | --- | --- | --- | --- |
| Conhecer os cursos | `pages/cursos-presenciais.html:84–87`; `pages/central-de-links.html:72–75` | Página presencial/âncora | Descoberta | Conhecer os cursos | `/cursos/` | `CTA_REWRITE` |
| Ver central de cursos | `index.html:238–239, 307–312` | `central-de-links.html` | Descoberta | Ver cursos e treinamentos | `/cursos/` | `CTA_REWRITE` |
| Quero conhecer o curso | `index.html:266–268` | Curso presencial | Curso básico | Conhecer este curso | Página do curso futura | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Quero aula exclusiva | `index.html:237–240` | WhatsApp | Próximas aulas | Falar sobre cursos | `/contato/` ou canal aprovado | `CTA_REWRITE` |
| Falar sobre a próxima turma | `index.html:266–268` | WhatsApp | Curso básico | Receber informações da próxima turma | Canal aprovado | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Falar no WhatsApp | `pages/cursos-presenciais.html:84–86, 330–339` | WhatsApp | Cursos | Falar sobre cursos | Canal aprovado | `CTA_REWRITE` |
| Ver e-books e materiais | `index.html:313–317` | E-book natalino | Materiais | Conhecer e-books | `/ebooks/` | `CTA_REWRITE` |
| Quero ver o e-book | `index.html:118–123` | Kpages | Cookbook | Conhecer o cookbook | `/ebooks/` ou checkout aprovado | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Acessar E-book de Natal | `index.html:194–206` | `pages/ebook.html` | E-book | Conhecer o E-book Biscoitos de Natal | `/ebooks/` | `CTA_REWRITE` |
| Acessar material | `pages/central-de-links.html:309–318` | Kpages | Cookbook | Ver conteúdo do material | `/ebooks/` | `CTA_REWRITE` |
| Entrar no grupo | `pages/central-de-links.html:297–305` | Grupo VIP | Comunidade | Participar da comunidade | Link aprovado | `NEEDS_CURRENT_COMMERCIAL_VALUE` |
| Sobre mim | `index.html:421–438` | `pages/sobre.html` | Biografia | Sobre a Manu | `/sobre/` | `CTA_REWRITE` |
| Ver mais no Instagram | `pages/sobre.html:71–74`; `pages/galeria.html:68–74` | Instagram | Marca/galeria | Acompanhar a Manu | Instagram atual | `LIGHT_EDIT` |
| Chamar no WhatsApp | `pages/central-de-links.html:343–350` | WhatsApp genérico | Atendimento misto | Entrar em contato | `/contato/` | `CTA_REWRITE` |
| CTAs do negócio físico | `index.html:124, 146, 176, 301–305, 397`; `pages/faq.html:65–133`; `pages/galeria.html:65–95` | WhatsApp e catálogos | Operação física | Nenhum | Nenhum | `EXCLUDE_PHYSICAL_BUSINESS` |

Nenhum destino será implementado neste bloco.

## Matriz de assets por rota

| Asset | Categoria | Rota nova | Seção | Função visual | Prioridade | Otimização futura |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/imagens novas/Logo Manu-01.png` | Logo principal | Todas | Header | Identidade | P1 | Variante raster adequada ou pipeline Astro |
| `assets/imagens novas/Logo Manu-02.png` | Logo clara | Todas | Footer | Identidade em fundo escuro | P1 | Pipeline Astro |
| `assets/imagens novas/Logo Manus-02.png` | Duplicata | Nenhuma | Nenhuma | Nenhuma | EXCLUDE | Não copiar |
| `assets/img/Manu Rosa - sem fundo.png` | Selo | `/sobre/` | Assinatura | Elemento editorial | P3 | Reduzir e otimizar |
| `assets/img/img_2/banner4.jpg` | Instrutora | `/`, `/cursos/`, `/sobre/` | Hero/método | Manu trabalhando | P1 | Variantes desktop/mobile |
| `assets/imagens novas/Manu-142.JPG` | Retrato | `/`, `/sobre/` | Apresentação | Autoridade | P1 | AVIF/WebP e cortes |
| `assets/img/cursos/01_manu_rosa_batendo_massa.png` | Instrutora | `/`, `/cursos/` | Hero | Ação com fundo transparente | P1 | Otimizar alpha |
| `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Retrato | `/sobre/`, `/cursos/` | Biografia | Proximidade | P2 | Variantes responsivas |
| `assets/img/cursos/03_preparo_massa_na_tigela.jpeg` | Técnica | `/cursos/` | Método | Preparo | P2 | Formato moderno |
| `assets/img/cursos/05_maos_modelando_massa.jpeg` | Metodologia | `/cursos/` | Prática | Participação em aula | P2 | Formato moderno |
| `assets/img/cursos/10_temperagem_chocolate.jpeg` | Técnica | `/cursos/` | Conteúdo | Temperagem | P2 | Formato moderno |
| `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg` | Convidado | `/cursos/` | Workshops | Aula especial | P2 | Confirmar contexto e otimizar |
| `assets/img/cursos/09_macarons.jpeg` | Resultado | `/cursos/` | Conteúdo | Resultado técnico | P2 | Não transformar em oferta |
| `assets/img/cursos/04_turma_com_bolos.jpeg` | Turma | `/`, `/cursos/` | Comunidade | Formação em grupo | P2 | Direito de imagem e variantes |
| `assets/img/cursos/07_turma_selfie_oficina.jpeg` | Turma | `/`, `/cursos/`, `/sobre/` | Comunidade | Proximidade | P2 | Direito de imagem |
| `assets/img/cursos/11_turma_brinde.jpeg` | Turma | `/`, `/cursos/` | Resultados | Encerramento | P2 | Direito de imagem |
| `assets/img/cursos/12_aluna_com_certificado.jpeg` | Certificado | `/`, `/cursos/` | Resultados | Conclusão | P2 | Direito de imagem e legibilidade de dados |
| `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png` | Capa | `/`, `/ebooks/` | Card/hero | Produto digital usado em `pages/ebook.html:128` | P1 | Redimensionar e converter futuramente |
| `assets/imagens novas/Cookie Box.png` | Bônus | `/ebooks/` | Bônus | Material complementar | P2 | Otimização prioritária |
| `assets/imagens novas/Bonus.png` | Promoção | `/ebooks/` | Bônus | Alternativa visual | P3 | Curadoria e otimização |
| `assets/img/booknatalimg/*` | Mockups | `/ebooks/` | Card/galeria | Alternativas de capa | P3 | Selecionar uma versão |
| `assets/img/ebook/*` | Receitas | `/ebooks/` | Conteúdo | Fotografia de receitas | P2 | Nomes semânticos e formato moderno no bloco autorizado |
| `assets/cardapiodelivere/**/*` | Negócio físico | Nenhuma | Nenhuma | Sem função educacional definida | EXCLUDE | Preservar no legado |
| `assets/img/bolos de casamento/**/*` | Serviço de evento | Nenhuma | Nenhuma | Sem função educacional definida | EXCLUDE | Preservar no legado |
| `assets/img/imagens_bolos_principais/**/*` | Catálogo físico | Nenhuma por padrão | Nenhuma | Somente `REFRAME_EDUCATIONAL` com vínculo objetivo a conteúdo | EXCLUDE | Preservar no legado |
| `assets/img/pascoa_2026/**/*` | Campanha física sazonal | Nenhuma por padrão | Nenhuma | Somente `REFRAME_EDUCATIONAL` com justificativa futura | EXCLUDE | Preservar no legado |

## Conteúdo excluído

| Fonte e linhas | Conteúdo | Motivo da exclusão | Rota antiga relacionada | Tratamento futuro |
| --- | --- | --- | --- | --- |
| `index.html:73–110, 293–306, 372–399, 446–476, 482–493` | Navegação, oferta, FAQ e canal flutuante do negócio físico | Fora do escopo educacional | `/` | Manter somente no legado até publicação; reescrever home |
| `pages/faq.html:65–135` | Perguntas, condições e pagamento do negócio físico | Sem equivalência educacional | `/pages/faq.html` | Substituir por `/duvidas/` após publicação; redirect continua proposta |
| `pages/central-de-links.html:150–206, 227–288, 343–352, 358–369` | Catálogos, operação semanal e atendimento misto | Hub combina dois negócios | `/pages/central-de-links.html` | Migrar apenas atalhos educacionais; redirect proposto para `/cursos/` |
| `pages/galeria.html:65–143` | Vitrine, eventos e temas | Portfólio comercial físico | `/pages/galeria.html` | Avaliar sucessor de resultados; preservar assets pelo legado |
| `pages/temas.html:71–155` | Projetos temáticos e serviços para eventos | Oferta física | `/pages/temas.html` | 301 somente com curso sucessor equivalente; caso contrário avaliar 410 |
| `pages/catalogo-bolos.html` | Catálogo e venda física | Fora do posicionamento | `/pages/catalogo-bolos.html` | Manter no legado; redirect/410 depende de sucessor e métricas |
| `pages/catalogo-casamentos.html` | Serviço para celebrações | Fora do posicionamento | `/pages/catalogo-casamentos.html` | Manter no legado; redirect/410 depende de sucessor e métricas |
| `pages/delivery-semanal.html` | Operação semanal física | Fora do posicionamento | `/pages/delivery-semanal.html` | Provável 410 após confirmação, sem alteração agora |
| `pages/pascoa-2026.html` | Campanha física sazonal | Fora do posicionamento | `/pages/pascoa-2026.html` | 410 ou sucessor educacional equivalente, após decisão |
| `pages/ebook.html:84–88, 314–340` | Urgência, valor implícito, checkout e condições variáveis | Dados comerciais podem estar desatualizados | `/pages/ebook.html` | Manter inicialmente; revalidar antes de migrar |
| `pages/ebook.html:252–275` | Três depoimentos marcados como placeholders | Conteúdo fictício, embora comentado | `/pages/ebook.html` | Nunca migrar; usar somente depoimentos reais |

Nenhuma página, asset ou regra de servidor está autorizada para remoção por este mapeamento.

## Consolidação de textos repetidos e divergentes

| Tema | Fontes | Diferença encontrada | Versão-base recomendada | Destino principal |
| --- | --- | --- | --- | --- |
| Apresentação da Manu | `pages/sobre.html:69–70`; `pages/cursos-presenciais.html:110–114`; `pages/catalogo-bolos.html:110–118` | Longa, curta e orientada ao catálogo | `pages/cursos-presenciais.html:110–114` + missão de `pages/sobre.html:123–128` | `/sobre/` |
| Anos de experiência | `pages/sobre.html:70`; `index.html:425–428`; `pages/cursos-presenciais.html:113`; `pages/catalogo-bolos.html:118` | “Mais de 15”, “desde 2006” e “quase 20” | “Trabalha com doces desde 2006”, de `pages/cursos-presenciais.html:113` | `/sobre/` |
| Início das aulas | `pages/sobre.html:70, 93–100`; `pages/cursos-presenciais.html:282–283` | “Mais de 10 anos” versus “desde 2012” | “Atua com aulas e workshops desde 2012” | `/sobre/` e `/cursos/` |
| Formação | `pages/sobre.html:93–100, 131–133`; `pages/cursos-presenciais.html:113` | Uma fonte nomeia instituições; outra resume | Versão longa de `pages/sobre.html` | `/sobre/` |
| Participação no GNT | `pages/sobre.html:103–108`; `pages/cursos-presenciais.html:113`; `pages/catalogo-bolos.html:112` | Só Sobre informa ano e episódio | `pages/sobre.html:103–108` | `/sobre/` |
| Propósito | `pages/sobre.html:123–128`; `pages/cursos-presenciais.html:114` | Missão emocional versus proposta pedagógica | Combinar as duas sem promessa garantida de prosperidade | `/` e `/sobre/` |
| Cursos | `index.html:224–268`; `pages/cursos-presenciais.html:124–264` | Home fala em 30/12 aulas e três meses; página fala em 30+ aulas e oito meses para ofertas distintas | Estrutura de `pages/cursos-presenciais.html`, separando cada oferta | `/cursos/` |
| Quantidade de alunos | `pages/cursos-presenciais.html:285–299` | Indicadores aparecem apenas nessa página | Preservar valores como claim legado e não mesclar significados | `/cursos/` |
| Resultados | `pages/cursos-presenciais.html:289–310`; `pages/central-de-links.html:297–305` | Métricas e comunidade são conteúdos diferentes | Métricas em Resultados; grupo em Comunidade | `/` e `/cursos/` |
| E-book | `index.html:189–217, 349–365`; `pages/ebook.html:92–340`; `pages/central-de-links.html:123–134` | Resumo, landing completa e atalho | `pages/ebook.html` como fonte-base; usar index para card | `/ebooks/` |
| Contato | `index.html:92–97`; `pages/cursos-presenciais.html:116–119, 330–339`; `pages/central-de-links.html:343–350` | Mesmo número com mensagens genéricas, educacionais e mistas | Fonte educacional de `pages/cursos-presenciais.html:330–339` | `/contato/` |

## Copy-base da Home

### Hero

- **Eyebrow:** Cursos, treinamentos e materiais de confeitaria.
- **H1:** Aprenda confeitaria com a Chef Manu Rosa.
- **Introdução:** Aprenda com quem une experiência, técnica e trajetória reconhecida. Desenvolva repertório e avance com mais segurança no universo da confeitaria.
- **CTAs:** Conhecer os cursos; Conhecer os e-books.
- **Origem:** `pages/cursos-presenciais.html:75–86`.
- **Tratamento:** `LIGHT_EDIT` + `CTA_REWRITE`.

### Apresentação

- **H2:** Técnica, proximidade e experiência real.
- **Parágrafo-base:** Ao longo de sua trajetória, Manu desenvolveu uma forma de ensinar que une técnica, proximidade e experiência real para quem deseja entrar ou evoluir no universo da confeitaria.
- **Origem:** `pages/cursos-presenciais.html:112–114`.
- **Tratamento:** `LIGHT_EDIT`.

### Cursos e método

- **H2:** Formação, workshops e aprendizado prático.
- **Lista-base:** formação profissional; cursos presenciais; workshops e oficinas; aulas especiais; técnicas de preparo e acabamento.
- **Parágrafo-base:** Aulas pensadas para quem deseja aprender com profundidade, colocar a mão na massa e desenvolver segurança no preparo, na execução e no acabamento.
- **CTA:** Ver cursos e treinamentos.
- **Origem:** `pages/cursos-presenciais.html:79–82, 124–180`.
- **Tratamento:** `MERGE`; ofertas específicas em `NEEDS_CURRENT_COMMERCIAL_VALUE`.

### Trajetória e comunidade

- **H2:** Uma trajetória dedicada à confeitaria e ao ensino.
- **Parágrafo-base:** Chef de cozinha com especialização em Pâtisserie na França, Manu trabalha com doces desde 2006 e atua com aulas e workshops desde 2012.
- **H2 de comunidade:** Aprender com a turma.
- **Parágrafo-base:** Receitas testadas, técnica consistente e uma experiência de aprendizagem pensada para quem deseja evoluir na confeitaria.
- **Origem:** `pages/cursos-presenciais.html:110–114, 203–212, 271–300`.
- **Tratamento:** `KEEP_AS_APPROVED_LEGACY_CLAIM` + `LIGHT_EDIT`.

### Materiais digitais e encerramento

- **H2:** E-books e materiais digitais.
- **Parágrafo-base:** Receitas testadas, linguagem acessível e materiais pensados para apoiar a produção com clareza e cuidado.
- **CTA:** Conhecer os e-books.
- **H2 final:** Vou adorar ter você como meu aluno.
- **CTA final:** Falar sobre cursos.
- **Origem:** `pages/central-de-links.html:309–318`; `pages/cursos-presenciais.html:324–339`.
- **Tratamento:** `LIGHT_EDIT` + `CTA_REWRITE` + `NEEDS_CURRENT_COMMERCIAL_VALUE`.

## Copy-base de Cursos

- **Eyebrow:** Cursos de confeitaria.
- **H1:** Aprenda confeitaria com a Chef Manu Rosa.
- **Introdução:** Desenvolva repertório técnico e avance com mais segurança por meio de formação profissional, workshops, oficinas e aprendizado prático.
- **H2:** Um pouco dos cursos que oferecemos.
- **Parágrafos-base:** As formações e experiências atendem quem quer aprender, aperfeiçoar técnicas ou desenvolver novas possibilidades profissionais. As aulas aproximam prática real, repertório e evolução técnica.
- **H2:** Técnica, prática e experiência real.
- **Lista-base:** preparo e execução; acabamento; boas práticas de fabricação; formação de custo e produto; técnicas de chocolate; bolos, tortas, doces e sobremesas.
- **H2:** Para quem quer começar ou evoluir.
- **Parágrafo-base:** Uma experiência para quem deseja entender processos e confeitar com mais confiança, seja para casa ou para atuação profissional.
- **H2:** Aprendizado que gera memória, prática e conquista.
- **CTAs:** Conhecer os cursos; Receber informações da próxima turma; Falar sobre matrícula.
- **Origem:** `pages/cursos-presenciais.html:67–98, 124–180, 217–339`.
- **Tratamento:** `MERGE` + `LIGHT_EDIT`; dados de cada oferta em `NEEDS_CURRENT_COMMERCIAL_VALUE`.

## Copy-base de E-books

- **Eyebrow:** Materiais digitais.
- **H1:** E-books para aprender e produzir com mais clareza.
- **Introdução:** Conheça materiais preparados pela Chef Manu Rosa com receitas testadas, instruções claras, medidas exatas e orientações de produção.
- **H2:** E-book Biscoitos de Natal.
- **Parágrafo-base:** Uma seleção das receitas preferidas e testadas da Manu, com medidas, rendimento, tempo de forno, ponto, armazenamento e sugestões de apresentação.
- **H2:** O que você encontra no material.
- **Lista-base:** receitas passo a passo; medidas e rendimento; forno e ponto; armazenamento e validade; orientações de embalagem; guia Cookie Box, se continuar incluído.
- **H2:** Receitas do e-book.
- **Lista:** preservar o sumário de `pages/ebook.html:201–215` após confirmar a edição vigente.
- **H2:** Como funciona o acesso.
- **Parágrafo-base:** A forma de acesso, a plataforma, o suporte e as condições de aquisição serão exibidos conforme os dados comerciais atuais.
- **CTAs:** Ver conteúdo do e-book; Acessar material.
- **Origem:** `pages/ebook.html:92–128, 169–249, 277–383`.
- **Tratamento:** `LIGHT_EDIT` + `KEEP_EXACT`; aquisição em `NEEDS_CURRENT_COMMERCIAL_VALUE`.

## Copy-base de Sobre

- **Eyebrow:** Sobre a Manu.
- **H1:** Olá, sou a Manu Rosa, chef pâtissier.
- **Introdução:** Trabalho com doces desde 2006 e atuo com aulas e workshops desde 2012.
- **H2:** Uma história construída na confeitaria.
- **Parágrafo-base:** Comecei com cookies americanos e bolachas decoradas e fui me apaixonando cada vez mais pela confeitaria. Busquei conhecimento, ampliei meu repertório e transformei essa paixão em trajetória profissional.
- **H2:** Formação e especialização.
- **Parágrafo-base:** Fiz um curso de chef de cozinha em Curitiba e uma especialização em Confeitaria na ENSP, na França. Quando retornei, passei a dar aulas.
- **H2:** Um marco na trajetória.
- **Parágrafo-base:** Em 2016, participei do programa “Que Seja Doce”, no Canal GNT, e ganhei o episódio “chá de bebê”.
- **H2:** Ensinar faz parte da minha missão.
- **Parágrafo-base:** A cozinha é minha paixão e adoro compartilhar conhecimento. Sinto-me realizada ensinando e vendo meus alunos produzirem seus doces.
- **CTA:** Conhecer os cursos.
- **Origem:** `pages/sobre.html:69–133`; datas consolidadas com `pages/cursos-presenciais.html:113, 282–283`.
- **Tratamento:** `MERGE` + `LIGHT_EDIT` + `KEEP_AS_APPROVED_LEGACY_CLAIM`.

## Copy-base de Dúvidas

- **Eyebrow:** Dúvidas frequentes.
- **H1:** Informações sobre cursos e e-books.
- **Introdução:** Consulte as informações publicadas sobre formatos de aprendizagem, conteúdo dos materiais, acesso e suporte.
- **H2:** Cursos e formação.
- **Lista de perguntas-base:** Como funcionam as aulas? Quais modalidades estão disponíveis? Qual é a duração? Há certificado? Como recebo informações sobre novas turmas?
- **H2:** E-books e acesso.
- **Lista de perguntas-base:** Como recebo o e-book? O material é indicado para iniciantes? O bônus está incluído? Como funciona o suporte de acesso?
- **CTA:** Ainda ficou com dúvida? Entre em contato.
- **Origem:** `pages/cursos-presenciais.html:94–97, 124–180, 239–264, 330–340`; `pages/ebook.html:32–77, 345–386`.
- **Tratamento:** respostas atuais em `NEEDS_CURRENT_COMMERCIAL_VALUE`; não usar conteúdo de `pages/faq.html:65–135`.

## Copy-base de Contato

- **Eyebrow:** Fale com a Manu Rosa.
- **H1:** Atendimento sobre cursos e materiais educacionais.
- **Introdução:** Use os canais oficiais para receber informações sobre cursos, próximas turmas, e-books e suporte aos materiais.
- **H2:** Escolha o assunto do contato.
- **Lista-base:** cursos e treinamentos; próximas turmas; e-books; acesso a materiais; suporte educacional.
- **CTAs:** Falar sobre cursos; Falar sobre e-books; Acompanhar no Instagram.
- **Observação:** o WhatsApp `+55 47 99655-2618`, o Instagram `@manurosabakery` e o Grupo VIP aparecem no legado, mas função e links finais devem ser confirmados antes da publicação.
- **Origem:** `pages/cursos-presenciais.html:116–119, 330–339`; `pages/central-de-links.html:78–148, 297–317, 343–350`.
- **Tratamento:** `CTA_REWRITE` + `NEEDS_CURRENT_COMMERCIAL_VALUE`.

## Ordem de implementação futura

| Ordem | Bloco futuro | Conteúdo | Assets | Dependências |
| ---: | --- | --- | --- | --- |
| 1 | Identidade visual e fontes | Marca, paleta e tipografia aprovadas | Logos existentes | Estratégia de carregamento de fontes |
| 2 | Migração e otimização de assets | Manifesto por rota | P1 e P2 desta matriz | Autorização para copiar e converter |
| 3 | Header e footer oficiais | Navegação das seis rotas | Logos principal e clara | Canais educacionais confirmados |
| 4 | Home definitiva | Copy-base da Home | Hero, retrato, turma e e-book | Cursos/e-books em destaque confirmados |
| 5 | Página Sobre | História, formação e missão | Retratos e instrutora | Revisão editorial final |
| 6 | Página Cursos | Modalidades, método e formação | Técnicas, turmas e certificado | Dados `Course` atuais |
| 7 | Página E-books | Materiais, receitas e acesso | Capas, bônus e receitas | Produtos e versões vigentes |
| 8 | Página Dúvidas | FAQs educacionais | Nenhum obrigatório | Respostas comerciais atuais |
| 9 | Página Contato | Canais e assuntos | Logo/retrato opcional | WhatsApp, e-mail, suporte e redes |
| 10 | Resultados e comunidade | Claims, turmas e certificado | Pessoas identificáveis | Autorizações e contexto |
| 11 | Links comerciais | Matrícula, checkout e comunidade | Capas/cards finais | URLs e status oficiais |
| 12 | SEO e publicação | Metadados, schemas e redirects | Open Graph/favicons | Rotas completas e matriz final aprovada |

Nenhuma etapa desta tabela foi implementada neste bloco.

## Riscos editoriais e técnicos

| Prioridade | Risco | Mitigação |
| --- | --- | --- |
| P1 | Confundir claims legados aprovados com verificação independente | Manter classificação e origem por linha |
| P1 | Publicar valor, checkout, duração ou status desatualizado | Exigir `NEEDS_CURRENT_COMMERCIAL_VALUE` antes do build publicável |
| P1 | Reutilizar placeholders de depoimento comentados | Bloquear sua migração; aceitar apenas conteúdo real |
| P1 | Reintroduzir o negócio físico em navegação, copy ou CTAs | Validar a copy-base e matriz de exclusões |
| P2 | Misturar ofertas distintas de 30+ aulas, 12 aulas, três meses e oito meses | Modelar cada curso separadamente após confirmação |
| P2 | Tratar fotografias como prova de oferta, resultado ou depoimento | Usar função visual explícita e texto rastreável |
| P2 | Copiar assets concorrentes ou pesados sem curadoria | Usar prioridades e manifesto antes da migração |
| P2 | Expor pessoas ou dados de certificado sem autorização | Validar direitos e enquadramento antes da publicação |
| P3 | Repetir biografia em várias rotas | Manter `/sobre/` como destino principal e resumos nas demais |

## Critérios de aceite para implementação

- As seis rotas devem usar a hierarquia definida neste documento.
- Toda copy implementada deve apontar para uma fonte e faixa de linhas daqui.
- Nenhum curso, módulo, resultado, depoimento ou credencial adicional pode ser inventado.
- Claims legados devem manter a classificação `KEEP_AS_APPROVED_LEGACY_CLAIM`.
- Valores comerciais atuais devem estar preenchidos e aprovados antes de publicação.
- O contrato `Course` deve controlar modalidade, duração, certificado, suporte, checkout e status.
- A identidade deve usar as versões de logo, paleta e tipografia registradas aqui.
- A seleção de assets deve respeitar prioridade, função visual e otimização futura.
- Nenhum conteúdo do negócio físico pode aparecer na copy final das rotas novas.
- Nenhuma foto de pessoa pode ser usada como depoimento sem texto real e autorização.
- Nenhuma URL antiga pode ser removida antes dos blocos de conteúdo real, redirects e qualidade.
- O build final deve continuar estático, sem SSR, backend próprio ou Node em produção.

## Registro de não implementação

Este bloco criou somente documentação. Não alterou o site legado, o projeto Astro, CSS, JavaScript, imagens, `.htaccess`, dependências, redirects ou conteúdo publicável.
