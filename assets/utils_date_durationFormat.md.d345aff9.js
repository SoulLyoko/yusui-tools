import{_ as a,o as t,c as s,j as n}from"./app.bd969aff.js";const C=JSON.parse('{"title":"durationFormat","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}],"relativePath":"utils/date/durationFormat.md"}'),e={name:"utils/date/durationFormat.md"},o=n(`<h1 id="durationformat" tabindex="-1">durationFormat <a class="header-anchor" href="#durationformat" aria-hidden="true">#</a></h1><p>时长格式化</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> duration </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">337736260</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// ms</span></span>
<span class="line"><span style="color:#82AAFF;">durationFormat</span><span style="color:#A6ACCD;">(duration)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 4天</span></span>
<span class="line"><span style="color:#82AAFF;">durationFormat</span><span style="color:#A6ACCD;">(duration</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 03天21小时48分钟56秒</span></span>
<span class="line"><span style="color:#82AAFF;">durationFormat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">999</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 小于1000ms返回空字符串</span></span>
<span class="line"></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>duration</td><td>需要格式化的时长，单位 ms</td><td>Number|String</td><td>-</td><td>-</td></tr><tr><td>detail</td><td>是否显示精确的时长</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h2><p>(String): 格式化后的时长</p>`,8),l=[o];function r(p,d,c,i,h,y){return t(),s("div",null,l)}const u=a(e,[["render",r]]);export{C as __pageData,u as default};