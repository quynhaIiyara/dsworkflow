import{j as n}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as o}from"./index-U7idSPGL.js";import{s as a}from"./spacing-DGyKQIUM.js";import{S as c}from"./TokenSwatch-DO6_pzkK.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function s(i){const e={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Foundations/Spacing"}),`
`,n.jsx(e.h1,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(e.p,{children:[`Layout spacing scale (padding, gap, margin). Never use raw pixel values —
import from `,n.jsx(e.code,{children:"@rn-ds/tokens"}),"."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { spacing } from '@rn-ds/tokens';
import { View } from 'react-native';

<View style={{ padding: spacing.md, gap: spacing.sm }}>{children}</View>
`})}),`
`,n.jsx(e.h2,{id:"scale",children:"Scale"}),`
`,n.jsx(c,{tokens:a,namespace:"spacing",render:t=>n.jsx(e.div,{style:{width:t,height:24,background:"#5B4CFF",borderRadius:2}})})]})}function w(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{w as default};
