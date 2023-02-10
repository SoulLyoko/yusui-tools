import{_ as s,o as a,c as n,j as l}from"./app.bd969aff.js";const F=JSON.parse('{"title":"getDataType","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"relativePath":"utils/object/getDataType.md"}'),p={name:"utils/object/getDataType.md"},o=l(`<h1 id="getdatatype" tabindex="-1">getDataType <a class="header-anchor" href="#getdatatype" aria-hidden="true">#</a></h1><p>获取数据类型</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Boolean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Null&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Undefined&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Number&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;String&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Symbol&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Array&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Object&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Function&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;Date&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getDataType</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;RegExp&quot;</span></span>
<span class="line"></span></code></pre></div>`,4),t=[o];function e(c,r,y,A,D,C){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{F as __pageData,u as default};