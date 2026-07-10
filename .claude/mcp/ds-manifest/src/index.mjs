#!/usr/bin/env node
// ds-manifest MCP server.
// Exposes design-system metadata (components + tokens + versions) to any
// MCP-capable client (Claude Code, etc). Reads dist/manifest.json emitted by
// `npm run manifest`.
//
// Usage in a downstream repo:
//   Register this MCP in .claude/settings.json or via `claude mcp add`.
//   Then Claude can call list_components / get_component / get_tokens
//   before writing markup that uses the DS.
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Resolve the manifest path. Priority:
// 1. DS_MANIFEST_PATH env var (explicit override — used when consuming a
//    remote / installed DS release).
// 2. ../../../dist/manifest.json (this repo, dev mode).
const manifestPath =
  process.env.DS_MANIFEST_PATH ||
  resolve(__dirname, '..', '..', '..', '..', 'dist', 'manifest.json');

if (!existsSync(manifestPath)) {
  console.error(`ds-manifest: manifest not found at ${manifestPath}`);
  console.error(`ds-manifest: run 'npm run manifest' first, or set DS_MANIFEST_PATH.`);
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

const server = new Server(
  { name: 'ds-manifest', version: '0.0.0' },
  { capabilities: { tools: {} } },
);

const tools = [
  {
    name: 'list_components',
    description:
      'List every component in the design system with name, description, and source path. Call this first to discover what exists before writing markup.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_component',
    description:
      'Get full metadata for a component: props with types, defaults, required flags, and JSDoc descriptions. Use this before writing JSX that consumes the component.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Component display name (e.g., "Button")' },
      },
      required: ['name'],
    },
  },
  {
    name: 'get_tokens',
    description:
      'Return the full design tokens object (colors, spacing, radii, typography, opacity). Use this to look up correct token names when styling consumer code.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_versions',
    description:
      'Return the current version of each package (tokens, components, icons). Use this to verify what version the consumer is pinned to.',
    inputSchema: { type: 'object', properties: {} },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params;

  if (name === 'list_components') {
    const list = manifest.components.map((c) => ({
      name: c.name,
      description: c.description,
      path: c.path,
      propCount: c.props.length,
    }));
    return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
  }

  if (name === 'get_component') {
    const target = args?.name;
    const component = manifest.components.find((c) => c.name === target);
    if (!component) {
      return {
        isError: true,
        content: [{ type: 'text', text: `Component "${target}" not found.` }],
      };
    }
    return { content: [{ type: 'text', text: JSON.stringify(component, null, 2) }] };
  }

  if (name === 'get_tokens') {
    return { content: [{ type: 'text', text: JSON.stringify(manifest.tokens, null, 2) }] };
  }

  if (name === 'get_versions') {
    return { content: [{ type: 'text', text: JSON.stringify(manifest.versions, null, 2) }] };
  }

  return {
    isError: true,
    content: [{ type: 'text', text: `Unknown tool: ${name}` }],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
console.error('ds-manifest MCP server ready');
