import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{r as L}from"./index-CTjT7uj6.js";import{c as a}from"./colors-B-h07OAX.js";import{s as A}from"./spacing-DGyKQIUM.js";import{r as N}from"./radii-Dc0CGKFo.js";import{t as c}from"./typography-NUC0y1yB.js";import{s as d,V as u,T as U}from"./index-CHvy5ce4.js";const v=A.sm,W=d.create({chip:{flexDirection:"row",alignItems:"center",gap:A.xs}}),b=d.create({base:{width:v,height:v,borderRadius:N.pill},warning:{backgroundColor:a.warning.solid},success:{backgroundColor:a.success.solid},danger:{backgroundColor:a.danger.solid},neutral:{backgroundColor:a.neutral.muted},info:{backgroundColor:a.info.solid}}),f=d.create({base:{fontSize:c.size.sm,fontWeight:c.weight.semibold,letterSpacing:1,lineHeight:c.size.sm},warning:{color:a.warning.solid},success:{color:a.success.solid},danger:{color:a.danger.solid},neutral:{color:a.neutral.muted},info:{color:a.info.solid}}),Z={pending:"warning","service-incomplete":"warning",confirmed:"success",rejected:"danger",overdue:"danger",cancelled:"danger",completed:"neutral","in-progress":"info"},r=L.forwardRef(function({variant:p,label:m,accessibilityLabel:$},H){const g=Z[p];return e.jsxs(u,{ref:H,accessibilityRole:"text",accessibilityLabel:$??`${p}: ${m}`,style:W.chip,children:[e.jsx(u,{style:[b.base,b[g]]}),e.jsx(U,{style:[f.base,f[g]],children:m.toUpperCase()})]})});r.displayName="Status";const X={title:"Components/Status",component:r,tags:["autodocs"],parameters:{status:"ready",since:"v0.1.0",docs:{description:{component:"Compact chip: coloured dot + uppercase label. Represents order and service states in lists and detail headers."}}},args:{variant:"pending",label:"Pending"},argTypes:{variant:{control:"select",options:["pending","service-incomplete","confirmed","rejected","overdue","cancelled","completed","in-progress"]}}},s={},t={args:{variant:"confirmed",label:"Confirmed"}},o={args:{variant:"in-progress",label:"In progress"}},n={args:{variant:"rejected",label:"Rejected"}},i={args:{variant:"completed",label:"Completed"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{variant:"pending",label:"Pending"}),e.jsx(r,{variant:"service-incomplete",label:"Service incomplete"}),e.jsx(r,{variant:"confirmed",label:"Confirmed"}),e.jsx(r,{variant:"in-progress",label:"In progress"}),e.jsx(r,{variant:"completed",label:"Completed"}),e.jsx(r,{variant:"rejected",label:"Rejected"}),e.jsx(r,{variant:"overdue",label:"Overdue"}),e.jsx(r,{variant:"cancelled",label:"Cancelled"})]})};var j,x,S;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,y,h;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'confirmed',
    label: 'Confirmed'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var w,R,I;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'in-progress',
    label: 'In progress'
  }
}`,...(I=(R=o.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var P,T,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'rejected',
    label: 'Rejected'
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var D,E,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'completed',
    label: 'Completed'
  }
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,z,_;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Status variant="pending" label="Pending" />
      <Status variant="service-incomplete" label="Service incomplete" />
      <Status variant="confirmed" label="Confirmed" />
      <Status variant="in-progress" label="In progress" />
      <Status variant="completed" label="Completed" />
      <Status variant="rejected" label="Rejected" />
      <Status variant="overdue" label="Overdue" />
      <Status variant="cancelled" label="Cancelled" />
    </div>
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const Y=["Pending","Confirmed","InProgress","Rejected","Completed","AllVariants"];export{l as AllVariants,i as Completed,t as Confirmed,o as InProgress,s as Pending,n as Rejected,Y as __namedExportsOrder,X as default};
