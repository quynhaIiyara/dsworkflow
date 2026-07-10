import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as r}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Get Started/Agent access (MCP)"}),`
`,e.jsx(n.h1,{id:"agent-access-mcp",children:"Agent access (MCP)"}),`
`,e.jsxs(n.p,{children:["The design system ships an ",e.jsx(n.strong,{children:"MCP server"})," (",e.jsx(n.code,{children:"ds-manifest"}),`) that exposes
component + token metadata to any MCP-capable client — most importantly,
Claude Code running in your app repo.`]}),`
`,e.jsxs(n.p,{children:["The MCP reads a ",e.jsx(n.code,{children:"manifest.json"})," extracted by ",e.jsx(n.code,{children:"react-docgen-typescript"}),`
from the TSX sources, so props / defaults / descriptions stay in sync
with the code automatically.`]}),`
`,e.jsx(n.h2,{id:"tools-exposed",children:"Tools exposed"}),`
`,e.jsxs(n.p,{children:[`| Tool               | Purpose                                                    |
|--------------------|------------------------------------------------------------|
| `,e.jsx(n.code,{children:"list_components"}),`  | Discover what components exist (name, description, path)   |
| `,e.jsx(n.code,{children:"get_component"}),`    | Full metadata for a component (props, types, defaults)     |
| `,e.jsx(n.code,{children:"get_tokens"}),`       | Full token tree (colours, spacing, radii, typography, opacity) |
| `,e.jsx(n.code,{children:"get_versions"}),"     | Current version pin per package                            |"]}),`
`,e.jsx(n.h2,{id:"register-in-claude-code",children:"Register in Claude Code"}),`
`,e.jsx(n.p,{children:"From the DS repo (dev):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`claude mcp add ds-manifest \\
  --command "node" \\
  --args ".claude/mcp/ds-manifest/src/index.mjs" \\
  --env "DS_MANIFEST_PATH=$(pwd)/dist/manifest.json"
`})}),`
`,e.jsx(n.p,{children:`From a downstream app consuming a released version, point at the manifest
attached to the GitHub Release:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`export DS_MANIFEST_PATH=/path/to/downloaded/manifest.json
claude mcp add ds-manifest --command "node" --args "/abs/path/index.mjs"
`})}),`
`,e.jsx(n.h2,{id:"consumer-skill-recommended",children:"Consumer skill (recommended)"}),`
`,e.jsxs(n.p,{children:["Pair the MCP with a ",e.jsx(n.code,{children:"ds-consumer"}),` skill in your app repo so Claude
queries the MCP before generating JSX. Without the skill, Claude may
still write markup — but with the skill, it will look up the current
props before writing them, so prop names / variants / types stay accurate.`]})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{u as default};
