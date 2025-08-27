import{d as ee,g as i,c as C,w as ae,m as te,p as ne,a as u,b as w,e as n,f as S,t as v,h as m,n as A,u as b,F as E,k as O,i as L,o as d}from"./iframe-CLmCrtQ_.js";import{_ as F}from"./BaseSelectFlat-DCiT2OQl.js";import{_ as N}from"./BaseButton-BK4pjtBi.js";import{C as se}from"./chevron-down-FrOaP40-.js";import{C as re,a as le}from"./chevron-right-HVP88J-T.js";import"./preload-helper-D9Z9MdNV.js";import"./listbox-DUrRBSWP.js";import"./createLucideIcon-BKJMsp_R.js";const oe={key:0,class:"mb-1 block text-sm font-medium text-gray-800"},ie={key:0,class:"text-red-600"},ue={class:"relative w-full"},me=["value"],de={key:1,class:"absolute z-50 mt-2 w-full rounded-xl border border-gray-300 bg-white shadow-lg"},ce={class:"p-4"},pe={class:"mb-2 flex items-center justify-between"},ge={class:"flex items-center gap-2"},ve={class:"text-sm font-medium text-gray-800 capitalize"},fe={class:"rounded-md border border-gray-300 px-2 py-0.5 text-xs text-gray-700"},De={class:"mb-1 grid grid-cols-7 text-center text-xs font-medium text-gray-500"},be={class:"grid grid-cols-7 gap-y-1 text-sm"},he=["disabled","onClick"],ye={class:"mt-4 mb-3 flex items-center justify-center gap-2"},xe={class:"mt-2 flex justify-between gap-2"},we={key:2,class:"mt-1 text-sm text-[#f44336]"},f=ee({__name:"BaseDateTimePicker",props:{modelValue:{},label:{},error:{},required:{type:Boolean},minDate:{},isDisabled:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:Y}){const H=Y,l=r,p=i(!1),o=i(l.modelValue?new Date(l.modelValue):new Date),s=i(o.value.getMonth()),g=i(o.value.getFullYear()),c=i(o.value.getHours()%12||12),h=i(o.value.getMinutes()),D=i(o.value.getHours()>=12?"PM":"AM"),z=C(()=>l.modelValue?new Date(l.modelValue).toLocaleString("es-AR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):"Seleccionar fecha y hora"),R=C(()=>new Date(g.value,s.value).toLocaleString("es-AR",{month:"long"})),j=["Lu","Ma","Mi","Ju","Vi","Sa","Do"],U=C(()=>{const a=[],e=new Date(g.value,s.value,1),t=(e.getDay()+6)%7,y=new Date(e);y.setDate(y.getDate()-t);for(let T=0;T<42;T++){const x=new Date(y);x.setDate(x.getDate()+T),a.push({date:x,isCurrentMonth:x.getMonth()===s.value})}return a});function W(a,e){return a.getDate()===e.getDate()&&a.getMonth()===e.getMonth()&&a.getFullYear()===e.getFullYear()}function B(a){if(!l.minDate)return!1;const e=new Date(a.getFullYear(),a.getMonth(),a.getDate()),t=new Date(l.minDate.getFullYear(),l.minDate.getMonth(),l.minDate.getDate());return e<t}function $(a){B(a)||(o.value=new Date(a))}function I(){s.value===0?(s.value=11,g.value--):s.value--}function J(){s.value===11?(s.value=0,g.value++):s.value++}function G(){const a=new Date(o.value),e=D.value==="PM"&&c.value!==12?c.value+12:D.value==="AM"&&c.value===12?0:c.value;a.setHours(e),a.setMinutes(h.value),a.setSeconds(0),H("update:modelValue",a.toISOString()),p.value=!1}function K(){p.value=!1}ae(()=>l.modelValue,a=>{if(a){const e=new Date(a);o.value=e,s.value=e.getMonth(),g.value=e.getFullYear(),c.value=e.getHours()%12||12,h.value=e.getMinutes(),D.value=e.getHours()>=12?"PM":"AM"}});const P=i(null);function q(a){P.value&&!P.value.contains(a.target)&&(p.value=!1)}te(()=>document.addEventListener("click",q)),ne(()=>document.removeEventListener("click",q));const Q=Array.from({length:12},(a,e)=>({label:String(e+1),value:e+1})),X=Array.from({length:60},(a,e)=>({label:e.toString().padStart(2,"0"),value:e})),Z=[{label:"AM",value:"AM"},{label:"PM",value:"PM"}];return(a,e)=>(d(),u("div",{ref_key:"pickerRef",ref:P,class:"relative w-full"},[a.label?(d(),u("label",oe,[a.required?(d(),u("span",ie,"*")):w("",!0),S(" "+v(a.label),1)])):w("",!0),n("div",ue,[n("input",{type:"text",value:z.value,readonly:"",class:A(["w-full appearance-none rounded-lg border px-4 py-3 text-sm placeholder-gray-400 shadow-sm transition duration-200 outline-none","pr-10",a.error?"border-[#f44336]":"border-gray-300",a.isDisabled?"cursor-not-allowed bg-gray-100 text-gray-500":"cursor-pointer text-gray-700"]),onClick:e[0]||(e[0]=t=>!a.isDisabled&&(p.value=!p.value))},null,10,me),m(b(se),{class:"pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400"})]),p.value?(d(),u("div",de,[n("div",ce,[n("div",pe,[n("div",ge,[m(b(re),{class:"hover:text-primary h-4 w-4 cursor-pointer text-gray-600",onClick:I}),n("span",ve,v(R.value),1),m(b(le),{class:"hover:text-primary h-4 w-4 cursor-pointer text-gray-600",onClick:J})]),n("span",fe,v(g.value),1)]),n("div",De,[(d(),u(E,null,O(j,t=>n("span",{key:t},v(t),1)),64))]),n("div",be,[(d(!0),u(E,null,O(U.value,t=>(d(),u("button",{key:t.date.toISOString(),disabled:B(t.date),class:A(["flex h-8 w-8 items-center justify-center rounded-full",B(t.date)?"cursor-not-allowed text-gray-300":W(t.date,o.value)?"bg-primary text-white":t.isCurrentMonth?"text-gray-800 hover:bg-gray-100":"text-gray-400 hover:bg-gray-100"]),onClick:y=>$(t.date)},v(t.date.getDate()),11,he))),128))]),n("div",ye,[m(F,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=t=>c.value=t),options:b(Q),class:"w-14"},null,8,["modelValue","options"]),e[4]||(e[4]=n("span",{class:"font-medium text-gray-700"},":",-1)),m(F,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),options:b(X),class:"w-14"},null,8,["modelValue","options"]),m(F,{modelValue:D.value,"onUpdate:modelValue":e[3]||(e[3]=t=>D.value=t),options:Z,class:"w-16"},null,8,["modelValue"])]),n("div",xe,[m(N,{variant:"secondary",size:"sm",class:"w-full",onClick:K},{default:L(()=>[...e[5]||(e[5]=[S(" Cancelar ",-1)])]),_:1}),m(N,{variant:"primary",size:"sm",class:"w-full",onClick:G},{default:L(()=>[...e[6]||(e[6]=[S(" Aplicar ",-1)])]),_:1})])])])):w("",!0),a.error?(d(),u("p",we,v(a.error),1)):w("",!0)],512))}});f.__docgenInfo={exportName:"default",displayName:"BaseDateTimePicker",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"minDate",required:!1,type:{name:"Date"}},{name:"isDisabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseDateTimePicker.vue"]};const Se={title:"Base/BaseDateTimePicker",component:f,tags:["autodocs"],argTypes:{modelValue:{control:"text"},label:{control:"text"},error:{control:"text"},required:{control:"boolean"},isDisabled:{control:"boolean"},minDate:{control:"date"}}},V={args:{modelValue:null,label:"Fecha y hora"},render:r=>({components:{BaseDateTimePicker:f},setup(){return{args:r}},template:`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">
          Valor: {{ args.modelValue }}
        </p>
      </div>
    `})},k={args:{modelValue:null,label:"Fecha límite",error:"Este campo es obligatorio",required:!0},render:r=>({components:{BaseDateTimePicker:f},setup:()=>({args:r}),template:`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `})},M={args:{modelValue:null,label:"Fecha deshabilitada",isDisabled:!0},render:r=>({components:{BaseDateTimePicker:f},setup:()=>({args:r}),template:`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `})},_={args:{modelValue:null,label:"Fecha mínima (hoy)",minDate:new Date},render:r=>({components:{BaseDateTimePicker:f},setup:()=>({args:r}),template:`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    `})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Fecha y hora"
  },
  render: args => ({
    components: {
      BaseDateTimePicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">
          Valor: {{ args.modelValue }}
        </p>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Fecha límite",
    error: "Este campo es obligatorio",
    required: true
  },
  render: args => ({
    components: {
      BaseDateTimePicker
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Fecha deshabilitada",
    isDisabled: true
  },
  render: args => ({
    components: {
      BaseDateTimePicker
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Fecha mínima (hoy)",
    minDate: new Date()
  },
  render: args => ({
    components: {
      BaseDateTimePicker
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-sm">
        <BaseDateTimePicker v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};const Fe=["Default","WithError","Disabled","WithMinDate"];export{V as Default,M as Disabled,k as WithError,_ as WithMinDate,Fe as __namedExportsOrder,Se as default};
