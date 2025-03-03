import{_ as t,c as o,a5 as r,G as s,B as l,o as p}from"./chunks/framework.O9ad3XaM.js";const i="/assets/type_1.0cMee-Ks.png",n="/assets/var_1.CMNoxTB6.png",h="/assets/var_2.C37Br6XD.png",c="/assets/var_3.IfC9Joy5.png",d="/assets/var_4.CMSKzqlI.png",b="/assets/var_5.BjDeP24T.png",u="/assets/var_6.Dlr-Ly6I.png",k="/assets/var_7.CgbutEVv.png",P=JSON.parse('{"title":"数据相关","description":"","frontmatter":{"title":"数据相关","sidebar_position":4},"headers":[],"relativePath":"Java/process/maintenance/lang/kether/variable.md","filePath":"nitwikit/docs-java/process/maintenance/lang/kether/variable.md","lastUpdated":1740888072000}'),m={name:"Java/process/maintenance/lang/kether/variable.md"};function g(v,e,q,_,y,f){const a=l("nw-image-viewer");return p(),o("div",null,[e[0]||(e[0]=r('<h1 id="数据相关" tabindex="-1">数据相关 <a class="header-anchor" href="#数据相关" aria-label="Permalink to &quot;数据相关&quot;">​</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><details><summary>点击展开</summary><p>不会讲</p></details><h3 id="类型转换-type" tabindex="-1">类型转换(Type) <a class="header-anchor" href="#类型转换-type" aria-label="Permalink to &quot;类型转换(Type)&quot;">​</a></h3><blockquote><p><a href="https://kether.tabooproject.org/list.html#Type" target="_blank" rel="noreferrer">https://kether.tabooproject.org/list.html#Type</a></p></blockquote><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type {token} | type {type} {action}</span></span></code></pre></div><p><img src="'+i+'" alt=""></p><h3 id="自动类型转换" tabindex="-1">自动类型转换 <a class="header-anchor" href="#自动类型转换" aria-label="Permalink to &quot;自动类型转换&quot;">​</a></h3><p>TODO</p><h2 id="变量-variable" tabindex="-1">变量(Variable) <a class="header-anchor" href="#变量-variable" aria-label="Permalink to &quot;变量(Variable)&quot;">​</a></h2><p>在这里想一个非常巧妙的比喻</p><p>思考ing...</p><h2 id="kether" tabindex="-1">kether <a class="header-anchor" href="#kether" aria-label="Permalink to &quot;kether&quot;">​</a></h2><p>此处讲解 kether 自己的变量，此变量特点是 kether 环境摧毁就消失</p><p>比如：TrMenu 关闭菜单，Vulpecula 的命令执行完成</p><h3 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h3><h4 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h4><blockquote><p><a href="https://kether.tabooproject.org/list.html#Variable_Set" target="_blank" rel="noreferrer">https://kether.tabooproject.org/list.html#Variable_Set</a></p></blockquote><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>set {token} {token} | set {token} to {action}</span></span></code></pre></div><p>注意上面的语法，前者只能输入固定内容，后者可以把动作的返回值传入变量</p><p><img src="'+n+'" alt=""></p><p>接着我们获取下这个变量</p><h4 id="获取" tabindex="-1">获取 <a class="header-anchor" href="#获取" aria-label="Permalink to &quot;获取&quot;">​</a></h4><blockquote><p><a href="https://kether.tabooproject.org/list.html#Variable_Get" target="_blank" rel="noreferrer">https://kether.tabooproject.org/list.html#Variable_Get</a></p></blockquote><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>get {token} | &amp;{token}</span></span></code></pre></div><p><img src="'+h+'" alt=""></p><p>啪！空的！</p><p>我擦嘞，这是咋回事？</p><p>还记得我说过的吗</p><blockquote><p>此变量特点是 kether 环境摧毁就消失</p></blockquote><p>是的，当你执行完 <code>/vul eval set yizhan to 114514</code> 之后，kether环境已经被摧毁了，所以这个变量就消失了</p><p>正确做法：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/vul eval set yizhan to 114514 tell get yizhan</span></span></code></pre></div><p><img src="'+c+'" alt=""></p><p>成功得到了变量里的内容！</p><p>对于获取变量，我们有个更简单的办法 <code>&amp;{token}</code></p><p><img src="'+d+'" alt=""></p><p>看到这里，你就应该知道，为什么前面讲 <a href="./basic#彩色color-text">彩色(color Text)</a> 动作的时候会说</p><blockquote><p>这里要用 <code>&quot; &quot;</code> 把要打印的信息包裹起来 否则他会把这个当成变量，具体的会在后面讲到</p></blockquote><h3 id="array" tabindex="-1">array <a class="header-anchor" href="#array" aria-label="Permalink to &quot;array&quot;">​</a></h3><h4 id="基础-1" tabindex="-1">基础 <a class="header-anchor" href="#基础-1" aria-label="Permalink to &quot;基础&quot;">​</a></h4><blockquote><p><a href="https://kether.tabooproject.org/list.html#Array" target="_blank" rel="noreferrer">https://kether.tabooproject.org/list.html#Array</a></p></blockquote><p>这也是一个动作，作用是</p><blockquote><p>将动作列表的所有返回值作为集合返回。</p></blockquote><p>语法：</p><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>array [ 动作1 动作2 动作3 更多 ]</span></span></code></pre></div><p>我们搓一个出来玩玩</p><p><img src="'+b+'" alt=""></p><p>在这个集合中，数据被英文 <code>，</code> 分割开来，我们称为 <strong>元素</strong></p><p>比如在上面共有三个元素：<code>HelloWord!</code> <code>postyizhan</code> <code>0.0</code></p><p>接下来，我们把数组存进变量里</p><div class="language-kether vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kether</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>set yizhan to array [ HelloWord! player name 0.0 ]</span></span></code></pre></div><h4 id="获取指定元素" tabindex="-1">获取指定元素 <a class="header-anchor" href="#获取指定元素" aria-label="Permalink to &quot;获取指定元素&quot;">​</a></h4><p>如果我们只需要获取某数组中其中一个元素的值该怎么办？</p><p>我们给每个元素都标上号，然后获取指定号数的就好啦！<code>&amp;变量名[标号]</code></p><p><img src="'+u+'" alt=""></p><p>注意！标号是从 <strong>0</strong> 开始的</p><h4 id="element" tabindex="-1">element <a class="header-anchor" href="#element" aria-label="Permalink to &quot;element&quot;">​</a></h4><blockquote><p><a href="https://kether.tabooproject.org/list.html#Element" target="_blank" rel="noreferrer">https://kether.tabooproject.org/list.html#Element</a> 将动作的返回值作为列表获取指定元素。</p></blockquote><p>除了上面的 <code>&amp;变量名[标号]</code></p><p>我们还有一种办法获取到指定元素的值，那就是 <code>element</code> 动作</p><p><img src="'+k+'" alt=""></p><h2 id="trmenu" tabindex="-1">TrMenu <a class="header-anchor" href="#trmenu" aria-label="Permalink to &quot;TrMenu&quot;">​</a></h2><h2 id="invero" tabindex="-1">Invero <a class="header-anchor" href="#invero" aria-label="Permalink to &quot;Invero&quot;">​</a></h2><h2 id="chemdah" tabindex="-1">Chemdah <a class="header-anchor" href="#chemdah" aria-label="Permalink to &quot;Chemdah&quot;">​</a></h2><h2 id="vulpecula" tabindex="-1">Vulpecula <a class="header-anchor" href="#vulpecula" aria-label="Permalink to &quot;Vulpecula&quot;">​</a></h2><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><h3 id="每日刷新" tabindex="-1">每日刷新 <a class="header-anchor" href="#每日刷新" aria-label="Permalink to &quot;每日刷新&quot;">​</a></h3><p>TODO</p>',69)),s(a)])}const C=t(m,[["render",g]]);export{P as __pageData,C as default};
