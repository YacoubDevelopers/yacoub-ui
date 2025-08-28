import{d as $,g as z,w as A,p as N,l as j,h,i as M,A as D,T as H,o as n,a as d,b as i,B as W,e as b,n as G,r as w,t as V,f as E,C as I}from"./iframe-D2UynokD.js";import{_ as k}from"./BaseButton-DfMB5tIr.js";import"./preload-helper-D9Z9MdNV.js";const K={key:0,class:"sticky top-0 z-10 flex shrink-0 items-start justify-between border-b border-gray-200 bg-white p-4 rounded-none sm:rounded-t-xl"},P={key:0,class:"text-lg font-semibold text-gray-900"},R={class:"flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-4"},U={key:1,class:"sticky bottom-0 z-10 shrink-0 border-t border-gray-200 bg-white p-4 rounded-none sm:rounded-b-xl"},J={key:0,class:"flex items-center justify-end gap-3"},q=$({__name:"BaseModal",props:{modelValue:{type:Boolean},title:{},width:{default:"lg"},confirm:{type:Boolean,default:!1},confirmText:{default:"Confirmar"},cancelText:{default:"Cancelar"},destructive:{type:Boolean,default:!1},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0}},emits:["update:modelValue","confirm","cancel"],setup(a,{emit:x}){const o=a,s=x,t=()=>s("update:modelValue",!1),S=()=>{s("confirm"),t()},L=()=>{s("cancel"),t()},O=()=>{o.closeOnBackdrop&&t()},F=`sm:${{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl","6xl":"max-w-6xl","7xl":"max-w-7xl"}[o.width]}`,m=z(null);let C=null;const y=e=>{if(e.key!=="Tab"||!m.value)return;const r=m.value.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');if(!r.length)return;const T=r[0],_=r[r.length-1];e.shiftKey&&document.activeElement===T?(e.preventDefault(),_.focus()):!e.shiftKey&&document.activeElement===_&&(e.preventDefault(),T.focus())},B=e=>{e.key==="Escape"&&o.closeOnEsc&&t()};return A(()=>o.modelValue,async e=>{e?(C=document.activeElement,document.body.classList.add("overflow-hidden"),await I(),m.value?.focus(),window.addEventListener("keydown",y),window.addEventListener("keydown",B)):(document.body.classList.remove("overflow-hidden"),window.removeEventListener("keydown",y),window.removeEventListener("keydown",B),C?.focus())}),N(()=>{window.removeEventListener("keydown",y),window.removeEventListener("keydown",B)}),(e,r)=>(n(),j(H,{to:"body"},[h(D,{name:"fade"},{default:M(()=>[e.modelValue?(n(),d("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4",tabindex:"-1",role:"dialog","aria-modal":"true",onClick:W(O,["self"])},[b("div",{ref_key:"modalRef",ref:m,class:G(["flex w-full h-screen sm:h-auto sm:w-auto max-h-screen sm:max-h-[90vh] flex-col bg-white shadow-xl transform transition-all duration-200 sm:rounded-xl sm:my-8 overflow-hidden rounded-2xl",F])},[e.title||e.$slots.header?(n(),d("header",K,[w(e.$slots,"header",{},()=>[e.title?(n(),d("h2",P,V(e.title),1)):i("",!0)],!0),b("button",{class:"text-xl leading-none text-gray-500 hover:text-gray-800 focus:outline-none","aria-label":"Cerrar",onClick:t}," × ")])):i("",!0),b("section",R,[w(e.$slots,"default",{},void 0,!0)]),e.$slots.footer||e.confirm?(n(),d("footer",U,[w(e.$slots,"footer",{},()=>[e.confirm?(n(),d("div",J,[h(k,{variant:"outline",onClick:L},{default:M(()=>[E(V(e.cancelText),1)]),_:1}),h(k,{variant:e.destructive?"danger":"primary",onClick:S},{default:M(()=>[E(V(e.confirmText),1)]),_:1},8,["variant"])])):i("",!0)],!0)])):i("",!0)],2)])):i("",!0)]),_:3})]))}}),Q=(a,x)=>{const o=a.__vccOpts||a;for(const[s,t]of x)o[s]=t;return o},l=Q(q,[["__scopeId","data-v-65e33d42"]]);q.__docgenInfo={exportName:"default",displayName:"BaseModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'},{name:'"4xl"'},{name:'"5xl"'},{name:'"6xl"'},{name:'"7xl"'}]},defaultValue:{func:!1,value:'"lg"'}},{name:"confirm",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"confirmText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Confirmar"'}},{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Cancelar"'}},{name:"destructive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"closeOnBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"confirm"},{name:"cancel"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseModal.vue"]};const ae={title:"Base/BaseModal",component:l,tags:["autodocs"],argTypes:{width:{control:{type:"select"},options:["sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl"]},tall:{control:"boolean"},autoTall:{control:"boolean"},modelValue:{control:"boolean"},title:{control:"text"}}},c={args:{modelValue:!0,title:"Título del Modal",width:"lg"},render:a=>({components:{BaseModal:l},setup(){return{args:a}},template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600">
          Este es un modal básico con contenido por defecto.
        </p>
      </BaseModal>
    `})},u={args:{modelValue:!0,title:"Modal con footer"},render:a=>({components:{BaseModal:l,BaseButton:k},setup(){return{args:a}},template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600 mb-4">
          Aquí podés poner acciones en el footer.
        </p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="secondary">Cancelar</BaseButton>
            <BaseButton variant="primary">Guardar</BaseButton>
          </div>
        </template>
      </BaseModal>
    `})},p={args:{modelValue:!0},render:a=>({components:{BaseModal:l},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="text-primary text-xl">⚡</span>
            <h2 class="text-lg font-bold text-primary">Header personalizado</h2>
          </div>
        </template>
        <p>Podés sobrescribir el header con el slot <code>header</code>.</p>
      </BaseModal>
    `})},f={args:{modelValue:!0,title:"Modal alto (tall)",tall:!0},render:a=>({components:{BaseModal:l},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 40" :key="i">Fila {{ i }}</p>
        </div>
      </BaseModal>
    `})},g={args:{modelValue:!0,title:"Modal autoTall",autoTall:!0},render:a=>({components:{BaseModal:l},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 20" :key="i">Contenido dinámico {{ i }}</p>
        </div>
      </BaseModal>
    `})},v={args:{modelValue:!0},render:a=>({components:{BaseModal:l},setup:()=>({args:a}),template:`
      <div class="space-y-6">
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'sm', title: 'Modal sm'}">
          <p>Modal pequeño (sm)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'lg', title: 'Modal lg'}">
          <p>Modal mediano (lg)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: '3xl', title: 'Modal 3xl'}">
          <p>Modal ancho (3xl)</p>
        </BaseModal>
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: "Título del Modal",
    width: "lg"
  },
  render: args => ({
    components: {
      BaseModal
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600">
          Este es un modal básico con contenido por defecto.
        </p>
      </BaseModal>
    \`
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: "Modal con footer"
  },
  render: args => ({
    components: {
      BaseModal,
      BaseButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600 mb-4">
          Aquí podés poner acciones en el footer.
        </p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <BaseButton variant="secondary">Cancelar</BaseButton>
            <BaseButton variant="primary">Guardar</BaseButton>
          </div>
        </template>
      </BaseModal>
    \`
  })
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  render: args => ({
    components: {
      BaseModal
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="text-primary text-xl">⚡</span>
            <h2 class="text-lg font-bold text-primary">Header personalizado</h2>
          </div>
        </template>
        <p>Podés sobrescribir el header con el slot <code>header</code>.</p>
      </BaseModal>
    \`
  })
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: "Modal alto (tall)",
    tall: true
  },
  render: args => ({
    components: {
      BaseModal
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 40" :key="i">Fila {{ i }}</p>
        </div>
      </BaseModal>
    \`
  })
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    title: "Modal autoTall",
    autoTall: true
  },
  render: args => ({
    components: {
      BaseModal
    },
    setup: () => ({
      args
    }),
    template: \`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 20" :key="i">Contenido dinámico {{ i }}</p>
        </div>
      </BaseModal>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true
  },
  render: args => ({
    components: {
      BaseModal
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="space-y-6">
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'sm', title: 'Modal sm'}">
          <p>Modal pequeño (sm)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: 'lg', title: 'Modal lg'}">
          <p>Modal mediano (lg)</p>
        </BaseModal>
        <BaseModal v-model="args.modelValue" v-bind="{...args, width: '3xl', title: 'Modal 3xl'}">
          <p>Modal ancho (3xl)</p>
        </BaseModal>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const oe=["Default","WithFooter","CustomHeader","Tall","AutoTall","Widths"];export{g as AutoTall,p as CustomHeader,c as Default,f as Tall,v as Widths,u as WithFooter,oe as __namedExportsOrder,ae as default};
