import{u as C}from"./index.es.e5378d01.js";import"./index.288677a1.js";import{s as K}from"./index.386fc70b.js";import{c as m}from"./cloneDeep.72f77c29.js";import{u as T}from"./config.78667c97.js";import{g as A}from"./get.c8715fa2.js";import{g as b,l as D}from"./framework.f01dabf7.js";function q(l,c={}){const{childrenKey:s="children",depth:r=0,returnDepth:u=!1,returnChildren:n=!1}=c;return m(l).map(e=>{var i;return u&&(e._depth=r),(i=e[s])!=null&&i.length?[e,q(e[s],{...c,depth:r+1})]:e}).flat(Number.POSITIVE_INFINITY).map(e=>(!n&&delete e[s],e))}function P(l,c,s={}){const{childrenKey:r="children",flat:u=!0}=s,n=m(l);if(u){const t=[];for(const e of n)c(e)&&t.push(e),e[r]&&n.push(...e[r]);return t}else return n.filter(t=>{var i,o;const e=(i=t[r])==null?void 0:i.length;return t[r]=e&&P(t[r],c,s),c(t)||((o=t[r])==null?void 0:o.length)})}function N(l,c,s={}){const{childrenKey:r="children",returnChildren:u=!1}=s,n=m(l);for(const t of n){if(c(t))return!u&&delete t[r],t;t[r]&&n.push(...t[r])}return null}function Q(l,c,s={}){const{childrenKey:r="children",parent:u=null,depth:n=0}=s;return l.map((e,i)=>{var a;const o=(a=e[r])==null?void 0:a.length,h=c(e,i,u,n)||e;return o?{...h,[r]:Q(e[r],c,{...s,parent:e,depth:n+1})}:{...h}})}const U={label:"label",value:"value",children:"children",disabled:"disabled",res:"data"};function F(l){return{...U,...l}}function H(l={}){const c=T(l),s=F(l.props);function r(){const{request:a}=c,{dicQuery:d={},dicHeaders:f={},dicFormatter:p,dicMethod:I="get",dicData:v,dicUrl:g}=l;return v?Promise.resolve(D(v)):g&&a?a({url:g,method:I,params:d,data:d,headers:f}).then(y=>p?p(y.data):A(y.data,s.res,[])):Promise.resolve([])}const{dicUrl:u,dicQuery:n}=l,t=u?u+(n?`?${K(n)}`:""):void 0,e=C(r,{cacheKey:t}),{data:i}=e,o=b(()=>{const a=D(l.modelValue);return Array.isArray(a)?P(i.value??[],d=>a==null?void 0:a.some(f=>f===d[s.value])):N(i.value??[],d=>d[s.value]===a)}),h=b(()=>{var a,d;return Array.isArray(o.value)?(a=o.value)==null?void 0:a.map(f=>f[s.label]).join(","):(d=o.value)==null?void 0:d[s.label]});return{...e,selectedItem:o,selectedLabel:h}}export{q as a,P as b,N as f,F as m,Q as t,H as u};
