import{_ as e,c as r,a5 as d,G as o,B as l,o as i}from"./chunks/framework.O9ad3XaM.js";const n="/assets/Oracle-1.CxzHvnWB.png",s="/assets/Oracle-2.QPdVv2P4.png",h="/assets/Oracle-3.rewSwx3I.png",c="/assets/Oracle-4.D2_ZQN_o.png",p="/assets/Oracle-5.rGApJY-7.png",v="/assets/cmd-1.BFbczLGL.png",J="/assets/cmd-2.CPGvKiY_.png",E=JSON.parse('{"title":"选择、下载和安装 Java","description":"","frontmatter":{"title":"选择、下载和安装 Java","sidebar_position":1},"headers":[],"relativePath":"preparation/choose-and-download-and-install-java.md","filePath":"nitwikit/docs/preparation/choose-and-download-and-install-java.md","lastUpdated":1732240545000}'),b={name:"preparation/choose-and-download-and-install-java.md"};function m(u,a,g,f,k,_){const t=l("nw-image-viewer");return i(),r("div",null,[a[0]||(a[0]=d('<h1 id="选择、下载和安装-java" tabindex="-1">选择、下载和安装 Java <a class="header-anchor" href="#选择、下载和安装-java" aria-label="Permalink to &quot;选择、下载和安装 Java&quot;">​</a></h1><p>你的服务端和客户端都需要安装 Java 才能运行。各个游戏版本需要安装的 Java 版本不同。</p><p>原则上选择最新的兼容的 Java 版本，可以体验到最新的优化，并且大部分现代插件对最新版的特性有优化(比如 AuthMeReReload)。</p><details><summary>JRE 和 JDK 是什么? 我该怎么选择?</summary><p>JRE (Java Runtime Enviroment) 是 Java 的运行环境。面向 Java 程序的使用者，而不是开发者。如果你仅下载并安装了 JRE，那么你的系统只能运行 Java 程序。 JRE 是运行 Java 程序所必须环境的集合，包含 JVM 标准实现及 Java 核心类库。它包括 Java 虚拟机、Java 平台核心类和支持文件。它不包含开发工具(编译器、调试器等)</p><p>JDK (Java Development Kit) 又称 J2SDK (Java2 Software Development Kit)，是 Java 开发工具包，它提供了 Java 的开发环境 (提供了编译器 javac 等工具，用于将 java 文件编译为 class 文件) 和运行环境 (提供了 JVM 和 Runtime 辅助包，用于解析 class 文件使其得到运行)。 如果你下载并安装了 JDK，那么你不仅可以开发 Java 程序，也同时拥有了运行 Java 程序的平台。JDK 是整个 Java 的核心，包括了 Java 运行环境 (JRE)，一堆 Java 工具 tools.jar 和 Java 标准类库 (rt.jar)</p><p>总结: 只开服务端下载 JRE 即可，JDK 也没问题</p></details><h2 id="选择版本" tabindex="-1">选择版本 <a class="header-anchor" href="#选择版本" aria-label="Permalink to &quot;选择版本&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>部分服务端有在项目的 README 中标注最低版本和推荐版本，例如 <a href="https://github.com/HomoMC/Beast" target="_blank" rel="noreferrer">Beast</a>，最低版本为 Java 8，推荐版本为 Java 21 MOD 服务端</p></div><h3 id="常见插件端-paper-等" tabindex="-1">常见插件端(Paper 等) <a class="header-anchor" href="#常见插件端-paper-等" aria-label="Permalink to &quot;常见插件端(Paper 等)&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Minecraft 版本</th><th>最低版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>1.0 - 1.11.2</td><td>Java 6</td><td>Java 8</td></tr><tr><td>1.12 - 1.16.4</td><td>Java 8</td><td>Java 11</td></tr><tr><td>1.16.5</td><td>Java 8</td><td>Java 16</td></tr><tr><td>1.17 - 1.17.1</td><td>Java 16</td><td>Java 17</td></tr><tr><td>1.18 - 1.20.4</td><td>Java 17</td><td>Java 21</td></tr><tr><td>1.20.5 - 1.21</td><td>Java 21</td><td>Java 21</td></tr></tbody></table><h3 id="混合服务端-catserver-等" tabindex="-1">混合服务端(CatServer 等) <a class="header-anchor" href="#混合服务端-catserver-等" aria-label="Permalink to &quot;混合服务端(CatServer 等)&quot;">​</a></h3><h4 id="catserver" tabindex="-1">CatServer <a class="header-anchor" href="#catserver" aria-label="Permalink to &quot;CatServer&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Minecraft 版本</th><th>最低版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>1.12.2</td><td>Java 8</td><td>Java 8</td></tr><tr><td>1.16.5</td><td>Java 8</td><td>Java 11</td></tr><tr><td>1.18.2</td><td>Java 17</td><td>Java 17</td></tr></tbody></table><h4 id="mohist" tabindex="-1">Mohist <a class="header-anchor" href="#mohist" aria-label="Permalink to &quot;Mohist&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Minecraft 版本</th><th>最低版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>1.7.10</td><td>Java 8</td><td>Java 8</td></tr><tr><td>1.16.5</td><td>Java 11</td><td>Java 11</td></tr><tr><td>1.18.2 - 1.20.2</td><td>Java 17</td><td>Java 17</td></tr></tbody></table><h4 id="spongeforge" tabindex="-1">SpongeForge <a class="header-anchor" href="#spongeforge" aria-label="Permalink to &quot;SpongeForge&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Minecraft 版本</th><th>最低版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>1.8 - 1.12.2</td><td>Java 8</td><td>Java 8</td></tr><tr><td>1.16.5(吐槽:就你特殊)</td><td>Java 17</td><td>Java 17</td></tr><tr><td>1.19.4</td><td>Java 17</td><td>Java 17</td></tr><tr><td>1.20.6， 1.21.1</td><td>Java 21</td><td>Java 21</td></tr></tbody></table><h2 id="直接下载" tabindex="-1">直接下载 <a class="header-anchor" href="#直接下载" aria-label="Permalink to &quot;直接下载&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>此处下载链接可能不是最新版，如需下载最新版请跳转至 <a href="#手动下载">手动下载</a></p></div><table tabindex="0"><thead><tr><th>Java 版本</th><th>下载链接</th></tr></thead><tbody><tr><td>Java 8</td><td><a href="https://dragonwell.oss-cn-shanghai.aliyuncs.com/8.19.20/Alibaba_Dragonwell_Extended_8.19.20_x64_windows.zip" target="_blank" rel="noreferrer">Dragonwell</a></td></tr><tr><td>Java 11</td><td><a href="https://dragonwell.oss-cn-shanghai.aliyuncs.com/11.0.23.20.9/Alibaba_Dragonwell_Extended_11.0.23.20.9_x64_windows.zip" target="_blank" rel="noreferrer">Dragonwell</a></td></tr><tr><td>Java 17</td><td><a href="https://d.injdk.cn/d/download/graalvm/17.0.11/graalvm-jdk-17.0.11_windows-x64_bin.zip" target="_blank" rel="noreferrer">GraalVM</a> <a href="https://d.injdk.cn/d/download/zulu/17/zulu17.52.17-ca-jdk17.0.12-win_x64.zip" target="_blank" rel="noreferrer">Zulu</a></td></tr><tr><td>Java 21</td><td><a href="https://d.injdk.cn/d/download/graalvm/21.0.3/graalvm-jdk-21.0.3_windows-x64_bin.zip" target="_blank" rel="noreferrer">GraalVM</a> <a href="https://d.injdk.cn/d/download/zulu/21/zulu21.36.17-ca-jdk21.0.4-win_x64.zip" target="_blank" rel="noreferrer">Zulu</a></td></tr></tbody></table><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>32 位操作系统开个鬼服...</p><p><a href="https://cn.bing.com/search?q=32%E4%BD%8D%2064%E4%BD%8D%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D" target="_blank" rel="noreferrer">32 位和 64 位有什么区别</a></p><p><a href="https://cn.bing.com/search?q=%E5%A6%82%E4%BD%95%E7%A1%AE%E5%AE%9A%E8%87%AA%E5%B7%B1%E7%94%B5%E8%84%91%E6%98%AF32%E4%BD%8D%E8%BF%98%E6%98%AF64%E4%BD%8D" target="_blank" rel="noreferrer">如何确定自己电脑是 32 位还是 64 位</a></p></div><h2 id="手动下载" tabindex="-1">手动下载 <a class="header-anchor" href="#手动下载" aria-label="Permalink to &quot;手动下载&quot;">​</a></h2><h3 id="下载镜像" tabindex="-1">下载镜像 <a class="header-anchor" href="#下载镜像" aria-label="Permalink to &quot;下载镜像&quot;">​</a></h3><p><a href="https://d.injdk.cn/download" target="_blank" rel="noreferrer">InJDK</a> 各种 JDK 的下载镜像</p><h3 id="oracle-版" tabindex="-1">Oracle 版 <a class="header-anchor" href="#oracle-版" aria-label="Permalink to &quot;Oracle 版&quot;">​</a></h3><p>官方版本</p><details><summary>怎么找到官网并从官网下载</summary><p><img src="'+n+'" alt=""><img src="'+s+'" alt=""><img src="'+h+'" alt=""><img src="'+c+'" alt=""></p><p>如果再往下翻的话可以看到 Java 8 / 11。</p><p><img src="'+p+'" alt=""></p><p>但是在这里 Java 8 需要登录才能下载。</p><p>你可以在下方链接直接下载 Java 8：</p><p><a href="https://www.java.com/zh-CN/download/" target="_blank" rel="noreferrer">https://www.java.com/zh-CN/download/</a></p></details><p>如果你想进行 JVM 优化，请看 <a href="https://nitwikit.yizhan.wiki/Java/optimize/jvm" target="_blank" rel="noreferrer">JVM 优化</a></p><h2 id="验证-java-安装" tabindex="-1">验证 Java 安装 <a class="header-anchor" href="#验证-java-安装" aria-label="Permalink to &quot;验证 Java 安装&quot;">​</a></h2><p>打开 Windows 终端 / PowerShell / CMD 。</p><p><a href="https://cn.bing.com/search?q=%E6%80%8E%E4%B9%88%E6%89%93%E5%BC%80windows%E6%8E%A7%E5%88%B6%E5%8F%B0" target="_blank" rel="noreferrer">怎么打开 Windows 终端</a></p><p><img src="'+v+'" alt=""></p><p>输入：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -version</span></span></code></pre></div><p>并回车：</p><p><img src="'+J+'" alt=""></p><blockquote><p>返回类似的消息即为 Java 已安装</p></blockquote><h2 id="使用-aji-静默安装-java" tabindex="-1">使用 AJI 静默安装 Java <a class="header-anchor" href="#使用-aji-静默安装-java" aria-label="Permalink to &quot;使用 AJI 静默安装 Java&quot;">​</a></h2><p>群友氿月写的一个小脚本，可以在 Windows 平台后台静默安装 JDK。</p><details><summary>食用方式：</summary><ol><li>打开此链接下载 AJI: <a href="https://github.com/Lafcadia/AJI/releases/download/v0.0.2/main.exe" target="_blank" rel="noreferrer">https://github.com/Lafcadia/AJI/releases/download/v0.0.2/main.exe</a></li><li>下好了，右键选择以管理员权限打开(如果不以管理员权限打开就无法绑定 Java 环境变量，虽然不给管理员权限程序也能正常运行，并安装 Java，但可能会在后续阶段出现问题)</li><li><img src="https://github.com/user-attachments/assets/28035c47-d34b-4b38-b895-29f38366bef9" alt="示意图"></li><li>选择合适的版本的 Java，点击 <code>Install Java</code>，下载。</li><li>不要关闭窗口，直到下方的提示栏从 <code>Installing...</code> 变为 <code>Complete.</code></li></ol></details><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="为什么-jar-文件的图标是个白纸" tabindex="-1">为什么 .jar 文件的图标是个白纸 <a class="header-anchor" href="#为什么-jar-文件的图标是个白纸" aria-label="Permalink to &quot;为什么 .jar 文件的图标是个白纸&quot;">​</a></h3><ol><li>服务器根本没有安装 JRE 或者 JDK。</li><li>服务器上的 Java 未设置环境变量 (其实这个影响不大)。</li><li>没有绑定文件打开方式 (不过其实也没啥必要绑)。</li></ol><h3 id="怎么制作绿色版-java-绿色版怎么使用" tabindex="-1">怎么制作绿色版 Java &amp; 绿色版怎么使用 <a class="header-anchor" href="#怎么制作绿色版-java-绿色版怎么使用" aria-label="Permalink to &quot;怎么制作绿色版 Java &amp; 绿色版怎么使用&quot;">​</a></h3><p>下载 Java 时下载 <code>.zip</code> 或 <code>.tar.gz</code> 结尾的压缩包，将压缩包解压到任意位置。</p><p>随后可以修改环境变量 <code>JAVA_HOME</code> 即可，如果不懂看<a href="https://blog.csdn.net/MrsHorse/article/details/82695353" target="_blank" rel="noreferrer">这篇文章</a></p><h2 id="本节视频教程" tabindex="-1">本节视频教程 <a class="header-anchor" href="#本节视频教程" aria-label="Permalink to &quot;本节视频教程&quot;">​</a></h2><p><a href="https://www.bilibili.com/video/BV1eT42167iZ/" target="_blank" rel="noreferrer"><strong>点此前往B站</strong>: 笨蛋级MC开服教程-第三集P1:实机演示安装JAVA</a></p>',46)),o(t)])}const q=e(b,[["render",m]]);export{E as __pageData,q as default};
