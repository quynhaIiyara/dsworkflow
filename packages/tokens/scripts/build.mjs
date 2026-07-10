#!/usr/bin/env node
// Regenerates typed TS exports from design-tokens.json.
// Emits one file per top-level group + a barrel index.ts.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '..', 'src');
const tokens = JSON.parse(readFileSync(join(src, 'design-tokens.json'), 'utf8'));

const banner = '// AUTO-GENERATED from design-tokens.json — do not edit by hand.\n';

const typeName = {
  colors: 'ColorToken',
  spacing: 'SpacingToken',
  radii: 'RadiusToken',
  shadow: 'ShadowToken',
  typography: 'TypographyToken',
  opacity: 'OpacityToken',
};

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

for (const [name, value] of Object.entries(tokens)) {
  const t = typeName[name] ?? `${cap(name)}Token`;
  const body =
    `${banner}export const ${name} = ${JSON.stringify(value, null, 2)} as const;\n` +
    `export type ${t} = keyof typeof ${name};\n`;
  writeFileSync(join(src, `${name}.ts`), body);
}

const indexLines = Object.keys(tokens).map((n) => {
  const t = typeName[n] ?? `${cap(n)}Token`;
  return `export { ${n}, type ${t} } from './${n}';`;
});
const index = banner + indexLines.join('\n') + '\n';
writeFileSync(join(src, 'index.ts'), index);

console.log('tokens: emitted', Object.keys(tokens).join(', '));
