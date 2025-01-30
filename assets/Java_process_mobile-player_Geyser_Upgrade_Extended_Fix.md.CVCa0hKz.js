import{_ as r,c as t,a5 as i,G as l,B as s,o}from"./chunks/framework.O9ad3XaM.js";const n="/assets/GeyserExtras.DkAYooZL.gif",y=JSON.parse('{"title":"游戏机制","description":"","frontmatter":{"title":"游戏机制","sidebar_position":2},"headers":[],"relativePath":"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix.md","filePath":"nitwikit/docs-java/process/mobile-player/Geyser/Upgrade/Extended/Fix.md","lastUpdated":1737795064000}'),p={name:"Java/process/mobile-player/Geyser/Upgrade/Extended/Fix.md"};function c(h,e,d,u,k,b){const a=s("nw-image-viewer");return o(),t("div",null,[e[0]||(e[0]=i('<h1 id="游戏机制" tabindex="-1">游戏机制 <a class="header-anchor" href="#游戏机制" aria-label="Permalink to &quot;游戏机制&quot;">​</a></h1><p>目前， 你服务器的基岩版玩家可能会遇到一些问题 像是卡在竹子中间，缺少一些Java版独有的粒子，物品材质之类的 我们可以通过安装额外插件来对客户端和服务端进行额外的修改来完成兼容</p><h2 id="hurricane插件" tabindex="-1">Hurricane插件 <a class="header-anchor" href="#hurricane插件" aria-label="Permalink to &quot;Hurricane插件&quot;">​</a></h2><p>此插件可以修复:</p><ul><li>卡在竹子和滴水石锥中无法移动</li><li>骑乘实体时无法正确控制方向， 在需要使用钓竿的实体上影响尤为明显</li></ul><div class="warning custom-block"><p class="custom-block-title">警告</p><p>支持版本: 1.14-1.21.1</p></div><h2 id="皮肤" tabindex="-1">皮肤 <a class="header-anchor" href="#皮肤" aria-label="Permalink to &quot;皮肤&quot;">​</a></h2><p>在安装Floodgate后， Java版玩家可以看到基岩版玩家的皮肤 但是在离线服务器， 为了让皮肤可以正确显示，一般会安装额外的皮肤插件 这时， 基岩版玩家的皮肤显示又会变的不正常 我们可以通过安装GeyserSkinManager插件来解决这个问题</p><p>你可以在 <a href="https://github.com/Camotoy/GeyserSkinManager/releases" target="_blank" rel="noreferrer">此处</a> 下载</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>GeyserSkinManager有不同版本 你若正在使用群组端， 请在群组端安装对应版本而不是其子服</p></div><p>此外， Java版玩家可以通过安装BedrockSkinUtility模组来看见基岩版玩家的披风</p><p>你可以在 <a href="https://github.com/Camotoy/BedrockSkinUtility" target="_blank" rel="noreferrer">此处</a> 下载模组</p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>BedrockSkinUtility仅支持 Fabric 1.20.2 以下的版本</p></div><h2 id="geyseroptionalpack" tabindex="-1">GeyserOptionalPack <a class="header-anchor" href="#geyseroptionalpack" aria-label="Permalink to &quot;GeyserOptionalPack&quot;">​</a></h2><p>GeyserOptionalPack是一个可选资源包 它通过资源包来实现一些Java版中独有的功能或特性</p><p>你可以在 <a href="https://download.geysermc.org/v2/projects/geyseroptionalpack/versions/latest/builds/latest/downloads/geyseroptionalpack" target="_blank" rel="noreferrer">此处</a> 下载。</p><p>此资源包实现了:</p><ul><li>盔甲架底座武器/底板可见性</li><li>盔甲架姿势</li><li>幻术师</li><li>部分缺失的粒子</li><li>副手动画</li><li>潜影贝隐形平等性</li><li>发光箭实体纹理 (没有实体描边渲染(基岩版本身就没有)，只有箭矢纹理)</li><li>提供超过记分板字符限制的绕过方式</li><li>隐藏在Java版中没有的UI元素，例如： <ul><li>制图台中的文本输入字段</li><li>创造模式下的2x2工作台</li><li>命令方块菜单中的时钟延迟和重命名字段</li><li>Java版中不存在的结构方块选项</li></ul></li></ul><h2 id="箱子优化" tabindex="-1">箱子优化 <a class="header-anchor" href="#箱子优化" aria-label="Permalink to &quot;箱子优化&quot;">​</a></h2><p>基岩版原版无法看到 9x1,9x2 等大小的箱子,GeyserMoreRows 可以解决这个问题,<a href="https://github.com/GeyserExtensionists/GeyserMoreRows" target="_blank" rel="noreferrer">GitHub</a>,需要自行构建,不会可以加入 zim 的 discord 下载预构建</p><p>下载后还需安装<a href="https://raw.githubusercontent.com/GeyserExtensionists/GeyserMoreRows/refs/heads/main/MorerowsPack.mcpack" target="_blank" rel="noreferrer">基岩资源包</a></p><h2 id="更好的第三人称" tabindex="-1">更好的第三人称 <a class="header-anchor" href="#更好的第三人称" aria-label="Permalink to &quot;更好的第三人称&quot;">​</a></h2><p>可以让基岩版玩家获得更好的第三人称视角!</p><p><a href="https://github.com/lilingfengdev/GeyserBetterBedrockThirdPerson/releases/tag/latest" target="_blank" rel="noreferrer">下载地址</a></p><h2 id="bedrockparity" tabindex="-1">BedrockParity <a class="header-anchor" href="#bedrockparity" aria-label="Permalink to &quot;BedrockParity&quot;">​</a></h2><p>修复了以下问题</p><ul><li>基岩玩家现在可以看到末影龙头嘴动画和猪灵头耳动画(当使用红石时)</li><li>横扫之刃现在可以在铁砧中使用</li></ul><p><a href="https://github.com/tbyt/BedrockParity/releases/tag/release" target="_blank" rel="noreferrer">下载</a></p><h2 id="geyserextras" tabindex="-1">GeyserExtras <a class="header-anchor" href="#geyserextras" aria-label="Permalink to &quot;GeyserExtras&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>此插件仅支持 1.20.6+</p></div><p>此插件为Geyser提供了JE攻击冷却指示器样式</p><p><img src="'+n+'" alt=""></p><p>还有!:</p><ul><li>Java 冷却指示器</li><li>Java 战斗声音(横扫攻击、暴击、击退)</li><li>地狱顶部雾颜色修复</li><li>自动重新连接</li><li>基岩表情聊天</li><li>资源包加载</li><li>快捷菜单</li><li>块重影修复</li><li>玩家名单(类似于TAB，但是BE Form)</li></ul><p><a href="https://github.com/GeyserExtras/GeyserExtras" target="_blank" rel="noreferrer">项目地址</a></p><p><a href="https://hangar.papermc.io/Guardian1l/GeyserExtras_CNN" target="_blank" rel="noreferrer">汉化下载</a></p><h2 id="geyser-recipe-fix" tabindex="-1">Geyser Recipe Fix <a class="header-anchor" href="#geyser-recipe-fix" aria-label="Permalink to &quot;Geyser Recipe Fix&quot;">​</a></h2><p>允许Geyser玩家使用铁砧和锻造台以及自定义菜单,<a href="https://modrinth.com/plugin/geyser-recipe-fix" target="_blank" rel="noreferrer">下载</a></p><p>你还需要安装 <a href="https://modrinth.com/plugin/packetevents" target="_blank" rel="noreferrer">PacketEvent</a></p><h2 id="展示实体修复" tabindex="-1">展示实体修复 <a class="header-anchor" href="#展示实体修复" aria-label="Permalink to &quot;展示实体修复&quot;">​</a></h2><p>正常情况下,展示实体在基岩版无法显示,GeyserDisplayEntity 可以解决这个问题,<a href="https://github.com/GeyserExtensionists/GeyserDisplayEntity" target="_blank" rel="noreferrer">GitHub</a>,需要自行构建,不会可以加入 zim 的 discord 下载预构建</p><p>该插件对于 IA,ORX 这些插件特别好使,让基岩版玩家不用再看口口了</p>',42)),l(a)])}const g=r(p,[["render",c]]);export{y as __pageData,g as default};
