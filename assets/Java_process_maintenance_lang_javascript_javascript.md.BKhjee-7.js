import{_ as r,c as e,a5 as t,o as l}from"./chunks/framework.O9ad3XaM.js";const f=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{"title":"JavaScript","slug":"/lang/javascript","sidebar_position":3},"headers":[],"relativePath":"Java/process/maintenance/lang/javascript/javascript.md","filePath":"nitwikit/docs-java/process/maintenance/lang/javascript/javascript.md","lastUpdated":1740888072000}'),s={name:"Java/process/maintenance/lang/javascript/javascript.md"};function o(i,a,c,n,p,h){return l(),e("div",null,a[0]||(a[0]=[t('<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><p>JavaScript 在 Minecraft 中有着相当广泛的应用,很多插件和 Mod 都在内部提供了 JavaScript</p><p>常见的实现:</p><ul><li>TrMenu</li><li>Kether</li><li>KubeJS</li></ul><h2 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h2><p>推荐在 <a href="https://www.w3school.com.cn/js/index.asp" target="_blank" rel="noreferrer">W3School</a> 上学习基础知识</p><p>如果只需要在 Minecraft 上使用,则不需要学习<code>JS HTML DOM</code>,<code>JS Browser BOM</code> 和 <code>JS Async</code></p><h2 id="引擎" tabindex="-1">引擎 <a class="header-anchor" href="#引擎" aria-label="Permalink to &quot;引擎&quot;">​</a></h2><p>JavaScript 运行在 JVM 上是需要执行引擎的,不同的 JS 引擎支持的版本和功能不一样,目前主要有以下引擎:</p><p>目前主要有 Nashorn,Rhino,GraalJS,Javet 四个引擎</p><p>Rhino 和 Javet 在 Minecraft 中目前应用很少,因此后续部分仅介绍 Nashorn 和 GraalJS</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>你无法改变插件/Mod 使用的 JS 引擎(除非你有能力改源代码),当然你可以督促作者更改 JS 引擎</p></div><h3 id="支持标准" tabindex="-1">支持标准 <a class="header-anchor" href="#支持标准" aria-label="Permalink to &quot;支持标准&quot;">​</a></h3><p>Nashorn 和 GraalJS 支持版本范围不同(点击ES标准可查看添加的内容)</p><p>Nashorn 支持版本:</p><ul><li><a href="https://www.w3school.com.cn/js/js_es5.asp" target="_blank" rel="noreferrer">ECMAScript 5.x(ES 5)</a></li><li><a href="https://www.w3school.com.cn/js/js_es6.asp" target="_blank" rel="noreferrer">ECMAScript 2015(ES 6)</a>(不完全支持)</li><li><a href="./extend/nashorn#nashorn-语法扩展">JavaScript 扩展语法</a></li></ul><div class="warning custom-block"><p class="custom-block-title">警告</p><p>Nashorn 不支持 2015 年后的 ES 特性,在使用的时候请确保 Nashorn 支持</p></div><p>GraalJS 支持版本:</p><ul><li><a href="https://www.w3school.com.cn/js/js_es5.asp" target="_blank" rel="noreferrer">ECMAScript 5.x(ES 5)</a></li><li><a href="https://www.w3school.com.cn/js/js_es6.asp" target="_blank" rel="noreferrer">ECMAScript 2015(ES 6)</a></li><li><a href="https://www.w3school.com.cn/js/js_2016.asp" target="_blank" rel="noreferrer">ECMAScript 2016</a></li><li><a href="https://www.w3school.com.cn/js/js_2017.asp" target="_blank" rel="noreferrer">ECMAScript 2017</a></li><li><a href="https://www.w3school.com.cn/js/js_2018.asp" target="_blank" rel="noreferrer">ECMAScript 2018</a></li><li><a href="https://www.w3school.com.cn/js/js_2019.asp" target="_blank" rel="noreferrer">ECMAScript 2019</a></li><li><a href="https://www.w3school.com.cn/js/js_2020.asp" target="_blank" rel="noreferrer">ECMAScript 2020</a></li><li><a href="https://www.w3school.com.cn/js/js_2021.asp" target="_blank" rel="noreferrer">ECMAScript 2021</a></li><li><a href="https://www.w3school.com.cn/js/js_2022.asp" target="_blank" rel="noreferrer">ECMAScript 2022</a></li><li><a href="https://www.w3school.com.cn/js/js_2023.asp" target="_blank" rel="noreferrer">ECMAScript 2023</a></li><li><a href="https://www.w3school.com.cn/js/js_2024.asp" target="_blank" rel="noreferrer">ECMAScript 2024</a></li><li>所有最新稳定特性(ES 2025)</li><li>在<a href="https://github.com/tc39/proposals" target="_blank" rel="noreferrer">提案中的特性</a></li><li><a href="./extend/graaljs#nashorn-兼容">JavaScript 扩展语法</a></li></ul><h3 id="java-支持" tabindex="-1">Java 支持 <a class="header-anchor" href="#java-支持" aria-label="Permalink to &quot;Java 支持&quot;">​</a></h3><p>Nashorn 在 JDK 8 中被嵌入到 JDK 中,在 Java 15 中被移除</p><p>Nashorn 目前支持 Java 8 + 以上的版本,GraalJS 支持 Java 11+ 版本</p><h3 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h3><p>根据 <a href="https://github.com/caoccao/GraalJS-vs-Javet-vs-Nashorn" target="_blank" rel="noreferrer">Github 性能测试</a>, GraalJS 在非 GraalVM 上的执行性能是 Nashorn 的 8 倍,在 GraalVM 上的执行性能为 10~12 倍</p><h3 id="其他功能" tabindex="-1">其他功能 <a class="header-anchor" href="#其他功能" aria-label="Permalink to &quot;其他功能&quot;">​</a></h3><p>GraalJS 有着 Nashorn 很多没有的功能(虽然 Minecraft 不一定用得到),主要有以下功能:</p><ul><li>更好的互操作性,有着非常多的 API</li><li>更加安全,可以管控 JS 代码的执行权限</li><li><strong>支持重载全局层面的运算符</strong></li><li>与 Nashorn 完全兼容(需要开启选项)</li><li>可以运行 WebAssembly,Python,Ruby</li><li>可以使用 NodeJS 和 NPM</li><li>...</li></ul>',27)]))}const d=r(s,[["render",o]]);export{f as __pageData,d as default};
