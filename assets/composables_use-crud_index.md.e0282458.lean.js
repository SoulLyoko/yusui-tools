import{m as mt,n as x,q as pt,s as Ft,u as Ct,x as gt,y as At,z as vt,A as U,B as ot,E as q,C as rt,D as lt,G as ct,H as dt,I as wt,r as bt,J as _t,K as Ot,d as St,o as ut,k as $t,L as Lt,M as Mt,N as kt,f as Rt,c as Bt,e as Et,b as t,i as H,j as ht}from"./app.bb1f139c.js";/*! js-cookie v3.0.1 | MIT */function z(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var d in a)e[d]=a[d]}return e}var xt={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function K(e,s){function a(f,D,r){if(!(typeof document>"u")){r=z({},s,r),typeof r.expires=="number"&&(r.expires=new Date(Date.now()+r.expires*864e5)),r.expires&&(r.expires=r.expires.toUTCString()),f=encodeURIComponent(f).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var m="";for(var y in r)!r[y]||(m+="; "+y,r[y]!==!0&&(m+="="+r[y].split(";")[0]));return document.cookie=f+"="+e.write(D,f)+m}}function d(f){if(!(typeof document>"u"||arguments.length&&!f)){for(var D=document.cookie?document.cookie.split("; "):[],r={},m=0;m<D.length;m++){var y=D[m].split("="),p=y.slice(1).join("=");try{var u=decodeURIComponent(y[0]);if(r[u]=e.read(p,u),f===u)break}catch{}}return f?r[f]:r}}return Object.create({set:a,get:d,remove:function(f,D){a(f,"",z({},D,{expires:-1}))},withAttributes:function(f){return K(this.converter,z({},this.attributes,f))},withConverter:function(f){return K(z({},this.converter,f),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(e)}})}K(xt,{path:"/"});function Yt(e){var s,a;return(a=(s=Object.prototype.toString.call(e).match(/\[object (.*)\]/))==null?void 0:s[1])!=null?a:""}const it={set(e,s){if(s===void 0)return;const a={key:e,value:s,timestamp:Date.now(),type:Yt(s)};localStorage.setItem(e,JSON.stringify(a)),this.length++},get(e){const s=localStorage.getItem(e);return s?JSON.parse(s).value:null},remove(e){!this.get(e)||(localStorage.removeItem(e),this.length--)},clear(){localStorage.clear(),this.length=0},setItem(e,s){this.set(e,s)},getItem(e){return this.get(e)},removeItem(e){this.remove(e)},key(e){return localStorage.key(e)},length:0};var Pt={exports:{}};(function(e,s){(function(a,d){e.exports=d(mt.exports)})(x,function(a){function d(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var f=d(a),D={name:"zh-cn",weekdays:"\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),weekdaysShort:"\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),weekdaysMin:"\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),months:"\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(r,m){return m==="W"?r+"\u5468":r+"\u65E5"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",LLLL:"YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524D",s:"\u51E0\u79D2",m:"1 \u5206\u949F",mm:"%d \u5206\u949F",h:"1 \u5C0F\u65F6",hh:"%d \u5C0F\u65F6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4E2A\u6708",MM:"%d \u4E2A\u6708",y:"1 \u5E74",yy:"%d \u5E74"},meridiem:function(r,m){var y=100*r+m;return y<600?"\u51CC\u6668":y<900?"\u65E9\u4E0A":y<1100?"\u4E0A\u5348":y<1300?"\u4E2D\u5348":y<1800?"\u4E0B\u5348":"\u665A\u4E0A"}};return f.default.locale(D,null,!0),D})})(Pt);var ft={exports:{}};(function(e,s){(function(a,d){e.exports=d()})(x,function(){var a,d,f=1e3,D=6e4,r=36e5,m=864e5,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=31536e6,u=2592e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:p,months:u,days:m,hours:r,minutes:D,seconds:f,milliseconds:1,weeks:6048e5},w=function(i){return i instanceof l},S=function(i,c,o){return new l(i,o,c.$l)},$=function(i){return d.p(i)+"s"},L=function(i){return i<0},b=function(i){return L(i)?Math.ceil(i):Math.floor(i)},_=function(i){return Math.abs(i)},n=function(i,c){return i?L(i)?{negative:!0,format:""+_(i)+c}:{negative:!1,format:""+i+c}:{negative:!1,format:""}},l=function(){function i(o,h,C){var g=this;if(this.$d={},this.$l=C,o===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return S(o*F[$(h)],this);if(typeof o=="number")return this.$ms=o,this.parseFromMilliseconds(),this;if(typeof o=="object")return Object.keys(o).forEach(function(M){g.$d[$(M)]=o[M]}),this.calMilliseconds(),this;if(typeof o=="string"){var A=o.match(v);if(A){var O=A.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=O[0],this.$d.months=O[1],this.$d.weeks=O[2],this.$d.days=O[3],this.$d.hours=O[4],this.$d.minutes=O[5],this.$d.seconds=O[6],this.calMilliseconds(),this}}return this}var c=i.prototype;return c.calMilliseconds=function(){var o=this;this.$ms=Object.keys(this.$d).reduce(function(h,C){return h+(o.$d[C]||0)*F[C]},0)},c.parseFromMilliseconds=function(){var o=this.$ms;this.$d.years=b(o/p),o%=p,this.$d.months=b(o/u),o%=u,this.$d.days=b(o/m),o%=m,this.$d.hours=b(o/r),o%=r,this.$d.minutes=b(o/D),o%=D,this.$d.seconds=b(o/f),o%=f,this.$d.milliseconds=o},c.toISOString=function(){var o=n(this.$d.years,"Y"),h=n(this.$d.months,"M"),C=+this.$d.days||0;this.$d.weeks&&(C+=7*this.$d.weeks);var g=n(C,"D"),A=n(this.$d.hours,"H"),O=n(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3);var B=n(M,"S"),E=o.negative||h.negative||g.negative||A.negative||O.negative||B.negative,Y=A.format||O.format||B.format?"T":"",k=(E?"-":"")+"P"+o.format+h.format+g.format+Y+A.format+O.format+B.format;return k==="P"||k==="-P"?"P0D":k},c.toJSON=function(){return this.toISOString()},c.format=function(o){var h=o||"YYYY-MM-DDTHH:mm:ss",C={Y:this.$d.years,YY:d.s(this.$d.years,2,"0"),YYYY:d.s(this.$d.years,4,"0"),M:this.$d.months,MM:d.s(this.$d.months,2,"0"),D:this.$d.days,DD:d.s(this.$d.days,2,"0"),H:this.$d.hours,HH:d.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:d.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:d.s(this.$d.seconds,2,"0"),SSS:d.s(this.$d.milliseconds,3,"0")};return h.replace(y,function(g,A){return A||String(C[g])})},c.as=function(o){return this.$ms/F[$(o)]},c.get=function(o){var h=this.$ms,C=$(o);return C==="milliseconds"?h%=1e3:h=C==="weeks"?b(h/F[C]):this.$d[C],h===0?0:h},c.add=function(o,h,C){var g;return g=h?o*F[$(h)]:w(o)?o.$ms:S(o,this).$ms,S(this.$ms+g*(C?-1:1),this)},c.subtract=function(o,h){return this.add(o,h,!0)},c.locale=function(o){var h=this.clone();return h.$l=o,h},c.clone=function(){return S(this.$ms,this)},c.humanize=function(o){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!o)},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},i}();return function(i,c,o){a=o,d=o().$utils(),o.duration=function(g,A){var O=o.locale();return S(g,{$l:O},A)},o.isDuration=w;var h=c.prototype.add,C=c.prototype.subtract;c.prototype.add=function(g,A){return w(g)&&(g=g.asMilliseconds()),h.bind(this)(g,A)},c.prototype.subtract=function(g,A){return w(g)&&(g=g.asMilliseconds()),C.bind(this)(g,A)}}})})(ft);const jt=ft.exports;var yt={exports:{}};(function(e,s){(function(a,d){e.exports=d()})(x,function(){return function(a,d,f){a=a||{};var D=d.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function m(p,u,v,F){return D.fromToBase(p,u,v,F)}f.en.relativeTime=r,D.fromToBase=function(p,u,v,F,w){for(var S,$,L,b=v.$locale().relativeTime||r,_=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],n=_.length,l=0;l<n;l+=1){var i=_[l];i.d&&(S=F?f(p).diff(v,i.d,!0):v.diff(p,i.d,!0));var c=(a.rounding||Math.round)(Math.abs(S));if(L=S>0,c<=i.r||!i.r){c<=1&&l>0&&(i=_[l-1]);var o=b[i.l];w&&(c=w(""+c)),$=typeof o=="string"?o.replace("%d",c):o(c,u,i.l,L);break}}if(u)return $;var h=L?b.future:b.past;return typeof h=="function"?h($):h.replace("%s",$)},D.to=function(p,u){return m(p,u,this,!0)},D.from=function(p,u){return m(p,u,this)};var y=function(p){return p.$u?f.utc():f()};D.toNow=function(p){return this.to(y(this),p)},D.fromNow=function(p){return this.from(y(this),p)}}})})(yt);const Tt=yt.exports;pt.extend(Tt);pt.extend(jt);function Ut(e){return{all:e=e||new Map,on:function(s,a){var d=e.get(s);d?d.push(a):e.set(s,[a])},off:function(s,a){var d=e.get(s);d&&(a?d.splice(d.indexOf(a)>>>0,1):e.set(s,[]))},emit:function(s,a){var d=e.get(s);d&&d.slice().map(function(f){f(a)}),(d=e.get("*"))&&d.slice().map(function(f){f(s,a)})}}}function qt(e){const s=Ut(e);return s.emitAsync=async function(a,d){const f=this.all.get(a);if(f)for(const r of f)await r(d);const D=this.all.get("*");if(D)for(const r of D)await r(a,d)},s}var Ht={exports:{}};(function(e,s){(function(a,d){d()})(x,function(){function a(p,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p}function d(p,u,v){var F=new XMLHttpRequest;F.open("GET",p),F.responseType="blob",F.onload=function(){y(F.response,u,v)},F.onerror=function(){console.error("could not download file")},F.send()}function f(p){var u=new XMLHttpRequest;u.open("HEAD",p,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function D(p){try{p.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),p.dispatchEvent(u)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof x=="object"&&x.global===x?x:void 0,m=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(p,u,v){var F=r.URL||r.webkitURL,w=document.createElement("a");u=u||p.name||"download",w.download=u,w.rel="noopener",typeof p=="string"?(w.href=p,w.origin===location.origin?D(w):f(w.href)?d(p,u,v):D(w,w.target="_blank")):(w.href=F.createObjectURL(p),setTimeout(function(){F.revokeObjectURL(w.href)},4e4),setTimeout(function(){D(w)},0))}:"msSaveOrOpenBlob"in navigator?function(p,u,v){if(u=u||p.name||"download",typeof p!="string")navigator.msSaveOrOpenBlob(a(p,v),u);else if(f(p))d(p,u,v);else{var F=document.createElement("a");F.href=p,F.target="_blank",setTimeout(function(){D(F)})}}:function(p,u,v,F){if(F=F||open("","_blank"),F&&(F.document.title=F.document.body.innerText="downloading..."),typeof p=="string")return d(p,u,v);var w=p.type==="application/octet-stream",S=/constructor/i.test(r.HTMLElement)||r.safari,$=/CriOS\/[\d]+/.test(navigator.userAgent);if(($||w&&S||m)&&typeof FileReader<"u"){var L=new FileReader;L.onloadend=function(){var n=L.result;n=$?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),F?F.location.href=n:location=n,F=null},L.readAsDataURL(p)}else{var b=r.URL||r.webkitURL,_=b.createObjectURL(p);F?F.location=_:location.href=_,F=null,setTimeout(function(){b.revokeObjectURL(_)},4e4)}});r.saveAs=y.saveAs=y,e.exports=y})})(Ht);function zt(e=16,s){const a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",d=s||a.length,f=[];for(let D=0;D<e;D++)f[D]=a.charAt(Math.random()*d);return f.join("")}function Kt(e){return new Promise(s=>setTimeout(s,e))}function It(e,s){return e.then(a=>[null,a]).catch(a=>s?[Object.assign({},a,s),void 0]:[a,void 0])}const P=It;function Nt({crudState:e}){var D;if(e.mockCache)try{const m=`mock-${e.mockCache}`;e.mockData=(D=it.get(m))!=null?D:e.mockData,Ft(()=>e.mockData,()=>it.set(m,e.mockData),{immediate:!0,deep:!0})}catch(r){console.log("\u{1F680} ~ file: mock.ts ~ line 21 ~ error",r)}function s(r){const{currKey:m,sizeKey:y}=e.crudOption,p=r[m],u=r[y],{descs:v,ascs:F}=r,w=Ct(r,[m,y,"descs","ascs"]),S=e.mockData.filter(b=>Object.entries(w).every(([_,n])=>typeof b[_]=="string"?b[_].includes(n):b[_]==n)),L=gt(S,v||F||void 0,v?"desc":F?"asc":void 0).filter((b,_)=>_>=(p-1)*u&&_<p*u);return Promise.resolve({code:200,msg:"\u64CD\u4F5C\u6210\u529F",data:{records:L,total:S.length}})}function a(r){const{crudOption:{rowKey:m}}=e;return e.mockData.push({[m]:zt(16,10),...r}),Promise.resolve({code:200,msg:"\u64CD\u4F5C\u6210\u529F"})}function d(r){const{crudOption:{rowKey:m}}=e;return e.mockData=e.mockData.map(y=>y[m]===r[m]?r:y),Promise.resolve({code:200,msg:"\u64CD\u4F5C\u6210\u529F"})}function f(r){const{crudOption:{rowKey:m}}=e;if(typeof r=="string"){const y=r.split(",");e.mockData=e.mockData.filter(p=>!y.some(u=>u==p[m]))}else e.mockData=e.mockData.filter(y=>r!=y[m]);return Promise.resolve({code:200,msg:"\u64CD\u4F5C\u6210\u529F"})}return{getList:s,create:a,update:d,remove:f}}function Vt(e){var r,m;const s=At(vt({crudOption:{rowKey:(m=(r=e==null?void 0:e.tableOption)==null?void 0:r.rowKey)!=null?m:"id",getList:y=>a(y),create:y=>d(y),update:y=>f(y),remove:y=>D(y),dataPath:"res.data.records",totalPath:"res.data.total",currKey:"current",sizeKey:"size",isPage:!0,isSort:!0},pageOption:{total:0,currentPage:1,pageSize:10},sortOption:{},tableLoading:!1,tableOption:{},tableData:[],dataSelections:[],searchForm:{},queryForm:{},formData:{},mockData:[],mockCache:""},e)),{getList:a,create:d,update:f,remove:D}=Nt({crudState:s});return s}function Gt({crudRef:e,crudState:s,emitter:a}){const d=async()=>{var k,j;const{getList:l,dataPath:i,totalPath:c,currKey:o,sizeKey:h,isPage:C,isSort:g}=s.crudOption;if(!l)return;const{currentPage:A,pageSize:O}=s.pageOption,M=C?{[o]:A,[h]:O}:{},B=g?s.sortOption:{},E=U({...s.searchForm,...M,...B,...s.queryForm}),[Y]=await P(a.emitAsync("beforeGetList",E));if(Y===null){s.tableLoading=!0,await Kt(100);try{const R=await l(v(E));console.log("getDataList ~ res",R),s.tableData=ot({res:R},i,[]),s.pageOption.total=ot({res:R},c,0),await a.emitAsync("afterGetList",R)}catch(R){console.error("getDataList ~ err",R),s.tableData=[],s.pageOption.total=0}finally{(j=(k=e==null?void 0:e.value)==null?void 0:k.selectClear)==null||j.call(k),s.tableLoading=!1}}},f=async(l,i,c)=>{const{rowKey:o,create:h}=s.crudOption;if(!h)return c==null?void 0:c();const C=U({...s.formData,...l}),[g]=await P(a.emitAsync("beforeSave",C));if(g!==null)return c==null?void 0:c();delete C[o];try{const A=await h(u(C));return q.success("\u4FDD\u5B58\u6210\u529F"),await a.emitAsync("afterSave",A),i==null||i(),d()}catch(A){console.error("handleSave ~ err",A),c==null||c()}},D=async(l,i,c,o)=>{const{update:h}=s.crudOption;if(!h)return o==null?void 0:o();const C=U({...s.formData,...l}),[g]=await P(a.emitAsync("beforeUpdate",C));if(g!==null)return o==null?void 0:o();try{const A=await h(u(C));return q.success("\u4FDD\u5B58\u6210\u529F"),await a.emitAsync("afterUpdate",A),c==null||c(),d()}catch(A){console.error("handleUpdate ~ err",A),o==null||o()}},r=async l=>{const{rowKey:i,remove:c}=s.crudOption;if(!c)return;const o=U(l),[h]=await P(a.emitAsync("beforeDel",o));if(h===null){await rt.confirm("\u786E\u8BA4\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\uFF1F","\u63D0\u793A",{type:"warning"});try{const C=await c(o[i]);return q.success("\u5220\u9664\u6210\u529F"),await a.emitAsync("afterDel",C),d()}catch(C){console.error("handleDel ~ err",C)}}},m=async()=>{const{rowKey:l,remove:i}=s.crudOption;if(!i)return;const c=U(s.dataSelections),[o]=await P(a.emitAsync("beforeBatchDel",c));if(o!==null)return;const h=c.length;if(!h)return q.warning("\u8BF7\u9009\u62E9\u5220\u9664\u9879");await rt.confirm(`\u786E\u8BA4\u5220\u9664\u6240\u9009\u7684${h}\u6761\u6570\u636E\uFF1F`,"\u63D0\u793A",{type:"warning"});const C=c.map(g=>g[l]).join(",");try{const g=await i(C);return q.success("\u5220\u9664\u6210\u529F"),await a.emitAsync("afterBatchDel",g),d()}catch(g){console.error("batchDel ~ err",g)}},y=(l,i)=>i.includes("$"),p=l=>l==="",u=l=>lt(l,ct(dt,y)),v=l=>lt(l,ct(dt,p,y));return{getDataList:d,handleSave:f,handleUpdate:D,handleDel:r,batchDel:m,searchChange:async(l,i)=>{s.pageOption.currentPage=1,Object.keys(s.searchForm).forEach(h=>{delete s.searchForm[h]}),Object.keys(l).forEach(h=>{s.searchForm[h]=l[h]});const[c]=await P(a.emitAsync("beforeSearch",s.searchForm));if(c!==null)return i==null?void 0:i();await d();const[o]=await P(a.emitAsync("afterSearch",s.searchForm));if(o!==null)return i==null?void 0:i();i==null||i()},searchReset:async()=>{Object.keys(s.searchForm).forEach(l=>{delete s.searchForm[l]}),await a.emitAsync("beforeSearchReset",s.searchForm),await d(),await a.emitAsync("afterSearchReset",s.searchForm)},selectionChange:l=>{s.dataSelections=l},pageSizeChange:l=>(s.pageOption.pageSize=l,d()),pageCurrentChange:l=>(s.pageOption.currentPage=l,d()),sortChange:({order:l,prop:i})=>(l&&i?s.sortOption={[l.replace("ending","s")]:wt(i)}:s.sortOption={},d()),beforeOpen:async(l,i)=>{await a.emitAsync("beforeOpen",i),l(),await a.emitAsync("afterOpen",i)},beforeClose:async(l,i)=>{await a.emitAsync("beforeClose",i),l(),await a.emitAsync("afterClose",i)}}}function Jt(){const e=qt();return{emitter:e,beforeGetList:n=>{e.on("beforeGetList",async(...l)=>await(n==null?void 0:n(...l)))},afterGetList:n=>{e.on("afterGetList",async(...l)=>await(n==null?void 0:n(...l)))},beforeSave:n=>{e.on("beforeSave",async(...l)=>await(n==null?void 0:n(...l)))},afterSave:n=>{e.on("afterSave",async(...l)=>await(n==null?void 0:n(...l)))},beforeUpdate:n=>{e.on("beforeUpdate",async(...l)=>await(n==null?void 0:n(...l)))},afterUpdate:n=>{e.on("afterUpdate",async(...l)=>await(n==null?void 0:n(...l)))},beforeDel:n=>{e.on("beforeDel",async(...l)=>await(n==null?void 0:n(...l)))},afterDel:n=>{e.on("afterDel",async(...l)=>await(n==null?void 0:n(...l)))},beforeBatchDel:n=>{e.on("beforeBatchDel",async(...l)=>await(n==null?void 0:n(...l)))},afterBatchDel:n=>{e.on("afterBatchDel",async(...l)=>await(n==null?void 0:n(...l)))},beforeSearch:n=>{e.on("beforeSearch",async()=>await(n==null?void 0:n()))},afterSearch:n=>{e.on("afterSearch",async()=>await(n==null?void 0:n()))},beforeSearchReset:n=>{e.on("beforeSearch",async()=>await(n==null?void 0:n()))},afterSearchReset:n=>{e.on("afterSearch",async()=>await(n==null?void 0:n()))},beforeOpen:n=>{e.on("beforeOpen",async(...l)=>await(n==null?void 0:n(...l)))},afterOpen:n=>{e.on("afterOpen",async(...l)=>await(n==null?void 0:n(...l)))},beforeClose:n=>{e.on("beforeClose",async(...l)=>await(n==null?void 0:n(...l)))},afterClose:n=>{e.on("afterClose",async(...l)=>await(n==null?void 0:n(...l)))}}}function Wt(e){var I,N,V,G,J,W,X,Z,Q,tt,et,nt,st;const s=bt(),a=Vt(e),d=_t(a),{emitter:f,beforeGetList:D,afterGetList:r,beforeSave:m,afterSave:y,beforeUpdate:p,afterUpdate:u,beforeDel:v,afterDel:F,beforeBatchDel:w,afterBatchDel:S,beforeSearch:$,afterSearch:L,beforeSearchReset:b,afterSearchReset:_,beforeOpen:n,afterOpen:l,beforeClose:i,afterClose:c}=Jt();let{getDataList:o,handleSave:h,handleUpdate:C,handleDel:g,batchDel:A,searchChange:O,searchReset:M,selectionChange:B,pageSizeChange:E,pageCurrentChange:Y,sortChange:k,beforeOpen:j,beforeClose:R}=Gt({crudRef:s,crudState:a,emitter:f});o=(I=e.getDataList)!=null?I:o,h=(N=e.handleSave)!=null?N:h,C=(V=e.handleUpdate)!=null?V:C,g=(G=e.handleDel)!=null?G:g,A=(J=e.batchDel)!=null?J:A,O=(W=e.searchChange)!=null?W:O,M=(X=e.searchReset)!=null?X:M,B=(Z=e.selectionChange)!=null?Z:B,E=(Q=e.pageSizeChange)!=null?Q:E,Y=(tt=e.pageCurrentChange)!=null?tt:Y,k=(et=e.sortChange)!=null?et:k,j=(nt=e.beforeOpen)!=null?nt:j,R=(st=e.beforeClose)!=null?st:R;const Dt=Ot(()=>{var at;return{ref:"crudRef",modelValue:a.formData,tableLoading:a.tableLoading,option:(at=e.tableOption)!=null?at:{},data:a.tableData,page:a.pageOption,search:a.searchForm,"before-open":j,"before-close":R,onRowSave:h,onRowUpdate:C,onRowDel:g,onRefreshChange:o,onSelectionChange:B,onCurrentChange:Y,onSizeChange:E,onSortChange:k,onSearchChange:O,onSearchReset:M,"onUpdate:search":T=>a.searchForm=T,"onUpdate:page":T=>a.pageOption=T,"onUpdate:modelValue":T=>a.formData=T}});return{crudRef:s,crudState:a,crudStateRefs:d,bindVal:Dt,getDataList:o,handleSave:h,handleUpdate:C,handleDel:g,batchDel:A,beforeGetList:D,afterGetList:r,beforeSave:m,afterSave:y,beforeUpdate:p,afterUpdate:u,beforeDel:v,afterDel:F,beforeBatchDel:w,afterBatchDel:S,beforeSearch:$,afterSearch:L,beforeSearchReset:b,afterSearchReset:_,beforeOpen:n,afterOpen:l,beforeClose:i,afterClose:c}}const Xt=St({__name:"demo",setup(e){const s=()=>Promise.resolve({data:{records:[{name:"123"}],total:1}}),a=()=>Promise.resolve(),d=()=>Promise.resolve(),f=()=>Promise.resolve(),{bindVal:D,getDataList:r}=Wt({crudOption:{getList:s,create:a,update:d,remove:f},tableOption:{column:[{label:"\u540D\u79F0",prop:"name"}]}});return r(),(m,y)=>{const p=Rt("avue-crud");return ut(),$t(p,Lt(Mt(kt(D))),null,16)}}}),Zt=t("h1",{id:"usecrud",tabindex:"-1"},[H("useCrud "),t("a",{class:"header-anchor",href:"#usecrud","aria-hidden":"true"},"#")],-1),Qt=t("p",null,"\u5E94\u7528\u4E8E AvueCrud \u7EC4\u4EF6\u7684\u5FEB\u901F\u589E\u5220\u6539\u67E5",-1),te=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[H("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),ee=ht("",2),ne=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u7C7B\u578B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u8BF4\u660E")])]),t("tbody",null,[t("tr",null,[t("td",null,"crudOption"),t("td",null,"Object"),t("td"),t("td",null,[H("\u589E\u5220\u6539\u67E5\u914D\u7F6E,"),t("a",{href:"#crudoption"},"\u8BE6\u7EC6\u8BF4\u660E")])]),t("tr",null,[t("td",null,"pageOption"),t("td",null,"Object"),t("td"),t("td",null,[H("\u5206\u9875\u914D\u7F6E,"),t("a",{href:"#pageoption"},"\u8BE6\u7EC6\u8BF4\u660E")])]),t("tr",null,[t("td",null,"sortOption"),t("td",null,"Object"),t("td",{"descs:create_time":""}),t("td",null,[H("\u6392\u5E8F\u914D\u7F6E,\u53EF\u9009"),t("code",null,"{['descs'|'ascs']:$prop}")])]),t("tr",null,[t("td",null,"tableLoading"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"\u6570\u636E\u52A0\u8F7D\u72B6\u6001")]),t("tr",null,[t("td",null,"tableOption"),t("td",null,"Object"),t("td",null,"{}"),t("td",null,"\u8868\u683C\u914D\u7F6E\u9879")]),t("tr",null,[t("td",null,"tableData"),t("td",null,"Array"),t("td",null,"[]"),t("td",null,"\u6570\u636E\u5217\u8868")]),t("tr",null,[t("td",null,"dataSelections"),t("td",null,"Array"),t("td",null,"[]"),t("td",null,"\u5DF2\u9009\u62E9\u6570\u636E\u5217\u8868")]),t("tr",null,[t("td",null,"searchForm"),t("td",null,"Object"),t("td",null,"{}"),t("td",null,"\u641C\u7D22\u6761\u4EF6")]),t("tr",null,[t("td",null,"queryForm"),t("td",null,"Object"),t("td",null,"{}"),t("td",null,"\u56FA\u5B9A\u67E5\u8BE2\u6761\u4EF6,\u4E0D\u4F1A\u88AB\u6E05\u7A7A\u91CD\u7F6E")]),t("tr",null,[t("td",null,"formData"),t("td",null,"Object"),t("td",null,"{}"),t("td",null,"\u8868\u5355\u6570\u636E")]),t("tr",null,[t("td",null,"mockData"),t("td",null,"Array"),t("td",null,"[]"),t("td",null,"\u6A21\u62DF\u6570\u636E")]),t("tr",null,[t("td",null,"mockCache"),t("td",null,"String"),t("td",null,'""'),t("td",null,"\u5C06\u5047\u6570\u636E\u5B58\u5728\u7F13\u5B58\u4E2D\u4F7F\u7528\u7684 key")]),t("tr",null,[t("td",null,"getDataList"),t("td",null,"Function"),t("td"),t("td",null,"\u83B7\u53D6\u6570\u636E\u5217\u8868\u65B9\u6CD5,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"handleSave"),t("td",null,"Function"),t("td"),t("td",null,"\u6570\u636E\u6DFB\u52A0\u65B9\u6CD5,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"handleUpdate"),t("td",null,"Function"),t("td"),t("td",null,"\u6570\u636E\u66F4\u65B0\u65B9\u6CD5,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"handleDel"),t("td",null,"Function"),t("td"),t("td",null,"\u5220\u9664\u884C\u65B9\u6CD5,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"batchDel"),t("td",null,"Function"),t("td"),t("td",null,"\u6279\u91CF\u5220\u9664\u65B9\u6CD5,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"searchChange"),t("td",null,"Function"),t("td"),t("td",null,"\u641C\u7D22\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"searchReset"),t("td",null,"Function"),t("td"),t("td",null,"\u641C\u7D22\u91CD\u7F6E\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"selectionChange"),t("td",null,"Function"),t("td"),t("td",null,"\u591A\u9009\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"pageSizeChange"),t("td",null,"Function"),t("td"),t("td",null,"\u5207\u6362\u6BCF\u9875\u6761\u6570\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"pageCurrentChange"),t("td",null,"Function"),t("td"),t("td",null,"\u5207\u6362\u5F53\u524D\u9875\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"sortChange"),t("td",null,"Function"),t("td"),t("td",null,"\u5207\u6362\u6392\u5E8F\u56DE\u8C03,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"beforeOpen"),t("td",null,"Function"),t("td"),t("td",null,"\u6253\u5F00\u8868\u5355\u5F39\u7A97\u524D,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")]),t("tr",null,[t("td",null,"beforeClose"),t("td",null,"Function"),t("td"),t("td",null,"\u5173\u95ED\u8868\u5355\u5F39\u7A97\u524D,\u4F20\u5165\u5219\u8986\u76D6\u5185\u90E8\u5B9E\u73B0")])])],-1),se=ht("",10),re=JSON.parse('{"title":"useCrud","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5","link":"#\u57FA\u7840\u7528\u6CD5","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"CrudOption","slug":"crudoption","link":"#crudoption","children":[]},{"level":2,"title":"PageOption","slug":"pageoption","link":"#pageoption","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"relativePath":"composables/use-crud/index.md"}'),ae={name:"composables/use-crud/index.md"},le=Object.assign(ae,{setup(e){return(s,a)=>(ut(),Bt("div",null,[Zt,Qt,te,Et(Xt),ee,ne,se]))}});export{re as __pageData,le as default};
