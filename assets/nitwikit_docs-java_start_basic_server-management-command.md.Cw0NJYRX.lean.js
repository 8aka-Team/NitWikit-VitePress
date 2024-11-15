import{_ as e,c as i,a5 as t,o as s}from"./chunks/framework.Dzz2jpra.js";const k=JSON.parse('{"title":"常用服务器管理指令","description":"","frontmatter":{"title":"常用服务器管理指令","sidebar_position":10},"headers":[],"relativePath":"nitwikit/docs-java/start/basic/server-management-command.md","filePath":"nitwikit/docs-java/start/basic/server-management-command.md","lastUpdated":1731161716000}'),p={name:"nitwikit/docs-java/start/basic/server-management-command.md"};function n(o,a,r,l,d,c){return s(),i("div",null,a[0]||(a[0]=[t(`<h1 id="常用服务器管理指令" tabindex="-1">常用服务器管理指令 <a class="header-anchor" href="#常用服务器管理指令" aria-label="Permalink to &quot;常用服务器管理指令&quot;">​</a></h1><p>欢迎开服，有一些常用服务器管理指令你必须了解，这是你开服的第一步!!</p><h2 id="stop" tabindex="-1">/stop <a class="header-anchor" href="#stop" aria-label="Permalink to &quot;/stop&quot;">​</a></h2><p>这个指令是用来关闭服务器的，注意:请确定你需要关闭后再关闭，这次操作会踢出所有玩家</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>千万不要强制关闭服务器，否则会造成存档丢失，玩家数据损坏等多种严重问题</p></div><h2 id="restart" tabindex="-1">/restart <a class="header-anchor" href="#restart" aria-label="Permalink to &quot;/restart&quot;">​</a></h2><p>:::note</p><p>使用前需要在服务器根目录的 <code>spigot.yml</code> 文件找到如下内容:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  restart-script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span></code></pre></div><p>在引号内设置启动脚本路径，否则这个指令不会帮你自动重启服务器，你仍然需要自行启动服务端</p><p>:::</p><h2 id="kick-玩家名称-踢出玩家的原因-可以不写" tabindex="-1">/kick [玩家名称] [踢出玩家的原因](可以不写) <a class="header-anchor" href="#kick-玩家名称-踢出玩家的原因-可以不写" aria-label="Permalink to &quot;/kick [玩家名称] \\[踢出玩家的原因]\\(可以不写)&quot;">​</a></h2><p>踢出服务器上的玩家，当然，玩家可以重新加入</p><h2 id="ban-玩家名称-封禁玩家的原因-可以不写" tabindex="-1">/ban [玩家名称] [封禁玩家的原因](可以不写) <a class="header-anchor" href="#ban-玩家名称-封禁玩家的原因-可以不写" aria-label="Permalink to &quot;/ban [玩家名称] \\[封禁玩家的原因]\\(可以不写)&quot;">​</a></h2><p>封禁服务器上的玩家，除非解封，玩家不可以重新进入</p><h2 id="pardon-玩家名称" tabindex="-1">/pardon [玩家名称] <a class="header-anchor" href="#pardon-玩家名称" aria-label="Permalink to &quot;/pardon [玩家名称]&quot;">​</a></h2><p>解封曾经封禁过的玩家，注意，在MC的老版本(1.0.16之前)中这个指令可能是/unban</p><h2 id="list" tabindex="-1">/list <a class="header-anchor" href="#list" aria-label="Permalink to &quot;/list&quot;">​</a></h2><p>列出服务器上的所有玩家(不包括已经退出服务器的)</p><h2 id="ban-ip-ip地址" tabindex="-1">/ban-ip [IP地址] <a class="header-anchor" href="#ban-ip-ip地址" aria-label="Permalink to &quot;/ban-ip [IP地址]&quot;">​</a></h2><p>封禁服务器上的玩家(根据IP地址)，这会导致封禁玩家所处的IP的玩家都不可进入</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>不要尝试在 frp 上使用这个指令，你会惊奇的发现，所有人都进不去</p></div><p>:::note</p><p>其实这玩意真的没多大用，对于玩家来说，重启一下路由器或挂个代理就可以</p><p>:::</p><h2 id="pardon-ip-ip地址" tabindex="-1">/pardon-ip [IP地址] <a class="header-anchor" href="#pardon-ip-ip地址" aria-label="Permalink to &quot;/pardon-ip [IP地址]&quot;">​</a></h2><p>解封封禁过IP地址的玩家</p><h2 id="plugins" tabindex="-1">/plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;/plugins&quot;">​</a></h2><p>看到服务器所有安装的插件，这个指令的权限默认是打开的，所有人都能看到。</p><p>如果你不想玩家通过指令获取插件列表，可以将以下权限设置为 <code>false</code> 即可。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bukkit.command.plugins</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bukkit.command.version</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bukkit.command.help</span></span></code></pre></div><p>通过简单的权限设置，玩家将无法通过指令获取服务器的插件列表，但某些作弊客户端</p><p>能够通过分析 tab 补全，利用某些版本的漏洞，获取服务器插件列表。</p><p>如果介意被获取插件，可以安装 <code>Plugin Hide Pro</code> 或 <code>CommandWhiteist</code> 插件</p><h2 id="op-玩家名称" tabindex="-1">/op [玩家名称] <a class="header-anchor" href="#op-玩家名称" aria-label="Permalink to &quot;/op [玩家名称]&quot;">​</a></h2><p>给予指定玩家 OP(操作员)权限</p><h2 id="deop-玩家名称" tabindex="-1">/deop [玩家名称] <a class="header-anchor" href="#deop-玩家名称" aria-label="Permalink to &quot;/deop [玩家名称]&quot;">​</a></h2><p>解除玩家的 OP 权限</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>千万不要随意给玩家 OP ，恶意玩家可以使用此权限损坏服务器，甚至入侵主机。</p><p>需要注意，OP 间可以互相 deop，只要一个人获取了 OP 就能下掉其他所有的 OP，</p><p>这是一个非常危险的权限，如果可能，请用权限管理插件而不是给一堆 OP</p></div>`,39)]))}const m=e(p,[["render",n]]);export{k as __pageData,m as default};
