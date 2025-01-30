import{_ as e,c as a,a5 as s,o as l}from"./chunks/framework.O9ad3XaM.js";const k=JSON.parse('{"title":"LeviLamina 安装教程","description":"","frontmatter":{"title":"LeviLamina 安装教程","sidebar_position":1},"headers":[],"relativePath":"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install.md","filePath":"nitwikit/docs-bedrock/bds-core/process/LeviLamina/LeviLamina-Install.md","lastUpdated":1738042730000}'),t={name:"Bedrock/bds-core/process/LeviLamina/LeviLamina-Install.md"};function r(o,i,n,p,d,h){return l(),a("div",null,i[0]||(i[0]=[s(`<h1 id="levilamina-安装教程" tabindex="-1">LeviLamina 安装教程 <a class="header-anchor" href="#levilamina-安装教程" aria-label="Permalink to &quot;LeviLamina 安装教程&quot;">​</a></h1><h2 id="方法零-使用笨蛋脚本" tabindex="-1">方法零: 使用笨蛋脚本 <a class="header-anchor" href="#方法零-使用笨蛋脚本" aria-label="Permalink to &quot;方法零: 使用笨蛋脚本&quot;">​</a></h2><p>首先下载<a href="https://script.8aka.org/liteloaderbds-install" target="_blank" rel="noreferrer">安装脚本</a>，下载完后右键<strong>以管理员启动</strong>即可</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>你甚至不需要安装VC运行库，自动脚本会自行安装常用运行库，还会自动配置 Lip 镜像以加速下载</p></div><h2 id="方法一-使用-lip-进行一键配置" tabindex="-1">方法一: 使用 Lip 进行一键配置 <a class="header-anchor" href="#方法一-使用-lip-进行一键配置" aria-label="Permalink to &quot;方法一: 使用 Lip 进行一键配置&quot;">​</a></h2><h3 id="准备工作-安装-lip" tabindex="-1">准备工作-安装 Lip <a class="header-anchor" href="#准备工作-安装-lip" aria-label="Permalink to &quot;准备工作-安装 Lip&quot;">​</a></h3><p>首先，从 <a href="https://github.com/lippkg/lip/releases/latest" target="_blank" rel="noreferrer">GitHub</a> 下载 Lip 的最新版本的应用</p><p>然后，解压文件到你想要安装 Lip 的位置。</p><p>最后，将该位置添加到 PATH 环境变量中。</p><p>要检查是否成功安装 Lip ，请在终端中运行 <code>lip --version</code>。你应该看到刚刚安装的lip的版本。</p><p>如果你使用的是 Windows 系统，你也可以在 GitHub 中下载 <code>.exe</code> 后缀的安装程序来安装。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>首先创建一个新的文件夹</p><p>然后运行命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/LiteLDev/LeviLamina</span></span></code></pre></div><p>Lip 会自动下载 BDS 并配置 LeviLamina 加载器</p><div class="info custom-block"><p class="custom-block-title">信息</p><p>如果因网络问题无法下载 GO 模块或 LeviLamina 及其依赖，可以运行命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GoModuleProxyURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>和</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHubMirrorURL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>来配置镜像,官方给的镜像</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GoModuleProxyURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://goproxy.cn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHubMirrorURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.bibk.top</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">信息</p><p>如果因网络问题无法下载 BDS 服务端文件可以去其他地方寻找文件下载，并将压缩包放在 <code>your-folder\\.cache\\bdsdown</code>中</p></div><p>现在，你已成功安装了 LeviLamina 了，要启动它，请运行命今</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bedrock_server_mod.exe</span></span></code></pre></div><h2 id="方法二-手动安装-不推荐" tabindex="-1">方法二: 手动安装(不推荐) <a class="header-anchor" href="#方法二-手动安装-不推荐" aria-label="Permalink to &quot;方法二: 手动安装(不推荐)&quot;">​</a></h2><p>只有想要调试新版本的开发人员才会手动安装，手动安装只会安装允许 LeviLamina 运行的基本部件，它缺少 CrashLogger、I18N 等组件。</p><h3 id="下载必要的文件" tabindex="-1">下载必要的文件 <a class="header-anchor" href="#下载必要的文件" aria-label="Permalink to &quot;下载必要的文件&quot;">​</a></h3><ol><li>​<strong>下载 LeviLamina</strong>​： <ul><li>转到 <a href="https://github.com/LiteLDev/LeviLamina/releases" target="_blank" rel="noreferrer">GitHub 上的 LeviLamina 发布页面</a>。</li><li>选择所需的版本。</li><li>从所选版本Release中下载文件 <code>levilamina-windows-x64.zip</code></li></ul></li><li>​**下载 BDS(Minecraft服务器)**​： <ul><li>访问 <a href="https://www.minecraft.net/en-us/download/server/bedrock" target="_blank" rel="noreferrer">Minecraft 的服务器下载页面</a>。</li><li>获取与你的 LeviLamina 版本相对应的 Bedrock 专用服务器 (BDS) 版本，名为 <code>bedrock-server-&lt;version&gt;.zip</code></li></ul></li><li>​<strong>获取 PeEditor 和 PreLoader</strong>​： <ul><li>前往他们各自的 GitHub 发布页面：<a href="https://github.com/LiteLDev/PeEditor/releases" target="_blank" rel="noreferrer">PeEditor Releases</a> 和 <a href="https://github.com/LiteLDev/PreLoader/releases" target="_blank" rel="noreferrer">PreLoader Releases</a>。</li><li>下载最新的 <code>PeEditor.exe</code> ​<code>PreLoader.dll</code> 文件</li></ul></li></ol><div class="warning custom-block"><p class="custom-block-title">警告</p><p>​<strong>注意</strong>​：通常，最新版本的 LeviLamina 与最新版本的 PeEditor 和 PreLoader 保持一致。确保它们与你的 BDS 版本兼容。</p></div><h3 id="安装步骤" tabindex="-1">安装步骤 <a class="header-anchor" href="#安装步骤" aria-label="Permalink to &quot;安装步骤&quot;">​</a></h3><ol><li>​<strong>解压BDS文件</strong>​： <ul><li>将从步骤 2 获取的文件 <code>bedrock-server-&lt;version&gt;.zip</code> 解压到一个新的空文件夹中</li></ul></li><li>​<strong>放置 PeEditor 和 PreLoader</strong>​： <ul><li>将 <code>PeEditor.exe</code> ​<code>PreLoader.dll</code>​ <code>bedrock_server.exe</code> 文件移动到解压后BDS文件的目录</li></ul></li><li>​<strong>安装 LeviLamina</strong>​： <ul><li>从步骤 1 中解压文件 <code>levilamina-windows-x64.zip</code></li><li>将文件夹放入BDS同一目录中</li></ul></li><li>​<strong>运行 PeEditor</strong>​： <ul><li>双击 <code>PeEditor.exe</code> 并等待配置完成</li><li>然后，你可以在目录中找到一个名为 <code>bedrock_server_mod.exe</code> 的新文件，原始文件 <code>bedrock_server.exe</code> 将重命名为 <code>bedrock_server.exe.bak</code></li></ul></li></ol><p>现在，你已成功安装了 LeviLamina 了，要启动它，请运行命今</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bedrock_server_mod.exe</span></span></code></pre></div>`,29)]))}const g=e(t,[["render",r]]);export{k as __pageData,g as default};
