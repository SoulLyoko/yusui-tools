import{m as w,z as S,c as F,A as u,b as L,f as D,i as N,n as G,S as P,B as R}from"./Uint8Array.1590c62a.js";import{b as j,h as C,f as K,d as Y,e as W,i as q}from"./index.288677a1.js";import{k as h,a as H,b as J,c as l,g as Q,d as V}from"./getTag.c191495f.js";function X(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}function Z(e,t){return e&&j(t,h(t),e)}function v(e,t){return e&&j(t,w(t),e)}function z(e,t){return j(e,H(e),t)}function k(e,t){return j(e,J(e),t)}var ee=Object.prototype,te=ee.hasOwnProperty;function re(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&te.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ne(e,t){var n=t?C(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var ae=/\w*$/;function oe(e){var t=new e.constructor(e.source,ae.exec(e));return t.lastIndex=e.lastIndex,t}var m=S?S.prototype:void 0,O=m?m.valueOf:void 0;function ce(e){return O?Object(O.call(e)):{}}var se="[object Boolean]",ie="[object Date]",fe="[object Map]",be="[object Number]",ge="[object RegExp]",Te="[object Set]",ye="[object String]",ue="[object Symbol]",je="[object ArrayBuffer]",le="[object DataView]",pe="[object Float32Array]",Ae="[object Float64Array]",de="[object Int8Array]",$e="[object Int16Array]",Se="[object Int32Array]",me="[object Uint8Array]",Oe="[object Uint8ClampedArray]",Ie="[object Uint16Array]",Ee="[object Uint32Array]";function we(e,t,n){var o=e.constructor;switch(t){case je:return C(e);case se:case ie:return new o(+e);case le:return ne(e,n);case pe:case Ae:case de:case $e:case Se:case me:case Oe:case Ie:case Ee:return K(e,n);case fe:return new o;case be:case ye:return new o(e);case ge:return oe(e);case Te:return new o;case ue:return ce(e)}}var Fe="[object Map]";function Le(e){return F(e)&&l(e)==Fe}var I=u&&u.isMap,Ce=I?L(I):Le;const he=Ce;var Be="[object Set]";function Me(e){return F(e)&&l(e)==Be}var E=u&&u.isSet,xe=E?L(E):Me;const Ue=xe;var _e=1,De=2,Ne=4,B="[object Arguments]",Ge="[object Array]",Pe="[object Boolean]",Re="[object Date]",Ke="[object Error]",M="[object Function]",Ye="[object GeneratorFunction]",We="[object Map]",qe="[object Number]",x="[object Object]",He="[object RegExp]",Je="[object Set]",Qe="[object String]",Ve="[object Symbol]",Xe="[object WeakMap]",Ze="[object ArrayBuffer]",ve="[object DataView]",ze="[object Float32Array]",ke="[object Float64Array]",et="[object Int8Array]",tt="[object Int16Array]",rt="[object Int32Array]",nt="[object Uint8Array]",at="[object Uint8ClampedArray]",ot="[object Uint16Array]",ct="[object Uint32Array]",r={};r[B]=r[Ge]=r[Ze]=r[ve]=r[Pe]=r[Re]=r[ze]=r[ke]=r[et]=r[tt]=r[rt]=r[We]=r[qe]=r[x]=r[He]=r[Je]=r[Qe]=r[Ve]=r[nt]=r[at]=r[ot]=r[ct]=!0;r[Ke]=r[M]=r[Xe]=!1;function y(e,t,n,o,b,c){var a,g=t&_e,T=t&De,U=t&Ne;if(n&&(a=b?n(e,o,b,c):n(e)),a!==void 0)return a;if(!D(e))return e;var p=N(e);if(p){if(a=re(e),!g)return Y(e,a)}else{var f=l(e),A=f==M||f==Ye;if(G(e))return W(e,g);if(f==x||f==B||A&&!b){if(a=T||A?{}:q(e),!g)return T?k(e,v(a,e)):z(e,Z(a,e))}else{if(!r[f])return b?e:{};a=we(e,f,g)}}c||(c=new P);var d=c.get(e);if(d)return d;c.set(e,a),Ue(e)?e.forEach(function(s){a.add(y(s,t,n,s,e,c))}):he(e)&&e.forEach(function(s,i){a.set(i,y(s,t,n,i,e,c))});var _=U?T?Q:V:T?w:h,$=p?void 0:_(e);return X($||e,function(s,i){$&&(i=s,s=e[i]),R(a,i,y(s,t,n,i,e,c))}),a}var st=1,it=4;function Tt(e){return y(e,st|it)}export{X as a,y as b,Tt as c,Z as d,Ue as e,he as i};
