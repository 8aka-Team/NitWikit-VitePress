import{_ as s,c as a,a5 as n,o as t}from"./chunks/framework.O9ad3XaM.js";const g=JSON.parse('{"title":"标题","description":"","frontmatter":{"title":"标题","sidebar_position":1},"headers":[],"relativePath":"nitwikit/docs/contribution/writing-specification/title.md","filePath":"nitwikit/docs/contribution/writing-specification/title.md","lastUpdated":1727693356000}'),l={name:"nitwikit/docs/contribution/writing-specification/title.md"};function e(h,i,p,o,d,k){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h1><h2 id="层级" tabindex="-1">层级 <a class="header-anchor" href="#层级" aria-label="Permalink to &quot;层级&quot;">​</a></h2><p>标题分为四级。</p><ul><li>一级标题：文章的标题</li><li>二级标题：文章主要部分的大标题</li><li>三级标题：二级标题下面一级的小标题</li><li>四级标题：三级标题下面某一方面的小标题</li></ul><p>下面是示例。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 一级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 二级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 四级标题</span></span></code></pre></div><h2 id="原则" tabindex="-1">原则 <a class="header-anchor" href="#原则" aria-label="Permalink to &quot;原则&quot;">​</a></h2><p>(1)一级标题下，不能直接出现三级标题。</p><p>示例：下面的文章结构，缺少二级标题。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 一级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 三级标题</span></span></code></pre></div><p>(2)标题要避免孤立编号(即同级标题只有一个)。</p><p>示例：下面的文章结构，<code>二级标题 A</code>只包含一个三级标题，完全可以省略<code>三级标题 A</code>。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 二级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 三级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 二级标题 B</span></span></code></pre></div><p>(3)下级标题不重复上一级标题的名字。</p><p>示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 概述</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 概述</span></span></code></pre></div><p>(4)谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。</p><p>如果三级标题下有并列性的内容，建议只使用项目列表(Item list)。</p><p>示例：下面的结构二要好于结构一。结构一适用的场景，主要是较长篇幅的内容。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">结构一</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 四级标题 A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 四级标题 B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 四级标题 C</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">结构二</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 三级标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**(1)A**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**(2)B**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**(3)C**</span></span></code></pre></div>`,20)]))}const r=s(l,[["render",e]]);export{g as __pageData,r as default};
