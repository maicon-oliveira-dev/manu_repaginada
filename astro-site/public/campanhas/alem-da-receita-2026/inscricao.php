<?php
declare(strict_types=1);

/*
 * Endpoint público da campanha. A chave e os valores de produção ficam
 * exclusivamente no arquivo privado indicado por MANU_BREVO_CONFIG_PATH.
 */

const MAX_REQUEST_BYTES = 8192;
const BREVO_LIST_ID = 3;
const REQUIRED_CONSENT_VERSION = 'cookies-alem-da-receita-2026-v1';
const META_PIXEL_ID = '1867971887539443';
const META_GRAPH_API_VERSION = 'v26.0';

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function fail(string $logMessage, int $status = 400): void
{
    error_log('[alem-da-receita] ' . $logMessage);
    respond($status, ['success' => false, 'message' => 'Não foi possível concluir sua inscrição agora. Tente novamente mais tarde.']);
}

function metaLog(string $message): void
{
    error_log('[alem-da-receita][meta-capi] ' . $message);
}

function normalizedHash(string $value): string
{
    $value = strtolower(trim($value));
    if (class_exists('Normalizer')) {
        $value = Normalizer::normalize($value, Normalizer::FORM_KC) ?: $value;
    }

    return hash('sha256', $value);
}

function readMetaConfig(): ?array
{
    $configPath = getenv('MANU_META_CONFIG_PATH');
    if (!is_string($configPath) || $configPath === '' || !is_readable($configPath)) {
        metaLog('Private configuration is unavailable.');
        return null;
    }

    try {
        $config = require $configPath;
    } catch (Throwable) {
        metaLog('Private configuration could not be loaded.');
        return null;
    }
    if (!is_array($config) || !isset($config['access_token']) || !is_string($config['access_token']) || $config['access_token'] === '') {
        metaLog('Private configuration is invalid.');
        return null;
    }
    if (isset($config['test_event_code']) && (!is_string($config['test_event_code']) || $config['test_event_code'] === '')) {
        metaLog('Private test configuration is invalid.');
        return null;
    }

    return $config;
}

function sendMetaLead(string $email, string $whatsapp, string $eventId, string $allowedOrigin): void
{
    $config = readMetaConfig();
    if ($config === null) {
        return;
    }

    $userData = [
        'em' => [normalizedHash($email)],
        'ph' => [hash('sha256', '55' . $whatsapp)],
        'client_ip_address' => (string) ($_SERVER['REMOTE_ADDR'] ?? ''),
        'client_user_agent' => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 512),
    ];
    $fbp = (string) ($_COOKIE['_fbp'] ?? '');
    $fbc = (string) ($_COOKIE['_fbc'] ?? '');
    if (preg_match('/^fb\.1\.\d+\.\d+$/', $fbp)) {
        $userData['fbp'] = $fbp;
    }
    if (preg_match('/^fb\.1\.\d+\.[A-Za-z0-9_-]+$/', $fbc)) {
        $userData['fbc'] = $fbc;
    }

    $requestBody = [
        'data' => [[
            'event_name' => 'Lead',
            'event_time' => time(),
            'event_id' => $eventId,
            'action_source' => 'website',
            'event_source_url' => rtrim($allowedOrigin, '/') . '/campanhas/alem-da-receita-2026/',
            'user_data' => $userData,
        ]],
        'access_token' => $config['access_token'],
    ];
    if (isset($config['test_event_code'])) {
        $requestBody['test_event_code'] = $config['test_event_code'];
    }

    $curl = curl_init('https://graph.facebook.com/' . META_GRAPH_API_VERSION . '/' . META_PIXEL_ID . '/events');
    if ($curl === false) {
        metaLog('Unable to initialize cURL.');
        return;
    }
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($requestBody, JSON_UNESCAPED_SLASHES),
        CURLOPT_HTTPHEADER => ['Accept: application/json', 'Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
    ]);
    $response = curl_exec($curl);
    $status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    curl_close($curl);
    if ($response === false) {
        metaLog('Transport failure.');
    } elseif ($status < 200 || $status >= 300) {
        metaLog('Returned HTTP status ' . $status . '.');
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Método não permitido.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength < 1 || $contentLength > MAX_REQUEST_BYTES) {
    fail('Rejected request size.', 413);
}

$configPath = getenv('MANU_BREVO_CONFIG_PATH');
if (!is_string($configPath) || $configPath === '' || !is_readable($configPath)) {
    fail('Private Brevo configuration is unavailable.', 503);
}

$config = require $configPath;
if (!is_array($config)
    || !isset($config['api_key'], $config['allowed_origin'], $config['consent_version'])
    || !is_string($config['api_key'])
    || !is_string($config['allowed_origin'])
    || !is_string($config['consent_version'])
    || $config['api_key'] === ''
    || $config['allowed_origin'] === ''
    || !hash_equals(REQUIRED_CONSENT_VERSION, $config['consent_version'])) {
    fail('Private Brevo configuration is invalid.', 503);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !hash_equals(rtrim($config['allowed_origin'], '/'), rtrim($origin, '/'))) {
    fail('Rejected origin.', 403);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$whatsapp = preg_replace('/\D+/', '', (string) ($_POST['whatsapp'] ?? '')) ?? '';
$consent = (string) ($_POST['consent'] ?? '');
$marketingConsent = (string) ($_POST['marketing_consent'] ?? '');
$eventId = (string) ($_POST['event_id'] ?? '');
$honeypot = trim((string) ($_POST['website'] ?? ''));

if ($honeypot !== '') {
    fail('Rejected honeypot submission.', 400);
}

if (strlen($name) < 2 || strlen($name) > 120
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || strlen($email) > 254
    || !preg_match('/^[1-9]{2}9\d{8}$/', $whatsapp)
    || $consent !== 'yes') {
    respond(422, ['success' => false, 'message' => 'Revise nome, e-mail, WhatsApp e consentimento para continuar.']);
}

$hasMarketingConsent = $marketingConsent === 'yes';
if ($hasMarketingConsent && !preg_match('/^lead-[A-Za-z0-9._:-]{16,128}$/', $eventId)) {
    respond(422, ['success' => false, 'message' => 'Não foi possível validar sua inscrição. Atualize a página e tente novamente.']);
}

$payload = [
    'email' => $email,
    'attributes' => [
        'NOME' => $name,
        'WHATSAPP' => $whatsapp,
        'CONSENTIMENTO_ALEM_DA_RECEITA_NOV_2026' => true,
        'CONSENTIMENTO_DATA_HORA_NOV_2026' => gmdate('c'),
        'CONSENTIMENTO_VERSAO_NOV_2026' => $config['consent_version'],
    ],
    'listIds' => [BREVO_LIST_ID],
    'updateEnabled' => true,
];

if (!function_exists('curl_init')) {
    fail('cURL extension is unavailable.', 503);
}

$curl = curl_init('https://api.brevo.com/v3/contacts');
if ($curl === false) {
    fail('Unable to initialize cURL.', 503);
}

curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Content-Type: application/json',
        'api-key: ' . $config['api_key'],
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 10,
]);

$response = curl_exec($curl);
$curlError = curl_error($curl);
$status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
curl_close($curl);

if ($response === false) {
    fail('Brevo transport failure: ' . ($curlError !== '' ? 'cURL error.' : 'unknown transport error.'), 503);
}

if ($status < 200 || $status >= 300) {
    fail('Brevo returned HTTP status ' . $status . '.', 502);
}

if ($hasMarketingConsent) {
    sendMetaLead($email, $whatsapp, $eventId, $config['allowed_origin']);
}

respond(200, ['success' => true]);
