import{j as n}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as t}from"./index-DSkyVWTJ.js";import{M as i}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Get Started/Introduction"}),`
`,n.jsx(e.h1,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"rn-ds"}),` is a React Native design system built for missionyff apps. It
ships primitives + slot compositions, tokens, and icons — with a
Claude-Code-native authoring surface and an ahua-style release pipeline
(semantic-release + Conventional Commits, no Release PR).`]}),`
`,n.jsx(e.h2,{id:"packages",children:"Packages"}),`
`,n.jsxs(e.p,{children:[`| Package             | Purpose                                                    |
|---------------------|------------------------------------------------------------|
| `,n.jsx(e.code,{children:"@rn-ds/tokens"}),`     | Design tokens (colours, spacing, radii, typography, opacity) |
| `,n.jsx(e.code,{children:"@rn-ds/components"}),` | Presentational + interactive primitives (Button, Status …) |
| `,n.jsx(e.code,{children:"@rn-ds/icons"}),"      | SVG → ",n.jsx(e.code,{children:"react-native-svg"})," components via svgr codegen       |"]}),`
`,n.jsx(e.h2,{id:"scope",children:"Scope"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"In scope:"})," primitives, slot compositions, tokens, icons."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Out of scope:"}),` framework-agnostic wrappers, web-only components,
a11y automation in CI (soft-enforced in review — see AGENTS.md).`]}),`
`,n.jsx(e.h2,{id:"authoring-flow",children:"Authoring flow"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Designer + Claude → npm run new:component → PR
CI: typecheck + build + commitlint
Merge to main → semantic-release publishes per-package tarballs
`})}),`
`,n.jsxs(e.p,{children:["See ",n.jsx(e.strong,{children:"Installation"})," for how to consume, ",n.jsx(e.strong,{children:"Agent access (MCP)"}),` for how
Claude Code queries the manifest, `,n.jsx(e.strong,{children:"Versioning"})," for release semantics."]})]})}function u(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{u as default};
