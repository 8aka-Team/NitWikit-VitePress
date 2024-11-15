import{_ as i,c as a,a5 as n,o as l}from"./chunks/framework.O9ad3XaM.js";const d=JSON.parse('{"title":"velocity.toml","description":"","frontmatter":{"title":"velocity.toml","sidebar_position":3},"headers":[],"relativePath":"nitwikit/docs-java/advance/cross-server/build-up/Velocity/velocity.toml.md","filePath":"nitwikit/docs-java/advance/cross-server/build-up/Velocity/velocity.toml.md","lastUpdated":1730968765000}'),p={name:"nitwikit/docs-java/advance/cross-server/build-up/Velocity/velocity.toml.md"};function e(t,s,h,k,r,c){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>以下配置仅为汉化参考 ，<strong>请勿直接复制！！</strong></p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置版本。不要更改这个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config-version = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2.7&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代理应该绑定到哪个端口？默认情况下，我们将绑定到25577端口的所有地址。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bind = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0:25577&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应该显示什么MOTD(服务器消息)？当玩家将你的服务器添加到他们的服务器列表时，会显示这个。只接受MiniMessage格式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">motd = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;#09add3&gt;一个Velocity服务器&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们应该显示多少最大玩家数？(Velocity不支持在线玩家数的限制。)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show-max-players = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们应该使用Mojang对玩家进行身份验证吗 (译者注: 正版验证)？  默认情况下，这是开启的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">online-mode = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代理是否应该强制执行新的公钥安全标准？默认情况下，这是开启的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">force-key-authentication = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果从这个代理发送的客户端的ISP/AS与Mojang的认证服务器的不同，玩家将被踢出。这禁止了一些VPN和代理连接，但这是一种较弱的保护形式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prevent-client-proxy-connections = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们应该将IP地址和其他数据转发到后端服务器吗？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用选项：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;none&quot;:        不会进行任何转发。所有玩家看起来都是从代理连接的，并且将拥有离线模式的UUID。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;legacy&quot;:      以BungeeCord兼容格式转发玩家IP和UUID。如果你运行的是Minecraft 1.12或更低版本的服务器，请使用此选项。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;bungeeguard&quot;: 以BungeeGuard插件支持的格式转发玩家IP和UUID。如果你运行的是Minecraft 1.12或更低版本的服务器，并且无法实现网络级防火墙(在共享主机上)，请使用此选项。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;modern&quot;:      使用Velocity的原生转发，在登录过程中转发玩家IP和UUID。仅适用于Minecraft 1.13或更高版本。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player-info-forwarding-mode = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NONE&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用modern 或BungeeGuard IP转发，请在此处配置包含唯一密钥的文件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文件应该是UTF-8编码的，并且不为空。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">forwarding-secret-file = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;forwarding.secret&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 宣布你的服务器是否支持Forge。如果你运行一个模组服务器，我们建议开启这个。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你的网络持续运行一个模组包，考虑使用ping-passthrough = &quot;mods&quot;代替，以便在服务器列表中更好地显示。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">announce-forge = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果启用(默认为false)，并且代理处于在线模式，Velocity将踢出任何已在线的玩家，如果尝试进行重复连接。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kick-existing-players = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Velocity是否应该将服务器列表ping请求传递给后端服务器？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用选项：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;disabled&quot;:    不会进行任何传递。velocity.toml和server-icon.png将决定初始服务器列表ping响应。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;mods&quot;:        只将后端服务器的模组列表传递到响应中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#                  使用你尝试列表中的第一个服务器(或强制主机)的模组列表。如果无法联系到后端服务器，Velocity将不会显示任何模组信息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;description&quot;: 使用来自后端服务器的描述和模组列表。尝试列表中(或强制主机)响应的第一个服务器将被用于描述和模组列表。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;all&quot;:         使用后端服务器的响应作为代理响应。如果没有服务器可以联系，将使用Velocity配置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ping-passthrough = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DISABLED&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果未启用(默认为true)，玩家IP地址将被替换为&lt;ip address withheld&gt;在日志中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enable-player-address-logging = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">servers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此处配置你的服务器。每个键代表服务器的名称，值代表要连接到的服务器的IP地址。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lobby = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1:30066&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">factions = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1:30067&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">minigames = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1:30068&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家登录或从服务器被踢出时，我们应该尝试让他进入哪个服务器？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">try = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;lobby&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forced-hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此处配置你的强制主机。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;lobby.example.com&quot; = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;lobby&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;factions.example.com&quot; = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;factions&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;minigames.example.com&quot; = [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;minigames&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">advanced</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Minecraft数据包必须有多大，我们才会压缩它。将其设置为零将压缩所有数据包，将其设置为-1将完全禁用压缩。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compression-threshold = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 应该进行多少压缩(从0-9)。默认是-1，使用默认级别6。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compression-level = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 客户端在上次连接后允许多快连接(以毫秒为单位)？默认是三秒。通过将其设置为0来禁用此功能。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">login-ratelimit = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此处指定连接超时的自定义超时时间。默认是五秒。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">connection-timeout = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此处指定连接的读取超时时间。默认是30秒。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">read-timeout = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用与HAProxy的PROXY协议的兼容性。如果你不知道这是干什么用的，那么就不要启用它。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">haproxy-protocol = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在代理上启用TCP快速打开支持。需要代理在Linux上运行。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tcp-fast-open = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在Velocity上启用BungeeCord插件消息通道支持。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bungee-plugin-message-channel = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示来自客户端的ping请求到代理。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show-ping-requests = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认情况下，Velocity将尝试优雅地处理用户意外失去与服务器的连接而没有明确的断开消息的情况，通过尝试回退用户，除了读取超时的情况。BungeeCord将断开用户连接。你可以禁用此设置以使用BungeeCord的行为。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">failover-on-unexpected-server-disconnect = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 向1.13+客户端声明代理命令。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">announce-proxy-commands = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用命令的日志记录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log-command-executions = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用记录玩家连接到代理，切换服务器以及从代理断开连接的日志。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log-player-connections = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许通过Transfer数据包(Minecraft 1.20.5)从其他主机传输的玩家被接收。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">accepts-transfers = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否启用对GameSpy 4查询响应的响应。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果查询已启用，查询协议应该在哪个端口上监听？</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25577</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这是向查询服务报告的名称。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Velocity&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认情况下是否应该在查询响应中显示插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show-plugins = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div>`,3)]))}const o=i(p,[["render",e]]);export{d as __pageData,o as default};
