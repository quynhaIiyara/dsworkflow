#!/usr/bin/env node
// Turn every svgs/*.svg into a React Native component under src/.
// Also emits src/index.ts as a barrel.
//
// SVGs must use `stroke="currentColor"` and/or `fill="currentColor"` so
// consumers can theme via a `color` prop. Any hardcoded colors will ship
// as-is; codegen doesn't rewrite them.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from '@svgr/core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgsDir = join(root, 'svgs');
const srcDir = join(root, 'src');

const toPascal = (name) =>
  name
    .replace(/\.svg$/, '')
    .split(/[-_ ]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

const svgFiles = readdirSync(svgsDir).filter((f) => f.endsWith('.svg'));

const generated = [];

for (const file of svgFiles) {
  const componentName = toPascal(file);
  // Strip DOM-only attributes before feeding to svgr — react-native-svg doesn't
  // accept `xmlns`, `xmlns:xlink`, etc.
  const svgSource = readFileSync(join(svgsDir, file), 'utf8')
    .replace(/\s+xmlns(:[a-z]+)?="[^"]*"/g, '');

  const tsx = await transform(
    svgSource,
    {
      plugins: ['@svgr/plugin-jsx'],
      native: true,
      typescript: true,
      icon: true,
      replaceAttrValues: {
        currentColor: '{props.color ?? "currentColor"}',
      },
      svgProps: {
        width: '{props.width ?? 24}',
        height: '{props.height ?? 24}',
      },
    },
    { componentName },
  );

  writeFileSync(join(srcDir, `${componentName}.tsx`), tsx);
  generated.push(componentName);
}

const barrel =
  '// AUTO-GENERATED — do not edit by hand. Run `npm run generate` in packages/icons.\n' +
  generated.map((n) => `export { default as ${n} } from './${n}';`).join('\n') +
  '\n';

writeFileSync(join(srcDir, 'index.ts'), barrel);
console.log(`icons: emitted ${generated.length} components (${generated.join(', ')})`);
