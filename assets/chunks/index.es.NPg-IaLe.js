import{N as re,A as $,h as C,g as O,z as Y,y as z,G as j,a5 as oe}from"./framework.9dEYo5Bo.js";const ae={},ue=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),ie=()=>ae,I=e=>e,H=e=>Array.isArray(e),J=e=>e!==null&&typeof e=="object",X=e=>e instanceof Function,D=e=>e==null,Z=typeof window>"u",k=()=>{var e;return Z||D((e=window.document)===null||e===void 0?void 0:e.visibilityState)?!0:window.document.visibilityState==="visible"},se=()=>{var e,t;return(e=!Z&&((t=window.navigator)===null||t===void 0?void 0:t.onLine))!==null&&e!==void 0?e:!0},K=()=>new Promise(()=>{}),S=e=>oe(e)?e.value:e,le=e=>J(e)?Object.assign(H(e)?[]:{},e):e,W=new Map,ce=e=>D(e)?void 0:W.get(e),fe=(e,t,n)=>{const o=W.get(e);o!=null&&o.timer&&clearTimeout(o.timer);const a=setTimeout(()=>W.delete(e),t);W.set(e,{...n,timer:a})};function q(e,t,n){let o,a,s,l,r,u,i=0,m=!1,f=!1,T=!0;const d=!t&&t!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,J(n)&&(m=!!n.leading,f="maxWait"in n,s=f?Math.max(+n.maxWait||0,t):s,T="trailing"in n?!!n.trailing:T);function R(c){const A=o,y=a;return o=a=void 0,i=c,l=e.apply(y,A),l}function v(c,A){return d?(window.cancelAnimationFrame(r),window.requestAnimationFrame(c)):setTimeout(c,A)}function E(c){if(d)return window.cancelAnimationFrame(c);clearTimeout(c)}function g(c){return i=c,r=v(w,t),m?R(c):l}function p(c){const A=c-u,y=c-i,_=t-A;return f?Math.min(_,s-y):_}function h(c){const A=c-u,y=c-i;return u===void 0||A>=t||A<0||f&&y>=s}function w(){const c=Date.now();if(h(c))return b(c);r=v(w,p(c))}function b(c){return r=void 0,T&&o?R(c):(o=a=void 0,l)}function P(){r!==void 0&&E(r),i=0,o=u=a=r=void 0}function L(){return r===void 0?l:b(Date.now())}function N(){return r!==void 0}function x(){const c=Date.now(),A=h(c);for(var y=arguments.length,_=new Array(y),F=0;F<y;F++)_[F]=arguments[F];if(o=_,a=this,u=c,A){if(r===void 0)return g(u);if(f)return r=v(w,t),R(u)}return r===void 0&&(r=v(w,t)),l}return x.cancel=P,x.flush=L,x.pending=N,x}function de(e,t,n){let o=!0,a=!0;if(typeof e!="function")throw new TypeError("Expected a function");return J(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),q(e,t,{leading:o,trailing:a,maxWait:t})}var ve=I((e,t)=>{let{debounceInterval:n,debounceOptions:o,manual:a}=t;const s=C(!1),l=C(),r=O(()=>o),u=O(()=>S(n)),i=C(e.context.runAsync);return a||(s.value=!0),Y(m=>{D(u.value)||(l.value=q(f=>f(),u.value,r.value),e.context.runAsync=function(){for(var f=arguments.length,T=new Array(f),d=0;d<f;d++)T[d]=arguments[d];return new Promise((R,v)=>{s.value?(s.value=!1,i.value(...T).then(R).catch(v)):l.value(()=>{i.value(...T).then(R).catch(v)})})},m(()=>{var f;(f=l.value)===null||f===void 0||f.cancel(),e.context.runAsync=i.value}))}),{onCancel(){var m;(m=l.value)===null||m===void 0||m.cancel()}}}),me=I((e,t)=>{let{errorRetryCount:n=0,errorRetryInterval:o=0}=t;const a=C(),s=C(0),l=O(()=>S(n)),r=O(()=>S(o));let u=!1;const i=()=>{s.value=0},m=O(()=>{if(r.value)return r.value;const d=1e3,R=1,v=9,E=Math.floor(Math.random()*2**Math.min(s.value,v)+R);return d*E}),f=()=>{let d;const R=l.value===-1,v=s.value<l.value;return(R||v)&&(R||(s.value+=1),d=setTimeout(()=>{u=!0,e.context.refresh()},m.value)),()=>d&&clearTimeout(d)},T=()=>{a.value&&a.value()};return{onBefore(){u||i(),u=!1,T()},onSuccess(){i()},onError(){a.value=f()},onCancel(){i(),T()}}}),ge=I((e,t)=>{let{ready:n=C(!0),manual:o,defaultParams:a=[]}=t;return z(n,s=>{!o&&s&&e.context.run(...a)},{flush:"sync"}),{onBefore(){if(!(X(n)?n():n.value))return e.loading.value=!1,{isBreak:!0}}}}),he=I((e,t)=>{let{refreshDeps:n,refreshDepsAction:o,manual:a}=t;if(n===void 0||H(n)&&n.length===0)return{};const s=H(n)?n:[n];return z(s,()=>{o?o():!a&&e.context.refresh()}),{}}),pe=I((e,t)=>{let{throttleInterval:n,throttleOptions:o}=t;const a=C(),s=O(()=>S(n)),l=O(()=>o),r=C(e.context.runAsync);return Y(u=>{if(D(n))return{};a.value=de(i=>i(),s.value,l.value),e.context.runAsync=function(){for(var i=arguments.length,m=new Array(i),f=0;f<i;f++)m[f]=arguments[f];return new Promise((T,d)=>{a.value(()=>{r.value(...m).then(T).catch(d)})})},u(()=>{var i;(i=a.value)===null||i===void 0||i.cancel(),e.context.runAsync=r.value})}),{onCancel(){var u;(u=a.value)===null||u===void 0||u.cancel()}}});const Re=(e,t)=>n=>{Object.keys(n).forEach(o=>{e[o].value=n[o]}),t.forEach(o=>o(e))},we=(e,t)=>()=>{let n=t;for(let o=e.length;o-- >0;)n=e[o](n);return n()},Ee=(e,t,n)=>{var o,a;const{initialData:s,onSuccess:l,onError:r,onBefore:u,onAfter:i}=t,m=C((o=n==null?void 0:n.loading)!==null&&o!==void 0?o:!1),f=j((a=n==null?void 0:n.data)!==null&&a!==void 0?a:s),T=j(n==null?void 0:n.error),d=C(n==null?void 0:n.params),R=C([]),v=j("pending"),E={},g=Re({status:v,loading:m,data:f,error:T,params:d},[]),p=function(w){for(var b=arguments.length,P=new Array(b>1?b-1:0),L=1;L<b;L++)P[L-1]=arguments[L];if(w==="onQuery"){const N=R.value.map(x=>x.onQuery).filter(Boolean);return{servicePromise:we(N,P[0])()}}else{const N=R.value.map(x=>{var c;return(c=x[w])===null||c===void 0?void 0:c.call(x,...P)});return Object.assign({},...N)}},h=C(0);return E.runAsync=async function(){for(var w=arguments.length,b=new Array(w),P=0;P<w;P++)b[P]=arguments[P];g({loading:!0,params:b,status:"pending"}),h.value+=1;const L=h.value,{isBreak:N,breakResult:x=K()}=p("onBefore",b);if(N)return g({status:"settled"}),x;u==null||u(b);try{const c=()=>new Promise(_=>_(e(...d.value)));let{servicePromise:A}=p("onQuery",c);A||(A=c());const y=await A;return L!==h.value?K():(g({data:y,loading:!1,error:void 0,status:"settled"}),p("onSuccess",y,b),l==null||l(y,b),L===h.value&&p("onAfter",b,y,void 0),i==null||i(b),y)}catch(c){if(L!==h.value)return K();throw g({loading:!1,error:c,status:"settled"}),p("onError",c,b),r==null||r(c,b),L===h.value&&p("onAfter",b,void 0,c),i==null||i(b),c}},E.run=function(){E.runAsync(...arguments).catch(w=>{r||console.error(w)})},E.cancel=()=>{h.value+=1,g({loading:!1}),p("onCancel")},E.refresh=()=>{E.run(...d.value||[])},E.refreshAsync=()=>E.runAsync(...d.value||[]),E.mutate=w=>{const b=X(w)?w(f.value):w,P=le(b);g({data:P}),p("onMutate",P)},{status:v,loading:m,data:f,error:T,params:d,plugins:R,context:E}};function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const o=re(ue,{}),a={...ie(),...o,...t},{manual:s=!1,defaultParams:l=[]}=a,r=Ee(e,a);if(r.plugins.value=n.map(u=>u(r,a)),!s){const u=r.params.value||l;r.context.run(...u)}return $(()=>{r.context.cancel()}),{loading:r.loading,data:r.data,error:r.error,params:r.params,cancel:r.context.cancel,refresh:r.context.refresh,refreshAsync:r.context.refreshAsync,mutate:r.context.mutate,run:r.context.run,runAsync:r.context.runAsync}}const M=new Map,be=(e,t)=>{M.set(e,t),t.then(n=>(M.delete(e),n)).catch(()=>{M.delete(e)})},Ce=e=>M.get(e),B=new Map,Ae=(e,t)=>{B.has(e)&&B.get(e).forEach(n=>n(t))},ye=(e,t)=>(B.has(e)?B.get(e).push(t):B.set(e,[t]),()=>{const n=B.get(e).indexOf(t);B.get(e).splice(n,1)});var Pe=I((e,t)=>{let{cacheKey:n,cacheTime:o=6e5,staleTime:a=0,getCache:s,setCache:l}=t;if(!n)return{};const r=X(n)?n:()=>n,u=C(()=>{});let i;const m=g=>s?s(g):ce(g),f=(g,p,h)=>{l?l(g,h):fe(g,p,h),Ae(g,h.data)},T=g=>a===-1||g+a>new Date().getTime(),d=(g,p)=>Object.prototype.hasOwnProperty.call(g,p),R=g=>{const p=r(g);return ye(p,h=>{e.data.value=h})},v=r(),E=m(v);return E&&d(E,"data")&&(e.data.value=E.data,e.params.value=E.params),v&&(u.value=R()),$(()=>{u.value()}),{onBefore(g){const p=r(g),h=m(p);if(!h||!d(h,"data"))return{};if(T(h.time))return e.data.value=h.data,e.loading.value=!1,{isBreak:!0,breakResult:h.data};e.data.value=h.data},onQuery(g){const p=e.params.value,h=r(p);let w=Ce(h);return w&&w!==i?()=>w:(w=g(),i=w,be(h,w),()=>w)},onSuccess(g,p){const h=r(p);h&&(u.value(),f(h,o,{data:g,params:p,time:new Date().getTime()}),u.value=R(p))},onMutate(g){const p=r(e.params.value);p&&(u.value(),f(p,o,{data:g,params:e.params.value,time:new Date().getTime()}),u.value=R(e.params.value))}}});function Oe(e){let t,n;class o extends Promise{constructor(s){super(s),this.cancel=()=>{n(),clearTimeout(t)}}}return new o(a=>{n=a,t=setTimeout(n,e)})}function G(){return new Date().getTime()}var Le=I((e,t)=>{let{loadingDelay:n=0,loadingKeep:o=0}=t;const a=C(()=>{}),s=O(()=>S(n)),l=O(()=>S(o));let r=0,u={};const i=()=>{let m;return s.value&&(m=setTimeout(()=>{e.status.value==="pending"&&(e.loading.value=!0)},s.value)),()=>m&&clearTimeout(m)};return{onBefore(){e.loading.value=!s.value,a.value(),a.value=i(),r=G()},onQuery(m){if(!l.value)return()=>m();u=Oe(l.value+s.value);const f=async()=>{try{const d=await m();return G()-r<=s.value&&u.cancel(),Promise.resolve(d)}catch(d){return G()-r<=s.value&&u.cancel(),Promise.reject(d)}},T=Promise.allSettled([f(),u]).then(d=>{const R=d[0];return R.status==="fulfilled"?R.value:Promise.reject(R.reason)});return()=>T},onCancel(){a.value()},onAfter(){a.value()}}}),V;const ee=new Set,ne=new Set,te=new Set,Q=(e,t)=>{let n;switch(e){case"FOCUS_LISTENER":n=ee;break;case"RECONNECT_LISTENER":n=te;break;case"VISIBLE_LISTENER":n=ne;break}if(!n.has(t))return n.add(t),()=>{n.delete(t)}},U=e=>{e.forEach(t=>{t()})};!Z&&(V=window)!==null&&V!==void 0&&V.addEventListener&&(window.addEventListener("visibilitychange",()=>{k()&&U(ne)},!1),window.addEventListener("focus",()=>U(ee),!1),window.addEventListener("online",()=>U(te),!1));var xe=I((e,t)=>{let{pollingInterval:n,pollingWhenHidden:o=!1,pollingWhenOffline:a=!1,errorRetryCount:s=0}=t;const l=C(),r=C(!1),u=O(()=>S(n)),i=O(()=>S(s)),m=[],f=v=>{v&&m.push(v)},T=()=>(o||k())&&(a||se()),d=v=>{if(e.error.value&&i.value!==0)return;let E;if(!D(u.value)&&u.value>=0)if(T())E=setTimeout(v,u.value);else{r.value=!0;return}return()=>E&&clearTimeout(E)},R=()=>{r.value&&T()&&(e.context.refresh(),r.value=!1)};return z(u,()=>{l.value&&(l.value(),l.value=d(()=>e.context.refresh()))}),o||f(Q("VISIBLE_LISTENER",R)),a||f(Q("RECONNECT_LISTENER",R)),$(()=>{m.forEach(v=>v())}),{onBefore(){var v;(v=l.value)===null||v===void 0||v.call(l)},onCancel(){var v;(v=l.value)===null||v===void 0||v.call(l)},onAfter(){l.value=d(()=>e.context.refresh())}}});const Se=(e,t)=>{let n=!1;return function(){n||(n=!0,e(...arguments),setTimeout(()=>{n=!1},t))}};var Ie=I((e,t)=>{let{refreshOnWindowFocus:n=!1,refocusTimespan:o=5e3}=t;const a=O(()=>S(n)),s=O(()=>S(o)),l=[],r=i=>{i&&l.push(i)},u=()=>{l.forEach(i=>i())};return Y(()=>{if(u(),a.value){const i=Se(e.context.refresh,s.value);r(Q("VISIBLE_LISTENER",i)),r(Q("FOCUS_LISTENER",i))}}),$(()=>{u()}),{}});function _e(e,t,n){return Te(e,t,[...n||[],Le,me,ve,xe,pe,Ie,he,ge,Pe])}export{_e as u};
