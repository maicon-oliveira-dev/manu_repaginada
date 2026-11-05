# Deploy Meta Conversions API — Cookies: Além da Receita

## Configuração privada obrigatória

1. No cPanel, crie um segundo arquivo PHP privado, separado da configuração Brevo, fora de `public_html`.
2. Defina no ambiente PHP a variável `MANU_META_CONFIG_PATH` com o caminho absoluto do arquivo privado. O caminho real pertence somente à conta de hospedagem e não deve ser incluído no repositório.
3. O arquivo privado deve retornar uma matriz PHP contendo somente `access_token`.
4. No subdomínio de teste, o mesmo arquivo pode conter opcionalmente `test_event_code`. Remova essa chave da configuração de produção.

Não colocar token, caminho absoluto, cópia do arquivo privado ou código de teste no Git, `public_html`, HTML, JavaScript, build ou logs.

## Comportamento implementado

- O endpoint existente `inscricao.php` preserva o cadastro na Brevo.
- Após sucesso HTTP da Brevo, ele envia `Lead` à Meta somente quando recebe `marketing_consent=yes`.
- O navegador gera um `event_id` por envio e o usa no Pixel e no `POST`; a API de Conversões usa o mesmo `event_id` para deduplicação.
- A chamada usa `POST https://graph.facebook.com/v26.0/1867971887539443/events`. A versão `v26.0` foi confirmada como atual na documentação oficial da Meta em 04/11/2026.
- Os dados de correspondência necessários são normalizados e recebem SHA-256 quando aplicável. Logs contêm apenas diagnóstico técnico sanitizado, sem token, e-mail, telefone ou corpo de resposta.
- Falha da Meta não altera uma inscrição já aceita pela Brevo.

## Teste manual no cPanel e Meta

1. Configure `MANU_META_CONFIG_PATH` apenas no subdomínio de teste e confirme que o arquivo privado não é acessível por URL.
2. Inclua `test_event_code` somente nessa configuração privada de teste.
3. Faça uma inscrição de teste com cookies de marketing aceitos e confirme em Eventos de Teste da Meta um `Lead` de navegador e um de servidor com o mesmo `event_id`, deduplicados.
4. Faça uma inscrição com cookies recusados: a Brevo deve aceitar o contato, sem `PageView` ou `Lead` no Pixel ou na API.
5. Remova `test_event_code` antes de configurar produção e confirme em Gerenciador de Eventos a qualidade/deduplicação dos eventos.

Não considerar o evento recebido pela Meta até que essa conferência manual seja concluída.
