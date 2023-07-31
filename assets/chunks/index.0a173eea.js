import{C as E,d as Y,g as _,H as J,z as v,a9 as w,j as Q,h as X,E as U}from"./framework.25a4be6c.js";function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(r){Z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ee(e,t){if(e==null)return{};var n=k(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function te(e,t){return ne(e)||re(e,t)||ae(e,t)||oe()}function ne(e){if(Array.isArray(e))return e}function re(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,o=void 0;try{for(var i=e[Symbol.iterator](),l;!(r=(l=i.next()).done)&&(n.push(l.value),!(t&&n.length===t));r=!0);}catch(u){a=!0,o=u}finally{try{!r&&i.return!=null&&i.return()}finally{if(a)throw o}}return n}}function ae(e,t){if(e){if(typeof e=="string")return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}}function T(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ue(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(a,o){return o(a)},r)}}function g(e){return function t(){for(var n=this,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return a.length>=e.length?e.apply(this,a):function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return t.apply(n,[].concat(a,l))}}}function b(e){return{}.toString.call(e).includes("Object")}function ce(e){return!Object.keys(e).length}function h(e){return typeof e=="function"}function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function se(e,t){return b(t)||p("changeType"),Object.keys(t).some(function(n){return!le(e,n)})&&p("changeField"),t}function fe(e){h(e)||p("selectorType")}function de(e){h(e)||b(e)||p("handlerType"),b(e)&&Object.values(e).some(function(t){return!h(t)})&&p("handlersType")}function ve(e){e||p("initialIsRequired"),b(e)||p("initialType"),ce(e)&&p("initialContent")}function pe(e,t){throw new Error(e[t]||e.default)}var ge={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},p=g(pe)(ge),y={changes:se,selector:fe,handler:de,initial:ve};function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};y.initial(e),y.handler(t);var n={current:e},r=g(be)(n,t),a=g(ye)(n),o=g(y.changes)(e),i=g(me)(n);function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(f){return f};return y.selector(s),s(n.current)}function u(s){ue(r,a,o,i)(s)}return[l,u]}function me(e,t){return h(t)?t(e.current):t}function ye(e,t){return e.current=V(V({},e.current),t),t}function be(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(r){var a;return(a=t[r])===null||a===void 0?void 0:a.call(t,e.current[r])}),n}var Oe={create:he},we={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function je(e){return function t(){for(var n=this,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return a.length>=e.length?e.apply(this,a):function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];return t.apply(n,[].concat(a,l))}}}function Se(e){return{}.toString.call(e).includes("Object")}function Pe(e){return e||D("configIsRequired"),Se(e)||D("configType"),e.urls?(Me(),{paths:{vs:e.urls.monacoBase}}):e}function Me(){console.warn(x.deprecation)}function _e(e,t){throw new Error(e[t]||e.default)}var x={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},D=je(_e)(x),Ee={config:Pe},Ie=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(a){return n.reduceRight(function(o,i){return i(o)},a)}};function W(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],W(e[n],t[n]))}),C(C({},e),t)}var $e={type:"cancelation",msg:"operation is manually canceled"};function j(e){var t=!1,n=new Promise(function(r,a){e.then(function(o){return t?a($e):r(o)}),e.catch(a)});return n.cancel=function(){return t=!0},n}var Ce=Oe.create({config:we,isInitialized:!1,resolve:null,reject:null,monaco:null}),F=te(Ce,2),m=F[0],O=F[1];function Te(e){var t=Ee.config(e),n=t.monaco,r=ee(t,["monaco"]);O(function(a){return{config:W(a.config,r),monaco:n}})}function Ae(){var e=m(function(t){var n=t.monaco,r=t.isInitialized,a=t.resolve;return{monaco:n,isInitialized:r,resolve:a}});if(!e.isInitialized){if(O({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),j(S);if(window.monaco&&window.monaco.editor)return B(window.monaco),e.resolve(window.monaco),j(S);Ie(Ve,Le)(Ne)}return j(S)}function Ve(e){return document.body.appendChild(e)}function De(e){var t=document.createElement("script");return e&&(t.src=e),t}function Le(e){var t=m(function(r){var a=r.config,o=r.reject;return{config:a,reject:o}}),n=De("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Ne(){var e=m(function(n){var r=n.config,a=n.resolve,o=n.reject;return{config:r,resolve:a,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){B(n),e.resolve(n)},function(n){e.reject(n)})}function B(e){m().monaco||O({monaco:e})}function qe(){return m(function(e){var t=e.monaco;return t})}var S=new Promise(function(e,t){return O({resolve:e,reject:t})}),R={config:Te,init:Ae,__getMonacoInstance:qe},ze=Object.defineProperty,He=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))xe.call(t,n)&&N(e,n,t[n]);if(L)for(var n of L(t))We.call(t,n)&&N(e,n,t[n]);return e},Fe=(e,t)=>He(e,Ue(t));const M={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Be(e,t){const n=_(()=>{const{width:a,height:o}=e;return Fe(P({},M.wrapper),{width:a,height:o})}),r=_(()=>P(P({},M.fullWidth),!t.value&&M.hide));return{wrapperStyle:n,containerStyle:r}}function Re(){const e=E(null),t=R.init(),n=()=>t.cancel();return t.then(r=>e.value=r).catch(r=>{(r==null?void 0:r.type)!=="cancelation"&&console.error("Monaco initialization error:",r)}),{monacoRef:e,unload:n}}function Ke(e){return typeof e=="function"?e():e}function Ge(e){return e===void 0}function K(e,t,n,r){return Ye(e,r)||Je(e,t,n,r)}function Ye(e,t){return e.editor.getModel(G(e,t))}function Je(e,t,n,r){return e.editor.createModel(t,n,r?G(e,r):void 0)}function G(e,t){return e.Uri.parse(t)}var Qe=Object.defineProperty,q=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ke=(e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&z(e,n,t[n]);if(q)for(var n of q(t))Ze.call(t,n)&&z(e,n,t[n]);return e};const et={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var H=Y({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"light"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=E(null),{monacoRef:a,unload:o}=Re(),{editorRef:i}=tt(t,e,a,r),{disposeValidator:l}=nt(t,e,a,i),u=_(()=>!!a.value&&!!i.value),{wrapperStyle:s,containerStyle:f}=Be(e,u);return J(()=>{var c,d;(c=l.value)==null||c.call(l),i.value?((d=i.value.getModel())==null||d.dispose(),i.value.dispose()):o()}),v(()=>e.path,(c,d)=>{const I=K(a.value,e.value||e.defaultValue,e.language||e.defaultLanguage,c);I!==i.value.getModel()&&(e.saveViewState&&n.set(d,i.value.saveViewState()),i.value.setModel(I),e.saveViewState&&i.value.restoreViewState(n.get(c)))}),v(()=>e.value,c=>{i.value&&i.value.getValue()!==c&&i.value.setValue(c)}),v(()=>e.options,c=>i.value&&i.value.updateOptions(c),{deep:!0}),v(()=>e.theme,c=>a.value&&a.value.editor.setTheme(c)),v(()=>e.language,c=>u.value&&a.value.editor.setModelLanguage(i.value.getModel(),c)),v(()=>e.line,c=>{i.value&&!Ge(c)&&i.value.revealLine(c)}),{containerRef:r,isEditorReady:u,wrapperStyle:s,containerStyle:f}},render(){const{$slots:e,isEditorReady:t,wrapperStyle:n,containerStyle:r,className:a}=this;return w("div",{style:n},[!t&&w("div",{style:et},e.default?Ke(e.default):"loading..."),w("div",{ref:"containerRef",key:"monaco_editor_container",style:r,class:a})])}});function tt({emit:e},t,n,r){const a=E(null);Q(()=>{const i=v(n,()=>{r.value&&n.value&&(U(()=>i()),o())},{immediate:!0})});function o(){var i;if(!r.value||!n.value||a.value)return;e("beforeMount",n.value);const l=t.path||t.defaultPath,u=K(n.value,t.value||t.defaultValue,t.language||t.defaultLanguage,l);a.value=n.value.editor.create(r.value,ke({model:u,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(i=a.value)==null||i.onDidChangeModelContent(s=>{const f=a.value.getValue();f!==t.value&&(e("update:value",f),e("change",f,s))}),e("mount",a.value,n.value)}return{editorRef:a}}function nt({emit:e},t,n,r){const a=X(null),o=v([n,r],()=>{if(n.value&&r.value){U(()=>o());const i=n.value.editor.onDidChangeMarkers(l=>{var u,s;const f=(s=(u=r.value)==null?void 0:u.getModel())==null?void 0:s.uri;if(f&&l.find(d=>d.path===f.path)){const d=n.value.editor.getModelMarkers({resource:f});e("validate",d)}});a.value=()=>i==null?void 0:i.dispose()}});return{disposeValidator:a}}function at(e,t){t&&R.config(t),e.component(H.name,H)}export{H as default,at as install,R as loader,Re as useMonaco};
