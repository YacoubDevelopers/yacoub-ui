import{d,x as u,y as p,j as c,v as m,a as i,o as x,q as f,g}from"./iframe-CLmCrtQ_.js";import"./preload-helper-D9Z9MdNV.js";const v=["placeholder"],o=d({__name:"BaseTextarea",props:u({placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=p(e,"modelValue"),t=e;return(l,s)=>c((x(),i("textarea",f({"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),placeholder:t.placeholder,class:"w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"},l.$attrs),null,16,v)),[[m,a.value]])}});o.__docgenInfo={exportName:"default",displayName:"BaseTextarea",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/yacoub-ui/yacoub-ui/src/components/BaseTextarea.vue"]};const T={title:"Forms/BaseTextarea",component:o},r={render:e=>({components:{BaseTextarea:o},setup(){const a=g("");return{args:e,value:a}},template:'<BaseTextarea v-model="value" v-bind="args" />'}),args:{placeholder:"Enter text"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      BaseTextarea
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: '<BaseTextarea v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Enter text'
  }
}`,...r.parameters?.docs?.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,T as default};
