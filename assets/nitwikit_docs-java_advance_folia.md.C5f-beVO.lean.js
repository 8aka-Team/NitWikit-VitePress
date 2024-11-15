import{_ as i,c as e,a5 as l,o as r}from"./chunks/framework.Dzz2jpra.js";const d=JSON.parse('{"title":"Folia","description":"","frontmatter":{"title":"Folia","sidebar_position":3},"headers":[],"relativePath":"nitwikit/docs-java/advance/folia.md","filePath":"nitwikit/docs-java/advance/folia.md","lastUpdated":1731157003000}'),o={name:"nitwikit/docs-java/advance/folia.md"};function t(n,a,h,p,c,s){return r(),e("div",null,a[0]||(a[0]=[l('<h1 id="folia" tabindex="-1">Folia <a class="header-anchor" href="#folia" aria-label="Permalink to &quot;Folia&quot;">​</a></h1><p>Folia 是 Paper 的一个分支，由 Minecraft 优化 BOSS Spottedleaf 开发。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><h3 id="好处" tabindex="-1">好处 <a class="header-anchor" href="#好处" aria-label="Permalink to &quot;好处&quot;">​</a></h3><p>Folia 与 Vanilla 最大的不同在于 Tick 不再有主线程，而是将区块进行分组，每个独立的区域都有自己的 Tick Loop</p><p>如果你无法理解这段话，你可以看这样子做的好处:</p><p>现在有一个地图，有四个区块，分别是A，B，C，D</p><p>小明在A处建造了一个卡服机，能把服务器TPS干到10一下的那种</p><p>如果是Paper(或者Purpur及其分支)，那么A，B，C，D四处的TPS都会掉到10以下，但如果我们用Folia(假设ABCD分在不同的Region)，那么只有A处的TPS会掉到10以下，B，C，D的TPS仍然不受影响</p><p>并且Folia可以更好的利用CPU多核</p><h3 id="坏处" tabindex="-1">坏处 <a class="header-anchor" href="#坏处" aria-label="Permalink to &quot;坏处&quot;">​</a></h3><p>Folia 完全破坏了 Bukkit 插件的兼容性，每个 Bukkit 插件都必须为 Folia 做兼容(有专门的 Fork 为 Folia 做 Bukkit 插件兼容，后面会讲)，所以，Folia 目前只支持很少插件</p><h2 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h2><p>Folia这么好，但并不是每个服务器都可以体验的，你需要确保你的服务器符合以下条件，这样才可以从Folia中受益</p><ul><li>16个<strong>物理</strong>CPU核心</li><li>玩家较为分散(生存多人游戏、无政府、空岛或一些迷你游戏服务器)</li><li>你需要的插件支持 Folia</li></ul><p>如果你不符合，去用Leaf吧，符合的话继续看下去!</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>我们不推荐直接使用Folia，因为这需要自己去构建，<a href="https://luminolmc.com/" target="_blank" rel="noreferrer">Luminol</a>是一个非常棒的选择，如果你需要1.20.1/2，你可以使用<a href="https://github.com/Era4FunMC/Molia" target="_blank" rel="noreferrer">Molia</a></p><p>请选择Luminol，我们后面会讲LightLuminol，下载到本地后，替换原来的核心就可以了</p><h2 id="lightluminol" tabindex="-1">LightLuminol <a class="header-anchor" href="#lightluminol" aria-label="Permalink to &quot;LightLuminol&quot;">​</a></h2><p>LightingLuminol 是 Luminol 的分支，旨在修复对 BukkitAPI 的破坏，最大程度保证 Bukkit 插件的兼容性。但是，虽然LightLuminol对于Bukkit插兼容性较好，但是会有许多问题，包括不定时的NullPointerError，Thread不安全，内存泄露，数据丢失(一天崩个几十次，挺正常的)</p><p>所以在开始使用LightingLuminol，请想想Leaf是不是更好？</p><p>如果你需要1.20.1/2，你可以使用<a href="https://github.com/Era4FunMC/DirtyMolia" target="_blank" rel="noreferrer">DirtyMolia</a></p><p>(Molia和Luminol其实是同一个作者~~)</p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>如果官网进不去或者下载慢可以使用这里的镜像!</p><ul><li><a href="https://sync.mcsl.com.cn/core/Luminol" target="_blank" rel="noreferrer">Luminol</a></li><li><a href="https://sync.mcsl.com.cn/core/LightingLuminol" target="_blank" rel="noreferrer">LightingLuminol</a></li><li><a href="https://vip.123pan.cn/1821558579/Lingyi/core/molia-1.20.2-mcres.cn.jar" target="_blank" rel="noreferrer">Molia 1.20.2</a></li><li><a href="https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/molia-1.20.1-mcres.cn.jar" target="_blank" rel="noreferrer">Molia 1.20.1</a></li><li><a href="https://vip.123pan.cn/1821558579/Lingyi/aaa/molia/Molia-1.19.4-mcres.cn.jar" target="_blank" rel="noreferrer">Molia 1.19.4</a></li><li><a href="https://vip.123pan.cn/1821558579/Lingyi/core/dirtymolia-1.20.2-mcres.cn.jar" target="_blank" rel="noreferrer">DirtyMolia 1.20.2</a></li><li><a href="https://vip.123pan.cn/1821558579/8448710" target="_blank" rel="noreferrer">DirtyMolia 1.20.1</a></li></ul><h2 id="调配置" tabindex="-1">调配置 <a class="header-anchor" href="#调配置" aria-label="Permalink to &quot;调配置&quot;">​</a></h2><p>安装完 Luminol 后你还需要一点小小的配置让你的Luminol更好</p><h3 id="分配线程数" tabindex="-1">分配线程数 <a class="header-anchor" href="#分配线程数" aria-label="Permalink to &quot;分配线程数&quot;">​</a></h3><p>众所周知 Folia 默认的分配线程数非常脑瘫，会出现一核有难，八核围观的场景</p><p>打开Paper的全局配置，找到<code>threaded-regions.threads</code>，通常情况下，分配给区块 Tick 线程数应该是 80% 乘上你物理CPU核数</p><h3 id="生电配置" tabindex="-1">生电配置 <a class="header-anchor" href="#生电配置" aria-label="Permalink to &quot;生电配置&quot;">​</a></h3><p>Luminol 另一个好处就是可以开启生电配置</p><p>打开 Luminol 的配置文件</p><ul><li>fixes.allow_void_trading 虚空交易</li><li>fixes.allow_unsafe_teleportation 刷沙</li><li>fixes.use_vanilla_random_source RNG操作</li></ul><p>其它特性请阅读 Paper 文档</p>',37)]))}const m=i(o,[["render",t]]);export{d as __pageData,m as default};
