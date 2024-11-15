import{_ as i,c as a,a5 as t,o as s}from"./chunks/framework.Dzz2jpra.js";const d=JSON.parse('{"title":"Legacy Script Engine(LSE)","description":"","frontmatter":{"title":"Legacy Script Engine(LSE)","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs-bedrock/bds-core/process/LeviLamina/legacy-script-engine.md","filePath":"nitwikit/docs-bedrock/bds-core/process/LeviLamina/legacy-script-engine.md","lastUpdated":1727754229000}'),n={name:"nitwikit/docs-bedrock/bds-core/process/LeviLamina/legacy-script-engine.md"};function l(c,e,o,p,r,g){return s(),a("div",null,e[0]||(e[0]=[t('<h1 id="legacy-script-engine-lse" tabindex="-1">Legacy Script Engine(LSE) <a class="header-anchor" href="#legacy-script-engine-lse" aria-label="Permalink to &quot;Legacy Script Engine(LSE)&quot;">​</a></h1><h2 id="什么是-legacy-script-engine" tabindex="-1">什么是 Legacy Script Engine <a class="header-anchor" href="#什么是-legacy-script-engine" aria-label="Permalink to &quot;什么是 Legacy Script Engine&quot;">​</a></h2><p>Legacy Script Engine 简称 LSE，是 LeviLamina 上的一系列插件，被用作 LiteLoader Scipt Engine(LLSE)到 LeviScript(LS)的过渡。 LSE 的一些特性与 LLSE 相同，你可以阅读 LLSE 来了解该插件的特点。以下是这两个插件的不同之处：</p><ol><li>LSE 只能在 LeviLamina 上运行，LLSE 只能在 LiteLoader 上运行</li><li>LSE 的插件格式与 LLSE 不同。要想让 LSE 运行 LLSE 插件，需要 LSE 自动或服主手动进行格式转换。</li><li>LSE 虽然是 LeviLamina 开发计划的一部分，但是它被设计作为可选模块，需要服主额外安装。而 LLSE 则是集成在 LiteLoaderBDS 中，安装 LiteLoaderBDS 的过程中即安装完毕，不需要额外安装。</li><li>LSE 的 python 脚本引擎 legacy-script-engine-python 与系统中的 python 解释器冲突。</li><li>LSE 的更新仅提供版本适配和错误修复，不会更新新的 API 等功能，也不受理任何相关建议。</li></ol><h2 id="插件内容" tabindex="-1">插件内容 <a class="header-anchor" href="#插件内容" aria-label="Permalink to &quot;插件内容&quot;">​</a></h2><p>目前对 LSE 提供支持的插件如下：</p><ul><li><strong>LegacyMoney</strong> ：用于为 LSE 插件提供经济 API 相关功能</li><li><strong>LegacyParticleAPI</strong> ：用于为 LSE 插件提供 ParticleAPI 相关功能</li><li><strong>LegacyRemoteCall</strong> ： 用于为 LSE 插件提供插件间相互调用功能</li><li><strong>legacy-script-engine-lua</strong> ：用于加载和运行 lua 插件</li><li><strong>legacy-script-engine-quickjs</strong> ：用于加载和运行单文件 js 插件(quickjs 插件)</li><li><strong>legacy-script-engine-nodejs</strong> ：用于加载和运行 nodejs 插件</li><li><strong>legacy-script-engine-python</strong> ：用于加载和运行 python 插件，<strong>和系统中的 python 解释器冲突</strong></li></ul><p>这其中 LegacyMoney、LegacyParticleAPI、LegacyRemoteCall 几乎是必须安装的，因为很多插件都依赖这些插件运行。其他四个用于加载不同种类 LSE 插件的可以根据服务器所用到的插件的类型进行安装。</p><h2 id="安装方法" tabindex="-1"><a href="https://lse.liteldev.com/zh/" target="_blank" rel="noreferrer">安装方法</a> <a class="header-anchor" href="#安装方法" aria-label="Permalink to &quot;[安装方法](https://lse.liteldev.com/zh/)&quot;">​</a></h2><h3 id="使用-lip-安装" tabindex="-1">使用 Lip 安装 <a class="header-anchor" href="#使用-lip-安装" aria-label="Permalink to &quot;使用 Lip 安装&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>非常推荐使用 Lip 安装。手动安装 LSE 的过程极其复杂繁琐</p></div><p>一次性安装 QuickJS 和 Lua 引擎</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/LiteLDev/LegacyScriptEngine</span></span></code></pre></div><p>安装 nodejs 引擎</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitea.litebds.com/LiteLDev/legacy-script-engine-nodejs</span></span></code></pre></div><p>安装 python 引擎</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitea.litebds.com/LiteLDev/legacy-script-engine-python</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于 legacy-script-engine-python 与系统中的 python 解释器冲突，安装时你需要确保系统中没有 python 解释器。如果系统中已安装 python 解释器，你需要将其<strong>彻底卸载</strong> 。 如果你必须使用系统中的 python 解释器，你只能放弃所有的 python 插件。</p></div><h3 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-label="Permalink to &quot;手动安装&quot;">​</a></h3><p>手动安装要装一大堆插件，我还没试过，教程求大佬补充qaq</p>',20)]))}const L=i(n,[["render",l]]);export{d as __pageData,L as default};
