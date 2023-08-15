import{z as D,l as Ne,v as Ce,x as ie,y as Me,h as A,E as be,q as Ve,s as Ie,B as Pe,C as G,ab as Z,g as L,D as Se,j as Be}from"./framework.f01dabf7.js";function te(e){return Ve()?(Ie(e),!0):!1}function re(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const a=()=>t(o);return te(a),{off:a}},off:t,trigger:o=>Promise.all(Array.from(e).map(a=>a(o)))}}function $(e){return typeof e=="function"?e():Ne(e)}const se=typeof window<"u",We=e=>typeof e<"u",Nt=(e,t,n)=>Math.min(n,Math.max(t,e)),H=()=>{};function Je(e,t){function n(...r){return new Promise((o,a)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(a)})}return n}const $e=e=>e();function Le(e,t={}){let n,r,o=H;const a=u=>{clearTimeout(u),o(),o=H};return u=>{const v=$(e),c=$(t.maxWait);return n&&a(n),v<=0||c!==void 0&&c<=0?(r&&(a(r),r=null),Promise.resolve(u())):new Promise((m,s)=>{o=t.rejectOnCancel?s:m,c&&!r&&(r=setTimeout(()=>{n&&a(n),r=null,m(u())},c)),n=setTimeout(()=>{r&&a(r),r=null,m(u())},v)})}}function Re(e=$e){const t=A(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...a)=>{t.value&&e(...a)};return{isActive:ie(t),pause:n,resume:r,eventFilter:o}}function ce(e,t=!1,n="Timeout"){return new Promise((r,o)=>{setTimeout(t?()=>o(n):r,e)})}function He(e,...t){return t.some(n=>n in e)}function Q(...e){if(e.length!==1)return Ce(...e);const t=e[0];return typeof t=="function"?ie(Me(()=>({get:t,set:H}))):A(t)}function ae(e,t=!1){function n(s,{flush:g="sync",deep:p=!1,timeout:_,throwOnTimeout:y}={}){let b=null;const h=[new Promise(l=>{b=D(e,w=>{s(w)!==t&&(b==null||b(),l(w))},{flush:g,deep:p,immediate:!0})})];return _!=null&&h.push(ce(_,y).then(()=>$(e)).finally(()=>b==null?void 0:b())),Promise.race(h)}function r(s,g){if(!Pe(s))return n(w=>w===s,g);const{flush:p="sync",deep:_=!1,timeout:y,throwOnTimeout:b}=g??{};let f=null;const l=[new Promise(w=>{f=D([e,s],([P,F])=>{t!==(P===F)&&(f==null||f(),w(P))},{flush:p,deep:_,immediate:!0})})];return y!=null&&l.push(ce(y,b).then(()=>$(e)).finally(()=>(f==null||f(),$(e)))),Promise.race(l)}function o(s){return n(g=>!!g,s)}function a(s){return r(null,s)}function i(s){return r(void 0,s)}function u(s){return n(Number.isNaN,s)}function v(s,g){return n(p=>{const _=Array.from(p);return _.includes(s)||_.includes($(s))},g)}function c(s){return m(1,s)}function m(s=1,g){let p=-1;return n(()=>(p+=1,p>=s),g)}return Array.isArray($(e))?{toMatch:n,toContains:v,changed:c,changedTimes:m,get not(){return ae(e,!t)}}:{toMatch:n,toBe:r,toBeTruthy:o,toBeNull:a,toBeNaN:u,toBeUndefined:i,changed:c,changedTimes:m,get not(){return ae(e,!t)}}}function Ue(e){return ae(e)}function ze(e,t,n={}){const{immediate:r=!0}=n,o=A(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function u(){o.value=!1,i()}function v(...c){i(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...c)},$(t))}return r&&(o.value=!0,se&&v()),te(u),{isPending:ie(o),start:v,stop:u}}var fe=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Ye=(e,t)=>{var n={};for(var r in e)Ke.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&fe)for(var r of fe(e))t.indexOf(r)<0&&Xe.call(e,r)&&(n[r]=e[r]);return n};function Ee(e,t,n={}){const r=n,{eventFilter:o=$e}=r,a=Ye(r,["eventFilter"]);return D(e,Je(o,t),a)}var qe=Object.defineProperty,Ge=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,pe=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ze=(e,t)=>{for(var n in t||(t={}))je.call(t,n)&&pe(e,n,t[n]);if(k)for(var n of k(t))xe.call(t,n)&&pe(e,n,t[n]);return e},ke=(e,t)=>Ge(e,Qe(t)),et=(e,t)=>{var n={};for(var r in e)je.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&k)for(var r of k(e))t.indexOf(r)<0&&xe.call(e,r)&&(n[r]=e[r]);return n};function Ct(e,t,n={}){const r=n,{debounce:o=0,maxWait:a=void 0}=r,i=et(r,["debounce","maxWait"]);return Ee(e,t,ke(Ze({},i),{eventFilter:Le(o,{maxWait:a})}))}function Mt(e,t,n){const r=D(e,(...o)=>(be(()=>r()),t(...o)),n)}var tt=Object.defineProperty,nt=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,de=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&de(e,n,t[n]);if(ee)for(var n of ee(t))Te.call(t,n)&&de(e,n,t[n]);return e},at=(e,t)=>nt(e,rt(t)),it=(e,t)=>{var n={};for(var r in e)Fe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ee)for(var r of ee(e))t.indexOf(r)<0&&Te.call(e,r)&&(n[r]=e[r]);return n};function Ae(e,t,n={}){const r=n,{eventFilter:o}=r,a=it(r,["eventFilter"]),{eventFilter:i,pause:u,resume:v,isActive:c}=Re(o);return{stop:Ee(e,t,at(ot({},a),{eventFilter:i})),pause:u,resume:v,isActive:c}}function De(e){var t;const n=$(e);return(t=n==null?void 0:n.$el)!=null?t:n}const B=se?window:void 0,st=se?window.document:void 0;function I(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=B):[t,n,r,o]=e,!t)return H;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],i=()=>{a.forEach(m=>m()),a.length=0},u=(m,s,g,p)=>(m.addEventListener(s,g,p),()=>m.removeEventListener(s,g,p)),v=D(()=>[De(t),$(o)],([m,s])=>{i(),m&&a.push(...n.flatMap(g=>r.map(p=>u(m,g,p,s))))},{immediate:!0,flush:"post"}),c=()=>{v(),i()};return te(c),c}function lt(){const e=A(!1);return Se()&&Be(()=>{e.value=!0}),e}function ut(e){const t=lt();return L(()=>(t.value,!!e()))}function ct(e){return JSON.parse(JSON.stringify(e))}const Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q="__vueuse_ssr_handlers__",ft=pt();function pt(){return q in Y||(Y[q]=Y[q]||{}),Y[q]}function dt(e,t){return ft[e]||t}function vt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ht=Object.defineProperty,ve=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,me=(e,t)=>{for(var n in t||(t={}))mt.call(t,n)&&he(e,n,t[n]);if(ve)for(var n of ve(t))yt.call(t,n)&&he(e,n,t[n]);return e};const wt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ye="vueuse-storage";function _t(e,t,n,r={}){var o;const{flush:a="pre",deep:i=!0,listenToStorageChanges:u=!0,writeDefaults:v=!0,mergeDefaults:c=!1,shallow:m,window:s=B,eventFilter:g,onError:p=O=>{console.error(O)}}=r,_=(m?G:A)(t);if(!n)try{n=dt("getDefaultStorage",()=>{var O;return(O=B)==null?void 0:O.localStorage})()}catch(O){p(O)}if(!n)return _;const y=$(t),b=vt(y),f=(o=r.serializer)!=null?o:wt[b],{pause:h,resume:l}=Ae(_,()=>w(_.value),{flush:a,deep:i,eventFilter:g});return s&&u&&(I(s,"storage",C),I(s,ye,F)),C(),_;function w(O){try{if(O==null)n.removeItem(e);else{const d=f.write(O),S=n.getItem(e);S!==d&&(n.setItem(e,d),s&&s.dispatchEvent(new CustomEvent(ye,{detail:{key:e,oldValue:S,newValue:d,storageArea:n}})))}}catch(d){p(d)}}function P(O){const d=O?O.newValue:n.getItem(e);if(d==null)return v&&y!==null&&n.setItem(e,f.write(y)),y;if(!O&&c){const S=f.read(d);return typeof c=="function"?c(S,y):b==="object"&&!Array.isArray(S)?me(me({},y),S):S}else return typeof d!="string"?d:f.read(d)}function F(O){C(O.detail)}function C(O){if(!(O&&O.storageArea!==n)){if(O&&O.key==null){_.value=y;return}if(!(O&&O.key!==e)){h();try{_.value=P(O)}catch(d){p(d)}finally{O?be(l):l()}}}}}var we=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,bt=(e,t)=>{var n={};for(var r in e)Ot.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&we)for(var r of we(e))t.indexOf(r)<0&&gt.call(e,r)&&(n[r]=e[r]);return n};function Pt(e,t,n={}){const r=n,{window:o=B}=r,a=bt(r,["window"]);let i;const u=ut(()=>o&&"MutationObserver"in o),v=()=>{i&&(i.disconnect(),i=void 0)},c=D(()=>De(e),s=>{v(),u.value&&o&&s&&(i=new MutationObserver(t),i.observe(s,a))},{immediate:!0}),m=()=>{v(),c()};return te(m),{isSupported:u,stop:m}}var St=Object.defineProperty,$t=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))jt.call(t,n)&&Oe(e,n,t[n]);if(_e)for(var n of _e(t))xt.call(t,n)&&Oe(e,n,t[n]);return e},z=(e,t)=>$t(e,Et(t));const Ft={json:"application/json",text:"text/plain"};function ge(e){return e&&He(e,"immediate","refetch","initialData","timeout","beforeFetch","afterFetch","onFetchError","fetch")}function oe(e){return typeof Headers<"u"&&e instanceof Headers?Object.fromEntries([...e.entries()]):e}function Vt(e,...t){var n;const r=typeof AbortController=="function";let o={},a={immediate:!0,refetch:!1,timeout:0};const i={method:"GET",type:"text",payload:void 0};t.length>0&&(ge(t[0])?a=x(x({},a),t[0]):o=t[0]),t.length>1&&ge(t[1])&&(a=x(x({},a),t[1]));const{fetch:u=(n=B)==null?void 0:n.fetch,initialData:v,timeout:c}=a,m=re(),s=re(),g=re(),p=A(!1),_=A(!1),y=A(!1),b=A(null),f=G(null),h=G(null),l=G(v||null),w=L(()=>r&&_.value);let P,F;const C=()=>{r&&(P==null||P.abort(),P=new AbortController,P.signal.onabort=()=>y.value=!0,o=z(x({},o),{signal:P.signal}))},O=E=>{_.value=E,p.value=!E};c&&(F=ze(C,c,{immediate:!1}));const d=async(E=!1)=>{var N;C(),O(!0),h.value=null,b.value=null,y.value=!1;const T={method:i.method,headers:{}};if(i.payload){const K=oe(T.headers);i.payloadType&&(K["Content-Type"]=(N=Ft[i.payloadType])!=null?N:i.payloadType);const X=$(i.payload);T.body=i.payloadType==="json"?JSON.stringify(X):X}let R=!1;const V={url:$(e),options:x(x({},T),o),cancel:()=>{R=!0}};if(a.beforeFetch&&Object.assign(V,await a.beforeFetch(V)),R||!u)return O(!1),Promise.resolve(null);let J=null;return F&&F.start(),new Promise((K,X)=>{var le;u(V.url,z(x(x({},T),V.options),{headers:x(x({},oe(T.headers)),oe((le=V.options)==null?void 0:le.headers))})).then(async j=>{if(f.value=j,b.value=j.status,J=await j[i.type](),!j.ok)throw l.value=v||null,new Error(j.statusText);return a.afterFetch&&({data:J}=await a.afterFetch({data:J,response:j})),l.value=J,m.trigger(j),K(j)}).catch(async j=>{let ue=j.message||j.name;return a.onFetchError&&({error:ue}=await a.onFetchError({data:J,error:j,response:f.value})),h.value=ue,s.trigger(j),E?X(j):K(null)}).finally(()=>{O(!1),F&&F.stop(),g.trigger(null)})})},S=Q(a.refetch);D([S,Q(e)],([E])=>E&&d(),{deep:!0});const M={isFinished:p,statusCode:b,response:f,error:h,data:l,isFetching:_,canAbort:w,aborted:y,abort:C,execute:d,onFetchResponse:m.on,onFetchError:s.on,onFetchFinally:g.on,get:W("GET"),put:W("PUT"),post:W("POST"),delete:W("DELETE"),patch:W("PATCH"),head:W("HEAD"),options:W("OPTIONS"),json:U("json"),text:U("text"),blob:U("blob"),arrayBuffer:U("arrayBuffer"),formData:U("formData")};function W(E){return(N,T)=>{if(!_.value){i.method=E,i.payload=N,i.payloadType=T,Pe(i.payload)&&D([S,Q(i.payload)],([V])=>V&&d(),{deep:!0});const R=$(i.payload);return!T&&R&&Object.getPrototypeOf(R)===Object.prototype&&!(R instanceof FormData)&&(i.payloadType="json"),z(x({},M),{then(V,J){return ne().then(V,J)}})}}}function ne(){return new Promise((E,N)=>{Ue(p).toBe(!0).then(()=>E(M)).catch(T=>N(T))})}function U(E){return()=>{if(!_.value)return i.type=E,z(x({},M),{then(N,T){return ne().then(N,T)}})}}return a.immediate&&Promise.resolve().then(()=>d()),z(x({},M),{then(E,N){return ne().then(E,N)}})}function It(e,t,n={}){const{window:r=B}=n;return _t(e,t,r==null?void 0:r.localStorage,n)}function Bt(e,t={}){const{threshold:n=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:a,passive:i=!0,window:u=B}=t,v=Z({x:0,y:0}),c=Z({x:0,y:0}),m=L(()=>v.x-c.x),s=L(()=>v.y-c.y),{max:g,abs:p}=Math,_=L(()=>g(p(m.value),p(s.value))>=n),y=A(!1),b=L(()=>_.value?p(m.value)>p(s.value)?m.value>0?"left":"right":s.value>0?"up":"down":"none"),f=d=>[d.touches[0].clientX,d.touches[0].clientY],h=(d,S)=>{v.x=d,v.y=S},l=(d,S)=>{c.x=d,c.y=S};let w;const P=Tt(u==null?void 0:u.document);i?w=P?{passive:!0}:{capture:!1}:w=P?{passive:!1,capture:!0}:{capture:!0};const F=d=>{y.value&&(o==null||o(d,b.value)),y.value=!1},C=[I(e,"touchstart",d=>{if(d.touches.length!==1)return;w.capture&&!w.passive&&d.preventDefault();const[S,M]=f(d);h(S,M),l(S,M),a==null||a(d)},w),I(e,"touchmove",d=>{if(d.touches.length!==1)return;const[S,M]=f(d);l(S,M),!y.value&&_.value&&(y.value=!0),y.value&&(r==null||r(d))},w),I(e,"touchend",F,w),I(e,"touchcancel",F,w)];return{isPassiveEventSupported:P,isSwiping:y,direction:b,coordsStart:v,coordsEnd:c,lengthX:m,lengthY:s,stop:()=>C.forEach(d=>d())}}function Tt(e){if(!e)return!1;let t=!1;const n={get passive(){return t=!0,!1}};return e.addEventListener("x",H,n),e.removeEventListener("x",H),t}function Wt(e=null,t={}){var n,r;const{document:o=st}=t,a=Q((n=e??(o==null?void 0:o.title))!=null?n:null),i=e&&typeof e=="function";function u(v){if(!("titleTemplate"in t))return v;const c=t.titleTemplate||"%s";return typeof c=="function"?c(v):$(c).replace(/%s/g,v)}return D(a,(v,c)=>{v!==c&&o&&(o.title=u(typeof v=="string"?v:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&o&&!i&&Pt((r=o.head)==null?void 0:r.querySelector("title"),()=>{o&&o.title!==a.value&&(a.value=u(o.title))},{childList:!0}),a}function Jt(e="history",t={}){const{initialValue:n={},removeNullishValues:r=!0,removeFalsyValues:o=!1,write:a=!0,window:i=B}=t;if(!i)return Z(n);const u=Z({});function v(){if(e==="history")return i.location.search||"";if(e==="hash"){const f=i.location.hash||"",h=f.indexOf("?");return h>0?f.slice(h):""}else return(i.location.hash||"").replace(/^#/,"")}function c(f){const h=f.toString();if(e==="history")return`${h?`?${h}`:""}${i.location.hash||""}`;if(e==="hash-params")return`${i.location.search||""}${h?`#${h}`:""}`;const l=i.location.hash||"#",w=l.indexOf("?");return w>0?`${l.slice(0,w)}${h?`?${h}`:""}`:`${l}${h?`?${h}`:""}`}function m(){return new URLSearchParams(v())}function s(f){const h=new Set(Object.keys(u));for(const l of f.keys()){const w=f.getAll(l);u[l]=w.length>1?w:f.get(l)||"",h.delete(l)}Array.from(h).forEach(l=>delete u[l])}const{pause:g,resume:p}=Ae(u,()=>{const f=new URLSearchParams("");Object.keys(u).forEach(h=>{const l=u[h];Array.isArray(l)?l.forEach(w=>f.append(h,w)):r&&l==null||o&&!l?f.delete(h):f.set(h,l)}),_(f)},{deep:!0});function _(f,h){g(),h&&s(f),i.history.replaceState(i.history.state,i.document.title,i.location.pathname+c(f)),p()}function y(){a&&_(m(),!0)}I(i,"popstate",y,!1),e!=="history"&&I(i,"hashchange",y,!1);const b=m();return b.keys().next().value?s(b):Object.assign(u,n),u}function At(e,t,n,r={}){var o,a,i;const{clone:u=!1,passive:v=!1,eventName:c,deep:m=!1,defaultValue:s,shouldEmit:g}=r,p=Se(),_=n||(p==null?void 0:p.emit)||((o=p==null?void 0:p.$emit)==null?void 0:o.bind(p))||((i=(a=p==null?void 0:p.proxy)==null?void 0:a.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let y=c;t||(t="modelValue"),y=c||y||`update:${t.toString()}`;const b=l=>u?typeof u=="function"?u(l):ct(l):l,f=()=>We(e[t])?b(e[t]):s,h=l=>{g?g(l)&&_(y,l):_(y,l)};if(v){const l=f(),w=A(l);return D(()=>e[t],P=>w.value=b(P)),D(w,P=>{(P!==e[t]||m)&&h(P)},{deep:m}),w}else return L({get(){return f()},set(l){h(l)}})}function Lt(e,t,n={}){const r={};for(const o in e)r[o]=At(e,o,t,n);return r}export{Lt as a,Jt as b,Wt as c,It as d,Bt as e,Nt as f,Mt as g,Vt as h,At as i,_t as u,Ct as w};