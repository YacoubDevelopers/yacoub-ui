import{d as V,c as p,a as r,b as o,e as s,f,t as d,r as v,l as _,u as x,n as C,o as a}from"./iframe-BQrUM3bD.js";import{C as q}from"./check-CwphIYzj.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-DyLCS-Jp.js";const B=["for"],P={key:0,class:"text-red-600"},N={class:"relative h-5 w-5 cursor-pointer"},S=["id","checked"],w={class:"border-primary peer-checked:bg-primary peer-checked:border-primary flex h-full w-full items-center justify-center rounded-sm border-2 transition"},D=["for"],T={key:0,class:"text-red-600"},E={key:1,class:"mt-1 text-sm text-[#f44336]"},b=V({__name:"BaseCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},error:{},id:{},required:{type:Boolean},labelPosition:{default:"right"}},emits:["update:modelValue"],setup(h,{emit:g}){const m=h,y=g,c=p(()=>m.id||`checkbox-${Math.random().toString(36).substring(2,9)}`),u=p(()=>m.labelPosition==="top");function k(e){y("update:modelValue",e.target.checked)}return(e,L)=>(a(),r("div",null,[e.label&&u.value?(a(),r("label",{key:0,for:c.value,class:"mb-1 block text-sm font-medium text-gray-700"},[e.required?(a(),r("span",P,"*")):o("",!0),f(" "+d(e.label),1)],8,B)):o("",!0),s("div",{class:C(["flex",u.value?"flex-row":"items-center gap-2"])},[s("label",N,[s("input",{id:c.value,type:"checkbox",checked:e.modelValue,class:"peer sr-only",onChange:k},null,40,S),s("div",w,[e.modelValue?(a(),_(x(q),{key:0,class:"h-3 w-3 text-white"})):o("",!0)])]),e.label&&!u.value?(a(),r("label",{key:0,for:c.value,class:"cursor-pointer text-sm font-medium text-gray-700"},[e.required?(a(),r("span",T,"*")):o("",!0),f(" "+d(e.label),1)],8,D)):o("",!0),v(e.$slots,"default")],2),e.error?(a(),r("p",E,d(e.error),1)):o("",!0)]))}});b.__docgenInfo={exportName:"default",displayName:"BaseCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseCheckbox.vue"]};const j={title:"Base/BaseCheckbox",component:b,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},label:{control:"text"},error:{control:"text"},labelPosition:{control:{type:"select"},options:["top","right"]}}},t={args:{modelValue:!1,label:"Acepto los términos y condiciones"}},l={args:{modelValue:!0,label:"Notificaciones activadas"}},n={args:{modelValue:!1,label:"Debes aceptar para continuar",error:"Campo obligatorio",required:!0}},i={args:{modelValue:!1,label:"Preferencias",labelPosition:"top"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Acepto los términos y condiciones'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: 'Notificaciones activadas'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Debes aceptar para continuar',
    error: 'Campo obligatorio',
    required: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Preferencias',
    labelPosition: 'top'
  }
}`,...i.parameters?.docs?.source}}};const z=["Default","Checked","WithError","LabelTop"];export{l as Checked,t as Default,i as LabelTop,n as WithError,z as __namedExportsOrder,j as default};
