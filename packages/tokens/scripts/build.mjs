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

for (const [name, value] of Object.entries(tokens)) {
  const body = `${banner}export const ${name} = ${JSON.stringify(value, null, 2)} as const;\n`;
  writeFileSync(join(src, `${name}.ts`), body);
}

const index =
  banner +
  Object.keys(tokens)
    .map((n) => `export { ${n} } from './${n}';`)
    .join('\n') +
  '\n';
writeFileSync(join(src, 'index.ts'), index);

console.log('tokens: emitted', Object.keys(tokens).join(', '));
