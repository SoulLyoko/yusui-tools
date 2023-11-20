import{f as T,K as q,b as M,a as d,y as p,S as $,R as w,e as k,aa as A,L as x,d as m,B as o,Q as K,ai as Z,i as G,aj as re,O,F as le,k as h,N as ie,V as S,H as ue,x as ce,a4 as de,ak as H,al as W,am as I,a7 as R}from"./framework.1859beb2.js";import{m as pe,u as me,a as fe,E as ge}from"./typescript.861248ef.js";import{aS as L,aT as y,aU as ye,aN as ve,aJ as _,aV as X,aW as be,aX as Ce,i as J,aY as U,aZ as V,a_ as he,u as Te,a$ as Ne,b0 as Se}from"./index.ac4e533a.js";import{p as ke,u as Ee}from"./use-global-config.0f76ccf3.js";const Be=L({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:ye,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),z={},Qe=T({name:"ElConfigProvider",props:Be,setup(s,{slots:t}){q(()=>s.message,n=>{Object.assign(z,n??{})},{immediate:!0,deep:!0});const e=ke(s);return()=>M(t,"default",{config:e==null?void 0:e.value})}}),Oe=L({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),$e=["textContent"],xe=T({name:"ElBadge"}),Ie=T({...xe,props:Oe,setup(s,{expose:t}){const e=s,n=ve("badge"),a=d(()=>e.isDot?"":_(e.value)&&_(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(p(),$("div",{class:m(o(n).b())},[M(l.$slots,"default"),w(G,{name:`${o(n).namespace.value}-zoom-in-center`,persisted:""},{default:k(()=>[A(x("sup",{class:m([o(n).e("content"),o(n).em("content",l.type),o(n).is("fixed",!!l.$slots.default),o(n).is("dot",l.isDot)]),textContent:K(o(a))},null,10,$e),[[Z,!l.hidden&&(o(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var _e=X(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ze=be(_e),Q=["success","info","warning","error"],i=pe({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:J?document.body:void 0}),Me=L({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:Ce,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:Q,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),we={destroy:()=>!0},c=re([]),Le=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let n;return t>0&&(n=c[t-1]),{current:e,prev:n}},Pe=s=>{const{prev:t}=Le(s);return t?t.vm.exposed.bottom.value:0},De=(s,t)=>c.findIndex(n=>n.id===s)>0?20:t,je=["id"],Fe=["innerHTML"],He=T({name:"ElMessage"}),Re=T({...He,props:Me,emits:we,setup(s,{expose:t}){const e=s,{Close:n}=he,{ns:a,zIndex:l}=Ee("message"),{currentZIndex:u,nextZIndex:f}=l,g=O(),b=O(!1),C=O(0);let E;const ee=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),se=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&U[r]}}),P=d(()=>e.icon||U[e.type]||""),te=d(()=>Pe(e.id)),D=d(()=>De(e.id,e.offset)+te.value),ne=d(()=>C.value+D.value),oe=d(()=>({top:`${D.value}px`,zIndex:u.value}));function B(){e.duration!==0&&({stop:E}=Te(()=>{N()},e.duration))}function j(){E==null||E()}function N(){b.value=!1}function ae({code:r}){r===ge.esc&&N()}return le(()=>{B(),f(),b.value=!0}),q(()=>e.repeatNum,()=>{j(),B()}),me(document,"keydown",ae),fe(g,()=>{C.value=g.value.getBoundingClientRect().height}),t({visible:b,bottom:ne,close:N}),(r,F)=>(p(),h(G,{name:o(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:F[0]||(F[0]=Ze=>r.$emit("destroy")),persisted:""},{default:k(()=>[A(x("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([o(a).b(),{[o(a).m(r.type)]:r.type&&!r.icon},o(a).is("center",r.center),o(a).is("closable",r.showClose),r.customClass]),style:ie(o(oe)),role:"alert",onMouseenter:j,onMouseleave:B},[r.repeatNum>1?(p(),h(o(ze),{key:0,value:r.repeatNum,type:o(ee),class:m(o(a).e("badge"))},null,8,["value","type","class"])):S("v-if",!0),o(P)?(p(),h(o(V),{key:1,class:m([o(a).e("icon"),o(se)])},{default:k(()=>[(p(),h(ue(o(P))))]),_:1},8,["class"])):S("v-if",!0),M(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),$(ce,{key:1},[S(" Caution here, message could've been compromised, never use user's input as message "),x("p",{class:m(o(a).e("content")),innerHTML:r.message},null,10,Fe)],2112)):(p(),$("p",{key:0,class:m(o(a).e("content"))},K(r.message),3))]),r.showClose?(p(),h(o(V),{key:2,class:m(o(a).e("closeBtn")),onClick:de(N,["stop"])},{default:k(()=>[w(o(n))]),_:1},8,["class","onClick"])):S("v-if",!0)],46,je),[[Z,b.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Ue=X(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ve=1;const Y=s=>{const t=!s||H(s)||W(s)||I(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let n=document.querySelector(e.appendTo);Ne(n)||(n=document.body),e.appendTo=n}return e},qe=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Ae=({appendTo:s,...t},e)=>{const n=`message_${Ve++}`,a=t.onClose,l=document.createElement("div"),u={...t,id:n,onClose:()=>{a==null||a(),qe(C)},onDestroy:()=>{R(null,l)}},f=w(Ue,u,I(u.message)||W(u.message)?{default:I(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,R(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:n,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},v=(s={},t)=>{if(!J)return{close:()=>{}};if(_(z.max)&&c.length>=z.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const n=Ae(e,t);return c.push(n),n.handler};Q.forEach(s=>{v[s]=(t={},e)=>{const n=Y(t);return v({...n,type:s},e)}});function Ke(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ke;v._context=null;const Ye=Se(v,"$message");export{Qe as C,Ye as E,ze as a};