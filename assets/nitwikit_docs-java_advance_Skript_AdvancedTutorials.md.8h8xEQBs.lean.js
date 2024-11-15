import{_ as s,c as e,a5 as n,o as t}from"./chunks/framework.Dzz2jpra.js";const p="/assets/SearchEvent.CXGUIzNM.png",i="/assets/QuerySubclasses.C7l-bhEh.png",l="/assets/SearchMethods.DlB57Wx7.png",b=JSON.parse('{"title":"高级教程","description":"","frontmatter":{"title":"高级教程","sidebar_position":3},"headers":[],"relativePath":"nitwikit/docs-java/advance/Skript/AdvancedTutorials.md","filePath":"nitwikit/docs-java/advance/Skript/AdvancedTutorials.md","lastUpdated":1727754229000}'),o={name:"nitwikit/docs-java/advance/Skript/AdvancedTutorials.md"};function r(c,a,d,h,g,u){return t(),e("div",null,a[0]||(a[0]=[n(`<h1 id="高级教程" tabindex="-1">高级教程 <a class="header-anchor" href="#高级教程" aria-label="Permalink to &quot;高级教程&quot;">​</a></h1><h2 id="skript-reflect" tabindex="-1">skript-reflect <a class="header-anchor" href="#skript-reflect" aria-label="Permalink to &quot;skript-reflect&quot;">​</a></h2><p><strong>skript-reflect</strong> 是 <strong>Skript</strong> 的一个拓展插件，允许你运用Java的反射机制来进行更高级的操作，它旨在将 <strong>Java</strong> 的功能与 <strong>Skript</strong> 易于使用的开发环境相结合。</p><p>有了 <strong>skript-reflect</strong> 的 <strong>Skript</strong> 几乎可以完成插件能做的任何事，不过是复杂性的问题。</p><p>为什么需要 skript-reflect？</p><ul><li><p>正确编写插件是很困难的，特别是如果你是 <strong>Java</strong> 的新手。 <strong>skript-reflect</strong> 将为你负重前行，让你专注于编写高质量的 <strong>Skript</strong> 脚本。</p></li><li><p>用 <strong>skript-reflect</strong> 编写的扩展可以快速测试，就像任何其他脚本一样。与需要编译和完全重新启动服务器的 <strong>Skript</strong> 插件不同， <strong>skript-reflect</strong> 脚本可以使用简单的 <code>sk reload</code>。</p></li><li><p>在 sk 脚本中实现某些功能可能需要使用反射来访问私有方法、字段和构造函数。 <strong>skript-reflect</strong> 的内置反射允许你无缝访问这些私有成员。</p></li><li><p><strong>Skript</strong> 的基本特性之一是其极大的可定制性。使用 <strong>skript-reflect</strong> 编写的扩展使 sk 的这点更为突出，这允许你在必要时快速更改你的代码。</p></li></ul><p>下面的代码块包含了一些 <strong>skript-reflect</strong> 基础的语法。</p><p>其作用是在有玩家使用 <strong>EssentialsX</strong> 的 tpa 尝试<code>/tpa lilingfeng</code>时阻止这件事</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    net.ess3.api.events.TPARequestEvent   # 导入java类</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听事件</span></span>
<span class="line"><span>on TPARequestEvent:</span></span>
<span class="line"><span>    set {_ess_User} to event.getTarget()   # 获取User对象</span></span>
<span class="line"><span>    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象</span></span>
<span class="line"><span>    # 判断玩家</span></span>
<span class="line"><span>    if {_player} is player(&quot;lilingfeng&quot;):</span></span>
<span class="line"><span>        send &quot;&amp;clilingfeng是我的不准tpa到她那里🥵&quot;</span></span>
<span class="line"><span>        cancel event   # 取消事件</span></span></code></pre></div><p>下面来逐行解析</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    net.ess3.api.events.TPARequestEvent</span></span></code></pre></div><p>这两行代码意为导入<code>net.ess3.api.events</code>包中的<code>TPARequestEvent</code><strong>类</strong>。</p><p><code>import:</code>块必须放在脚本的最左端，前面不能有缩进。</p><p>对类的调用必须在导入完成后进行，因此我们建议你尽可能将此语句放在脚本中靠顶端的位置。</p><p>通过<code>import:</code>块导入类后， <strong>skript-reflect</strong> 将创建一个 <strong>Expressions</strong> ，允许你通过其名称轻易地引用 Java 类。</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>on TPARequestEvent:</span></span></code></pre></div><p>这行代码意为注册监听<code>TPARequestEvent</code>事件，与普通 sk 里注册事件的语法没啥区别。</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    set {_ess_IUser} to event.getTarget()   # 获取IUser对象</span></span>
<span class="line"><span>    set {_player} to {_ess_IUser}.getBase()   # 获取Player对象</span></span></code></pre></div><p>这行代码意为调用这个事件里的<code>getTarget()</code>方法，来获取 tpa 的目标，其返回一个<code>IUser</code>。</p><p>这个<code>IUser</code>是 EssentialsX 的一个<strong>接口</strong>，<code>User</code>类<strong>实现</strong>了它，可以在<a href="https://jd-v2.essentialsx.net/net/ess3/api/iuser" target="_blank" rel="noreferrer">essentialsx 的 javadoc</a>里查看。</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    if {_player} is player(&quot;lilingfeng&quot;):</span></span>
<span class="line"><span>        send &quot;&amp;cliliangfeng是我的不准tpa到她那里🥵&quot;</span></span>
<span class="line"><span>        cancel event</span></span></code></pre></div><p>这几行和普通的 sk 语法没什么区别，作用是判断然后取消事件。</p><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><p>如果你需要调用其他的插件或是一些 <strong>skript</strong> 里没有而 <a href="https://bukkit.windit.net/javadoc/" target="_blank" rel="noreferrer">Bukkit API</a> 有的 API，那么会很棘手。</p><p><strong>skript-reflect</strong> 很好的解决了这一点。</p><p>比如，你正在使用 <strong>Leaves</strong> 服务端，想要用sk来改变Leaves中假人在玩家列表中显示的名字，那么可以遵循以下步骤：</p><h4 id="查询-javadoc" tabindex="-1">查询 Javadoc <a class="header-anchor" href="#查询-javadoc" aria-label="Permalink to &quot;查询 Javadoc&quot;">​</a></h4><p>修改假人的名字这一行为应该在假人加入服务器时进行，所以我们得监听这一事件。</p><p>我们需要找到 bot 事件到底是哪个，查询<a href="https://repo.leavesmc.org/javadoc/snapshots/org/leavesmc/leaves/leaves-api/1.20.6-R0.1-SNAPSHOT" target="_blank" rel="noreferrer">Leaves 的 Javadoc</a>：</p><p><img src="`+p+'" alt="搜索事件"></p><p>这里查询找到了<code>org.leavesmc.leaves.event.bot.BotEvent</code>事件。</p><p>看命名就知道应该会有更详细的<strong>子类</strong>来<strong>继承</strong>它，点进去看看，可以看到：</p><p><img src="'+i+'" alt="查找子类"></p><p>通过看类名可以知道，<code>BotJoinEvent</code>就是我们要的事件。</p><p>看介绍，发现这个事件会“Called when a fakeplayer joins a server”</p><p>接下来让我们看看这个类有哪些<strong>方法</strong>。</p><p><img src="'+l+`" alt="查找方法"></p><p>可以看到，最主要的是一个<code>getBot()</code>方法，在让我们看看这个方法会返回什么。</p><p>点击超链接，可以看到这个方法会返回一个<code>Bot</code>对象。</p><p>这个<code>Bot</code>接口是继承自<code>Player</code>的，也就是说，<code>Player</code>有的方法，<code>Bot</code>都有。</p><p>再次查询 <a href="https://bukkit.windit.net/javadoc/org/bukkit/entity/Player.html" target="_blank" rel="noreferrer">Bukkit API</a> 可以找到<code>Player</code>类有的方法，如<code>Player#setPlayerListName()</code>，这正是我们需要的方法。</p><h4 id="编写程序" tabindex="-1">编写程序 <a class="header-anchor" href="#编写程序" aria-label="Permalink to &quot;编写程序&quot;">​</a></h4><p>开始编写程序</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    org.leavesmc.leaves.event.bot.BotJoinEvent   #导入类</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 监听事件</span></span>
<span class="line"><span>on BotJoinEvent:</span></span>
<span class="line"><span>    set {_bot} to event.getBot()   # 获取假人</span></span>
<span class="line"><span>    set {_bot_name} to {_bot}.getName()   # 储存假人原本的名字</span></span>
<span class="line"><span>    {_bot}.setPlayerListName(&quot;假的%{_bot_name}%&quot;)   # 修改假人在tab列表里的名字</span></span></code></pre></div><p>这一过程也可适用于其他插件，比如<a href="https://github.com/zimzaza4" target="_blank" rel="noreferrer">zimzaza4大蛇</a>的 <a href="https://github.com/zimzaza4/Skript-Floodgate-Api" target="_blank" rel="noreferrer">Skript-Floodgate-Api</a> ， 就是利用 <strong>skript-reflect</strong> 来调用 <a href="https://wiki.geysermc.org/floodgate/api/" target="_blank" rel="noreferrer">Floodagate API</a> 的。</p><p>可以查看下面的教程来详细学习 <strong>skript-reflect</strong> 的基础功能(对，下面这一大坨只是基础)</p><h3 id="skript-reflect-基础教程" tabindex="-1">skript-reflect 基础教程 <a class="header-anchor" href="#skript-reflect-基础教程" aria-label="Permalink to &quot;skript-reflect 基础教程&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>此段部分或全部抄自 <strong>skript-reflect</strong> <a href="https://tpgamesnl.gitbook.io/skript-reflect/basics" target="_blank" rel="noreferrer">官方文档</a></p></div><h4 id="导入-java-类" tabindex="-1">导入 Java 类 <a class="header-anchor" href="#导入-java-类" aria-label="Permalink to &quot;导入 Java 类&quot;">​</a></h4><h5 id="在解析时导入类-推荐" tabindex="-1"><em>在解析时导入类(推荐)</em> <a class="header-anchor" href="#在解析时导入类-推荐" aria-label="Permalink to &quot;_在解析时导入类(推荐)_&quot;">​</a></h5><p>在大多数情况下，无需运行脚本即可知道所需类的确切限定名称。如果是这种情况，你应该使用 <strong>skript-reflect</strong> 的<code>import</code>块：</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>为避免冲突，<code>import</code>块创建的表达式仅对导入它们的脚本可用。你必须在使用它们的每个脚本中导入 Java 类。</p></div><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    java.lang.System</span></span>
<span class="line"><span></span></span>
<span class="line"><span>command /example:</span></span>
<span class="line"><span>    trigger:</span></span>
<span class="line"><span>        message &quot;%System%&quot; # java.lang.System</span></span>
<span class="line"><span>        System.out.println(&quot;test&quot;)</span></span></code></pre></div><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    java.lang.String as JavaString</span></span>
<span class="line"><span></span></span>
<span class="line"><span>command /example:</span></span>
<span class="line"><span>    trigger:</span></span>
<span class="line"><span>        message JavaString.format(&quot;Hello %%s&quot;, sender)</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>别名必须是有效的 Java 标识符！</p></div><h6 id="在低于-1-17-的-minecraft-版本上导入-nms-类" tabindex="-1">在低于 1.17 的 Minecraft 版本上导入 NMS 类 <a class="header-anchor" href="#在低于-1-17-的-minecraft-版本上导入-nms-类" aria-label="Permalink to &quot;在低于 1.17 的 Minecraft 版本上导入 NMS 类&quot;">​</a></h6><p>由于 <strong>Minecraft</strong> 1.17 以下版本的 <strong>NMS</strong> 包会随着每个 <strong>Minecraft</strong> 版本而变化，因此你应该动态生成包前缀。有关详细信息，请参阅<a href="https://tpgamesnl.gitbook.io/skript-reflect/advanced/computed-options#using-computed-options-for-nms-imports" target="_blank" rel="noreferrer">计算选项</a>。</p><h5 id="在运行时导入类" tabindex="-1"><em>在运行时导入类</em> <a class="header-anchor" href="#在运行时导入类" aria-label="Permalink to &quot;_在运行时导入类_&quot;">​</a></h5><p>有时，在执行脚本之前，无法确定所需的类引用。</p><h6 id="从完全限定的名称" tabindex="-1">从完全限定的名称 <a class="header-anchor" href="#从完全限定的名称" aria-label="Permalink to &quot;从完全限定的名称&quot;">​</a></h6><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] [java] class %text%</span></span></code></pre></div><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>on script load:</span></span>
<span class="line"><span>    set {Player} to the class &quot;org.bukkit.entity.Player&quot;</span></span>
<span class="line"><span>    message &quot;%{Player}%&quot; # org.bukkit.entity.Player</span></span></code></pre></div><h6 id="从对象" tabindex="-1"><em>从对象</em> <a class="header-anchor" href="#从对象" aria-label="Permalink to &quot;_从对象_&quot;">​</a></h6><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] [java] class[es] of %objects%</span></span>
<span class="line"><span>%objects%&#39;[s] [java] class[es]</span></span></code></pre></div><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>command /example:</span></span>
<span class="line"><span>    executable by: players</span></span>
<span class="line"><span>    trigger:</span></span>
<span class="line"><span>        set {Player} to player&#39;s class</span></span>
<span class="line"><span>        message &quot;%{Player}%&quot; # org.bukkit.entity.Player</span></span></code></pre></div><h6 id="在effect命令中导入" tabindex="-1">在effect命令中导入 <a class="header-anchor" href="#在effect命令中导入" aria-label="Permalink to &quot;在effect命令中导入&quot;">​</a></h6><p>由于导入块在 effect 命令中不可用，因此你可以使用 import effect(仅在 effect 命令中可用)：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &lt;fully qualified name&gt; [as &lt;alias&gt;]</span></span></code></pre></div><p>此导入只能在以上效果命令中使用，直到你停止服务器。</p><h5 id="处理内部类" tabindex="-1"><em>处理内部类</em> <a class="header-anchor" href="#处理内部类" aria-label="Permalink to &quot;_处理内部类_&quot;">​</a></h5><p>有时，一个类可能嵌套在另一个类中。当引用类的完全限定名称时，内部类使用一个<code>$</code>而不是<code>.</code></p><p>例如，将<code>org.bukkit.entity.EnderDragon.Phase</code>变成<code>org.bukkit.entity.EnderDragon$Phase</code>。</p><p>内部类通常比其周围的类具有更通用的名称，因此应在别名下导入这些名称：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    org.bukkit.entity.EnderDragon$Phase as EnderDragonPhase</span></span></code></pre></div><p>导入这些类的另一种方法是只导入它们的封闭类：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>    org.bukkit.entity.EnderDragon</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on load:</span></span>
<span class="line"><span>    set {phase} to EnderDragon.Phase.LEAVE_PORTAL</span></span></code></pre></div><h4 id="运行-java-代码" tabindex="-1">运行 Java 代码 <a class="header-anchor" href="#运行-java-代码" aria-label="Permalink to &quot;运行 Java 代码&quot;">​</a></h4><h5 id="调用方法" tabindex="-1"><em>调用方法</em> <a class="header-anchor" href="#调用方法" aria-label="Permalink to &quot;_调用方法_&quot;">​</a></h5><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%object%.&lt;method name&gt;(%objects%)</span></span></code></pre></div><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>event-block.breakNaturally()</span></span>
<span class="line"><span>(last spawned creeper).setPowered(true)</span></span>
<span class="line"><span>player.giveExpLevels({_levels})</span></span></code></pre></div><p>方法可以用作 <strong>Effects</strong> 、 <strong>Expressions</strong> 和 <strong>Conditions</strong> 。如果用作<strong>Conditions</strong>，则只要方法的返回值不是 <code>false</code> 、<code>null</code>或<code>0</code>， 这个 <strong>Conditions</strong> 就会通过。</p><h6 id="调用非公共方法" tabindex="-1">调用非公共方法 <a class="header-anchor" href="#调用非公共方法" aria-label="Permalink to &quot;调用非公共方法&quot;">​</a></h6><p>如果尝试调用的方法不是公共的，则可能需要在方法名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共方法，因此必须显式指定在何处查找该方法。</p><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{_arraylist}.[ArrayList]fastRemove(1)</span></span></code></pre></div><h6 id="调用overload的方法" tabindex="-1">调用Overload的方法 <a class="header-anchor" href="#调用overload的方法" aria-label="Permalink to &quot;调用Overload的方法&quot;">​</a></h6><p>通常， <strong>skript-reflect</strong> 可以从运行时传递的参数中推断出要调用的正确的Overload方法。如果需要使用某个方法的某种实现，可以在方法名称的末尾附加一个逗号分隔的列表，并用括号括起来。</p><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>System.out.println[Object]({_something})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Math.max[int, int](0, {_value})</span></span></code></pre></div><h5 id="调用字段" tabindex="-1"><em>调用字段</em> <a class="header-anchor" href="#调用字段" aria-label="Permalink to &quot;_调用字段_&quot;">​</a></h5><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%object%.&lt;descriptor&gt;</span></span></code></pre></div><h6 id="调用非公共字段" tabindex="-1">调用非公共字段 <a class="header-anchor" href="#调用非公共字段" aria-label="Permalink to &quot;调用非公共字段&quot;">​</a></h6><p>如果你尝试访问的字段不是公共的，则可能需要在字段名称前面加上括号中的声明类。由于一个对象在多个父类中可能具有同名的非公共字段，因此必须显式指定查找该字段的位置。</p><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{_hashmap}.[HashMap]modCount</span></span></code></pre></div><h5 id="调用构造函数" tabindex="-1"><em>调用构造函数</em> <a class="header-anchor" href="#调用构造函数" aria-label="Permalink to &quot;_调用构造函数_&quot;">​</a></h5><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[a] new %javatype%(%objects%)</span></span></code></pre></div><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Location(player&#39;s world， 0， 0， 0)</span></span></code></pre></div><h4 id="处理事件" tabindex="-1">处理事件 <a class="header-anchor" href="#处理事件" aria-label="Permalink to &quot;处理事件&quot;">​</a></h4><h5 id="监听事件" tabindex="-1">监听事件 <a class="header-anchor" href="#监听事件" aria-label="Permalink to &quot;监听事件&quot;">​</a></h5><p>你可以通过引用导入的类来收听任何基于 Bukkit 的事件(包括其他插件添加的事件)。例如，如果要收听 <code>org.bukkit.event.entity.EnderDragonChangePhaseEvent</code>：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>  org.bukkit.event.entity.EnderDragonChangePhaseEvent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on EnderDragonChangePhaseEvent:</span></span>
<span class="line"><span>  # your code</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>一些插件使用自己的事件处理系统，或者不通过 <strong>Bukkit</strong> 的事件执行器传递他们的事件( <strong>Skript</strong> 的一些内部事件就是这种情况)。</p><p>为了侦听事件，它必须扩展<code>org.bukkit.event.Event</code>并由 <strong>Bukkit</strong> 的事件执行器执行。</p></div><p>你还可以使用同一处理程序侦听多个事件。这些事件不必相关，但如果尝试访问在一个事件中可用但在另一个事件中不可用的方法，则应采取适当的预防措施。例如，如果要同时侦听<code>org.bukkit.event.entity.ProjectileLaunchEvent</code>和<code>org.bukkit.event.entity.ProjectileHitEvent</code>：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>  org.bukkit.event.entity.ProjectileLaunchEvent</span></span>
<span class="line"><span>  org.bukkit.event.entity.ProjectileHitEvent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on ProjectileLaunchEvent and ProjectileHitEvent:</span></span>
<span class="line"><span>  # your code</span></span></code></pre></div><h5 id="使用event-expressions" tabindex="-1">使用<code>event</code> <strong>Expressions</strong> <a class="header-anchor" href="#使用event-expressions" aria-label="Permalink to &quot;使用\`event\` **Expressions**&quot;">​</a></h5><p><strong>skript-reflect</strong> 公开一个叫做<code>event</code>的 <strong>Expressions</strong>，允许你使用反射访问事件值。</p><p>语法：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] event</span></span></code></pre></div><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>  org.bukkit.event.entity.EnderDragonChangePhaseEvent</span></span>
<span class="line"><span>  org.bukkit.entity.EnderDragon$Phase as EnderDragonPhase</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on EnderDragonChangePhaseEvent:</span></span>
<span class="line"><span>  if event.getNewPhase() is EnderDragonPhase.CIRCLING:</span></span>
<span class="line"><span>    event.setNewPhase(EnderDragonPhase.CHARGE_PLAYER)</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该 event 表达式也可用于正常的 Skript 事件。</p></div><h5 id="设置优先级" tabindex="-1">设置优先级 <a class="header-anchor" href="#设置优先级" aria-label="Permalink to &quot;设置优先级&quot;">​</a></h5><p>可以将事件的优先级设置为控制特定事件处理程序相对于其他事件处理程序的运行时间。</p><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>  org.bukkit.event.entity.EnderDragonChangePhaseEvent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on EnderDragonChangePhaseEvent with priority highest:</span></span>
<span class="line"><span>  # your code</span></span></code></pre></div><p>可以使用<code>org.bukkit.event.EventPriority</code>中定义的任何事件优先级。优先级较低的事件处理程序在优先级较高的事件处理程序之前运行。</p><p>事件优先级：</p><ul><li>lowest</li><li>low</li><li>normal</li><li>high</li><li>highest</li><li>monitor</li></ul><h5 id="处理已取消的事件" tabindex="-1">处理已取消的事件 <a class="header-anchor" href="#处理已取消的事件" aria-label="Permalink to &quot;处理已取消的事件&quot;">​</a></h5><p>默认情况下，如果事件被优先级较低的处理程序取消，则不会调用事件处理程序。可以通过指定处理程序应处理<code>all</code>事件来更改此行为。</p><p>示例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span>  org.bukkit.event.block.BlockBreakEvent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on all BlockBreakEvent:</span></span>
<span class="line"><span>  uncancel event</span></span></code></pre></div><h4 id="一些-skript-reflect-内置的小工具" tabindex="-1">一些 <strong>skript-reflect</strong> 内置的小工具 <a class="header-anchor" href="#一些-skript-reflect-内置的小工具" aria-label="Permalink to &quot;一些 **skript-reflect** 内置的小工具&quot;">​</a></h4><h5 id="collect" tabindex="-1">Collect <a class="header-anchor" href="#collect" aria-label="Permalink to &quot;Collect&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[%objects%]</span></span>
<span class="line"><span>[%objects% as %javatype%]</span></span></code></pre></div><p>创建包含指定对象的数组。指定类型可确定生成数组的组件类型。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>此语法中的括号是文字，不表示可选组。</p></div><h5 id="spread" tabindex="-1">Spread <a class="header-anchor" href="#spread" aria-label="Permalink to &quot;Spread&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...%object%</span></span></code></pre></div><p>将Java类型的数组转化为sk可读形式。</p><p>实例：</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>set {_list::*} to ...{_array}</span></span></code></pre></div><h5 id="创建数组" tabindex="-1">创建数组 <a class="header-anchor" href="#创建数组" aria-label="Permalink to &quot;创建数组&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new %javatype%[%integer%]</span></span></code></pre></div><p>创建给定类型和大小的数组。类型可能是原始类型，不需要导入。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>此语法中的括号是文字，不表示可选组。</p></div><h5 id="通过索引获取数组的值" tabindex="-1">通过索引获取数组的值 <a class="header-anchor" href="#通过索引获取数组的值" aria-label="Permalink to &quot;通过索引获取数组的值&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%array%[%integer%]</span></span></code></pre></div><p>表示数组的某个索引处的值。</p><p>可以读取和写入此值。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>此语法中的括号是文字，不表示可选组。</p></div><h5 id="null" tabindex="-1">Null <a class="header-anchor" href="#null" aria-label="Permalink to &quot;Null&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>null</span></span></code></pre></div><p>在 <strong>Java</strong> 中表示 <code>null</code> 。这与 <strong>Skript</strong> 的<code>&lt;none&gt;</code>不同 .</p><h5 id="bits" tabindex="-1">Bits <a class="header-anchor" href="#bits" aria-label="Permalink to &quot;Bits&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] (bit %number%|bit(s| range) [from] %number%( to |[ ]-[ ])%number%) of %numbers%</span></span>
<span class="line"><span>%numbers%&#39;[s] (bit %number%|1¦bit(s| range) [from] %number%( to |[ ]-[ ])%number%)</span></span></code></pre></div><p>表示数字中的位的子集。</p><p>可以读取和写入此值。</p><h5 id="raw-expression" tabindex="-1">Raw Expression <a class="header-anchor" href="#raw-expression" aria-label="Permalink to &quot;Raw Expression&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] raw %objects%</span></span></code></pre></div><p>返回表达式的基础对象。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>与 <a href="https://tpgamesnl.gitbook.io/skript-reflect/advanced/custom-syntax#expression" target="_blank" rel="noreferrer">Expression</a> 一起使用时，可以将其设置为一个值，这将更改该参数的输入值。这可用于将数据存储在调用触发器的变量中。</p><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import:</span></span>
<span class="line"><span> ch.njol.skript.lang.Variable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>effect put %objects% in %objects%:</span></span>
<span class="line"><span> parse:</span></span>
<span class="line"><span>  expr-2 is an instance of Variable # to check if the second argument is a variable</span></span>
<span class="line"><span>  continue</span></span>
<span class="line"><span> trigger:</span></span>
<span class="line"><span>  set raw expr-2 to expr-1</span></span></code></pre></div></div><h5 id="成员" tabindex="-1">成员 <a class="header-anchor" href="#成员" aria-label="Permalink to &quot;成员&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] (fields|methods|constructors) of %objects%</span></span>
<span class="line"><span>%objects%&#39;[s] (fields|methods|constructors)</span></span></code></pre></div><p>返回对象的字段、方法或构造函数的列表，包括其修饰符和参数。</p><p>如果需要不带修饰符或参数详细信息的字段或方法名称列表，请参阅<a href="https://tpgamesnl.gitbook.io/skript-reflect/basics/utilities#member-names" target="_blank" rel="noreferrer">成员名称</a>。</p><h5 id="成员的名字" tabindex="-1">成员的名字 <a class="header-anchor" href="#成员的名字" aria-label="Permalink to &quot;成员的名字&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[the] (field|method) names of %objects%</span></span>
<span class="line"><span>%objects%&#39;[s] (field|method) names</span></span></code></pre></div><p>返回对象的字段或方法的列表。</p><h5 id="判断对象是否是某个类的实例" tabindex="-1">判断对象是否是某个类的实例 <a class="header-anchor" href="#判断对象是否是某个类的实例" aria-label="Permalink to &quot;判断对象是否是某个类的实例&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%objects% (is|are) [a[n]] instance[s] of %javatypes%</span></span>
<span class="line"><span>%objects% (is not|isn&#39;t|are not|aren&#39;t) [a[n]] instance[s] of %javatypes%</span></span></code></pre></div><p>检查对象是否是给定 <strong>Java</strong> 类型的实例。</p><h5 id="类引用" tabindex="-1">类引用 <a class="header-anchor" href="#类引用" aria-label="Permalink to &quot;类引用&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%javatype%.class</span></span></code></pre></div><p>从给定的 <strong>Java</strong> 类型返回对类的引用。返回<code>java.lang.Class</code>类型的对象。此表达式还支持不需要导入的基元类型。</p><h5 id="插件实例" tabindex="-1">插件实例 <a class="header-anchor" href="#插件实例" aria-label="Permalink to &quot;插件实例&quot;">​</a></h5><div class="language-skript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">skript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[(an|the)] instance of [the] plugin %javatype/string%</span></span></code></pre></div><p>返回给定插件的实例(字符串形式的名称或插件类)。</p><p>更高级的用法及详细内容请自行查阅<a href="https://tpgamesnl.gitbook.io/skript-reflect" target="_blank" rel="noreferrer">skript-reflect文档</a></p>`,179)]))}const v=s(o,[["render",r]]);export{b as __pageData,v as default};
