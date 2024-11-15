import{_ as a,c as i,a5 as s,o as t}from"./chunks/framework.Dzz2jpra.js";const X=JSON.parse('{"title":"Dragonwell 11","description":"","frontmatter":{"sidebar_position":4,"title":"Dragonwell 11","slug":"/optimize/jvm/dragonwell"},"headers":[],"relativePath":"nitwikit/docs-java/process/maintenance/optimize/jvm/dragonwell11.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/jvm/dragonwell11.md","lastUpdated":1727754229000}'),l={name:"nitwikit/docs-java/process/maintenance/optimize/jvm/dragonwell11.md"};function n(o,e,r,p,h,d){return t(),i("div",null,e[0]||(e[0]=[s('<h1 id="dragonwell-11" tabindex="-1">Dragonwell 11 <a class="header-anchor" href="#dragonwell-11" aria-label="Permalink to &quot;Dragonwell 11&quot;">​</a></h1><p>这些参数只适合 Dragonwell 11</p><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseVtableBasedCHA -Dcom.alibaba.enableFastSerialization=true</span></span></code></pre></div><p>这些是基础参数</p><p>如果使用的是从 GitHub 下载的预览版可以添加<code>-XX:+UseBigDecimalOpt -XX:+ReduceNMethodSize</code></p><h2 id="zgc" tabindex="-1">ZGC <a class="header-anchor" href="#zgc" aria-label="Permalink to &quot;ZGC&quot;">​</a></h2><p>Dragonwell 11 的 ZGC 不同于 OpenJDK11 的 ZGC，Dragonwell 通过移植 OpenJDK 15+的 ZGC补丁，使得Dragonwell的ZGC可以投入生产环境</p><p>添加参数 <code>-XX:+UseZGC -XX:AllocatePrefetchStyle=1</code>以启用</p><h2 id="g1gc" tabindex="-1">G1GC <a class="header-anchor" href="#g1gc" aria-label="Permalink to &quot;G1GC&quot;">​</a></h2><p>添加参数</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-XX:+UseG1GC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:MaxGCPauseMillis=130</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:+UnlockExperimentalVMOptions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:+DisableExplicitGC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:+AlwaysPreTouch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1NewSizePercent=28</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1HeapRegionSize=16M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1ReservePercent=20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1MixedGCCountTarget=3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:InitiatingHeapOccupancyPercent=10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1MixedGCLiveThresholdPercent=90</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1RSetUpdatingPauseTimePercent=0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:SurvivorRatio=32</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:MaxTenuringThreshold=1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1SATBBufferEnqueueingThresholdPercent=30</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1ConcMarkStepDurationMillis=5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1ConcRefinementServiceIntervalMillis=150</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -XX:G1ConcRSHotCardLimit=16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -XX:+G1BarrierSimple</span></span></code></pre></div><h2 id="对象头压缩" tabindex="-1">对象头压缩 <a class="header-anchor" href="#对象头压缩" aria-label="Permalink to &quot;对象头压缩&quot;">​</a></h2><p>可以节约10%左右的Java对象内存占用，并可能提升程序性能。<strong>目前仅支持G1GC和ParallelGC</strong></p><p>添加参数<code>-XX:+UseCompactObjectHeaders</code></p><h2 id="wisp" tabindex="-1">Wisp <a class="header-anchor" href="#wisp" aria-label="Permalink to &quot;Wisp&quot;">​</a></h2><p>Wisp在JVM上提供了一种用户态的线程实现。开启Wisp2后，Java线程不再简单地映射到内核级线程，而是对应到一个协程，JVM在少量内核线上调度大量协程执行，以减少内核的调度开销</p><p>只需添加JVM参数即可开启Wisp2，无需更改程序！！</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>仅支持Linux x64</p></div><p>添加参数<code>-XX:+UnlockExperimentalVMOptions -XX:+UseWisp2</code></p>',20)]))}const k=a(l,[["render",n]]);export{X as __pageData,k as default};
