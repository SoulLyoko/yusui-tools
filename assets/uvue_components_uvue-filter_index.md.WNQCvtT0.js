import{_ as s,c as i,o as a,R as t}from"./chunks/framework.9dEYo5Bo.js";const o=JSON.parse('{"title":"uvue-filter 过滤器组件","description":"","frontmatter":{},"headers":[],"relativePath":"uvue/components/uvue-filter/index.md","filePath":"uvue/components/uvue-filter/index.md"}'),n={name:"uvue/components/uvue-filter/index.md"},l=t(`<h1 id="uvue-filter-过滤器组件" tabindex="-1">uvue-filter 过滤器组件 <a class="header-anchor" href="#uvue-filter-过滤器组件" aria-label="Permalink to &quot;uvue-filter 过滤器组件&quot;">​</a></h1><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      filterForm: {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      filterOption: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;排序&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            prop: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sort&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            options: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;综合排序&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;销量优先&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sales&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;距离优先&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;distance&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;速度优先&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;speed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;评分优先&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;score&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;速度&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            prop: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;speed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            options: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;全部&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;30分钟内&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;40分钟内&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;50分钟内&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;60分钟内&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 单独使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uvue-filter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    v-model:filter-form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;filterForm&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    :option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;filterOption&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- 在uvue-crud中使用 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uvue-list</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model:filter-form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;filterForm&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;filterOption&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>option</td><td>过滤器配置，见下方说明</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>filterForm.sync</td><td>过滤器绑定值</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="option" tabindex="-1">Option <a class="header-anchor" href="#option" aria-label="Permalink to &quot;Option&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>u-dropdown</code> 的所有属性</td><td><a href="https://uviewui.com/components/dropdown.html#dropdown-props" target="_blank" rel="noreferrer">官方文档</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>items</td><td>下拉菜单项，即<code>u-dropdown-item</code>数组，见下方说明</td><td>Array</td><td>-</td><td>-</td></tr></tbody></table><h2 id="filter-items" tabindex="-1">Filter-items <a class="header-anchor" href="#filter-items" aria-label="Permalink to &quot;Filter-items&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>u-dropdown-item</code> 的所有属性</td><td><a href="https://uviewui.com/components/dropdown.html#dropdown-item-props" target="_blank" rel="noreferrer">官方文档</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>title</td><td>过滤项标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>prop</td><td>过滤项的属性名</td><td>String</td><td>-</td><td>-</td></tr><tr><td>dictData</td><td>选项字典数据</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>options</td><td>选项字典数据,同 dictData,两者选其一即可</td><td>Array</td><td>-</td><td>-</td></tr><tr><td>dictOption</td><td>字典配置，见下方说明</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>multiple</td><td>是否多选选项</td><td>Boolean</td><td>true/false</td><td>-</td></tr><tr><td>transform</td><td>多选时是否将数组转为逗号分隔的字符串</td><td>Boolean</td><td>true/false</td><td>-</td></tr><tr><td>cascader</td><td>是否级联选项（仅支持二级）</td><td>Boolean</td><td>true/false</td><td>-</td></tr></tbody></table><h2 id="dictoption" tabindex="-1">DictOption <a class="header-anchor" href="#dictoption" aria-label="Permalink to &quot;DictOption&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>字典名称属性值</td><td>String</td><td>-</td><td>label</td></tr><tr><td>value</td><td>字典值属性值</td><td>String</td><td>-</td><td>value</td></tr><tr><td>children</td><td>子字典属性值</td><td>String</td><td>-</td><td>children</td></tr><tr><td>res</td><td>dictData 为 Promise 时返回的数据格式</td><td>String</td><td>-</td><td>res.data</td></tr></tbody></table><ul><li>当 cascader:true 时，options 的结构应该如下：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,13),h=[l];function p(k,e,E,d,r,g){return a(),i("div",null,h)}const c=s(n,[["render",p]]);export{o as __pageData,c as default};
