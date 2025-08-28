import{d as V,c as p,a as r,b as o,e as s,f,t as m,r as v,l as C,u as q,n as x,o as a}from"./iframe-D2UynokD.js";import{C as _}from"./check-DIC8mgHo.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-B_XeVtI_.js";const B=["for"],P={key:0,class:"text-red-600"},w={class:"relative inline-flex items-center cursor-pointer"},N=["id","checked","disabled"],S={class:"flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 transition duration-200 ease-in-out peer-focus:ring-2 peer-focus:ring-primary/40 peer-hover:border-primary peer-checked:border-primary peer-checked:bg-primary"},D=["for"],T={key:0,class:"text-red-600"},E={key:1,class:"mt-1 text-sm text-[#f44336]"},b=V({__name:"BaseCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},error:{},id:{},required:{type:Boolean},labelPosition:{default:"right"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(g,{emit:h}){const c=g,y=h,d=p(()=>c.id||`checkbox-${Math.random().toString(36).substring(2,9)}`),u=p(()=>c.labelPosition==="top");function k(e){c.disabled||y("update:modelValue",e.target.checked)}return(e,L)=>(a(),r("div",null,[e.label&&u.value?(a(),r("label",{key:0,for:d.value,class:"mb-1 block text-sm font-medium text-gray-700"},[e.required?(a(),r("span",P,"*")):o("",!0),f(" "+m(e.label),1)],8,B)):o("",!0),s("div",{class:x(["flex",u.value?"flex-row":"items-center gap-2",e.disabled?"opacity-50 cursor-not-allowed":""])},[s("label",w,[s("input",{id:d.value,type:"checkbox",checked:e.modelValue,disabled:e.disabled,onChange:k,class:"peer absolute h-5 w-5 opacity-0 cursor-pointer"},null,40,N),s("div",S,[e.modelValue?(a(),C(q(_),{key:0,class:"h-3 w-3 text-white"})):o("",!0)])]),e.label&&!u.value?(a(),r("label",{key:0,for:d.value,class:"cursor-pointer text-sm font-medium text-gray-700"},[e.required?(a(),r("span",T,"*")):o("",!0),f(" "+m(e.label),1)],8,D)):o("",!0),v(e.$slots,"default")],2),e.error?(a(),r("p",E,m(e.error),1)):o("",!0)]))}});b.__docgenInfo={exportName:"default",displayName:"BaseCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"id",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseCheckbox.vue"]};const j={title:"Base/BaseCheckbox",component:b,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},label:{control:"text"},error:{control:"text"},labelPosition:{control:{type:"select"},options:["top","right"]}}},t={args:{modelValue:!1,label:"Acepto los términos y condiciones"}},l={args:{modelValue:!0,label:"Notificaciones activadas"}},n={args:{modelValue:!1,label:"Debes aceptar para continuar",error:"Campo obligatorio",required:!0}},i={args:{modelValue:!1,label:"Preferencias",labelPosition:"top"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
