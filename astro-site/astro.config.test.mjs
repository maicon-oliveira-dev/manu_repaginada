import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const productionSite = 'https://manurosabakery.com.br';
const testSite = 'https://teste.manurosabakery.com.br';

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) return findHtmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
  }));

  return files.flat();
}

function testBuildIntegration() {
  return {
    name: 'test-build-metadata',
    hooks: {
      'astro:build:generated': async ({ dir, logger }) => {
        const outputDirectory = fileURLToPath(dir);
        const htmlFiles = await findHtmlFiles(outputDirectory);

        await Promise.all(htmlFiles.map(async (file) => {
          const html = await readFile(file, 'utf8');
          const withTestDomain = html.replaceAll(productionSite, testSite);
          const withNoindex = /<meta\s+name=["']robots["'][^>]*>/i.test(withTestDomain)
            ? withTestDomain.replace(/<meta\s+name=["']robots["'][^>]*>/i, '<meta name="robots" content="noindex,nofollow" />')
            : withTestDomain.replace(/<head\b[^>]*>/i, '$&\n    <meta name="robots" content="noindex,nofollow" />');

          await writeFile(file, withNoindex, 'utf8');
        }));

        await writeFile(join(outputDirectory, 'robots.txt'), 'User-agent: *\nAllow: /\n', 'utf8');
        await writeFile(join(outputDirectory, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n', 'utf8');
        logger.info('Test build metadata applied: noindex, allowed robots, and empty sitemap.');
      },
    },
  };
}

export default defineConfig({
  site: testSite,
  output: 'static',
  integrations: [testBuildIntegration()],
});
