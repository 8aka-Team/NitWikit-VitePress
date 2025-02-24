import{_ as n,c as r,a5 as e,b as d,w as s,a6 as c,G as i,B as l,o as t,a as h}from"./chunks/framework.O9ad3XaM.js";const k="/assets/%E5%8F%98%E9%87%8F%E4%B8%8D%E6%98%BE%E7%A4%BA-1.D0958HPs.png",u="/assets/%E5%8F%98%E9%87%8F%E4%B8%8D%E6%98%BE%E7%A4%BA-2.CjKufVep.png",E="/assets/%E5%8F%98%E9%87%8F%E4%B8%8B%E8%BD%BD%E5%A4%B1%E8%B4%A5.-4KYOQmk.png",_=JSON.parse('{"title":"常见问题","description":"","frontmatter":{"title":"常见问题","sidebar_position":2},"headers":[],"relativePath":"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Q&A.md","filePath":"nitwikit/docs-java/process/plugin/Front-Plugin/PlaceHolderAPI/Q&A.md","lastUpdated":1739204133000}'),g={name:"Java/process/plugin/Front-Plugin/PlaceHolderAPI/Q&A.md"};function m(b,a,F,B,f,P){const p=l("Mermaid"),o=l("nw-image-viewer");return t(),r("div",null,[a[1]||(a[1]=e('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="什么是变量" tabindex="-1">什么是变量？ <a class="header-anchor" href="#什么是变量" aria-label="Permalink to &quot;什么是变量？&quot;">​</a></h2><p>这里指的变量是形似 <code>%player_name%</code>， 即 <code>%xxx%</code> 的占位符</p><p>它们用来显示一些信息</p><p>如 <code>%player_name%</code> 是显示玩家名字</p><p><code>%playerpoints_points%</code> 是显示 PlayerPoints 插件的玩家点券</p><h2 id="变量怎么不显示" tabindex="-1">变量怎么不显示 <a class="header-anchor" href="#变量怎么不显示" aria-label="Permalink to &quot;变量怎么不显示&quot;">​</a></h2><p><img src="'+k+`" alt=""></p><p>通常有以下几种情况：</p><ol><li>变量写错了</li><li>没下载扩展</li><li>没 <code>/papi reload</code></li></ol><p>这里讲解一下第二种情况：</p><p>在上方图片中，可以看到点券一行是 <code>%vault_eco_balance%</code></p><p>你需要安装 <a href="./../Vault/vault">Vault</a> 插件和 <a href="./../XConomy">经济插件</a>，接着使用</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/papi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ecloud</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vault</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/papi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div><p>然后你就可以看到变量了。</p><p><img src="`+u+'" alt=""></p><p>如果下载失败，看 <a href="#变量下载失败">变量下载失败？</a></p><h2 id="什么是内建变量" tabindex="-1">什么是内建变量？ <a class="header-anchor" href="#什么是内建变量" aria-label="Permalink to &quot;什么是内建变量？&quot;">​</a></h2>',18)),(t(),d(c,null,{default:s(()=>[i(p,{id:"mermaid-66",class:"mermaid",graph:"flowchart%20TD%0A%E6%8F%92%E4%BB%B6%20--%3E%7C%E5%86%85%E5%BB%BA%E5%8F%98%E9%87%8F%7C%20%E6%98%BE%E7%A4%BA%0A%E6%8F%92%E4%BB%B6%20--%3E%7Cpapi%E5%8F%98%E9%87%8F%7C%20PlaceHolderAPI%20--%3E%20%E6%98%BE%E7%A4%BA%0A"})]),fallback:s(()=>a[0]||(a[0]=[h(" Loading... ")])),_:1})),a[2]||(a[2]=e(`<p><code>build-in placeholder</code>，在此处我将其翻译为 &quot;<strong>内建变量</strong>&quot;。</p><p>指的是插件没有通过 PlaceHolderAPI，而是由自己实现的一种变量。通常，这类变量只有这个插件自己可以使用。</p><p>内建变量的形式多种多样，例如：<code>%player%</code> <code>{player}</code> <code>$1</code>。</p><p>一个插件可以同时拥有内建变量和 PlaceHolderAPI 变量，也可以只取其一（或者都没有）。</p><h2 id="更改-boolean" tabindex="-1">更改 boolean <a class="header-anchor" href="#更改-boolean" aria-label="Permalink to &quot;更改 boolean&quot;">​</a></h2><p>在 <code>plugins\\PlaceholderAPI\\config.yml</code> 中找到</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yes&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;false&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;no&#39;</span></span></code></pre></div><p>将yes和no改为true false</p><p>不改也没事，就是改成true false会更方便判断</p><h2 id="在哪寻找我要的变量" tabindex="-1">在哪寻找我要的变量？ <a class="header-anchor" href="#在哪寻找我要的变量" aria-label="Permalink to &quot;在哪寻找我要的变量？&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">信息</p><p><code>Wiki</code> :<a href="https://wiki.placeholderapi.com/" target="_blank" rel="noreferrer">https://wiki.placeholderapi.com/</a></p><p><code>eCloud</code> :<a href="https://api.extendedclip.com/all/" target="_blank" rel="noreferrer">https://api.extendedclip.com/all/</a></p><p><code>Placeholder List</code> :<a href="https://wiki.placeholderapi.com/users/placeholder-list/" target="_blank" rel="noreferrer">https://wiki.placeholderapi.com/users/placeholder-list/</a></p></div><h2 id="怎么下载变量扩展" tabindex="-1">怎么下载变量扩展？ <a class="header-anchor" href="#怎么下载变量扩展" aria-label="Permalink to &quot;怎么下载变量扩展？&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/papi ecloud download 扩展名</span></span></code></pre></div><p>然后执行命令 <code>/papi reload</code></p><h2 id="变量下载失败" tabindex="-1">变量下载失败？ <a class="header-anchor" href="#变量下载失败" aria-label="Permalink to &quot;变量下载失败？&quot;">​</a></h2><p><img src="`+E+'" alt=""></p><p>看起来你连不上 ecloud</p><p>手动下载吧 <a href="https://api.extendedclip.com/all" target="_blank" rel="noreferrer">https://api.extendedclip.com/all</a></p><p>把下载的jar文件塞到 <code>plugins\\PlaceholderAPI\\expansions</code> 文件夹</p><p>然后执行命令 <code>/papi reload</code></p>',20)),i(o)])}const v=n(g,[["render",m]]);export{_ as __pageData,v as default};
