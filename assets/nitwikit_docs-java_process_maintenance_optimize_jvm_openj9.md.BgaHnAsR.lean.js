import{_ as a,c as t,a5 as i,o as s}from"./chunks/framework.Dzz2jpra.js";const h=JSON.parse('{"title":"OpenJ9","description":"","frontmatter":{"sidebar_position":7,"title":"OpenJ9","slug":"/optimize/jvm/openj9"},"headers":[],"relativePath":"nitwikit/docs-java/process/maintenance/optimize/jvm/openj9.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/jvm/openj9.md","lastUpdated":1727754229000}'),n={name:"nitwikit/docs-java/process/maintenance/optimize/jvm/openj9.md"};function o(r,e,c,l,p,X){return s(),t("div",null,e[0]||(e[0]=[i('<h1 id="openj9" tabindex="-1">OpenJ9 <a class="header-anchor" href="#openj9" aria-label="Permalink to &quot;OpenJ9&quot;">​</a></h1><p>这些参数只适合 OpenJ9</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这些参数的主要目的是降低内存占用，而非优化性能</p></div><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-XX:+IdleTuningGcOnIdle -XX:+UseAggressiveHeapShrink -XX:-OmitStackTraceInFastThrow -XX:+UseFastAccessorMethods -XX:+OptimizeStringConcat -Xshareclasses:allowClasspaths -Xshareclasses:cacheDir=./cache -Xaot -XX:+UseCompressedOops -XX:ObjectAlignmentInBytes=256 -Xshareclasses -XX:SharedCacheHardLimit=800M -Xtune:virtualized -XX:+TieredCompilation -XX:InitialTenuringThreshold=5 -Dlog4j2.formatMsgNoLookups=true -XX:-DisableExplicitGC -XX:InitiatingHeapOccupancyPercent=35 -XX:+UnlockExperimentalVMOptions</span></span></code></pre></div><h2 id="gc" tabindex="-1">GC <a class="header-anchor" href="#gc" aria-label="Permalink to &quot;GC&quot;">​</a></h2><p>考虑到 ZGC 通常会使用更多的内存，所以推荐使用 G1GC</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16 -XX:MaxGCPauseMillis=6 -Djava.net.preferIPv4Stack=true -XX:-ParallelRefProcEnabled-XX:+UseTLAB -XX:ReservedCodeCacheSize=70M -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20</span></span></code></pre></div>',8)]))}const u=a(n,[["render",o]]);export{h as __pageData,u as default};
