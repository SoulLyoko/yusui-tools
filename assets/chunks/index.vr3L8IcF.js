import"./index.o5MRxqVR.js";import{u as q}from"./index.uIvVZULY.js";import{o as J}from"./omit.pAQ7TWyz.js";import{o as Q,a as I,s as W}from"./snakeCase.a9RyInPp.js";import{y as X,ai as Y,a7 as Z,h as _,am as ee,g as ae}from"./framework.9dEYo5Bo.js";import{m as te}from"./merge.etFcUWJt.js";import{t as U,s as re}from"./index.kqOif1Uk.js";import{o as N}from"./omitBy.5Vl3Jw6n.js";import{i as T}from"./isNil.-q_uwI5T.js";import{c as G}from"./cloneDeep.r1x5-OIa.js";import{g as V}from"./get.ibBWnMyK.js";function se(t){return{all:t=t||new Map,on:function(r,s){var o=t.get(r);o?o.push(s):t.set(r,[s])},off:function(r,s){var o=t.get(r);o&&(s?o.splice(o.indexOf(s)>>>0,1):t.set(r,[]))},emit:function(r,s){var o=t.get(r);o&&o.slice().map(function(c){c(s)}),(o=t.get("*"))&&o.slice().map(function(c){c(r,s)})}}}function oe(t){const r=se(t);return r.emitAsync=async function(s,o){const c=this.all.get(s);if(c)for(const h of c)await h(o);const f=this.all.get("*");if(f)for(const h of f)await h(s,o)},r}function ne({crudState:t}){if(t.mockCache)try{const h=`mock-${t.mockCache}`,i=localStorage.getItem(h);t.mockData=i?JSON.parse(i):t.mockData,X(()=>t.mockData,()=>localStorage.setItem(h,JSON.stringify(t.mockData)),{immediate:!0,deep:!0})}catch(f){console.log(f)}function r(f){const{currKey:h,sizeKey:i}=t.crudOption,k=f[h],p=f[i],{descs:R,ascs:b}=f,B=J(f,[h,i,"descs","ascs"]),F=t.mockData.filter(L=>Object.entries(B).every(([S,K])=>typeof L[S]=="string"?L[S].includes(K):L[S]===K)),z=Q(F,R||b||void 0,R?"desc":b?"asc":void 0).filter((L,S)=>S>=(k-1)*p&&S<k*p);return Promise.resolve({code:200,msg:"操作成功",data:{records:z,total:F.length}})}function s(f){const{crudOption:{rowKey:h}}=t;return t.mockData.push({[h]:q(16,10),...f}),Promise.resolve({code:200,msg:"操作成功"})}function o(f){const{crudOption:{rowKey:h}}=t;return t.mockData=t.mockData.map(i=>i[h]===f[h]?f:i),Promise.resolve({code:200,msg:"操作成功"})}function c(f){const{crudOption:{rowKey:h}}=t;if(typeof f=="string"){const i=f.split(",");t.mockData=t.mockData.filter(k=>!i.includes(k[h]))}else t.mockData=t.mockData.filter(i=>f!==i[h]);return Promise.resolve({code:200,msg:"操作成功"})}return{getList:r,create:s,update:o,remove:c}}function ce(t){var h;const r=Y(te({crudOption:{rowKey:((h=t==null?void 0:t.tableOption)==null?void 0:h.rowKey)??"id",getList:i=>s(i),create:i=>o(i),update:i=>c(i),remove:i=>f(i),dataPath:"res.data.records",totalPath:"res.data.total",currKey:"current",sizeKey:"size",isPage:!0,isSort:!0,delConfirm:!0,clearSelection:!0,saveSuccessMsg:"保存成功",updateSuccessMsg:"保存成功",delSuccessMsg:"删除成功"},pageOption:{total:0,currentPage:1,pageSize:10},sortOption:{},tableLoading:!1,tableOption:{},tableData:[],dataSelections:[],searchForm:{},queryForm:{},formData:{},formType:"",defaults:{},mockData:[],mockCache:""},t)),{getList:s,create:o,update:c,remove:f}=ne({crudState:r});return r}function fe({crudRef:t,crudState:r,emitter:s,options:o}){const{proxy:c}=Z()??{},f=(a,n)=>n.includes("$"),h=a=>a==="",i=o.filterRow??(a=>N(a,I(T,f))),k=o.filterParams??(a=>N(a,I(T,h,f))),p=o.getDataList??(async()=>{var $,j;const{dataPath:a,totalPath:n,currKey:m,sizeKey:l,isPage:u,isSort:O,clearSelection:D}=r.crudOption,{currentPage:C,pageSize:w}=r.pageOption,y=u?{[m]:C,[l]:w}:{},g=O?r.sortOption:{},A=G({...r.searchForm,...y,...g,...r.queryForm}),[E]=await U(s.emitAsync("beforeGetList",A));if(E!==null)return;const{getList:H}=r.crudOption;if(H){r.tableLoading=!0,await re(100);try{const P=await H(k(A));console.log("getDataList ~ res",P),r.tableData=V({res:P},a,[]),r.pageOption.total=V({res:P},n,0),await s.emitAsync("afterGetList",P)}catch(P){console.error("getDataList ~ err",P),r.tableData=[],r.pageOption.total=0}finally{D&&((j=($=t==null?void 0:t.value)==null?void 0:$.selectClear)==null||j.call($)),r.tableLoading=!1}}}),R=o.handleSave??(async(a,n,m)=>{var y;const l=G({...r.formData,...a}),[u]=await U(s.emitAsync("beforeSave",l)),[O]=await U(s.emitAsync("beforeSubmit",l));if(u!==null||O!==null)return m==null?void 0:m();const{rowKey:D,create:C,saveSuccessMsg:w}=r.crudOption;if(!C)return m==null?void 0:m();delete l[D];try{const g=await C(i(l));return w&&((y=c==null?void 0:c.$message)==null||y.success(w)),await s.emitAsync("afterSave",g),await s.emitAsync("afterSubmit",g),n==null||n(),p()}catch(g){console.error("handleSave ~ err",g),m==null||m()}}),b=o.handleUpdate??(async(a,n,m,l)=>{var y;const u=G({...r.formData,...a}),[O]=await U(s.emitAsync("beforeUpdate",u)),[D]=await U(s.emitAsync("beforeSubmit",u));if(O!==null||D!==null)return l==null?void 0:l();const{update:C,updateSuccessMsg:w}=r.crudOption;if(!C)return l==null?void 0:l();try{const g=await C(i(u));return w&&((y=c==null?void 0:c.$message)==null||y.success(w)),await s.emitAsync("afterUpdate",g),await s.emitAsync("afterSubmit",g),m==null||m(),p()}catch(g){console.error("handleUpdate ~ err",g),l==null||l()}}),B=o.handleDel??(async a=>{var C,w;const n=G(a),[m]=await U(s.emitAsync("beforeDel",n));if(m!==null)return;const{rowKey:l,remove:u,delConfirm:O,delSuccessMsg:D}=r.crudOption;if(u){O&&await((C=c==null?void 0:c.$messageBox)==null?void 0:C.confirm("确认进行删除操作？","提示",{type:"warning"}));try{const y=await u(n[l]);return D&&((w=c==null?void 0:c.$message)==null||w.success(D)),await s.emitAsync("afterDel",y),p()}catch(y){console.error("handleDel ~ err",y)}}}),F=o.batchDel??(async()=>{var w,y,g;const a=G(r.dataSelections),[n]=await U(s.emitAsync("beforeBatchDel",a));if(n!==null)return;const{rowKey:m,remove:l,delConfirm:u,delSuccessMsg:O}=r.crudOption;if(!l)return;const D=a.length;if(!D)return(w=c==null?void 0:c.$message)==null?void 0:w.warning("请选择删除项");u&&await((y=c==null?void 0:c.$messageBox)==null?void 0:y.confirm(`确认删除所选的${D}条数据？`,"提示",{type:"warning"}));const C=a.map(A=>A[m]).join(",");try{const A=await l(C);return O&&((g=c==null?void 0:c.$message)==null||g.success(O)),await s.emitAsync("afterBatchDel",A),p()}catch(A){console.error("batchDel ~ err",A)}}),d=o.searchChange??(async(a,n)=>{r.pageOption.currentPage=1,Object.keys(r.searchForm).forEach(u=>{delete r.searchForm[u]}),Object.keys(a).forEach(u=>{r.searchForm[u]=a[u]});const[m]=await U(s.emitAsync("beforeSearch",r.searchForm));if(m!==null)return n==null?void 0:n();await p();const[l]=await U(s.emitAsync("afterSearch",r.searchForm));if(l!==null)return n==null?void 0:n();n==null||n()}),z=o.searchReset??(async()=>{Object.keys(r.searchForm).forEach(a=>{delete r.searchForm[a]}),await s.emitAsync("beforeSearchReset",r.searchForm),await p(),await s.emitAsync("afterSearchReset",r.searchForm)}),L=o.selectionChange??(a=>{r.dataSelections=a}),S=o.pageSizeChange??(a=>(r.pageOption.pageSize=a,p())),K=o.pageCurrentChange??(a=>(r.pageOption.currentPage=a,p())),M=o.sortChange??(({order:a,prop:n})=>(a&&n?r.sortOption={[a.replace("ending","s")]:W(n)}:r.sortOption={},p())),x=o.beforeOpen??(async(a,n)=>{r.formType=n,await s.emitAsync("beforeOpen",n),a(),await s.emitAsync("afterOpen",n)}),e=o.beforeClose??(async(a,n)=>{r.formType=n,await s.emitAsync("beforeClose",n),a(),await s.emitAsync("afterClose",n)});return{getDataList:p,handleSave:R,handleUpdate:b,handleDel:B,batchDel:F,searchChange:d,searchReset:z,selectionChange:L,pageSizeChange:S,pageCurrentChange:K,sortChange:M,beforeOpen:x,beforeClose:e}}function ie(){const t=oe();return{emitter:t,beforeGetList:e=>{t.on("beforeGetList",async(...a)=>await(e==null?void 0:e(...a)))},afterGetList:e=>{t.on("afterGetList",async(...a)=>await(e==null?void 0:e(...a)))},beforeSave:e=>{t.on("beforeSave",async(...a)=>await(e==null?void 0:e(...a)))},afterSave:e=>{t.on("afterSave",async(...a)=>await(e==null?void 0:e(...a)))},beforeUpdate:e=>{t.on("beforeUpdate",async(...a)=>await(e==null?void 0:e(...a)))},afterUpdate:e=>{t.on("afterUpdate",async(...a)=>await(e==null?void 0:e(...a)))},beforeSubmit:e=>{t.on("beforeSubmit",async(...a)=>await(e==null?void 0:e(...a)))},afterSubmit:e=>{t.on("afterSubmit",async(...a)=>await(e==null?void 0:e(...a)))},beforeDel:e=>{t.on("beforeDel",async(...a)=>await(e==null?void 0:e(...a)))},afterDel:e=>{t.on("afterDel",async(...a)=>await(e==null?void 0:e(...a)))},beforeBatchDel:e=>{t.on("beforeBatchDel",async(...a)=>await(e==null?void 0:e(...a)))},afterBatchDel:e=>{t.on("afterBatchDel",async(...a)=>await(e==null?void 0:e(...a)))},beforeSearch:e=>{t.on("beforeSearch",async()=>await(e==null?void 0:e()))},afterSearch:e=>{t.on("afterSearch",async()=>await(e==null?void 0:e()))},beforeSearchReset:e=>{t.on("beforeSearch",async()=>await(e==null?void 0:e()))},afterSearchReset:e=>{t.on("afterSearch",async()=>await(e==null?void 0:e()))},beforeOpen:e=>{t.on("beforeOpen",async(...a)=>await(e==null?void 0:e(...a)))},afterOpen:e=>{t.on("afterOpen",async(...a)=>await(e==null?void 0:e(...a)))},beforeClose:e=>{t.on("beforeClose",async(...a)=>await(e==null?void 0:e(...a)))},afterClose:e=>{t.on("afterClose",async(...a)=>await(e==null?void 0:e(...a)))}}}function Se(t){const r=_(),s=ce(t),o=ee(s),{emitter:c,beforeGetList:f,afterGetList:h,beforeSave:i,afterSave:k,beforeUpdate:p,afterUpdate:R,beforeSubmit:b,afterSubmit:B,beforeDel:F,afterDel:d,beforeBatchDel:z,afterBatchDel:L,beforeSearch:S,afterSearch:K,beforeSearchReset:M,afterSearchReset:x,beforeOpen:e,afterOpen:a,beforeClose:n,afterClose:m}=ie(),{getDataList:l,handleSave:u,handleUpdate:O,handleDel:D,batchDel:C,searchChange:w,searchReset:y,selectionChange:g,pageSizeChange:A,pageCurrentChange:E,sortChange:H,beforeOpen:$,beforeClose:j}=fe({crudRef:r,crudState:s,emitter:c,options:t}),P=ae(()=>({ref:v=>r.value=v,modelValue:s.formData,tableLoading:s.tableLoading,option:t.tableOption??{},data:s.tableData,page:s.pageOption,search:s.searchForm,defaults:s.defaults,"before-open":$,"before-close":j,onRowSave:u,onRowUpdate:O,onRowDel:D,onRefreshChange:l,onSelectionChange:g,onCurrentChange:E,onSizeChange:A,onSortChange:H,onSearchChange:w,onSearchReset:y,"onUpdate:search":v=>s.searchForm=v,"onUpdate:page":v=>s.pageOption=v,"onUpdate:modelValue":v=>s.formData=v,"onUpdate:defaults":v=>s.defaults=v}));return{crudRef:r,crudState:s,crudStateRefs:o,bindVal:P,getDataList:l,handleSave:u,handleUpdate:O,handleDel:D,batchDel:C,beforeGetList:f,afterGetList:h,beforeSave:i,afterSave:k,beforeUpdate:p,afterUpdate:R,beforeSubmit:b,afterSubmit:B,beforeDel:F,afterDel:d,beforeBatchDel:z,afterBatchDel:L,beforeSearch:S,afterSearch:K,beforeSearchReset:M,afterSearchReset:x,beforeOpen:e,afterOpen:a,beforeClose:n,afterClose:m}}export{oe as m,Se as u};
