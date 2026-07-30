# Dependências de conteúdo da cliente

Legenda: `Sim` significa que a informação impede a conclusão segura daquela etapa. `Parcial` indica que a estrutura pode avançar, mas não ser aprovada.

| Informação | Prioridade | Bloqueia arquitetura | Bloqueia conteúdo | Bloqueia publicação |
| ---------- | ---------- | -------------------- | ----------------- | ------------------- |
| Nome oficial de cada curso | P1 | Sim | Sim | Sim |
| Modalidade | P1 | Sim | Sim | Sim |
| Nível | P1 | Parcial | Sim | Sim |
| Público-alvo | P1 | Parcial | Sim | Sim |
| Módulos e aulas | P1 | Parcial | Sim | Sim |
| Duração e carga horária | P1 | Parcial | Sim | Sim |
| Plataforma de aulas | P1 | Não | Sim | Sim |
| Período de acesso | P1 | Não | Sim | Sim |
| Certificado e regras de emissão | P1 | Não | Sim | Sim |
| Modelo e canal de suporte | P1 | Não | Sim | Sim |
| Preço | P1 | Não | Sim | Sim |
| Parcelamento e meios de pagamento | P1 | Não | Sim | Sim |
| Garantia | P1 | Não | Sim | Sim |
| Política de cancelamento/reembolso | P1 | Não | Sim | Sim |
| URL e plataforma de checkout | P1 | Parcial | Sim | Sim |
| Imagem principal de cada curso | P2 | Não | Parcial | Sim |
| Fotografias complementares | P2 | Não | Parcial | Não |
| Depoimentos reais | P1 | Não | Sim | Sim para página de resultados |
| Autorização de uso de imagem e depoimento | P1 | Não | Sim | Sim |
| Evidências de formação e prêmios | P1 | Não | Sim | Sim |
| Evidências dos números de alunos e resultados | P1 | Não | Sim | Sim |
| WhatsApp/canal de pré-venda | P1 | Não | Sim | Sim |
| Canal e política de suporte ao aluno | P1 | Não | Sim | Sim |
| Manutenção ou encerramento do e-book | P1 | Sim para mapa de rotas | Sim | Sim |
| Manutenção de cursos presenciais | P1 | Sim para taxonomia/rotas | Sim | Sim |
| Encerramento definitivo de encomendas | P1 | Sim para redirects | Sim | Sim |
| Encerramento definitivo do delivery | P1 | Sim para 410 | Sim | Sim |
| Destino do conteúdo de casamentos e temas | P2 | Sim para redirects | Parcial | Sim |
| Políticas legais e dados do responsável | P1 | Não | Sim | Sim |
| Ferramenta e consentimento para leads | P2 | Parcial | Sim | Sim se houver captura |
| Analytics e eventos desejados | P2 | Não | Não | Parcial |

## Pacote mínimo para iniciar implementação de conteúdo

1. Lista oficial de cursos e modalidades.
2. Nome, slug provisório, público, nível, duração e módulos de cada curso.
3. Decisão sobre cursos presenciais e e-book.
4. Confirmação formal de encerramento de encomendas e delivery.
5. Definição de checkout, suporte e pré-venda.
6. Políticas de acesso, certificado, garantia e reembolso.
7. Assets e depoimentos com autorização.
8. Evidências dos claims que serão publicados.
