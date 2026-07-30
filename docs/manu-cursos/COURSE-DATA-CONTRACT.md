# Contrato inicial de dados de curso

## Estrutura conceitual

```text
Course
├── slug
├── title
├── shortDescription
├── fullDescription
├── modality
├── level
├── duration
├── audience
├── prerequisites[]
├── outcomes[]
├── modules[]
├── accessPeriod
├── certificate
├── support
├── bonuses[]
├── instructor
├── testimonials[]
├── image
├── checkoutUrl
├── status
└── seo
```

## Campos

| Campo | Tipo | Obrigatório | Origem | Pode ter placeholder | Observação |
| ----- | ---- | ----------- | ------ | -------------------- | ---------- |
| `slug` | `string` | Sim | Cliente + revisão SEO | Apenas protótipo local | Único, estável, sem acentos; não publicar antes da aprovação da URL |
| `title` | `string` | Sim | Cliente | Apenas protótipo local | Nome comercial oficial do curso |
| `shortDescription` | `string` | Sim | Cliente/copy aprovada | Sim, somente local | Resumo para card; não inventar transformação |
| `fullDescription` | `string` ou conteúdo estruturado | Sim | Cliente/copy aprovada | Sim, somente local | Descrição completa sem promessas não comprovadas |
| `modality` | enum/string | Sim | Cliente | Sim, somente local | Ex.: online, presencial ou híbrido; valores finais serão validados |
| `level` | enum/string | Sim | Cliente | Sim, somente local | Nível e critérios devem ser compreensíveis para o aluno |
| `duration` | objeto/string estruturada | Sim | Cliente | Sim, somente local | Distinguir carga horária, calendário e ritmo |
| `audience` | `string[]` | Sim | Cliente | Sim, somente local | Públicos reais; evitar segmentação inventada |
| `prerequisites` | `string[]` | Sim | Cliente | Sim, somente local | Lista vazia somente quando confirmado que não existem pré-requisitos |
| `outcomes` | `string[]` | Sim | Cliente + validação | Sim, somente local | Resultados de aprendizagem, não garantia de renda |
| `modules` | `Module[]` | Sim | Cliente | Estrutura vazia apenas local | Cada módulo deve ter título, resumo e ordem; aulas são opcionais no contrato inicial |
| `accessPeriod` | objeto/string | Sim | Cliente/plataforma | Não | Informar início, expiração ou acesso vitalício somente se confirmado |
| `certificate` | objeto/boolean | Sim | Cliente/plataforma | Não | Informar regras de emissão e carga horária quando aplicável |
| `support` | objeto | Sim | Cliente | Não | Canal, escopo, horário e prazo de resposta |
| `bonuses` | `Bonus[]` | Não | Cliente | Sim, somente local | Bônus não pode ser anunciado antes de confirmado |
| `instructor` | referência/objeto | Sim | Cliente + conteúdo validado | Parcial, somente local | Referenciar perfil oficial; claims exigem evidência |
| `testimonials` | `Testimonial[]` | Não | Cliente/alunos | Não | Nunca fictícios; exigir autorização e rastreabilidade |
| `image` | objeto de mídia | Sim | Cliente/curadoria de assets | Sim, somente local | Deve ter src, alt, dimensões e variantes otimizadas |
| `checkoutUrl` | URL ou `null` | Condicional | Cliente/plataforma | Não | Nunca inventar; `null` para estados sem matrícula |
| `status` | enum | Sim | Cliente/operação | Sim, local | Controla exibição e CTA |
| `seo` | objeto | Sim para publicação | Copy/SEO aprovado | Sim, somente local | `title`, `description`, canonical, social image e indexabilidade |

## Tipos auxiliares preliminares

```text
Module
├── title
├── description
├── order
└── lessons[] (opcional)

Bonus
├── title
└── description

Testimonial
├── quote
├── author
├── context
├── image (opcional)
└── consentReference

SEO
├── title
├── description
├── canonical
├── image
├── noindex
└── structuredData
```

## Estados possíveis

| Estado | Uso esperado | CTA permitido |
| --- | --- | --- |
| `draft` | Conteúdo interno incompleto | Nenhum; não publicar |
| `coming-soon` | Curso confirmado, matrículas ainda indisponíveis | Lista de espera validada |
| `open` | Matrículas abertas | Checkout oficial |
| `closed` | Curso existente com matrículas fechadas | Aviso ou lista de interesse validada |
| `archived` | Curso descontinuado | Nenhum; avaliar noindex/redirect conforme SEO |

## Regras de integridade

- Preço não faz parte deste contrato inicial e não deve ser inferido. Se adicionado futuramente, exige moeda, valor, parcelamento e fonte oficial.
- Checkout não deve ser inventado ou substituído por `#` em produção.
- Depoimentos nunca podem ser fictícios.
- Métricas e claims de autoridade exigem validação documental.
- Campos ausentes devem ser registrados como `[VALIDAR COM A CLIENTE]` durante a preparação editorial.
- Placeholders são permitidos apenas no protótipo local.
- Nenhum placeholder comercial pode chegar a staging aprovada ou produção.
- O build de produção deverá falhar ou bloquear publicação quando campos comerciais obrigatórios estiverem ausentes.
