function l(t,r){return r={exports:{}},t(r,r.exports),r.exports}var g=l(function(t){var r=t.exports=function(n,e){if(e||(e=16),n===void 0&&(n=128),n<=0)return"0";for(var s=Math.log(Math.pow(2,n))/Math.log(e),o=2;s===1/0;o*=2)s=Math.log(Math.pow(2,n/o))/Math.log(e)*o;for(var f=s-Math.floor(s),i="",o=0;o<Math.floor(s);o++){var u=Math.floor(Math.random()*e).toString(e);i=u+i}if(f){var h=Math.pow(e,f),u=Math.floor(Math.random()*h).toString(e);i=u+i}var p=parseInt(i,e);return p!==1/0&&p>=Math.pow(2,n)?r(n,e):i};r.rack=function(n,e,s){var o=function(i){var u=0;do{if(u++>10)if(s)n+=s;else throw new Error("too many ID collisions, use more bits");var h=r(n,e)}while(Object.hasOwnProperty.call(f,h));return f[h]=i,h},f=o.hats={};return o.get=function(i){return o.hats[i]},o.set=function(i,u){return o.hats[i]=u,o},o.bits=n||128,o.base=e||16,o}});function a(t){if(!(this instanceof a))return new a(t);t=t||[128,36,1],this._seed=t.length?g.rack(t[0],t[1],t[2]):t}a.prototype.next=function(t){return this._seed(t||!0)};a.prototype.nextPrefixed=function(t,r){var n;do n=t+this.next(!0);while(this.assigned(n));return this.claim(n,r),n};a.prototype.claim=function(t,r){this._seed.set(t,r||!0)};a.prototype.assigned=function(t){return this._seed.get(t)||!1};a.prototype.unclaim=function(t){delete this._seed.hats[t]};a.prototype.clear=function(){var t=this._seed.hats,r;for(r in t)this.unclaim(r)};var v=new a([32,32,1]);function c(){return v.next()}function y(){const t="Event_"+c(),r="Flow_"+c(),n="Activity_"+c();return{flowElementList:[{incoming:[],outgoing:[r],dockers:[],type:"startEvent",properties:{name:"开始",x:160,y:240,text:{x:160,y:280,value:"开始"}},key:t},{incoming:[r],outgoing:[],dockers:[],type:"userTask",properties:{name:"",x:290,y:240,text:""},key:n},{incoming:[t],outgoing:[n],type:"sequenceFlow",dockers:[],properties:{name:"",text:"",startPoint:{x:178,y:240},endPoint:{x:240,y:240},pointsList:[{x:178,y:240},{x:240,y:240}]},key:r}]}}export{a as I,y as d,c as g};