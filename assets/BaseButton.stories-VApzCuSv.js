import{_ as n}from"./BaseButton-CzB64Zk9.js";import"./iframe-BQrUM3bD.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Base/BaseButton",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"}}},a={args:{variant:"primary",size:"md",disabled:!1,loading:!1,type:"button"},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Primary</BaseButton>'})},t={args:{variant:"secondary",size:"md"},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Secondary</BaseButton>'})},s={args:{variant:"danger",size:"md"},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Eliminar</BaseButton>'})},r={args:{variant:"outline",size:"md"},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Outline</BaseButton>'})},o={args:{variant:"primary",size:"md",disabled:!0},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Deshabilitado</BaseButton>'})},i={args:{variant:"primary",size:"md",loading:!0},render:e=>({components:{BaseButton:n},setup:()=>({args:e}),template:'<BaseButton v-bind="args">Guardar</BaseButton>'})},d={render:()=>({components:{BaseButton:n},template:`
      <div class="flex gap-4 items-center">
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    type: "button"
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Primary</BaseButton>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md"
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Secondary</BaseButton>\`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    size: "md"
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Eliminar</BaseButton>\`
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md"
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Outline</BaseButton>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Deshabilitado</BaseButton>\`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    loading: true
  },
  render: args => ({
    components: {
      BaseButton
    },
    setup: () => ({
      args
    }),
    template: \`<BaseButton v-bind="args">Guardar</BaseButton>\`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseButton
    },
    template: \`
      <div class="flex gap-4 items-center">
        <BaseButton size="sm">Small</BaseButton>
        <BaseButton size="md">Medium</BaseButton>
        <BaseButton size="lg">Large</BaseButton>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};const c=["Primary","Secondary","Danger","Outline","Disabled","Loading","Sizes"];export{s as Danger,o as Disabled,i as Loading,r as Outline,a as Primary,t as Secondary,d as Sizes,c as __namedExportsOrder,p as default};
