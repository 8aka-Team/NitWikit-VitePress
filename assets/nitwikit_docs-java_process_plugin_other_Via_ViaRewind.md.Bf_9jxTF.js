import{_ as e,c as r,a5 as i,o as t}from"./chunks/framework.Dzz2jpra.js";const u=JSON.parse('{"title":"ViaRewind","description":"","frontmatter":{"sidebar_position":4},"headers":[],"relativePath":"nitwikit/docs-java/process/plugin/other/Via/ViaRewind.md","filePath":"nitwikit/docs-java/process/plugin/other/Via/ViaRewind.md","lastUpdated":1727754229000}'),o={name:"nitwikit/docs-java/process/plugin/other/Via/ViaRewind.md"};function n(l,a,d,p,s,h){return t(),r("div",null,a[0]||(a[0]=[i('<h1 id="viarewind" tabindex="-1">ViaRewind <a class="header-anchor" href="#viarewind" aria-label="Permalink to &quot;ViaRewind&quot;">​</a></h1><p>ViaRewind 可以让超低版本(1.7-1.8)客户端进入高版本服务器</p><p>需要下载两个插件才能发挥兼容性<a href="https://ci.viaversion.com/view/ViaRewind/job/ViaRewind" target="_blank" rel="noreferrer">ViaRewind</a>，<a href="https://ci.viaversion.com/view/ViaRewind/job/ViaRewind%20Legacy%20Support/" target="_blank" rel="noreferrer">ViaRewind Legacy Support</a></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="进不去-怎么办" tabindex="-1">进不去，怎么办？ <a class="header-anchor" href="#进不去-怎么办" aria-label="Permalink to &quot;进不去，怎么办？&quot;">​</a></h3><p><s>去让你用这老客户端的玩家滚去吃屎</s></p><p><s>让敢安装ViaRewind腐竹滚去吃屎</s></p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><h3 id="指定-1-8-x-客户端如何查看冷却时间指示器" tabindex="-1">指定 1.8.x 客户端如何查看冷却时间指示器 <a class="header-anchor" href="#指定-1-8-x-客户端如何查看冷却时间指示器" aria-label="Permalink to &quot;指定 1.8.x 客户端如何查看冷却时间指示器&quot;">​</a></h3><p>你可以在 &quot;标题&quot;、&quot;动作条&quot;、&quot;BOSS 条 &quot;和 &quot;禁用 &quot;之间进行选择</p><p>只有在服务器上禁用了 1.9 版本的冷却时间时才会禁用</p><p>1.8 版本的玩家可能会问，为什么 pvp 不能正常运行？</p><p>cooldown-indicator: &quot;TITLE</p><h3 id="对于-1-7-x-客户端-用生存模式取代冒险模式" tabindex="-1">对于 1.7.x 客户端，用生存模式取代冒险模式 <a class="header-anchor" href="#对于-1-7-x-客户端-用生存模式取代冒险模式" aria-label="Permalink to &quot;对于 1.7.x 客户端，用生存模式取代冒险模式&quot;">​</a></h3><p>如果你的服务器使用 &quot;CanDestroy&quot; # 或 &quot;CanPlaceOn&quot;，请启用此选项。 或 &quot;CanPlaceOn &quot;标志的情况下启用此选项</p><p>replace-adventure: false</p><h3 id="_1-9-版本的粒子是否会被-1-8-及更低版本的类似粒子替换。-1-8-及更低版本的类似粒子replace-particles-false" tabindex="-1">1.9 版本的粒子是否会被 1.8 及更低版本的类似粒子替换。 1.8 及更低版本的类似粒子replace-particles: false <a class="header-anchor" href="#_1-9-版本的粒子是否会被-1-8-及更低版本的类似粒子替换。-1-8-及更低版本的类似粒子replace-particles-false" aria-label="Permalink to &quot;1.9 版本的粒子是否会被 1.8 及更低版本的类似粒子替换。 1.8 及更低版本的类似粒子replace-particles: false&quot;">​</a></h3><p>replace-adventure: false</p><h3 id="客户端被踢出前所写书籍的最大页数" tabindex="-1">客户端被踢出前所写书籍的最大页数 <a class="header-anchor" href="#客户端被踢出前所写书籍的最大页数" aria-label="Permalink to &quot;客户端被踢出前所写书籍的最大页数&quot;">​</a></h3><p>max-book-pages： 100</p><h3 id="在客户被踢出前-书籍页面-json-字符串的最大字符数" tabindex="-1">在客户被踢出前，书籍页面 json (!) 字符串的最大字符数 <a class="header-anchor" href="#在客户被踢出前-书籍页面-json-字符串的最大字符数" aria-label="Permalink to &quot;在客户被踢出前，书籍页面 json (!) 字符串的最大字符数&quot;">​</a></h3><p>max-book-page-length: 5000</p><h3 id="是否为-1-7-x-客户端模拟-1-8-版本的世界边界" tabindex="-1">是否为 1.7.x 客户端模拟 1.8+ 版本的世界边界 <a class="header-anchor" href="#是否为-1-7-x-客户端模拟-1-8-版本的世界边界" aria-label="Permalink to &quot;是否为 1.7.x 客户端模拟 1.8+ 版本的世界边界&quot;">​</a></h3><p>emulate-world-border: true</p><h3 id="为-1-7-x-客户端显示-1-8-世界边界的粒子" tabindex="-1">为 1.7.x 客户端显示 1.8+ 世界边界的粒子 <a class="header-anchor" href="#为-1-7-x-客户端显示-1-8-世界边界的粒子" aria-label="Permalink to &quot;为 1.7.x 客户端显示 1.8+ 世界边界的粒子&quot;">​</a></h3><p>参见 <a href="https://wiki.vg/index.php?title=Protocol&amp;oldid=7368#Particle_2" target="_blank" rel="noreferrer">https://wiki.vg/index.php?title=Protocol&amp;oldid=7368#Particle_2</a></p><p>world-border-particle： fireworksSpark</p>',27)]))}const q=e(o,[["render",n]]);export{u as __pageData,q as default};
