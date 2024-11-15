import{_ as r,c as p,a5 as a,j as s,G as e,w as t,a as i,B as o,o as u}from"./chunks/framework.Dzz2jpra.js";const b=JSON.parse('{"title":"服务端结构","description":"","frontmatter":{"title":"服务端结构","sidebar_position":1},"headers":[],"relativePath":"nitwikit/docs-bedrock/bds-core/start/basic/server-file-structure.md","filePath":"nitwikit/docs-bedrock/bds-core/start/basic/server-file-structure.md","lastUpdated":1727754229000}'),k={name:"nitwikit/docs-bedrock/bds-core/start/basic/server-file-structure.md"};function d(h,l,E,g,v,D){const n=o("font");return u(),p("div",null,[l[30]||(l[30]=a(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本篇文档已完成编写！<br> 支持后续 PR</p><h1 id="biggest-success" tabindex="-1">Biggest SUCCESS <a class="header-anchor" href="#biggest-success" aria-label="Permalink to &quot;Biggest SUCCESS&quot;">​</a></h1><p>作者：<a href="https://github.com/MengHanLOVE1027" target="_blank" rel="noreferrer">梦涵LOVE</a></p></div><h1 id="服务端结构" tabindex="-1">服务端结构 <a class="header-anchor" href="#服务端结构" aria-label="Permalink to &quot;服务端结构&quot;">​</a></h1><p>我们先来简单看一眼 BDS <strong>开服后</strong> 的文件夹结构：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BDS服务端文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─behavior_packs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // 安装新行为包的文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─config</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          // 没啥用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─definitions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     // 貌似是生成群系的内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─development_behavior_packs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 为开发者提供安装新行为包的文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─development_resource_packs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 为开发者提供安装新资源包的文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─development_skin_packs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // 为开发者提供安装新皮肤包的文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─resource_packs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // 安装新资源包的文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─world</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">templates</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 // 世界模板</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─worlds</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          // 主世界文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─Bedrock level</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 世界存档</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│    ├─db</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         // 存档数据文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│    ├─level_dat</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // 存档设定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│    ├─level.dat_old</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 存档设定(旧)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│    └─level_name.txt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             // 存档名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─allowlist.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // 白名单文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─bedrock_server.exe</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 服务端启动程序</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─bedrock_server.pdb</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              // 程序数据库文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─bedrock_server_how_to.html</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 如何使用BDS服务器的官方指南(没多大用处，看看就行)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─permissions.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 管理员(OP)玩家相关数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─release</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">notes.txt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // 服务端发行版本详情</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─server.properties</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               // 配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─valid_known_packs.json</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // 已知的附加包</span></span></code></pre></div><h2 id="根目录下的一些文件" tabindex="-1">根目录下的一些文件 <a class="header-anchor" href="#根目录下的一些文件" aria-label="Permalink to &quot;根目录下的一些文件&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>请不要让你的服务端结构与文档解说结构有任何的 <strong>缺少</strong>，否则可能会出现 <strong>玄学问题</strong></p><p>若你 <strong>一致认为</strong> 有可删之处，那么以下是 <strong>绝对可以删</strong> 的服务端结构(反正每次开服都会检测是否有这些文件夹，如果没有还是会创建的)</p><details><summary>点击展开</summary><ul><li><code>config</code></li><li>development_behavior_packs</li><li>development_resource_packs</li><li>development_skin_packs</li><li>world-templates</li><li>bedrock_server_how_to.html(这个不会自己创建)</li><li>release-notes.txt(这个不会自己创建)</li><li>valid_known_packs.json</li></ul></details></div><hr>`,7)),s("ul",null,[s("li",null,[l[2]||(l[2]=s("code",null,"behavior_packs",-1)),s("ul",null,[l[1]||(l[1]=s("li",null,"用于安装新的行为包。行为包可以改变游戏中的某些行为，例如，它们可以修改怪物行为、游戏规则或添加新的游戏机制。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[0]||(l[0]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[31]||(l[31]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[5]||(l[5]=s("code",null,"config",-1)),s("ul",null,[l[4]||(l[4]=s("li",null,"这个文件夹通常用于存储服务器的配置文件。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[3]||(l[3]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[32]||(l[32]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[8]||(l[8]=s("code",null,"definitions",-1)),s("ul",null,[l[7]||(l[7]=s("li",null,"这个文件夹包含定义文件，这些文件通常用于定义游戏中的群系、结构、生物生成等信息。它们决定了世界中不同区域的特性和外观。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[6]||(l[6]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[33]||(l[33]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[11]||(l[11]=s("code",null,"development_behavior_packs",-1)),s("ul",null,[l[10]||(l[10]=s("li",null,"为开发者提供安装新行为包的文件夹。这允许开发者测试和开发自定义的行为包，而不会影响到主服务器的行为包。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[9]||(l[9]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[34]||(l[34]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[14]||(l[14]=s("code",null,"development_resource_packs",-1)),s("ul",null,[l[13]||(l[13]=s("li",null,"为开发者提供安装新资源包的文件夹。开发者可以在这里添加、测试和开发自定义的资源包，如纹理、模型和音效等。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[12]||(l[12]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[35]||(l[35]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[17]||(l[17]=s("code",null,"development_skin_packs",-1)),s("ul",null,[l[16]||(l[16]=s("li",null,"为开发者提供安装新皮肤包的文件夹。开发者可以在这里添加和测试自定义的玩家皮肤和其他角色的外观。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[15]||(l[15]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[36]||(l[36]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[20]||(l[20]=s("code",null,"resource_packs",-1)),s("ul",null,[l[19]||(l[19]=s("li",null,"用于安装新的资源包。资源包可以改变游戏中的视觉和声音元素，例如，它们可以提供新的纹理、音效和模型。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[18]||(l[18]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[37]||(l[37]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[23]||(l[23]=s("code",null,"world-templates",-1)),s("ul",null,[l[22]||(l[22]=s("li",null,"包含世界模板，这些模板可以被用来快速创建具有特定设置和结构的新世界。",-1)),s("li",null,[e(n,{color:"green"},{default:t(()=>l[21]||(l[21]=[i("有点用，但不多。")])),_:1})])])])]),l[38]||(l[38]=a("<hr><ul><li><code>worlds</code><ul><li>这是存储主世界文件夹的地方。每个世界都有自己的子文件夹，其中包含该世界的所有数据，如地形、建筑、玩家进度等。 <ul><li><code>Bedrock level</code><ul><li>包含特定世界的存档数据。 <ul><li><code>db</code><ul><li>存档数据文件夹，通常包含有关世界的数据库文件。</li></ul></li><li><code>level_dat</code><ul><li>包含世界的基本设置和属性，如游戏规则、时间、天气等。</li></ul></li><li><code>level.dat_old</code><ul><li>旧版的存档设定文件，通常在更新或备份时使用。</li></ul></li><li><code>level_name.txt</code><ul><li>包含世界名称的文件。</li></ul></li></ul></li></ul></li></ul></li></ul></li></ul><hr><ul><li><code>allowlist.json</code><ul><li>白名单文件，列出了允许进入服务器的玩家列表。</li><li>(如果你在 <code>server.properties</code> 中开启了白名单，你就可以在该文件中添加和管理谁被允许或不被允许进入服务器)。</li></ul></li></ul><hr><ul><li><code>bedrock_server.exe</code><ul><li><p>服务端启动程序，用于启动和运行《我的世界》基岩版服务器。</p></li><li><p>你可以改名叫任何名字(只要以 <code>.exe</code> 结尾就行)，但不建议你这么做，可能会导致成为后续操作报错的因素。例如：</p></li></ul><ol><li>若你使用 <strong>面板</strong> 开服，需要在对应的 <strong>启动路径</strong> 中修改服务端启动程序的文件名</li><li>若你使用 <strong>启用脚本</strong> 开服，需要在脚本对应位置的 <strong>启动命令</strong> 中修改 <strong>启动程序的文件名</strong> 为 <strong>该服务端启动程序的文件名</strong>(bedrock_server.exe)</li></ol></li></ul><hr><ul><li><code>bedrock_server.pdb</code><ul><li>程序数据库文件，通常用于调试和错误分析。</li></ul></li></ul><hr><ul><li><code>bedrock_server_how_to.html</code><ul><li>如何使用BDS服务器的官方指南，虽然你说“没多大用处”，但它可能包含有关配置和运行服务器的有用信息。</li><li>有点用，但不多</li></ul></li></ul><hr><ul><li><code>permissions.json</code><ul><li>管理员(OP)玩家相关数据(如 UUID 及游戏名称等相关信息)，包括权限设置和角色定义。</li></ul></li></ul><hr>",13)),s("ul",null,[s("li",null,[l[26]||(l[26]=s("code",null,"release-notes.txt",-1)),s("ul",null,[l[25]||(l[25]=s("li",null,"服务端发行版本详情，包含了每个版本更新的日志和更改内容。",-1)),s("li",null,[e(n,{color:"red"},{default:t(()=>l[24]||(l[24]=[i("BUT! 没啥用...后续也不会涉及...")])),_:1})])])])]),l[39]||(l[39]=s("hr",null,null,-1)),l[40]||(l[40]=s("ul",null,[s("li",null,[s("code",null,"server.properties"),s("ul",null,[s("li",null,"服务器配置文件，用于调整各种服务器设置，如设置端口，设置游戏难度，设置游戏模式(生存、创造等)等。")])])],-1)),l[41]||(l[41]=s("hr",null,null,-1)),s("ul",null,[s("li",null,[l[29]||(l[29]=s("code",null,"valid_known_packs.json",-1)),s("ul",null,[l[28]||(l[28]=s("li",null,"包含已知的附加包列表，这些包可能包括行为包、资源包等，服务器会根据这个列表来验证安装的包。",-1)),s("li",null,[e(n,{color:"green"},{default:t(()=>l[27]||(l[27]=[i("有点用，但不多。")])),_:1})])])])]),l[42]||(l[42]=s("hr",null,null,-1)),l[43]||(l[43]=s("p",null,"至此，大部分的以 BDS 为基础的服务器核心服务端的结构已经大致呈现在你眼前。",-1)),l[44]||(l[44]=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[i("如果你的服务端有更多的文件，大概率是 "),s("a",{href:"./../../process/plugins/plugins-loader-choose.html"},[s("strong",null,"插件加载器"),i(" / "),s("strong",null,"插件")]),i("(如针对 BDS 的 Levilamina 插件加载器会释放更多文件夹)创建的文件夹，一般来说无需担心。")])],-1))])}const m=r(k,[["render",d]]);export{b as __pageData,m as default};
