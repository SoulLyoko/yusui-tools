var pe=Object.defineProperty;var ue=(n,e,o)=>e in n?pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var E=(n,e,o)=>(ue(n,typeof e!="symbol"?e+"":e,o),o);import{d as de,u as me}from"../flow-design_demo.md.59eafbe3.js";import{a as co,f as po,g as uo,h as mo,j as yo,c as vo,e as fo,k as ho,l as bo,i as go,m as ko,n as xo,p as wo,o as No,s as To,q as _o,r as Eo,b as Do,t as Mo}from"../flow-design_demo.md.59eafbe3.js";import{C as ye,M as ve,D as fe,l as Z,S as he,a as be,I as ge,B as ee,G as te}from"./index.716265b6.js";import{E as Po,e as Co,f as So,g as Go,s as Oo,t as Lo,q as Fo,r as Io,N as Bo,p as $o,h as qo,i as Uo,P as Ko,b as jo,n as Jo,o as Ro,k as Wo,m as Ao,c as zo,d as Ho,U as Qo,j as Xo}from"./index.716265b6.js";import{R as ke,ak as W}from"../composables_use-crud_index.md.78467a23.js";import{i as A,u as xe}from"./uniqueId.3d52e0a8.js";import{n as K,w as oe,h as se,r as we,e as Ne,H as N,j as S,D as B,E as G,l as j,J as q,p as Te,u as x,i as $,C as _e,f as Ee,k as De,aG as Me}from"./framework.19abbf41.js";import{u as Ve}from"./theme.df9598b1.js";import"../app.0f09e193.js";import"../components_icon-select_index.md.445f9467.js";import"../components_index.md.5e554db0.js";import"../components_input-tree_index.md.585521e0.js";import"./index.daca2715.js";import"../components_v-text_index.md.ab7897dc.js";import"../composables_index.md.8102a498.js";import"../flow-design_index.md.267dc74d.js";import"../flow-pages_index.md.a8fddad4.js";import"../flow-pages_pages_flow-button_index.md.cff1c959.js";import"../flow-pages_pages_flow-manage_index.md.3fe7431a.js";import"../flow-pages_pages_flow-ops_index.md.740e87f3.js";import"../flow-pages_pages_flow-param_index.md.38d922b3.js";import"../flow-pages_pages_flow-template_index.md.ab1c2131.js";import"../flow-pages_pages_flow-workbench_index.md.3abb69f4.js";import"../flow-pages_pages_form-template_index.md.d2944a19.js";import"../flow-pages_pages_table-template_index.md.d5d619a4.js";import"../form-design_demo.md.6bd3bed6.js";import"../form-design_index.md.e65b4571.js";import"../guide_changelog.md.dd2417b7.js";import"../guide_start.md.63241896.js";import"../index.md.10a29696.js";import"../plugins_avue-patch_index.md.1b8bd366.js";import"../plugins_compatible-tips_index.md.307a5d4b.js";import"../plugins_env-dts_index.md.d151c965.js";import"../plugins_index.md.06e5bca9.js";import"../plugins_load-proxy_index.md.b9462e3e.js";import"../plugins_setup-extend_index.md.cf4dc835.js";import"../plugins_uni-ui-patch_index.md.e37cddfe.js";import"../plugins_uview-patch_index.md.439d9481.js";import"../types_avue_index.md.d294f23a.js";import"../types_index.md.b2ecc5b3.js";import"../utils_date_dateFormat.md.d75b5beb.js";import"../utils_date_durationFormat.md.3452ef38.js";import"../utils_emitter_mittAsync.md.c888c2ea.js";import"../utils_index.md.7db024e0.js";import"../utils_math_index.md.dfd5c6ea.js";import"../utils_object_filterObj.md.f0dc97c3.js";import"../utils_object_filterObjDeep.md.ff4b0903.js";import"../utils_object_getDataType.md.1d2816c5.js";import"../utils_string_deserialize.md.6296f7ed.js";import"../utils_string_serialize.md.547ef93e.js";import"../utils_string_uuid.md.e68bfa8c.js";import"../utils_tool_awaitTo.md.93c39e8e.js";import"../utils_tool_enumToDic.md.cff2a41a.js";import"../utils_tool_sleep.md.76753705.js";import"../utils_tree_buildTree.md.22d96cae.js";import"../utils_tree_filterTree.md.370e7afb.js";import"../utils_tree_findTree.md.f313e2c8.js";import"../utils_tree_flatTree.md.d34a1d9c.js";import"../utils_tree_treeMap.md.334d787b.js";const ae={rect:{radius:5,stroke:"black"},circle:{r:18,stroke:"black"},polygon:{stroke:"black"},polyline:{stroke:"black",hoverStroke:"black",selectedStroke:"black"},edgeText:{background:{fill:"white",height:14,stroke:"transparent",radius:3}},nodeText:{}},Pe=[{label:"开始",value:"start"},{label:"任务",value:"task"},{label:"结束",value:"end"}],Ce=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],Se=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],oo=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:Pe},{label:"类型",prop:"eventType",type:"select",dicData:Ce},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:Se},{label:"值",prop:"fieldValue"}]}}]}}],Ge=[{label:"创建",value:"create"},{label:"指派",value:"assignment"},{label:"完成",value:"complete"},{label:"删除",value:"delete"},{label:"更新",value:"update"},{label:"超时",value:"timeout"}],Oe=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],Le=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],ao=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:Ge},{label:"类型",prop:"eventType",type:"select",dicData:Oe},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:Le},{label:"值",prop:"fieldValue"}]}}]}}],no=[{label:"",labelWidth:0,prop:"timeLimit",type:"dynamic",children:{column:[{label:"名称",prop:"name"},{label:"最小值",prop:"min",type:"number"},{label:"最大值",prop:"max",type:"number"}]},value:[]}];function ne(n,e){return n.map(o=>{const a=e.find(c=>c.buttonKey===o.buttonKey),{name:s,buttonKey:l,display:r,approval:p}=o;return{name:s,buttonKey:l,display:r,approval:p,...a}})}function J(n,e){return n.map(o=>{var h,b;const a=e.find(m=>m.prop===o.prop),{label:s,prop:l,display:r=!0,disabled:p=!1,detail:i=!1,readonly:c=!1,rules:d}=o,y=(d==null?void 0:d.some(m=>m.required))??!1,f={label:s,prop:l,display:r,disabled:p,detail:i,readonly:c,required:y,...a};return o.type==="dynamic"&&((b=(h=o.children)==null?void 0:h.column)!=null&&b.length)&&(f.children=J(o.children.column,(a==null?void 0:a.children)??[])),f})}function Fe({lf:n,graphData:e,elementData:o,formData:a,formLoading:s,formOption:l,formOptions:r,editorVisible:p,dataOptions:i,formRef:c,formDefaults:d}){var h,b,m,g,D,M,V,P,T;async function y({data:t,isForce:u}={data:{},isForce:!1}){var k,w,_,O,L,F,I;const v=(k=n.value)==null?void 0:k.graphModel.nodes.find(U=>U.type==="process");!t&&(v!=null&&v.id)&&(t=(w=n.value)==null?void 0:w.getNodeDataById(v.id)),!((t==null?void 0:t.id)===((_=o.value)==null?void 0:_.id)&&(t==null?void 0:t.type)===((O=o.value)==null?void 0:O.type)&&!u)&&(t.type!=="process"&&((L=n.value)==null||L.selectElementById(t.id)),s.value=!0,await K(),o.value=t,l.value={menuBtn:!1,span:24,labelPosition:"left",group:((F=r.value)==null?void 0:F[t.type])??de},a.value={...t.properties,id:t.id,name:((I=t.text)==null?void 0:I.value)||""},s.value=!1,await K(),f())}async function f(){var O,L,F,I,U,z,H;const{formPropertyList:t,buttonList:u,fieldsDic:v,flowButtonDisplayDic:k,flowButtonApprovalDic:w}=i.value??{},_=C=>{var Q,X;return(X=(Q=l.value)==null?void 0:Q.group)==null?void 0:X.some(re=>{var Y;return(Y=re.column)==null?void 0:Y.some(ce=>ce.prop===C)})};_("button")&&(a.value.button=ne(u||[],((O=a.value)==null?void 0:O.button)||[]),(I=(F=(L=d.value)==null?void 0:L.button.children)==null?void 0:F.column)==null||I.forEach(C=>{C.prop==="display"&&(C.dicData=k),C.prop==="approval"&&(C.dicData=w)})),_("formProperty")&&(a.value.formProperty=J(t||[],((U=a.value)==null?void 0:U.formProperty)||[])),_("priority")&&((z=c.value)==null||z.updateDic("priority",v)),_("formTitle")&&((H=c.value)==null||H.updateDic("formTitle",v))}(h=n.value)==null||h.on("element:click",y),(b=n.value)==null||b.on("blank:click",y),(m=n.value)==null||m.on("node:add",y),(g=n.value)==null||g.on("node:dnd-add",y),(D=n.value)==null||D.on("node:delete",()=>y()),(M=n.value)==null||M.on("history:change",()=>{var t;e.value=(t=n.value)==null?void 0:t.getGraphData()}),(V=n.value)==null||V.on("custom:edit-click",()=>{p.value=!0}),(P=n.value)==null||P.on("custom:reset-form-property",()=>{var t,u;(u=(t=e.value)==null?void 0:t.flowElementList)==null||u.forEach(v=>{var k,w;(k=v.properties)!=null&&k.formProperty&&(v.properties.formProperty=J(((w=i.value)==null?void 0:w.formPropertyList)||[],[]))}),e.value={...e.value}}),(T=n.value)==null||T.on("custom:reset-button",()=>{var t,u;(u=(t=e.value)==null?void 0:t.flowElementList)==null||u.forEach(v=>{var k,w;(k=v.properties)!=null&&k.button&&(v.properties.button=ne(((w=i.value)==null?void 0:w.buttonList)||[],[]))}),e.value={...e.value}})}class Ie extends ye{constructor({lf:e}){super({lf:e}),[{key:"clear",iconClass:"lf-control-clear",title:"清空",text:"清空",onClick:()=>e.clearData()},{key:"edit",iconClass:"lf-control-edit",title:"编辑",text:"编辑",onClick:()=>e.emit("custom:edit-click",{})},{key:"mini-map",iconClass:"lf-control-mini-map",title:"导航",text:"导航",onClick:()=>{const{isShow:a,show:s,hide:l}=e.extension.miniMap??{};a?l():s()}},{key:"reset",iconClass:"lf-control-reset",title:"重置",text:"重置",onClick:()=>{ke.confirm("选择重置的配置","提示",{confirmButtonText:"重置表单配置",cancelButtonText:"重置按钮配置"}).then(()=>{e.emit("custom:reset-form-property",{})}).catch(()=>{e.emit("custom:reset-button",{})})}}].forEach(a=>this.addItem(a))}}class so{}class Be extends ve{constructor({lf:e}){super({lf:e});const o={text:"复制",icon:!0,className:"lf-menu-copy",callback:t=>e.cloneNode(t.id)},a={text:"删除",icon:!0,className:"lf-menu-delete",callback:t=>{e.deleteNode(t.id),e.deleteEdge(t.id)}},s={text:"编辑文本",icon:!0,className:"lf-menu-edit",callback:t=>e.graphModel.editText(t.id)},l={text:"删除文本",icon:!0,className:"lf-menu-delete",callback:t=>e.updateText(t.id,"")},r={text:"框选",icon:!0,className:"lf-menu-select",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},p={text:"清空",icon:!0,className:"lf-menu-clear",callback:()=>e.clearData()},i={text:"",icon:!0,className:"lf-menu-back",callback:t=>this.changeMenuList(t,T.nodeMenu)},c={text:"添加",icon:!0,className:"lf-menu-add",callback:t=>{let u=[];switch(t.type){case"startEvent":case"userTask":case"exclusiveGateway":case"parallelGateway":u=[i,d,y,h,b,f,m];break;case"endEvent":case"sequenceFlow":case"group":case"serviceTask":u=[i,m];break;default:u=[i]}this.changeMenuList(t,u)}},d={text:"用户任务",icon:!0,className:"lf-menu-user-task",callback:t=>this.addNode(t,{type:"userTask",x:t.x+200,y:t.y})},y={text:"服务任务",icon:!0,className:"lf-menu-service-task",callback:t=>this.addNode(t,{type:"serviceTask",x:t.x+200,y:t.y})},f={text:"结束",icon:!0,className:"lf-menu-end-event",callback:t=>this.addNode(t,{type:"endEvent",x:t.x+150,y:t.y})},h={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:t=>this.addNode(t,{type:"exclusiveGateway",x:t.x+150,y:t.y})},b={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:t=>this.addNode(t,{type:"parallelGateway",x:t.x+150,y:t.y})},m={text:"注释",icon:!0,className:"lf-menu-note",callback:t=>this.addNode(t,{type:"note",x:t.x,y:t.y-150})},g={text:"切换类型",icon:!0,className:"lf-menu-switch",callback:t=>{let u=[];switch(t.type){case"exclusiveGateway":u=[i,V];break;case"parallelGateway":u=[i,P];break;case"startEvent":u=[i,M];break;case"endEvent":u=[i,D];break;default:u=[i]}this.changeMenuList(t,u)}},D={text:"开始",icon:!0,className:"lf-menu-start-event",callback:t=>this.changeNodeType(t,"startEvent")},M={text:"结束",icon:!0,className:"lf-menu-end-event",callback:t=>this.changeNodeType(t,"endEvent")},V={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:t=>this.changeNodeType(t,"parallelGateway")},P={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:t=>this.changeNodeType(t,"exclusiveGateway")},T={nodeMenu:[c,o,a,g,s,l],edgeMenu:[a,s,l],graphMenu:[r,p]};this.setMenuConfig(T)}changeMenuList(e,o){setTimeout(()=>{this.__currentData=e;const{left:a,top:s}=this.__menuDOM.style;this.showMenu(a,s,o)})}addNode(e,o){const a=this.lf.addNode(o),s=["serviceTask","note"].includes(o.type);this.lf.addEdge({type:s?"noteFlow":void 0,sourceNodeId:e.id,targetNodeId:a.id})}changeNodeType(e,o){this.lf.changeNodeType(e.id,o),Object.keys(e.properties||{}).forEach(a=>this.lf.deleteProperty(e.id,a)),this.lf.emit("element:click",{data:{...e,type:o,properties:{}}})}}class $e extends fe{constructor({lf:e}){super({lf:e}),this.setPatternItems([{label:"框选",icon:"https://api.iconify.design/bpmn/lasso-tool.svg?width=24&height=24",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},{type:"group",label:"子流程",icon:"https://api.iconify.design/bpmn/subprocess-expanded.svg?width=24&height=24"},{type:"startEvent",text:"开始",label:"开始节点",icon:"https://api.iconify.design/bpmn/start-event.svg?width=24&height=24"},{type:"endEvent",text:"结束",label:"结束节点",icon:"https://api.iconify.design/bpmn/end-event.svg?width=24&height=24"},{type:"userTask",label:"用户任务",icon:"https://api.iconify.design/bpmn/user-task.svg?width=24&height=24"},{type:"serviceTask",label:"服务任务",icon:"https://api.iconify.design/bpmn/service-task.svg?width=24&height=24"},{type:"exclusiveGateway",label:"互斥网关",icon:"https://api.iconify.design/bpmn/gateway-xor.svg?width=24&height=24"},{type:"parallelGateway",label:"并行网关",icon:"https://api.iconify.design/bpmn/gateway-parallel.svg?width=24&height=24"},{type:"note",label:"注释",icon:"https://api.iconify.design/bpmn/text-annotation.svg?width=24&height=24"}])}}const le={type:"process",key:"Process",properties:{}};function qe(n){const{id:e,type:o,x:a,y:s,properties:l,children:r,text:p}=n;return{incoming:[],outgoing:[],children:r,type:o,key:e,groupKey:l==null?void 0:l.groupKey,properties:{...l,name:A(p)?p:(p==null?void 0:p.value)??"",x:a,y:s,text:p}}}function Ue(n){const{id:e,type:o,sourceNodeId:a,targetNodeId:s,startPoint:l,endPoint:r,pointsList:p,properties:i,text:c}=n;return{incoming:[a],outgoing:[s],type:o,key:e,groupKey:i==null?void 0:i.groupKey,properties:{...i,name:A(c)?c:(c==null?void 0:c.value)??"",text:c,startPoint:l,endPoint:r,pointsList:p}}}function Ke(n){const{id:e,type:o,properties:a,text:s}=n;return{type:o,key:e,properties:{...a,name:A(s)?s:(s==null?void 0:s.value)??""}}}function je(n){const e=new Map,o={processData:le,flowElementList:[]};return n.nodes.forEach(a=>{var s;if(a.type==="process")o.processData=Ke(a);else{const l=qe(a);(s=o.flowElementList)==null||s.push(l),e.set(a.id,l)}}),n.edges.forEach(a=>{var p;const s=Ue(a);e.get(a.sourceNodeId).outgoing.push(s.key),e.get(a.targetNodeId).incoming.push(s.key),(p=o.flowElementList)==null||p.push(s)}),o}function Je(n){const{incoming:e,outgoing:o,properties:a,key:s,type:l}=n,{text:r,name:p,startPoint:i,endPoint:c,pointsList:d}=a??{},y={id:s,type:l,sourceNodeId:(e==null?void 0:e[0])??"",targetNodeId:(o==null?void 0:o[0])??"",text:r||p,startPoint:i,endPoint:c,pointsList:d,properties:{}},f=["startPoint","endPoint","pointsList","text"];return y.properties=W(a,f),y}function Re(n){const{properties:e,key:o,type:a,children:s}=n,{x:l,y:r,text:p,name:i}=e??{},c={id:o,type:a??"",x:l,y:r,text:p||i,children:s,properties:{}},d=["x","y","text"];return c.properties=W(e,d),c}function We(n){const{properties:e,key:o,type:a}=n,{name:s}=e??{},l={id:o,type:a??"",text:s,x:0,y:0},r=["x","y","text"];return l.properties=W(e,r),l}function Ae(n){const{flowElementList:e}=n,o=r=>["sequenceFlow","noteFlow"].includes(r),a=(e==null?void 0:e.filter(r=>!o(r.type)).map(Re))??[],s=(e==null?void 0:e.filter(r=>o(r.type)).map(Je))??[];return a.unshift(We(n.processData??le)),{nodes:a,edges:s}}class R{constructor({lf:e}){e.adapterIn=this.adapterIn,e.adapterOut=this.adapterOut}adapterOut(e){return je(e)}adapterIn(e){return Ae(e)}}E(R,"pluginName","turboAdapter");class ie{constructor({lf:e}){E(this,"lf");E(this,"container");E(this,"__tooltipDOM");E(this,"__tooltips",[]);this.__tooltipDOM=document.createElement("div"),this.__tooltipDOM.className="lf-tooltip",this.__tooltipDOM.style.position="absolute",this.__tooltipDOM.style.display="none",this.lf=e}render(e,o){this.container=o,o.appendChild(this.__tooltipDOM),e.on("node:mouseenter,edge:mouseenter",({data:a,e:s})=>{var c;const l=(c=this.__tooltips.find(d=>d.id===a.id))==null?void 0:c.content;if(!l)return;this.__tooltipDOM.innerHTML=l;const r=e.getPointByClient(s.x,s.y),{domOverlayPosition:{x:p,y:i}}=r;this.__tooltipDOM.style.top=`${i+10}px`,this.__tooltipDOM.style.left=`${p+10}px`,this.__tooltipDOM.style.display="block"}),e.on("node:mouseleave,edge:mouseleave",()=>{this.__tooltipDOM.style.display="none"})}setTooltips(e){this.__tooltips=e}}E(ie,"pluginName","tooltip");function ze({props:n,state:e}){const{lf:o,graphData:a}=e;function s(r){var p;o.value=new Z.LogicFlow({container:r,grid:{type:"dot",size:10},nodeTextDraggable:!0,edgeTextDraggable:!0,nodeTextEdit:!0,edgeTextEdit:!0,plugins:[Ie,$e,he,Be,be,ge,ee,te,R],edgeGenerator:(i,c)=>{if(["note","serviceTask"].includes(c.type))return"noteFlow"},...n.initOptions}),(p=o.value)==null||p.setTheme(ae),Fe(e),oe(a,i=>{var f,h,b;const c=JSON.stringify(i),d=JSON.stringify((f=o.value)==null?void 0:f.getGraphData());c!==d&&((h=o.value)==null||h.render(i),(b=o.value)==null||b.emit("element:click",{isForce:!0}))},{immediate:!0})}function l(r){var p;o.value=new Z.LogicFlow({container:r,grid:{type:"dot",size:10},isSilentMode:!0,plugins:[ee,te,R,ie],...n.initOptions}),(p=o.value)==null||p.setTheme(ae),oe(()=>[a.value,n.styles,n.tooltips],async()=>{var i,c,d,y;(i=o.value)==null||i.render(a.value),await K(),(c=n.styles)==null||c.forEach(({id:f,style:h})=>{var b,m;f&&((m=(b=o.value)==null?void 0:b.graphModel)==null||m.updateAttributes(f,{style:h}))}),(y=(d=o.value)==null?void 0:d.extension.tooltip)==null||y.setTooltips(n.tooltips??[])},{immediate:!0})}return{initViewer:l,initModeler:s}}const He=_e("span",null,"编辑JSON",-1),Qe=se({__name:"flow-editor",props:{modelValue:{},visible:{type:Boolean}},emits:["confirm"],setup(n,{emit:e}){const a=Ve(n),{modelValue:s,visible:l}=a,r=we("");function p(){const i=JSON.parse(r.value);s.value=i,e("confirm",i),l.value=!1}return Ne(()=>{r.value=JSON.stringify(s.value,null,2)}),(i,c)=>{const d=N("el-input"),y=N("el-button"),f=N("el-drawer");return S(),B(f,{modelValue:x(l),"onUpdate:modelValue":c[1]||(c[1]=h=>$(l)?l.value=h:null)},{header:G(()=>[He,j(i.$slots,"header")]),default:G(()=>[q(d,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=h=>r.value=h),class:"flow-editor__textarea",type:"textarea"},null,8,["modelValue"]),q(y,{class:"flow-editor__confirm-btn",type:"primary",onClick:p},{default:G(()=>[Te(" 确定 ")]),_:1})]),_:3},8,["modelValue"])}}}),Xe=["id"],lo=se({__name:"index",props:{lf:{},initOptions:{},modelValue:{},elementData:{},formOptions:{},formData:{},formOption:{},formDefaults:{},formWidth:{},dataOptions:{},type:{},styles:{},tooltips:{}},setup(n){const e=n,o=me(e),{lf:a,graphData:s,formRef:l,formData:r,formOption:p,formDefaults:i,formLoading:c,editorVisible:d,onUpdateFormData:y}=o,{initModeler:f,initViewer:h}=ze({props:e,state:o}),b=xe("logicflow-container");return Ee(()=>{const m=document.querySelector(`#${b}`);e.type==="viewer"?h(m):f(m)}),(m,g)=>{const D=N("el-main"),M=N("el-empty"),V=N("el-skeleton"),P=N("avue-form"),T=N("el-aside"),t=N("el-container");return m.type==="viewer"?(S(),De("div",{key:0,id:x(b),class:"lf-container"},null,8,Xe)):(S(),B(t,{key:1,class:"lf-container"},{default:G(()=>[q(D,{id:x(b),class:"lf-main"},null,8,["id"]),q(T,{width:m.formWidth,class:"lf-aside"},{default:G(()=>{var u,v;return[j(m.$slots,"form-top"),(v=(u=x(p))==null?void 0:u.group)!=null&&v.length?x(c)?(S(),B(V,{key:1})):(S(),B(P,{key:2,ref_key:"formRef",ref:l,modelValue:x(r),"onUpdate:modelValue":[g[0]||(g[0]=k=>$(r)?r.value=k:null),x(y)],defaults:x(i),"onUpdate:defaults":g[1]||(g[1]=k=>$(i)?i.value=k:null),option:x(p)},null,8,["modelValue","defaults","option","onUpdate:modelValue"])):(S(),B(M,{key:0,description:"选择元素以编辑数据"}))]}),_:3},8,["width"]),q(Qe,{modelValue:x(s),"onUpdate:modelValue":g[2]||(g[2]=u=>$(s)?s.value=u:null),visible:x(d),"onUpdate:visible":g[3]||(g[3]=u=>$(d)?d.value=u:null),onConfirm:g[4]||(g[4]=u=>{var v;return(v=x(a))==null?void 0:v.render(u)})},Me({_:2},[m.$slots["editor-header"]?{name:"header",fn:G(()=>[j(m.$slots,"editor-header")]),key:"0"}:void 0]),1032,["modelValue","visible"])]),_:3}))}}});export{ee as BpmnExtend,Ie as Control,so as Dagre,Po as EndEventModel,Co as EndEventView,So as ExclusiveGatewayModel,Go as ExclusiveGatewayView,lo as FlowDesign,co as FlowNodeSelect,te as Group,Oo as GroupModel,Lo as GroupView,Be as Menu,Fo as NoteFlowModel,Io as NoteFlowView,Bo as NoteModel,$o as NoteView,$e as Panel,qo as ParallelGatewayModel,Uo as ParallelGatewayView,Ko as ProcessModel,jo as ProcessView,Jo as SequenceFlowModel,Ro as SequenceFlowView,Wo as ServiceTaskModel,Ao as ServiceTaskView,zo as StartEventModel,Ho as StartEventView,ie as Tooltip,R as TurboAdapter,Qo as UserTaskModel,Xo as UserTaskView,po as assigneeColumn,uo as baseColumn,mo as buttonColumn,yo as circulateColumn,vo as defaultGraphData,de as defaultGroup,fo as defaultOptions,ae as defaultTheme,oo as executionListenerColumn,ho as formPropertyColumn,bo as gatewayColumn,go as injectionKey,ne as mergeButton,J as mergeFormProperty,ko as multiInstanceColumn,xo as noteColumn,wo as processColumn,No as propertyColumn,To as sequenceFlowColumn,_o as serialColumn,Eo as serviceTaskColumn,ao as taskListenerColumn,no as timeLimitColumn,Ae as toLogicflowData,je as toTurboData,ze as useInit,Do as useInjectState,Fe as useModelerListener,me as useProvideState,Mo as userTaskColumn};