import{b as i}from"./merge.df46fe1a.js";import{k as b}from"./getTag.bbaab4d0.js";import{i as f}from"./Uint8Array.9b4f3e17.js";import{c as m}from"./basePickBy.0a9df2e6.js";function h(r,s){return r&&i(r,s,b)}function p(r,s){return function(a,e){if(a==null)return a;if(!f(a))return r(a,e);for(var u=a.length,n=s?u:-1,t=Object(a);(s?n--:++n<u)&&e(t[n],n,t)!==!1;);return a}}var k=p(h);const d=k;function g(r,s){var a=-1,e=f(r)?Array(r.length):[];return d(r,function(u,n,t){e[++a]=s(u,n,t)}),e}function w(r,s,a){return r==null?r:m(r,s,a)}export{h as a,g as b,d as c,p as d,w as s};
