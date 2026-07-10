import{j as o}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as t}from"./index-U7idSPGL.js";import{c}from"./colors-B-h07OAX.js";import{C as l}from"./TokenSwatch-DO6_pzkK.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function e(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{title:"Foundations/Colour"}),`
`,o.jsx(n.h1,{id:"colour",children:"Colour"}),`
`,o.jsxs(n.p,{children:["Semantic colour tokens. ",o.jsx(n.strong,{children:"Never hardcode hex values"}),` — always import from
`,o.jsx(n.code,{children:"@rn-ds/tokens"}),"."]}),`
`,o.jsxs(n.p,{children:["Colours are grouped semantically (",o.jsx(n.code,{children:"brand"}),", ",o.jsx(n.code,{children:"neutral"}),", ",o.jsx(n.code,{children:"danger"}),", ",o.jsx(n.code,{children:"success"}),`,
`,o.jsx(n.code,{children:"warning"}),", ",o.jsx(n.code,{children:"info"}),") rather than by hue. Each group has a ",o.jsx(n.code,{children:"solid"}),` (the fill),
an `,o.jsx(n.code,{children:"onSolid"})," (foreground text/icon over it), and typically a ",o.jsx(n.code,{children:"subtle"}),`
(low-contrast fill for backgrounds).`]}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import { colors } from '@rn-ds/tokens';
import { View, Text } from 'react-native';

<View style={{ backgroundColor: colors.brand.solid, padding: 12 }}>
  <Text style={{ color: colors.brand.onSolid }}>Buy now</Text>
</View>
`})}),`
`,o.jsx(n.h2,{id:"all-colours",children:"All colours"}),`
`,o.jsx(l,{tokens:c})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(e,{...r})}):e(r)}export{g as default};
