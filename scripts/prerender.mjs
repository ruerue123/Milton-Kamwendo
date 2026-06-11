import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

// Routes to prerender. Dynamic insight routes stay client-rendered;
// the index page still ships full static HTML for them to hydrate into.
const routes = [
  '/',
  '/about',
  '/speaking',
  '/consulting',
  '/shop',
  '/insights',
  '/contact',
];

async function run() {
  // 1. Build the server bundle into a temp dir.
  const ssrDir = path.join(root, '.ssr-dist');
  await build({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: ssrDir,
      rollupOptions: { input: 'src/entry-server.tsx' },
    },
  });

  const { render } = await import(path.join(ssrDir, 'entry-server.js'));

  // 2. Read the client-built index.html as the template.
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  // 3. Render each route and write a static HTML file.
  for (const url of routes) {
    const appHtml = render(url);
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const filePath =
      url === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, url.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
    console.log(`  prerendered ${url} -> ${path.relative(root, filePath)}`);
  }

  // 4. Clean up the temp server bundle.
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('Prerendering complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
