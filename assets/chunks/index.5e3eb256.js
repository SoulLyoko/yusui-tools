import{d as A,b as N,g as O,e as j}from"./index.e39bc4dd.js";var W={exports:{}};(function(l,k){(function(i,r){l.exports=r(A)})(N,function(i){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var y=r(i),c={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(d,M){return M==="W"?d+"周":d+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(d,M){var Y=100*d+M;return Y<600?"凌晨":Y<900?"早上":Y<1100?"上午":Y<1300?"中午":Y<1800?"下午":"晚上"}};return y.default.locale(c,null,!0),c})})(W);var P={exports:{}};(function(l,k){(function(i,r){l.exports=r()})(N,function(){var i,r,y=1e3,c=6e4,d=36e5,M=864e5,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,f=2592e6,b=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p={years:u,months:f,days:M,hours:d,minutes:c,seconds:y,milliseconds:1,weeks:6048e5},x=function(n){return n instanceof D},v=function(n,s,t){return new D(n,t,s.$l)},_=function(n){return r.p(n)+"s"},H=function(n){return n<0},$=function(n){return H(n)?Math.ceil(n):Math.floor(n)},w=function(n){return Math.abs(n)},g=function(n,s){return n?H(n)?{negative:!0,format:""+w(n)+s}:{negative:!1,format:""+n+s}:{negative:!1,format:""}},D=function(){function n(t,e,a){var o=this;if(this.$d={},this.$l=a,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),e)return v(t*p[_(e)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(S){o.$d[_(S)]=t[S]}),this.calMilliseconds(),this;if(typeof t=="string"){var h=t.match(b);if(h){var m=h.slice(2).map(function(S){return S!=null?Number(S):0});return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}var s=n.prototype;return s.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(e,a){return e+(t.$d[a]||0)*p[a]},0)},s.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/f),t%=f,this.$d.days=$(t/M),t%=M,this.$d.hours=$(t/d),t%=d,this.$d.minutes=$(t/c),t%=c,this.$d.seconds=$(t/y),t%=y,this.$d.milliseconds=t},s.toISOString=function(){var t=g(this.$d.years,"Y"),e=g(this.$d.months,"M"),a=+this.$d.days||0;this.$d.weeks&&(a+=7*this.$d.weeks);var o=g(a,"D"),h=g(this.$d.hours,"H"),m=g(this.$d.minutes,"M"),S=this.$d.seconds||0;this.$d.milliseconds&&(S+=this.$d.milliseconds/1e3);var T=g(S,"S"),E=t.negative||e.negative||o.negative||h.negative||m.negative||T.negative,F=h.format||m.format||T.format?"T":"",L=(E?"-":"")+"P"+t.format+e.format+o.format+F+h.format+m.format+T.format;return L==="P"||L==="-P"?"P0D":L},s.toJSON=function(){return this.toISOString()},s.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",a={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return e.replace(Y,function(o,h){return h||String(a[o])})},s.as=function(t){return this.$ms/p[_(t)]},s.get=function(t){var e=this.$ms,a=_(t);return a==="milliseconds"?e%=1e3:e=a==="weeks"?$(e/p[a]):this.$d[a],e===0?0:e},s.add=function(t,e,a){var o;return o=e?t*p[_(e)]:x(t)?t.$ms:v(t,this).$ms,v(this.$ms+o*(a?-1:1),this)},s.subtract=function(t,e){return this.add(t,e,!0)},s.locale=function(t){var e=this.clone();return e.$l=t,e},s.clone=function(){return v(this.$ms,this)},s.humanize=function(t){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},s.valueOf=function(){return this.asMilliseconds()},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},n}();return function(n,s,t){i=t,r=t().$utils(),t.duration=function(o,h){var m=t.locale();return v(o,{$l:m},h)},t.isDuration=x;var e=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(o,h){return x(o)&&(o=o.asMilliseconds()),e.bind(this)(o,h)},s.prototype.subtract=function(o,h){return x(o)&&(o=o.asMilliseconds()),a.bind(this)(o,h)}}})})(P);var B=P.exports;const C=O(B);var z={exports:{}};(function(l,k){(function(i,r){l.exports=r()})(N,function(){return function(i,r,y){i=i||{};var c=r.prototype,d={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function M(u,f,b,p){return c.fromToBase(u,f,b,p)}y.en.relativeTime=d,c.fromToBase=function(u,f,b,p,x){for(var v,_,H,$=b.$locale().relativeTime||d,w=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],g=w.length,D=0;D<g;D+=1){var n=w[D];n.d&&(v=p?y(u).diff(b,n.d,!0):b.diff(u,n.d,!0));var s=(i.rounding||Math.round)(Math.abs(v));if(H=v>0,s<=n.r||!n.r){s<=1&&D>0&&(n=w[D-1]);var t=$[n.l];x&&(s=x(""+s)),_=typeof t=="string"?t.replace("%d",s):t(s,f,n.l,H);break}}if(f)return _;var e=H?$.future:$.past;return typeof e=="function"?e(_):e.replace("%s",_)},c.to=function(u,f){return M(u,f,this,!0)},c.from=function(u,f){return M(u,f,this)};var Y=function(u){return u.$u?y.utc():y()};c.toNow=function(u){return this.to(Y(this),u)},c.fromNow=function(u){return this.from(Y(this),u)}}})})(z);var I=z.exports;const G=O(I);j.extend(G);j.extend(C);function Z(l,k){if(l=Number(l),!l||Number.isNaN(l))return"";const i=j.duration(l);if(k){let r="";return i.years()&&(r+="Y年"),i.months()&&(r+="M个月"),i.days()&&(r+="D天"),i.hours()&&(r+="H小时"),i.minutes()&&(r+="m分钟"),i.seconds()&&(r+="s秒"),r?i.format(r):""}else return i.locale("zh-cn").humanize()}export{Z as d};
