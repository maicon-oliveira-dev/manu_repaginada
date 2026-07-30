# Manu Rosa Cursos — scaffold Astro

Scaffold técnico isolado para validar a arquitetura estática proposta para o futuro site Manu Rosa Cursos.

O conteúdo público ainda não foi migrado. Este diretório não substitui o site legado na raiz do repositório e não possui configuração de deploy.

## Requisitos

- Node.js 22.12.0 ou superior.
- npm 9.6.5 ou superior.

## Instalação

Execute dentro de `astro-site/`:

```sh
npm ci
```

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm start` | Alias para o servidor local de desenvolvimento. |
| `npm run build` | Gera a saída estática em `dist/`. |
| `npm run preview` | Visualiza localmente o build estático. |
| `npm run astro -- --help` | Exibe a ajuda da CLI Astro. |

O artefato em `dist/` é ignorado pelo Git e não deve ser copiado para a raiz ou publicado durante a validação do scaffold.
