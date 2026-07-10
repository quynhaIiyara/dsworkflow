import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as i}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Get Started/Versioning"}),`
`,e.jsx(n.h1,{id:"versioning",children:"Versioning"}),`
`,e.jsxs(n.p,{children:["Every merge to ",e.jsx(n.code,{children:"main"})," runs ",e.jsx(n.code,{children:"semantic-release"}),` per package. There is
`,e.jsx(n.strong,{children:"no Release PR"}),` and no manual version bump — the commit convention
drives the version bump directly.`]}),`
`,e.jsx(n.h2,{id:"commit--version-bump",children:"Commit → version bump"}),`
`,e.jsxs(n.p,{children:[`| Commit type              | Bumps       |
|--------------------------|-------------|
| `,e.jsx(n.code,{children:"feat(scope):"}),"           | ",e.jsx(n.strong,{children:"minor"}),`   |
| `,e.jsx(n.code,{children:"fix(scope):"}),"            | ",e.jsx(n.strong,{children:"patch"}),`   |
| `,e.jsx(n.code,{children:"perf(scope):"}),"           | ",e.jsx(n.strong,{children:"patch"}),`   |
| `,e.jsx(n.code,{children:"BREAKING CHANGE:"})," (footer) | ",e.jsx(n.strong,{children:"major"}),` |
| `,e.jsx(n.code,{children:"chore"})," / ",e.jsx(n.code,{children:"docs"})," / ",e.jsx(n.code,{children:"test"})," / ",e.jsx(n.code,{children:"refactor"})," / ",e.jsx(n.code,{children:"ci"})," / ",e.jsx(n.code,{children:"build"})," | none (silent no-op) |"]}),`
`,e.jsx(n.h2,{id:"per-package-versioning",children:"Per-package versioning"}),`
`,e.jsxs(n.p,{children:["Each package has its own ",e.jsx(n.code,{children:"release.config.js"})," with ",e.jsx(n.code,{children:"commitPaths"}),` scoped to
its directory. A merge only cuts a release for packages whose files
actually changed since the last tag.`]}),`
`,e.jsx(n.p,{children:"Tag format includes the package name so multiple packages can coexist:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`@rn-ds/tokens-v0.3.1
@rn-ds/components-v1.0.0
@rn-ds/icons-v0.2.0
`})}),`
`,e.jsx(n.h2,{id:"the-skip-ci-loop-breaker",children:"The [skip ci] loop breaker"}),`
`,e.jsxs(n.p,{children:["After semantic-release publishes, it commits ",e.jsx(n.code,{children:"package.json"})," + ",e.jsx(n.code,{children:"CHANGELOG.md"}),`
back to `,e.jsx(n.code,{children:"main"})," with ",e.jsx(n.code,{children:"[skip ci]"}),` in the commit message. This prevents the
release commit from re-triggering the release workflow. Do not remove the
`,e.jsx(n.code,{children:"[skip ci]"})," filter in ",e.jsx(n.code,{children:"release.yaml"}),"."]}),`
`,e.jsx(n.h2,{id:"snapshot-channel",children:"Snapshot channel"}),`
`,e.jsx(n.p,{children:"For WIP consumption without a real release:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`gh workflow run release.yaml -f publish_snapshot=true
`})}),`
`,e.jsxs(n.p,{children:["Publishes ",e.jsx(n.code,{children:"0.0.0-<sha>.tgz"}),` tarballs as workflow-run artifacts. Consumers
install directly from those URLs.`]})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{x as default};
