import{h as E,Y as g,d as F,D as y,o as r,b as B,m as p,a5 as u,g as d,c,I as e,F as m,p as f,q as v,k as n,_ as b,a as o,R as A}from"./chunks/framework.9dEYo5Bo.js";function C(){const i=E({});return g(()=>import("./chunks/index.wU9a0uRw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(s=>{i.value=s.defaultGraphData()}),i}function _(){const i=E({});return g(()=>import("./chunks/index.O8M11QJM.js").then(s=>s.B),__vite__mapDeps([27,28,29,30,31,32,6,7,8,5,9,10,11,2,3,4,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(s=>{i.value=s.defaultOptions}),i}const w=F({__name:"designer",setup(i){const s=C(),h=_(),k={buttonList:[{name:"保存草稿",buttonKey:"flow_draft"},{name:"发送",buttonKey:"flow_pass"}],formPropertyList:[{label:"字段1",prop:"field1"},{label:"字段2",prop:"field2"},{label:"审批表单",prop:"formTab"},{label:"附件资料",prop:"fileTab"},{label:"流程跟踪",prop:"trackTab"}],fieldsDic:[{label:"字段1",value:"field1"},{label:"字段2",value:"field2"}]};return(l,a)=>{const t=y("FlowDesign");return r(),B(t,{modelValue:p(s),"onUpdate:modelValue":a[0]||(a[0]=D=>u(s)?s.value=D:null),"form-options":p(h),"data-options":k,style:{height:"800px"}},null,8,["modelValue","form-options"])}}}),x=i=>(f("data-v-632c264d"),i=i(),v(),i),I=x(()=>n("div",{class:"flow-status-legend"},[n("div",{class:"legend-item"},[n("div",{class:"legend-color"}),n("span",{class:"legend-text"},"已办")])],-1)),q=F({__name:"viewer",setup(i){const s=C(),h=d(()=>{var l;return(l=s.value.flowElementList)==null?void 0:l.map(a=>({id:a.key,style:{fill:"lightgreen"}}))}),k=d(()=>{var l;return(l=s.value.flowElementList)==null?void 0:l.map(a=>({id:a.key,content:`<div>${a.key}</div>`}))});return(l,a)=>{const t=y("FlowDesign");return r(),c(m,null,[I,e(t,{"model-value":p(s),type:"viewer",styles:h.value,tooltips:k.value,style:{height:"400px"}},null,8,["model-value","styles","tooltips"])],64)}}}),T=b(q,[["__scopeId","data-v-632c264d"]]),P=n("h1",{id:"flowdesign",tabindex:"-1"},[o("FlowDesign "),n("a",{class:"header-anchor",href:"#flowdesign","aria-label":'Permalink to "FlowDesign"'},"​")],-1),L=n("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),O=A("",2),S=A("",7),R=JSON.parse('{"title":"FlowDesign","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"flow-design/demo.md","filePath":"flow-design/demo.md"}'),V={name:"flow-design/demo.md"},G=Object.assign(V,{setup(i){return(s,h)=>(r(),c("div",null,[P,L,e(w),O,e(T),S]))}});export{R as __pageData,G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.wU9a0uRw.js","assets/chunks/data.xRVzXqJA.js","assets/chunks/form.2z0RtCSP.js","assets/chunks/zipWith.cDKToSoU.js","assets/chunks/union.yiA3EQr_.js","assets/chunks/baseGet.aXQPWsrt.js","assets/chunks/cloneDeep.r1x5-OIa.js","assets/chunks/Uint8Array.fNwniHUy.js","assets/chunks/arrayPush.9gUpYHDz.js","assets/chunks/baseSet.mp4sGx_T.js","assets/chunks/initCloneObject.MjDVq9Sj.js","assets/chunks/getTag.9nUBxPXw.js","assets/chunks/pickBy.firGk55j.js","assets/chunks/get.ibBWnMyK.js","assets/chunks/basePickBy.r2fGlmFx.js","assets/chunks/omit.pAQ7TWyz.js","assets/chunks/merge.etFcUWJt.js","assets/chunks/createCompounder.UcKAPtLe.js","assets/chunks/snakeCase.a9RyInPp.js","assets/chunks/omitBy.5Vl3Jw6n.js","assets/chunks/pick.hwSZBMEn.js","assets/chunks/set.trCNu2cT.js","assets/chunks/isEqual.GBRS_oe3.js","assets/chunks/isNil.-q_uwI5T.js","assets/chunks/fromPairs.E3iD47Fd.js","assets/chunks/kebabCase.e_ZWS89_.js","assets/chunks/theme.Bs1-HnZr.js","assets/chunks/index.O8M11QJM.js","assets/chunks/index.DT9FHtDl.js","assets/chunks/framework.9dEYo5Bo.js","assets/chunks/index.o5MRxqVR.js","assets/chunks/index.kqOif1Uk.js","assets/chunks/index.qJIJBhna.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}