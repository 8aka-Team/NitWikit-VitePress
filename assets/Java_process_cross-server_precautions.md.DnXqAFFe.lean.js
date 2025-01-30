import{_ as a,c as t,a5 as s,o}from"./chunks/framework.O9ad3XaM.js";const h=JSON.parse('{"title":"注意事项","description":"","frontmatter":{"title":"注意事项","sidebar_position":8},"headers":[],"relativePath":"Java/process/cross-server/precautions.md","filePath":"nitwikit/docs-java/process/cross-server/precautions.md","lastUpdated":1737906418000}'),i={name:"Java/process/cross-server/precautions.md"};function r(l,e,p,c,n,d){return o(),t("div",null,e[0]||(e[0]=[s('<h1 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h1><p>:::danger[非常危险]</p><p>只要你的子服和跨服端都位于同一内网或同一主机上，就尽可能不要给该子服开公网！某些情况下，即使正确配置了跨服端，玩家也可以直接通过子服的端口连接至子服。 这将会导致很多问题，比如绕过登录服随便登录别人账号，窃取 OP 账号权限等严重时可能会直接导致服务器被提权或后门等。</p><details><summary>如何禁用子服的公网</summary><ul><li>如果你的公网是通过端口映射/内网穿透实现的： 只保留跨服端的端口映射/内网穿透隧道，把其他所有子服的端口映射/内网穿透隧道都关闭。</li><li>如果你的服务器能直接获取公网（典型的比如带独立 IP 的云服务器）： 在系统防火墙中禁止该子服服务端可执行文件或该子服对应端口的入站。</li><li>如果子服与跨服端位于不同的局域网只能通过公网互相通信： <ul><li>在跨服端和子服所处的两台服务器之间建立 VPN （此处指虚拟专用网络，是通常用于登录学校内网或企业内网的那种网络，不是科学上网！），让子服和跨服端通过 VPN 通信</li><li>选用有成熟的防止玩家绕过跨服端连接子服的方案，如 Velocity + Paper 或 BungeeCord + Spigot/Paper 等</li></ul></li><li>因某些原因有独立 IP 又无法开启防火墙： 选用有成熟的防止玩家绕过跨服端连接子服的方案，如 Velocity + Paper 或 BungeeCord + Spigot/Paper 等</li></ul><p>全部配置完成后，记得自己直接连接子服端口进行测试，如果只有通过跨服端端口能够成功进入子服，所有子服都完全无法直接通过其端口连接（提示无法连接至世界、远程主机强行关闭了一个现有的连接、连接被拒绝等），证明配置成功。</p></details><p>:::</p><h2 id="不要给玩家-server-权限" tabindex="-1">不要给玩家 <code>/server</code> 权限 <a class="header-anchor" href="#不要给玩家-server-权限" aria-label="Permalink to &quot;不要给玩家 `/server` 权限&quot;">​</a></h2><p>用 <code>菜单/npc</code> 或其他东西跨服，但是不要给玩家这个权限(玩家默认有)，会被玩家发现服主的小 ♂ 秘 ♂ 密 ♂</p><p>这个权限是由跨服进行检查的，仅靠后端服务器无法干涉权限处理，也就是说玩家可以在未登录之前使用此命令跳转到另外一个服务器，如果另外的服务器没登陆插件，那么通过此方法就可以使用到 OP 账号</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你使用的是 AuthMe 登录插件，请务必在跨服端安装对应的 AuthMe 插件，如 AuthMeVelocity、AuthMeBungee 等插件</p><p>这样就可以避免一些此类问题了</p></div><h3 id="关闭权限" tabindex="-1">关闭权限 <a class="header-anchor" href="#关闭权限" aria-label="Permalink to &quot;关闭权限&quot;">​</a></h3><p>在跨服端安装 <a href="/docs-java/process/plugin/ManageTool/Permission/Permission">Luckperms</a> 的跨服端对应版本然后执行命令：</p><ul><li>BungeeCord</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/lpb group default permission set bungeecord.command.server false</span></span></code></pre></div><ul><li>Velocity</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/lpv group default permission set velocity.command.server false</span></span></code></pre></div><h2 id="bc-的语义扩大" tabindex="-1">bc 的语义扩大 <a class="header-anchor" href="#bc-的语义扩大" aria-label="Permalink to &quot;bc 的语义扩大&quot;">​</a></h2><p>bc 这个缩写应只指 BungeeCord 核心</p><p>但是很多人用 bc 指 BungeeCord 和它的分支，甚至指所有的跨服端(把 Velocity 和包括进去了)</p><p>希望在看的你用 bc 这个缩写时只用来指 BungeeCord 核心，避免产生不必要的误会</p><p>:::note</p><p>服务端有个命令是 <code>/bc</code>(broadcast 广播消息) ，用来发公告的，这和此处的 BungeeCord 没有关系</p><p>:::</p><h2 id="velocity-的缩写" tabindex="-1">Velocity 的缩写 <a class="header-anchor" href="#velocity-的缩写" aria-label="Permalink to &quot;Velocity 的缩写&quot;">​</a></h2><p>最常见的缩写是 <code>vc</code></p>',24)]))}const b=a(i,[["render",r]]);export{h as __pageData,b as default};
