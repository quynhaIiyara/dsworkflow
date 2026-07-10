import{j as n}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as a}from"./index-U7idSPGL.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Get Started/Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:[`Install the three packages you need. Peer deps: React 18+, React Native 0.72+,
`,n.jsx(e.code,{children:"react-native-svg"})," (if you use icons)."]}),`
`,n.jsx(e.h2,{id:"from-github-release-tarball-current-default",children:"From GitHub Release tarball (current default)"}),`
`,n.jsxs(e.p,{children:["Grab the ",n.jsx(e.code,{children:".tgz"})," assets from the latest release and install directly:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install \\
  https://github.com/quynhaliyara/rn-ds/releases/download/@rn-ds/components-v0.1.0/rn-ds-components-0.1.0.tgz \\
  https://github.com/quynhaliyara/rn-ds/releases/download/@rn-ds/tokens-v0.1.0/rn-ds-tokens-0.1.0.tgz \\
  https://github.com/quynhaliyara/rn-ds/releases/download/@rn-ds/icons-v0.1.0/rn-ds-icons-0.1.0.tgz \\
  react-native-svg
`})}),`
`,n.jsxs(e.p,{children:[`Each package versions independently — tag names embed the package name so
you can pin `,n.jsx(e.code,{children:"@rn-ds/tokens@0.2.0"})," while staying on ",n.jsx(e.code,{children:"@rn-ds/components@0.1.0"}),"."]}),`
`,n.jsx(e.h2,{id:"snapshot--preview-builds",children:"Snapshot / preview builds"}),`
`,n.jsx(e.p,{children:"Use snapshots for WIP consumption:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`gh workflow run release.yaml -f publish_snapshot=true
`})}),`
`,n.jsxs(e.p,{children:["CI attaches ",n.jsx(e.code,{children:"0.0.0-<sha>.tgz"})," artifacts to the workflow run."]}),`
`,n.jsx(e.h2,{id:"basic-usage",children:"Basic usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Status } from '@rn-ds/components';
import { colors, spacing } from '@rn-ds/tokens';

export function OrderRow() {
  return (
    <View style={{ flexDirection: 'row', gap: spacing.md }}>
      <Status variant="confirmed" label="Confirmed" />
      <Button label="View" variant="primary" onPress={() => {}} />
    </View>
  );
}
`})})]})}function u(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{u as default};
