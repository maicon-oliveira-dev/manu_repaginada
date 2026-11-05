# Deploy da integração Brevo — Cookies: Além da Receita

## Escopo

O formulário estático envia `POST` para `astro-site/public/campanhas/alem-da-receita-2026/inscricao.php`. Como o Astro está configurado com saída estática, esse arquivo é copiado para `dist/campanhas/alem-da-receita-2026/inscricao.php` durante o build. PHP não é executado pelo Astro dev server: a validação real deve ocorrer somente após o upload para uma hospedagem com PHP/cURL.

## Configuração privada obrigatória

1. No servidor HostGator, criar um arquivo PHP de configuração **fora do document root** (`public_html`) e restringir sua leitura ao usuário da conta.
2. Definir a variável de ambiente PHP `MANU_BREVO_CONFIG_PATH` com o caminho absoluto desse arquivo privado. O caminho é deliberadamente desconhecido neste repositório: ele deve ser informado durante o deploy, de acordo com a estrutura real da conta HostGator.
3. O arquivo privado deve retornar uma matriz PHP com somente estes valores de configuração:
   - `api_key`: chave Brevo real, mantida apenas nesse arquivo privado;
   - `allowed_origin`: origem pública exata da campanha, sem barra final;
   - `consent_version`: definir exatamente como `cookies-alem-da-receita-2026-v1`, a versão aprovada do texto de consentimento.

Não colocar chave, caminho absoluto da conta ou configuração privada no Git, em `public_html`, no HTML ou no JavaScript.

## Comportamento do endpoint

- Aceita apenas `POST` de até 8 KiB.
- Valida nome, e-mail, WhatsApp, consentimento e honeypot no servidor.
- Quando o cabeçalho `Origin` estiver presente, exige correspondência com `allowed_origin`.
- Usa cURL com limite de conexão de 5 segundos e limite total de 10 segundos.
- Chama somente `POST https://api.brevo.com/v3/contacts`, com `updateEnabled: true` e `listIds: [3]`.
- Envia somente os atributos solicitados: `NOME`, `WHATSAPP`, `CONSENTIMENTO_ALEM_DA_RECEITA_NOV_2026`, `CONSENTIMENTO_DATA_HORA_NOV_2026` e `CONSENTIMENTO_VERSAO_NOV_2026`; o e-mail é enviado no campo padrão `email` da Brevo.
- Não cria automações, não dispara e-mails, não armazena cadastros localmente e não expõe a chave.
- Não registra nome, e-mail, WhatsApp, corpo de resposta ou chave. Os logs contêm somente estados técnicos genéricos.

## Validação antes de publicar

1. Confirmar no painel Brevo os tipos dos atributos existentes: `NOME`, `EMAIL`, `WHATSAPP`, `CONSENTIMENTO_ALEM_DA_RECEITA_NOV_2026`, `CONSENTIMENTO_DATA_HORA_NOV_2026` e `CONSENTIMENTO_VERSAO_NOV_2026`. A documentação local não registra esses tipos.
2. Configurar `consent_version` como `cookies-alem-da-receita-2026-v1` no arquivo privado e confirmar que o texto exibido na captura é o aprovado.
3. Confirmar ano e fuso horário do evento, link do Grupo VIP e demais pendências de campanha.
4. Após upload, verificar no servidor PHP que `MANU_BREVO_CONFIG_PATH` está disponível e que a extensão cURL está habilitada.
5. Fazer um único cadastro de teste autorizado na hospedagem e confirmar, no Brevo, a atualização do contato e a inclusão na lista 3. Não testar no Astro dev server.
