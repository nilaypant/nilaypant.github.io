import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(repoRoot, 'dist');
const rootAssetsDir = resolve(repoRoot, 'assets');
const distHtmlPath = resolve(distDir, 'app.html');
const distIndexPath = resolve(distDir, 'index.html');
const rootIndexPath = resolve(repoRoot, 'index.html');

const html = await readFile(distHtmlPath, 'utf8');

await writeFile(distIndexPath, html);
await writeFile(rootIndexPath, html);

await rm(rootAssetsDir, { recursive: true, force: true });
await mkdir(rootAssetsDir, { recursive: true });
await cp(resolve(distDir, 'assets'), rootAssetsDir, { recursive: true });
