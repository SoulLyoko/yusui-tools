import{V as c,P as _,g as v}from"./mobile.5374d920.js";import"./index.21eae476.js";import"./iconify.e6294576.js";import"./index.90304c61.js";import"./index.8960aed5.js";import"./tree.992e55ef.js";import"./vuedraggable.umd.47e8adaf.js";import{d as b,h as y,J as V,o as g,b as k,l as m,B as p}from"./framework.25a4be6c.js";import"./index.95595333.js";import"./index.5ca0e709.js";import"./omit.f20ee233.js";import"./index.8d72fe00.js";import"./dayjs.min.6c784c7f.js";import"./index.9559e405.js";import"./index.0a95bdf1.js";import"./snakeCase.ee26b702.js";import"./createCompounder.3a8aecc3.js";import"./omitBy.f3a2218d.js";import"./index.vue_vue_type_script_setup_true_lang.ab20c269.js";import"./differenceBy.0c7475e2.js";import"../app.35571e6d.js";import"./theme.99ee33a4.js";import"./kebabCase.85860abf.js";import"./vue.runtime.esm-bundler.d01e200b.js";const B={name:"TestForm"},X=b({...B,setup(D,{expose:s}){const{flowDetail:i,formData:t,beforeClick:n,beforeSubmit:u}=c(),a=y(),f={menuBtn:!1,span:24,column:[{prop:"title",type:"title",value:"这是一个自定义表单"},{label:"输入框",prop:"input",placeholder:"请输入值",rules:[{required:!0,message:"请输入值"}]}]},r=_(i);return n.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在选择审批人")},u.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在提交")},s({validate:()=>v(a)}),(o,e)=>{const d=V("avue-form");return g(),k(d,{ref_key:"formRef",ref:a,modelValue:m(t),"onUpdate:modelValue":e[0]||(e[0]=l=>p(t)?t.value=l:null),defaults:m(r),"onUpdate:defaults":e[1]||(e[1]=l=>p(r)?r.value=l:null),option:f},null,8,["modelValue","defaults"])}}});export{X as default};
