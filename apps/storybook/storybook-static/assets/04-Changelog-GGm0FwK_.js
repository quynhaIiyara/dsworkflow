import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as r}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Get Started/Changelog"}),`
`,e.jsx(n.h1,{id:"changelog",children:"Changelog"}),`
`,e.jsxs(n.p,{children:[`Per-package changelogs are shipped inside each release tarball as
`,e.jsx(n.code,{children:"CHANGELOG.md"}),". ",e.jsx(n.code,{children:"semantic-release"}),` maintains them automatically on every
merge to `,e.jsx(n.code,{children:"main"})," that includes a semver-relevant commit."]}),`
`,e.jsx(n.h2,{id:"where-to-look",children:"Where to look"}),`
`,e.jsxs(n.p,{children:[`| Package             | Location                                       |
|---------------------|------------------------------------------------|
| `,e.jsx(n.code,{children:"@rn-ds/tokens"}),"     | ",e.jsx(n.code,{children:"packages/tokens/CHANGELOG.md"}),` in the repo, or the release notes on the GitHub Release page |
| `,e.jsx(n.code,{children:"@rn-ds/components"})," | ",e.jsx(n.code,{children:"packages/components/CHANGELOG.md"}),`             |
| `,e.jsx(n.code,{children:"@rn-ds/icons"}),"      | ",e.jsx(n.code,{children:"packages/icons/CHANGELOG.md"}),"                  |"]}),`
`,e.jsx(n.h2,{id:"format",children:"Format"}),`
`,e.jsx(n.p,{children:"Each entry is grouped by commit type:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-markdown",children:`## [1.4.0](https://github.com/...) (2026-07-10)

### Features

* **components:** add Toast with variants + auto-dismiss ([abc1234](https://...))

### Bug Fixes

* **components:** correct disabled opacity on Button ghost variant ([def5678](https://...))
`})}),`
`,e.jsx(n.h2,{id:"aggregate-view",children:"Aggregate view"}),`
`,e.jsxs(n.p,{children:[`An aggregate view across all packages will land here after the first real
release. For now, check each package's `,e.jsx(n.code,{children:"CHANGELOG.md"})," directly."]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
