import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as r}from"./index-U7idSPGL.js";import{t as s}from"./typography-NUC0y1yB.js";import{T as h}from"./TokenSwatch-DO6_pzkK.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:[`Type scale + weights + line heights. Font family is inherited from the OS —
we don't ship a custom font in the primitives package. If your app uses a
custom font, register it once in your `,e.jsx(n.code,{children:"App.tsx"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { typography } from '@rn-ds/tokens';
import { Text } from 'react-native';

<Text style={{
  fontSize: typography.size.lg,
  fontWeight: typography.weight.semibold,
  lineHeight: typography.size.lg * typography.lineHeight.normal,
}}>
  Order confirmed
</Text>
`})}),`
`,e.jsx(n.h2,{id:"size-scale",children:"Size scale"}),`
`,e.jsx(h,{tokens:s.size}),`
`,e.jsx(n.h2,{id:"weights",children:"Weights"}),`
`,e.jsxs(n.p,{children:["Available: ",e.jsx(n.code,{children:"regular"})," (400), ",e.jsx(n.code,{children:"medium"})," (500), ",e.jsx(n.code,{children:"semibold"})," (600), ",e.jsx(n.code,{children:"bold"})," (700)."]}),`
`,e.jsx(n.h2,{id:"line-heights",children:"Line heights"}),`
`,e.jsxs(n.p,{children:["Available: ",e.jsx(n.code,{children:"tight"})," (1.2), ",e.jsx(n.code,{children:"normal"})," (1.4), ",e.jsx(n.code,{children:"relaxed"}),` (1.6). Multiply
against the font size to compute the actual `,e.jsx(n.code,{children:"lineHeight"})," value."]})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
