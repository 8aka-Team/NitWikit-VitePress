import{_ as r,c as h,a5 as d,G as l,w as t,j as s,B as i,o as c,a}from"./chunks/framework.O9ad3XaM.js";const u="/assets/1.CXfQFq2t.png",m="/assets/WindTerm.DKpPBeJy.png",k="/assets/2.hAvvi7CA.png",g="/assets/termux_screenshot.DoLIESVs.jpg",x="/assets/macOS_terminal.BDhSw7Bt.png",E=JSON.parse('{"title":"连接服务器","description":"","frontmatter":{"title":"连接服务器","sidebar_position":2},"headers":[],"relativePath":"advance/Linux/Connect-to-server.md","filePath":"nitwikit/docs/advance/Linux/Connect-to-server.md","lastUpdated":1738038571000}'),b={name:"advance/Linux/Connect-to-server.md"};function f(w,e,v,_,S,y){const n=i("TabItem"),o=i("Tabs"),p=i("nw-image-viewer");return c(),h("div",null,[e[6]||(e[6]=d('<h1 id="连接服务器" tabindex="-1">连接服务器 <a class="header-anchor" href="#连接服务器" aria-label="Permalink to &quot;连接服务器&quot;">​</a></h1><p>Linux 系统上有一个工具被业界广泛使用，它就是 <code>ssh</code>。它虽然不能远程控制桌面，但是可以远程登录服务器的命令行，并让服务器执行一些命令。由于 <code>ssh</code> 非常常用，现在很多Linux发行版都已经默认集成了这个命令。 目前使用最广的提供 ssh 命令的软件是 <strong>OpenSSH</strong>。</p><h2 id="开启ssh服务" tabindex="-1">开启ssh服务 <a class="header-anchor" href="#开启ssh服务" aria-label="Permalink to &quot;开启ssh服务&quot;">​</a></h2><p>为了让客户能顺利连接服务器，云服务器的sshd服务一般默认开启。如果你使用的是家里云，或者云服务器的sshd服务确实没有开启(比如你是只能通过服务商提供的VNC或者第三方远控软件连接的服务器，无法使用ssh)，那么你可能需要先开启sshd服务才能连接到服务器。 在主流的使用 Systemd 的Linux发行版中，执行<code>systemctl enable --now sshd</code>命令即可开启 sshd 服务，如果这些命令都报错，证明 sshd 服务存在问题，你可以把报错复制粘贴到搜索引擎上查询怎么修复这个问题。 开启 sshd 服务后，你就可以连接到这台服务器了。</p><p>成功开启ssh服务后，如果要从公网连接，你还需要把ssh服务的端口<code>22</code>开放到公网。开放的方法与开放 Windows 的远程桌面端口的方式完全相同，但是协议只需要 TCP 即可。</p><p>::: warn</p><p>为了安全请不要在服务器上允许 root 用户登录 ssh！如果 ssh 被暴力破解的话会产生非常严重的后果！</p><p>最好可以禁用密码登录，仅允许密钥登录</p><p>关于配置你服务器的 ssh 使其更安全，可以查看<a href="https://wiki.archlinuxcn.org/wiki/OpenSSH#%E4%BF%9D%E6%8A%A4" target="_blank" rel="noreferrer">Arch Linux Wiki 的这篇文章</a></p><p>:::</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>配置直接在公网使用22端口连接服务器ssh<strong>会导致严重的安全性问题</strong>，详见<a href="./../../process/maintenance/how-to-defend-against-cyber-attacks">如何抵御网络攻击</a>。</p><p>另外除非有明确需求，不要随意配置 UDP 协议端口映射，包括上文中提到的<strong>不需要UDP协议</strong>的 ssh，否则可能导致你的服务器被 DDoS！详见<a href="./../../process/maintenance/how-to-defend-against-cyber-attacks">如何抵御网络攻击</a>。</p></div><h2 id="连接ssh服务" tabindex="-1">连接ssh服务 <a class="header-anchor" href="#连接ssh服务" aria-label="Permalink to &quot;连接ssh服务&quot;">​</a></h2><h3 id="linux的ssh命令" tabindex="-1">Linux的ssh命令 <a class="header-anchor" href="#linux的ssh命令" aria-label="Permalink to &quot;Linux的ssh命令&quot;">​</a></h3><p>就像 Windows 不用安装任何软件就能连接 Windows 的远程桌面一样， Linux 也内置了连接 ssh 的方式，直接执行 ssh 命令即可连接。它的语法如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">usernam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">addres</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-p </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">port]</span></span></code></pre></div><p>如何要指定端口，你需要指定端口参数。在一些操作系统上这个参数是<code>-p</code>，例如<code>ssh root@8aka.org -p 48291</code>，有一些工具上则是直接在后面输入端口。 例如 Xshell 是<code>ssh root@8aka.org 48291</code>。 你需要根据不同的工具的使用方式来确定ssh的命令格式。比如，你可以仅执行 <code>ssh</code> 命令(等价于 <code>ssh --help</code>)，然后让 ssh 工具提示你如何使用当前工具的这个命令，如果需要更详细的说明可以输入命令 <code>man ssh</code></p><p>在输入完这行命令后，服务器通常会要求你输入该用户的密码。</p><p>如果你不想手动输密码，可以使用<strong>密钥登录</strong>，这种方法更安全且通常更难以被破解，其步骤为：</p><ol><li><p>使用 <code>ssh-keygen</code> 命令生成你的 ssh 密钥。</p></li><li><p>使用如 <code>cat .ssh/id_xxxx.pub</code> 命令来获取你生成的 ssh 公钥(此命令中<code>xxxx</code>的值通常取决于你生成密钥对时选择的算法)</p></li><li><p>在服务器对应用户的家目录下创建 <code>./ssh/authorized_keys</code>，编辑它，将你的公钥粘贴进去，每个公钥独占一行</p></li><li><p>执行上面的命令，你会发现连接时不再需要密码而是直接弹出 shell</p></li></ol><h3 id="使用工具连接" tabindex="-1">使用工具连接 <a class="header-anchor" href="#使用工具连接" aria-label="Permalink to &quot;使用工具连接&quot;">​</a></h3><p>其他操作系统也可以使用工具连接至服务器，在这里举出几个工具：</p>',21)),l(o,null,{default:t(()=>[l(n,{value:"Powershell",label:"Powershell",default:""},{default:t(()=>e[0]||(e[0]=[s("p",null,[s("img",{src:u,alt:""})],-1),s("p",null,"Windows 系统自带的 Powershell",-1),s("p",null,[a("按下 "),s("code",null,"Win + R"),a(" 输入 "),s("code",null,"powershell"),a(" 即可(如果安装了新版的 Powershell 那么你应该输入"),s("code",null,"pwsh"),a(")")],-1),s("p",null,[a("随后在其中输入 "),s("code",null,"ssh -p <port> <username>@<hostname>"),a(" 即可连接 Linux 服务器。")],-1),s("p",null,"此时会弹出是否保存服务器密钥，选择接受并保存，之后就不会再弹出。",-1),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"port 输入服务器的 ssh 端口"),s("p",null,"username 为登录服务器的用户名"),s("p",null,"hostname 为服务器的域名或者 IP")],-1)])),_:1}),l(n,{value:"windterm",label:"WindTerm"},{default:t(()=>e[1]||(e[1]=[s("p",null,[s("img",{src:m,alt:"WindTerm"})],-1),s("p",null,"一个开源的 SSH/Telnet/Serial/Shell/Sftp 客户端工具",-1),s("p",null,[s("a",{href:"https://github.com/kingToolbox/WindTerm",target:"_blank",rel:"noreferrer"},"https://github.com/kingToolbox/WindTerm")],-1)])),_:1}),l(n,{value:"finelshell",label:"FinelShell"},{default:t(()=>e[2]||(e[2]=[s("p",null,[s("img",{src:k,alt:"finalshell终端"})],-1),s("p",null,"FinalShell是一体化的的服务器，网络管理软件，不仅是ssh客户端，还是功能强大的开发，运维工具，充分满足开发，运维需求.",-1)])),_:1}),l(n,{value:"xshell",label:"Xshell"},{default:t(()=>e[3]||(e[3]=[s("p",null,[s("img",{src:"https://www.xshell.com/wp-content/uploads/2020/10/p-xshell7-top-zh.png",alt:"xshell终端"})],-1),s("p",null,"他称自己是 业界最强大的SSH客户机",-1)])),_:1}),l(n,{value:"termux",label:"安卓手机(termux)"},{default:t(()=>e[4]||(e[4]=[s("p",null,[a("你需要安装 termux 这个软件。你可以去 Google Play 下载，也可以去"),s("a",{href:"https://github.com/termux/termux-app",target:"_blank",rel:"noreferrer"},"它的开源地址"),a("下载。")],-1),s("p",null,"安装好之后，打开软件就是命令行，随后直接使用 ssh 命令即可连接。",-1),s("p",null,[s("img",{src:g,alt:"termux终端"})],-1)])),_:1}),l(n,{value:"zsh",label:"macOS(zsh)"},{default:t(()=>e[5]||(e[5]=[s("p",null,"macOS 内置 ssh 命令，我们可以用终端来执行它。要打开macos上的终端，可以使用以下方式：",-1),s("ul",null,[s("li",null,[s("p",null,"(如果终端app没有被移动过)打开启动台，打开第一页的其他文件夹，点击终端。或者你也可以在应用文件夹(入口默认固定在访达侧边栏上)里找到它。")]),s("li",null,[s("p",null,"按下command+空格或键盘上的搜索键唤起 spotlight ，输入“终端”，然后它就会显示在下面。")])],-1),s("p",null,[s("img",{src:x,alt:"macos终端"})],-1),s("p",null,"打开终端后，使用上文中提到的ssh命令即可连接到服务器。",-1)])),_:1})]),_:1}),e[7]||(e[7]=s("p",null,"除了用 ssh 连接服务器之外，还有可以使用远程桌面。比如 VNC 和 RDP。服务器上一般不配备桌面环境和远程桌面环境，除非是非常需要，否则不建议在服务器上使用远程桌面。 关于桌面环境和远程桌面服务器的搭建，本文档不给予详细阐释，需要者可自行上网搜索相关内容。",-1)),l(p)])}const P=r(b,[["render",f]]);export{E as __pageData,P as default};
