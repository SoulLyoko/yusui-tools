import{d as q}from"./chunks/data.4cb21f02.js";import{f,t as I,D as F,h as C,A as v,B as y,G as m,u as w,r as A,S as U,R as j,c as N,b as W,_ as G,i as R,z as l,k as e,O as L}from"./chunks/framework.58691f2b.js";import{d as O}from"./chunks/theme.79d710c4.js";const $=[{label:"",labelWidth:0,prop:"assignee",type:"dynamic",children:{rowKey:"type",addBtn:!0,column:[{label:"类型",prop:"type",type:"select",width:120,dicData:[{label:"用户",value:"user"},{label:"部门",value:"dept"},{label:"角色",value:"role"},{label:"岗位",value:"post"},{label:"指定节点",value:"userTask"},{label:"自定义",value:"custom"}]},{label:"值",prop:"value"}]},value:[]}],i=[{label:"节点id",prop:"id",readonly:!0},{label:"节点名称",prop:"name"},{label:"节点描述",prop:"desc"}],x=f({__name:"flow-text",setup(t){return(a,s)=>I(a.$attrs.modelValue)}}),K=[{label:"",labelWidth:0,prop:"button",value:[],type:"dynamic",children:{addBtn:!1,delBtn:!1,column:[{prop:"_index",hide:!0},{label:"按钮名",prop:"name",width:100,component:x},{label:"按钮值",prop:"buttonKey",width:100,component:x},{label:"显示条件",prop:"display",type:"select",dataType:"string",multiple:!0},{label:"审批窗口",prop:"approval",type:"select",dataType:"string",multiple:!0}]}}],z=f({__name:"flow-form-property",props:{modelValue:null},setup(t){const a=t,{modelValue:s}=O(a),d={rowKey:"prop",menu:!1,defaultExpandAll:!0,addBtn:!1,refreshBtn:!1,columnBtn:!1,column:[{label:"字段",prop:"label"},{label:"属性",prop:"prop"},{label:"显示",prop:"display",width:40},{label:"禁用",prop:"disabled",width:40},{label:"详情",prop:"detail",width:40},{label:"只读",prop:"readonly",width:40},{label:"必填",prop:"required",width:40}]};return(r,c)=>{const n=F("el-checkbox"),_=F("avue-crud");return C(),v(_,{data:w(s)||[],option:d},{display:y(({row:o})=>[m(n,{modelValue:o.display,"onUpdate:modelValue":p=>o.display=p},null,8,["modelValue","onUpdate:modelValue"])]),readonly:y(({row:o})=>[m(n,{modelValue:o.readonly,"onUpdate:modelValue":p=>o.readonly=p},null,8,["modelValue","onUpdate:modelValue"])]),disabled:y(({row:o})=>[m(n,{modelValue:o.disabled,"onUpdate:modelValue":p=>o.disabled=p},null,8,["modelValue","onUpdate:modelValue"])]),detail:y(({row:o})=>[m(n,{modelValue:o.detail,"onUpdate:modelValue":p=>o.detail=p},null,8,["modelValue","onUpdate:modelValue"])]),required:y(({row:o})=>[m(n,{modelValue:o.required,"onUpdate:modelValue":p=>o.required=p},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["data"])}}}),h=[{label:"",labelWidth:0,prop:"formProperty",component:z,type:"dynamic",value:[]}],J=[{label:"网关类型",prop:"inout",type:"radio",button:!0,value:"in",dicData:[{label:"进",value:"in"},{label:"出",value:"out"}]},{label:"完成条件",prop:"completionCondition",type:"slider",showInput:!0,showInputControls:!1,labelPosition:"top",step:.01,max:1,value:0,labelTip:"任务完成的百分比，如2人接收，需同时完成才往下进行时=100%，只需1人完成时=50%",span:23,offset:1}],k=[{label:"多实例类型",prop:"multiInstanceType",tip:"选择后节点变更为多人任务",type:"select",dicData:[{label:"并行审批",value:"parallel",desc:"同时接收审批"},{label:"顺序审批",value:"sequential",desc:"按顺序审批"}]},{label:"完成条件",prop:"completionCondition",type:"slider",showInput:!0,showInputControls:!1,labelPosition:"top",step:.01,max:1,value:0,labelTip:"任务完成的百分比，如2人接收，需同时完成才往下进行时=100%，只需1人完成时=50%",span:23,offset:1},{label:"回收任务",prop:"isRecall",type:"switch",value:!1,labelTip:"满足完成条件时，该节点未审批任务是否回收，回收的任务仅保留记录，对应人员无需再办理"}],H=[{label:"节点id",prop:"id",readonly:!0},{label:"节点描述",prop:"name",type:"textarea"}],P=Symbol("modelerState");function Fl(t){const a=O(t,void 0,{passive:!0}),{lf:s,modelValue:d,elementData:r,formOptions:c,formData:n,formOption:_,formDefaults:o}=a,p=A(!1),S=A(!1);function M(D){var V,T,E;const b=(V=r.value)==null?void 0:V.id;b&&((T=s.value)==null||T.setProperties(b,D)),b&&((E=s.value)==null||E.updateText(b,D.name))}const g={lf:s,graphData:d,elementData:r,formData:n,formDefaults:o,formLoading:p,formOption:_,formOptions:c,editorVisible:S,onUpdateFormData:M,formOptionFormat:t.formOptionFormat??(D=>D),formDataFormat:t.formDataFormat??(D=>D)};return U(P,g),g}function Q(){return j(P)}const B=f({__name:"flow-node-select",props:{filterType:null,dic:null},setup(t){const a=t,{lf:s}=Q(),d=N(()=>{var r;return(r=s.value)==null?void 0:r.graphModel.nodes.filter(c=>a.filterType?a.filterType.includes(c.type):!0).map(c=>({label:c.text.value,value:c.id}))});return(r,c)=>{const n=F("avue-select");return C(),v(n,{dic:w(d)},null,8,["dic"])}}}),X=[{label:"跳过第一节点",prop:"skipFirstNode",type:"switch",labelWidth:100,value:!0},{label:"默认驳回节点",prop:"rollbackNode",type:"select",labelWidth:100,component:B,params:{filterType:"userTask"}},{label:"优先级字段",prop:"priority",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0},{label:"表单标题",prop:"formTitle",separator:"-",type:"select",dataType:"string",multiple:!0,filterable:!0,allowCreate:!0,defaultFirstOption:!0},{label:"标题分隔符",prop:"formTitleSeparator",value:"-",control(t){return{formTitle:{separator:t}}}}],u=[{label:"",labelWidth:0,prop:"property",type:"dynamic",children:{column:[{label:"属性名",prop:"name"},{label:"属性值",prop:"value",type:"textarea",minRows:1}]},value:[]}],Y=[{label:"条件表达式",prop:"conditionsequenceflow"},{label:"是否为默认分支",prop:"defaultConditions",labelWidth:120,type:"switch",value:!1}],Z=[{label:"",labelWidth:0,prop:"serial",component:"avue-form",option:{menuBtn:!1,span:24,column:[{label:"名称",prop:"name"},{label:"前缀",prop:"prefix"},{label:"日期格式",prop:"dateFormat"},{label:"后缀位数",prop:"suffixLength"},{label:"初始数值",prop:"startSequence"},{label:"连接符",prop:"connector"},{label:"重置周期",prop:"cycle",type:"select",dicData:[{label:"不重置",value:"none"},{label:"按天重置",value:"day"},{label:"按周重置",value:"week"},{label:"按月重置",value:"month"},{label:"按年重置",value:"year"}]}]}}],ll=[{label:"类",prop:"className"},{label:"异步",prop:"isAsync",type:"switch",value:!1}],el=[{label:"驳回节点",prop:"rollbackNode",type:"select",component:B,params:{filterType:"userTask"}},{label:"重新提交后回到驳回人",prop:"backToRejecter",type:"switch",value:!1}],bl=[{label:"基本配置",prop:"base",column:i}],ol={startEvent:[{label:"基本配置",prop:"base",column:i},{label:"表单配置",prop:"formProperty",collapse:!1,column:h},{label:"扩展属性",prop:"property",collapse:!1,column:u}],endEvent:[{label:"基本配置",prop:"base",column:i},{label:"表单配置",prop:"formProperty",collapse:!1,column:h},{label:"扩展属性",prop:"property",collapse:!1,column:u}],userTask:[{label:"基本配置",prop:"base",column:[...i,...el]},{label:"人员配置",prop:"assignee",collapse:!0,column:$},{label:"多实例配置",prop:"multiInstance",collapse:!1,column:k},{label:"按钮配置",prop:"button",collapse:!1,column:K},{label:"表单配置",prop:"formProperty",collapse:!1,column:h},{label:"扩展属性",prop:"property",collapse:!1,column:u}],serviceTask:[{label:"基本配置",prop:"base",column:i},{label:"服务配置",prop:"service",collapse:!0,column:ll},{label:"扩展属性",prop:"property",collapse:!1,column:u}],sequenceFlow:[{label:"基本配置",prop:"base",column:i},{label:"条件配置",prop:"sequenceFlow",collapse:!0,column:Y},{label:"扩展属性",prop:"property",collapse:!1,column:u}],parallelGateway:[{label:"基本配置",prop:"base",column:i},{label:"网关配置",prop:"base",column:J}],process:[{label:"流程配置",prop:"base",column:X},{label:"流水号配置",prop:"serial",collapse:!0,column:Z},{label:"扩展属性",prop:"property",collapse:!1,column:u}],group:[{label:"基本配置",prop:"base",column:i},{label:"多实例配置",prop:"multiInstance",collapse:!1,column:k},{label:"扩展属性",prop:"property",collapse:!1,column:u}],note:[{label:"基本配置",prop:"base",column:H}]},al=f({__name:"demo",setup(t){const a=A(q());W(()=>{console.log("🚀 ~ file: demo.vue:14 ~ graphData",a)});const s=ol;return(d,r)=>{const c=F("FlowModeler");return C(),v(c,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n),"form-options":w(s),class:"demo","form-width":"30%"},null,8,["modelValue","form-options"])}}});const tl=G(al,[["__scopeId","data-v-9480b07f"]]),sl=l("h1",{id:"flowmodeler",tabindex:"-1"},[e("FlowModeler "),l("a",{class:"header-anchor",href:"#flowmodeler","aria-label":'Permalink to "FlowModeler"'},"​")],-1),nl=l("p",null,"FlowModeler",-1),pl=l("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),rl=l("div",{class:"language-vue"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"ref"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"watchEffect"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"vue"),l("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"defaultGraphData"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"../constants"),l("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"defaultOptions"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"../options"),l("span",{style:{color:"#89DDFF"}},"'")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," graphData "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"ref"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#82AAFF"}},"defaultGraphData"),l("span",{style:{color:"#A6ACCD"}},"())")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"watchEffect"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#A6ACCD"}},"console"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"log"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"🚀 ~ file: demo.vue:14 ~ graphData"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"graphData"),l("span",{style:{color:"#F07178"}},")")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#A6ACCD"}},")")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," formOptions "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," defaultOptions")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"FlowModeler"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"v-model"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"graphData"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":form-options"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"formOptions"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"demo"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"form-width"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"30%"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," />")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"}),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"scss"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"scoped"),l("span",{style:{color:"#89DDFF"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#FFCB6B"}},"demo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"height"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"600px"),l("span",{style:{color:"#89DDFF"}},";")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),cl=L("",2),dl=JSON.parse('{"title":"FlowModeler","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"flow-design/flow-modeler/index.md"}'),il={name:"flow-design/flow-modeler/index.md"},ul=Object.assign(il,{setup(t){return(a,s)=>{const d=F("demo");return C(),R("div",null,[sl,nl,pl,m(d,null,{demo:y(()=>[m(tl)]),code:y(()=>[rl]),_:1}),cl])}}}),fl=Object.freeze(Object.defineProperty({__proto__:null,__pageData:dl,default:ul},Symbol.toStringTag,{value:"Module"}));export{fl as _,dl as __pageData,ol as a,$ as b,i as c,bl as d,ul as default,K as e,h as f,J as g,u as h,Z as i,ll as j,Fl as k,k as m,H as n,X as p,Y as s,el as u};
