import{c as N,C as Ue,t as Se,d as Me,e as Ae,f as Be,g as ne,h as Ke,F as se,b as Re,i as fe,T as ve,j as _e,k as Ee,l as we,m as je,n as ze,o as We,p as Je}from"./mobile.6ffe528d.js";import{K as zo,L as Wo,M as Jo,N as Go,D as Ho,w as Qo,v as Xo,s as Yo,x as Zo,r as qo,_ as el,z as tl,O as ol,H as ll,P as al,B as nl,Q as sl,W as il,E as ul,I as rl,X as dl,V as cl,Y as pl,$ as ml,U as fl,J as vl,R as _l,q as wl,S as yl,y as gl,A as bl,a as kl,u as Dl,Z as Fl,G as Vl}from"./mobile.6ffe528d.js";import{e as Ge,a5 as He,f as M,y as b,k as $,T as t,ab as z,ac as W,B as s,t as m,R as n,V as U,I as C,Q as E,D as ie,O as x,d as Y,b as ye,c as G,ax as ge,L as Q,S as K,x as te,v as H,a9 as be,m as me,_ as Qe,q as Xe,H as ke}from"./framework.d7ab2b26.js";import"./index.b942cce0.js";import{s as Ye}from"./index.386fc70b.js";import"./index.es.fb56e7b0.js";import{u as Ze}from"./index.be5a190c.js";import{m as ue}from"./merge.fdeb8eba.js";import{o as De}from"./omitBy.0b2ae93f.js";import{a as qe}from"./snakeCase.1533802a.js";import{l as et}from"./baseGet.94177317.js";import{i as tt}from"./isNil.c75b1b34.js";import{u as j}from"./index.50f098e8.js";import{I as Z}from"./iconify.04078d66.js";import{j as ot,d as lt}from"./tree.c1a97e65.js";import"./index.1231b025.js";import"./vuedraggable.umd.a8fde58f.js";import"./index.cff36f5c.js";import"./form.ee73a723.js";import"./index.586b4583.js";import{u as q}from"./index.43018813.js";import{d as at}from"./union.af658bc5.js";import{E as X,a as R}from"../app.4af35114.js";import{p as nt}from"./pick.07599629.js";import{w as oe,a as re,u as st,b as it,c as ut}from"./index.2cfe9f76.js";import{f as rt,b as dt}from"./form.005e87f7.js";import{d as ct}from"./zipWith.3b76e53f.js";import"./index.0246ace1.js";import"./index.78e1ddd2.js";import"./cloneDeep.60eb2dab.js";import"./Uint8Array.65d84ac4.js";import"./baseSet.7ecf0177.js";import"./initCloneObject.c11c6fe3.js";import"./getTag.acf45d6b.js";import"./data.e84f41da.js";import"./get.4ca2907b.js";import"./basePickBy.015eb126.js";import"./pickBy.838b6fb7.js";import"./omit.21281450.js";import"./createCompounder.b5b39a99.js";import"./use-form-item.d5ed3db7.js";import"./fromPairs.e099444b.js";import"./kebabCase.9a77ebd6.js";import"./vue.runtime.esm-browser.prod.510beb10.js";import"./set.6ea30d67.js";import"./isEqual.716af0e8.js";import"./theme.04664a6e.js";import"./index.vue_vue_type_script_setup_true_lang.dd8d5d85.js";import"./index.f0c01f3b.js";import"./index.038d65c0.js";import"./config.b32a579f.js";function Fe(r){const e={list:"/sapier-flow/flow-category/list",save:"/sapier-flow/flow-category/save",update:"/sapier-flow/flow-category/update",remove:"/sapier-flow/flow-category/remove",tree:"/sapier-flow/flow-category/tree"},l=g=>r.get(e.list,{params:g}),o=q(l,{res:"data",defaultParams:[{size:-1,ascs:"sort"}]});return{getList:l,useList:o,getTree:g=>r.get(e.tree,{params:g}),create:g=>r.post(e.save,g),update:g=>r.post(e.update,g),remove:g=>r.post(e.remove,{},{params:{ids:g}})}}function le(r){const e={list:"/sapier-flow/flow-definition/list",save:"/sapier-flow/flow-definition/save",update:"/sapier-flow/flow-definition/update",remove:"/sapier-flow/flow-definition/remove",detail:"/sapier-flow/flow-definition/detail",deploy:"/sapier-flow/flow-definition/deployFlow"},l=f=>r.get(e.list,{params:f}),o=q(l,{res:"data.records",defaultParams:[{size:-1,ascs:"sort"}]});return{url:e,getList:l,useList:o,create:f=>r.post(e.save,f),update:f=>r.post(e.update,f),remove:f=>r.post(e.remove,{},{params:{ids:f}}),deploy:f=>r.post(e.deploy,f),getDetail:f=>r.get(e.detail,{params:f})}}var Ve=(r=>(r[r.否=0]="否",r[r.是=1]="是",r))(Ve||{});function de(r){const e={list:"/sapier-flow/flow-deploy/list",update:"/sapier-flow/flow-deploy/update",remove:"/sapier-flow/flow-deploy/remove",detail:"/sapier-flow/flow-deploy/detail"},l=d=>r.get(e.list,{params:d}),o=q(l,{res:"data"});return{url:e,getList:l,useList:o,getDetail:d=>r.get(e.detail,{params:d}),update:d=>r.post(e.update,d),remove:d=>r.post(e.remove,{},{params:{ids:d}})}}function pt(r){const e={list:"/sapier-flow/flow-ops/list"},l=a=>r.get(e.list,{params:a}),o=q(l,{res:"data.records",defaultParams:[{size:-1}]});return{url:e,getTaskOpsList:l,useTaskOpsList:o}}function Ce(r){const e={list:"/sapier-flow/dev-flow/list",save:"/sapier-flow/dev-flow/save",update:"/sapier-flow/dev-flow/update",remove:"/sapier-flow/dev-flow/remove"},l=d=>r.get(e.list,{params:d}),o=q(l,{res:"data.records",defaultParams:[{size:-1}]});return{url:e,getList:l,useList:o,create:d=>r.post(e.save,d),update:d=>r.post(e.update,d),remove:d=>r.post(e.remove,{},{params:{ids:d}})}}function Oe(r){const e={list:"/sapier-flow/dev-form/list",save:"/sapier-flow/dev-form/save",update:"/sapier-flow/dev-form/update",remove:"/sapier-flow/dev-form/remove"},l=d=>r.get(e.list,{params:d}),o=q(l,{res:"data.records",defaultParams:[{size:-1}]});return{url:e,getList:l,useList:o,create:d=>r.post(e.save,d),update:d=>r.post(e.update,d),remove:d=>r.post(e.remove,{},{params:{ids:d}})}}function he(r,e){return e in(Ue.useFlowFormOptions??{})}function ae(r={}){const{useFlowFormOptions:e}=N(),l=ue({...e},{...r});switch(l==null?void 0:l.type){case"window":return mt(l);case"dialog":case"drawer":return ft(l);default:return{open:o=>{},close:()=>{}}}}function mt(r={}){const e=Ge(null);return{open:(a={})=>{var _;const v=ue({...r},{...a}),{window:[u,d,g]=[]}=v,f=`${u}?${Ye(De(v,qe(et,tt,he)))}`;e.value=window.open(f,d,g),(_=e.value)==null||_.addEventListener("message",w=>{const{event:y,data:D}=w.data,p=v[y];typeof p=="function"&&p(D)})},close:()=>{var a;return(a=e.value)==null?void 0:a.close()},openedWindow:e}}function ft(r={}){const{FlowForm:e}=N(),{open:l,close:o}=Ze();return{open:(v={})=>{const u=ue({...r},{...v});l({default:()=>He(e,De(u,he)),class:"flow-form-overlay",type:u.type,...u.overlay})},close:o}}const vt=M({__name:"index",setup(r){const{request:e}=N(),{bindVal:l,crudStateRefs:{formData:o},getDataList:a}=j({tableOption:Se,crudOption:Me(e),sortOption:{ascs:"sort"}});return a(),(v,u)=>{const d=m("el-button"),g=m("avue-crud");return b(),$(g,z(W(s(l))),{icon:t(({row:f})=>[n(s(Z),{icon:f.icon,style:{display:"inline"}},null,8,["icon"])]),buttonPreview:t(({row:f})=>[n(d,{type:f.buttonType},{default:t(()=>[f.icon?(b(),$(s(Z),{key:0,icon:f.icon},null,8,["icon"])):U("",!0),C(" "+E(f.name),1)]),_:2},1032,["type"])]),"buttonPreview-form":t(()=>[n(d,{type:s(o).buttonType},{default:t(()=>[s(o).icon?(b(),$(s(Z),{key:0,icon:s(o).icon},null,8,["icon"])):U("",!0),C(" "+E(s(o).name),1)]),_:1},8,["type"])]),_:1},16)}}}),$e=M({__name:"index",props:{categoryId:{}},emits:["add","view","edit","version"],setup(r,{emit:e}){const l=r,o=e,{request:a}=N(),{getList:v,deploy:u,update:d,remove:g}=le(a),{bindVal:f,crudStateRefs:{searchForm:_},getDataList:w}=j({tableOption:Ae,crudOption:{getList:v,remove:g},sortOption:{ascs:"sort"},searchForm:{categoryId:l.categoryId}});ie(()=>{_.value.categoryId=l.categoryId??""}),oe(_,w,{debounce:300,immediate:!0,deep:!0});const y=x(!1);async function D(I){await X.confirm("发布新版本，是否确认？","提示",{type:"success"}),y.value=!0,u({flowModuleId:I.flowModuleId}).then(()=>{R.success("发布成功"),w()}).finally(()=>{y.value=!1})}async function p(I){if(I.mainVersion)return R.warning("请先删除已发布的流程");await X.confirm("确认删除？","提示",{type:"warning"}),await g(I.flowModuleId),R.success("删除成功"),w()}function c(I){d(nt(I,["flowModuleId","flowKey","sort"])),w()}const i=at(c,500),{open:V,close:O}=ae();function k(I){V({flowKey:I.flowKey,debug:!0,onComplete(){O(),R.success("操作成功")}})}return(I,L)=>{const P=m("el-button"),A=m("el-dropdown-item"),h=m("el-input-number"),F=m("avue-crud");return b(),$(F,z(W(s(f))),{"menu-left":t(()=>[n(P,{type:"primary",icon:"el-icon-plus",onClick:L[0]||(L[0]=T=>o("add"))},{default:t(()=>[C(" 新增 ")]),_:1})]),"menu-btn":t(({row:T})=>[n(A,{icon:"el-icon-view",onClick:B=>o("view",T)},{default:t(()=>[C(" 查看 ")]),_:2},1032,["onClick"]),n(A,{icon:"el-icon-edit",onClick:B=>o("edit",T)},{default:t(()=>[C(" 编辑 ")]),_:2},1032,["onClick"]),n(A,{icon:"el-icon-delete",onClick:B=>p(T)},{default:t(()=>[C(" 删除 ")]),_:2},1032,["onClick"]),n(A,{icon:"el-icon-video-play",onClick:B=>k(T)},{default:t(()=>[C(" 调试 ")]),_:2},1032,["onClick"]),n(A,{icon:"el-icon-upload",onClick:B=>D(T)},{default:t(()=>[C(" 发布 ")]),_:2},1032,["onClick"]),n(A,{icon:"el-icon-switch",onClick:B=>o("version",T)},{default:t(()=>[C(" 版本管理 ")]),_:2},1032,["onClick"])]),flowIcon:t(({row:T})=>[n(s(Z),{icon:T.flowIcon,width:"25",style:{display:"inline"}},null,8,["icon"])]),sort:t(({row:T})=>[n(h,{modelValue:T.sort,"onUpdate:modelValue":B=>T.sort=B,"controls-position":"right",style:{width:"100%"},onChange:B=>s(i)(T)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},16)}}}),Te=M({__name:"index",props:{flowModuleId:{}},emits:["back","view","edit"],setup(r,{emit:e}){const l=r,o=e,{request:a}=N(),{getList:v,update:u,remove:d}=de(a),{bindVal:g,crudStateRefs:{searchForm:f,tableData:_},getDataList:w}=j({tableOption:Be,crudOption:{getList:v,dataPath:"res.data"},sortOption:{descs:"version"}});ie(()=>{f.value.flowModuleId=l.flowModuleId}),oe(f,w,{debounce:300,immediate:!0,deep:!0});const y=x(!1);async function D(O){await X.confirm(`确定将 ${O.flowName}(${O.flowKey}:v${O.version}) 设为主版本?`,"提示",{type:"warning"}),y.value=!0,u({flowDeployId:O.flowDeployId,flowModuleId:O.flowModuleId,mainVersion:1}).then(()=>{R.success("设置成功"),w()}).finally(()=>{y.value=!1})}async function p(O){const{value:k}=await X.prompt("请输入确认删除的流程标识","提示",{type:"warning"});k===O.flowKey&&(await d(O.flowDeployId),R.success("删除成功"),w())}const{open:c,close:i}=ae();function V(){var k;const O=(k=_.value[0])==null?void 0:k.flowKey;O&&c({flowKey:O,debug:!0,onComplete(){i(),R.success("操作成功")}})}return(O,k)=>{const I=m("el-button"),L=m("el-tooltip"),P=m("el-dropdown-item"),A=m("avue-crud");return b(),$(A,z(W(s(g))),{"menu-left":t(()=>[n(I,{loading:y.value,type:"primary",icon:"el-icon-arrow-left",onClick:k[0]||(k[0]=h=>o("back"))},{default:t(()=>[C(" 返回 ")]),_:1},8,["loading"])]),"menu-right":t(()=>[n(L,{content:"调试"},{default:t(()=>[n(I,{icon:"el-icon-video-play",circle:"",onClick:V})]),_:1})]),"menu-btn":t(({row:h})=>[n(P,{icon:"el-icon-view",onClick:F=>o("view",h)},{default:t(()=>[C(" 查看 ")]),_:2},1032,["onClick"]),n(P,{icon:"el-icon-edit",onClick:F=>o("edit",h)},{default:t(()=>[C(" 编辑 ")]),_:2},1032,["onClick"]),n(P,{icon:"el-icon-delete",onClick:F=>p(h)},{default:t(()=>[C(" 删除 ")]),_:2},1032,["onClick"]),n(P,{icon:"el-icon-switch",disabled:h.mainVersion===s(Ve).是,onClick:F=>D(h)},{default:t(()=>[C(" 设为主版本 ")]),_:2},1032,["disabled","onClick"])]),flowIcon:t(({row:h})=>[n(s(Z),{icon:h.flowIcon,width:"25",style:{display:"inline"}},null,8,["icon"])]),_:1},16)}}}),_t=M({__name:"CategoryTree",emits:["node-click"],setup(r,{emit:e}){const l=e,o={defaultExpandAll:!0,props:{label:"name",value:"id"},filter:!0,formOption:{span:24,column:[{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称"}]},{label:"描述",prop:"remark"},{label:"排序",prop:"sort",type:"number"}]}},{request:a}=N(),{crudStateRefs:{formData:v,tableData:u},getDataList:d,handleSave:g,handleUpdate:f,handleDel:_}=j({crudOption:{rowKey:"id",...Fe(a),dataPath:"res.data"},sortOption:{ascs:"sort"},tableOption:o,pageOption:{pageSize:20}});d();function w(p,c,i,V){g(c,i,V)}function y(p,c,i,V){f(c,Number.NaN,i,V)}async function D(p,c){await _(p.data,Number.NaN),c()}return(p,c)=>{const i=m("avue-tree");return b(),$(i,{modelValue:s(v),"onUpdate:modelValue":c[0]||(c[0]=V=>Y(v)?v.value=V:null),option:o,data:s(u),onNodeClick:c[1]||(c[1]=V=>l("node-click",V)),onSave:w,onUpdate:y,onDel:D},null,8,["modelValue","data"])}}}),wt={style:{display:"flex","align-items":"center"}},yt=Q("span",null,"流程设计",-1),gt={key:0},bt={key:1},kt={style:{height:"calc(100vh - 144px)"}},Dt=M({__name:"DesignSteps",props:{modelValue:{default:()=>({})},visible:{type:Boolean}},emits:["close"],setup(r,{emit:e}){const l=r,o=e,{modelValue:a,visible:v}=re(l),{request:u}=N(),{create:d,deploy:g,getDetail:f,update:_}=le(u),{getDetail:w,update:y}=de(u),D=["流程信息","表单设计","模型设计","完成"],p=x(),c=x(),i=x(!1);ye(()=>[v.value,p.value],async()=>{var T,B;if(!v.value||!p.value)return;const{flowModuleId:h}=a.value,{flowDeployId:F}=a.value;try{i.value=!0;let ee={};F?ee=await w({flowDeployId:F}):h&&(ee=await f({flowModuleId:h})),a.value=ee.data,(T=c.value)!=null&&T.sort&&(c.value.sort.display=!("flowDeployId"in a.value)),(B=c.value)!=null&&B.flowKey&&(c.value.flowKey.disabled="flowModuleId"in a.value||"flowDeployId"in a.value)}finally{i.value=!1}},{immediate:!0});const{data:V}=ne(u).useList(),O=G(()=>{var h,F;return(F=(h=V.value)==null?void 0:h.find(T=>T.tableName===a.value.formDataTable))==null?void 0:F.tableFields}),k=x(0);async function I(h){k.value===0&&await Re(p),i.value=!0;const{flowModuleId:F}=a.value,{flowDeployId:T}=a.value;try{T?await y(a.value):F?await _(a.value):await d(a.value).then(B=>{a.value.flowModuleId=B.data.flowModuleId}),R.success("保存成功")}finally{i.value=!1}typeof h=="number"?k.value=h:k.value++}async function L(){await X.confirm("发布新版本，是否确认？","提示",{type:"success"}),i.value=!0,g({flowModuleId:a.value.flowModuleId}).then(()=>{R.success("发布成功")}).finally(()=>{i.value=!1})}async function P(){await X.confirm("流程定义的数据(包括流程信息、表单设计、流程设计)将被修改为当前版本的数据，是否确认？","提示",{type:"warning"}),await _(a.value),R.success("同步成功")}function A(){v.value=!1,k.value=0,a.value={},o("close")}return(h,F)=>{const T=m("el-col"),B=m("el-step"),ee=m("el-steps"),J=m("el-button"),Ie=m("el-row"),xe=m("avue-form"),Le=m("el-result"),Ne=m("el-dialog"),Pe=ge("loading");return b(),$(Ne,{modelValue:s(v),"onUpdate:modelValue":F[8]||(F[8]=S=>Y(v)?v.value=S:null),"show-close":!1,fullscreen:"","destroy-on-close":"",onClose:A},{header:t(()=>[n(Ie,{justify:"center"},{default:t(()=>[n(T,{span:6},{default:t(()=>[Q("div",wt,[yt,s(a).flowName?(b(),K("span",gt," - "+E(s(a).flowName),1)):U("",!0),s(a).version?(b(),K("span",bt," - V"+E(s(a).version),1)):U("",!0),n(s(Et),{"form-data":s(a),"onUpdate:formData":F[0]||(F[0]=S=>Y(a)?a.value=S:null),"active-step":k.value},null,8,["form-data","active-step"])])]),_:1}),n(T,{span:12},{default:t(()=>[n(ee,{active:k.value,simple:"","process-status":"finish","finish-status":"success"},{default:t(()=>[(b(),K(H,null,te(D,(S,pe)=>n(B,{key:pe,title:S,style:{cursor:"pointer"},onClick:jt=>I(pe)},null,8,["title","onClick"])),64))]),_:1},8,["active"])]),_:1}),n(T,{span:6,style:{"text-align":"right"}},{default:t(()=>[n(J,{disabled:k.value===0,loading:i.value,type:"primary",onClick:F[1]||(F[1]=S=>I(k.value-1))},{default:t(()=>[C(" 上一步 ")]),_:1},8,["disabled","loading"]),n(J,{disabled:k.value===D.length-1,loading:i.value,type:"primary",onClick:F[2]||(F[2]=S=>I(k.value+1))},{default:t(()=>[C(" 下一步 ")]),_:1},8,["disabled","loading"]),n(J,{disabled:k.value===D.length-1,loading:i.value,type:"success",onClick:F[3]||(F[3]=S=>I(k.value))},{default:t(()=>[C(" 保存 ")]),_:1},8,["disabled","loading"]),n(J,{onClick:A},{default:t(()=>[C(" 关闭 ")]),_:1})]),_:1})]),_:1})]),default:t(()=>[be((b(),K("div",kt,[k.value===0?(b(),$(xe,{key:0,ref_key:"formRef",ref:p,modelValue:s(a),"onUpdate:modelValue":F[4]||(F[4]=S=>Y(a)?a.value=S:null),defaults:c.value,"onUpdate:defaults":F[5]||(F[5]=S=>c.value=S),option:s(Ke),style:{width:"50%",magin:"0 auto"}},null,8,["modelValue","defaults","option"])):U("",!0),k.value===1?(b(),$(s(ce),{key:1,modelValue:s(a).formOption,"onUpdate:modelValue":F[6]||(F[6]=S=>s(a).formOption=S),fields:O.value},null,8,["modelValue","fields"])):U("",!0),k.value===2?(b(),$(s(se),{key:2,modelValue:s(a).flowData,"onUpdate:modelValue":F[7]||(F[7]=S=>s(a).flowData=S),"flow-form-option":s(a).formOption},null,8,["modelValue","flow-form-option"])):U("",!0),k.value===3?(b(),$(Le,{key:3,icon:"success",title:"流程设计完成"},{extra:t(()=>[s(a).flowDeployId?(b(),$(J,{key:0,type:"primary",onClick:P},{default:t(()=>[C(" 同步到流程定义 ")]),_:1})):U("",!0),s(a).flowDeployId?U("",!0):(b(),$(J,{key:1,type:"primary",onClick:L},{default:t(()=>[C(" 发布 ")]),_:1})),n(J,{onClick:A},{default:t(()=>[C(" 关闭 ")]),_:1})]),_:1})):U("",!0)])),[[Pe,i.value]])]),_:1},8,["modelValue"])}}}),Ft=Q("span",null,"流程查看",-1),Vt={key:0},Ct={key:1},Ot=M({__name:"DesignView",props:{modelValue:{default:()=>({})},visible:{type:Boolean}},setup(r){const e=r,{modelValue:l,visible:o}=re(e),{request:a}=N(),{getDetail:v}=le(a),{getDetail:u}=de(a),d=x("form"),g=x(!1);ye(o,async _=>{if(!_)return;const{flowModuleId:w}=l.value,{flowDeployId:y}=l.value;try{g.value=!0;let D={};y?D=await u({flowDeployId:y}):w&&(D=await v({flowModuleId:w})),l.value={...D.data}}finally{g.value=!1}},{immediate:!0});function f(){l.value={},d.value="form"}return(_,w)=>{const y=m("el-tab-pane"),D=m("el-tabs"),p=m("el-dialog"),c=ge("loading");return b(),$(p,{modelValue:s(o),"onUpdate:modelValue":w[3]||(w[3]=i=>Y(o)?o.value=i:null),width:"60%",top:"5%",onClose:f},{header:t(()=>{var i,V,O,k;return[Ft,(i=s(l))!=null&&i.flowName?(b(),K("span",Vt," - "+E((V=s(l))==null?void 0:V.flowName),1)):U("",!0),(O=s(l))!=null&&O.version?(b(),K("span",Ct," - V"+E((k=s(l))==null?void 0:k.version),1)):U("",!0)]}),default:t(()=>[be((b(),$(D,{modelValue:d.value,"onUpdate:modelValue":w[2]||(w[2]=i=>d.value=i)},{default:t(()=>[n(y,{label:"查看表单",name:"form",style:{height:"600px","overflow-y":"auto"}},{default:t(()=>[d.value==="form"&&s(l).formOption?(b(),$(s(ce),{key:0,modelValue:s(l).formOption,"onUpdate:modelValue":w[0]||(w[0]=i=>s(l).formOption=i),view:""},null,8,["modelValue"])):U("",!0)]),_:1}),n(y,{label:"查看流程",name:"flow",style:{height:"600px"}},{default:t(()=>[d.value==="flow"?(b(),$(s(se),{key:0,modelValue:s(l).flowData,"onUpdate:modelValue":w[1]||(w[1]=i=>s(l).flowData=i),view:""},null,8,["modelValue"])):U("",!0)]),_:1})]),_:1},8,["modelValue"])),[[c,g.value]])]),_:1},8,["modelValue"])}}}),ht=M({__name:"index",setup(r){const e=x("definition"),l=x({}),o=x(""),a=x("");function v(p){o.value===p.id?o.value="":o.value=p.id}const u=x(!1),d=x(!1);function g(){l.value={},u.value=!0}function f(p){l.value=p,u.value=!0}function _(p){l.value=p,d.value=!0}function w(p){a.value=p.flowModuleId||"",e.value="deploy"}function y(){a.value="",e.value="definition"}async function D(){const p=e.value;await me(),e.value="",await me(),e.value=`${p}`}return(p,c)=>{const i=m("el-card"),V=m("el-col"),O=m("el-row");return b(),$(O,{gutter:20},{default:t(()=>[n(V,{span:6},{default:t(()=>[n(i,{header:"流程分类",style:{height:"100%"}},{default:t(()=>[n(_t,{onNodeClick:v})]),_:1})]),_:1}),n(V,{span:18},{default:t(()=>[e.value==="definition"?(b(),$($e,{key:0,"category-id":o.value,onAdd:g,onEdit:f,onView:_,onVersion:w},null,8,["category-id"])):U("",!0),e.value==="deploy"&&a.value?(b(),$(Te,{key:1,"flow-module-id":a.value,onEdit:f,onView:_,onBack:y},null,8,["flow-module-id"])):U("",!0),n(Dt,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=k=>l.value=k),visible:u.value,"onUpdate:visible":c[1]||(c[1]=k=>u.value=k),onClose:D},null,8,["modelValue","visible"]),n(Ot,{modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=k=>l.value=k),visible:d.value,"onUpdate:visible":c[3]||(c[3]=k=>d.value=k)},null,8,["modelValue","visible"])]),_:1})]),_:1})}}}),$t=M({__name:"index",setup(r){const e=st("debugMode",!1),{request:l}=N(),{getTaskOpsList:o}=pt(l),{bindVal:a,getDataList:v,crudStateRefs:{searchForm:u}}=j({tableOption:fe,crudOption:{getList:o},searchForm:{status:ve.待办,taskNodeType:"userTask"},sortOption:{descs:"start_time"}});oe(u,v,{debounce:300,immediate:!0,deep:!0});const{open:d,close:g}=ae();function f(_){d({flowKey:_.flowKey,taskId:_.taskId,instanceId:_.flowInstanceId,debug:e.value,onComplete(){g(),R.success("操作成功"),v()}})}return(_,w)=>{const y=m("avue-radio"),D=m("el-switch"),p=m("el-button"),c=m("el-link"),i=m("avue-crud");return b(),$(i,z(W(s(a))),{"menu-left":t(()=>[n(y,{modelValue:s(u).taskNodeType,"onUpdate:modelValue":w[0]||(w[0]=V=>s(u).taskNodeType=V),dic:s(_e),button:""},null,8,["modelValue","dic"])]),"menu-right":t(()=>[n(p,{type:"text"},{default:t(()=>[n(D,{modelValue:s(e),"onUpdate:modelValue":w[1]||(w[1]=V=>Y(e)?e.value=V:null),"inline-prompt":"","active-text":"debug","inactive-text":"debug"},null,8,["modelValue"])]),_:1})]),processTitle:t(({row:V})=>[n(c,{type:"primary",underline:!1,onClick:O=>f(V)},{default:t(()=>[C(E(V.processTitle||"无标题"),1)]),_:2},1032,["onClick"])]),_:1},16)}}}),Tt=M({__name:"index",setup(r){const{request:e}=N(),{bindVal:l,getDataList:o}=j({tableOption:Ee,crudOption:we(e)});return o(),(a,v)=>{const u=m("avue-crud");return b(),$(u,z(W(s(l))),null,16)}}}),It={class:"flow-list"},xt=["onClick"],Lt={class:"flow-name"},Nt=M({__name:"index",setup(r){const{request:e}=N(),{useList:l}=Fe(e),{usePublishList:o,getTaskList:a}=je(e),{data:v}=l(),{data:u}=o(),d=G(()=>{var p;return(p=v.value)==null?void 0:p.map(c=>{var V;const i=((V=u.value)==null?void 0:V.filter(O=>O.categoryId===c.id))??[];return{...c,list:i}}).filter(c=>{var i;return(i=c.list)==null?void 0:i.length})}),{bindVal:g,getDataList:f,crudStateRefs:{searchForm:_}}=j({tableOption:fe,crudOption:{getList:a},searchForm:{status:ve.待办,taskNodeType:"userTask"},sortOption:{descs:"start_time"}});oe(_,f,{debounce:300,immediate:!0,deep:!0});const{open:w,close:y}=ae();function D(p){w({flowKey:p.flowKey,taskId:p.taskId,instanceId:p.flowInstanceId,onComplete(){y(),R.success("操作成功"),f()}})}return(p,c)=>{const i=m("el-button"),V=m("el-divider"),O=m("el-collapse-item"),k=m("el-collapse"),I=m("el-card"),L=m("avue-radio"),P=m("el-link"),A=m("avue-crud");return b(),K(H,null,[n(I,{"body-style":{padding:"0 20px"}},{default:t(()=>[n(k,{"model-value":"1"},{default:t(()=>[n(O,{name:"1"},{title:t(()=>[n(i,{text:"",icon:"el-icon-promotion"},{default:t(()=>[C(" 发起审批 ")]),_:1})]),default:t(()=>[Q("div",It,[(b(!0),K(H,null,te(d.value,h=>(b(),K("div",{key:h.id,class:"flow-category"},[n(V,{"content-position":"left"},{default:t(()=>[C(E(h.name),1)]),_:2},1024),(b(!0),K(H,null,te(h.list,F=>(b(),K("div",{key:F.flowKey,class:"flow-item",onClick:T=>D(F)},[n(s(Z),{class:"flow-icon",icon:F.flowIcon,width:"60"},null,8,["icon"]),Q("div",Lt,E(F.flowName),1)],8,xt))),128))]))),128))])]),_:1})]),_:1})]),_:1}),n(V),n(A,z(W(s(g))),{"menu-left":t(()=>[n(L,{modelValue:s(_).taskNodeType,"onUpdate:modelValue":c[0]||(c[0]=h=>s(_).taskNodeType=h),dic:s(_e),button:""},null,8,["modelValue","dic"])]),processTitle:t(({row:h})=>[n(P,{type:"primary",underline:!1,onClick:F=>D(h)},{default:t(()=>[C(E(h.processTitle||"无标题"),1)]),_:2},1032,["onClick"])]),_:1},16)],64)}}}),Pt=Qe(Nt,[["__scopeId","data-v-f65a9c10"]]),Ut=M({__name:"index",setup(r){const{request:e}=N(),{bindVal:l,crudStateRefs:{formData:o},getDataList:a,handleUpdate:v}=j({tableOption:ze,crudOption:Ce(e)});a();const u=x(!1);async function d(f){o.value=f,u.value=!0}async function g(){await v(o.value,Number.NaN,()=>u.value=!1,()=>{})}return(f,_)=>{const w=m("el-button"),y=m("avue-crud"),D=m("el-dialog");return b(),K(H,null,[n(y,z(W(s(l))),{menu:t(({row:p})=>[n(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:c=>d(p)},{default:t(()=>[C(" 设计 ")]),_:2},1032,["onClick"])]),_:1},16),n(D,{modelValue:u.value,"onUpdate:modelValue":_[2]||(_[2]=p=>u.value=p),title:`模型设计-${s(o).flowName}`,fullscreen:"","destroy-on-close":""},{footer:t(()=>[n(w,{type:"primary",onClick:g},{default:t(()=>[C(" 保存 ")]),_:1}),n(w,{onClick:_[1]||(_[1]=p=>u.value=!1)},{default:t(()=>[C(" 取消 ")]),_:1})]),default:t(()=>[n(se,{modelValue:s(o).flowData,"onUpdate:modelValue":_[0]||(_[0]=p=>s(o).flowData=p),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),ce=M({__name:"FormDesignWrapper",props:{modelValue:{},view:{type:Boolean},fields:{}},emits:["update:modelValue"],setup(r,{emit:e}){var f;const l=r,o=e,{FormDesign:a}=N(),v=G({get(){return l.modelValue?ot(l.modelValue):{menuBtn:!1,span:24}},set(_){o("update:modelValue",lt(_,{useJson5:!1}))}}),u=G(()=>l.fields?JSON.parse(l.fields):[]),d=G(()=>{const _={type:"select",dicData:u.value,filterable:!0,allowCreate:!0,defaultFirstOption:!0};return w=>{const y=dt(w);return[{..._,props:{label:"name",value:"name",desc:"comment"}},{..._,props:{label:"comment",value:"comment",desc:"name"}},...Array.from({length:((y==null?void 0:y.length)??0)-2}).fill({}).concat({label:"样式类",prop:"class"})]}}),g={form:{settings:Array.from({length:((f=rt.settings)==null?void 0:f.length)??0}).fill({}).concat({label:"样式类",prop:"class"})}};return(_,w)=>{const y=m("avue-form");return _.view?(b(),$(y,{key:0,class:Xe(v.value.class),"model-value":{},option:v.value},null,8,["class","option"])):(b(),$(s(a),{key:1,modelValue:v.value,"onUpdate:modelValue":w[0]||(w[0]=D=>v.value=D),"base-option":d.value,resources:g},null,8,["modelValue","base-option"]))}}}),St=M({__name:"index",setup(r){const{request:e}=N(),{bindVal:l,crudStateRefs:{formData:o},getDataList:a,handleUpdate:v}=j({tableOption:We,crudOption:Oe(e)});a();const u=x(!1);async function d(f){o.value={...f},u.value=!0}async function g(){await v(o.value,Number.NaN,()=>u.value=!1,()=>{})}return(f,_)=>{const w=m("el-button"),y=m("avue-crud"),D=m("el-dialog");return b(),K(H,null,[n(y,z(W(s(l))),{menu:t(({row:p})=>[n(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:c=>d(p)},{default:t(()=>[C(" 设计 ")]),_:2},1032,["onClick"])]),_:1},16),n(D,{modelValue:u.value,"onUpdate:modelValue":_[2]||(_[2]=p=>u.value=p),title:`表单设计-${s(o).formName}`,fullscreen:"","destroy-on-close":""},{footer:t(()=>[n(w,{type:"primary",onClick:g},{default:t(()=>[C(" 保存 ")]),_:1}),n(w,{onClick:_[1]||(_[1]=p=>u.value=!1)},{default:t(()=>[C(" 取消 ")]),_:1})]),default:t(()=>[n(ce,{modelValue:s(o).formOption,"onUpdate:modelValue":_[0]||(_[0]=p=>s(o).formOption=p),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Mt=Q("br",null,null,-1),At=M({__name:"index",setup(r){const{request:e}=N(),{bindVal:l,crudStateRefs:{formData:o,defaults:a},getDataList:v,afterOpen:u,beforeSubmit:d}=j({crudOption:ne(e),tableOption:Je});v();const{data:g}=we(e).useParam("table.default.fields");u(c=>{if(o.value.defaultFields=g.value??[],c==="edit"){const i=JSON.parse(o.value.tableFields);o.value.editFields=ct(i,g.value??[],"name")}}),d(c=>{const i=[...c.defaultFields,...c.editFields];c.tableFields=JSON.stringify(i)});const f=x(!1);ie(()=>{var c;(c=a.value)!=null&&c.defaultFields&&(a.value.defaultFields.display=f.value)});const{deploy:_,getFields:w}=ne(e),y=x(!1);async function D(c){await X.confirm("部署将自动生成数据库表，是否确认？","提示",{type:"success"}),y.value=!0,_({id:c.id}).then(()=>{R.success("部署成功"),v()}).finally(()=>{y.value=!1})}function p(){w({tableName:o.value.tableName}).then(c=>{var i;if(!((i=c.data)!=null&&i.length))return R.warning("未找到该表");o.value.editFields=c.data})}return(c,i)=>{const V=m("el-button"),O=m("el-input"),k=m("el-switch"),I=m("el-tooltip"),L=m("avue-crud");return b(),$(L,z(W(s(l))),{menu:t(({row:P})=>[n(V,{type:"text",icon:"el-icon-upload",onClick:A=>D(P)},{default:t(()=>[C(" 部署 ")]),_:2},1032,["onClick"])]),"tableName-form":t(()=>[n(O,{modelValue:s(o).tableName,"onUpdate:modelValue":i[0]||(i[0]=P=>s(o).tableName=P),placeholder:"请输入 表名"},{append:t(()=>[n(V,{type:"primary",size:"default",onClick:p},{default:t(()=>[C(" 导入已有表 ")]),_:1})]),_:1},8,["modelValue"])]),"editFields-label":t(()=>[Q("div",null,[C(" 数据库字段 "),Mt,n(I,{content:"显示默认字段"},{default:t(()=>[n(k,{modelValue:f.value,"onUpdate:modelValue":i[1]||(i[1]=P=>f.value=P)},null,8,["modelValue"])]),_:1})])]),_:1},16)}}}),Bt=M({__name:"index",setup(r){const e=it(),l=x({}),{FlowForm:o}=N(),a=G(()=>{const u=l.value.flowInstance;return e.detail===!0||e.detail==="true"?`查看流程：${u==null?void 0:u.title}`:e.instanceId||e.taskId?`办理流程：${u==null?void 0:u.title}`:`发起流程：${u==null?void 0:u.title}`});ut(a);async function v(u){window.postMessage({event:"onComplete",data:{...u}})}return(u,d)=>(b(),$(s(o),ke({flowDetail:l.value,"onUpdate:flowDetail":d[0]||(d[0]=g=>l.value=g)},s(e),{onComplete:v}),null,16,["flowDetail"]))}}),Kt=Object.freeze(Object.defineProperty({__proto__:null,PageFlowButton:vt,PageFlowDefinition:$e,PageFlowDeploy:Te,PageFlowForm:Bt,PageFlowManage:ht,PageFlowOps:$t,PageFlowParam:Tt,PageFlowTemplate:Ut,PageFlowWorkbench:Pt,PageFormTemplate:St,PageTableTemplate:At},Symbol.toStringTag,{value:"Module"})),Rt={key:1},Et=M({__name:"TemplateSelect",props:{formData:{type:Object,default:()=>({})},activeStep:{type:Number}},setup(r){const e=r,{formData:l,activeStep:o}=re(e),{request:a}=N(),{getDetail:v,useList:u}=le(a),{data:d}=Oe(a).useList(),{data:g}=Ce(a).useList(),{data:f}=u(),_=G(()=>{var y,D,p,c;return(o==null?void 0:o.value)===1?[{label:"表单模板",value:"",type:"divider"},...((y=d.value)==null?void 0:y.map(i=>({label:i.formName,value:i.formOption,type:"template"})))??[],{label:"已有表单",value:"",type:"divider"},...((D=f.value)==null?void 0:D.map(i=>({label:i.flowName,value:i.flowModuleId,type:"definition"})))??[]]:(o==null?void 0:o.value)===2?[{label:"流程模板",value:"",type:"divider"},...((p=g.value)==null?void 0:p.map(i=>({label:i.flowName,value:i.flowData,type:"template"})))??[],{label:"已有流程",value:"",type:"divider"},...((c=f.value)==null?void 0:c.map(i=>({label:i.flowName,value:i.flowModuleId,type:"definition"})))??[]]:[]});async function w(y){if((o==null?void 0:o.value)===1){if(y.type==="template")l.value.formOption=y.value;else if(y.type==="definition"){const D=await v({flowModuleId:y.value});l.value.formOption=D.data.formOption}}else if((o==null?void 0:o.value)===2){if(y.type==="template")l.value.flowData=y.value;else if(y.type==="definition"){const D=await v({flowModuleId:y.value});l.value.flowData=D.data.flowData}}}return(y,D)=>{const p=m("Icon"),c=m("el-button"),i=m("el-divider"),V=m("el-dropdown-item"),O=m("el-scrollbar"),k=m("el-dropdown-menu"),I=m("el-dropdown");return _.value.length?(b(),$(I,{key:0},{dropdown:t(()=>[n(k,null,{default:t(()=>[n(O,{"max-height":"600px"},{default:t(()=>[(b(!0),K(H,null,te(_.value,L=>(b(),$(V,ke({key:L.label},L,{disabled:L.type==="divider",onClick:P=>w(L)}),{default:t(()=>[L.type==="divider"?(b(),$(i,{key:0},{default:t(()=>[C(E(L.label),1)]),_:2},1024)):(b(),K("span",Rt,E(L.label),1))]),_:2},1040,["disabled","onClick"]))),128))]),_:1})]),_:1})]),default:t(()=>[n(c,{text:"",type:"primary",underline:!1},{default:t(()=>[C(" 选择模板 "),n(p,{icon:"ep:arrow-down"})]),_:1})]),_:1})):U("",!0)}}}),Ro={install(r,e){N(e),Object.entries(Kt).forEach(([l,o])=>{r.component(l,o)})}};export{zo as ApprovalForm,Wo as ApprovalTree,Jo as ButtonList,Ue as CONFIG_DEFAULT,_t as CategoryTree,Go as CommonComments,Dt as DesignSteps,Ot as DesignView,Ho as FieldType,Qo as FlowButtonApproval,Xo as FlowButtonDisplay,Yo as FlowButtonKey,Zo as FlowButtonStatus,qo as FlowButtonType,se as FlowDesignWrapper,el as FlowForm,tl as FlowStatus,ol as FlowTrack,ce as FormDesignWrapper,ll as HandleType,al as InternalForm,Ve as IsMainVersion,vt as PageFlowButton,$e as PageFlowDefinition,Te as PageFlowDeploy,Bt as PageFlowForm,ht as PageFlowManage,$t as PageFlowOps,Tt as PageFlowParam,Ut as PageFlowTemplate,Pt as PageFlowWorkbench,St as PageFormTemplate,At as PageTableTemplate,nl as TablePrimary,ve as TaskStatus,Et as TemplateSelect,sl as UploadTable,il as Whether,Re as asyncValidate,Ro as default,ul as defineTableOption,Ke as designFormOption,rl as fieldTypeDic,dl as flowFormEmits,cl as flowFormProps,pl as injectionKey,ml as isMobile,fl as mergeColumn,vl as tablePrimaryDic,_e as taskNodeTypeDic,_l as useButtonHandler,wl as useCommonCommentApi,N as useConfigProvider,yl as useEmitter,Me as useFlowButtonApi,Fe as useFlowCategoryApi,le as useFlowDefinitionApi,de as useFlowDeployApi,gl as useFlowFileApi,ae as useFlowForm,ft as useFlowFormOverlay,mt as useFlowFormWindow,pt as useFlowOpsApi,we as useFlowParamApi,je as useFlowTaskApi,Ce as useFlowTemplateApi,bl as useFlowUserApi,kl as useFormDefaults,Oe as useFormTemplateApi,Dl as useInjectState,Fl as useProvideState,ne as useTableTemplateApi,Vl as whetherDic};
