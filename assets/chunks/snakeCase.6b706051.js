import{f as d,h as m,j as g,b as s}from"./baseGet.dbab6d06.js";import{a as b,c as k}from"./pickBy.3939954b.js";import{b as w}from"./omit.c30a42ae.js";import{b as C}from"./Uint8Array.f03d52c3.js";import{i as A,f as B,a as M}from"./basePickBy.1969992d.js";import{b as L}from"./merge.388a8cf7.js";import{c as O}from"./createCompounder.ded3b507.js";function $(r,n){var i=r.length;for(r.sort(n);i--;)r[i]=r[i].value;return r}function j(r,n){if(r!==n){var i=r!==void 0,c=r===null,f=r===r,u=d(r),a=n!==void 0,p=n===null,t=n===n,o=d(n);if(!p&&!o&&!u&&r>n||u&&a&&t&&!p&&!o||c&&a&&t||!i&&t||!f)return 1;if(!c&&!u&&!o&&r<n||o&&i&&f&&!c&&!u||p&&i&&f||!a&&f||!t)return-1}return 0}function y(r,n,i){for(var c=-1,f=r.criteria,u=n.criteria,a=f.length,p=i.length;++c<a;){var t=j(f[c],u[c]);if(t){if(c>=p)return t;var o=i[c];return t*(o=="desc"?-1:1)}}return r.index-n.index}function G(r,n,i){n.length?n=m(n,function(u){return g(u)?function(a){return s(a,u.length===1?u[0]:u)}:u}):n=[A];var c=-1;n=m(n,C(b));var f=w(r,function(u,a,p){var t=m(n,function(o){return o(u)});return{criteria:t,index:++c,value:u}});return $(f,function(u,a){return y(u,a,i)})}function P(r,n,i,c){return r==null?[]:(g(n)||(n=n==null?[]:[n]),i=c?void 0:i,g(i)||(i=i==null?[]:[i]),G(r,n,i))}function U(r){return B(function(n){return n=m(n,C(b)),L(function(i){var c=this;return r(n,function(f){return M(f,c,i)})})})}var _=U(k);const Q=_;var q=O(function(r,n,i){return r+(i?"_":"")+n.toLowerCase()});const T=q;export{Q as a,j as b,U as c,G as d,P as o,T as s};