import{_ as a}from"./BaseSelectFlat-DsDrBpYg.js";import"./iframe-D2UynokD.js";import"./preload-helper-D9Z9MdNV.js";import"./listbox-trx8Za88.js";import"./chevron-down-Y1xztdbm.js";import"./createLucideIcon-B_XeVtI_.js";const d={title:"Base/BaseSelectFlat",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text"},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},searchable:{control:"boolean"},options:{control:"object"}}},l={args:{modelValue:null,label:"Selecciona una opción",placeholder:"Elige...",options:[{value:"1",label:"Opción 1"},{value:"2",label:"Opción 2"},{value:"3",label:"Opción 3"}]},render:e=>({components:{BaseSelectFlat:a},setup(){return{args:e}},template:`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">Valor: {{ args.modelValue }}</p>
      </div>
    `})},n={args:{modelValue:null,label:"Buscar opción",searchable:!0,options:[{value:"1",label:"Argentina"},{value:"2",label:"Bolivia"},{value:"3",label:"Chile"},{value:"4",label:"Paraguay"},{value:"5",label:"Uruguay"}]},render:e=>({components:{BaseSelectFlat:a},setup:()=>({args:e}),template:`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `})},r={args:{modelValue:null,label:"Con error",error:"Este campo es obligatorio",options:[{value:"1",label:"Rojo"},{value:"2",label:"Verde"},{value:"3",label:"Azul"}]},render:e=>({components:{BaseSelectFlat:a},setup:()=>({args:e}),template:`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `})},s={args:{modelValue:null,label:"Lista larga",searchable:!0,options:Array.from({length:50},(e,o)=>({value:String(o+1),label:`Opción ${o+1}`}))},render:e=>({components:{BaseSelectFlat:a},setup:()=>({args:e}),template:`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Selecciona una opción",
    placeholder: "Elige...",
    options: [{
      value: "1",
      label: "Opción 1"
    }, {
      value: "2",
      label: "Opción 2"
    }, {
      value: "3",
      label: "Opción 3"
    }]
  },
  render: args => ({
    components: {
      BaseSelectFlat
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">Valor: {{ args.modelValue }}</p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Buscar opción",
    searchable: true,
    options: [{
      value: "1",
      label: "Argentina"
    }, {
      value: "2",
      label: "Bolivia"
    }, {
      value: "3",
      label: "Chile"
    }, {
      value: "4",
      label: "Paraguay"
    }, {
      value: "5",
      label: "Uruguay"
    }]
  },
  render: args => ({
    components: {
      BaseSelectFlat
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Con error",
    error: "Este campo es obligatorio",
    options: [{
      value: "1",
      label: "Rojo"
    }, {
      value: "2",
      label: "Verde"
    }, {
      value: "3",
      label: "Azul"
    }]
  },
  render: args => ({
    components: {
      BaseSelectFlat
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: null,
    label: "Lista larga",
    searchable: true,
    options: Array.from({
      length: 50
    }, (_, i) => ({
      value: String(i + 1),
      label: \`Opción \${i + 1}\`
    }))
  },
  render: args => ({
    components: {
      BaseSelectFlat
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="max-w-xs">
        <BaseSelectFlat v-model="args.modelValue" v-bind="args" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const g=["Default","Searchable","WithError","ManyOptions"];export{l as Default,s as ManyOptions,n as Searchable,r as WithError,g as __namedExportsOrder,d as default};
