import{u as c,a as _,b as v}from"./mobile.7cdf542b.js";import"./index.013eb64a.js";import"./iconify.924204c7.js";import"./index.bd63586e.js";import"./form.07a7ad88.js";import"./index.ba9357f8.js";import"./index.6700b933.js";import"./tree.c7a66f34.js";import"./vuedraggable.umd.9831e9f5.js";import"./index.es.1accc3d3.js";import{d as b,h as y,J as k,o as B,b as D,l as i,B as a}from"./framework.6b67ac47.js";import"./index.63550f19.js";import"./index.3bec44c8.js";import"./index.386fc70b.js";import"./omitBy.e7ddedc3.js";import"./baseSet.c6f802bb.js";import"./cloneDeep.707d050f.js";import"./initCloneObject.52366613.js";import"./getTag.0b794599.js";import"./merge.0f72b880.js";import"./basePickBy.93df484a.js";import"./pickBy.ee766c69.js";import"./snakeCase.6293e677.js";import"./baseMap.4525a961.js";import"./createCompounder.21553c6c.js";import"./index.0246ace1.js";import"./index.6dee874e.js";import"./index.c02d6d41.js";import"./use-form-item.2570ef11.js";import"./isNil.990ccdb3.js";import"./index.ac500038.js";import"./set.d1d08ef6.js";import"./pick.3451ca24.js";import"./index.af03a1c8.js";import"./zipWith.9574e409.js";import"./union.a37b7994.js";import"./data.09f78ca9.js";import"./isEqual.d232753d.js";import"./kebabCase.9388dd24.js";import"./state-local.dd516420.js";import"./vue.runtime.esm-bundler.21b58301.js";const V={name:"TestForm"},fo=b({...V,setup(g,{expose:l}){const{flowDetail:s,formData:e,beforeClick:n,beforeSubmit:u}=c(),p=y(),f={menuBtn:!1,span:24,column:[{prop:"title",type:"title",value:"这是一个自定义表单"},{label:"输入框",prop:"input",placeholder:"请输入值",rules:[{required:!0,message:"请输入值"}]}]},r=_(s);return n.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在选择审批人")},u.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在提交")},l({validate:()=>v(p)}),(o,t)=>{const d=k("avue-form");return B(),D(d,{ref_key:"formRef",ref:p,modelValue:i(e),"onUpdate:modelValue":t[0]||(t[0]=m=>a(e)?e.value=m:null),defaults:i(r),"onUpdate:defaults":t[1]||(t[1]=m=>a(r)?r.value=m:null),option:f},null,8,["modelValue","defaults"])}}});export{fo as default};