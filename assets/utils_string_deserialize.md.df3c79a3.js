import{_ as a,h as e,i as t,O as s}from"./chunks/framework.6c76c79f.js";const l=JSON.parse('{"title":"deserialize","description":"","frontmatter":{},"headers":[],"relativePath":"utils/string/deserialize.md"}'),o={name:"utils/string/deserialize.md"},r=s(`<h1 id="deserialize" tabindex="-1">deserialize <a class="header-anchor" href="#deserialize" aria-label="Permalink to &quot;deserialize&quot;">​</a></h1><p>url 反序列化</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">deserialize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a=1&amp;b=2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { a: &quot;1&quot;, b: &quot;2&quot; }</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>被反序列化的 url</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>(Object): 序列化后的对象</p>`,8),n=[r];function i(c,p,h,_,u,b){return e(),t("div",null,n)}const d=a(o,[["render",i]]),y=Object.freeze(Object.defineProperty({__proto__:null,__pageData:l,default:d},Symbol.toStringTag,{value:"Module"}));export{y as _,l as __pageData,d as default};