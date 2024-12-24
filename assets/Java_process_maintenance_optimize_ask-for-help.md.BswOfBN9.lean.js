import{_ as t,c as s,a5 as p,G as o,B as i,o as r}from"./chunks/framework.O9ad3XaM.js";const n="/assets/spark_start.DrXY4V4E.png",l="/assets/spark_stop.Bk1uvdIy.png",u=JSON.parse('{"title":"怎么让大佬帮我性能分析","description":"","frontmatter":{"title":"怎么让大佬帮我性能分析","sidebar_position":7},"headers":[],"relativePath":"Java/process/maintenance/optimize/ask-for-help.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/ask-for-help.md","lastUpdated":1727754229000}'),c={name:"Java/process/maintenance/optimize/ask-for-help.md"};function d(m,a,h,k,g,_){const e=i("nw-image-viewer");return r(),s("div",null,[a[0]||(a[0]=p('<h1 id="怎么让大佬帮我性能分析" tabindex="-1">怎么让大佬帮我性能分析 <a class="header-anchor" href="#怎么让大佬帮我性能分析" aria-label="Permalink to &quot;怎么让大佬帮我性能分析&quot;">​</a></h1><ol><li>检查你的服务器有没有安装 Spark 插件， 尝试 <code>/spark</code> 命令或者 <code>/pl</code> 看看有没有 Spark</li></ol><p>如果没有，手动安装一下 <a href="./performance-analysis">Spark</a></p><ol start="2"><li>开启 Spark 记录</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/spark profiler start</span></span></code></pre></div><p><img src="'+n+'" alt=""></p><p>在你服务器卡顿的时候开启， <strong>一段时间后</strong> 结束它</p><ol start="3"><li>结束 Spark 记录</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/spark profiler stop</span></span></code></pre></div><p>它会给你一个链接，你把这个链接发给大佬并 <strong>礼貌的</strong> 请求帮助你</p><p>注:链接位置在下图中红框标记的部分</p><p><img src="'+l+'" alt=""></p>',12)),o(e)])}const f=t(c,[["render",d]]);export{u as __pageData,f as default};
