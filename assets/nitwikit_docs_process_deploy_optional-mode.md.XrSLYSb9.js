import{_ as t,c as o,a5 as e,o as i}from"./chunks/framework.Dzz2jpra.js";const r="/assets/mcsm.U0PLaOum.png",l="/assets/%E7%BF%BC%E9%BE%99%E9%9D%A2%E6%9D%BF.DQE1gsUQ.png",g=JSON.parse('{"title":"可选方式","description":"","frontmatter":{"title":"可选方式","sidebar_position":3},"headers":[],"relativePath":"nitwikit/docs/process/deploy/optional-mode.md","filePath":"nitwikit/docs/process/deploy/optional-mode.md","lastUpdated":1727754229000}'),s={name:"nitwikit/docs/process/deploy/optional-mode.md"};function p(n,a,c,d,m,h){return i(),o("div",null,a[0]||(a[0]=[e('<h1 id="可选方式" tabindex="-1">可选方式 <a class="header-anchor" href="#可选方式" aria-label="Permalink to &quot;可选方式&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这里所说的 <strong>人话</strong> 只是用于辅助理解，与实际情况可能存在偏差</p></div><p>建议先阅读 <a href="./purchase-server.html">购置服务器</a></p><h2 id="面板" tabindex="-1">面板 <a class="header-anchor" href="#面板" aria-label="Permalink to &quot;面板&quot;">​</a></h2><p>相当简单无脑的开服方式，大多会有一键开服之类的选项，要自己配置的东西少，但限制太多</p><details><summary> MCSManager 和翼龙俩面板长什么样</summary><p>MCSManager:</p><p><img src="'+r+'" alt=""></p><p>翼龙:</p><p><img src="'+l+'" alt=""></p></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不是说面板一定不好，你甚至能在自己机器上安装面板来用，只是咱<strong>不推荐</strong>你购置服务器的时候买面板来用</p></div><h2 id="vps" tabindex="-1">VPS <a class="header-anchor" href="#vps" aria-label="Permalink to &quot;VPS&quot;">​</a></h2><p>虚拟专用服务器(Virtual Private Server，简称 VPS)，是利用虚拟服务器软件(如微软的 Virtual Server、VMware 的 ESX server、SWsoft 的 Virtuozzo) 将一台物理服务器分割成多个虚拟专享服务器。每个 VPS 主机都可选配独立公网 IP 地址、独立操作系统、独立超大空间、独立内存、独立 CPU 资源、独立执行程序和独立系统配置等。VPS 可以像独立服务器一样，重装操作系统，安装程序，单独重启服务器。</p><p>人话就是云电脑(<strong>云服务器</strong>)</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>大厂(指腾讯云，阿里云等)那些服务器不是不能买，但是贵，而且大厂不是专搞mc服务器的</p><p>你去一些技术群里找人买一般能有更低的价格，以及一些附赠服务(如提供付费插件，一些服务端，服务器技术咨询等)</p></div><h2 id="家里云" tabindex="-1">家里云 <a class="header-anchor" href="#家里云" aria-label="Permalink to &quot;家里云&quot;">​</a></h2><p>一种调侃的说法，故名思义“放在自己家里的云服务器”(都能伸手摸到了还能叫“云”吗？所以仅仅是调侃，<strong>并非计算机术语</strong>)。也就是说，家里云通常是你自己手里的一台电脑，它可以是你用过的、新买的、别人借你的或送你的等等。 要想使用家里云方案，你必须清楚家里云的优劣，如果安排不当很可能会对服务器的运营造成严重的经济损失。</p><p>通常来说，家里云有以下几点优势：</p><ol><li>价格便宜。这是家里云最大的优势，因为你可以自行选择硬件的购买渠道，比如在购物平台用优惠券低价购买高性能硬件，甚至“捡垃圾”。如果你已经有现成的可以开服的电脑，比如闲置的笔记本或者台式机，就可以直接拿来开服，不花一分钱。</li><li>几乎完全可控。除了网络受运营商限制、电力受电业局等影响外，你可以对家里云的主机进行完全的控制。你可以为它安装任何系统，也可以直接接触并设置它的主板，这也意味着你可以随时更换家里云的硬件，而不需要去联系忙得不可开交的机房运维。</li><li>积累经验。如果你是一个好折腾的人，你可以从中积累大量的经验，因为从购买或安装三件到配置网络，再到后期保证服务器稳定性，自行设计应急措施等，都可以让你积累大量的经验，把你变成一个没有受过培训但是能力完全不输专业运维工程师的极客。</li></ol><p>但是家里云也有明显的缺点：</p><ol><li>初期成本可能较高。举个例子，一台 e3 CPU 的服务器完全自行购买需要数百元，而性能非常强的服务器至少要数千元，甚至一些情况下需要万元以上，到这已经是必须财力雄厚才能负担得起的级别了。另外如果你使用的是笔记本这样的电脑开服(包括拿旧手机开服)，长期满电和高温会导致电池损坏，最后电脑变成一台带UPS的台式机。</li><li>不适合短期开服。尤其是想尝鲜的极客们，如果一台电脑买来后开服两天半就腻了不开了，你得想办法处理这台电脑。是转手卖掉还是继续玩一些其他的计算机软件？如果你没法处理这台电脑，那买电脑的几百上千块钱就血本无归。</li><li>可能占用自己大量的时间。一旦服务器硬件需要维护，你就必须亲自回家操作，任何其他管理都帮不了你。</li><li>可能需要一定的运气。首先一旦运营商出了问题(业务升级、施工队挖断光纤等)要断网，就会导致你的服务器断网。而且一旦停电(比如下大雨发水把小区电线泡了，或者施工队把电线挖断了)，就会导致你的服务器跟着家里停电而宕机。 此外你还要有能搞到公网 IPv4 的运气，否则被迫用内网穿透，延迟爆炸。</li></ol><p>建议所有人在使用家里云方案之前都去给自己家宽带申请公网v4 ，能改桥接的改桥接，用移动的换成联通电信，不要等最后开上家里云了发现服务器人多用内网穿透带不动，自己又申请不了公网v4，努力全白费了。确定条件符合后，你就可以开始选购服务器硬件了。</p><h2 id="独立机" tabindex="-1">独立机 <a class="header-anchor" href="#独立机" aria-label="Permalink to &quot;独立机&quot;">​</a></h2><p>其实就是把你自己的家里云放在机房(IDC)进行托管。部分机房还会提供他们自己的电脑供你租用。和家里云相比，独立机有以下优点：</p><ol><li>有专人维护，不需要你自行花费时间</li><li>有稳定的供电和网络</li><li>一定有公网 IPv4 ，还可以选配更高上行带宽</li></ol><p>但也有以下缺点：</p><ol><li>不够灵活，加装改装比较麻烦</li><li>公网、带宽和维护都要另外收费，而且价格不菲</li></ol><h2 id="开服器" tabindex="-1">开服器 <a class="header-anchor" href="#开服器" aria-label="Permalink to &quot;开服器&quot;">​</a></h2><p>如 <a href="http://www.kaifuxia.com/" target="_blank" rel="noreferrer">我的世界开服侠</a></p><p>一种常被人取笑的开服方式。</p><p>因为使用开服器这件事本身就有点<strong>rz</strong>，使用开服器几乎不需要任何计算机相关知识，这就使得使用开服器的服主看起来“不愿意学习计算机知识”、“伸手党”、“懒惰”。虽然经验非常丰富的服主也有选择使用开服器节省时间的权利，但是不建议任何服主依赖开服器，这可能导致你被开服器<strong>娇生惯养、变得不思进取</strong>，最终沦为开服圈子的笑柄。</p><p>而且开服器用户多数有<strong>极为严重</strong>的开服常识匮乏。</p>',28)]))}const P=t(s,[["render",p]]);export{g as __pageData,P as default};
