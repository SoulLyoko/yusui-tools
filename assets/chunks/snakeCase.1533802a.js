import{a as d,c as m,d as g,b as s}from"./baseGet.94177317.js";import{a as b,c as k}from"./pickBy.838b6fb7.js";import{b as w}from"./omit.21281450.js";import{b as C}from"./Uint8Array.65d84ac4.js";import{i as A,f as B,a as M}from"./basePickBy.015eb126.js";import{b as L}from"./merge.fdeb8eba.js";import{c as O}from"./createCompounder.b5b39a99.js";function $(r,n){var i=r.length;for(r.sort(n);i--;)r[i]=r[i].value;return r}function y(r,n){if(r!==n){var i=r!==void 0,c=r===null,a=r===r,u=d(r),f=n!==void 0,p=n===null,t=n===n,o=d(n);if(!p&&!o&&!u&&r>n||u&&f&&t&&!p&&!o||c&&f&&t||!i&&t||!a)return 1;if(!c&&!u&&!o&&r<n||o&&i&&a&&!c&&!u||p&&i&&a||!f&&a||!t)return-1}return 0}function G(r,n,i){for(var c=-1,a=r.criteria,u=n.criteria,f=a.length,p=i.length;++c<f;){var t=y(a[c],u[c]);if(t){if(c>=p)return t;var o=i[c];return t*(o=="desc"?-1:1)}}return r.index-n.index}function U(r,n,i){n.length?n=m(n,function(u){return g(u)?function(f){return s(f,u.length===1?u[0]:u)}:u}):n=[A];var c=-1;n=m(n,C(b));var a=w(r,function(u,f,p){var t=m(n,function(o){return o(u)});return{criteria:t,index:++c,value:u}});return $(a,function(u,f){return G(u,f,i)})}function P(r,n,i,c){return r==null?[]:(g(n)||(n=n==null?[]:[n]),i=c?void 0:i,g(i)||(i=i==null?[]:[i]),U(r,n,i))}function _(r){return B(function(n){return n=m(n,C(b)),L(function(i){var c=this;return r(n,function(a){return M(a,c,i)})})})}var j=_(k);const Q=j;var q=O(function(r,n,i){return r+(i?"_":"")+n.toLowerCase()});const T=q;export{Q as a,y as b,_ as c,U as d,P as o,T as s};
