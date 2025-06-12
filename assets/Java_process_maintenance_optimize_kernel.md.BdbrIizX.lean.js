import{_ as c,c as h,j as s,a as e,G as a,w as p,a5 as r,B as l,o}from"./chunks/framework.O9ad3XaM.js";const y=JSON.parse('{"title":"内核优化","description":"","frontmatter":{"title":"内核优化","sidebar_position":6},"headers":[],"relativePath":"Java/process/maintenance/optimize/kernel.md","filePath":"nitwikit/docs-java/process/maintenance/optimize/kernel.md","lastUpdated":1749617524000}'),k={name:"Java/process/maintenance/optimize/kernel.md"};function d(g,n,F,u,m,v){const i=l("TabItem"),t=l("Tabs");return o(),h("div",null,[n[3]||(n[3]=s("h1",{id:"内核优化",tabindex:"-1"},[e("内核优化 "),s("a",{class:"header-anchor",href:"#内核优化","aria-label":'Permalink to "内核优化"'},"​")],-1)),n[4]||(n[4]=s("p",null,"内核优化主要针对 Linux 操作系统而非 Windows，以下命令需要以 root 权限运行",-1)),n[5]||(n[5]=s("h2",{id:"内核参数优化",tabindex:"-1"},[e("内核参数优化 "),s("a",{class:"header-anchor",href:"#内核参数优化","aria-label":'Permalink to "内核参数优化"'},"​")],-1)),n[6]||(n[6]=s("p",null,"tuned 调优服务可以通过设置调优配置文件来调整操作系统，以便在特定工作负载下更好地执行。",-1)),n[7]||(n[7]=s("p",null,"执行以下命令来安装 tuned:",-1)),a(t,{defaultValue:"Debian/Ubuntu"},{default:p(()=>[a(i,{value:"Debian/Ubuntu"},{default:p(()=>n[0]||(n[0]=[s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tuned")])])])],-1)])),_:1}),a(i,{value:"RedHat/CentOS"},{default:p(()=>n[1]||(n[1]=[s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," yum"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tuned")])])])],-1)])),_:1}),a(i,{value:"ArchLinux"},{default:p(()=>n[2]||(n[2]=[s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sudo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," pacman"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -S"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tuned")])])])],-1)])),_:1})]),_:1}),n[8]||(n[8]=r(`<p>然后启动：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tuned</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span></span></code></pre></div><p>然后运行工具并使用以下命令调整内核：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tuned-adm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> throughput-performance</span></span></code></pre></div><h2 id="设置大页面" tabindex="-1">设置大页面 <a class="header-anchor" href="#设置大页面" aria-label="Permalink to &quot;设置大页面&quot;">​</a></h2><p>打开文件 <code>/etc/sysctl.conf</code>,在末尾添加以下内容</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vm.nr_hugepages = &lt;需要的页数&gt;</span></span></code></pre></div><p>可以通过一个公式知道需要的页数：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(分配的内存数 (单位：MB)) / 2 + 300</span></span></code></pre></div><p>比如我分配了 12GB 的内存 (也就是 12288 MB),那么设置的值为<code>12288 / 2+ 300 = 6444</code>,最后的设置应该长这样</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vm.nr_hugepages = 6444</span></span></code></pre></div><p>然后重启物理机</p><h2 id="激活透明大页面" tabindex="-1">激活透明大页面 <a class="header-anchor" href="#激活透明大页面" aria-label="Permalink to &quot;激活透明大页面&quot;">​</a></h2><p>首先需要检查操作系统是否支持大页面：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/kernel/mm/transparent_hugepage/shmem_enabled</span></span></code></pre></div><p>如果返回包含以下内容，那么操作系统支持透明大页面</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">always</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> within_size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advise</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> never</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deny</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> force</span></span></code></pre></div><p>然后运行以下命令激活透明大页面</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> madvise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/kernel/mm/transparent_hugepage/enabled</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/kernel/mm/transparent_hugepage/shmem_enabled</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/kernel/mm/transparent_hugepage/defrag</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sys/kernel/mm/transparent_hugepage/khugepaged/defrag</span></span></code></pre></div><p>最后，我们需要配置开机自启动</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysfsutils</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysfs.d/enableTHP.conf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kernel/mm/transparent_hugepage/enabled=madvise</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kernel/mm/transparent_hugepage/shmem_enabled=advise</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kernel/mm/transparent_hugepage/defrag=defer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kernel/mm/transparent_hugepage/khugepaged/defrag=1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysfsutils</span></span></code></pre></div><p>这样就可以了，然后重启机器即可</p><h2 id="cpu-调优" tabindex="-1">CPU 调优 <a class="header-anchor" href="#cpu-调优" aria-label="Permalink to &quot;CPU 调优&quot;">​</a></h2><p>强制所有 CPU 核心运行在最高频率 (不同于超频，不会影响 CPU 寿命)</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cpupower</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> frequency-set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> performance</span></span></code></pre></div><h2 id="xanmod" tabindex="-1">XanMod <a class="header-anchor" href="#xanmod" aria-label="Permalink to &quot;XanMod&quot;">​</a></h2><p>XanMod Linux 内核融合了许多优化补丁，包括许多来自 Cloudflare,Google 等未被合并进主分支的优化</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><ol><li><p>检查兼容性</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dl.xanmod.org/check_x86-64_psabi.sh)</span></span></code></pre></div><p>输出结果</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CPU</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> supports</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x86-64-v4</span></span></code></pre></div><p>这里可以看到我的 CPU 是支持 v4 版本的，安装时可以按照此结果进行选择。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>一定要选择符合的版本进行安装，否则将导致无法正常启动！</p></div></li><li><p>添加上游公钥：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://dl.xanmod.org/archive.key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> gpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dearmor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/keyrings/xanmod-archive-keyring.gpg</span></span></code></pre></div></li><li><p>添加源：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/xanmod releases main&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/xanmod-release.list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div></li><li><p>安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-xanmod-rt-x64v4</span></span></code></pre></div><p><code>v4</code> 需要根据第 1 步的 CPU supports 更改，最后重启即可</p></li><li><p>检查安装</p><p>重启后检查安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span></span></code></pre></div></li></ol><h3 id="配置优化" tabindex="-1">配置优化 <a class="header-anchor" href="#配置优化" aria-label="Permalink to &quot;配置优化&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><ol><li>其中所有参数并非都能生效，需修改后<code>sysctl -p</code>验证有无报错</li><li>其中<code>net.ipv4.tcp_wmem</code>和<code>net.ipv4.tcp_rmem</code>缓冲区参数需经过<a href="https://tcp-cal.mereith.com/" target="_blank" rel="noreferrer">👉计算后</a>得到</li><li><strong>修改前先备份！！！</strong></li></ol></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ------ 网络调优：基本 ------</span></span>
<span class="line"><span># TTL 配置，Linux 默认 64</span></span>
<span class="line"><span># net.ipv4.ip_default_ttl=64</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 参阅 RFC 1323. 应当启用。</span></span>
<span class="line"><span>net.ipv4.tcp_timestamps=1</span></span>
<span class="line"><span># ------ END 网络调优：基本 ------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------ 网络调优：内核 Backlog 队列和缓存相关 ------</span></span>
<span class="line"><span># Ref: https://www.starduster.me/2020/03/02/linux-network-tuning-kernel-parameter/</span></span>
<span class="line"><span># Ref: https://blog.cloudflare.com/optimizing-tcp-for-high-throughput-and-low-latency/</span></span>
<span class="line"><span># Ref: https://zhuanlan.zhihu.com/p/149372947</span></span>
<span class="line"><span># 以下四项实际上和 net.ipv4.tcp_rmem, net.ipv4.tcp_wmem 重复，设定一个即可</span></span>
<span class="line"><span># https://github.com/torvalds/linux/blob/87d6aab2389e5ce0197d8257d5f8ee965a67c4cd/net/ipv4/tcp_output.c#L241-L248</span></span>
<span class="line"><span># net.core.wmem_default=1310720</span></span>
<span class="line"><span># net.core.rmem_default=1310720</span></span>
<span class="line"><span># net.core.rmem_max=536870912</span></span>
<span class="line"><span># net.core.wmem_max=536870912</span></span>
<span class="line"><span># 由左往右为 最小值 默认值 最大值</span></span>
<span class="line"><span># 有条件建议依据实测结果调整 tcp_rmem, tcp_wmem 相关数值</span></span>
<span class="line"><span># 个人实测差别不大，可能是我网本来就比较好</span></span>
<span class="line"><span># 缓冲区相关配置均和内存相关</span></span>
<span class="line"><span>net.ipv4.tcp_rmem=8192 262144 536870912</span></span>
<span class="line"><span>net.ipv4.tcp_wmem=4096 16384 536870912</span></span>
<span class="line"><span>net.ipv4.tcp_adv_win_scale=-2</span></span>
<span class="line"><span>net.ipv4.tcp_collapse_max_bytes=6291456</span></span>
<span class="line"><span>net.ipv4.tcp_notsent_lowat=131072</span></span>
<span class="line"><span>net.core.netdev_max_backlog=10240</span></span>
<span class="line"><span>net.ipv4.tcp_max_syn_backlog=10240</span></span>
<span class="line"><span>net.core.somaxconn=3276800</span></span>
<span class="line"><span>net.ipv4.tcp_abort_on_overflow=1</span></span>
<span class="line"><span># 所有网卡每次软中断最多处理的总帧数量</span></span>
<span class="line"><span>net.core.netdev_budget = 600</span></span>
<span class="line"><span># 流控和拥塞控制相关调优</span></span>
<span class="line"><span># Egress traffic control 相关。可选 fq, cake</span></span>
<span class="line"><span># 实测二者区别不大，保持默认 fq 即可</span></span>
<span class="line"><span>net.core.default_qdisc=fq</span></span>
<span class="line"><span># Xanmod 内核 6.X 版本目前默认使用 bbr3, 无需设置</span></span>
<span class="line"><span># 实测比 bbr, bbr2 均有提升</span></span>
<span class="line"><span># 不过网络条件不同会影响。有需求请实测.</span></span>
<span class="line"><span># net.ipv4.tcp_congestion_control=bbr3</span></span>
<span class="line"><span># 显式拥塞通知</span></span>
<span class="line"><span># 已被发现在高度拥塞的网络上是有害的.</span></span>
<span class="line"><span># net.ipv4.tcp_ecn=1</span></span>
<span class="line"><span># TCP 自动窗口</span></span>
<span class="line"><span># 要支持超过 64KB 的 TCP 窗口必须启用</span></span>
<span class="line"><span>net.ipv4.tcp_window_scaling=1</span></span>
<span class="line"><span># 开启后，TCP 拥塞窗口会在一个 RTO 时间</span></span>
<span class="line"><span># 空闲之后重置为初始拥塞窗口 (CWND) 大小.</span></span>
<span class="line"><span># 大部分情况下，尤其是大流量长连接，设置为 0.</span></span>
<span class="line"><span># 对于网络情况时刻在相对剧烈变化的场景，设置为 1.</span></span>
<span class="line"><span>net.ipv4.tcp_slow_start_after_idle=1</span></span>
<span class="line"><span># nf_conntrack 调优</span></span>
<span class="line"><span># Add Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60</span></span>
<span class="line"><span>net.nf_conntrack_max=1000000</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_max=1000000</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_tcp_timeout_fin_wait=30</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_tcp_timeout_time_wait=30</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_tcp_timeout_close_wait=15</span></span>
<span class="line"><span>net.netfilter.nf_conntrack_tcp_timeout_established=300</span></span>
<span class="line"><span>net.ipv4.netfilter.ip_conntrack_tcp_timeout_established=7200</span></span>
<span class="line"><span># TIME-WAIT 状态调优</span></span>
<span class="line"><span># Ref: http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html</span></span>
<span class="line"><span># Ref: https://www.cnblogs.com/lulu/p/4149312.html</span></span>
<span class="line"><span># 4.12 内核中此参数已经永久废弃，不用纠结是否需要开启</span></span>
<span class="line"><span># net.ipv4.tcp_tw_recycle=0</span></span>
<span class="line"><span>## 只对客户端生效，服务器连接上游时也认为是客户端</span></span>
<span class="line"><span>net.ipv4.tcp_tw_reuse=1</span></span>
<span class="line"><span># 系统同时保持 TIME_WAIT 套接字的最大数量</span></span>
<span class="line"><span># 如果超过这个数字 TIME_WAIT 套接字将立刻被清除</span></span>
<span class="line"><span>net.ipv4.tcp_max_tw_buckets=55000</span></span>
<span class="line"><span># ------ END 网络调优：内核 Backlog 队列和缓存相关 ------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------ 网络调优：其他 ------</span></span>
<span class="line"><span># Ref: https://zhuanlan.zhihu.com/p/149372947</span></span>
<span class="line"><span># Ref: https://www.starduster.me/2020/03/02/linux-network-tuning-kernel-parameter/\\#netipv4tcp_max_syn_backlog_netipv4tcp_syncookies</span></span>
<span class="line"><span># 启用选择应答</span></span>
<span class="line"><span># 对于广域网通信应当启用</span></span>
<span class="line"><span>net.ipv4.tcp_sack=1</span></span>
<span class="line"><span># 启用转发应答</span></span>
<span class="line"><span># 对于广域网通信应当启用</span></span>
<span class="line"><span>net.ipv4.tcp_fack=1</span></span>
<span class="line"><span># TCP SYN 连接超时重传次数</span></span>
<span class="line"><span>net.ipv4.tcp_syn_retries=3</span></span>
<span class="line"><span>net.ipv4.tcp_synack_retries=3</span></span>
<span class="line"><span># TCP SYN 连接超时时间，设置为 5 约为 30s</span></span>
<span class="line"><span>net.ipv4.tcp_retries2=5</span></span>
<span class="line"><span># 开启 SYN 洪水攻击保护</span></span>
<span class="line"><span># 注意：tcp_syncookies 启用时，此时实际上没有逻辑上的队列长度，</span></span>
<span class="line"><span># Backlog 设置将被忽略。syncookie 是一个出于对现实的妥协，</span></span>
<span class="line"><span># 严重违反 TCP 协议的设计，会造成 TCP option 不可用，且实现上</span></span>
<span class="line"><span># 通过计算 hash 避免维护半开连接也是一种 tradeoff 而非万金油，</span></span>
<span class="line"><span># 勿听信所谓&quot;安全优化教程&quot;而无脑开启</span></span>
<span class="line"><span>net.ipv4.tcp_syncookies=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: https://linuxgeeks.github.io/2017/03/20/212135-Linux%E5%86%85%E6%A0%B8%E5%8F%82%E6%95%B0rp_filter/</span></span>
<span class="line"><span># 开启反向路径过滤</span></span>
<span class="line"><span># Aliyun 负载均衡实例后端的 ECS 需要设置为 0</span></span>
<span class="line"><span>net.ipv4.conf.default.rp_filter=2</span></span>
<span class="line"><span>net.ipv4.conf.all.rp_filter=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 减少处于 FIN-WAIT-2 连接状态的时间使系统可以处理更多的连接</span></span>
<span class="line"><span># Ref: https://www.cnblogs.com/kaishirenshi/p/11544874.html</span></span>
<span class="line"><span>net.ipv4.tcp_fin_timeout=10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: https://xwl-note.readthedocs.io/en/latest/linux/tuning.html</span></span>
<span class="line"><span># 默认情况下一个 TCP 连接关闭后，把这个连接曾经有的参数保存到 dst_entry 中</span></span>
<span class="line"><span># 只要 dst_entry 没有失效，下次新建立相同连接的时候就可以使用保存的参数来初始化这个连接。</span></span>
<span class="line"><span># 通常情况下是关闭的，高并发配置为 1.</span></span>
<span class="line"><span>net.ipv4.tcp_no_metrics_save=1</span></span>
<span class="line"><span># unix socket 最大队列</span></span>
<span class="line"><span>net.unix.max_dgram_qlen=1024</span></span>
<span class="line"><span># 路由缓存刷新频率</span></span>
<span class="line"><span>net.ipv4.route.gc_timeout=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60</span></span>
<span class="line"><span># 启用 MTU 探测，在链路上存在 ICMP 黑洞时候有用（大多数情况是这样）</span></span>
<span class="line"><span>net.ipv4.tcp_mtu_probing = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># No Ref</span></span>
<span class="line"><span># 开启并记录欺骗，源路由和重定向包</span></span>
<span class="line"><span>net.ipv4.conf.all.log_martians=1</span></span>
<span class="line"><span>net.ipv4.conf.default.log_martians=1</span></span>
<span class="line"><span># 处理无源路由的包</span></span>
<span class="line"><span>net.ipv4.conf.all.accept_source_route=0</span></span>
<span class="line"><span>net.ipv4.conf.default.accept_source_route=0</span></span>
<span class="line"><span># TCP KeepAlive 调优</span></span>
<span class="line"><span># 最大闲置时间</span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_time=600</span></span>
<span class="line"><span># 最大失败次数，超过此值后将通知应用层连接失效</span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_probes=3</span></span>
<span class="line"><span># 发送探测包的时间间隔</span></span>
<span class="line"><span>net.ipv4.tcp_keepalive_intvl=15</span></span>
<span class="line"><span># 放弃回应一个 TCP 连接请求前，需要进行多少次重试</span></span>
<span class="line"><span>net.ipv4.tcp_retries1 = 5</span></span>
<span class="line"><span># 在丢弃激活 (已建立通讯状况) 的 TCP 连接之前，需要进行多少次重试</span></span>
<span class="line"><span>net.ipv4.tcp_retries2 = 5</span></span>
<span class="line"><span># 孤立 Socket</span></span>
<span class="line"><span>net.ipv4.tcp_orphan_retries = 3</span></span>
<span class="line"><span># 系统所能处理不属于任何进程的 TCP sockets 最大数量</span></span>
<span class="line"><span>net.ipv4.tcp_max_orphans=3276800</span></span>
<span class="line"><span># arp_table 的缓存限制优化</span></span>
<span class="line"><span>net.ipv4.neigh.default.gc_thresh1=128</span></span>
<span class="line"><span>net.ipv4.neigh.default.gc_thresh2=512</span></span>
<span class="line"><span>net.ipv4.neigh.default.gc_thresh3=4096</span></span>
<span class="line"><span>net.ipv4.neigh.default.gc_stale_time=120</span></span>
<span class="line"><span>net.ipv4.conf.default.arp_announce=2</span></span>
<span class="line"><span>net.ipv4.conf.lo.arp_announce=2</span></span>
<span class="line"><span>net.ipv4.conf.all.arp_announce=2</span></span>
<span class="line"><span># ------ END 网络调优：其他 ------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------ 内核调优 ------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: Aliyun, etc</span></span>
<span class="line"><span># 内核 Panic 后 1 秒自动重启</span></span>
<span class="line"><span>kernel.panic=1</span></span>
<span class="line"><span># 允许更多的 PIDs, 减少滚动翻转问题</span></span>
<span class="line"><span>kernel.pid_max=32768</span></span>
<span class="line"><span># 内核所允许的最大共享内存段的大小（bytes）</span></span>
<span class="line"><span>kernel.shmmax=4294967296</span></span>
<span class="line"><span># 在任何给定时刻，系统上可以使用的共享内存的总量（pages）</span></span>
<span class="line"><span>kernel.shmall=1073741824</span></span>
<span class="line"><span># 设定程序 core 时生成的文件名格式</span></span>
<span class="line"><span>kernel.core_pattern=core_%e</span></span>
<span class="line"><span># 当发生 oom 时，自动转换为 panic</span></span>
<span class="line"><span>vm.panic_on_oom=1</span></span>
<span class="line"><span># 表示强制 Linux VM 最低保留多少空闲内存（Kbytes）</span></span>
<span class="line"><span># vm.min_free_kbytes=1048576</span></span>
<span class="line"><span># 该值高于 100, 则将导致内核倾向于回收 directory 和 inode cache</span></span>
<span class="line"><span>vm.vfs_cache_pressure=250</span></span>
<span class="line"><span># 表示系统进行交换行为的程度，数值（0-100）越高，越可能发生磁盘交换</span></span>
<span class="line"><span>vm.swappiness=10</span></span>
<span class="line"><span># 仅用 10% 做为系统 cache</span></span>
<span class="line"><span>vm.dirty_ratio=10</span></span>
<span class="line"><span>vm.overcommit_memory=1</span></span>
<span class="line"><span># 增加系统文件描述符限制</span></span>
<span class="line"><span># Fix error: too many open files</span></span>
<span class="line"><span>fs.file-max=6553560</span></span>
<span class="line"><span>fs.inotify.max_user_instances=8192</span></span>
<span class="line"><span>fs.inotify.max_user_instances=8192</span></span>
<span class="line"><span># 内核响应魔术键</span></span>
<span class="line"><span>kernel.sysrq=1</span></span>
<span class="line"><span># 弃用</span></span>
<span class="line"><span># net.ipv4.tcp_low_latency=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: https://gist.github.com/lixingcong/0e13b4123d29a465e364e230b2e45f60</span></span>
<span class="line"><span># 当某个节点可用内存不足时，系统会倾向于从其他节点分配内存。对 Mongo/Redis 类 cache 服务器友好</span></span>
<span class="line"><span>vm.zone_reclaim_mode=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ref: Unknwon</span></span>
<span class="line"><span># 开启 F-RTO(针对 TCP 重传超时的增强的恢复算法).</span></span>
<span class="line"><span># 在无线环境下特别有益处，因为在这种环境下分组丢失典型地是因为随机无线电干扰而不是中间路由器阻塞</span></span>
<span class="line"><span>net.ipv4.tcp_frto = 2</span></span>
<span class="line"><span># TCP FastOpen</span></span>
<span class="line"><span>net.ipv4.tcp_fastopen = 3</span></span>
<span class="line"><span># TCP 流中重排序的数据报最大数量</span></span>
<span class="line"><span>net.ipv4.tcp_reordering = 300</span></span>
<span class="line"><span># 开启后，在重传时会试图发送满大小的包。这是对一些有 BUG 的打印机的绕过方式</span></span>
<span class="line"><span>net.ipv4.tcp_retrans_collapse = 0</span></span>
<span class="line"><span># 自动阻塞判断</span></span>
<span class="line"><span>net.ipv4.tcp_autocorking = 1</span></span>
<span class="line"><span># TCP 内存自动调整</span></span>
<span class="line"><span>net.ipv4.tcp_moderate_rcvbuf = 1</span></span>
<span class="line"><span># 单个 TSO 段可消耗拥塞窗口的比例，默认值为 3</span></span>
<span class="line"><span>net.ipv4.tcp_tso_win_divisor = 3</span></span>
<span class="line"><span># 对于在 RFC1337 中描述的 TIME-WAIT Assassination Hazards in TCP 问题的修复</span></span>
<span class="line"><span>net.ipv4.tcp_rfc1337 = 1</span></span>
<span class="line"><span># 包转发。出于安全考虑，Linux 系统默认禁止数据包转发</span></span>
<span class="line"><span>net.ipv4.ip_forward = 0</span></span>
<span class="line"><span># 取消对广播 ICMP 包的回应</span></span>
<span class="line"><span>net.ipv4.icmp_echo_ignore_broadcasts = 1</span></span>
<span class="line"><span># 开启恶意 ICMP 错误消息保护</span></span>
<span class="line"><span>net.ipv4.icmp_ignore_bogus_error_responses = 1</span></span></code></pre></div><p>参考 NodeSeek 大佬教程：</p><ul><li><a href="https://www.nodeseek.com/post-37225-1" target="_blank" rel="noreferrer">https://www.nodeseek.com/post-37225-1</a></li><li><a href="https://www.nodeseek.com/post-197087-1" target="_blank" rel="noreferrer">https://www.nodeseek.com/post-197087-1</a></li></ul>`,34))])}const C=c(k,[["render",d]]);export{y as __pageData,C as default};
