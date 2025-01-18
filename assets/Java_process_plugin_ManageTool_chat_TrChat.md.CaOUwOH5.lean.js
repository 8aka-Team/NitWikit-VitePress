import{_ as e,c as r,a5 as i,G as s,B as l,o}from"./chunks/framework.O9ad3XaM.js";const h="/assets/1.CmOKskRU.png",f=JSON.parse('{"title":"TrChat","description":"","frontmatter":{"title":"TrChat","sidebar_position":1},"headers":[],"relativePath":"Java/process/plugin/ManageTool/chat/TrChat.md","filePath":"nitwikit/docs-java/process/plugin/ManageTool/chat/TrChat.md","lastUpdated":1737161418000}'),c={name:"Java/process/plugin/ManageTool/chat/TrChat.md"};function n(g,t,p,b,u,m){const a=l("nw-image-viewer");return o(),r("div",null,[t[0]||(t[0]=i('<h1 id="trchat" tabindex="-1">TrChat <a class="header-anchor" href="#trchat" aria-label="Permalink to &quot;TrChat&quot;">​</a></h1><p><img src="'+h+'" alt=""></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>版本兼容，支持 1.8-最新</li><li>多频道聊天，默认提供多个常用聊天频道（常规/全局/私聊/管理频道）</li><li>敏感词过滤，十分强大的敏感词过滤系统，支持自定义忽略标点符号判断</li><li>过滤检测，过滤器不仅仅检测聊天，更会过滤木牌、铁砧等等</li><li>云端词库，你无需自行添加过多的敏感词，插件将自动从云端更新敏感词库（当前0.7k+）</li><li>物品展示，所有频道均支持展示玩家容器内物品，支持指定槽位、同时展示多个物品，支持设置冷却</li><li>聊天冷却，自定义玩家聊天间隔，防止刷屏</li><li>At@玩家，支持高亮@玩家，并通过音效+TITLE等方式提醒, 支持设置冷却</li><li>监听私聊，管理员支持切换监听模式，开始时将被推送玩家的私聊内容</li><li>颜色代码，通过独立的权限控制玩家是否能够使用某颜色代码，支持聊天、书本、铁砧等</li><li>多聊天格式，单个聊天频道支持多个聊天格式，通过权限优先级筛选</li><li>跨服支持，不仅仅是跨服私聊、全局喊话，跨服也支持展示物品！</li><li>自定义正则匹配替换，替换自定义匹配到的内容为自定义JSON模块，非常强大</li><li>支持 PlaceholderAPI 变量</li><li>支持 Tab 补全 Bungee 全服玩家ID</li><li>期维护更新功能</li><li>免费下载，代码开源, 提供 API, 自动检测更新</li></ul><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><a href="https://github.com/FlickerProjects/TrChat/releases"><img src="https://img.shields.io/github/v/release/TrPlugins/TrChat?logo=VirusTotal&amp;style=for-the-badge" class="stylish-image" alt="Version"></a><a href="https://github.com/FlickerProjects/TrChat/issues"><img src="https://img.shields.io/github/issues/TrPlugins/TrChat?logo=StackOverflow&amp;style=for-the-badge" class="stylish-image" alt="Issues"></a><a href="https://github.com/FlickerProjects/TrChat/commits/v2"><img src="https://img.shields.io/github/last-commit/TrPlugins/TrChat?logo=ApacheRocketMQ&amp;style=for-the-badge&amp;color=1e90ff" class="stylish-image" alt="Last Commit"></a><a href="https://github.com/NEZNAMY/TAB/blob/main/LICENSE"><img src="https://img.shields.io/github/downloads/TrPlugins/TrChat/total?style=for-the-badge&amp;logo=docusign" class="stylish-image" alt="Downloads"></a><p><a href="https://github.com/TrPlugins/TrChat" target="_blank" rel="noreferrer">TrChat</a> 是基于 <a href="https://github.com/TabooLib/taboolib" target="_blank" rel="noreferrer">TabooLib</a> 开发，发布于 2019-8-16 的高级聊天系统插件</p><p>1.0~1.7 版本: 由 <a href="https://github.com/Arasple" target="_blank" rel="noreferrer">Arasple</a> 使用 TabooLib 5 开发，最高支持1.16.5版本</p><p>1.8~1.9 版本: 由 <a href="https://github.com/ItsFlicker" target="_blank" rel="noreferrer">ItsFlicker</a> 在 1.7 版本基础上使用 TabooLib 6 开发，已停止维护</p><p>2.0 版本: 由 <a href="https://github.com/ItsFlicker" target="_blank" rel="noreferrer">ItsFlicker</a> 使用 TabooLib 6 重新编写并持续维护</p><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>GitHub</code> <a href="https://github.com/TrPlugins/TrChat" target="_blank" rel="noreferrer">https://github.com/TrPlugins/TrChat</a></p><p><code>MineBBS</code> <a href="https://www.minebbs.com/resources/.7245" target="_blank" rel="noreferrer">https://www.minebbs.com/resources/.7245</a></p><p><code>文档</code> <a href="https://trchat.trixey.cc" target="_blank" rel="noreferrer">https://trchat.trixey.cc</a></p></div><p>国人插件，一个功能强大的聊天插件</p><h2 id="bstats" tabindex="-1">Bstats <a class="header-anchor" href="#bstats" aria-label="Permalink to &quot;Bstats&quot;">​</a></h2><h3 id="bukkit-spigot" tabindex="-1">Bukkit / Spigot <a class="header-anchor" href="#bukkit-spigot" aria-label="Permalink to &quot;Bukkit / Spigot&quot;">​</a></h3><p><a href="https://bstats.org/plugin/bukkit/TrChat/5802" target="_blank" rel="noreferrer"><img src="https://bstats.org/signatures/bukkit/TrChat.svg" alt=""></a></p><h3 id="bungeecord" tabindex="-1">BungeeCord <a class="header-anchor" href="#bungeecord" aria-label="Permalink to &quot;BungeeCord&quot;">​</a></h3><p><a href="https://bstats.org/plugin/bungeecord/TrChat/5803" target="_blank" rel="noreferrer"><img src="https://bstats.org/signatures/bungeecord/TrChat.svg" alt=""></a></p><h3 id="velocity" tabindex="-1">Velocity <a class="header-anchor" href="#velocity" aria-label="Permalink to &quot;Velocity&quot;">​</a></h3><p><a href="https://bstats.org/plugin/velocity/TrChat/12541" target="_blank" rel="noreferrer"><img src="https://bstats.org/signatures/velocity/TrChat.svg" alt=""></a></p>',23)),s(a)])}const k=e(c,[["render",n]]);export{f as __pageData,k as default};
