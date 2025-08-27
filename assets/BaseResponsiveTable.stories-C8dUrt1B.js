import{d as C,a as s,e as n,l as _,b as i,F as d,k as c,r as p,t as l,o as t,n as v,f as w}from"./iframe-BQrUM3bD.js";import{_ as $}from"./BaseSkeletonTable-DruzA19L.js";import{E as D}from"./eye-BFawzpme.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-DyLCS-Jp.js";const R={class:"hidden sm:block"},x={class:"relative overflow-x-auto rounded-xl border border-gray-200 shadow"},E={key:1,class:"min-w-full divide-y divide-gray-200 text-sm"},A={class:"sticky top-0 z-10 bg-gray-50"},M={key:0,class:"px-4 py-3 font-semibold text-gray-700"},S={class:"divide-y divide-gray-100 bg-white"},O=["onClick"],q={key:0,class:"px-4 py-2 text-center"},V={key:0},F=["colspan"],P={class:"space-y-4 sm:hidden"},L=["onClick"],z={key:0,class:"mt-2 text-right"},I={key:0,class:"p-6 text-center text-gray-400"},f=C({__name:"BaseResponsiveTable",props:{headers:{},rows:{},loading:{type:Boolean},totalCols:{},emptyMessage:{},formatter:{type:Function}},emits:["rowClick"],setup(o,{emit:m}){const N=m;function k(e){N("rowClick",e)}return(e,W)=>(t(),s("div",null,[n("div",R,[n("div",x,[e.loading?(t(),_($,{key:0,headers:e.headers.map(a=>a.label),rows:5},null,8,["headers"])):(t(),s("table",E,[n("thead",A,[n("tr",null,[(t(!0),s(d,null,c(e.headers,a=>(t(),s("th",{key:a.key,class:v(["px-4 py-3 text-left font-semibold text-gray-700",a.class])},l(a.label),3))),128)),e.$slots["header-action"]?(t(),s("th",M,[p(e.$slots,"header-action")])):i("",!0)])]),n("tbody",S,[(t(!0),s(d,null,c(e.rows,a=>(t(),s("tr",{key:a.id,class:"hover:bg-primary/10 group cursor-pointer transition",onClick:r=>k(a)},[(t(!0),s(d,null,c(e.headers,r=>(t(),s("td",{key:r.key,class:v(["px-4 py-2 text-xs text-gray-600",r.class])},[p(e.$slots,`row-${r.key}`,{row:a},()=>[w(l(e.formatter?e.formatter(r.key,a[r.key],a):a[r.key]),1)])],2))),128)),e.$slots["row-action"]?(t(),s("td",q,[p(e.$slots,"row-action",{row:a})])):i("",!0)],8,O))),128)),!e.loading&&!e.rows.length?(t(),s("tr",V,[n("td",{colspan:e.totalCols||e.headers.length+(e.$slots["row-action"]?1:0),class:"p-6 text-center text-gray-400"},l(e.emptyMessage||"No se encontraron registros."),9,F)])):i("",!0)])]))])]),n("div",P,[(t(!0),s(d,null,c(e.rows,a=>(t(),s("div",{key:a.id,class:"hover:bg-primary/5 cursor-pointer rounded-lg border border-gray-200 p-4 shadow transition",onClick:r=>k(a)},[(t(!0),s(d,null,c(e.headers,r=>(t(),s("div",{key:r.key,class:"mb-1 text-xs text-gray-600"},[n("strong",null,l(r.label)+":",1),p(e.$slots,`row-${r.key}`,{row:a},()=>[w(l(e.formatter?e.formatter(r.key,a[r.key],a):a[r.key]),1)])]))),128)),e.$slots["card-action"]?(t(),s("div",z,[p(e.$slots,"card-action",{row:a})])):i("",!0)],8,L))),128)),!e.loading&&!e.rows.length?(t(),s("div",I,l(e.emptyMessage||"No se encontraron registros."),1)):i("",!0)])]))}});f.__docgenInfo={exportName:"default",displayName:"BaseResponsiveTable",description:"",tags:{},props:[{name:"headers",required:!0,type:{name:"Array",elements:[{name:"TableHeader",elements:[{name:"T"}]}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"T"}]}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"totalCols",required:!1,type:{name:"number"}},{name:"emptyMessage",required:!1,type:{name:"string"}},{name:"formatter",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"rowClick",type:{names:["T"]}}],slots:[{name:"header-action"},{name:"`row-${h.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"}]},{name:"row-action",scoped:!0,bindings:[{name:"row",title:"binding"}]},{name:"card-action",scoped:!0,bindings:[{name:"row",title:"binding"}]}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseResponsiveTable.vue"]};const K={title:"Base/BaseResponsiveTable",component:f,tags:["autodocs"],argTypes:{loading:{control:"boolean"},emptyMessage:{control:"text"}}},h=[{key:"id",label:"N° Pedido",class:"font-mono text-xs"},{key:"obra",label:"Obra"},{key:"proveedor",label:"Proveedor"},{key:"fecha",label:"Entrega"},{key:"estado",label:"Estado"}],T=[{id:1,obra:"Obra Central",proveedor:"Proveedor A",fecha:"2025-09-01T10:00:00Z",estado:"APROBADO"},{id:2,obra:"Obra Norte",proveedor:"Proveedor B",fecha:"2025-09-10T08:30:00Z",estado:"ENVIADO"}];function B(o){const m=new Date(o);return isNaN(m.valueOf())?"-":m.toLocaleDateString("es-AR",{dateStyle:"short"})}const y={args:{headers:h,rows:T.map(o=>({...o,fecha:B(o.fecha)})),loading:!1,emptyMessage:"No se encontraron registros"}},u={args:{headers:h,rows:[],loading:!0}},g={args:{headers:h,rows:[],loading:!1,emptyMessage:"No hay pedidos disponibles"}},b={render:o=>({components:{BaseResponsiveTable:f,Eye:D},setup(){return{args:o}},template:`
      <BaseResponsiveTable v-bind="args">
        <template #header-action>Acción</template>

        <template #row-action="{ row }">
          <button
            class="text-primary p-1 transition hover:text-yellow-700"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            <Eye class="inline h-4 w-4 align-middle" />
          </button>
        </template>

        <template #card-action="{ row }">
          <button
            class="text-primary text-xs underline"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            Ver detalle
          </button>
        </template>
      </BaseResponsiveTable>
    `}),args:{headers:h,rows:T.map(o=>({...o,fecha:B(o.fecha)}))}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows: rows.map(r => ({
      ...r,
      fecha: formatDate(r.fecha)
    })),
    loading: false,
    emptyMessage: 'No se encontraron registros'
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows: [],
    loading: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    headers,
    rows: [],
    loading: false,
    emptyMessage: 'No hay pedidos disponibles'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      BaseResponsiveTable,
      Eye
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseResponsiveTable v-bind="args">
        <template #header-action>Acción</template>

        <template #row-action="{ row }">
          <button
            class="text-primary p-1 transition hover:text-yellow-700"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            <Eye class="inline h-4 w-4 align-middle" />
          </button>
        </template>

        <template #card-action="{ row }">
          <button
            class="text-primary text-xs underline"
            @click.stop="alert('Detalle de pedido ' + row.id)"
          >
            Ver detalle
          </button>
        </template>
      </BaseResponsiveTable>
    \`
  }),
  args: {
    headers,
    rows: rows.map(r => ({
      ...r,
      fecha: formatDate(r.fecha)
    }))
  }
}`,...b.parameters?.docs?.source}}};const Q=["Default","Loading","Empty","WithActions"];export{y as Default,g as Empty,u as Loading,b as WithActions,Q as __namedExportsOrder,K as default};
