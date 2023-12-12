import{G as b,j as D,d as X,g as P,A as Z,y as s,a4 as h,h as le,P as C}from"./framework.9dEYo5Bo.js";function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function de(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function fe(e,t){if(e==null)return{};var n=de(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function se(e,t){return ve(e)||ge(e,t)||me(e,t)||he()}function ve(e){if(Array.isArray(e))return e}function ge(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,a=!1,i=void 0;try{for(var o=e[Symbol.iterator](),f;!(r=(f=o.next()).done)&&(n.push(f.value),!(t&&n.length===t));r=!0);}catch(l){a=!0,i=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(a)throw i}}return n}}function me(e,t){if(e){if(typeof e=="string")return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function he(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(a,i){return i(a)},r)}}function p(e){return function t(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var o=arguments.length,f=new Array(o),l=0;l<o;l++)f[l]=arguments[l];return t.apply(n,[].concat(a,f))}}}function M(e){return{}.toString.call(e).includes("Object")}function Oe(e){return!Object.keys(e).length}function O(e){return typeof e=="function"}function be(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function we(e,t){return M(t)||g("changeType"),Object.keys(t).some(function(n){return!be(e,n)})&&g("changeField"),t}function Se(e){O(e)||g("selectorType")}function je(e){O(e)||M(e)||g("handlerType"),M(e)&&Object.values(e).some(function(t){return!O(t)})&&g("handlersType")}function Pe(e){e||g("initialIsRequired"),M(e)||g("initialType"),Oe(e)&&g("initialContent")}function Me(e,t){throw new Error(e[t]||e.default)}var _e={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},g=p(Me)(_e),j={changes:we,selector:Se,handler:je,initial:Pe};function Ee(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};j.initial(e),j.handler(t);var n={current:e},r=p(Le)(n,t),a=p($e)(n),i=p(j.changes)(e),o=p(Ie)(n);function f(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(c){return c};return j.selector(u),u(n.current)}function l(u){pe(r,a,i,o)(u)}return[f,l]}function Ie(e,t){return O(t)?t(e.current):t}function $e(e,t){return e.current=H(H({},e.current),t),t}function Le(e,t,n){return O(t)?t(e.current):Object.keys(n).forEach(function(r){var a;return(a=t[r])===null||a===void 0?void 0:a.call(t,e.current[r])}),n}var Te={create:Ee},Ve={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function De(e){return function t(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return a.length>=e.length?e.apply(this,a):function(){for(var o=arguments.length,f=new Array(o),l=0;l<o;l++)f[l]=arguments[l];return t.apply(n,[].concat(a,f))}}}function Ce(e){return{}.toString.call(e).includes("Object")}function Ae(e){return e||F("configIsRequired"),Ce(e)||F("configType"),e.urls?(xe(),{paths:{vs:e.urls.monacoBase}}):e}function xe(){console.warn(k.deprecation)}function Ne(e,t){throw new Error(e[t]||e.default)}var k={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},F=De(Ne)(k),Ue={config:Ae},qe=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(a){return n.reduceRight(function(i,o){return o(i)},a)}};function ee(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ee(e[n],t[n]))}),U(U({},e),t)}var ze={type:"cancelation",msg:"operation is manually canceled"};function I(e){var t=!1,n=new Promise(function(r,a){e.then(function(i){return t?a(ze):r(i)}),e.catch(a)});return n.cancel=function(){return t=!0},n}var He=Te.create({config:Ve,isInitialized:!1,resolve:null,reject:null,monaco:null}),te=se(He,2),w=te[0],_=te[1];function Fe(e){var t=Ue.config(e),n=t.monaco,r=fe(t,["monaco"]);_(function(a){return{config:ee(a.config,r),monaco:n}})}function We(){var e=w(function(t){var n=t.monaco,r=t.isInitialized,a=t.resolve;return{monaco:n,isInitialized:r,resolve:a}});if(!e.isInitialized){if(_({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),I($);if(window.monaco&&window.monaco.editor)return ne(window.monaco),e.resolve(window.monaco),I($);qe(Be,Ke)(Re)}return I($)}function Be(e){return document.body.appendChild(e)}function Ge(e){var t=document.createElement("script");return e&&(t.src=e),t}function Ke(e){var t=w(function(r){var a=r.config,i=r.reject;return{config:a,reject:i}}),n=Ge("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Re(){var e=w(function(n){var r=n.config,a=n.resolve,i=n.reject;return{config:r,resolve:a,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){ne(n),e.resolve(n)},function(n){e.reject(n)})}function ne(e){w().monaco||_({monaco:e})}function Ye(){return w(function(e){var t=e.monaco;return t})}var $=new Promise(function(e,t){return _({resolve:e,reject:t})}),V={config:Fe,init:We,__getMonacoInstance:Ye},Je=Object.defineProperty,Qe=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))Ze.call(t,n)&&B(e,n,t[n]);if(W)for(var n of W(t))ke.call(t,n)&&B(e,n,t[n]);return e},et=(e,t)=>Qe(e,Xe(t));const T={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function re(e,t){const n=P(()=>{const{width:a,height:i}=e;return et(L({},T.wrapper),{width:a,height:i})}),r=P(()=>L(L({},T.fullWidth),!t.value&&T.hide));return{wrapperStyle:n,containerStyle:r}}function ae(){const e=b(V.__getMonacoInstance());let t;return D(()=>{e.value||(t=V.init(),t.then(r=>e.value=r).catch(r=>{(r==null?void 0:r.type)!=="cancelation"&&console.error("Monaco initialization error:",r)}))}),{monacoRef:e,unload:()=>t==null?void 0:t.cancel()}}function ie(e){return typeof e=="function"?e():e}function oe(e){return e===void 0}function y(e,t,n,r){return tt(e,r)||nt(e,t,n,r)}function tt(e,t){return e.editor.getModel(ue(e,t))}function nt(e,t,n,r){return e.editor.createModel(t,n,r?ue(e,r):void 0)}function ue(e,t){return e.Uri.parse(t)}var rt=Object.defineProperty,G=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))at.call(t,n)&&K(e,n,t[n]);if(G)for(var n of G(t))it.call(t,n)&&K(e,n,t[n]);return e};const ut={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var R=X({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"vs"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const n=new Map,r=b(null),{monacoRef:a,unload:i}=ae(),{editorRef:o}=lt(t,e,a,r),{disposeValidator:f}=ct(t,e,a,o),l=P(()=>!!a.value&&!!o.value),{wrapperStyle:u,containerStyle:c}=re(e,l);return Z(()=>{var d,v;(d=f.value)==null||d.call(f),o.value?((v=o.value.getModel())==null||v.dispose(),o.value.dispose()):i()}),s(()=>e.path,(d,v)=>{const m=y(a.value,e.value||e.defaultValue||"",e.language||e.defaultLanguage||"",d||e.defaultPath||"");m!==o.value.getModel()&&(e.saveViewState&&n.set(v,o.value.saveViewState()),o.value.setModel(m),e.saveViewState&&o.value.restoreViewState(n.get(d)))}),s(()=>e.value,d=>{o.value&&o.value.getValue()!==d&&o.value.setValue(d)}),s(()=>e.options,d=>o.value&&o.value.updateOptions(d),{deep:!0}),s(()=>e.theme,d=>a.value&&a.value.editor.setTheme(d)),s(()=>e.language,d=>l.value&&a.value.editor.setModelLanguage(o.value.getModel(),d)),s(()=>e.line,d=>{o.value&&!oe(d)&&o.value.revealLine(d)}),{containerRef:r,isEditorReady:l,wrapperStyle:u,containerStyle:c}},render(){const{$slots:e,isEditorReady:t,wrapperStyle:n,containerStyle:r,className:a}=this;return h("div",{style:n},[!t&&h("div",{style:ut},e.default?ie(e.default):"loading..."),h("div",{ref:"containerRef",key:"monaco_editor_container",style:r,class:a})])}});function lt({emit:e},t,n,r){const a=b(null);D(()=>{const o=s(n,()=>{r.value&&n.value&&(C(()=>o()),i())},{immediate:!0})});function i(){var o;if(!r.value||!n.value||a.value)return;e("beforeMount",n.value);const f=t.path||t.defaultPath,l=y(n.value,t.value||t.defaultValue||"",t.language||t.defaultLanguage||"",f||"");a.value=n.value.editor.create(r.value,ot({model:l,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(o=a.value)==null||o.onDidChangeModelContent(u=>{const c=a.value.getValue();c!==t.value&&(e("update:value",c),e("change",c,u))}),a.value&&!oe(t.line)&&a.value.revealLine(t.line),e("mount",a.value,n.value)}return{editorRef:a}}function ct({emit:e},t,n,r){const a=le(null),i=s([n,r],()=>{if(n.value&&r.value){C(()=>i());const o=n.value.editor.onDidChangeMarkers(f=>{var l,u;const c=(u=(l=r.value)==null?void 0:l.getModel())==null?void 0:u.uri;if(c&&f.find(v=>v.path===c.path)){const v=n.value.editor.getModelMarkers({resource:c});e("validate",v)}});a.value=()=>o==null?void 0:o.dispose()}});return{disposeValidator:a}}var dt=Object.defineProperty,Y=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,J=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vt=(e,t)=>{for(var n in t||(t={}))ft.call(t,n)&&J(e,n,t[n]);if(Y)for(var n of Y(t))st.call(t,n)&&J(e,n,t[n]);return e};const gt={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var Q=X({name:"VueMonacoDiffEditor",props:{original:String,modified:String,language:String,originalLanguage:String,modifiedLanguage:String,originalModelPath:String,modifiedModelPath:String,theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},setup(e,t){const n=b(null),{monacoRef:r,unload:a}=ae(),{diffEditorRef:i}=mt(t,e,r,n),o=P(()=>!!r.value&&!!i.value),{wrapperStyle:f,containerStyle:l}=re(e,o);return Z(()=>{var u,c,d,v,m,A,E,x;!r.value&&a();const S=(c=(u=i.value)==null?void 0:u.getModel)==null?void 0:c.call(u);(v=(d=S==null?void 0:S.original)==null?void 0:d.dispose)==null||v.call(d),(A=(m=S==null?void 0:S.modified)==null?void 0:m.dispose)==null||A.call(m),(x=(E=i.value)==null?void 0:E.dispose)==null||x.call(E)}),s(()=>e.originalModelPath,()=>{if(!r.value||!i.value)return;const u=i.value.getOriginalEditor(),c=y(r.value,e.original||"",e.originalLanguage||e.language||"text",e.originalModelPath||"");c!==u.getModel()&&u.setModel(c)}),s(()=>e.modifiedModelPath,()=>{if(!r.value||!i.value)return;const u=i.value.getModifiedEditor(),c=y(r.value,e.modified||"",e.modifiedLanguage||e.language||"text",e.modifiedModelPath||"");c!==u.getModel()&&u.setModel(c)}),s(()=>e.modified,()=>{if(!o.value)return;const u=i.value.getModifiedEditor();u.getOption(r.value.editor.EditorOption.readOnly)?u.setValue(e.modified||""):e.modified!==u.getValue()&&(u.executeEdits("",[{range:u.getModel().getFullModelRange(),text:e.modified||"",forceMoveMarkers:!0}]),u.pushUndoStop())}),s(()=>e.original,()=>{var u,c;(c=(u=i.value)==null?void 0:u.getModel())==null||c.original.setValue((e==null?void 0:e.original)||"")}),s(()=>[e.language,e.originalLanguage,e.modifiedLanguage],()=>{if(!o.value)return;const{original:u,modified:c}=i.value.getModel();r.value.editor.setModelLanguage(u,e.originalLanguage||e.language||"text"),r.value.editor.setModelLanguage(c,e.originalLanguage||e.language||"text")}),s(()=>e.theme,()=>{var u;return(u=r.value)==null?void 0:u.editor.setTheme(e.theme)}),s(()=>e.options,()=>{var u;return(u=i.value)==null?void 0:u.updateOptions(e.options)},{deep:!0}),{containerRef:n,isDiffEditorReady:o,wrapperStyle:f,containerStyle:l}},render(){const{$slots:e,isDiffEditorReady:t,wrapperStyle:n,containerStyle:r,className:a}=this;return h("div",{style:n},[!t&&h("div",{style:gt},e.default?ie(e.default):"loading..."),h("div",{ref:"containerRef",key:"monaco_diff_editor_container",style:r,class:a})])}});function mt({emit:e},t,n,r){const a=b(null);D(()=>{const o=s(n,()=>{r.value&&n.value&&(C(()=>o()),i())},{immediate:!0})});function i(){var o;if(!r.value||!n.value||a.value)return;e("beforeMount",n.value),a.value=n.value.editor.createDiffEditor(r.value,vt({automaticLayout:!0,autoIndent:"brackets",theme:t.theme,formatOnPaste:!0,formatOnType:!0},t.options));const f=y(n.value,t.original||"",t.originalLanguage||t.language||"text",t.originalModelPath||""),l=y(n.value,t.modified||"",t.modifiedLanguage||t.language||"text",t.modifiedModelPath||"");(o=a.value)==null||o.setModel({original:f,modified:l}),e("mount",a.value,n.value)}return{diffEditorRef:a}}function yt(e,t){t&&V.config(t),e.component(R.name,R),e.component(Q.name,Q)}export{Q as DiffEditor,R as Editor,Q as VueMonacoDiffEditor,R as VueMonacoEditor,R as default,yt as install,V as loader,ae as useMonaco};
