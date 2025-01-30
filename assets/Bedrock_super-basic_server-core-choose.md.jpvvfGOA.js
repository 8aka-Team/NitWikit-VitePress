import{_ as a,c,j as l,a as n,G as u,w as e,B as s,o as k}from"./chunks/framework.O9ad3XaM.js";const g="/assets/bedrock-core-running.-yOA9STc.png",p="/assets/nukkit-core-running.DhYf9BYF.png",d="/assets/powernukkitx-core-rip._KZXLj2L.png",P="/assets/powernukkitx-core-running.Bbts-dQu.png",m="/assets/pocketminemp-core-running.DOIgmctW.png",w=JSON.parse('{"title":"服务器核心选择","description":"","frontmatter":{"title":"服务器核心选择","sidebar_position":1},"headers":[],"relativePath":"Bedrock/super-basic/server-core-choose.md","filePath":"nitwikit/docs-bedrock/super-basic/server-core-choose.md","lastUpdated":1738042730000}'),N={name:"Bedrock/super-basic/server-core-choose.md"};function M(b,t,v,f,_,B){const o=s("TabItem"),i=s("Tabs"),r=s("nw-image-viewer");return k(),c("div",null,[t[4]||(t[4]=l("h1",{id:"服务器核心选择",tabindex:"-1"},[n("服务器核心选择 "),l("a",{class:"header-anchor",href:"#服务器核心选择","aria-label":'Permalink to "服务器核心选择"'},"​")],-1)),u(i,{queryString:"server-core-choose"},{default:e(()=>[u(o,{value:"bds",label:"Bedrock Dedicated Server(BDS)"},{default:e(()=>t[0]||(t[0]=[l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"警告"),l("p",null,[n("至本篇文档开始，"),l("strong",null,[l("code",null,"BDS")]),n(" 一致指 "),l("strong",null,[l("code",null,"Bedrock Dedicated Server")]),n("，而不是指 "),l("strong",null,[l("code",null,"Beidou Navigation Satellite System")]),n("(北斗卫星导航系统)")])],-1),l("p",null,[l("img",{src:g,alt:"BDS 运行时的样子"})],-1),l("p",null,[n("此服务器核心允许 "),l("em",null,"Minecraft 腐竹"),n(" 在家里使用安装有 "),l("strong",null,"Windows"),n(" 或 "),l("strong",null,"Linux"),n(" 的设备或使用 "),l("strong",null,"云服务托管"),n("(云服务器)来搭建属于自己的 BDS 服务器。 这是坐落于 "),l("strong",null,"Minecraft 官网"),n(" 的服务端(与 Java 的 Vanilla 服务端在一个页面)。作为官方服务端，它有着极其完善的 Minecraft 特性和流畅的游戏体验，几乎和单人一模一样，说是生存服首当之选也不为过。")],-1),l("p",null,[l("strong",null,"优势"),n("：")],-1),l("ul",null,[l("li",null,[l("p",null,"官方支持：作为 Mojang 官方推出的服务器端软件，BDS 能够获得官方的最新更新和支持，确保与 Minecraft 基岩版的最新版本兼容。")]),l("li",null,[l("p",null,"文档和社区支持：虽然官方提供了一些基本文档，但不如第三方服务器端软件的社区那样提供丰富的教程和支持。社区插件内容庞大，基本满足腐竹的日常需求(虽然官方服务端无法加载插件，但可以通过 [社区开发的加载器](/docs-bedrock/bds-core/process/plugins/plugins-loader-choose.md#bds - 社区开发的加载器) 解决这一问题)。")]),l("li",null,[l("p",null,"稳定性：由于是官方产品，BDS 在稳定性方面通常表现良好，能够提供可靠的服务器体验。")]),l("li",null,[l("p",null,[n("兼容性：BDS 与 "),l("strong",null,"Minecraft 基岩版客户端"),n(" 的兼容性最好，确保玩家可以无缝连接和游戏。")])]),l("li",null,[l("p",null,"安全性：官方服务器端软件通常会得到更频繁的安全更新，减少了潜在的安全风险。")]),l("li",null,[l("p",null,[n("资源利用：BDS 针对 "),l("strong",null,"Minecraft 基岩版"),n(" 进行了优化，能够高效利用服务器资源。")])])],-1),l("p",null,[l("strong",null,"劣势"),n("：")],-1),l("ul",null,[l("li",null,[n("定制性有限：与一些第三方服务器端软件相比，BDS 的定制性和扩展性可能 "),l("strong",null,"较为有限"),n("，"),l("strong",null,"不支持插件系统"),n("，限制了服务器的个性化。")]),l("li",null,[n("性能优化：虽然 BDS 性能稳定，但可能在某些方面(如多核优化)不如专门的第三方服务器端软件。它的生物运算运行在一个线程上。意味着你的服务器的流畅度主要取决于 "),l("strong",null,"CPU 的单核性能"),n("。 这使得地图越大，服务器就越 "),l("a",{href:"https://nitwikit.8aka.org/start/basic/what-is-caton",target:"_blank",rel:"noreferrer"},"卡顿"),n("，不如 Java 版服务端流畅，因为 Java 版服务端 "),l("strong",null,"支持多核运行"),n("。")]),l("li",null,"高级功能缺失：BDS 可能不支持一些高级功能，如自定义世界生成、高级权限管理等，这些通常需要第三方软件才能实现。"),l("li",null,[n("内存泄漏：内存占用会 "),l("em",null,"缓慢"),n(" 增加，有时严重的还会导致 "),l("strong",null,"内存泄漏"),n("。如果强行进行 "),l("strong",null,"内存清理"),n(" 的话，会导致玩家在进入 "),l("strong",null,"装有 材质包 / Addon 的服务器"),n(" 时 "),l("strong",null,"该玩家客户端无法下载对应内容"),n("，致使下载进度条卡条，只能让腐竹重启服务器解决。")])],-1),l("p",null,"总体来说，Bedrock Dedicated Server 适合那些希望获得官方支持、稳定性和兼容性的服务器管理员。如果你的服务器不需要复杂的定制或高级功能，BDS 是一个可靠的选择。然而，对于那些需要更多自定义选项和高级功能的用户，可能需要考虑使用第三方服务器端软件。",-1)])),_:1}),u(o,{value:"nukkit",label:"Nukkit(NK)"},{default:e(()=>t[1]||(t[1]=[l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"警告"),l("p",null,[n("至本篇文档开始，"),l("strong",null,[l("code",null,"NK")]),n(" 一致指 "),l("strong",null,[l("code",null,"Nukkit")]),n("，但考虑到全称不长，因此二者都会出现在本文档中")])],-1),l("p",null,[l("img",{src:p,alt:"Nukkit 运行时的样子"})],-1),l("p",null,[n("它的名字，很像 Java 版服务端的 Bukkit。没错，它就是 "),l("em",null,"意图"),n(" 创作出来类似 Bukkit 的基岩版服务端，编写语言正是 "),l("strong",null,"Java"),n("。")],-1),l("p",null,[l("strong",null,"优势"),n("：")],-1),l("ul",null,[l("li",null,[n("轻量级：Nukkit 设计轻量，对系统资源的 "),l("strong",null,"需求相对较低"),n("，适合在 "),l("strong",null,"资源有限"),n(" 的服务器上运行。")]),l("li",null,[n("高性能：Nukkit 在性能方面进行了优化，能够 "),l("strong",null,"支持较多的同时在线玩家"),n("，保持良好的游戏体验。")]),l("li",null,[n("插件系统：Nukkit 拥有一个 "),l("strong",null,"活跃的插件生态系统"),n("，用户可以轻松地安装和使用各种插件来扩展服务器功能。")]),l("li",null,[n("跨平台：Nukkit "),l("strong",null,"支持多个操作系统"),n("，包括 Windows、Linux 和 macOS，方便在不同平台上搭建服务器。")]),l("li",null,[n("易于上手：相对于其他服务器端软件，Nukkit 的配置和使用较为简单，适合初学者 "),l("strong",null,"快速搭建服务器"),n("。")]),l("li",null,"社区支持：Nukkit 有一个相对活跃的社区，用户可以从中获得帮助和资源。")],-1),l("p",null,[l("strong",null,"劣势"),n("：")],-1),l("ul",null,[l("li",null,"更新滞后：Nukkit 的更新可能不如官方服务器端软件那样及时，可能无法立即支持最新的 Minecraft 版本和特性。"),l("li",null,"生态系统限制：虽然 Nukkit 的插件生态系统活跃，但与一些更流行的服务器端软件(如 Spigot/Paper)相比，可用的插件和资源可能较少。"),l("li",null,[n("多核优化不足：早期的 Nukkit 版本在多核处理器优化方面可能不如其他服务器端软件，这可能会 "),l("strong",null,"限制其在高性能服务器上的性能表现"),n("。")]),l("li",null,[n("文档和教程：虽然社区活跃，但 "),l("strong",null,"高质量的官方文档和教程可能相对缺乏"),n("，新用户可能需要花费更多时间学习和解决问题。")]),l("li",null,"稳定性问题：由于开源项目的性质，Nukkit 可能偶尔会出现稳定性问题，尤其是在处理大量玩家或复杂插件时。")],-1),l("p",null,"总的来说，Nukkit 是一个适合初学者和小型服务器使用的轻量级 Minecraft 服务器端软件，它提供了足够的性能和可扩展性来满足基本需求。然而，对于需要最新游戏特性、高级优化和广泛插件支持的大型服务器，可能需要考虑其他选项。",-1)])),_:1}),u(o,{value:"pnx",label:"PowerNukkitX(PNX)"},{default:e(()=>t[2]||(t[2]=[l("div",{class:"danger custom-block"},[l("p",{class:"custom-block-title"},"[此核心短时间内不再可用]"),l("p",null,[l("img",{src:d,alt:"PNX 短时间内不再更新"})])],-1),l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"警告"),l("p",null,[n("至本篇文档开始，"),l("strong",null,[l("code",null,"PNX")]),n(" 一致指 "),l("strong",null,[l("code",null,"PowerNukkitX")])])],-1),l("p",null,[l("img",{src:P,alt:"PNX 运行时的样子"})],-1),l("p",null,[l("strong",null,"优势"),n("：")],-1),l("ul",null,[l("li",null,[n("最新版 mcbe(基岩版) 协议支持：PNX 支持最新的 Minecraft 基岩版协议，这意味着它 "),l("strong",null,"可以兼容最新的游戏版本和特性"),n("。")]),l("li",null,"丰富的原版特性支持：支持 1.19 版本的所有新方块和新物品，以及新版下界等特性。"),l("li",null,"高性能和高拓展性：PNX 进行了多核优化，提供了更高的性能和更好的扩展性。"),l("li",null,"384 格世界支持：允许在主世界达到 384 格的高度限制。"),l("li",null,"史诗地形生成器：内置 Terra 地形生成器，支持创建丰富的地图环境。"),l("li",null,"全开源和全 API 开放：PNX 完全开源，提供了丰富的 API，方便开发者进行定制和扩展。"),l("li",null,"插件兼容性：兼容 Nukkit 生态中的数千个插件，同时支持使用 Java， Kotlin， Scala， Python， JavaScript， Lua 等 JVM 语言编写插件。")],-1),l("p",null,[l("strong",null,"劣势"),n("：")],-1),l("ul",null,[l("li",null,"开发活跃度：由于 Nukkit 核心开发团队的变化，PNX 的开发强度可能受到影响。"),l("li",null,"生态系统的局限性：虽然 PNX 拥有丰富的插件，但与一些更主流的服务器端软件相比，其生态系统可能相对较小。"),l("li",null,"学习曲线：由于 PNX 生态的广阔和插件的多样性，对于新手来说，学习如何有效地使用和管理 PNX 服务器可能会有一定的难度。")],-1),l("p",null,"总体来看，PowerNukkitX 是一个功能强大且高度可定制化的 Minecraft 基岩版服务器端软件，特别适合那些需要高性能和高度自定义服务器的用户。然而，它的使用和维护可能需要一定的技术知识和耐心。",-1)])),_:1}),u(o,{value:"pmmp",label:"PocketMine-MP(PMMP)"},{default:e(()=>t[3]||(t[3]=[l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"警告"),l("p",null,[n("至本篇文档开始，"),l("strong",null,[l("code",null,"PMMP")]),n(" 一致指 "),l("strong",null,[l("code",null,"PocketMine-MP")])])],-1),l("p",null,[l("img",{src:m,alt:"PNX 运行时的样子"})],-1),l("p",null,[l("strong",null,"优势"),n("：")],-1),l("ul",null,[l("li",null,[n("插件生态丰富：PocketMine-MP 拥有一个 "),l("strong",null,"庞大的插件生态系统"),n("，用户可以找到各种插件来增强服务器的功能和玩家体验。")]),l("li",null,[n("跨平台兼容性：PocketMine-MP "),l("strong",null,"支持多个操作系统"),n("，包括 Windows、Linux 和 macOS，便于在不同环境下部署。")]),l("li",null,"PHP 编程语言：使用 PHP 编写插件，对于熟悉 PHP 的开发者来说，入门门槛相对较低。"),l("li",null,"社区支持：PocketMine-MP 有一个活跃的社区，提供插件开发、服务器配置和故障排除的帮助。"),l("li",null,"自定义性：服务器管理员可以自由地定制服务器，包括游戏规则、世界生成和玩家互动等。")],-1),l("p",null,[l("strong",null,"劣势"),n("：")],-1),l("ul",null,[l("li",null,[n("性能问题：PocketMine-MP 在处理高玩家负载时 "),l("strong",null,"可能存在性能瓶颈"),n("，尤其是在内存管理和 CPU 效率方面。")]),l("li",null,[n("更新滞后：PocketMine-MP 可能不会立即跟进 "),l("strong",null,"Minecraft 基岩版"),n(" 的最新更新，导致玩家无法体验最新的游戏内容。")]),l("li",null,[n("稳定性：由于插件系统的开放性，服务器在运行多个插件时 "),l("strong",null,"可能会遇到稳定性问题"),n("。")]),l("li",null,[n("资源消耗：PHP 作为解释型语言，相比编译型语言 "),l("strong",null,"可能在资源消耗上更为显著"),n("。")]),l("li",null,[n("学习曲线：对于新手管理员来说，PocketMine-MP 的 "),l("strong",null,"配置和插件管理可能需要一定的学习时间"),n("。")])],-1),l("p",null,"PocketMine-MP 适合那些重视插件功能和自定义能力的服务器管理员。如果你希望建立一个具有特色玩法和丰富互动的服务器，并且不介意在性能和稳定性方面做出一些妥协，PocketMine-MP 是一个不错的选择。然而，如果你更关注性能和最新游戏内容的支持，可能需要考虑其他服务器端解决方案。",-1)])),_:1})]),_:1}),u(r)])}const D=a(N,[["render",M]]);export{w as __pageData,D as default};
