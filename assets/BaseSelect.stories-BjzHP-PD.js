import{d as O,g as b,w as E,c as C,m as A,p as T,a as t,b as i,h as c,e as l,f as $,t as f,i as g,u as n,n as z,o as a,l as q,T as F,s as I,j as R,v as U,F as j,k as G}from"./iframe-D2UynokD.js";import{C as W}from"./chevron-down-Y1xztdbm.js";import{C as P}from"./check-DIC8mgHo.js";import{C as X}from"./circle-alert-BoGkX5NL.js";import{I as Y,V as H,A as J,M as K}from"./listbox-trx8Za88.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-B_XeVtI_.js";const Q={class:"-mb-6"},Z={key:0,class:"mb-1 block text-sm font-medium text-gray-800"},ee={key:0,class:"text-red-600"},ae={class:"relative"},re=["aria-required"],se={class:"block truncate"},te={key:0,class:"border-b border-gray-200"},le=["disabled"],ne={key:0,class:"text-primary absolute inset-y-0 right-4 flex items-center"},oe={key:1,class:"px-4 py-3 text-center text-sm text-gray-500 italic"},_=O({__name:"BaseSelect",props:{modelValue:{},label:{},placeholder:{},options:{},error:{},searchable:{type:Boolean,default:!1},required:{type:Boolean},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(S,{emit:L}){const s=S,N=L,d=b(s.modelValue??void 0),m=b(""),B=b(null);E(()=>s.modelValue,e=>{d.value=e??void 0}),E(d,e=>{N("update:modelValue",e??null)});const V=C(()=>s.options.find(e=>e.value===d.value)),D=C(()=>!s.searchable||!m.value.trim()?s.options:s.options.filter(e=>e.label.toLowerCase().includes(m.value.trim().toLowerCase()))),M=C(()=>{switch(s.size){case"sm":return"px-3 py-1.5 text-sm";case"lg":return"px-4 py-4 text-base";default:return"px-4 py-3 text-sm"}}),p=b({top:0,left:0,width:0});function u(){if(B.value){const e=B.value.getBoundingClientRect();p.value={top:e.bottom+window.scrollY,left:e.left+window.scrollX,width:e.width}}}return A(()=>{window.addEventListener("resize",u),window.addEventListener("scroll",u,!0)}),T(()=>{window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}),(e,o)=>(a(),t("div",Q,[e.label?(a(),t("label",Z,[e.required?(a(),t("span",ee,"*")):i("",!0),$(" "+f(e.label),1)])):i("",!0),c(n(K),{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=k=>d.value=k),disabled:e.disabled},{default:g(({open:k})=>[l("div",ae,[c(n(Y),{as:"template"},{default:g(()=>[l("div",{ref_key:"buttonRef",ref:B,onClick:o[0]||(o[0]=r=>!e.disabled&&u()),"aria-required":e.required,class:z(["focus:ring-primary focus:border-primary relative w-full cursor-default rounded-lg border bg-white text-left shadow-sm transition duration-200 focus:ring-2 focus:outline-none flex items-center justify-between",M.value,e.error?"border-red-400":"border-gray-300",e.disabled?"cursor-not-allowed border-gray-200 bg-gray-200 text-gray-400":"text-gray-700"])},[l("span",se,f(V.value?.label||e.placeholder||"Seleccionar opción"),1),c(n(W),{class:"h-4 w-4 shrink-0 text-gray-400 ml-2"})],10,re)]),_:1}),(a(),q(F,{to:"body"},[k&&!e.disabled?(a(),q(n(H),{key:0,style:I({position:"absolute",top:`${p.value.top}px`,left:`${p.value.left}px`,width:`${p.value.width}px`}),class:"z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border border-gray-300 bg-white text-sm shadow-lg ring-1 ring-gray-200 focus:outline-none"},{default:g(()=>[e.searchable?(a(),t("div",te,[R(l("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>m.value=r),type:"text",disabled:e.disabled,placeholder:"Buscar...",class:"focus:border-primary w-full px-3 py-2 text-sm outline-none disabled:bg-gray-100 disabled:text-gray-400"},null,8,le),[[U,m.value]])])):i("",!0),(a(!0),t(j,null,G(D.value,r=>(a(),q(n(J),{key:r.value,value:r.value,disabled:e.disabled,class:"hover:bg-primary/10 relative cursor-pointer px-4 py-2.5 transition select-none first:rounded-t-lg last:rounded-b-lg"},{default:g(()=>[l("span",{class:z([V.value?.value===r.value&&!e.disabled?"text-primary font-medium":"text-gray-800","block truncate"])},f(r.label),3),V.value?.value===r.value&&!e.disabled?(a(),t("span",ne,[c(n(P),{class:"h-4 w-4"})])):i("",!0)]),_:2},1032,["value","disabled"]))),128)),D.value.length===0?(a(),t("div",oe," No se encontraron opciones. ")):i("",!0)]),_:1},8,["style"])):i("",!0)]))])]),_:1},8,["modelValue","disabled"]),l("p",{class:z(["mt-1 flex min-h-[1.25rem] items-center gap-1 text-xs text-red-400 transition-opacity duration-200",{"opacity-100":!!e.error,"opacity-0":!e.error}])},[c(n(X),{class:"h-4 w-4 text-red-400"}),l("span",null,f(e.error||"‎"),1)],2)]))}});_.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"},{name:"undefined"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"{ value: string | number; label: string }"}]}},{name:"error",required:!1,type:{name:"string"}},{name:"searchable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseSelect.vue"]};const fe={title:"Base/BaseSelect",component:_,tags:["autodocs"],args:{modelValue:null,label:"Categoría",placeholder:"Seleccionar...",options:[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3"}]}},v={},y={args:{error:"Debes elegir una opción"}},h={args:{disabled:!0}},w={args:{searchable:!0}},x={render:S=>({components:{BaseSelect:_},setup(){return{args:S}},template:`
      <div class="space-y-4">
        <BaseSelect v-bind="args" size="sm" label="Chico" />
        <BaseSelect v-bind="args" size="md" label="Mediano" />
        <BaseSelect v-bind="args" size="lg" label="Grande" />
      </div>
    `})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Debes elegir una opción"
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <BaseSelect v-bind="args" size="sm" label="Chico" />
        <BaseSelect v-bind="args" size="md" label="Mediano" />
        <BaseSelect v-bind="args" size="lg" label="Grande" />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const ge=["Default","WithError","Disabled","Searchable","Sizes"];export{v as Default,h as Disabled,w as Searchable,x as Sizes,y as WithError,ge as __namedExportsOrder,fe as default};
