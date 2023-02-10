import{_ as s,o as a,c as n,j as l}from"./app.bd969aff.js";const A=JSON.parse('{"title":"filterObj","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}],"relativePath":"utils/object/filterObj.md"}'),t={name:"utils/object/filterObj.md"},e=l(`<h1 id="filterobj" tabindex="-1">filterObj <a class="header-anchor" href="#filterobj" aria-hidden="true">#</a></h1><p>过滤对象值和字段</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> exampleData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { a: 1, b: &quot;b&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { a: 1, b: &quot;b&quot;, c: undefined, d: null }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">filterObj</span><span style="color:#A6ACCD;">(exampleData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {}</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>obj</td><td>被过滤对象</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>values</td><td>被过滤的值，全等匹配</td><td>Array</td><td>-</td><td>[undefined, null]</td></tr><tr><td>fields</td><td>被过滤字段，模糊匹配</td><td>Array</td><td>-</td><td>[]</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>(Object): 过滤后的对象</p>`,8),o=[e];function p(r,c,d,D,i,y){return a(),n("div",null,o)}const C=s(t,[["render",p]]);export{A as __pageData,C as default};