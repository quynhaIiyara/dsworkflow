#!/usr/bin/env node
// gen-manifest.mjs — walk packages/components/src for TSX components,
// extract prop metadata via react-docgen-typescript, emit dist/manifest.json.
//
// Also embeds token names + package version so ds-manifest MCP can answer
// "what's available in vX.Y.Z" without a second lookup.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import { withDefaultConfig } from 'react-docgen-typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// ── Components ────────────────────────────────────────────────────────────
const parser = withDefaultConfig({
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => !prop.parent?.fileName.includes('node_modules'),
});

const componentFiles = globSync('packages/components/src/**/*.tsx', {
  cwd: root,
  ignore: ['**/*.{stories,test}.tsx'],
  absolute: true,
});

const componentsRaw = componentFiles.flatMap((f) => parser.parse(f));

const components = componentsRaw.map((c) => ({
  name: c.displayName,
  description: c.description || null,
  path: relative(root, c.filePath),
  props: Object.entries(c.props || {}).map(([name, p]) => ({
    name,
    type: p.type?.name || null,
    required: !!p.required,
    defaultValue: p.defaultValue?.value ?? null,
    description: p.description || null,
  })),
}));

// ── Tokens ────────────────────────────────────────────────────────────────
const tokens = JSON.parse(
  readFileSync(join(root, 'packages/tokens/src/design-tokens.json'), 'utf8'),
);

// ── Package versions ──────────────────────────────────────────────────────
function versionOf(pkgDir) {
  const pkgPath = join(root, pkgDir, 'package.json');
  if (!existsSync(pkgPath)) return null;
  return JSON.parse(readFileSync(pkgPath, 'utf8')).version;
}

const manifest = {
  generatedAt: new Date().toISOString(),
  versions: {
    tokens: versionOf('packages/tokens'),
    components: versionOf('packages/components'),
    icons: versionOf('packages/icons'),
  },
  components,
  tokens,
};

// ── Emit ──────────────────────────────────────────────────────────────────
const outDir = join(root, 'dist');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log(
  `manifest: ${components.length} components, ${Object.keys(tokens).length} token groups → dist/manifest.json`,
);
