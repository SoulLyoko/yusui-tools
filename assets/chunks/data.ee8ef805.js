function l(t,n){return n={exports:{}},t(n,n.exports),n.exports}var y=l(function(t){var n=t.exports=function(r,e){if(e||(e=16),r===void 0&&(r=128),r<=0)return"0";for(var s=Math.log(Math.pow(2,r))/Math.log(e),o=2;s===1/0;o*=2)s=Math.log(Math.pow(2,r/o))/Math.log(e)*o;for(var c=s-Math.floor(s),i="",o=0;o<Math.floor(s);o++){var u=Math.floor(Math.random()*e).toString(e);i=u+i}if(c){var f=Math.pow(e,c),u=Math.floor(Math.random()*f).toString(e);i=u+i}var h=parseInt(i,e);return h!==1/0&&h>=Math.pow(2,r)?n(r,e):i};n.rack=function(r,e,s){var o=function(i){var u=0;do{if(u++>10)if(s)r+=s;else throw new Error("too many ID collisions, use more bits");var f=n(r,e)}while(Object.hasOwnProperty.call(c,f));return c[f]=i,f},c=o.hats={};return o.get=function(i){return o.hats[i]},o.set=function(i,u){return o.hats[i]=u,o},o.bits=r||128,o.base=e||16,o}});function a(t){if(!(this instanceof a))return new a(t);t=t||[128,36,1],this._seed=t.length?y.rack(t[0],t[1],t[2]):t}a.prototype.next=function(t){return this._seed(t||!0)};a.prototype.nextPrefixed=function(t,n){var r;do r=t+this.next(!0);while(this.assigned(r));return this.claim(r,n),r};a.prototype.claim=function(t,n){this._seed.set(t,n||!0)};a.prototype.assigned=function(t){return this._seed.get(t)||!1};a.prototype.unclaim=function(t){delete this._seed.hats[t]};a.prototype.clear=function(){var t=this._seed.hats,n;for(n in t)this.unclaim(n)};var v=new a([32,32,1]);function p(){return v.next()}function g(){const t="Process_"+p(),n="Event_"+p(),r="Flow_"+p(),e="Activity_"+p();return{processData:{type:"process",key:t,properties:{}},flowElementList:[{incoming:[],outgoing:[r],type:"startEvent",key:n,properties:{name:"开始",x:160,y:240,text:{x:160,y:280,value:"开始"}}},{incoming:[r],outgoing:[],type:"userTask",key:e,properties:{name:"发起人",x:290,y:240,text:{x:290,y:240,value:"发起人"}}},{incoming:[n],outgoing:[e],type:"sequenceFlow",key:r,properties:{name:"",text:"",startPoint:{x:178,y:240},endPoint:{x:240,y:240},pointsList:[{x:178,y:240},{x:240,y:240}]}}]}}export{a as I,g as d,p as g};
