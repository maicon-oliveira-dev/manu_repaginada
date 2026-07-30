# Baseline técnico — Manu Rosa Cursos

## Identificação

| Item | Valor |
| --- | --- |
| Caminho do projeto | `C:\Users\maico\Desktop\manu_repaginada` |
| Remote | `origin` — `https://github.com/maicon-oliveira-dev/manu_repaginada.git` |
| Commit inicial | `2964fcc ajustes home` |
| Branch base | `main` |
| Branch de trabalho | `cliente/manu-cursos-online` |
| Estado inicial | `## main...origin/main` |
| Divergência inicial | `0` commits locais e `0` commits remotos |
| Arquivos rastreados | 188 |
| Páginas HTML | 12 |

## Stack atual

- HTML5 multipágina, sem framework e sem sistema de templates.
- CSS puro, dividido entre estilos globais, correções mobile e folhas específicas por página.
- JavaScript puro, sem bibliotecas de runtime.
- Sem `package.json`, lockfile, pipeline de build ou testes automatizados.
- Fontes Google Fonts e ícones Font Awesome carregados externamente.

## Estrutura principal

```text
/
├── .htaccess
├── index.html
├── pages/
│   ├── catalogo-bolos.html
│   ├── catalogo-casamentos.html
│   ├── central-de-links.html
│   ├── cursos-presenciais.html
│   ├── delivery-semanal.html
│   ├── ebook.html
│   ├── faq.html
│   ├── galeria.html
│   ├── pascoa-2026.html
│   ├── sobre.html
│   └── temas.html
└── assets/
    ├── cardapiodelivere/
    ├── css/
    ├── imagens novas/
    ├── img/
    └── js/
```

## Deploy atual

- Hospedagem Apache/HostGator.
- Publicação de arquivos estáticos sem servidor Node em produção.
- `.htaccess` controla o redirect de `/index.html` para `/` e o redirect sazonal de Páscoa.
- Domínio público: `https://manurosabakery.com.br/`.

## Integrações externas

- WhatsApp e grupos de WhatsApp.
- Hotmart para o e-book de Natal.
- Kpages para o cookbook de bolos caseiros.
- Instagram.
- Google Fonts.
- Font Awesome via CDN.
- Imgur em metadados sociais de algumas páginas.

## Principais problemas P1 conhecidos

1. Posicionamento comercial mistura cursos, encomendas, catálogos, delivery e materiais digitais.
2. Home possui cinco elementos `h1` e CTAs concorrentes.
3. Header, navegação, footer e scripts auxiliares são duplicados entre páginas.
4. Não existem catálogo de cursos online nem páginas individuais orientadas a matrícula.
5. `robots.txt`, `sitemap.xml` e favicons declarados estão ausentes em produção.
6. Não existem páginas legais para privacidade, compra, cancelamento e reembolso.
7. Contraste insuficiente em elementos importantes da identidade visual.
8. Grande volume de imagens sem formatos modernos ou dimensões declaradas.
9. Conteúdo antigo está acoplado a HTML, CSS, imagens, SEO, WhatsApp e redirects.
10. Claims de autoridade, resultados e depoimentos dependem de validação documental.

## Preservação

O site público atual permanece preservado.
Nenhuma página, rota, imagem ou regra de servidor foi removida neste bloco.

Este documento registra o estado anterior a qualquer scaffold, migração de conteúdo ou alteração de produção.
