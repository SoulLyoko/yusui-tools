import{u as _,a as v,b}from"./mobile.3ed42tlh.js";import"./index.o5MRxqVR.js";import"./index.es.3va9VJpF.js";import"./iconify.hZGCkEgm.js";import"./tree.oD2qG2eZ.js";import"./index.dun7Vczt.js";import"./vuedraggable.umd.ByMyj2qT.js";import"./index.Jz04D3S3.js";import"./form.o6KC_1qt.js";import"./index.cMPhMb2R.js";import{d as D,h as y,D as B,o as g,b as k,m as i,a5 as a}from"./framework.Zz1SbNKh.js";import"./index.8UZGHsZ4.js";import"./index.kqOif1Uk.js";import"./index.Y-vznQha.js";import"./get.ibBWnMyK.js";import"./baseGet.aXQPWsrt.js";import"./index.-WWcWDdB.js";import"./index.uIvVZULY.js";import"./omit.pAQ7TWyz.js";import"./merge.etFcUWJt.js";import"./Uint8Array.fNwniHUy.js";import"./arrayPush.9gUpYHDz.js";import"./baseSet.mp4sGx_T.js";import"./initCloneObject.MjDVq9Sj.js";import"./basePickBy.r2fGlmFx.js";import"./getTag.9nUBxPXw.js";import"./cloneDeep.r1x5-OIa.js";import"./snakeCase.a9RyInPp.js";import"./pickBy.firGk55j.js";import"./createCompounder.UcKAPtLe.js";import"./omitBy.5Vl3Jw6n.js";import"./isNil.-q_uwI5T.js";import"./index.zhonhExz.js";import"./typescript.cgwlg1u4.js";import"./index.-UPDG9fq.js";import"./fromPairs.E3iD47Fd.js";import"./use-global-config.Y-AjjM1T.js";import"./set.trCNu2cT.js";import"./pick.hwSZBMEn.js";import"./index.qJIJBhna.js";import"./zipWith.cDKToSoU.js";import"./union.yiA3EQr_.js";import"./data.qFFybvHa.js";import"./kebabCase.e_ZWS89_.js";import"./vue.runtime.esm-bundler._bGFGbU0.js";import"./isEqual.GBRS_oe3.js";const V={name:"TestForm"},yo=D({...V,setup(w,{expose:l}){const{flowDetail:s,formData:t,onAfterGetDetail:n,onBeforeClick:u,onBeforeSubmit:f}=_(),p=y(),d={menuBtn:!1,span:24,column:[{prop:"title",type:"title",value:"这是一个自定义表单"},{label:"输入框",prop:"input",placeholder:"请输入值",rules:[{required:!0,message:"请输入值"}]}]},r=v(s);return n(o=>{console.log("流程详情",o)}),u(o=>{o.buttonKey==="flow_pass"&&console.log("正在选择审批人")}),f(o=>{o.buttonKey==="flow_pass"&&(console.log("正在提交"),t.value={...t.value})}),l({validate:()=>b(p)}),(o,e)=>{const c=B("avue-form");return g(),k(c,{ref_key:"formRef",ref:p,modelValue:i(t),"onUpdate:modelValue":e[0]||(e[0]=m=>a(t)?t.value=m:null),defaults:i(r),"onUpdate:defaults":e[1]||(e[1]=m=>a(r)?r.value=m:null),option:d},null,8,["modelValue","defaults"])}}});export{yo as default};
