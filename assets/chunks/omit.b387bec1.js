import{a as o}from"./Uint8Array.1590c62a.js";import{b as s}from"./cloneDeep.72f77c29.js";import{b as t,d as u,t as a,f as m}from"./basePickBy.ac487ef2.js";import{b as g}from"./index.288677a1.js";import{a as L}from"./index.es.e5378d01.js";import{g as v}from"./getTag.c191495f.js";function O(e,n,r){var l=-1,i=e.length;n<0&&(n=-n>i?0:i+n),r=r>i?i:r,r<0&&(r+=i),i=n>r?0:r-n>>>0,n>>>=0;for(var f=Array(i);++l<i;)f[l]=e[l+n];return f}function c(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}function A(e,n){return n.length<2?e:t(e,O(n,0,-1))}function _(e,n){return n=u(n,e),e=A(e,n),e==null||delete e[a(c(n))]}function C(e){return L(e)?void 0:e}var E=1,F=2,G=4,N=m(function(e,n){var r={};if(e==null)return r;var l=!1;n=o(n,function(f){return f=u(f,e),l||(l=f.length>1),f}),g(e,v(e),r),l&&(r=s(r,E|F|G,C));for(var i=n.length;i--;)_(r,n[i]);return r});const y=N;export{_ as a,O as b,c as l,y as o,A as p};
