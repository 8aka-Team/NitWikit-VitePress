import{_ as i,c as t,a5 as e,o as l}from"./chunks/framework.O9ad3XaM.js";const u=JSON.parse('{"title":"什么是插件？","description":"","frontmatter":{"title":"什么是插件？","sidebar_position":3},"headers":[],"relativePath":"start/basic/what-is-plugin.md","filePath":"nitwikit/docs/start/basic/what-is-plugin.md","lastUpdated":1727693356000}'),o={name:"start/basic/what-is-plugin.md"};function r(s,a,n,c,d,p){return l(),t("div",null,a[0]||(a[0]=[e('<h1 id="什么是插件" tabindex="-1">什么是插件？ <a class="header-anchor" href="#什么是插件" aria-label="Permalink to &quot;什么是插件？&quot;">​</a></h1><p>如果你玩过整合包你一定对 <code>Mod</code> (即模组)这个概念相当了解，但如果你是第一次开服，你可能不知道什么是 <code>Plugin</code>(插件)，本文章会详细为你介绍。</p><h2 id="工作形式" tabindex="-1">工作形式 <a class="header-anchor" href="#工作形式" aria-label="Permalink to &quot;工作形式&quot;">​</a></h2><p>不同于大部分模组需要同时安装在客户端和服务端，插件安装在 <strong>服务端</strong>，</p><p>玩家只需使用原版客户端即可进入服务器，大多数情况下不需要专门安装 Mod。</p><p>插件为什么叫插件(Plugins)，是因为它相对于模组(Mods)有更高的即时性，</p><p>能够更为方便地添加或修改游戏内容，对 Minecraft 本身的侵入性修改也更小。</p><h2 id="安装位置" tabindex="-1">安装位置 <a class="header-anchor" href="#安装位置" aria-label="Permalink to &quot;安装位置&quot;">​</a></h2><p>插件是需要安装在服务器根目录的 <code>/plugins</code> 文件夹，然后需要 <strong>重启</strong> 服务器</p><div class="danger custom-block"><p class="custom-block-title">危险</p><p>永远不要在不知道会发生什么的情况下热加载/热重载/热卸载任何插件。</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>如果你正在使用一个没有明确提醒支持哪个子版本的插件，那么要小心：</p><p>SpigotMC 的插件版本支持除了 1.20.6 只会显示大版本号(如 1.20)而不会显示小版本号(如 1.20.4)</p><p>因此如果你不确定这个插件是否支持该小版本，就算加载成功(绿名)也一定要完整测试了这个插件能够正常使用。</p></div><h2 id="插件的优点" tabindex="-1">插件的优点 <a class="header-anchor" href="#插件的优点" aria-label="Permalink to &quot;插件的优点&quot;">​</a></h2><ul><li>插件服的开发大多数时候都更加简单，而不需要接触 Minecraft 的源代码。像 Skript 那样的脚本语言将插件的开发难度降到了有点脑子就会</li><li>插件的接口大多数时候都使用了事件来抽象化监听服务器的各种行为的复杂性，同时也提供了更好的兼容性。</li><li>由于插件接口都不会因为 Minecraft 源代码更新而被破坏，所以即使版本更新很多东西也不需要跟着修改。比如 Vault 三年前更新的插件到最新版本还可以用。</li></ul><h2 id="插件的缺点" tabindex="-1">插件的缺点 <a class="header-anchor" href="#插件的缺点" aria-label="Permalink to &quot;插件的缺点&quot;">​</a></h2><ul><li>由于版本 API 的变动，如果插件实现的功能较多，更换一个小版本都很可能导致某些功能失去作用甚至无法正常加载。</li><li>接触 Minecraft 本身的代码变得困难，而且通常需要考虑多个版本之间的代码变动。</li><li>很难直接像模组那样通过 Mixin 直接更改游戏代码，某些必须需要修改源代码才能实现的功能在插件上很难实现。</li></ul><h2 id="插件可以做的事情" tabindex="-1">插件可以做的事情 <a class="header-anchor" href="#插件可以做的事情" aria-label="Permalink to &quot;插件可以做的事情&quot;">​</a></h2><p>虽然插件不能像模组那样直接更改游戏源代码，但是依然可以利用游戏本身的内容做出一些超乎寻常的事情</p><p>这里是一些<code>超乎寻常</code>的插件(对新手来说)</p><ul><li>Slimefun 在插件中实现模组的功能</li><li>ItemsAdder/Oraxen 自定义方块物品 HUD 家具(还有更多)</li><li>ModelEngine 自定义生物实体，就像模组</li><li>MythicMob 创造出像模组一样的技能和生物</li></ul><p>插件服目前已经可以使用自定义，物品，方块，HUD，家具，Emoij，生物实体，农作物，树叶，Tooltip，附魔...</p><p>所以说不要轻易地认为插件在最终效果上不如 MOD，很多时候实际上不需要像模组那样修改源代码即可达到相同的效果，不是么？</p>',21)]))}const m=i(o,[["render",r]]);export{u as __pageData,m as default};
