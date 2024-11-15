import{_ as e,c as r,a5 as o,o as t}from"./chunks/framework.Dzz2jpra.js";const u=JSON.parse('{"title":"FAQ","description":"","frontmatter":{"title":"FAQ","sidebar_position":3},"headers":[],"relativePath":"nitwikit/docs-java/process/mobile-player/Geyser/introduction/FAQ.md","filePath":"nitwikit/docs-java/process/mobile-player/Geyser/introduction/FAQ.md","lastUpdated":1730974396000}'),i={name:"nitwikit/docs-java/process/mobile-player/Geyser/introduction/FAQ.md"};function l(n,a,s,p,d,h){return t(),r("div",null,a[0]||(a[0]=[o('<h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="红石是按照哪个版本工作的" tabindex="-1">红石是按照哪个版本工作的？ <a class="header-anchor" href="#红石是按照哪个版本工作的" aria-label="Permalink to &quot;红石是按照哪个版本工作的？&quot;">​</a></h2><p>你加入的服务器是一个 <strong>Java版</strong> 服务器 <strong>红石，还有 指令、农场</strong> 等各种机制都是按照 Java版 工作的</p><h2 id="为什么基岩版玩家无法在地狱上层放置方块" tabindex="-1">为什么基岩版玩家无法在地狱上层放置方块? <a class="header-anchor" href="#为什么基岩版玩家无法在地狱上层放置方块" aria-label="Permalink to &quot;为什么基岩版玩家无法在地狱上层放置方块?&quot;">​</a></h2><p>请查阅安装教程中Geyser配置教程其他项中的 <strong><code>above-bedrock-nether-building</code></strong></p><h2 id="在删除前缀后为什么数据还是不互通" tabindex="-1">在删除前缀后为什么数据还是不互通? <a class="header-anchor" href="#在删除前缀后为什么数据还是不互通" aria-label="Permalink to &quot;在删除前缀后为什么数据还是不互通?&quot;">​</a></h2><p>Java版和基岩版的UUID不一致，请查阅进阶教程</p><h2 id="有时-世界跑的很远以后客户端会很卡" tabindex="-1">有时，世界跑的很远以后客户端会很卡 <a class="header-anchor" href="#有时-世界跑的很远以后客户端会很卡" aria-label="Permalink to &quot;有时，世界跑的很远以后客户端会很卡&quot;">​</a></h2><p>这是 <strong>基岩版</strong> 客户端的问题。具体请 <a href="https://minecraft.fandom.com/zh/wiki/%E5%9F%BA%E5%B2%A9%E7%89%88%E8%B7%9D%E7%A6%BB%E7%8E%B0%E8%B1%A1" target="_blank" rel="noreferrer">查看这里</a></p><h2 id="frp搭建内网穿透想显示真实ip怎么办" tabindex="-1">frp搭建内网穿透想显示真实IP怎么办 <a class="header-anchor" href="#frp搭建内网穿透想显示真实ip怎么办" aria-label="Permalink to &quot;frp搭建内网穿透想显示真实IP怎么办&quot;">​</a></h2><p>在frp中<a href="./../../../../../advance/Linux/frp.html#配置proxy-protocol">开启proxy protocol</a>后，在配置文件里将enable-proxy-protocol设置为true。后续如果不再使用内网穿透，<strong>一定记得把这个配置改回false</strong></p><h2 id="皮肤不显示怎么办" tabindex="-1">皮肤不显示怎么办 <a class="header-anchor" href="#皮肤不显示怎么办" aria-label="Permalink to &quot;皮肤不显示怎么办&quot;">​</a></h2><p>这可能是因为你在安装floodgate后又安装了额外的皮肤组件导致的 请查阅进阶教程</p><h2 id="头颅不显示怎么办" tabindex="-1">头颅不显示怎么办 <a class="header-anchor" href="#头颅不显示怎么办" aria-label="Permalink to &quot;头颅不显示怎么办&quot;">​</a></h2><p>请查阅进阶教程</p><h2 id="箱子菜单变形怎么办" tabindex="-1">箱子菜单变形怎么办 <a class="header-anchor" href="#箱子菜单变形怎么办" aria-label="Permalink to &quot;箱子菜单变形怎么办&quot;">​</a></h2><p>请查阅进阶教程</p><h2 id="地狱上层雾显示不正确怎么办" tabindex="-1">地狱上层雾显示不正确怎么办？ <a class="header-anchor" href="#地狱上层雾显示不正确怎么办" aria-label="Permalink to &quot;地狱上层雾显示不正确怎么办？&quot;">​</a></h2><p>请查阅进阶教程</p><h2 id="无法正常连接到服务器-服务器在好友选项卡没有显示或者在连接服务器时出现-无法连接到世界" tabindex="-1">无法正常连接到服务器! (服务器在好友选项卡没有显示或者在连接服务器时出现 &quot;无法连接到世界&quot;) <a class="header-anchor" href="#无法正常连接到服务器-服务器在好友选项卡没有显示或者在连接服务器时出现-无法连接到世界" aria-label="Permalink to &quot;无法正常连接到服务器! (服务器在好友选项卡没有显示或者在连接服务器时出现 &quot;无法连接到世界&quot;)&quot;">​</a></h2><p>这个问题很复杂， 请检查以下问题是否存在:</p><ul><li><strong>是否使用了SRV</strong></li></ul><p>基岩版客户端不支持 SRV 解析，请让基岩版的玩家正常通过IP和端口连接服务器</p><ul><li><strong>手贱开启enable-proxy-protocol</strong></li></ul><p>如果你不使用像 TCPShield、frp 的反向代理，请保证你的 enable-proxy-protocol 选项是设置为 false 的</p><ul><li><strong>启动时提示 java.net.BindException: Address already in use: bind</strong></li></ul><p>这代表 Geyser 服务器所开设的端口已被占用，请确保你关闭了所有占用该端口的软件，然后再试。如果这没有起作用，通常重启你的电脑即可解决该问题</p><ul><li><strong>你的服务商可能没有及时打开UDP端口</strong></li></ul><p>这通常和你的主机端的端口有关。最常见的是，跟Java版的常用的 TCP 协议的端口不同，你的主机很有可能没有开放基岩版所使用的 UDP 协议的端口。 一个确认此问题的方法是关闭你的服务器，然后选择其他 基岩版服务端，例如 Nukkit(你不一定非要用 Nukkit)以检查是否是该问题导致的</p><ul><li><strong>尝试重启服务器和游戏</strong></li></ul><p>特别是在移动设备上，有时只需重新启动 Minecraft 即可解决问题</p><ul><li><strong>基岩端口小于10000</strong></li></ul><p>端口小于10000通常会导致问题， 请将其设置为高于10000的值</p><ul><li><strong>切换连接线路</strong></li></ul><p>这有可能是你的服务器被当前网络提供商过滤</p><p>如果还不行，我们无能为力</p><h2 id="加入服务器后出现区块空白" tabindex="-1">加入服务器后出现区块空白 <a class="header-anchor" href="#加入服务器后出现区块空白" aria-label="Permalink to &quot;加入服务器后出现区块空白&quot;">​</a></h2><p>你可以尝试添加启动参数<code>-XX:+UnlockDiagnosticVMOptions -XX:-UseAESCTRIntrinsics</code>，如果还不行，你可以升级<strong>电脑配置</strong></p>',38)]))}const f=e(i,[["render",l]]);export{u as __pageData,f as default};
