import{u as te,a as T,C as Se,t as Be,b as Ae,c as Ee,d as Re,e as ne,f as Ke,F as se,g as ze,h as je,T as q,i as Je,j as we,k as We,l as Ge,m as He,n as Qe,o as Xe}from"./mobile.5374d920.js";import{J as bo,K as ko,B as Vo,v as Do,s as Fo,r as ho,w as Co,q as Oo,_ as $o,y as Io,H as xo,M as To,A as Lo,N as No,W as Po,D as Uo,G as Mo,R as So,Q as Bo,L as Ao,S as Eo,X as Ro,I as Ko,O as zo,p as jo,x as Jo,z as Wo,P as Go,V as Ho,U as Qo,E as Xo}from"./mobile.5374d920.js";import{h as x,a9 as me,aB as Ye,D as Ze,d as N,J as v,b as O,w as o,a7 as z,a8 as j,l as f,o as k,N as u,a as F,t as B,A as ie,B as H,g as J,n as qe,c as P,L as ee,R as ye,K as W,e as M,z as ge,aM as be,k as G,a5 as ke,E as ve,_ as et}from"./framework.25a4be6c.js";import"./index.21eae476.js";import{s as tt,u as K,e as ot}from"./index.5ca0e709.js";import{m as ue,a as Q,E}from"./index.0a95bdf1.js";import{o as Ve}from"./omitBy.f3a2218d.js";import{a as lt}from"./snakeCase.ee26b702.js";import{K as at}from"./index.8d72fe00.js";import{C as nt}from"./index.9559e405.js";import{J as st,K as it}from"../app.35571e6d.js";import{I as Z}from"./iconify.e6294576.js";import"./index.90304c61.js";import"./index.8960aed5.js";import{H as ut,G as dt}from"./tree.992e55ef.js";import"./vuedraggable.umd.47e8adaf.js";import{p as De}from"./index.vue_vue_type_script_setup_true_lang.ab20c269.js";import{w as oe,a as de,u as rt,e as ct,f as pt}from"./index.95595333.js";import{f as ft}from"./form.32d6f220.js";import{d as mt}from"./differenceBy.0c7475e2.js";import"./dayjs.min.6c784c7f.js";import"./omit.f20ee233.js";import"./createCompounder.3a8aecc3.js";import"./theme.99ee33a4.js";import"./kebabCase.85860abf.js";import"./vue.runtime.esm-bundler.d01e200b.js";function Fe(r){const e={list:"/sapier-flow/flow-category/list",save:"/sapier-flow/flow-category/save",update:"/sapier-flow/flow-category/update",remove:"/sapier-flow/flow-category/remove",tree:"/sapier-flow/flow-category/tree"},d=m=>r.get(e.list,{params:m});return{getList:d,useList:()=>te(()=>d({size:-1}).then(m=>m.data)),getTree:m=>r.get(e.tree,{params:m}),create:m=>r.post(e.save,m),update:m=>r.post(e.update,m),remove:m=>r.post(e.remove,{},{params:{ids:m}})}}function le(r){const e={list:"/sapier-flow/flow-definition/list",save:"/sapier-flow/flow-definition/save",update:"/sapier-flow/flow-definition/update",remove:"/sapier-flow/flow-definition/remove",detail:"/sapier-flow/flow-definition/detail",deploy:"/sapier-flow/flow-definition/deployFlow"},d=c=>r.get(e.list,{params:c});return{url:e,getList:d,useList:()=>te(()=>d({size:-1}).then(c=>c.data.records)),create:c=>r.post(e.save,c),update:c=>r.post(e.update,c),remove:c=>r.post(e.remove,{},{params:{ids:c}}),deploy:c=>r.post(e.deploy,c),getDetail:c=>r.get(e.detail,{params:c})}}var he=(r=>(r[r.否=0]="否",r[r.是=1]="是",r))(he||{});function re(r){const e={list:"/sapier-flow/flow-deploy/list",update:"/sapier-flow/flow-deploy/update",remove:"/sapier-flow/flow-deploy/remove",detail:"/sapier-flow/flow-deploy/detail"};return{url:e,getList:s=>r.get(e.list,{params:s}),getDetail:s=>r.get(e.detail,{params:s}),update:s=>r.post(e.update,s),remove:s=>r.post(e.remove,{},{params:{ids:s}})}}function vt(r){const e={list:"/sapier-flow/flow-ops/list"};return{url:e,getTaskOpsList:t=>r.get(e.list,{params:t})}}function Ce(r){const e={list:"/sapier-flow/dev-flow/list",save:"/sapier-flow/dev-flow/save",update:"/sapier-flow/dev-flow/update",remove:"/sapier-flow/dev-flow/remove"},d=p=>r.get(e.list,{params:p});return{url:e,getList:d,useList:()=>te(()=>d({size:-1}).then(p=>p.data.records)),create:p=>r.post(e.save,p),update:p=>r.post(e.update,p),remove:p=>r.post(e.remove,{},{params:{ids:p}})}}function Oe(r){const e={list:"/sapier-flow/dev-form/list",save:"/sapier-flow/dev-form/save",update:"/sapier-flow/dev-form/update",remove:"/sapier-flow/dev-form/remove"},d=p=>r.get(e.list,{params:p});return{url:e,getList:d,useList:()=>te(()=>d({size:-1}).then(p=>p.data.records)),create:p=>r.post(e.save,p),update:p=>r.post(e.update,p),remove:p=>r.post(e.remove,{},{params:{ids:p}})}}function $e(r,e){return e in(Se.useFlowFormOptions??{})}function Ie(r={}){const{useFlowFormOptions:e}=T(),d=ue({...e},{...r});switch(d==null?void 0:d.type){case"window":return _t(d);case"dialog":case"drawer":return wt(d);default:return{open:t=>{},close:()=>{}}}}function _t(r={}){const e=x(null);return{open:(a={})=>{var y;const n=ue({...r},{...a}),{window:[s,p,m]=[]}=n,c=`${s}?${tt(Ve(n,lt(at,nt,$e)))}`;e.value=window.open(c,p,m),(y=e.value)==null||y.addEventListener("message",V=>{const{event:_,data:g}=V.data,i=a[_];typeof i=="function"&&i(g)})},close:()=>{var a;return(a=e.value)==null?void 0:a.close()},openedWindow:e}}function wt(r={}){const{appContext:e}=Ze(),{FlowForm:d}=T();let t,a;const n=p=>{t=document.createElement("div"),t.className="flow-form-wrapper";const m=ue({...r},{...p}),c=me(d,Ve(m,$e));a=me(m.type==="dialog"?st:it,{class:"flow-form-overlay",modelValue:!0,onClose:s,...m.overlay},c),a.appContext=e,Ye(a,t),document.body.appendChild(t)},s=()=>{var p,m;(m=(p=a==null?void 0:a.component)==null?void 0:p.props)!=null&&m.modelValue&&(a.component.props.modelValue=!1),t&&document.body.removeChild(t),t=null};return{open:n,close:s}}const yt=N({__name:"index",setup(r){const{request:e}=T(),{bindVal:d,crudStateRefs:{formData:t},getDataList:a}=K({tableOption:Be,crudOption:Ae(e),sortOption:{ascs:"sort"}});return a(),(n,s)=>{const p=v("el-button"),m=v("avue-crud");return k(),O(m,z(j(f(d))),{icon:o(({row:c})=>[u(f(Z),{icon:c.icon,style:{display:"inline"}},null,8,["icon"])]),buttonPreview:o(({row:c})=>[u(p,{type:c.buttonType},{default:o(()=>[u(f(Z),{icon:c.icon},null,8,["icon"]),F(" "+B(c.name),1)]),_:2},1032,["type"])]),"buttonPreview-form":o(()=>[u(p,{type:f(t).buttonType},{default:o(()=>[u(f(Z),{icon:f(t).icon},null,8,["icon"]),F(" "+B(f(t).name),1)]),_:1},8,["type"])]),_:1},16)}}}),xe=N({__name:"index",props:{categoryId:{}},emits:["add","view","edit","version"],setup(r,{emit:e}){const d=r,{request:t}=T(),{getList:a,deploy:n,update:s,remove:p}=le(t),{bindVal:m,crudStateRefs:{searchForm:c},getDataList:y}=K({tableOption:Ee,crudOption:{getList:a,remove:p},searchForm:{categoryId:d.categoryId}});ie(()=>{c.value.categoryId=d.categoryId??""}),oe(c,y,{debounce:300,immediate:!0,deep:!0});const V=x(!1);async function _(l){await Q.confirm("发布新版本，是否确认？","提示",{type:"success"}),V.value=!0,n({flowModuleId:l.flowModuleId}).then(()=>{E.success("发布成功"),y()}).finally(()=>{V.value=!1})}async function g(l){if(l.mainVersion)return E.warning("请先删除已发布的流程");await Q.confirm("确认删除？","提示",{type:"warning"}),await p(l.flowModuleId),E.success("删除成功"),y()}function i(l){s(De(l,["flowModuleId","sort"]))}return(l,w)=>{const D=v("el-button"),b=v("el-dropdown-item"),L=v("el-input-number"),h=v("avue-crud");return k(),O(h,z(j(f(m))),{"menu-left":o(()=>[u(D,{type:"primary",icon:"el-icon-plus",onClick:w[0]||(w[0]=C=>e("add"))},{default:o(()=>[F(" 新增 ")]),_:1})]),"menu-btn":o(({row:C})=>[u(b,{icon:"el-icon-view",onClick:$=>e("view",C)},{default:o(()=>[F(" 查看 ")]),_:2},1032,["onClick"]),u(b,{icon:"el-icon-edit",onClick:$=>e("edit",C)},{default:o(()=>[F(" 编辑 ")]),_:2},1032,["onClick"]),u(b,{icon:"el-icon-delete",onClick:$=>g(C)},{default:o(()=>[F(" 删除 ")]),_:2},1032,["onClick"]),u(b,{icon:"el-icon-upload",onClick:$=>_(C)},{default:o(()=>[F(" 发布 ")]),_:2},1032,["onClick"]),u(b,{icon:"el-icon-switch",onClick:$=>e("version",C)},{default:o(()=>[F(" 版本管理 ")]),_:2},1032,["onClick"])]),flowIcon:o(({row:C})=>[u(f(Z),{icon:C.flowIcon,width:"25",style:{display:"inline"}},null,8,["icon"])]),sort:o(({row:C})=>[u(L,{modelValue:C.sort,"onUpdate:modelValue":$=>C.sort=$,"controls-position":"right",style:{width:"100%"},onChange:$=>i(C)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},16)}}}),Te=N({__name:"index",props:{flowModuleId:{}},emits:["back","view","edit"],setup(r,{emit:e}){const d=r,{request:t}=T(),{getList:a,update:n,remove:s}=re(t),{bindVal:p,crudStateRefs:{searchForm:m},getDataList:c}=K({tableOption:Re,crudOption:{getList:a,dataPath:"res.data"}});ie(()=>{m.value.flowModuleId=d.flowModuleId}),oe(m,c,{debounce:300,immediate:!0,deep:!0});const y=x(!1);async function V(i){await Q.confirm(`确定将 ${i.flowName}(${i.flowKey}:v${i.version}) 设为主版本?`,"提示",{type:"warning"}),y.value=!0,n({flowDeployId:i.flowDeployId,flowModuleId:i.flowModuleId,mainVersion:1}).then(()=>{E.success("设置成功"),c()}).finally(()=>{y.value=!1})}async function _(i){const{value:l}=await Q.prompt("请输入确认删除的流程标识","提示",{type:"warning"});l===i.flowKey&&(await s(i.flowDeployId),E.success("删除成功"),c())}function g(i){n(De(i,["flowDeployId","flowModuleId","sort"]))}return(i,l)=>{const w=v("el-button"),D=v("el-dropdown-item"),b=v("el-input-number"),L=v("avue-crud");return k(),O(L,z(j(f(p))),{"menu-left":o(()=>[u(w,{loading:y.value,type:"primary",icon:"el-icon-arrow-left",onClick:l[0]||(l[0]=h=>e("back"))},{default:o(()=>[F(" 返回 ")]),_:1},8,["loading"])]),"menu-btn":o(({row:h})=>[u(D,{icon:"el-icon-view",onClick:C=>e("view",h)},{default:o(()=>[F(" 查看 ")]),_:2},1032,["onClick"]),u(D,{icon:"el-icon-edit",onClick:C=>e("edit",h)},{default:o(()=>[F(" 编辑 ")]),_:2},1032,["onClick"]),u(D,{icon:"el-icon-delete",onClick:C=>_(h)},{default:o(()=>[F(" 删除 ")]),_:2},1032,["onClick"]),u(D,{icon:"el-icon-switch",disabled:h.mainVersion===f(he).是,onClick:C=>V(h)},{default:o(()=>[F(" 设为主版本 ")]),_:2},1032,["disabled","onClick"])]),flowIcon:o(({row:h})=>[u(f(Z),{icon:h.flowIcon,width:"25",style:{display:"inline"}},null,8,["icon"])]),sort:o(({row:h})=>[u(b,{modelValue:h.sort,"onUpdate:modelValue":C=>h.sort=C,"controls-position":"right",style:{width:"100%"},onChange:C=>g(h)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},16)}}}),_e={defaultExpandAll:!0,props:{label:"name",value:"id"},filter:!0,formOption:{span:24,column:[{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称"}]},{label:"描述",prop:"remark"},{label:"排序",prop:"sort",type:"number"}]}},gt=N({__name:"index",emits:["node-click"],setup(r,{emit:e}){const{request:d}=T(),{crudStateRefs:{formData:t,tableData:a},getDataList:n,handleSave:s,handleUpdate:p,handleDel:m}=K({crudOption:{rowKey:"id",...Fe(d),dataPath:"res.data"},tableOption:_e,pageOption:{pageSize:20}});n();function c(_,g,i,l){s(g,i,l)}function y(_,g,i,l){p(g,Number.NaN,i,l)}async function V(_,g){await m(_.data,Number.NaN),g()}return(_,g)=>{const i=v("avue-tree");return k(),O(i,{modelValue:f(t),"onUpdate:modelValue":g[0]||(g[0]=l=>H(t)?t.value=l:null),option:f(_e),data:f(a),onNodeClick:g[1]||(g[1]=l=>e("node-click",l)),onSave:c,onUpdate:y,onDel:V},null,8,["modelValue","option","data"])}}}),ce=N({__name:"index",props:{modelValue:{},view:{type:Boolean},fields:{}},emits:["update:modelValue"],setup(r,{emit:e}){var m;const d=r,{FormDesign:t}=T(),a=J({get(){return d.modelValue?ut(d.modelValue):{menuBtn:!1,span:24}},set(c){e("update:modelValue",dt(c,{useJson5:!1}))}}),n=J(()=>d.fields?JSON.parse(d.fields):[]),s=J(()=>{const c={type:"select",dicData:n.value,filterable:!0,allowCreate:!0,defaultFirstOption:!0};return[{...c,props:{label:"name",value:"name",desc:"comment"}},{...c,props:{label:"comment",value:"comment",desc:"name"}}]}),p={form:{settings:Array.from({length:((m=ft.settings)==null?void 0:m.length)??0}).fill({}).concat({label:"样式类",prop:"class"})}};return(c,y)=>{const V=v("avue-form");return c.view?(k(),O(V,{key:0,class:qe(a.value.class),"model-value":{},option:a.value},null,8,["class","option"])):(k(),O(f(t),{key:1,modelValue:a.value,"onUpdate:modelValue":y[0]||(y[0]=_=>a.value=_),"base-option":s.value,resources:p},null,8,["modelValue","base-option"]))}}}),bt={key:1},kt=N({__name:"template-select",props:{formData:{type:Object,default:()=>({})},activeStep:{type:Number}},setup(r){const e=r,{formData:d,activeStep:t}=de(e),{request:a}=T(),{getDetail:n,useList:s}=le(a),{data:p}=Oe(a).useList(),{data:m}=Ce(a).useList(),{data:c}=s(),y=J(()=>{var _,g,i,l;return(t==null?void 0:t.value)===1?[{label:"表单模板",value:"",type:"divider"},...((_=p.value)==null?void 0:_.map(w=>({label:w.formName,value:w.formOption,type:"template"})))??[],{label:"已有表单",value:"",type:"divider"},...((g=c.value)==null?void 0:g.map(w=>({label:w.flowName,value:w.flowModuleId,type:"definition"})))??[]]:(t==null?void 0:t.value)===2?[{label:"流程模板",value:"",type:"divider"},...((i=m.value)==null?void 0:i.map(w=>({label:w.flowName,value:w.flowData,type:"template"})))??[],{label:"已有流程",value:"",type:"divider"},...((l=c.value)==null?void 0:l.map(w=>({label:w.flowName,value:w.flowModuleId,type:"definition"})))??[]]:[]});async function V(_){if((t==null?void 0:t.value)===1){if(_.type==="template")d.value.formOption=_.value;else if(_.type==="definition"){const g=await n({flowModuleId:_.value});d.value.formOption=g.data.formOption}}else if((t==null?void 0:t.value)===2){if(_.type==="template")d.value.flowData=_.value;else if(_.type==="definition"){const g=await n({flowModuleId:_.value});d.value.flowData=g.data.flowData}}}return(_,g)=>{const i=v("el-link"),l=v("el-divider"),w=v("el-dropdown-item"),D=v("el-scrollbar"),b=v("el-dropdown-menu"),L=v("el-dropdown");return y.value.length?(k(),O(L,{key:0},{dropdown:o(()=>[u(b,null,{default:o(()=>[u(D,{"max-height":"600px"},{default:o(()=>[(k(!0),P(W,null,ee(y.value,h=>(k(),O(w,ye({key:h.label},h,{disabled:h.type==="divider",onClick:C=>V(h)}),{default:o(()=>[h.type==="divider"?(k(),O(l,{key:0},{default:o(()=>[F(B(h.label),1)]),_:2},1024)):(k(),P("span",bt,B(h.label),1))]),_:2},1040,["disabled","onClick"]))),128))]),_:1})]),_:1})]),default:o(()=>[u(i,{icon:"el-icon-arrow-down",underline:!1},{default:o(()=>[F(" 选择模板 ")]),_:1})]),_:1})):M("",!0)}}}),Vt=G("span",null,"流程设计",-1),Dt={key:0},Ft={key:1},ht={style:{height:"calc(100vh - 144px)"}},Ct=N({__name:"index",props:{modelValue:{},visible:{type:Boolean}},emits:["close"],setup(r,{emit:e}){const t=de(r),{visible:a,modelValue:n}=t,{request:s}=T(),{create:p,deploy:m,getDetail:c,update:y}=le(s),{getDetail:V,update:_}=re(s),g=["流程信息","表单设计","模型设计","完成"],i=x(),l=x(!1);ge(()=>[a.value,i.value],async()=>{if(!a.value||!i.value)return;const{flowModuleId:$}=n.value,{flowDeployId:I}=n.value;try{l.value=!0;let S={};I?S=await V({flowDeployId:I}):$&&(S=await c({flowModuleId:$})),n.value=S.data}finally{l.value=!1}},{immediate:!0});const{data:w}=ne(s).useList(),D=J(()=>{var $,I;return(I=($=w.value)==null?void 0:$.find(S=>S.tableName===n.value.formDataTable))==null?void 0:I.tableFields}),b=x(0);async function L($){b.value===0&&await ze(i),l.value=!0;const{flowModuleId:I}=n.value,{flowDeployId:S}=n.value;try{S?await _(n.value):I?await y(n.value):await p(n.value).then(X=>{n.value.flowModuleId=X.data.flowModuleId}),E.success("保存成功")}finally{l.value=!1}typeof $=="number"?b.value=$:b.value++}async function h(){await Q.confirm("发布新版本，是否确认？","提示"),l.value=!0,m({flowModuleId:n.value.flowModuleId}).then(()=>{E.success("发布成功")}).finally(()=>{l.value=!1})}function C(){a.value=!1,b.value=0,n.value={},e("close")}return($,I)=>{const S=v("el-col"),X=v("el-step"),R=v("el-steps"),A=v("el-button"),pe=v("el-row"),Le=v("avue-form"),Ne=v("el-result"),Pe=v("el-dialog"),Ue=be("loading");return k(),O(Pe,{modelValue:f(a),"onUpdate:modelValue":I[6]||(I[6]=U=>H(a)?a.value=U:null),fullscreen:"","show-close":!1,"destroy-on-close":"",onClose:C},{header:o(()=>[u(pe,{justify:"center"},{default:o(()=>[u(S,{span:5},{default:o(()=>{var U,Y,ae,fe;return[G("div",null,[Vt,(U=f(n))!=null&&U.flowName?(k(),P("span",Dt," - "+B((Y=f(n))==null?void 0:Y.flowName),1)):M("",!0),(ae=f(n))!=null&&ae.version?(k(),P("span",Ft," - V"+B((fe=f(n))==null?void 0:fe.version),1)):M("",!0)]),u(kt,{"form-data":f(n),"onUpdate:formData":I[0]||(I[0]=Me=>H(n)?n.value=Me:null),"active-step":b.value},null,8,["form-data","active-step"])]}),_:1}),u(S,{span:14},{default:o(()=>[u(R,{active:b.value,simple:"","process-status":"finish","finish-status":"success"},{default:o(()=>[(k(),P(W,null,ee(g,(U,Y)=>u(X,{key:Y,title:U,style:{cursor:"pointer"},onClick:ae=>L(Y)},null,8,["title","onClick"])),64))]),_:1},8,["active"])]),_:1}),u(S,{span:5,style:{"text-align":"right"}},{default:o(()=>[u(A,{disabled:b.value===0,loading:l.value,type:"primary",onClick:I[1]||(I[1]=U=>b.value--)},{default:o(()=>[F(" 上一步 ")]),_:1},8,["disabled","loading"]),u(A,{disabled:b.value===g.length-1,type:"primary",loading:l.value,onClick:I[2]||(I[2]=U=>L())},{default:o(()=>[F(" 下一步 ")]),_:1},8,["disabled","loading"]),u(A,{onClick:C},{default:o(()=>[F(" 关闭 ")]),_:1})]),_:1})]),_:1})]),default:o(()=>[ke((k(),P("div",ht,[b.value===0?(k(),O(Le,{key:0,ref_key:"formRef",ref:i,modelValue:f(n),"onUpdate:modelValue":I[3]||(I[3]=U=>H(n)?n.value=U:null),option:f(Ke),style:{width:"50%",magin:"0 auto"}},null,8,["modelValue","option"])):M("",!0),b.value===1?(k(),O(ce,{key:1,modelValue:f(n).formOption,"onUpdate:modelValue":I[4]||(I[4]=U=>f(n).formOption=U),fields:D.value},null,8,["modelValue","fields"])):M("",!0),b.value===2?(k(),O(se,{key:2,modelValue:f(n).flowData,"onUpdate:modelValue":I[5]||(I[5]=U=>f(n).flowData=U),"flow-form-option":f(n).formOption},null,8,["modelValue","flow-form-option"])):M("",!0),b.value===3?(k(),O(Ne,{key:3,icon:"success",title:"流程设计完成"},{extra:o(()=>[f(n).flowDeployId?M("",!0):(k(),O(A,{key:0,type:"primary",onClick:h},{default:o(()=>[F(" 发布 ")]),_:1})),u(A,{onClick:C},{default:o(()=>[F(" 关闭 ")]),_:1})]),_:1})):M("",!0)])),[[Ue,l.value]])]),_:1},8,["modelValue"])}}}),Ot=G("span",null,"流程查看",-1),$t={key:0},It={key:1},xt=N({__name:"index",props:{modelValue:{},visible:{type:Boolean}},setup(r){const d=de(r),{visible:t,modelValue:a}=d,{request:n}=T(),{getDetail:s}=le(n),{getDetail:p}=re(n),m=x("form"),c=x(!1);ge(t,async V=>{if(!V)return;const{flowModuleId:_}=a.value,{flowDeployId:g}=a.value;try{c.value=!0;let i={};g?i=await p({flowDeployId:g}):_&&(i=await s({flowModuleId:_})),a.value={...i.data}}finally{c.value=!1}},{immediate:!0});function y(){a.value={},m.value="form"}return(V,_)=>{const g=v("el-tab-pane"),i=v("el-tabs"),l=v("el-dialog"),w=be("loading");return k(),O(l,{modelValue:f(t),"onUpdate:modelValue":_[3]||(_[3]=D=>H(t)?t.value=D:null),width:"60%",top:"0",onClose:y},{header:o(()=>{var D,b,L,h;return[Ot,(D=f(a))!=null&&D.flowName?(k(),P("span",$t," - "+B((b=f(a))==null?void 0:b.flowName),1)):M("",!0),(L=f(a))!=null&&L.version?(k(),P("span",It," - V"+B((h=f(a))==null?void 0:h.version),1)):M("",!0)]}),default:o(()=>[ke((k(),O(i,{modelValue:m.value,"onUpdate:modelValue":_[2]||(_[2]=D=>m.value=D)},{default:o(()=>[u(g,{label:"查看表单",name:"form",style:{height:"600px","overflow-y":"auto"}},{default:o(()=>[m.value==="form"&&f(a).formOption?(k(),O(ce,{key:0,modelValue:f(a).formOption,"onUpdate:modelValue":_[0]||(_[0]=D=>f(a).formOption=D),view:""},null,8,["modelValue"])):M("",!0)]),_:1}),u(g,{label:"查看流程",name:"flow",style:{height:"600px"}},{default:o(()=>[m.value==="flow"?(k(),O(se,{key:0,modelValue:f(a).flowData,"onUpdate:modelValue":_[1]||(_[1]=D=>f(a).flowData=D),view:""},null,8,["modelValue"])):M("",!0)]),_:1})]),_:1},8,["modelValue"])),[[w,c.value]])]),_:1},8,["modelValue"])}}}),Tt=N({__name:"index",setup(r){const e=x("definition"),d=x({}),t=x(""),a=x("");function n(i){t.value===i.id?t.value="":t.value=i.id}const s=x(!1),p=x(!1);function m(){d.value={},s.value=!0}function c(i){d.value=i,s.value=!0}function y(i){d.value=i,p.value=!0}function V(i){a.value=i.flowModuleId||"",e.value="deploy"}function _(){a.value="",e.value="definition"}async function g(){const i=e.value;await ve(),e.value="",await ve(),e.value=`${i}`}return(i,l)=>{const w=v("el-col"),D=v("el-row");return k(),O(D,{gutter:20},{default:o(()=>[u(w,{span:4},{default:o(()=>[u(gt,{onNodeClick:n})]),_:1}),u(w,{span:20},{default:o(()=>[e.value==="definition"?(k(),O(xe,{key:0,"category-id":t.value,onAdd:m,onEdit:c,onView:y,onVersion:V},null,8,["category-id"])):M("",!0),e.value==="deploy"&&a.value?(k(),O(Te,{key:1,"flow-module-id":a.value,onEdit:c,onView:y,onBack:_},null,8,["flow-module-id"])):M("",!0),u(Ct,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=b=>d.value=b),visible:s.value,"onUpdate:visible":l[1]||(l[1]=b=>s.value=b),onClose:g},null,8,["modelValue","visible"]),u(xt,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=b=>d.value=b),visible:p.value,"onUpdate:visible":l[3]||(l[3]=b=>p.value=b)},null,8,["modelValue","visible"])]),_:1})]),_:1})}}}),Lt=N({__name:"index",setup(r){const e=rt("debugMode",!1),{request:d}=T(),{getTaskOpsList:t}=vt(d),{bindVal:a,getDataList:n,crudStateRefs:{searchForm:s}}=K({tableOption:je,crudOption:{getList:t},searchForm:{status:q.待办},sortOption:{descs:"start_time"}});oe(s,n,{debounce:300,immediate:!0,deep:!0});const{open:p,close:m}=Ie();function c(y){p({flowKey:y.flowKey,taskId:y.taskId,instanceId:y.flowInstanceId,debug:e.value,onComplete(){m(),E.success("操作成功"),n()}})}return(y,V)=>{const _=v("el-switch"),g=v("el-button"),i=v("el-link"),l=v("avue-crud");return k(),O(l,z(j(f(a))),{"menu-right":o(()=>[u(g,{type:"text"},{default:o(()=>[u(_,{modelValue:f(e),"onUpdate:modelValue":V[0]||(V[0]=w=>H(e)?e.value=w:null),"inline-prompt":"","active-text":"debug","inactive-text":"debug"},null,8,["modelValue"])]),_:1})]),processTitle:o(({row:w})=>[u(i,{type:"primary",underline:!1,onClick:D=>c(w)},{default:o(()=>[F(B(w.processTitle||"无标题"),1)]),_:2},1032,["onClick"])]),_:1},16)}}}),Nt=N({__name:"index",setup(r){const{request:e}=T(),{bindVal:d,getDataList:t}=K({tableOption:Je,crudOption:we(e)});return t(),(a,n)=>{const s=v("avue-crud");return k(),O(s,z(j(f(d))),null,16)}}}),Pt={class:"flow-list"},Ut=["onClick"],Mt={class:"flow-name"},St=N({__name:"index",setup(r){const{request:e}=T(),{useList:d}=Fe(e),{usePublishList:t,getTaskList:a}=Ge(e),{data:n}=d(),{data:s}=t(),p=J(()=>{var l;return(l=n.value)==null?void 0:l.map(w=>{var b;const D=((b=s.value)==null?void 0:b.filter(L=>L.categoryId===w.id))??[];return{...w,list:D}}).filter(w=>{var D;return(D=w.list)==null?void 0:D.length})}),m=ot(q).filter((l,w)=>w<2).reverse(),{bindVal:c,getDataList:y,crudStateRefs:{searchForm:V}}=K({tableOption:We,crudOption:{getList:a},searchForm:{status:q.待办}});oe(V,y,{debounce:300,immediate:!0,deep:!0});const{open:_,close:g}=Ie();function i(l){_({flowKey:l.flowKey,taskId:l.taskId,instanceId:l.flowInstanceId,detail:l.taskId?l.status===q.已办:!1,onComplete(){g(),E.success("操作成功"),y()}})}return(l,w)=>{const D=v("el-button"),b=v("el-divider"),L=v("Icon"),h=v("el-collapse-item"),C=v("el-collapse"),$=v("el-card"),I=v("avue-radio"),S=v("el-link"),X=v("avue-crud");return k(),P(W,null,[u($,{"body-style":{padding:"0 20px"}},{default:o(()=>[u(C,{"model-value":"1"},{default:o(()=>[u(h,{name:"1"},{title:o(()=>[u(D,{text:"",icon:"el-icon-promotion"},{default:o(()=>[F(" 发起审批 ")]),_:1})]),default:o(()=>[G("div",Pt,[(k(!0),P(W,null,ee(p.value,R=>(k(),P("div",{key:R.id,class:"flow-category"},[u(b,{"content-position":"left"},{default:o(()=>[F(B(R.name),1)]),_:2},1024),(k(!0),P(W,null,ee(R.list,A=>(k(),P("div",{key:A.flowKey,class:"flow-item",onClick:pe=>i(A)},[u(L,{class:"flow-icon",icon:A.flowIcon,width:"60"},null,8,["icon"]),G("div",Mt,B(A.flowName),1)],8,Ut))),128))]))),128))])]),_:1})]),_:1})]),_:1}),u(b),u(X,z(j(f(c))),{"menu-left":o(()=>[u(I,{modelValue:f(V).status,"onUpdate:modelValue":w[0]||(w[0]=R=>f(V).status=R),button:"",dic:f(m)},null,8,["modelValue","dic"])]),processTitle:o(({row:R})=>[u(S,{type:"primary",underline:!1,onClick:A=>i(R)},{default:o(()=>[F(B(R.processTitle||"无标题"),1)]),_:2},1032,["onClick"])]),_:1},16)],64)}}}),Bt=et(St,[["__scopeId","data-v-7696fc3f"]]),At=N({__name:"index",setup(r){const{request:e}=T(),{bindVal:d,crudStateRefs:{formData:t},getDataList:a,handleUpdate:n}=K({tableOption:He,crudOption:Ce(e)});a();const s=x(!1);async function p(c){t.value=c,s.value=!0}async function m(){await n(t.value,Number.NaN,()=>s.value=!1,()=>{})}return(c,y)=>{const V=v("el-button"),_=v("avue-crud"),g=v("el-dialog");return k(),P(W,null,[u(_,z(j(f(d))),{menu:o(({row:i})=>[u(V,{type:"primary",text:"",icon:"el-icon-crop",onClick:l=>p(i)},{default:o(()=>[F(" 设计 ")]),_:2},1032,["onClick"])]),_:1},16),u(g,{modelValue:s.value,"onUpdate:modelValue":y[2]||(y[2]=i=>s.value=i),title:`模型设计-${f(t).flowName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[u(V,{type:"primary",onClick:m},{default:o(()=>[F(" 保存 ")]),_:1}),u(V,{onClick:y[1]||(y[1]=i=>s.value=!1)},{default:o(()=>[F(" 取消 ")]),_:1})]),default:o(()=>[u(se,{modelValue:f(t).flowData,"onUpdate:modelValue":y[0]||(y[0]=i=>f(t).flowData=i),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Et=N({__name:"index",setup(r){const{request:e}=T(),{bindVal:d,crudStateRefs:{formData:t},getDataList:a,handleUpdate:n}=K({tableOption:Qe,crudOption:Oe(e)});a();const s=x(!1);async function p(c){t.value={...c},s.value=!0}async function m(){await n(t.value,Number.NaN,()=>s.value=!1,()=>{})}return(c,y)=>{const V=v("el-button"),_=v("avue-crud"),g=v("el-dialog");return k(),P(W,null,[u(_,z(j(f(d))),{menu:o(({row:i})=>[u(V,{type:"primary",text:"",icon:"el-icon-crop",onClick:l=>p(i)},{default:o(()=>[F(" 设计 ")]),_:2},1032,["onClick"])]),_:1},16),u(g,{modelValue:s.value,"onUpdate:modelValue":y[2]||(y[2]=i=>s.value=i),title:`表单设计-${f(t).formName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[u(V,{type:"primary",onClick:m},{default:o(()=>[F(" 保存 ")]),_:1}),u(V,{onClick:y[1]||(y[1]=i=>s.value=!1)},{default:o(()=>[F(" 取消 ")]),_:1})]),default:o(()=>[u(ce,{modelValue:f(t).formOption,"onUpdate:modelValue":y[0]||(y[0]=i=>f(t).formOption=i),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Rt=G("br",null,null,-1),Kt=N({__name:"index",setup(r){const{request:e}=T(),{bindVal:d,crudStateRefs:{formData:t,defaults:a},getDataList:n,afterOpen:s,beforeSubmit:p}=K({crudOption:ne(e),tableOption:Xe});n();const{data:m}=we(e).useParam("table.default.fields");s(l=>{if(t.value.defaultFields=m.value??[],l==="edit"){const w=JSON.parse(t.value.tableFields);t.value.editFields=mt(w,m.value??[],"name")}}),p(l=>{const w=[...l.defaultFields,...l.editFields];l.tableFields=JSON.stringify(w)});const c=x(!1);ie(()=>{var l;(l=a.value)!=null&&l.defaultFields&&(a.value.defaultFields.display=c.value)});const{deploy:y,getFields:V}=ne(e),_=x(!1);async function g(l){await Q.confirm("部署将自动生成数据库表，是否确认？","提示",{type:"success"}),_.value=!0,y({id:l.id}).then(()=>{E.success("部署成功"),n()}).finally(()=>{_.value=!1})}function i(){V({tableName:t.value.tableName}).then(l=>{var w;if(!((w=l.data)!=null&&w.length))return E.warning("未找到该表");t.value.editFields=l.data})}return(l,w)=>{const D=v("el-button"),b=v("el-input"),L=v("el-switch"),h=v("el-tooltip"),C=v("avue-crud");return k(),O(C,z(j(f(d))),{menu:o(({row:$})=>[u(D,{type:"text",icon:"el-icon-upload",onClick:I=>g($)},{default:o(()=>[F(" 部署 ")]),_:2},1032,["onClick"])]),"tableName-form":o(()=>[u(b,{modelValue:f(t).tableName,"onUpdate:modelValue":w[0]||(w[0]=$=>f(t).tableName=$),placeholder:"请输入 表名"},{append:o(()=>[u(D,{type:"primary",size:"default",onClick:i},{default:o(()=>[F(" 导入已有表 ")]),_:1})]),_:1},8,["modelValue"])]),"editFields-label":o(()=>[G("div",null,[F(" 数据库字段 "),Rt,u(h,{content:"显示默认字段"},{default:o(()=>[u(L,{modelValue:c.value,"onUpdate:modelValue":w[1]||(w[1]=$=>c.value=$)},null,8,["modelValue"])]),_:1})])]),_:1},16)}}}),zt=N({__name:"index",setup(r){const e=ct(),d=x({}),{FlowForm:t}=T(),a=J(()=>{const s=d.value.flowInstance;return e.detail===!0||e.detail==="true"?`查看流程：${s==null?void 0:s.title}`:e.instanceId||e.taskId?`办理流程：${s==null?void 0:s.title}`:`发起流程：${s==null?void 0:s.title}`});pt(a);async function n(s){window.postMessage({event:"onComplete",data:{...s}})}return(s,p)=>(k(),O(f(t),ye({flowDetail:d.value,"onUpdate:flowDetail":p[0]||(p[0]=m=>d.value=m)},f(e),{onComplete:n}),null,16,["flowDetail"]))}}),jt=Object.freeze(Object.defineProperty({__proto__:null,PageFlowButton:yt,PageFlowDefinition:xe,PageFlowDeploy:Te,PageFlowForm:zt,PageFlowManage:Tt,PageFlowOps:Lt,PageFlowParam:Nt,PageFlowTemplate:At,PageFlowWorkbench:Bt,PageFormTemplate:Et,PageTableTemplate:Kt},Symbol.toStringTag,{value:"Module"})),wo={install(r,e){T(e),Object.entries(jt).forEach(([d,t])=>{r.component(d,t)})}};export{bo as ApprovalForm,ko as ButtonList,Se as CONFIG_DEFAULT,Vo as FieldType,Do as FlowButtonApproval,Fo as FlowButtonDisplay,ho as FlowButtonKey,Co as FlowButtonStatus,Oo as FlowButtonType,$o as FlowForm,Io as FlowStatus,xo as HandleType,To as InternalForm,he as IsMainVersion,yt as PageFlowButton,xe as PageFlowDefinition,Te as PageFlowDeploy,zt as PageFlowForm,Tt as PageFlowManage,Lt as PageFlowOps,Nt as PageFlowParam,At as PageFlowTemplate,Bt as PageFlowWorkbench,Et as PageFormTemplate,Kt as PageTableTemplate,Lo as TablePrimary,q as TaskStatus,No as UploadTable,Po as Whether,ze as asyncValidate,wo as default,Uo as defineTableOption,Mo as fieldTypeDic,So as flowFormEmits,Bo as flowFormProps,Ao as flowTrack,Eo as injectionKey,Ro as isMobile,Ko as tablePrimaryDic,zo as useButtonHandler,jo as useCommonCommentApi,T as useConfigProvider,Ae as useFlowButtonApi,Fe as useFlowCategoryApi,le as useFlowDefinitionApi,re as useFlowDeployApi,Jo as useFlowFileApi,Ie as useFlowForm,wt as useFlowFormOverlay,_t as useFlowFormWindow,vt as useFlowOpsApi,we as useFlowParamApi,Ge as useFlowTaskApi,Ce as useFlowTemplateApi,Wo as useFlowUserApi,Go as useFormDefaults,Oe as useFormTemplateApi,Ho as useInjectState,Qo as useProvideState,ne as useTableTemplateApi,Xo as whetherDic};
