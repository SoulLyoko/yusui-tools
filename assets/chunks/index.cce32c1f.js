var ue=Object.defineProperty;var pe=(n,e,o)=>e in n?ue(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var _=(n,e,o)=>(pe(n,typeof e!="symbol"?e+"":e,o),o);import{a as de,u as me}from"./index.b00b9483.js";import{_ as Pt,c as St,e as Ot,f as Gt,g as Lt,d as Ft,h as It,j as Bt,i as $t,m as qt,n as Ut,p as Kt,k as jt,s as Jt,l as Wt,o as At,b as Rt,q as zt}from"./index.b00b9483.js";import{C as ye,M as ve,D as fe,l as Z,S as he,a as be,I as ge,B as ee,G as te}from"./index.154ef494.js";import{u as Qt,v as Xt,E as Yt,e as Zt,f as eo,g as to,s as oo,t as ao,q as no,r as so,N as lo,p as io,h as ro,i as co,P as uo,b as po,n as mo,o as yo,k as vo,m as fo,c as ho,d as bo,U as go,j as xo}from"./index.154ef494.js";import{a as xe}from"./index.22b43a78.js";import{i as A,u as we}from"./uniqueId.6677a949.js";import{o as R}from"./omit.b387bec1.js";import{d as ko}from"./data.4cb21f02.js";import{defaultTheme as oe}from"./index.4f614152.js";import{E as K,z as ae,d as se,h as ke,A as Ne,J as N,o as S,b as B,w as O,r as j,N as q,a as Te,l as w,B as $,k as _e,j as Ee,c as Me,ak as De}from"./framework.f01dabf7.js";import{a as Ve}from"./index.cd412afd.js";import"./cloneDeep.72f77c29.js";import"./Uint8Array.1590c62a.js";import"./index.288677a1.js";import"./getTag.c191495f.js";import"../app.97067401.js";import"./theme.e5ffaba7.js";import"./iconify.b68073ff.js";import"./index.vue_vue_type_script_setup_true_lang.02ea6cab.js";import"./pick.2b716c9d.js";import"./basePickBy.ac487ef2.js";import"./index.b86440c3.js";import"./get.c8715fa2.js";import"./index.ce6e3f3d.js";import"./index.c76107df.js";import"./index.es.e5378d01.js";import"./index.386fc70b.js";import"./config.78667c97.js";const Ce=[{label:"开始",value:"start"},{label:"任务",value:"task"},{label:"结束",value:"end"}],Pe=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],Se=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],Tt=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:Ce},{label:"类型",prop:"eventType",type:"select",dicData:Pe},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:Se},{label:"值",prop:"fieldValue"}]}}]}}],Oe=[{label:"创建",value:"create"},{label:"指派",value:"assignment"},{label:"完成",value:"complete"},{label:"删除",value:"delete"},{label:"更新",value:"update"},{label:"超时",value:"timeout"}],Ge=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],Le=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],_t=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:Oe},{label:"类型",prop:"eventType",type:"select",dicData:Ge},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:Le},{label:"值",prop:"fieldValue"}]}}]}}],Et=[{label:"",labelWidth:0,prop:"timeLimit",type:"dynamic",children:{column:[{label:"名称",prop:"name"},{label:"最小值",prop:"min",type:"number"},{label:"最大值",prop:"max",type:"number"}]},value:[]}];function ne(n,e){return n.map(o=>{const a=e.find(c=>c.buttonKey===o.buttonKey),{name:s,buttonKey:l,display:r,approval:u}=o;return{name:s,buttonKey:l,display:r,approval:u,...a}})}function J(n,e){return n.map(o=>{var h,b;const a=e.find(v=>v.prop===o.prop),{label:s,prop:l,display:r=!0,disabled:u=!1,detail:i=!1,readonly:c=!1,rules:m}=o,y=(m==null?void 0:m.some(v=>v.required))??!1,f={label:s,prop:l,display:r,disabled:u,detail:i,readonly:c,required:y,...a};return o.type==="dynamic"&&((b=(h=o.children)==null?void 0:h.column)!=null&&b.length)&&(f.children=J(o.children.column,(a==null?void 0:a.children)??[])),f})}function Fe({lf:n,graphData:e,elementData:o,formData:a,formLoading:s,formOption:l,formOptions:r,editorVisible:u,dataOptions:i,formRef:c,formDefaults:m}){var h,b,v,g,E,M,D,V,C;async function y({data:p,isForce:t}={data:{},isForce:!1}){var x,k,T,G,L,F,I;const d=(x=n.value)==null?void 0:x.graphModel.nodes.find(U=>U.type==="process");!p&&(d!=null&&d.id)&&(p=(k=n.value)==null?void 0:k.getNodeDataById(d.id)),!((p==null?void 0:p.id)===((T=o.value)==null?void 0:T.id)&&(p==null?void 0:p.type)===((G=o.value)==null?void 0:G.type)&&!t)&&(p.type!=="process"&&((L=n.value)==null||L.selectElementById(p.id)),s.value=!0,await K(),o.value=p,l.value={menuBtn:!1,span:24,labelPosition:"left",group:((F=r.value)==null?void 0:F[p.type])??de},a.value={...p.properties,id:p.id,name:((I=p.text)==null?void 0:I.value)||""},s.value=!1,await K(),f())}async function f(){var G,L,F,I,U,z,H;const{formPropertyList:p,buttonList:t,fieldsDic:d,flowButtonDisplayDic:x,flowButtonApprovalDic:k}=i.value??{},T=P=>{var Q,X;return(X=(Q=l.value)==null?void 0:Q.group)==null?void 0:X.some(re=>{var Y;return(Y=re.column)==null?void 0:Y.some(ce=>ce.prop===P)})};T("button")&&(a.value.button=ne(t||[],((G=a.value)==null?void 0:G.button)||[]),(I=(F=(L=m.value)==null?void 0:L.button.children)==null?void 0:F.column)==null||I.forEach(P=>{P.prop==="display"&&(P.dicData=x),P.prop==="approval"&&(P.dicData=k)})),T("formProperty")&&(a.value.formProperty=J(p||[],((U=a.value)==null?void 0:U.formProperty)||[])),T("priority")&&((z=c.value)==null||z.updateDic("priority",d)),T("formTitle")&&((H=c.value)==null||H.updateDic("formTitle",d))}(h=n.value)==null||h.on("element:click",y),(b=n.value)==null||b.on("blank:click",y),(v=n.value)==null||v.on("node:add",y),(g=n.value)==null||g.on("node:dnd-add",y),(E=n.value)==null||E.on("node:delete",()=>y()),(M=n.value)==null||M.on("history:change",()=>{var p;e.value=(p=n.value)==null?void 0:p.getGraphData()}),(D=n.value)==null||D.on("custom:edit-click",()=>{u.value=!0}),(V=n.value)==null||V.on("custom:reset-form-property",()=>{var p,t;(t=(p=e.value)==null?void 0:p.flowElementList)==null||t.forEach(d=>{var x,k;(x=d.properties)!=null&&x.formProperty&&(d.properties.formProperty=J(((k=i.value)==null?void 0:k.formPropertyList)||[],[]))}),e.value={...e.value}}),(C=n.value)==null||C.on("custom:reset-button",()=>{var p,t;(t=(p=e.value)==null?void 0:p.flowElementList)==null||t.forEach(d=>{var x,k;(x=d.properties)!=null&&x.button&&(d.properties.button=ne(((k=i.value)==null?void 0:k.buttonList)||[],[]))}),e.value={...e.value}})}class Ie extends ye{constructor({lf:e}){super({lf:e}),[{key:"clear",iconClass:"lf-control-clear",title:"清空",text:"清空",onClick:()=>e.clearData()},{key:"edit",iconClass:"lf-control-edit",title:"编辑",text:"编辑",onClick:()=>e.emit("custom:edit-click",{})},{key:"mini-map",iconClass:"lf-control-mini-map",title:"导航",text:"导航",onClick:()=>{const{isShow:a,show:s,hide:l}=e.extension.miniMap??{};a?l():s()}},{key:"reset",iconClass:"lf-control-reset",title:"重置",text:"重置",onClick:()=>{xe.confirm("选择重置的配置","提示",{confirmButtonText:"重置表单配置",cancelButtonText:"重置按钮配置"}).then(()=>{e.emit("custom:reset-form-property",{})}).catch(()=>{e.emit("custom:reset-button",{})})}}].forEach(a=>this.addItem(a))}}class Mt{}class Be extends ve{constructor({lf:e}){super({lf:e});const o={text:"复制",icon:!0,className:"lf-menu-copy",callback:t=>e.cloneNode(t.id)},a={text:"删除",icon:!0,className:"lf-menu-delete",callback:t=>{e.deleteNode(t.id),e.deleteEdge(t.id)}},s={text:"编辑文本",icon:!0,className:"lf-menu-edit",callback:t=>e.graphModel.editText(t.id)},l={text:"删除文本",icon:!0,className:"lf-menu-delete",callback:t=>e.updateText(t.id,"")},r={text:"框选",icon:!0,className:"lf-menu-select",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},u={text:"清空",icon:!0,className:"lf-menu-clear",callback:()=>e.clearData()},i={text:"",icon:!0,className:"lf-menu-back",callback:t=>this.changeMenuList(t,p.nodeMenu)},c={text:"添加",icon:!0,className:"lf-menu-add",callback:t=>{let d=[];switch(t.type){case"startEvent":case"userTask":case"exclusiveGateway":case"parallelGateway":case"circulateTask":d=[i,m,y,f,b,v,h,g];break;case"endEvent":case"sequenceFlow":case"group":case"serviceTask":d=[i,g];break;default:d=[i]}this.changeMenuList(t,d)}},m={text:"用户任务",icon:!0,className:"lf-menu-user-task",callback:t=>this.addNode(t,{type:"userTask",x:t.x+200,y:t.y})},y={text:"服务任务",icon:!0,className:"lf-menu-service-task",callback:t=>this.addNode(t,{type:"serviceTask",x:t.x+200,y:t.y})},f={text:"传阅任务",icon:!0,className:"lf-menu-circulate-task",callback:t=>this.addNode(t,{type:"circulateTask",x:t.x+200,y:t.y})},h={text:"结束",icon:!0,className:"lf-menu-end-event",callback:t=>this.addNode(t,{type:"endEvent",x:t.x+150,y:t.y})},b={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:t=>this.addNode(t,{type:"exclusiveGateway",x:t.x+150,y:t.y})},v={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:t=>this.addNode(t,{type:"parallelGateway",x:t.x+150,y:t.y})},g={text:"注释",icon:!0,className:"lf-menu-note",callback:t=>this.addNode(t,{type:"note",x:t.x,y:t.y-150})},E={text:"切换类型",icon:!0,className:"lf-menu-switch",callback:t=>{let d=[];switch(t.type){case"exclusiveGateway":d=[i,V];break;case"parallelGateway":d=[i,C];break;case"startEvent":d=[i,D];break;case"endEvent":d=[i,M];break;default:d=[i]}this.changeMenuList(t,d)}},M={text:"开始",icon:!0,className:"lf-menu-start-event",callback:t=>this.changeNodeType(t,"startEvent")},D={text:"结束",icon:!0,className:"lf-menu-end-event",callback:t=>this.changeNodeType(t,"endEvent")},V={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:t=>this.changeNodeType(t,"parallelGateway")},C={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:t=>this.changeNodeType(t,"exclusiveGateway")},p={nodeMenu:[c,o,a,E,s,l],edgeMenu:[a,s,l],graphMenu:[r,u]};this.setMenuConfig(p)}changeMenuList(e,o){setTimeout(()=>{this.__currentData=e;const{left:a,top:s}=this.__menuDOM.style;this.showMenu(a,s,o)})}addNode(e,o){const a=this.lf.addNode(o),s=["serviceTask","note"].includes(o.type);this.lf.addEdge({type:s?"noteFlow":void 0,sourceNodeId:e.id,targetNodeId:a.id})}changeNodeType(e,o){this.lf.changeNodeType(e.id,o),Object.keys(e.properties||{}).forEach(a=>this.lf.deleteProperty(e.id,a)),this.lf.emit("element:click",{data:{...e,type:o,properties:{}}})}}class $e extends fe{constructor({lf:e}){super({lf:e}),this.setPatternItems([{label:"框选",icon:"https://api.iconify.design/bpmn/lasso-tool.svg?width=24&height=24",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},{type:"group",label:"子流程",icon:"https://api.iconify.design/bpmn/subprocess-expanded.svg?width=24&height=24"},{type:"startEvent",text:"开始",label:"开始节点",icon:"https://api.iconify.design/bpmn/start-event.svg?width=24&height=24"},{type:"endEvent",text:"结束",label:"结束节点",icon:"https://api.iconify.design/bpmn/end-event.svg?width=24&height=24"},{type:"userTask",label:"用户任务",icon:"https://api.iconify.design/bpmn/user-task.svg?width=24&height=24"},{type:"serviceTask",label:"服务任务",icon:"https://api.iconify.design/bpmn/service-task.svg?width=24&height=24"},{type:"circulateTask",label:"传阅任务",icon:"https://api.iconify.design/bpmn/manual-task.svg?width=24&height=24"},{type:"exclusiveGateway",label:"互斥网关",icon:"https://api.iconify.design/bpmn/gateway-xor.svg?width=24&height=24"},{type:"parallelGateway",label:"并行网关",icon:"https://api.iconify.design/bpmn/gateway-parallel.svg?width=24&height=24"},{type:"note",label:"注释",icon:"https://api.iconify.design/bpmn/text-annotation.svg?width=24&height=24"}])}}const le={type:"process",key:"Process",properties:{}};function qe(n){const{id:e,type:o,x:a,y:s,properties:l,children:r,text:u}=n;return{incoming:[],outgoing:[],children:r,type:o,key:e,groupKey:l==null?void 0:l.groupKey,properties:{...l,name:A(u)?u:(u==null?void 0:u.value)??"",x:a,y:s,text:u}}}function Ue(n){const{id:e,type:o,sourceNodeId:a,targetNodeId:s,startPoint:l,endPoint:r,pointsList:u,properties:i,text:c}=n;return{incoming:[a],outgoing:[s],type:o,key:e,groupKey:i==null?void 0:i.groupKey,properties:{...i,name:A(c)?c:(c==null?void 0:c.value)??"",text:c,startPoint:l,endPoint:r,pointsList:u}}}function Ke(n){const{id:e,type:o,properties:a,text:s}=n;return{type:o,key:e,properties:{...a,name:A(s)?s:(s==null?void 0:s.value)??""}}}function je(n){const e=new Map,o={processData:le,flowElementList:[]};return n.nodes.forEach(a=>{var s;if(a.type==="process")o.processData=Ke(a);else{const l=qe(a);(s=o.flowElementList)==null||s.push(l),e.set(a.id,l)}}),n.edges.forEach(a=>{var u;const s=Ue(a);e.get(a.sourceNodeId).outgoing.push(s.key),e.get(a.targetNodeId).incoming.push(s.key),(u=o.flowElementList)==null||u.push(s)}),o}function Je(n){const{incoming:e,outgoing:o,properties:a,key:s,type:l}=n,{text:r,name:u,startPoint:i,endPoint:c,pointsList:m}=a??{},y={id:s,type:l,sourceNodeId:(e==null?void 0:e[0])??"",targetNodeId:(o==null?void 0:o[0])??"",text:r||u,startPoint:i,endPoint:c,pointsList:m,properties:{}},f=["startPoint","endPoint","pointsList","text"];return y.properties=R(a,f),y}function We(n){const{properties:e,key:o,type:a,children:s}=n,{x:l,y:r,text:u,name:i}=e??{},c={id:o,type:a??"",x:l,y:r,text:u||i,children:s,properties:{}},m=["x","y","text"];return c.properties=R(e,m),c}function Ae(n){const{properties:e,key:o,type:a}=n,{name:s}=e??{},l={id:o,type:a??"",text:s,x:0,y:0},r=["x","y","text"];return l.properties=R(e,r),l}function Re(n){const{flowElementList:e}=n,o=r=>["sequenceFlow","noteFlow"].includes(r),a=(e==null?void 0:e.filter(r=>!o(r.type)).map(We))??[],s=(e==null?void 0:e.filter(r=>o(r.type)).map(Je))??[];return a.unshift(Ae(n.processData??le)),{nodes:a,edges:s}}class W{constructor({lf:e}){e.adapterIn=this.adapterIn,e.adapterOut=this.adapterOut}adapterOut(e){return je(e)}adapterIn(e){return Re(e)}}_(W,"pluginName","turboAdapter");class ie{constructor({lf:e}){_(this,"lf");_(this,"container");_(this,"__tooltipDOM");_(this,"__tooltips",[]);this.__tooltipDOM=document.createElement("div"),this.__tooltipDOM.className="lf-tooltip",this.__tooltipDOM.style.position="absolute",this.__tooltipDOM.style.display="none",this.lf=e}render(e,o){this.container=o,o.appendChild(this.__tooltipDOM),e.on("node:mouseenter,edge:mouseenter",({data:a,e:s})=>{var c;const l=(c=this.__tooltips.find(m=>m.id===a.id))==null?void 0:c.content;if(!l)return;this.__tooltipDOM.innerHTML=l;const r=e.getPointByClient(s.x,s.y),{domOverlayPosition:{x:u,y:i}}=r;this.__tooltipDOM.style.top=`${i+10}px`,this.__tooltipDOM.style.left=`${u+10}px`,this.__tooltipDOM.style.display="block"}),e.on("node:mouseleave,edge:mouseleave",()=>{this.__tooltipDOM.style.display="none"})}setTooltips(e){this.__tooltips=e}}_(ie,"pluginName","tooltip");function ze({props:n,state:e}){const{lf:o,graphData:a}=e;function s(r){var u;o.value=new Z.LogicFlow({container:r,grid:{type:"dot",size:10},nodeTextDraggable:!0,edgeTextDraggable:!0,nodeTextEdit:!0,edgeTextEdit:!0,plugins:[Ie,$e,he,Be,be,ge,ee,te,W],edgeGenerator:(i,c)=>{if(["note","serviceTask"].includes(c.type))return"noteFlow"},...n.initOptions}),(u=o.value)==null||u.setTheme(oe),Fe(e),ae(a,i=>{var f,h,b;const c=JSON.stringify(i),m=JSON.stringify((f=o.value)==null?void 0:f.getGraphData());c!==m&&((h=o.value)==null||h.render(i),(b=o.value)==null||b.emit("element:click",{isForce:!0}))},{immediate:!0})}function l(r){var u;o.value=new Z.LogicFlow({container:r,grid:{type:"dot",size:10},isSilentMode:!0,plugins:[ee,te,W,ie],...n.initOptions}),(u=o.value)==null||u.setTheme(oe),ae(()=>[a.value,n.styles,n.tooltips],async()=>{var i,c,m,y;(i=o.value)==null||i.render(a.value),await K(),(c=n.styles)==null||c.forEach(({id:f,style:h})=>{var b,v;f&&((v=(b=o.value)==null?void 0:b.graphModel)==null||v.updateAttributes(f,{style:h}))}),(y=(m=o.value)==null?void 0:m.extension.tooltip)==null||y.setTooltips(n.tooltips??[])},{immediate:!0})}return{initViewer:l,initModeler:s}}const He=_e("span",null,"编辑JSON",-1),Qe=se({__name:"flow-editor",props:{modelValue:{},visible:{type:Boolean}},emits:["confirm"],setup(n,{emit:e}){const a=Ve(n),{modelValue:s,visible:l}=a,r=ke("");function u(){const i=JSON.parse(r.value);s.value=i,e("confirm",i),l.value=!1}return Ne(()=>{r.value=JSON.stringify(s.value,null,2)}),(i,c)=>{const m=N("el-input"),y=N("el-button"),f=N("el-drawer");return S(),B(f,{modelValue:w(l),"onUpdate:modelValue":c[1]||(c[1]=h=>$(l)?l.value=h:null)},{header:O(()=>[He,j(i.$slots,"header")]),default:O(()=>[q(m,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h),class:"flow-editor__textarea",type:"textarea"},null,8,["modelValue"]),q(y,{class:"flow-editor__confirm-btn",type:"primary",onClick:u},{default:O(()=>[Te(" 确定 ")]),_:1})]),_:3},8,["modelValue"])}}}),Xe=["id"],Dt=se({__name:"index",props:{lf:{},initOptions:{},modelValue:{},elementData:{},formOptions:{},formData:{},formOption:{},formDefaults:{},formWidth:{},dataOptions:{},type:{},styles:{},tooltips:{}},setup(n){const e=n,o=me(e),{lf:a,graphData:s,formRef:l,formData:r,formOption:u,formDefaults:i,formLoading:c,editorVisible:m,onUpdateFormData:y}=o,{initModeler:f,initViewer:h}=ze({props:e,state:o}),b=we("logicflow-container");return Ee(()=>{const v=document.querySelector(`#${b}`);e.type==="viewer"?h(v):f(v)}),(v,g)=>{const E=N("el-main"),M=N("el-empty"),D=N("el-skeleton"),V=N("avue-form"),C=N("el-aside"),p=N("el-container");return v.type==="viewer"?(S(),Me("div",{key:0,id:w(b),class:"lf-container"},null,8,Xe)):(S(),B(p,{key:1,class:"lf-container"},{default:O(()=>[q(E,{id:w(b),class:"lf-main"},null,8,["id"]),q(C,{width:v.formWidth,class:"lf-aside"},{default:O(()=>{var t,d;return[j(v.$slots,"form-top"),(d=(t=w(u))==null?void 0:t.group)!=null&&d.length?w(c)?(S(),B(D,{key:1})):(S(),B(V,{key:2,ref_key:"formRef",ref:l,modelValue:w(r),"onUpdate:modelValue":[g[0]||(g[0]=x=>$(r)?r.value=x:null),w(y)],defaults:w(i),"onUpdate:defaults":g[1]||(g[1]=x=>$(i)?i.value=x:null),option:w(u)},null,8,["modelValue","defaults","option","onUpdate:modelValue"])):(S(),B(M,{key:0,description:"选择元素以编辑数据"}))]}),_:3},8,["width"]),q(Qe,{modelValue:w(s),"onUpdate:modelValue":g[2]||(g[2]=t=>$(s)?s.value=t:null),visible:w(m),"onUpdate:visible":g[3]||(g[3]=t=>$(m)?m.value=t:null),onConfirm:g[4]||(g[4]=t=>{var d;return(d=w(a))==null?void 0:d.render(t)})},De({_:2},[v.$slots["editor-header"]?{name:"header",fn:O(()=>[j(v.$slots,"editor-header")]),key:"0"}:void 0]),1032,["modelValue","visible"])]),_:3}))}}});export{ee as BpmnExtend,Qt as CirculateTaskModel,Xt as CirculateTaskView,Ie as Control,Mt as Dagre,Yt as EndEventModel,Zt as EndEventView,eo as ExclusiveGatewayModel,to as ExclusiveGatewayView,Dt as FlowDesign,Pt as FlowNodeSelect,te as Group,oo as GroupModel,ao as GroupView,Be as Menu,no as NoteFlowModel,so as NoteFlowView,lo as NoteModel,io as NoteView,$e as Panel,ro as ParallelGatewayModel,co as ParallelGatewayView,uo as ProcessModel,po as ProcessView,mo as SequenceFlowModel,yo as SequenceFlowView,vo as ServiceTaskModel,fo as ServiceTaskView,ho as StartEventModel,bo as StartEventView,ie as Tooltip,W as TurboAdapter,go as UserTaskModel,xo as UserTaskView,St as assigneeColumn,Ot as baseColumn,Gt as buttonColumn,Lt as circulateColumn,ko as defaultGraphData,de as defaultGroup,Ft as defaultOptions,oe as defaultTheme,Tt as executionListenerColumn,It as formPropertyColumn,Bt as gatewayColumn,$t as injectionKey,ne as mergeButton,J as mergeFormProperty,qt as multiInstanceColumn,Ut as noteColumn,Kt as processColumn,jt as propertyColumn,Jt as sequenceFlowColumn,Wt as serialColumn,At as serviceTaskColumn,_t as taskListenerColumn,Et as timeLimitColumn,Re as toLogicflowData,je as toTurboData,ze as useInit,Rt as useInjectState,Fe as useModelerListener,me as useProvideState,zt as userTaskColumn};
