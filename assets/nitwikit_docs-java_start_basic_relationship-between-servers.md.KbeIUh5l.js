import{_ as r,c as a,a5 as o,o as t}from"./chunks/framework.Dzz2jpra.js";const F=JSON.parse('{"title":"服务端之间的关系","description":"","frontmatter":{"title":"服务端之间的关系","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs-java/start/basic/relationship-between-servers.md","filePath":"nitwikit/docs-java/start/basic/relationship-between-servers.md","lastUpdated":1727754229000}'),i={name:"nitwikit/docs-java/start/basic/relationship-between-servers.md"};function p(s,e,n,c,l,d){return t(),a("div",null,e[0]||(e[0]=[o('<h1 id="服务端之间的关系" tabindex="-1">服务端之间的关系 <a class="header-anchor" href="#服务端之间的关系" aria-label="Permalink to &quot;服务端之间的关系&quot;">​</a></h1><p>由于在本文档中大量出现了服务端之间的对比、选择、配置等，因此必须梳理一下各服务端之间的区别。</p><blockquote><p>此处以 GitHub 为例，与 GitHub 同类的网站还有很多，如 GitLab，Gitee</p></blockquote><h2 id="什么是-fork" tabindex="-1">什么是 Fork <a class="header-anchor" href="#什么是-fork" aria-label="Permalink to &quot;什么是 Fork&quot;">​</a></h2><p>Fork 在 GitHub 中是对一个仓库的克隆。克隆一个仓库允许你自由试验各种改变，而不影响原始的项目。</p><p>一般来说，Forks 是被用于去更改别人的项目或者使用别人的项目作为你自己想法的初始开发点。</p><p>对于 Minecraft 服务端而言，A 为 B 的 Fork 则意味着，A 会保留 B 的很多性质(如兼容性)，但会在一定程度上在某方面(如性能、功能)有更好的表现。</p><h2 id="插件端" tabindex="-1">插件端 <a class="header-anchor" href="#插件端" aria-label="Permalink to &quot;插件端&quot;">​</a></h2><p>Bukkit -&gt; Spigot -&gt; Paper 这基本是服务端发展的现状，<strong>Paper 支持绝大多数为 Bukkit 和 Spigot 设计的插件。</strong></p><p>几乎所有的新版本核心都基于 Paper，由于其侧重点不同，不同的核心可能选择不同的方向，如功能性、性能、拓展性等。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>如果一个核心 A 是基于另一个核心 B ，那么核心 A 基本能兼容为核心 B 写的插件，这样是为什么使用 Paper 服务器时可以去 Bukkit 或 Spigot 资源站找插件的原因。</p></div><p>Purfferfish - 是基于 Paper 的一个专注实体性能优化的 Fork；</p><p>Gale - 是基于 Paper 的一个专注各种性能优化的 Fork；</p><p>Leaves - 是基于 Paper 的一个致力于修复原版服务端被破坏特性的 Fork；</p><p>Purpur - 是基于 Purfferfish 的一个专注功能性和性能的 Fork；</p><p>Leaf - 是基于 Purfferfish，Purpur，Gale 等的专注于性能的 Fork。</p><h2 id="mod-端" tabindex="-1">MOD 端 <a class="header-anchor" href="#mod-端" aria-label="Permalink to &quot;MOD 端&quot;">​</a></h2><p>Fabric 和 Forge 作为 Minecraft 中最常用的两个模组加载器，即使有些 Mod 声明他们可用于 Fabric 和 Forge 服务器，</p><p>一般来说这些 Mod 也会被发布为多个 <code>.jar</code> 文件，他们之间通常来说是互不兼容的。</p><p>所以不要傻傻的把标明给 Forge 的 Mod 加入 Fabric 的服务端，以免出现无法加载。</p><h2 id="forge-neoforge" tabindex="-1">Forge / NeoForge <a class="header-anchor" href="#forge-neoforge" aria-label="Permalink to &quot;Forge / NeoForge&quot;">​</a></h2><p>Forge 是较早版本出现的模组加载器，设计上有一些历史包袱导致，有大量的知名 Mod 基于 Forge 开。</p><p>NeoForge 是 Forge 的 Fork。这个分支是因为原 Forge 团队由于常年不合重新组建了新的团队，</p><p>原 Forge 团队除了 LexManos 都参与了维护，这导致了 Forge 和 NeoForge 不能完全相同。</p><p>但可以预见的是，NeoForge 可以让 Forge 开发者以很小的代价迁移到 NeoForge 上。</p><h2 id="fabric" tabindex="-1">Fabric <a class="header-anchor" href="#fabric" aria-label="Permalink to &quot;Fabric&quot;">​</a></h2><p>Fabric 是相对新的，在设计上 Fabric 相对更轻量、高效。性能一般会更好，玩法 Mod 目前相对 Forge 更少。</p><p>Fabric 拥有大量的优化效果较好的 Mod ，较为出名的有元素周期表钠等。</p><h2 id="混合端" tabindex="-1">混合端 <a class="header-anchor" href="#混合端" aria-label="Permalink to &quot;混合端&quot;">​</a></h2><p>这部分对新手来说很难，用大白话说：</p><p>Bukkit + Forge = Catserver</p><p>Paper(部分) + Forge = Mohist</p>',32)]))}const b=r(i,[["render",p]]);export{F as __pageData,b as default};
