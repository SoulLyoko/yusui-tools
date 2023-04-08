import{_ as t,h as a,i as s,O as o}from"./chunks/framework.6c76c79f.js";const e=JSON.parse('{"title":"enumToDic","description":"","frontmatter":{},"headers":[],"relativePath":"utils/tool/enumToDic.md"}'),n={name:"utils/tool/enumToDic.md"},l=o(`<h1 id="enumtodic" tabindex="-1">enumToDic <a class="header-anchor" href="#enumtodic" aria-label="Permalink to &quot;enumToDic&quot;">​</a></h1><p>将 enum 转换为字典</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">失败</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">成功</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dic </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">enumToDic</span><span style="color:#A6ACCD;">(Status)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [{ label: &quot;失败&quot;, value: 0 },{ label: &quot;成功&quot;, value: 1 }]</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>enum</td><td>需要转换的 enum</td><td>enum</td><td>-</td><td></td></tr><tr><td>props</td><td>参数配置</td><td>Props</td><td>-</td><td></td></tr></tbody></table><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>作为 label 的键名</td><td>string</td><td>-</td><td>&quot;label&quot;</td></tr><tr><td>value</td><td>作为 value 的键名</td><td>string</td><td>-</td><td>&quot;value&quot;</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>(Array): 返回字典数组</p>`,10),p=[l];function r(d,i,h,u,D,y){return a(),s("div",null,p)}const c=t(n,[["render",r]]),_=Object.freeze(Object.defineProperty({__proto__:null,__pageData:e,default:c},Symbol.toStringTag,{value:"Module"}));export{_,e as __pageData,c as default};
