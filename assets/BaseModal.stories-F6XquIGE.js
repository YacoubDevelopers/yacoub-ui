import{d as F,g as V,w as H,m as z,p as A,l as $,h as D,i as N,A as j,T as R,o as r,a as i,b as m,B as W,e as u,n as q,u as L,r as k,t as G,C as I}from"./iframe-CLmCrtQ_.js";import{_ as K}from"./BaseButton-BK4pjtBi.js";import"./preload-helper-D9Z9MdNV.js";const O={class:"flex h-full flex-col overflow-y-auto"},P={key:0,class:"flex items-start justify-between border-b border-gray-200 bg-white p-4 rounded-t-xl"},U={key:0,class:"text-lg font-semibold text-gray-800"},J={key:1,class:"shrink-0 border-t border-gray-200 bg-white p-4 rounded-b-xl"},S=F({__name:"BaseModal",props:{modelValue:{type:Boolean},title:{},width:{default:"lg"},tall:{type:Boolean,default:!1},autoTall:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:y}){const o=a,B=y,l=()=>B("update:modelValue",!1),T={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl","6xl":"max-w-6xl","7xl":"max-w-7xl"}[o.width],h=V(null),d=V(null),s=V(!1);let _=null;const M=()=>{if(o.tall){s.value=!0;return}if(o.autoTall&&h.value){const e=h.value.scrollHeight;s.value=e>window.innerHeight*.7}else s.value=!1},w=e=>{if(e.key!=="Tab"||!d.value)return;const n=d.value.querySelectorAll('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])');if(n.length===0)return;const E=n[0],C=n[n.length-1];e.shiftKey&&document.activeElement===E?(e.preventDefault(),C.focus()):!e.shiftKey&&document.activeElement===C&&(e.preventDefault(),E.focus())},b=e=>{e.key==="Escape"&&l()};return H(()=>o.modelValue,async e=>{e?(_=document.activeElement,document.body.classList.add("overflow-hidden"),await I(),M(),d.value?.focus(),window.addEventListener("keydown",w),window.addEventListener("keydown",b)):(document.body.classList.remove("overflow-hidden"),window.removeEventListener("keydown",w),window.removeEventListener("keydown",b),_?.focus())}),z(()=>{window.addEventListener("resize",M)}),A(()=>{window.removeEventListener("resize",M),window.removeEventListener("keydown",w),window.removeEventListener("keydown",b)}),(e,n)=>(r(),$(R,{to:"body"},[D(j,{name:"fade"},{default:N(()=>[e.modelValue?(r(),i("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm",tabindex:"0",role:"dialog","aria-modal":"true",onClick:W(l,["self"])},[u("div",{ref_key:"modalRef",ref:d,class:q(["flex w-full flex-col rounded-xl bg-white shadow-xl transform transition-all duration-200",s.value?[L(T),"h-screen max-h-screen"]:L(T)])},[u("div",O,[e.title||e.$slots.header?(r(),i("header",P,[k(e.$slots,"header",{},()=>[e.title?(r(),i("h2",U,G(e.title),1)):m("",!0)],!0),u("button",{class:"text-xl leading-none text-gray-500 hover:text-gray-800","aria-label":"Cerrar",onClick:l}," × ")])):m("",!0),u("section",{ref_key:"contentRef",ref:h,class:q([s.value?"flex-1 overflow-y-auto px-6 py-4":"max-h-[70vh] overflow-y-auto px-6 py-4"])},[k(e.$slots,"default",{},void 0,!0)],2),e.$slots.footer?(r(),i("footer",J,[k(e.$slots,"footer",{},void 0,!0)])):m("",!0)])],2)])):m("",!0)]),_:3})]))}}),Q=(a,y)=>{const o=a.__vccOpts||a;for(const[B,l]of y)o[B]=l;return o},t=Q(S,[["__scopeId","data-v-4cff2702"]]);S.__docgenInfo={exportName:"default",displayName:"BaseModal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"3xl"'},{name:'"4xl"'},{name:'"5xl"'},{name:'"6xl"'},{name:'"7xl"'}]},defaultValue:{func:!1,value:'"lg"'}},{name:"tall",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autoTall",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseModal.vue"]};const ae={title:"Base/BaseModal",component:t,tags:["autodocs"],argTypes:{width:{control:{type:"select"},options:["sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl"]},tall:{control:"boolean"},autoTall:{control:"boolean"},modelValue:{control:"boolean"},title:{control:"text"}}},c={args:{modelValue:!0,title:"Título del Modal",width:"lg"},render:a=>({components:{BaseModal:t},setup(){return{args:a}},template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <p class="text-gray-600">
          Este es un modal básico con contenido por defecto.
        </p>
      </BaseModal>
    `})},p={args:{modelValue:!0,title:"Modal con footer"},render:a=>({components:{BaseModal:t,BaseButton:K},setup(){return{args:a}},template:`
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
    `})},f={args:{modelValue:!0},render:a=>({components:{BaseModal:t},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="text-primary text-xl">⚡</span>
            <h2 class="text-lg font-bold text-primary">Header personalizado</h2>
          </div>
        </template>
        <p>Podés sobrescribir el header con el slot <code>header</code>.</p>
      </BaseModal>
    `})},g={args:{modelValue:!0,title:"Modal alto (tall)",tall:!0},render:a=>({components:{BaseModal:t},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 40" :key="i">Fila {{ i }}</p>
        </div>
      </BaseModal>
    `})},v={args:{modelValue:!0,title:"Modal autoTall",autoTall:!0},render:a=>({components:{BaseModal:t},setup:()=>({args:a}),template:`
      <BaseModal v-model="args.modelValue" v-bind="args">
        <div class="space-y-4">
          <p v-for="i in 20" :key="i">Contenido dinámico {{ i }}</p>
        </div>
      </BaseModal>
    `})},x={args:{modelValue:!0},render:a=>({components:{BaseModal:t},setup:()=>({args:a}),template:`
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const oe=["Default","WithFooter","CustomHeader","Tall","AutoTall","Widths"];export{v as AutoTall,f as CustomHeader,c as Default,g as Tall,x as Widths,p as WithFooter,oe as __namedExportsOrder,ae as default};
