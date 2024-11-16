import{_ as i,c as e,a5 as l,o as r}from"./chunks/framework.O9ad3XaM.js";const t="/assets/%E6%8F%92%E4%BB%B6%E5%88%97%E8%A1%A8.Da5CPfFI.png",k=JSON.parse('{"title":"插件","description":"","frontmatter":{"title":"插件","slug":"/plugin","sidebar_position":1},"headers":[],"relativePath":"nitwikit/docs-java/process/plugin/plugin.md","filePath":"nitwikit/docs-java/process/plugin/plugin.md","lastUpdated":1731754177000}'),o={name:"nitwikit/docs-java/process/plugin/plugin.md"};function n(s,a,h,p,d,c){return r(),e("div",null,a[0]||(a[0]=[l('<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><p>本文档中提到的插件都有较多用户基础和完善的 Wiki，<strong>具体插件请查看插件的 Wiki。</strong></p><p>建议阅读：</p><ul><li><a href="/docs-java/advance/YAML/YAML.html">YAML 语法</a> - 了解大部分插件配置文件的语法。</li><li><a href="/docs-java/process/plugin/more/plugin-signature-file.html">插件特征文件</a> - 了解插件的一些信息。</li><li><a href="/docs-java/advance/format-code.html">格式化代码</a> - 了解彩色字体，下划线，删除线等。</li><li><a href="/docs-java/advance/MiniMessage.html">MiniMessage</a> - 了解 RGB 颜色，文本悬浮和点击文字执行等。</li><li><a href="https://nitwikit.yizhan.wiki/start/basic/what-is-messy-code" target="_blank" rel="noreferrer">什么是乱码</a> - 了解文本文件中的字符有时为什么会变得奇奇怪怪。</li></ul><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>服务器在<strong>开发阶段</strong>可以使用 PlugmanX，ServerUtils 等插件热重载插件。</p><p>过了开发阶段后切记，多数插件自带了重载 如何 <a href="#重载插件">重载插件</a> ？。</p><p>尽量少使用热重载插件，因为如果插件本身并不支持热重载，即使热重载了也容易出问题。</p><p>请阅读 <a href="https://madelinemiller.dev/blog/problem-with-reload/" target="_blank" rel="noreferrer">此文章</a> 来了解为何。</p></div><h2 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h2><h3 id="重载插件" tabindex="-1">重载插件 <a class="header-anchor" href="#重载插件" aria-label="Permalink to &quot;重载插件&quot;">​</a></h3><p>当你改动一个插件的配置后，需要重载才能令其生效。</p><p>多数插件会提供重载命令，一般是 <code>/插件名或插件缩写 reload</code></p><p>如 <code>/tab reload</code></p><h3 id="列出插件" tabindex="-1">列出插件 <a class="header-anchor" href="#列出插件" aria-label="Permalink to &quot;列出插件&quot;">​</a></h3><p>使用 <code>/plugins</code> 或者 <code>/pl</code> 列出插件列表。</p><p><img src="'+t+'" alt=""></p><p>绿色为已加载(不是代表你日后使用不报错，只是这里加载上了)。</p><p>红色为加载失败(服务端检测到了这个插件，但是没加载上，去控制台看看报错)。</p><p>如果这里没有你的插件...服务端甚至没识别这是个插件，去看看你的文件有啥问题。</p><h2 id="nitwikit-衍生" tabindex="-1">NitWikit 衍生 <a class="header-anchor" href="#nitwikit-衍生" aria-label="Permalink to &quot;NitWikit 衍生&quot;">​</a></h2><h3 id="笨蛋脚本" tabindex="-1">笨蛋脚本 <a class="header-anchor" href="#笨蛋脚本" aria-label="Permalink to &quot;笨蛋脚本&quot;">​</a></h3><p>下载此 <a href="https://dl.yizhan.wiki/windows-latest/auto-install-depend.exe" target="_blank" rel="noreferrer">脚本</a>，我们会为你安装常用插件(自动)。</p><details><summary>安装的插件列表</summary><ul><li>ProtocolLib 必备前置</li><li>Luckperms 权限管理插件</li><li>PlaceholderAPI 必备前置</li><li>PlugManx 插件管理</li><li>WorldEdit 创世神</li><li>EssentialsX 基础插件</li><li>Multiverse-Core 多世界管理</li><li><s>ViaVersion，ViaBackwards 跨版本</s></li><li>AuthMe 登陆插件</li><li>SkinRestorer 皮肤管理/皮肤修复</li><li>TrChat 聊天插件</li><li>MiniMotd MOTD 插件</li></ul><p>Via 自动安装已经移动到<a href="./other/Via/Via.html#笨蛋脚本">此处</a></p></details><h3 id="pluginsearchengine" tabindex="-1">PluginSearchEngine <a class="header-anchor" href="#pluginsearchengine" aria-label="Permalink to &quot;PluginSearchEngine&quot;">​</a></h3><p>(目前仍在测试中) 用于搜索插件的软件</p><p>下载此 <a href="https://github.com/lilingfengdev/PluginSearchEngine/releases/download/windows-latest/main.exe" target="_blank" rel="noreferrer">软件</a></p><ol><li>双击打开软件。</li><li>在搜索框中输入关键字，点击搜索按钮。</li><li>双击链接将其复制到剪贴板。</li><li>在浏览器地址栏中粘贴链接，可以看见插件的详情。</li></ol><h2 id="我有疑问" tabindex="-1">我有疑问 <a class="header-anchor" href="#我有疑问" aria-label="Permalink to &quot;我有疑问&quot;">​</a></h2><p>如果你想问问题，查看 <a href="https://nitwikit.yizhan.wiki/start/ask-for-help" target="_blank" rel="noreferrer">如何向大佬求助</a></p><h2 id="圈内破事" tabindex="-1">圈内破事 <a class="header-anchor" href="#圈内破事" aria-label="Permalink to &quot;圈内破事&quot;">​</a></h2><h3 id="miao-系列插件" tabindex="-1">miao 系列插件 <a class="header-anchor" href="#miao-系列插件" aria-label="Permalink to &quot;miao 系列插件&quot;">​</a></h3><p>因为配置简单(没啥功能当然配置简单)而广受小白服主青睐</p><p>之前被爆插件有远程执行代码后门来着</p><p>详情请见：<a href="https://yizhan.wiki/lezi-wiki/article/%E5%9C%9F%E7%9A%87%E5%B8%9D%E5%96%B5" target="_blank" rel="noreferrer">https://yizhan.wiki/lezi-wiki/article/土皇帝喵</a></p><h3 id="米饭系列插件" tabindex="-1">米饭系列插件 <a class="header-anchor" href="#米饭系列插件" aria-label="Permalink to &quot;米饭系列插件&quot;">​</a></h3><p>跟 miao 系列插件走差不多的道路</p><blockquote><p>只要我的插件有 GUI 界面，不管设计的多傻逼，功能少的有多可怜，那也有人夸好用！</p></blockquote><p>作者剽窃国外作者开源的插件，声称是自己的作品并公开售卖</p><p>详情请见：<a href="https://yizhan.wiki/lezi-wiki/article/%E7%89%88%E4%B8%BB%E7%B1%B3%E9%A5%AD%E4%BC%A0" target="_blank" rel="noreferrer">https://yizhan.wiki/lezi-wiki/article/版主米饭传</a></p>',36)]))}const m=i(o,[["render",n]]);export{k as __pageData,m as default};
