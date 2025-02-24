import{_ as r,c as t,a5 as o,G as i,B as s,o as l}from"./chunks/framework.O9ad3XaM.js";const n="/assets/cpu.DP8tTqv1.jpg",f=JSON.parse('{"title":"购置服务器","description":"","frontmatter":{"title":"购置服务器","sidebar_position":2},"headers":[],"relativePath":"process/deploy/purchase-server.md","filePath":"nitwikit/docs/process/deploy/purchase-server.md","lastUpdated":1739174492000}'),p={name:"process/deploy/purchase-server.md"};function h(c,a,d,u,b,P){const e=s("nw-image-viewer");return l(),t("div",null,[a[0]||(a[0]=o('<h1 id="购置服务器" tabindex="-1">购置服务器 <a class="header-anchor" href="#购置服务器" aria-label="Permalink to &quot;购置服务器&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">危险</p><p>低价云超开导致性能下降，不要贪图便宜！</p></div><p>搭建 Minecraft 服务器对服务器的 CPU 性能、内存大小、硬盘 I/O 速度和网络质量，网络带宽均有较高的要求。</p><h2 id="云服务器" tabindex="-1">云服务器 <a class="header-anchor" href="#云服务器" aria-label="Permalink to &quot;云服务器&quot;">​</a></h2><p>如果你的服务器不是自己购买的而是从服务商处租用的，比如VPS或面板。至于这到底是什么，下一章会讲解。</p><h3 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;CPU&quot;">​</a></h3><h4 id="核心数" tabindex="-1">核心数 <a class="header-anchor" href="#核心数" aria-label="Permalink to &quot;核心数&quot;">​</a></h4><p>总的说来，核心数量要根据玩家数量，服务器性质，预算选择。</p><p>由于 Minecraft 的 <a href="https://nitwikit.8aka.org/start/basic/what-is-caton/" target="_blank" rel="noreferrer">Tick-loop</a> 逻辑是单线程的。更多核心只能用于生成区块、插件任务等非主线程任务，不建议超过 8 核心的服务器继续增加核心提升流畅度。</p><p>普通插件生存服，人数少于 50 时一般可以使用单端处理，选择核心数量 4 - 8 个。</p><p>人数 &gt; 50 推荐使用多端均衡或者 Folia ，常见的分生存 x 区的就是多端。这两种方式都可以有效利用多核心。</p><p>对于多端，核心数量主要取决于总人数，每 100 玩家多加 4 - 8 个核心是较为合理的。</p><p>而 Folia 官方推荐的配置在 16 核心以上，如果是新手或对现有插件有严重依赖的不推荐使用，生态较差。</p><h4 id="cpu-单核性能" tabindex="-1">CPU 单核性能 <a class="header-anchor" href="#cpu-单核性能" aria-label="Permalink to &quot;CPU 单核性能&quot;">​</a></h4><p><img src="'+n+'" alt=""></p><p>一般的，当你搭建是纯净的、不含模组的服务器时，对单核性能的要求较低；当你搭建是含模组的服务器时，对单核性能的要求较高。</p><p>CPU 总占用不算高时，Minecraft 的服务器性能与 CPU 单核性能几乎为线性关系，单核性能翻倍几乎就可以多带一倍<strong>甚至更多</strong>的人。</p><p>尽量选择不超开的云(如上图，图中 50% 的性能差就在于低价云超开导致性能下降，不要贪图便宜，服务器到手后要自己跑分)</p><p>不超过 20 人时为节省成本可以使用 E5 主机，而单端人数多于 20 基本就意味着需要牺牲玩家的游戏体验或者需要换更好的 CPU 。</p><h3 id="内存" tabindex="-1">内存 <a class="header-anchor" href="#内存" aria-label="Permalink to &quot;内存&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">信息</p><p>内存几乎不用考虑 DDR4 / DDR5，高频/低频内存的区别，最重要的是内存大小。</p><p>使用高频 DDR5 内存和 DDR4 内存开服基本没有差别，如果是自己买的服务器托管的就省点钱吧。</p></div><p>一般来说， mod 服比插件服占用高，高版本比低版本略高。尽量选择核心数与内存比例在 1:2 以上的套餐(推荐 1:2 - 1:4 )。</p><p>一方面，核心多内存少必然面临性能下降。另一方面，核心多内存少基本为超开，性能会比正常情况下差很多。</p><p>大厅服分配 1G - 2G 内存，普通生存服务器或空岛服务器建议分配 8G - 12G ，单端人数较多建议使用 12G - 24G 内存。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>并不是人越多需要的内存越多，不建议分配过多内存，否则导致 GC (内存垃圾回收)时间过长导致卡顿。</p></div><h3 id="带宽" tabindex="-1">带宽 <a class="header-anchor" href="#带宽" aria-label="Permalink to &quot;带宽&quot;">​</a></h3><p>根据玩家数量及视野情况分配。一般情况低版本全默认情况下平均每个玩家会使用 0.25 - 0.4 Mbps 的上行带宽。</p><p>1.18 以上服务器平均每人使用 0.3-0.5 Mbps 上行带宽(一群跑图佬另说)也就是说一般提供的 10M 带宽够带 15-20 人。</p><p>同样的有的服务商会提供所谓“共享上行”，有时会出现其他用户传文件，VPS 所在宿主机所有用户都变卡的情况，建议无论如何搞到一个独享带宽保底。</p><p>需要注意的是，想要家庭带宽开服要考虑到吃 DDOS 和部分运营商不提供公网或者公网上行速度非常慢的情况，只建议基友服使用，或者配合 FRP 等流量转发方式使用。</p><h3 id="系统" tabindex="-1">系统 <a class="header-anchor" href="#系统" aria-label="Permalink to &quot;系统&quot;">​</a></h3><p>Windows 系统一般有 Windows Server ，它和普通的 Windows 系统操作没有什么区别，只要用过 Windows 就能快速上手，但是 Windows 系统相对占用系统资源更高。 Linux 系统常见的有 Ubuntu 、 CentOS 和 Debian 。我们日常很少接触 Linux 系统，所以你可能需要事先学习 Linux 系统的操作。 Linux 系统占用系统资源更低。</p><p>如果希望长期开服，强烈推荐使用 Linux 系统(如 Ubuntu/CentOS 等)，因为它不仅占用系统资源更低，而且由于其系统本身机制与 Windows 不同，长期运行要比 Windows 系统稳定得多。 很多时候一些服务器软件也仅支持 Linux 。</p><h2 id="物理机" tabindex="-1">物理机 <a class="header-anchor" href="#物理机" aria-label="Permalink to &quot;物理机&quot;">​</a></h2><p>如果你的服务器是自己购买的而不是租用的，那就是物理机，家里云和机房的独立机都是物理机。至于这到底是什么，下一章会讲解。</p><h3 id="cpu-1" tabindex="-1">CPU <a class="header-anchor" href="#cpu-1" aria-label="Permalink to &quot;CPU&quot;">​</a></h3><p>通常除非你有明确的需求，不建议为了开mc服务器而购买任何E5(洋垃圾)、至强金银铜牌和EPYC的服务器CPU 。优先选用英特尔酷睿和 AMD 锐龙 CPU 。由于mc服务器对单核要求非常高，所以尽可能选择新款高频版本的 CPU 。 区分的方式是英特尔 CPU 后面带 K ，比如 10600K、12700KF ，AMD 的 CPU 后面带 X，比如5600X、7950X。级别更高的CPU往往核心数和单核性能都更高。要开的服务器规模越大，就越有必要选购更高端的CPU。 比如要开一个小型的服务器，使用 10300F 即可；要开一个大型的服务器，你可能必须要用 12700KF 才够用。</p><p>为服务器选择 CPU 并不需要带核显。核显是 CPU 自带的显卡，可以为主板 I/O 面板上自带的显示接口提供显示输出功能，并提供一定的图形渲染功能。 由于mc服务器所有渲染图像的工作都由玩家的设备自行完成，所以服务器不需要任何显卡的性能，你的显卡只需要保证能够进行视频输出即可，也就是“亮机卡”。如果你手里已经有现成的低性能的显卡，你可以直接购买不带核显的CPU，比如带F的英特尔 CPU 。 如果没有低性能的 CPU ，比如你手里有一张闲置的2070~~(谁会手里有了2070还闲置啊)~~，那么除非你有特殊的需求，比如除了开服还用服务器跑 AI ，就不建议把这张显卡放到服务器上使用，这种显卡待机情况下功耗更高，导致你家电表转得更快。</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>做高版本生存服务器，买实体机千万不要考虑E5这种洋垃圾，否则你会吃大亏，切记!!!</p><p>另外，13700K、13700KF、13900K、13900KF、14700K、14700KF、14900K、14900K 几款CPU被曝出由于其主频过高而导致不稳定(运行软件时软件出错，这可能导致你的服务器崩溃甚至损坏)的问题，建议开服暂时不使用。</p></div><h3 id="主板" tabindex="-1">主板 <a class="header-anchor" href="#主板" aria-label="Permalink to &quot;主板&quot;">​</a></h3><p>虽然mc服务器对主板没什么要求，但是 CPU 对主板的要求还是很高的。在选择主板时你需要注意以下几点：</p><ol><li>板型。常见的主板从小到大分为 ITX、mATX、ATX、EATX 这几个标准。小的主板尺寸可以装进更小的机箱，大的主板尺寸可以提供更多硬件功能。通常情况下，购买最便宜的 mATX 或 ATX 板型的主板即可，因为你的服务器不需要便携。但是一定要注意<strong>不能大于机箱尺寸，否则机箱装不下</strong>。</li><li>主芯片组。主芯片组必须要和CPU品牌对应，才能和CPU兼容。英特尔有中端的 B 系列和高端的 Z 系列，AMD 有中端的 B 系列和高端的 X 系列。通常不需要考虑主芯片组要选哪个，毕竟你也不需要给服务器主板插一大堆三件。 但是不建议 i9 和 R9 处理器选用中端芯片组，除非你问过确实“能带动”，否则会出现主板供电不足等问题，这是因为中端芯片组的供电模块性能较低。</li></ol><h3 id="内存-1" tabindex="-1">内存 <a class="header-anchor" href="#内存-1" aria-label="Permalink to &quot;内存&quot;">​</a></h3><p>虽然是服务器，但是毕竟游戏服务器，需要的内存也是非常高的。通常不推荐购买“刚好够用”的内存容量，因为你的需求会随着服务器规模的扩大逐渐提高，导致后期你可能需要对内存进行升级或更换。如果不是预算非常紧张，建议先购买 CPU 所支持的最大内存容量的一半，数量为主板内存插槽数量的一半，后期需要扩容时，直接购买<strong>同品牌、同系列、同参数</strong>的内存加装。</p><p>mc服务器对内存的频率和时序几乎没有任何要求(<a href="https://www.minebbs.com/threads/_cpu.17729" target="_blank" rel="noreferrer">https://www.minebbs.com/threads/_cpu.17729</a> )。 所以你可以选择更便宜的低频内存，例如 DDR3 的 1333 MHz、DDR4 的 2666 MHz、DDR5 的 4800 MHz。</p><p>由于各内存颗粒工厂的产量(<s>失火频率</s>)不同，内存的价格会随时间出现变化。如果你时间充足，可以多关注数码资讯，选择最合适的时机抢购内存。</p><h3 id="硬盘" tabindex="-1">硬盘 <a class="header-anchor" href="#硬盘" aria-label="Permalink to &quot;硬盘&quot;">​</a></h3><p>21世纪20年代了，该不会还有人用机械硬盘当系统盘吧。你的服务器至少需要一块固态硬盘作为系统盘，如果固态硬盘容量不大，还最好需要一块机械硬盘专门存放服务器的数据。</p><p>主流的硬盘按接口分为 M.2 和 SATA 两种类型。 M.2 几乎只有固态硬盘，而 SATA 既可以是固态硬盘也可以是机械硬盘。</p><p>选购固态硬盘时，需要注意以下事项：</p><ol><li><strong>数据无价！！！</strong>，不要选择小厂品牌的固态硬盘，尽可能选择大品牌，比如三星、长江、铠侠(东芝)、西数、爱国者、英特尔。希捷和金士顿的固态硬盘虽然性价比不高，但是如果你有明确的需求，也不失为一种选择。</li><li>固态硬盘的价格和内存一样存在较大波动。</li><li>不建议选择二手固态硬盘！你有很大的可能性买到矿盘（可以理解为 写入量较大的硬盘）。如果非要购买，请注意备份！</li></ol><p>选购机械硬盘时，需要注意以下事项：</p><ol><li>机械硬盘的 IO速度 远低于固态硬盘，不要只因为机械硬盘便宜，就去选购机械硬盘！</li><li>不要去选择二手机械硬盘，如有购买，建议多备份或组 RAID 使用（RAID 0 除外）！</li></ol><h2 id="林枫云" tabindex="-1">林枫云 <a class="header-anchor" href="#林枫云" aria-label="Permalink to &quot;林枫云&quot;">​</a></h2><p>还在为卡顿掉帧烦恼？林枫云高频游戏云，给你丝滑MC体验！</p><p>你是否厌倦了在MC中建造宏伟建筑时，突如其来的卡顿宕机让你功亏一篑？你是否受够了在PVP对战中，因为掉帧而错失良机，痛失好局？</p><h3 id="林枫云-懂你的痛" tabindex="-1">林枫云，懂你的痛！ <a class="header-anchor" href="#林枫云-懂你的痛" aria-label="Permalink to &quot;林枫云，懂你的痛！&quot;">​</a></h3><p>我们深知，对于MC玩家来说，流畅稳定的游戏体验至关重要。林枫云主打高性能云服务器，为你带来极致丝滑的体验！</p><h3 id="为什么选择林枫云游戏云" tabindex="-1">为什么选择林枫云游戏云？ <a class="header-anchor" href="#为什么选择林枫云游戏云" aria-label="Permalink to &quot;为什么选择林枫云游戏云？&quot;">​</a></h3><ul><li><strong>性能保障，说到做到：</strong> 我们承诺，游戏云性能低于官网质保跑分，即可与客服对线，确实有问题补足性能，并补偿时长！自营产品，有底气说话！</li><li><strong>稳定可靠，持久畅玩：</strong> 均搭配水冷，确保服务器长时间稳定运行，让你安心畅玩，无需担心宕机烦恼。平均维护次数一年低于两次！</li><li><strong>独立IP，无NAT限制：</strong> 每台VPS均配备独立IP，无需经过NAT转发，可高度自定义，连接更稳定，无需担心因他人原因导致游戏掉线，让你在MC世界中畅行无阻。</li></ul><h3 id="林枫云-不止于游戏云" tabindex="-1">林枫云，不止于游戏云！ <a class="header-anchor" href="#林枫云-不止于游戏云" aria-label="Permalink to &quot;林枫云，不止于游戏云！&quot;">​</a></h3><p>除了游戏云，我们还提供<strong>高性能业务云服务器</strong>，满足你对网站建设、数据分析、人工智能等各类业务场景的需求。林枫云，致力于为你提供<strong>高质量、稳定可靠</strong>的云计算服务！</p><p>立即访问林枫云官网：<a href="https://www.dkdun.cn/aff/LECDFEQA" target="_blank" rel="noreferrer">www.dkdun.cn</a>，开启你的MC服！</p><h3 id="林枫云-给你更快的速度-更稳的体验" tabindex="-1">林枫云，给你更快的速度，更稳的体验！ <a class="header-anchor" href="#林枫云-给你更快的速度-更稳的体验" aria-label="Permalink to &quot;林枫云，给你更快的速度，更稳的体验！&quot;">​</a></h3><p><strong>PS：</strong> 现在注册林枫云账号，可享受<strong>新人游戏云专属6折优惠券</strong>，数量有限，先到先得！</p><p>不定期举行老用户福利升级活动，淘汰过时CPU，持续升级性能！</p><p>用户群内抽奖活动月月有，均为独立IP！</p><p>QQ群：644099584</p><h3 id="官方教程" tabindex="-1">官方教程 <a class="header-anchor" href="#官方教程" aria-label="Permalink to &quot;官方教程&quot;">​</a></h3><p>林枫云官方教程网址：blog.dkdun.cn</p><h3 id="性能跑分截图" tabindex="-1">性能跑分截图 <a class="header-anchor" href="#性能跑分截图" aria-label="Permalink to &quot;性能跑分截图&quot;">​</a></h3><p><img src="https://img.fastmirror.net/s/2025/01/30/679b22143617e.png" alt=""></p>',72)),i(e)])}const q=r(p,[["render",h]]);export{f as __pageData,q as default};
