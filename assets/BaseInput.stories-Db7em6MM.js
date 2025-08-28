import{d as g,c as f,a,b as d,e as y,f as h,t as p,q as v,o as r}from"./iframe-D2UynokD.js";import"./preload-helper-D9Z9MdNV.js";const B={key:0,class:"mb-1 block text-sm font-medium text-gray-700"},V={key:0,class:"text-red-600"},q=["type","value","placeholder","disabled"],I={key:1,class:"mt-1 flex items-center gap-1 text-sm text-[#f44336]"},i=g({__name:"BaseInput",props:{modelValue:{},label:{},error:{},type:{default:"text"},required:{type:Boolean},size:{default:"md"},placeholder:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l){const m=l,c=f(()=>{switch(m.size){case"sm":return"px-3 py-1.5 text-sm";case"lg":return"px-4 py-4 text-base";default:return"px-4 py-3 text-sm"}});return(e,u)=>(r(),a("div",null,[e.label?(r(),a("label",B,[e.required?(r(),a("span",V,"*")):d("",!0),h(" "+p(e.label),1)])):d("",!0),y("input",v(e.$attrs,{type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,class:["w-full appearance-none rounded-lg border placeholder-gray-400 shadow-sm transition duration-200 outline-none",c.value,e.error?"border-[#f44336]":"focus:border-primary focus:ring-primary border-gray-300 focus:ring-1",e.disabled?"cursor-not-allowed bg-gray-100 text-gray-500":"text-gray-700"],onInput:u[0]||(u[0]=b=>e.$emit("update:modelValue",b.target.value))}),null,16,q),e.error?(r(),a("p",I,p(e.error),1)):d("",!0)]))}});i.__docgenInfo={exportName:"default",displayName:"BaseInput",description:"",tags:{},props:[{name:"modelValue",description:"Valor del input",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"},{name:"undefined"}]}},{name:"label",description:"Label opcional que se muestra arriba",required:!1,type:{name:"string"}},{name:"error",description:"Mensaje de error",required:!1,type:{name:"string"}},{name:"type",description:"Tipo de input (text, email, password, number, etc.)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"required",description:"Muestra un asterisco rojo en el label",required:!1,type:{name:"boolean"}},{name:"size",description:"Tamaño del input",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"placeholder",description:"Texto que se muestra cuando el input está vacío",required:!1,type:{name:"string"}},{name:"disabled",description:"Deshabilita el input",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseInput.vue"]};const N={title:"Base/BaseInput",component:i,tags:["autodocs"],args:{modelValue:"",label:"Nombre",placeholder:"Escribí tu nombre..."}},s={},n={args:{error:"Este campo es obligatorio"}},t={args:{modelValue:"No editable",disabled:!0}},o={render:l=>({components:{BaseInput:i},setup(){return{args:l}},template:`
      <div class="space-y-4">
        <BaseInput v-bind="args" size="sm" label="Chico" placeholder="sm" />
        <BaseInput v-bind="args" size="md" label="Mediano" placeholder="md" />
        <BaseInput v-bind="args" size="lg" label="Grande" placeholder="lg" />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Este campo es obligatorio'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'No editable',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <BaseInput v-bind="args" size="sm" label="Chico" placeholder="sm" />
        <BaseInput v-bind="args" size="md" label="Mediano" placeholder="md" />
        <BaseInput v-bind="args" size="lg" label="Grande" placeholder="lg" />
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const k=["Default","WithError","Disabled","Sizes"];export{s as Default,t as Disabled,o as Sizes,n as WithError,k as __namedExportsOrder,N as default};
