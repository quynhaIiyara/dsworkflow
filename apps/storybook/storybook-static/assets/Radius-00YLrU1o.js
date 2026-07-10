import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as o}from"./index-U7idSPGL.js";import{r as d}from"./radii-Dc0CGKFo.js";import{S as a}from"./TokenSwatch-DO6_pzkK.js";import"./index-CTjT7uj6.js";import"./iframe-D2L8uNp9.js";import"./index-Cywu29Xx.js";import"./index-DU-ZXHJ-.js";import"./index-Bhqu_tAV.js";function n(i){const r={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Radius"}),`
`,e.jsx(r.h1,{id:"radius",children:"Radius"}),`
`,e.jsxs(r.p,{children:["Border-radius scale. Use ",e.jsx(r.code,{children:"pill"})," (999) for fully-rounded chips + dots."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { radii } from '@rn-ds/tokens';
import { View } from 'react-native';

<View style={{ borderRadius: radii.md }}>{children}</View>
`})}),`
`,e.jsx(r.h2,{id:"scale",children:"Scale"}),`
`,e.jsx(a,{tokens:d,namespace:"radii",render:t=>e.jsx(r.div,{style:{width:40,height:40,background:"#5B4CFF",borderRadius:Math.min(t,20)}})})]})}function M(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{M as default};
