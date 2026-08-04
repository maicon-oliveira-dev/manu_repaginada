# Manu Rosa Cursos — Documento Mestre de Conteúdo

## 1. Objetivo e regras editoriais

Este documento organiza o conteúdo editorial e o banco de imagens do novo site Manu Rosa Cursos antes de novas alterações no projeto Astro.

- O site legado — `index.html`, `pages/` e `assets/` — é a fonte editorial primária.
- O projeto `astro-site/` é a nova estrutura de apresentação e permanece separado do legado.
- `docs/manu-cursos/LEGACY-CONTENT-MAPPING.md` é uma fonte de apoio; todo texto registrado aqui foi reconferido no HTML original indicado.
- Textos entre aspas são transcrições literais. Quebras de linha e marcação HTML podem ser normalizadas apenas para leitura em Markdown.
- Resumos, observações e perguntas derivadas são identificados explicitamente e não devem ser tratados como copy publicada.
- Ofertas parecidas não são automaticamente equivalentes. Curso completo, curso profissionalizante, Confeitaria Básica, workshops, in company e a menção a aulas online permanecem separados.
- Datas, duração, quantidade de aulas, modalidade, preço, disponibilidade, certificado, canais, checkout e matrícula não são considerados atuais sem confirmação da cliente.
- Claims publicados no legado são conteúdo anteriormente aprovado, não verificação independente.
- Encomendas, delivery, cardápios, casamentos, festas, Páscoa, campanhas e catálogos físicos não devem migrar para a arquitetura educacional.
- Nenhuma fotografia com aluno, turma, convidado ou certificado deve ser publicada sem revisão de autorização e contexto.

Classificações utilizadas: `KEEP_EXACT`, `EXCERPT_EXACT`, `LIGHT_EDIT_LATER`, `MERGE_WITH_CAUTION`, `NEEDS_CLIENT_CONFIRMATION`, `KEEP_AS_APPROVED_LEGACY_CLAIM`, `EXCLUDE_PHYSICAL_BUSINESS`, `EXCLUDE_OBSOLETE`, `DUPLICATE` e `CONFLICT`.

## 2. Home

A Home deve funcionar como resumo editorial e caminho para as páginas internas. Ela não deve reproduzir o catálogo completo, publicar detalhes comerciais pendentes ou substituir a página `/cursos/`.

| Elemento | Texto original | Fonte e linhas | Imagem | Situação | Observação |
| --- | --- | --- | --- | --- | --- |
| Hero — título | “Aprenda Confeitaria com a Chef Manu Rosa” | `pages/cursos-presenciais.html:75–76` — tema: apresentação dos cursos | `assets/img/cursos/01_manu_rosa_batendo_massa.png` ou `assets/img/img_2/banner4.jpg` | `KEEP_EXACT` | Texto educacional, sem dado comercial variável. |
| Hero — introdução | “Entre para o mundo da confeitaria com quem une experiência, técnica e trajetória reconhecida.” | `pages/cursos-presenciais.html:77` — tema: apresentação dos cursos | Mesmas opções do hero | `KEEP_EXACT` | “trajetória reconhecida” é claim editorial legado. |
| Hero — apoio | “Aprenda com quem tem experiência, desenvolva repertório técnico e avance com mais segurança no universo da confeitaria.” | `pages/cursos-presenciais.html:78` — tema: aprendizado | Mesmas opções do hero | `KEEP_EXACT` | Pode ser usado sem números ou oferta comercial. |
| Introdução — formação | “Uma experiência pensada para quem deseja aprender com profundidade e segurança.” | `pages/cursos-presenciais.html:94–96` — tema: formação e prática | `assets/img/cursos/01_manu_rosa_batendo_massa.png` | `KEEP_EXACT` | Texto editorial reaproveitável. |
| Introdução — escopo | “Da base técnica ao refinamento do acabamento, os cursos aproximam prática real, repertório e evolução profissional.” | `pages/cursos-presenciais.html:97` — tema: formação e prática | `assets/img/cursos/03_preparo_massa_na_tigela.jpeg` | `LIGHT_EDIT_LATER` | “evolução profissional” não deve ser convertida em garantia de resultado. |
| Cursos em destaque — curso de confeitaria | “30 aulas que te habilitam a atuar como confeiteira profissional.” | `index.html:224–227` — oferta: Curso de Confeitaria | `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0029.jpg` | `CONFLICT` + `NEEDS_CLIENT_CONFIRMATION` | Conflita com “mais de 30 aulas” e com o profissionalizante de oito meses. |
| Cursos em destaque — Confeitaria Básica | “Confeitaria Básica 12 aulas para começar do zero com a Manu.” | `index.html:228` — oferta: Confeitaria Básica | `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0042.jpg` | `NEEDS_CLIENT_CONFIRMATION` | Manter separada do curso completo e do profissionalizante. |
| Cursos em destaque — workshops | “Workshops Aprenda receitas exclusivas de bolos, pães, tortas e doces sazonais para diferentes épocas do ano.” | `index.html:230–231` — oferta: workshops | `assets/img/img_2/banner3.jpg` | `NEEDS_CLIENT_CONFIRMATION` | Confirmar agenda e temas atuais. |
| Cursos em destaque — presença | “Vivências presenciais na confeitaria, turmas reduzidas e foco em receitas que vendem e encantam.” | `index.html:307–311` — oferta: workshops e aulas | `assets/img/cursos/07_turma_selfie_oficina.jpeg` | `NEEDS_CLIENT_CONFIRMATION` | Modalidade, tamanho de turma e disponibilidade podem ter mudado. |
| Método — título | “Técnica, prática e experiência real” | `pages/cursos-presenciais.html:169–170` — tema: método | `assets/img/cursos/03_preparo_massa_na_tigela.jpeg`; `assets/img/cursos/05_maos_modelando_massa.jpeg` | `KEEP_EXACT` | Texto-base do método. |
| Método — descrição | “Aulas pensadas para quem deseja aprender com profundidade, colocar a mão na massa e desenvolver segurança no preparo, na execução e no acabamento.” | `pages/cursos-presenciais.html:171` — tema: método | Mesmas imagens do método | `KEEP_EXACT` | Conteúdo editorial reaproveitável. |
| Apresentação da Manu | “Ao longo dessa trajetória, desenvolvi uma forma de ensinar que une técnica, proximidade e experiência real para quem deseja entrar ou evoluir no universo da confeitaria.” | `pages/cursos-presenciais.html:114` — tema: proposta pedagógica | `assets/img/cursos/02_manu_rosa_retrato.jpeg` ou `assets/imagens novas/Manu-142.JPG` | `KEEP_EXACT` | Fonte institucional concisa. |
| Comunidade | “Receitas testadas, técnica consistente e uma experiência de aprendizado pensada para quem deseja evoluir de verdade na confeitaria.” | `pages/cursos-presenciais.html:206–208` — tema: aprendizado em turma | `assets/img/cursos/07_turma_selfie_oficina.jpeg` | `LIGHT_EDIT_LATER` | Revisar “de verdade” apenas em etapa de copy. |
| E-books — apresentação | “Cookbook e E-book Biscoitos de Natal para você vender mais, presentear e ter receitas testadas.” | `index.html:313–317` — tema: materiais digitais | Capas de cada produto | `NEEDS_CLIENT_CONFIRMATION` | Confirmar quais produtos continuam disponíveis. |
| E-books — Cookbook | “As receitas queridinhas da Manu, direto do caderno para a sua cozinha: bolos fofinhos, fáceis de fazer, com rendimento pensado para vender, encantar a família e transformar o simples bolo caseiro em renda extra com carinho e profissionalismo” | `index.html:346–355` — produto: Cookbook | `assets/img/img_2/banner2.jpg` | `LIGHT_EDIT_LATER` + `NEEDS_CLIENT_CONFIRMATION` | Disponibilidade e link dependem da cliente. |
| E-books — Biscoitos de Natal | “Biscoitos de Natal: aprenda as receitas de biscoitos preferidas da Manu, testadas e aprovadas por ela, perfeitas para presentear, vender e lucrar nessa época tão especial.” | `index.html:359–365` — produto: E-book Biscoitos de Natal | `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 08.42.41_dc389897.jpg` | `LIGHT_EDIT_LATER` + `NEEDS_CLIENT_CONFIRMATION` | Sazonalidade, edição e disponibilidade precisam ser confirmadas. |
| CTA final — título | “Vou adorar ter você como meu aluno” | `pages/cursos-presenciais.html:330–332` — tema: próximo passo | `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | `KEEP_EXACT` | Pode apontar para `/cursos/` antes de existir CTA comercial. |
| CTA final — contato | “Para mais informações sobre datas, valores e cronogramas, entre em contato pelo nosso WhatsApp.” | `pages/cursos-presenciais.html:333–338` — tema: contato de cursos | `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | `NEEDS_CLIENT_CONFIRMATION` | Número, finalidade e mensagem do WhatsApp precisam ser confirmados. |

## 3. Cursos

As fichas abaixo são independentes. Nenhum dado deve ser transferido de uma ficha para outra sem confirmação explícita da cliente.

### Curso completo de Confeitaria

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | “Curso completo de Confeitaria” — `pages/cursos-presenciais.html:138–141`; `KEEP_EXACT`. |
| Texto original | “Curso semestral completo, com mais de 30 aulas, pensado para habilitar a aluna a atuar como confeiteira profissional.” |
| Fonte e linhas | `pages/cursos-presenciais.html:138–142` — oferta: Curso completo de Confeitaria; `NEEDS_CLIENT_CONFIRMATION`. Há também “Curso de Confeitaria” e “30 aulas que te habilitam a atuar como confeiteira profissional” em `index.html:224–227`; `CONFLICT`. |
| Público | Literal: “a aluna”; objetivo publicado: atuar como confeiteira profissional. Fonte: `pages/cursos-presenciais.html:141`; `NEEDS_CLIENT_CONFIRMATION`. |
| Conteúdo ensinado | Não há grade própria publicada para esta oferta. Não importar a grade do profissionalizante. |
| Imagens associadas | `assets/img/cursos/04_turma_com_bolos.jpeg` aparece no bloco geral de modalidades em `pages/cursos-presenciais.html:132–141`; associação `COURSE_CARD`, não exclusiva. |
| Dados temporais encontrados | “semestral”; “mais de 30 aulas” em `pages/cursos-presenciais.html:141`; “30 aulas” em `index.html:226`; `CONFLICT`. |
| Dados comerciais encontrados | Nenhum preço, calendário, local, matrícula ou checkout específico. |
| Conflitos | Pode ser ou não o mesmo produto que o profissionalizante de oito meses. Volume de aulas diverge entre 30 e mais de 30. |
| Pode publicar agora | Não como oferta atual. Apenas o registro histórico, marcado `NEEDS_CLIENT_CONFIRMATION`. |
| Pendência da cliente | Nome oficial, relação com o profissionalizante, status, duração, número de aulas, grade, modalidade, local, certificado, preço, calendário e matrícula. |

### Curso profissionalizante de confeitaria

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | Trecho literal: “curso profissionalizante de confeitaria” — `pages/cursos-presenciais.html:217–222`; `EXCERPT_EXACT`. O heading desta ficha normaliza apenas a inicial maiúscula para organização documental. |
| Texto original | “Confeitaria Francesa, Brasileira e Americana”; “9 aulas de bolos”; “Tortas, doces finos e sobremesas”; “Massa folhada e macarons”; “Chocolates e temperagem”; “Outras receitas incríveis”; “Formação de custo e produto”; “Boas práticas de fabricação”; “Certificado de conclusão”; “Aulas uma vez por semana”; “8 meses de duração”; “Horários matutino e noturno”. |
| Fonte e linhas | `pages/cursos-presenciais.html:217–264` — oferta: profissionalizante; dados temporais/comerciais em `NEEDS_CLIENT_CONFIRMATION`. |
| Público | Não declarado literalmente no bloco. O contexto geral atende quem quer “aprender, se aperfeiçoar ou desenvolver novas possibilidades profissionais” em `pages/cursos-presenciais.html:127–129`; associação genérica, não exclusiva. |
| Conteúdo ensinado | Bolos; tortas; doces finos; sobremesas; massa folhada; macarons; chocolates; temperagem; custo e produto; boas práticas. |
| Imagens associadas | `assets/img/cursos/09_macarons.jpeg`, `08_bolo_com_frutas_vermelhas.jpeg` e `10_temperagem_chocolate.jpeg`, explicitamente no bloco em `pages/cursos-presenciais.html:225–235`; `COURSE_DETAIL`. |
| Dados temporais encontrados | Uma aula por semana; oito meses; horários matutino e noturno. |
| Dados comerciais encontrados | Certificado de conclusão. Nenhum preço, datas, local, vagas ou checkout. |
| Conflitos | Relação desconhecida com o curso completo semestral de 30/30+ aulas. “9 aulas de bolos” não deve ser apresentado como carga total. |
| Pode publicar agora | Não como oferta vigente; `NEEDS_CLIENT_CONFIRMATION`. |
| Pendência da cliente | Relação com curso completo, nome, status, programa vigente, carga horária, duração, frequência, turnos, modalidade, local, certificado, preço e matrícula. |

### Confeitaria Básica

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | “Confeitaria Básica” — `index.html:228,257–263`; `KEEP_EXACT`. |
| Texto original | “Confeitaria Básica para aprender com base e segurança”; “Um curso pensado para quem começa do zero e quer avançar com clareza até um bolo recheado lindo e bem-feito.”; “3 meses de duração”; “12 aulas”; “Do zero ao bolo recheado”. |
| Fonte e linhas | `index.html:252–275` — oferta: Confeitaria Básica; `NEEDS_CLIENT_CONFIRMATION`. |
| Público | “quem começa do zero” — `index.html:259`; `KEEP_EXACT`. |
| Conteúdo ensinado | O legado declara o marco literal “Do zero ao bolo recheado”, sem grade detalhada. |
| Imagens associadas | `assets/img/img_2/banner4.jpg` e `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0042.jpg`, explicitamente no slide em `index.html:252–275`; `COURSE_CARD`. |
| Dados temporais encontrados | Três meses; 12 aulas. |
| Dados comerciais encontrados | CTA para página de cursos e WhatsApp sobre “próxima turma”; nenhum preço, data ou checkout. |
| Conflitos | Não deve ser confundido com curso completo ou profissionalizante. |
| Pode publicar agora | Não como oferta atual; `NEEDS_CLIENT_CONFIRMATION`. |
| Pendência da cliente | Status, nome oficial, modalidade, local, calendário, frequência, carga horária, programa, certificado, preço, vagas e matrícula. |

### Workshops, oficinas e aulas especiais

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | “Workshops”; “Aulas & Workshops especiais”; “Aulas especiais com chefs convidados” — `pages/cursos-presenciais.html:144–147,192–197`; `index.html:335–341`; possível `DUPLICATE`/sobreposição. |
| Texto original | “Aprenda receitas específicas e muito especiais, como bolos, cookies, brownies, cucas, pães, tortas salgadas, além de receitas sazonais para diferentes épocas do ano.”; “Contamos também com chefs convidados para aulas especiais, ampliando o repertório, a vivência de mercado e a experiência de aprendizagem.” |
| Fonte e linhas | `pages/cursos-presenciais.html:144–148,185–198`; `index.html:224–240,307–311,331–342` — oferta: workshops/aulas especiais; `NEEDS_CLIENT_CONFIRMATION`. |
| Público | Não especificado por workshop. O texto geral contempla aprendizado e aperfeiçoamento em `pages/cursos-presenciais.html:127–129`. |
| Conteúdo ensinado | Bolos, cookies, brownies, cucas, pães, tortas salgadas, receitas sazonais e temas de convidados. |
| Imagens associadas | `assets/img/img_2/banner3.jpg`; `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg`; `assets/img/cursos/07_turma_selfie_oficina.jpeg`; `COURSE_DETAIL`/`CLASSROOM`. |
| Dados temporais encontrados | Nenhuma data ou duração. A Home contém CTA sobre próximas aulas. |
| Dados comerciais encontrados | CTAs para central e WhatsApp; nenhum preço ou checkout. |
| Conflitos | Workshop, oficina e aula especial podem ser formatos diferentes ou nomes sobrepostos. Edu Bacon aparece como convidado, sem confirmação de participação atual. |
| Pode publicar agora | Apenas como categoria histórica/editorial; agenda e oferta em `NEEDS_CLIENT_CONFIRMATION`. |
| Pendência da cliente | Taxonomia, temas ativos, agenda, duração, público, nível, convidados, preço, vagas, local e matrícula. |

### In company e desenvolvimento de cardápios

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | “Cursos in company e desenvolvimento de cardápios e pratos” — `pages/cursos-presenciais.html:156–159`; `KEEP_EXACT`. |
| Texto original | “Aprimore o cardápio do seu restaurante com receitas consagradas da Manu Rosa Bakery e uma leitura mais estratégica da produção.” |
| Fonte e linhas | `pages/cursos-presenciais.html:156–160` — oferta: consultoria prática/in company; `NEEDS_CLIENT_CONFIRMATION`. |
| Público | Restaurantes, conforme referência literal ao “seu restaurante”. |
| Conteúdo ensinado | Desenvolvimento de cardápios e pratos; receitas e leitura da produção. Escopo detalhado ausente. |
| Imagens associadas | Nenhuma imagem específica. Não associar automaticamente fotos de cursos gerais. |
| Dados temporais encontrados | Nenhum. |
| Dados comerciais encontrados | Nenhum preço, formato, local, proposta ou CTA específico. |
| Conflitos | O título mistura “cursos”, desenvolvimento e consultoria; natureza do serviço precisa ser definida. |
| Pode publicar agora | Não; `NEEDS_CLIENT_CONFIRMATION`. |
| Pendência da cliente | Natureza da oferta, público, entregáveis, modalidade, local, duração, preço, disponibilidade e contato. |

### Menção a aulas online

| Campo | Conteúdo |
| --- | --- |
| Nome publicado | Não existe nome de produto online. |
| Texto original | “Além disso, temos um espaço voltado para o ensino de confeitaria, com aulas não na massa presencial e on-line.” |
| Fonte e linhas | `pages/central-de-links.html:212–220` — tema: menção isolada a modalidade; `NEEDS_CLIENT_CONFIRMATION`. A expressão “não na massa” parece erro editorial e deve permanecer sem correção nesta extração. |
| Público | Não informado. |
| Conteúdo ensinado | Não informado. |
| Imagens associadas | `assets/img/img_2/galeria/manu4.jpg` aparece no mesmo bloco, mas não comprova oferta online; `DO_NOT_USE` como associação de produto. |
| Dados temporais encontrados | Nenhum. |
| Dados comerciais encontrados | Nenhum. |
| Conflitos | A página principal de cursos se apresenta como presencial; não existe página, programa ou checkout online. |
| Pode publicar agora | Não. A menção não sustenta um curso online. |
| Pendência da cliente | Existência atual, nome, formato, plataforma, conteúdo, duração, acesso, suporte, certificado, preço e checkout. |

### Estrutura editorial da página geral de Cursos

A estratégia editorial permanece: página geral `/cursos/` agora; páginas individuais somente depois da confirmação dos dados de cada oferta. Esta etapa não decide nem cria rotas individuais.

1. apresentação dos cursos;
2. método de ensino;
3. ofertas mantidas separadas;
4. técnicas e conteúdos confirmados;
5. workshops, oficinas e aulas especiais;
6. apresentação da professora;
7. resultados, turmas e certificado somente após confirmação dos claims e direitos de imagem;
8. FAQ educacional futuro, com respostas aprovadas;
9. CTA condicionado ao canal educacional atual.

### Bloqueio de dados comerciais e temporais

Todos os valores abaixo estão em `NEEDS_CLIENT_CONFIRMATION` e não podem ser apresentados como atuais ou publicáveis:

- duração, carga horária, quantidade de aulas, frequência, turnos, datas e horários;
- modalidade, local, calendário, vagas, status de turma e disponibilidade;
- preço, parcelamento, formas de pagamento, matrícula e checkout;
- certificado e regras de emissão;
- telefone, WhatsApp, e-mail, grupos e demais canais;
- forma de acesso, período de acesso, entrega, suporte e bônus;
- número de alunos, negócios abertos, alunos em atividade e demais resultados quantitativos.

## 4. Método de ensino

| Tema | Texto original | Fonte e linhas | Classificação |
| --- | --- | --- | --- |
| Técnica e trajetória | “Entre para o mundo da confeitaria com quem une experiência, técnica e trajetória reconhecida.” | `pages/cursos-presenciais.html:75–77` — tema: apresentação | `KEEP_EXACT` |
| Repertório e segurança | “Aprenda com quem tem experiência, desenvolva repertório técnico e avance com mais segurança no universo da confeitaria.” | `pages/cursos-presenciais.html:78` — tema: aprendizado | `KEEP_EXACT` |
| Profundidade | “Uma experiência pensada para quem deseja aprender com profundidade e segurança.” | `pages/cursos-presenciais.html:94–96` — tema: formação | `KEEP_EXACT` |
| Base e acabamento | “Da base técnica ao refinamento do acabamento, os cursos aproximam prática real, repertório e evolução profissional.” | `pages/cursos-presenciais.html:97` — tema: formação | `LIGHT_EDIT_LATER` |
| Proximidade | “Ao longo dessa trajetória, desenvolvi uma forma de ensinar que une técnica, proximidade e experiência real para quem deseja entrar ou evoluir no universo da confeitaria.” | `pages/cursos-presenciais.html:114` — tema: proposta pedagógica | `KEEP_EXACT` |
| Processos e confiança | “Uma experiência de aprendizado feita para quem quer desenvolver técnica, entender os processos e confeitar com mais confiança, seja para casa ou para vender.” | `pages/cursos-presenciais.html:150–153` — tema: formação presencial | `NEEDS_CLIENT_CONFIRMATION` para modalidade; restante `KEEP_EXACT` |
| Mão na massa | “Aulas pensadas para quem deseja aprender com profundidade, colocar a mão na massa e desenvolver segurança no preparo, na execução e no acabamento.” | `pages/cursos-presenciais.html:166–171` — tema: método | `KEEP_EXACT` |
| Convidados | “Contamos também com chefs convidados para aulas especiais, ampliando o repertório, a vivência de mercado e a experiência de aprendizagem.” | `pages/cursos-presenciais.html:185–194` — tema: aulas especiais | `NEEDS_CLIENT_CONFIRMATION` |
| Turma | “Receitas testadas, técnica consistente e uma experiência de aprendizado pensada para quem deseja evoluir de verdade na confeitaria.” | `pages/cursos-presenciais.html:203–208` — tema: comunidade | `LIGHT_EDIT_LATER` |

## 5. Sobre a Manu

| Claim original | Fonte | Pode envelhecer | Situação | Confirmação |
| --- | --- | --- | --- | --- |
| “Olá, sou a Manu Rosa, sou chef pâtissier!!” | `pages/sobre.html:65–70` — apresentação | Não | `LIGHT_EDIT_LATER` | Corrigir repetição e pontuação apenas na etapa de copy. |
| “Trabalho com doces há mais de 15 anos e há mais de 10 anos dou aulas de confeitaria.” | `pages/sobre.html:70` — experiência | Sim | `KEEP_AS_APPROVED_LEGACY_CLAIM` + `CONFLICT` | Não recalcular; confrontar com “desde 2006” (`pages/cursos-presenciais.html:113`), “Desde 2012” (`pages/cursos-presenciais.html:281–284`) e “quase 20 anos” (`index.html:385–387`). |
| “Comecei fazendo cookies americanos (primeiro produto que vendi na vida!) e bolachas decoradas, que são tradicionais na minha cidade, e fui me apaixonando cada vez mais pela confeitaria!” | `pages/sobre.html:82–90` — início da trajetória | Não | `EXCERPT_EXACT` | Produtos aparecem como história, não como ofertas atuais. |
| “Sempre buscando conhecimento, fiz um curso de chef de cozinha em Curitiba-PR e tive a oportunidade de fazer uma especialização em Confeitaria na ENSP, na França!” | `pages/sobre.html:93–100` — formação/França | Pouco | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Confirmar nome oficial da formação e instituição antes de publicação definitiva. |
| “Quando retornei, passei a dar aulas e continuei com minhas encomendas!” | `pages/sobre.html:94–100` — início como professora | Não datado | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Migrar apenas a passagem a professora; encomendas são contexto histórico. |
| “Em 2016 participei do programa “Que Seja Doce” no Canal GNT e ganhei o episódio chá de bebê!” | `pages/sobre.html:103–108` — GNT | Não | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Confirmar grafia/título oficial e evidência. |
| “Em 2018 engravidei do meu filho Noah e ao mesmo tempo, da minha própria confeitaria, a Manu Rosa Bakery!” | `pages/sobre.html:110–115` — trajetória | Não | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Contexto biográfico; revisar privacidade e pertinência editorial. |
| “Foram 6 anos lindos adoçando a vida de muita gente.” | `pages/sobre.html:111–115` — Bakery | Sim/contextual | `NEEDS_CLIENT_CONFIRMATION` | Confirmar período e se deve integrar a narrativa educacional. |
| “Hoje, sou proprietária da Manu Rosa Bakery, onde preparamos bolos e doces e dou workshops e cursos na área da Confeitaria.” | `pages/sobre.html:118–120` — experiência atual | Sim | `NEEDS_CLIENT_CONFIRMATION` | Separar operação física; confirmar situação atual de propriedade, cursos e workshops. |
| “A cozinha é minha paixão e adoro passar meu conhecimento! Me sinto muito realizada ensinando e vendo meus alunos fazendo seus doces!” | `pages/sobre.html:123–126` — missão | Não | `LIGHT_EDIT_LATER` | Conteúdo editorial educacional reaproveitável. |
| “Tenho certeza que minha missão de vida é adoçar a vida das pessoas e ensinar meus alunos a prosperarem com isto!” | `pages/sobre.html:126–128` — missão | Não | `LIGHT_EDIT_LATER` | Preservar a voz; evitar transformar “prosperarem” em promessa garantida. |
| “ENSP (França) • École Ducasse / Sommet Education • Chef de Cozinha – Curitiba/PR • Vencedora “Que Seja Doce” (GNT)” | `pages/sobre.html:131–133` — credenciais | Pouco | `KEEP_AS_APPROVED_LEGACY_CLAIM` | Confirmar nomes oficiais e vínculo entre ENSP, École Ducasse e Sommet Education. |
| “Sou formada chef de cozinha, com especialização em Pâtisserie na França. Também fui vencedora do programa Que Seja Doce, no canal GNT, e trabalho com doces desde 2006.” | `pages/cursos-presenciais.html:112–114` — apresentação concisa | Sim em parte | `KEEP_AS_APPROVED_LEGACY_CLAIM` | “desde 2006” é preferível a contagem relativa, mas continua dependendo de aprovação. |
| “Desde 2012”; “Atuação com aulas e workshops” | `pages/cursos-presenciais.html:281–284` — ensino | Sim em uso editorial | `MERGE_WITH_CAUTION` + `KEEP_AS_APPROVED_LEGACY_CLAIM` | São dois elementos HTML do mesmo card, não uma frase literal única. Não calcular quantidade de anos. |
| “+800”; “Alunos formados” | `pages/cursos-presenciais.html:285–287` — resultados | Sim | `MERGE_WITH_CAUTION` + `NEEDS_CLIENT_CONFIRMATION` | São dois elementos HTML do mesmo card. Solicitar data-base e evidência. |
| “+170”; “Trajetórias acompanhadas com resultados alcançados” | `pages/cursos-presenciais.html:289–292` — resultados | Sim | `MERGE_WITH_CAUTION` + `NEEDS_CLIENT_CONFIRMATION` | São dois elementos HTML do mesmo card. Claim ambíguo; solicitar significado e evidência. |
| “+10”; “Confeitarias abertas por alunos” | `pages/cursos-presenciais.html:293–295` — resultados | Sim | `MERGE_WITH_CAUTION` + `NEEDS_CLIENT_CONFIRMATION` | São dois elementos HTML do mesmo card. Solicitar data-base e evidência. |
| “+100”; “Alunos que atuam como confeiteiros” | `pages/cursos-presenciais.html:297–299` — resultados | Sim | `MERGE_WITH_CAUTION` + `NEEDS_CLIENT_CONFIRMATION` | São dois elementos HTML do mesmo card. Solicitar data-base e evidência. |

## 6. E-books e materiais

### Cookbook Bolos Caseiros

| Campo | Conteúdo |
| --- | --- |
| Nome | “Cookbook – Bolos Caseiros da Manu Rosa” — `index.html:118–120,165–168`; `KEEP_EXACT`. |
| Descrição original | “Aprenda receitas de bolos caseiros fofinhos, com o sabor e a leveza que fizeram da Manu Rosa referência em confeitaria.” — `index.html:119–121`; “São massas, recheios e dicas que você pode aplicar hoje mesmo na sua cozinha. Um e-book completo para quem quer transformar paixão por doces em resultado.” — `index.html:165–172`; `LIGHT_EDIT_LATER`. |
| Fonte | `index.html:115–128,157–181,346–355`; `pages/central-de-links.html:109–120,309–317` — produto: Cookbook. |
| Imagens | `assets/img/img_2/banner1.jpg`, `assets/img/img_2/banner2.jpg`, `assets/imagens novas/Anúncios - Bolos Caseiros -.png`; as descrições de `banner1.jpg` variam no legado e exigem curadoria. |
| Link encontrado | Kpages: `https://chefmanurosa1651954297.kpages.online/cook-book-bolos-caseiros-da-manu-rosa-62c773f1-3252-4aa1-9d22-e9de89b1f69a`; `NEEDS_CLIENT_CONFIRMATION`. |
| Preço encontrado | Nenhum. |
| Pode publicar | Não como produto disponível. Nome e descrição podem ser preparados, mas status/link exigem confirmação. |
| Pendência | Edição vigente, conteúdo, disponibilidade, preço, checkout, acesso, suporte e capa oficial. |

### E-book Biscoitos de Natal

| Campo | Conteúdo |
| --- | --- |
| Nome | “🍪 E-book Biscoitos de Natal” — `pages/ebook.html:92–98`; “E-book Biscoitos de Natal da Chef Manu Rosa” — `index.html:189–198`; `KEEP_EXACT`. |
| Descrição original | “Nada representa mais o espírito natalino do que o cheirinho de biscoitos saindo do forno! Neste e-book, reuni minhas receitas preferidas e testadas de biscoitos natalinos — perfeitas para presentear, vender e lucrar nessa época tão especial. Se você ama o Natal e quer transformar essa paixão em uma renda extra deliciosa, este e-book é pra você!” — `pages/ebook.html:100–106`; `LIGHT_EDIT_LATER`. |
| Fonte | `pages/ebook.html:84–249,277–386`; `index.html:189–217,359–365`; `pages/central-de-links.html:123–134`. |
| Imagens | `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png`; `assets/img/booknatalimg/*`; `assets/img/ebook/*`; `assets/imagens novas/Biscoitos de Natal.png`; `assets/imagens novas/biscoito.png`. |
| Link encontrado | Hotmart: `https://hotmart.com/pt-br/marketplace/produtos/biscoistos-de-natal-chef-manu-rosa/Q103166087R` — `pages/ebook.html:328–338`; `NEEDS_CLIENT_CONFIRMATION`. |
| Preço encontrado | `aria-label="Comprar agora por R$ 29,90"` em `pages/ebook.html:333–334`; não há preço visual preenchido. `NEEDS_CLIENT_CONFIRMATION`. |
| Pode publicar | Não como oferta atual. Texto editorial, sumário e benefícios podem ser preparados após confirmar a edição. |
| Pendência | Disponibilidade, sazonalidade, edição vigente, sumário, preço, checkout, garantia, entrega, acesso, suporte, validade técnica e capa oficial. |

Conteúdo literal do produto, a confirmar contra a edição vigente:

- “Medidas precisas + rendimento”; “Tempo de forno & ponto ideal”; “Armazenamento, validade e embalagem” — `pages/ebook.html:109–113`; tema: benefícios; `NEEDS_CLIENT_CONFIRMATION`.
- Quinze receitas listadas em `pages/ebook.html:194–216`; tema: sumário; `KEEP_EXACT` condicionado à confirmação da edição.
- “📘 E-book em PDF”; “🍪 Receitas testadas”; “📏 Medidas precisas”; “⏲️ Forno & Ponto”; “🗃️ Armazenamento & Validade” — `pages/ebook.html:277–303`; tema: entregáveis; `NEEDS_CLIENT_CONFIRMATION`.
- “sem recheio (~3 meses) e recheados (até 1 semana)” — `pages/ebook.html:159–163,220–228`; tema: validade; `NEEDS_CLIENT_CONFIRMATION`.
- “Pagamento seguro • Acesso imediato • PDF para imprimir” — `pages/ebook.html:116–121`; tema: acesso; `NEEDS_CLIENT_CONFIRMATION`.

### Cookie Box

| Campo | Conteúdo |
| --- | --- |
| Nome | “🎁 Bônus Exclusivo: Como montar sua Cookie Box de Natal!” — `pages/ebook.html:233–237`; possível bônus, não produto independente confirmado. |
| Descrição original | “Dicas de combinação de sabores”; “Como montar a sua cookie box natalina e lucrar muito neste Natal!”; “Ideias para presentear e vender mais!”; “Dicas para não errar na sua produção natalina!” — `pages/ebook.html:237–243`. |
| Fonte | `pages/ebook.html:179–185,233–249,305–339`; `index.html:189–213`; produto relacionado: E-book Biscoitos de Natal. |
| Imagens | `assets/imagens novas/Cookie Box.png`; `assets/imagens novas/Bonus.png`; possíveis apoios em `assets/img/booknatalimg/`. |
| Link encontrado | Nenhum link independente. Está associado ao checkout do e-book natalino. |
| Preço encontrado | Nenhum preço independente. |
| Pode publicar | Não como produto independente. Publicar como bônus somente se a inclusão atual for confirmada. |
| Pendência | Inclusão, conteúdo vigente, regras de acesso, disponibilidade e imagem oficial. |

## 7. Dúvidas educacionais

O FAQ de `pages/faq.html:65–135` trata de encomendas, retirada, entrega, conservação e pagamento de produtos físicos e está classificado como `EXCLUDE_PHYSICAL_BUSINESS`.

### Perguntas e respostas literais do e-book

| Tema | Pergunta original | Resposta original | Fonte e linhas | Situação |
| --- | --- | --- | --- | --- |
| Acesso | “Como recebo o e-book?” | “Após a compra, o acesso ao PDF é imediato pelo e-mail informado no checkout.” | `pages/ebook.html:350–354` | `NEEDS_CLIENT_CONFIRMATION` |
| Pré-requisito | “É indicado para iniciantes?” | “Sim! Receitas com medidas exatas, dicas de produção e acabamento.” | `pages/ebook.html:356–361` | `KEEP_EXACT` para proposta; edição atual a confirmar |
| Uso | “Posso vender os biscoitos?” | “Esse é o objetivo! O material traz quantidades precisas, rendimento, embalagem e validade para você vender com segurança.” | `pages/ebook.html:363–368` | `LIGHT_EDIT_LATER` + `NEEDS_CLIENT_CONFIRMATION` |
| Bônus | “O bônus Cookie Box está incluso?” | “Sim, o guia de Cookie Box de Natal já está incluso.” | `pages/ebook.html:372–377` | `NEEDS_CLIENT_CONFIRMATION` |
| Suporte | “E se eu tiver problemas com o download?” | “Basta responder ao e-mail de confirmação; nossa equipe atende e resolve.” | `pages/ebook.html:379–384` | `NEEDS_CLIENT_CONFIRMATION` |

### Perguntas derivadas para futura validação

Estas perguntas não são textos literais do legado. Foram derivadas de informações publicadas e não possuem resposta nova aprovada.

| Tema | Pergunta derivada | Evidência de origem | Classificação |
| --- | --- | --- | --- |
| Cursos | Como funcionam as aulas? | Prática, técnica e acabamento em `pages/cursos-presenciais.html:94–97,166–180` | `LIGHT_EDIT_LATER` |
| Modalidade | Quais cursos são presenciais? Existem aulas online? | `pages/cursos-presenciais.html:75–86,150–153`; menção online em `pages/central-de-links.html:212–220` | `NEEDS_CLIENT_CONFIRMATION` |
| Pré-requisitos | Preciso ter experiência para participar? | Apenas Confeitaria Básica declara “quem começa do zero”, `index.html:257–263` | `NEEDS_CLIENT_CONFIRMATION` |
| Duração | Qual é a duração de cada curso? | Três meses em `index.html:261`; oito meses em `pages/cursos-presenciais.html:260–262`; semestral em `pages/cursos-presenciais.html:141` | `CONFLICT` |
| Certificado | Quais cursos oferecem certificado? | Certificado aparece apenas no profissionalizante, `pages/cursos-presenciais.html:249–254` | `NEEDS_CLIENT_CONFIRMATION` |
| Calendário | Quando começam as próximas turmas? | CTA de “próxima turma” em `index.html:266–268`; nenhuma data publicada | `NEEDS_CLIENT_CONFIRMATION` |
| Matrícula | Como faço a matrícula? | WhatsApp em `pages/cursos-presenciais.html:330–339`; nenhum fluxo de matrícula | `NEEDS_CLIENT_CONFIRMATION` |
| Pagamento | Como funciona o pagamento? | Checkout externo do e-book em `pages/ebook.html:328–339`; cursos sem dados | `NEEDS_CLIENT_CONFIRMATION` |

## 8. Contatos e links

| Canal | Valor encontrado | Fonte | Finalidade | Situação |
| --- | --- | --- | --- | --- |
| WhatsApp | `+55 47 99655-2618` / `(47) 99655-2618` | `pages/cursos-presenciais.html:84–85,116–119,330–338`; `pages/central-de-links.html:80–92,343–350`; `index.html:206,238–239,267–268` | Atendimento geral, cursos, próximas aulas e e-book | `NEEDS_CLIENT_CONFIRMATION`; contexto atual mistura educação e físico |
| Instagram | `@manurosabakery` / `https://www.instagram.com/manurosabakery/` | `pages/cursos-presenciais.html:116–118`; `pages/sobre.html:71–73`; `index.html:406–416` | Marca, conteúdo e contato secundário | `NEEDS_CLIENT_CONFIRMATION` como canal educacional atual |
| Grupo VIP de Confeitaria | `https://chat.whatsapp.com/LSCwCOr6rKFDHC2tFZlkKe` | `pages/central-de-links.html:136–148,297–305` | “cronograma das aulas, receitas exclusivas, novidades e bastidores” | `NEEDS_CLIENT_CONFIRMATION`; confirmar atividade e política do grupo |
| Hotmart | `https://hotmart.com/pt-br/marketplace/produtos/biscoistos-de-natal-chef-manu-rosa/Q103166087R` | `pages/ebook.html:328–338` | Checkout do E-book Biscoitos de Natal | `NEEDS_CLIENT_CONFIRMATION`; não testado nesta etapa |
| Kpages | `https://chefmanurosa1651954297.kpages.online/cook-book-bolos-caseiros-da-manu-rosa-62c773f1-3252-4aa1-9d22-e9de89b1f69a` | `index.html:118–123,165–175,346–355`; `pages/central-de-links.html:72–75,109–120,309–317` | Landing/aquisição do Cookbook | `NEEDS_CLIENT_CONFIRMATION`; não testado nesta etapa |
| E-mail | Não encontrado | Ausente nas fontes principais | Futuro contato/suporte | `NEEDS_CLIENT_CONFIRMATION` |
| Link interno — cursos | `pages/cursos-presenciais.html`; `#cursos-modalidades`; `pages/central-de-links.html` | `index.html:237–239,266–268`; `pages/cursos-presenciais.html:84–86`; `pages/central-de-links.html:72–75,94–106` | Descoberta de cursos | Remapear futuramente para `/cursos/`; não alterar agora |
| Link interno — e-book | `pages/ebook.html` / `ebook.html` | `index.html:204–205,313–317,359–365`; `pages/central-de-links.html:73–75,122–134` | Descoberta do e-book | Remapear futuramente para `/ebooks/`; disponibilidade pendente |
| Link interno — Sobre | `pages/sobre.html` | `index.html:421–438` | Biografia | Remapear futuramente para `/sobre/` |
| Grupo de delivery | `https://chat.whatsapp.com/D2rUxjFqdFFHVZUnjF6UPm?mode=gi_t` | `index.html:482–492`; `pages/central-de-links.html:358–368` | Delivery semanal | `EXCLUDE_PHYSICAL_BUSINESS` |

Nenhum canal ou URL comercial desta tabela é considerado atual sem confirmação. Checkouts, grupos e formulários externos não foram acionados.

## 9. Banco de imagens

O briefing menciona uma pasta denominada conteúdo das aulas diretamente sob `assets/img`, mas ela não existe. O acervo correspondente está em `assets/img/img_2/conteudo das aulas/`.

### Cursos, técnica, sala de aula e retratos

| Arquivo | Conteúdo visual | Uso original | Oferta relacionada | Uso recomendado | Situação |
| --- | --- | --- | --- | --- | --- |
| `assets/img/cursos/01_manu_rosa_batendo_massa.png` | Manu preparando massa | Hero de `pages/cursos-presenciais.html:90–98` | Cursos em geral | `HERO` | Aprovada no legado; otimização futura |
| `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Retrato da Manu | Apresentação em `pages/cursos-presenciais.html:103–114` | Institucional/cursos | `ABOUT` | Aprovada no legado |
| `assets/img/cursos/03_preparo_massa_na_tigela.jpeg` | Preparo de massa em tigela | Método em `pages/cursos-presenciais.html:174–180`; Home em `index.html:179–181` | Método/Confeitaria Básica genérica | `TECHNIQUE` | Não atribuir a uma oferta específica sem confirmação |
| `assets/img/cursos/04_turma_com_bolos.jpeg` | Turma com bolos produzidos | Modalidades em `pages/cursos-presenciais.html:132–141`; central em `pages/central-de-links.html:94–106` | Formação geral | `CLASSROOM`, `COURSE_CARD` | `NEEDS_AUTHORIZATION` |
| `assets/img/cursos/05_maos_modelando_massa.jpeg` | Mãos modelando massa | Método em `pages/cursos-presenciais.html:174–180` | Método | `TECHNIQUE` | Aprovada no legado; contexto a preservar |
| `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg` | Manu/chef convidado em aula | Aulas especiais em `pages/cursos-presenciais.html:185–198` | Workshops/aulas especiais | `COURSE_DETAIL`, `CLASSROOM` | `NEEDS_AUTHORIZATION`; confirmar convidado/contexto |
| `assets/img/cursos/07_turma_selfie_oficina.jpeg` | Selfie de turma em oficina | Comunidade em `pages/cursos-presenciais.html:203–212` | Workshops/comunidade | `CLASSROOM`, `GALLERY` | `NEEDS_AUTHORIZATION` |
| `assets/img/cursos/08_bolo_com_frutas_vermelhas.jpeg` | Bolo com frutas vermelhas | Profissionalizante em `pages/cursos-presenciais.html:230–235`; vitrine em `pages/central-de-links.html:336–338` | Profissionalizante | `COURSE_DETAIL` | Associação explícita no bloco profissionalizante |
| `assets/img/cursos/09_macarons.jpeg` | Macarons | Profissionalizante em `pages/cursos-presenciais.html:225–229` | Profissionalizante | `COURSE_CARD`, `COURSE_DETAIL` | Associação explícita; baixa resolução, 340×455 px; revisar qualidade |
| `assets/img/cursos/10_temperagem_chocolate.jpeg` | Temperagem de chocolate | Profissionalizante em `pages/cursos-presenciais.html:233–235` | Profissionalizante | `TECHNIQUE`, `COURSE_CARD` | Associação explícita |
| `assets/img/cursos/11_turma_brinde.jpeg` | Turma reunida em encerramento | Galeria de conquistas em `pages/cursos-presenciais.html:305–320` | Cursos em geral | `GALLERY`, `CLASSROOM` | `NEEDS_AUTHORIZATION` |
| `assets/img/cursos/12_aluna_com_certificado.jpeg` | Manu, aluna e certificado | Galeria de conquistas em `pages/cursos-presenciais.html:305–320` | Conclusão/certificado | `GALLERY` | `NEEDS_AUTHORIZATION`; revisar dados legíveis no certificado |
| `assets/img/cursos/13_manu_rosa_corpo_inteiro.png` | Retrato de corpo inteiro da Manu | CTA em `pages/cursos-presenciais.html:324–338` | Institucional/cursos | `ABOUT`, `HERO` secundário | Aprovada no legado; otimização futura |
| `assets/img/img_2/banner3.jpg` | Manu conduzindo workshop, conforme `alt` legado | Slide de cursos em `index.html:219–246` | Workshops/cursos gerais | `HERO` | Relação geral, não oferta exclusiva |
| `assets/img/img_2/banner4.jpg` | Produções/atividade de aula, conforme `alt` legado | Slide Confeitaria Básica em `index.html:252–275` | Confeitaria Básica; método | `HERO`, `COURSE_CARD` | Relação forte no legado |
| `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0029.jpg` | Doce confeitado apresentado em aula, conforme `alt` | Slide de cursos em `index.html:242–246` | Cursos gerais | `COURSE_CARD`, `GALLERY` | Associação geral |
| `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0040.jpg` | Detalhe de produção em aula, conforme `alt` | Vitrine em `pages/central-de-links.html:324–339` | Técnica geral | `TECHNIQUE`, `GALLERY` | Associação geral |
| `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0042.jpg` | Bolo finalizado em aula, conforme `alt` | Slide Confeitaria Básica em `index.html:271–275` | Confeitaria Básica | `COURSE_CARD`, `TECHNIQUE` | Associação explícita no slide |
| `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0044.jpg` | Momento de aula presencial, conforme `alt` | Grupo VIP em `pages/central-de-links.html:136–148,297–305` | Comunidade | `CLASSROOM` | `NEEDS_AUTHORIZATION` |
| `assets/img/img_2/conteudo das aulas/bolo3.jpg`, `IMG-20251007-WA0022.jpg` a `WA0028.jpg`, `WA0030.jpg` a `WA0039.jpg`, `WA0041.jpg` e `WA0043.jpg` | Arquivos de conteúdo de aulas sem descrição individual no HTML principal | Sem associação explícita nas cinco fontes principais | Não determinada | `GALLERY` após curadoria | Não associar a oferta específica; revisar conteúdo e direitos |
| `assets/img/img_2/galeria/manu1.jpg` | Chef confeiteira decorando cupcakes, conforme `alt` | Home/Sobre em `index.html:409,421–441` | Institucional/técnica | `ABOUT`, `TECHNIQUE` | Usar apenas com enquadramento educacional |
| `assets/img/img_2/galeria/manu4.jpg` | Retrato editorial da Manu, conforme `alt` | Central em `pages/central-de-links.html:212–220` | Institucional | `ABOUT` | Não usar como prova de aulas online |
| `assets/imagens novas/Manu-142.JPG` | Retrato da Manu | Autora em `pages/ebook.html:169–189` | Institucional/e-book | `ABOUT` | Aprovada no legado; otimização futura |

### E-books e materiais digitais

| Arquivo | Conteúdo visual | Uso original | Oferta relacionada | Uso recomendado | Situação |
| --- | --- | --- | --- | --- | --- |
| `assets/imagens novas/Logo Manu-01.png` | Logo principal | Header do legado | Marca institucional | `ABOUT` não aplicável; identidade global | Arquivo de marca, não fotografia; otimização futura |
| `assets/imagens novas/Logo Manu-02.png` | Logo clara | Variação para fundos escuros | Marca institucional | `ABOUT` não aplicável; identidade global | Arquivo de marca; duplicado por `Logo Manus-02.png` |
| `assets/img/img_2/banner1.jpg` | Mesa/produção de confeitaria; também rotulada como Cookbook em outros blocos | Cookbook/Home/Central | Cookbook | `EBOOK` | Descrições legadas divergentes; curadoria necessária |
| `assets/img/img_2/banner2.jpg` | Cookbook/Biscoitos, conforme `alt` variável | Cookbook e slide natalino | Cookbook ou E-book natalino | `EBOOK` | `CONFLICT`; selecionar função definitiva |
| `assets/imagens novas/Anúncios - Bolos Caseiros -.png` | Anúncio com texto incorporado | Sem referência nas cinco fontes | Cookbook | `EBOOK` | Material promocional; não usar como fotografia editorial |
| `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png` | Capa “Biscoitos de Natal” com texto incorporado | Hero em `pages/ebook.html:125–128` | E-book Biscoitos de Natal | `EBOOK`, `HERO` | Capa explícita; 2481×3508 px e aproximadamente 10,6 MB; otimização futura obrigatória |
| `assets/imagens novas/Cookie Box.png` | Caixa de biscoitos natalinos, com logo/texto na embalagem | Bônus em `pages/ebook.html:233–249` | Cookie Box/bônus | `EBOOK` | Confirmar bônus; 3024×4032 px e aproximadamente 18,5 MB; otimização futura obrigatória |
| `assets/imagens novas/Bonus.png` | Imagem promocional de bônus | Sem uso nas cinco fontes | Possível bônus | `EBOOK` | 4284×5712 px e aproximadamente 25,3 MB; curadoria e otimização futura obrigatória |
| `assets/imagens novas/Biscoitos de Natal.png` | Fotografia/composição de biscoitos natalinos | Sem uso nas cinco fontes | E-book natalino | `EBOOK` | 4229×5712 px e aproximadamente 40,6 MB; curadoria e otimização futura obrigatória |
| `assets/imagens novas/biscoito.png` | Fotografia de biscoito | Sem uso nas cinco fontes | E-book natalino | `EBOOK` | 5712×4284 px e aproximadamente 28,6 MB; curadoria e otimização futura obrigatória |
| `assets/img/booknatalimg/ebook-biscoitos-natal-768.jpg` | Mockup/capa do e-book | `index.html:209–213`; `pages/central-de-links.html:123–134` | E-book natalino | `EBOOK`, `COURSE_CARD` não aplicável | Capa concorrente; confirmar versão oficial |
| `assets/img/booknatalimg/img.png` | Mockup alternativo com texto incorporado | Sem referência nas cinco fontes | E-book natalino | `EBOOK` | Aproximadamente 2,6 MB; curadoria e otimização futura |
| `assets/img/booknatalimg/5756b9e2-253d-4fb4-a60f-c4b7965c3a90.png` | Mockup alternativo com texto incorporado | Sem referência nas cinco fontes | E-book natalino | `EBOOK` | Aproximadamente 2,3 MB; curadoria e otimização futura |
| `assets/img/booknatalimg/8e92a550-2b9c-43ba-9bc0-3627f54fe353.png` | Mockup alternativo com texto incorporado | Sem referência nas cinco fontes | E-book natalino | `EBOOK` | Aproximadamente 2,5 MB; curadoria e otimização futura |
| `assets/img/booknatalimg/Imagem do WhatsApp de 2025-10-22 à(s) 11.23.19_8d9fffc4.jpg` | Variação promocional | Sem referência nas cinco fontes | E-book natalino | `EBOOK` | Curadoria |
| `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 08.42.40_0a6f6ae1.jpg` | Fotografia de receita/material | Sem uso nas cinco fontes | E-book natalino | `EBOOK`, `GALLERY` | Descrição semântica e curadoria necessárias |
| `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 08.42.41_d067e853.jpg` | Fotografia de receita/material | Sem uso nas cinco fontes | E-book natalino | `EBOOK`, `GALLERY` | Descrição semântica e curadoria necessárias |
| `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 08.42.41_dc389897.jpg` | E-book Biscoitos de Natal, conforme `alt` | Card em `index.html:359–365` | E-book natalino | `EBOOK` | Associação explícita |
| `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 09.10.58_36ad8f78.jpg` | Fotografia de receita/material | Sem uso nas cinco fontes | E-book natalino | `EBOOK`, `GALLERY` | Descrição semântica e curadoria necessárias |
| `assets/imagens novas/Logo Manus-02.png` | Logo clara | Duplicata binária de `Logo Manu-02.png` | Nenhuma oferta | `DO_NOT_USE` | `DUPLICATE` |

### Assets fora do recorte educacional

| Grupo | Conteúdo | Uso recomendado | Situação |
| --- | --- | --- | --- |
| `assets/cardapiodelivere/` | Produtos do delivery | `DO_NOT_USE` | `EXCLUDE_PHYSICAL_BUSINESS` |
| `assets/img/imagens_bolos_principais/` | Catálogo de bolos físicos | `DO_NOT_USE` por padrão | `EXCLUDE_PHYSICAL_BUSINESS` |
| `assets/img/bolos de casamento/` | Casamentos e doces finos | `DO_NOT_USE` | `EXCLUDE_PHYSICAL_BUSINESS` |
| `assets/img/pascoa_2026/` | Campanha sazonal | `DO_NOT_USE` | `EXCLUDE_OBSOLETE`/`EXCLUDE_PHYSICAL_BUSINESS` |
| `assets/img/img_2/galeria/galeria temas/` | Festas e eventos temáticos | `DO_NOT_USE` | `EXCLUDE_PHYSICAL_BUSINESS` |

### Classificação das associações entre imagens e ofertas

| Oferta ou tema | Imagem | Evidência | Classificação da associação |
| --- | --- | --- | --- |
| Curso profissionalizante | `assets/img/cursos/09_macarons.jpeg` | Inserida dentro do bloco profissionalizante em `pages/cursos-presenciais.html:217–235`, com `alt` específico | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Curso profissionalizante | `assets/img/cursos/08_bolo_com_frutas_vermelhas.jpeg` | Inserida dentro do bloco profissionalizante em `pages/cursos-presenciais.html:217–235`, com `alt` de produção do curso | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Curso profissionalizante | `assets/img/cursos/10_temperagem_chocolate.jpeg` | Inserida dentro do bloco profissionalizante em `pages/cursos-presenciais.html:217–235`, com `alt` específico | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Confeitaria Básica | `assets/img/img_2/banner4.jpg` | Fundo do slide específico de Confeitaria Básica em `index.html:252–275` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Confeitaria Básica | `assets/img/img_2/conteudo das aulas/IMG-20251007-WA0042.jpg` | Imagem do slide específico de Confeitaria Básica em `index.html:252–275` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Confeitaria Básica | `assets/img/cursos/03_preparo_massa_na_tigela.jpeg` | Representa preparo e aparece no método, mas não no slide específico do curso | `GENERIC_EDUCATIONAL_IMAGE` |
| Workshops/aulas especiais | `assets/img/cursos/06_chef_convidado_edu_bacon.jpeg` | Inserida no bloco “Aulas especiais com chefs convidados” em `pages/cursos-presenciais.html:185–198` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Workshops/aulas especiais | `assets/img/img_2/banner3.jpg` | Fundo do slide geral de cursos que também descreve workshops em `index.html:219–246` | `STRONGLY_SUPPORTED` |
| Workshops/oficina | `assets/img/cursos/07_turma_selfie_oficina.jpeg` | `alt` identifica oficina; imagem aparece no bloco de comunidade em `pages/cursos-presenciais.html:203–212` | `STRONGLY_SUPPORTED` |
| Curso completo/formação geral | `assets/img/cursos/04_turma_com_bolos.jpeg` | Aparece antes do conjunto geral de modalidades, não dentro de um card exclusivo | `GENERIC_EDUCATIONAL_IMAGE` |
| In company | Qualquer fotografia do acervo geral | Nenhuma fotografia está ligada explicitamente ao card in company | `UNCERTAIN`; não selecionar sem confirmação |
| Aulas online | `assets/img/img_2/galeria/manu4.jpg` | Está ao lado da menção textual, mas é apenas retrato editorial | `DO_NOT_ASSOCIATE` |
| Sobre a Manu | `assets/img/cursos/02_manu_rosa_retrato.jpeg` | Retrato no bloco de apresentação da professora em `pages/cursos-presenciais.html:103–114` | `STRONGLY_SUPPORTED` |
| Sobre a Manu | `assets/imagens novas/Manu-142.JPG` | Retrato no bloco de autora em `pages/ebook.html:169–189` | `STRONGLY_SUPPORTED` |
| Cookbook | `assets/img/img_2/banner2.jpg` | Card do Cookbook em `index.html:346–355`, embora o mesmo arquivo tenha uso/descrição concorrente | `EXPLICIT_IN_ORIGINAL_PAGE` com `CONFLICT` visual |
| E-book Biscoitos de Natal | `assets/imagens novas/Ebook Biscoistos Natal - Chef Manu Rosa.png` | Capa do hero em `pages/ebook.html:125–128` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| E-book Biscoitos de Natal | `assets/img/booknatalimg/ebook-biscoitos-natal-768.jpg` | Mockup no slide e na central em `index.html:189–213`; `pages/central-de-links.html:123–134` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| E-book Biscoitos de Natal | `assets/img/ebook/Imagem do WhatsApp de 2025-11-24 à(s) 08.42.41_dc389897.jpg` | Card do e-book em `index.html:359–365` | `EXPLICIT_IN_ORIGINAL_PAGE` |
| Cookie Box | `assets/imagens novas/Cookie Box.png` | Imagem do bloco de bônus em `pages/ebook.html:233–249` | `EXPLICIT_IN_ORIGINAL_PAGE`, condicionado à confirmação do bônus |
| E-book/bônus | Mockups e fotografias sem uso nas cinco fontes principais | Nome/pasta sugerem relação, mas falta associação editorial explícita | `UNCERTAIN` |

## 10. Conteúdo excluído

| Conteúdo | Fontes principais | Tratamento | Motivo |
| --- | --- | --- | --- |
| Encomendas personalizadas | `index.html:123–124,295–305,372–397`; `pages/central-de-links.html:343–351` | `EXCLUDE_PHYSICAL_BUSINESS` | Venda de produtos físicos |
| Delivery e grupo semanal | `index.html:482–492`; `pages/central-de-links.html:230–259,358–368` | `EXCLUDE_PHYSICAL_BUSINESS` | Operação física semanal |
| Cardápio e catálogo de bolos | `pages/central-de-links.html` e páginas de catálogo | `EXCLUDE_PHYSICAL_BUSINESS` | Fora do posicionamento educacional |
| Casamentos | `pages/catalogo-casamentos.html` e assets associados | `EXCLUDE_PHYSICAL_BUSINESS` | Serviço de celebração |
| Festas e eventos temáticos | `pages/temas.html`; referência histórica em `pages/sobre.html:110–115` | Oferta: `EXCLUDE_PHYSICAL_BUSINESS`; história: manter com cautela | Não é produto educacional confirmado |
| Páscoa | `pages/pascoa-2026.html`; `assets/img/pascoa_2026/` | `EXCLUDE_OBSOLETE` | Campanha sazonal física |
| Campanhas de urgência | “Oferta de Natal: valor promocional por tempo limitado” em `pages/ebook.html:84–88` | `EXCLUDE_OBSOLETE` | Temporal/comercial |
| FAQ de encomendas | `pages/faq.html:65–135`; preview em `index.html:446–476` | `EXCLUDE_PHYSICAL_BUSINESS` | Retirada, entrega, conservação e pagamento físico |
| Placeholders de depoimentos | Bloco comentado em `pages/ebook.html:252–275` | `EXCLUDE_OBSOLETE` | Conteúdo fictício de Ana, Lucas e Bruna; nunca migrar |
| Galeria de produtos | `index.html:401–419`; `pages/galeria.html` | `EXCLUDE_PHYSICAL_BUSINESS` por padrão | Não comprova aprendizado ou oferta educacional |
| CTA “Pedir orçamento” | `index.html:397` | `EXCLUDE_PHYSICAL_BUSINESS` | Contexto de encomenda/evento |

## 11. Conflitos encontrados

| Tema | Evidência A | Evidência B | Impacto editorial | Classificação | Confirmação necessária |
| --- | --- | --- | --- | --- | --- |
| Duração semestral versus oito meses | “Curso semestral completo” — `pages/cursos-presenciais.html:140–141` | Profissionalizante com “8 meses de duração” — `pages/cursos-presenciais.html:217–264` | Pode atribuir duração incorreta ou fundir duas ofertas. | `CONFLICT` | Confirmar se são produtos distintos e a duração vigente de cada um. |
| 30 aulas versus mais de 30 | “30 aulas” — `index.html:225–227` | “mais de 30 aulas” — `pages/cursos-presenciais.html:140–141` | Altera carga declarada e promessa comercial. | `CONFLICT` | Confirmar o número oficial de aulas e a qual oferta pertence. |
| Curso completo versus profissionalizante | Curso completo semestral — `pages/cursos-presenciais.html:138–142` | Profissionalizante semanal, de oito meses e com turnos — `pages/cursos-presenciais.html:217–264` | Nome, grade e dados temporais podem ser combinados indevidamente. | `CONFLICT` | Confirmar relação histórica/comercial, nome e ficha própria de cada oferta. |
| Confeitaria Básica versus demais cursos | Três meses e 12 aulas — `index.html:257–263` | Curso completo/profissionalizante têm outros volumes — `index.html:224–228`; `pages/cursos-presenciais.html:138–142,217–264` | Pode receber grade, certificado ou duração de outra oferta. | `NEEDS_CLIENT_CONFIRMATION`; oferta separada | Confirmar status e dados próprios da Confeitaria Básica. |
| Workshops versus aulas especiais | “Workshops”, “oficina”, “Aulas & Workshops especiais” e “Aulas especiais com chefs convidados” | `index.html:224–240,307–341`; `pages/cursos-presenciais.html:144–148,185–198,203–212` | Pode duplicar cards ou esconder formatos distintos. | `DUPLICATE` possível / `CONFLICT` taxonômico | Confirmar taxonomia, formatos ativos e convidados atuais. |
| Presencial versus online | Página principal declara cursos presenciais — `pages/cursos-presenciais.html:67–86,150–153` | Menção isolada a presencial e online — `pages/central-de-links.html:212–220` | Pode anunciar uma modalidade sem oferta estruturada. | `CONFLICT` | Confirmar modalidades ativas e qual curso existe online. |
| Certificado | “Certificado de conclusão” apenas no profissionalizante — `pages/cursos-presenciais.html:249–254` | Imagem de aluna com certificado no bloco geral — `pages/cursos-presenciais.html:305–320` | Pode generalizar certificação para todos os cursos. | `NEEDS_CLIENT_CONFIRMATION` | Confirmar quais ofertas certificam e sob quais regras. |
| Anos de experiência | “mais de 15 anos” — `pages/sobre.html:70`; “quase 20 anos” — `index.html:385–387` | “desde 2006” — `pages/cursos-presenciais.html:113` | Gera narrativa temporal inconsistente e envelhece automaticamente. | `CONFLICT` | Selecionar data-base ou formulação institucional aprovada, sem recálculo editorial. |
| Início das aulas | “há mais de 10 anos” — `pages/sobre.html:70` | “Desde 2012” — `pages/cursos-presenciais.html:281–284` | Pode contradizer a cronologia da atuação educacional. | `CONFLICT` | Confirmar a data-base das aulas e a redação pública. |
| Números de alunos e resultados | “+800”; “+170”; “+10”; “+100” — `pages/cursos-presenciais.html:285–299` | Nenhuma data-base ou comprovação consta no HTML. | Claims podem parecer atuais ou verificáveis sem contexto. | `NEEDS_CLIENT_CONFIRMATION` | Confirmar valores, definições, data-base e evidência. |
| Capas de e-book | Capa principal, mockups e banners diferentes | `pages/ebook.html:125–128`; `index.html:189–211,359–365`; `pages/central-de-links.html:109–134` | Pode representar edição ou produto errado. | `CONFLICT` visual | Selecionar a capa oficial e associá-la ao produto/edição corretos. |
| Preço do e-book | Campo visual sem valor — `pages/ebook.html:328–332` | `aria-label` informa R$ 29,90 — `pages/ebook.html:333–334` | Um valor oculto pode estar desatualizado e divergir do checkout. | `CONFLICT` / dado oculto | Confirmar preço, parcelamento e moeda atuais. |
| Checkout do e-book | CTA aponta para a Hotmart — `pages/ebook.html:328–339` | O HTML não comprova que o produto/link continua ativo. | Pode direcionar para venda encerrada, edição errada ou página indisponível. | `NEEDS_CLIENT_CONFIRMATION` | Validar produto, URL final, titularidade e funcionamento do checkout. |

## 12. Perguntas para a cliente

### Cursos

- Curso completo e profissionalizante são a mesma oferta, versões históricas ou produtos diferentes?
- Quais cursos existem hoje e quais estão encerrados?
- Quais são os nomes comerciais oficiais?
- O número correto é 30 ou mais de 30 aulas?
- Quais durações, cargas horárias, frequências e turnos continuam válidos?
- Confeitaria Básica continua com três meses e 12 aulas?
- Quais ofertas são presenciais, online ou híbridas?
- Qual é o endereço das aulas presenciais?
- Quais públicos, níveis e pré-requisitos se aplicam a cada curso?
- Qual é o programa atual de cada curso?
- Quais cursos oferecem certificado e sob quais regras?
- Quais workshops, oficinas, aulas especiais e convidados estão ativos?
- O serviço in company continua disponível e qual é o seu escopo?
- Quais são datas, vagas, preços, formas de pagamento e links de matrícula?
- Há materiais inclusos, suporte e política de cancelamento?

### E-books

- Quais produtos digitais estão atualmente ativos?
- Cookbook Bolos Caseiros continua disponível?
- E-book Biscoitos de Natal continua disponível fora da campanha sazonal?
- Qual é a edição e o sumário vigentes?
- Qual capa é oficial para cada produto?
- O Cookie Box continua incluso como bônus?
- Quais são preço, parcelamento, checkout e garantia atuais?
- Como funcionam entrega, período de acesso e suporte?
- Os prazos de validade descritos continuam tecnicamente aprovados?

### Sobre

- A cliente aprova 2006 e 2012 como datas-base?
- “mais de 15 anos”, “quase 20 anos” e “mais de 10 anos” devem ser removidos ou mantidos como claims históricos?
- Quais são os nomes oficiais das formações e instituições?
- ENSP, École Ducasse e Sommet Education devem aparecer juntos e com qual redação?
- O claim de vitória no episódio “chá de bebê” do GNT está aprovado?
- Os números +800, +170, +10 e +100 continuam válidos? Qual data-base e evidência?
- O trecho sobre Noah e os seis anos da Bakery deve integrar a narrativa pública?

### Contato

- Qual é o canal principal de atendimento educacional?
- O WhatsApp `(47) 99655-2618` será o canal educacional oficial?
- Qual mensagem inicial deve ser usada para cursos, e-books e suporte?
- Qual é o e-mail oficial?
- `@manurosabakery` continua sendo o Instagram principal?
- O Grupo VIP continua ativo e autorizado para divulgação?
- Qual é o horário de atendimento e prazo de resposta?

### Direitos de imagem

- Há autorização das pessoas presentes nas fotos de turma?
- Há autorização do chef convidado e confirmação de seu nome/contexto?
- A aluna da foto com certificado autorizou publicação?
- O certificado pode aparecer legível ou precisa ser desfocado/recortado?
- As fotos podem ser reutilizadas no novo domínio, em anúncios e redes sociais?
- Há restrição de uso para imagens de menores, familiares ou participantes identificáveis?

## 13. Mapa para o Astro

| Conteúdo mapeado | Destino no Astro | Componente ou rota futura | Dependência |
| --- | --- | --- | --- |
| Hero “Aprenda Confeitaria com a Chef Manu Rosa” | `/` | `HomeHero.astro` | Revisão editorial final |
| Curso completo, profissionalizante, básico, workshops e in company separados | `/cursos/` | Catálogo/section de cursos futura | Confirmação da taxonomia e status |
| Dados completos de uma oferta | `/cursos/` e possível rota individual futura | `CourseCard`/template de detalhe futuro | Nome, programa, modalidade, duração, certificado, preço e CTA |
| Método de ensino | `/` e `/cursos/` | Seção de método futura | Copy aprovada e imagens selecionadas |
| Apresentação resumida da Manu | `/` | Seção institucional futura | Claims aprovados |
| Trajetória, formação, França, GNT e missão | `/sobre/` | `src/pages/sobre/index.astro` | Confirmação de credenciais/claims |
| Cookbook | `/ebooks/` | Card/detalhe de material futuro | Disponibilidade, capa, link e preço |
| E-book Biscoitos de Natal | `/ebooks/` | Card/detalhe de material futuro | Edição, disponibilidade, checkout e suporte |
| Cookie Box | `/ebooks/` | Bloco de bônus do e-book | Confirmação de inclusão atual |
| FAQ literal do e-book | `/duvidas/` e `/ebooks/` | Grupo de FAQ futuro | Atualização das respostas comerciais |
| Perguntas derivadas de cursos | `/duvidas/` | Grupo de FAQ futuro | Respostas aprovadas pela cliente |
| WhatsApp, Instagram, e-mail e Grupo VIP | `/contato/` | `src/pages/contato/index.astro` | Canais e finalidades confirmados |
| CTA final educacional | `/` | Seção CTA futura | Destino aprovado |
| Navegação das seis rotas | Todas | `SiteHeader.astro`/`SiteFooter.astro` | Conteúdo das rotas e canais finais |
| Fotografias de turma e certificado | `/`, `/cursos/`, possivelmente `/sobre/` | Componentes de mídia futuros | Direitos de imagem e contexto |

As seis rotas cobertas são `/`, `/cursos/`, `/ebooks/`, `/sobre/`, `/duvidas/` e `/contato/`.

### Cobertura editorial por rota

| Rota | Conteúdo disponível | Texto publicável ou preparável | Imagem recomendada | Dependência | Conteúdo proibido | Etapa futura |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Hero educacional, método, destaques resumidos, apresentação da Manu e CTA | Textos `KEEP_EXACT`; resumos sem dados comerciais; ofertas apenas como destaques condicionais | Hero: `assets/img/cursos/01_manu_rosa_batendo_massa.png`; destaques conforme a matriz de associações | Seleção final de destaques, imagens, claims e destino do CTA | Catálogo completo, oferta física e qualquer dado variável não confirmado | Refinar após validação das páginas internas |
| `/cursos/` | Fichas separadas de curso completo, profissionalizante, básico, workshops, in company e menção online | Estrutura e registros históricos; nenhuma oferta como vigente antes da confirmação | Imagens `EXPLICIT_IN_ORIGINAL_PAGE` por oferta; genéricas apenas como apoio identificado | Taxonomia, status, grade, modalidade, local, calendário, certificado, preço e matrícula | Mistura entre fichas, anúncio online sem produto e dados de outra oferta | Criar catálogo geral; avaliar páginas individuais somente depois da taxonomia |
| `/ebooks/` | Cookbook, Biscoitos de Natal e Cookie Box como bônus potencial | Descrições literais; FAQ comercial somente após atualização | Capa oficial a selecionar entre os assets explicitamente associados | Produtos ativos, edições, capas, bônus, preço, checkout, acesso e suporte | Urgência sazonal obsoleta, preço oculto e bônus presumido | Criar listagem e detalhes dos produtos confirmados |
| `/sobre/` | Trajetória, formação, França, GNT, missão e indicadores históricos | Biografia literal com claims e datas marcados para validação | `assets/img/cursos/02_manu_rosa_retrato.jpeg` ou `assets/imagens novas/Manu-142.JPG`, após seleção | Credenciais, cronologia, claims, indicadores e aprovação da narrativa familiar | Recalcular anos, atualizar números por inferência ou importar oferta física | Montar narrativa institucional validada |
| `/duvidas/` | FAQ literal do e-book e perguntas derivadas de cursos/atendimento | Perguntas podem ser preparadas; respostas variáveis exigem aprovação atual | Nenhuma imagem necessária; apoio genérico somente se o design exigir | Respostas atuais sobre cursos, produtos, políticas e canais | FAQ de encomendas/delivery e respostas comerciais antigas tratadas como atuais | Organizar grupos depois das respostas da cliente |
| `/contato/` | WhatsApp, Instagram, e-mail e Grupo VIP encontrados no legado | Rótulos e estrutura; nenhum canal deve ser ativado sem confirmação de finalidade | Sem associação obrigatória; retrato institucional apenas se aprovado | Canal principal, números/endereço, e-mail, horários, mensagens e finalidade do Grupo VIP | Canais de encomenda/delivery reutilizados por suposição | Publicar somente os canais educacionais confirmados |

## 14. Ordem de implementação

1. **Cursos:** resolver taxonomia, status e dados das ofertas antes de substituir o scaffold.
2. **Sobre:** migrar trajetória e claims aprovados sem recalcular datas ou números.
3. **E-books:** publicar produtos separados e Cookie Box apenas como bônus confirmado.
4. **Dúvidas:** usar perguntas literais aprovadas e obter respostas atuais para perguntas derivadas.
5. **Contato:** ativar somente canais educacionais confirmados.
6. **Refinamento da Home:** integrar resumos, imagens e CTAs das páginas já validadas.

Cada etapa deve ser pequena, revisável e produzir no máximo um commit quando houver autorização futura para implementação.
