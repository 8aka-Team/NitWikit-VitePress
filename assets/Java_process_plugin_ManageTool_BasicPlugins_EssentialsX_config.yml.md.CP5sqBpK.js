import{_ as i,c as a,a5 as n,o as l}from"./chunks/framework.O9ad3XaM.js";const g=JSON.parse('{"title":"config.yml","description":"","frontmatter":{"title":"config.yml","sidebar_position":3},"headers":[],"relativePath":"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml.md","filePath":"nitwikit/docs-java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml.md","lastUpdated":1743828286000}'),p={name:"Java/process/plugin/ManageTool/BasicPlugins/EssentialsX/config.yml.md"};function h(k,s,e,t,r,E){return l(),a("div",null,s[0]||(s[0]=[n(`<div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#-驿站忆行(185839426)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#-驿站忆行(185839426)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                       Notes                          | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#-驿站忆行(185839426)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#-驿站忆行(185839426)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is the config file for EssentialsX.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This config was generated for version 2.19.4.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you want to use special characters in this document， such as accented letters， you MUST save the file as UTF-8， not ANSI.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you receive an error when Essentials loads， ensure that:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   - No tabs are present: YAML only allows spaces</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   - Indents are correct: YAML hierarchy is based entirely on indentation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   - You have &quot;escaped&quot; all apostrophes in your text: If you want to write &quot;don&#39;t&quot;， for example， write &quot;don&#39;&#39;t&quot; instead (note the doubled apostrophe)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   - Text with symbols is enclosed in single or double quotation marks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you need help， you can join the EssentialsX community: https://essentialsx.net/community.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                 Essentials (Global)                  | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OP名字的颜色代码，填写0~9或a~f其中的一个数字或字母，填写&#39;none&#39;来冻结该功能</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 1.16 中，你也可以在此处使用十六进制颜色代码。 (例如，#613e1d 是棕色的)。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ops-name-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;4&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 昵称的前缀符号，这样你能知道这不是他们真正的用户名.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nickname-prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;~&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置最大昵称长度， 昵称前缀也包括在内.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-nick-length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不能在昵称中使用的短语列表。 你可以在此处包含正则表达式。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拥有essentials.nick.blacklist.bypass 的用户将能够绕过此过滤器。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nick-blacklist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- Notch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- &#39;^Dinnerbone&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此选项时，昵称长度检查将排除玩家名字的颜色代码所占字符.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 即: &quot;&amp;6Notch&quot; 占有7个字符 (而其中的两个就是颜色代码所占字符)，如果你设置的昵称字符超过了系统限定，请将该选项改为 true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ignore-colors-in-max-nick-length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此选项后，隐藏用户的显示名称将不会显示。 这样可以防止玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 能够看到他们在消失时在线。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hide-displayname-in-vanish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你想用其他的插件来设置玩家名字，将其改为&quot;false&quot;.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">change-displayname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此选项将导致 Essentials 在 Tab 完成 Essentials 命令时显示玩家的显示名称而不是用户名。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">change-tab-complete-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此选项时，TAB玩家列表将使用显示名称更新。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上方 change-displayname (above) 必须为true.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#change-playerlist: true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加前缀后缀(上面的&quot;change-displayname&quot;必须是true才有效)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你不设置该项，且essentialschat被安装了，其将会被默认为&quot;true&quot;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上方 change-displayname (above) 必须是 true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不要乱动该选项，除非你知道如何正确使用!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#add-prefix-suffix: false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此选项后，玩家前缀将显示在玩家列表中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此功能仅适用于 Minecraft 1.8 及更高版本。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上方 change-playerlist 必须为 true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#add-prefix-in-playerlist: true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># When this option is enabled， player suffixes will be shown in the playerlist.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This feature only works for Minecraft version 1.8 and higher.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This value of change-playerlist has to be true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#add-suffix-in-playerlist: true  这段怎么跟上面一模一样 = =</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否开启安全传送功能</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果此项设置为true， 则会尝试传送玩家到最近的安全地点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为false， 将会取消传送并发送一则警告消息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-safety</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果试图传送到不安全的位置，这会在没有警告的情况下强制禁用传送安全检查。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># teleport-safety 并且此选项需要设置为 true 以强制传送到危险位置。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">force-disable-teleport-safety</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果玩家在创造、冒险或上帝模式中传送到不安全的位置； 他们不会被传送到</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安全位置。 如果你希望玩家一直被传送到安全位置，请将此选项设置为 true。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">force-safe-teleport-location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果玩家骑乘，传送将失败。 玩家是否应该在被传送之前下马？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 true，Essentials 将在传送之前让这个玩家下马。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 false，尝试的传送将被取消并发出警告。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-passenger-dismount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传送功能的冷却时间(以秒为单位)，如/home， /tp， etc 等命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-cooldown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传送延迟时间(以秒为单位)，在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击，传送将取消.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传送时无敌时间(以秒为单位)在玩家被确实传送之前的时间内，其他玩家不能攻击该玩家.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这同样可以阻止该玩家攻击其他玩家.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-invulnerability</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否让所有的传送都传到方块的中心； 其中 x 和 z 坐标小数变为 0.5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-to-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 延迟，以秒为单位， 比如使用 /heal 或 /feed attempts. 驿站:heal命令是治愈玩家</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">heal-cooldown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 治疗玩家时是否移除药水效果？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">remove-effects-on-heal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 范围查询</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 该选项对于指令 /near 起效</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置下方的数字即为输入/near时可查询到的范围内的玩家.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">near-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁止作弊命令/give， /item调出的物品黑名单列表.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如 item-spawn-blacklist: 46，11，10  驿站觉得这功能没必要a</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">item-spawn-blacklist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set this to true if you want permission based item spawn rules.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Note: The blacklist above will be ignored then.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example permissions (these go in your permissions manager):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.itemspawn.item-all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.itemspawn.item-[itemname]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.itemspawn.item-[itemid]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.give.item-all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.give.item-[itemname]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.give.item-[itemid]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.unlimited.item-all</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.unlimited.item-[itemname]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.unlimited.item-[itemid]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - essentials.unlimited.item-bucket # Unlimited liquid placing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看更多信息，请访问 http://wiki.ess3.net/wiki/Command_Reference/ICheat#Item.2FGive</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permission-based-item-spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用/spawnmob命令一次性生成生物的最大数量.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spawnmob-limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 /lightning 时要通知用户吗？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">warn-on-smite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果背包满了，是否掉落物品?</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">drop-items-if-full</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 邮件提醒开关通知</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否提醒玩家有无新邮件(true为提醒，false为不提醒)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notify-no-new-mail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定玩家每次收到邮件通知之间的持续时间(以秒为单位)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对于有大量邮件流量的服务器很有用。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">notify-player-of-mail-cooldown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器公告 和 服务器规定，现在分别存储在 motd.txt 和 rules.txt 中设置.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当一个命令与其它插件冲突，Essentials基础插件会默认尝试强行让其它插件获得优先权.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果一个命令在列表中，Essentials基础插件会尝试给默认的命令优先权.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 通常哪一个插件将胜出的几率是随机的.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你有两个插件并且命令相同而且你希望使用essentials，那么你需要了解 命令别名(alias).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># essentials 插件的 &#39;god&#39; 命令 &#39;god&#39; 别名 &#39;egod&#39;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 http://wiki.bukkit.org/Bukkit.yml#aliases 了解更多信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">overridden-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - god</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令黑名单，冻结的命令在服务器将完全不可使用.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当命令冲突时，在此禁用将无效果(如要禁用下面的某个指令，请将前方的 # 删去)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问 http://wiki.bukkit.org/Commands.yml#aliases 查看如何关闭其他插件的命令.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disabled-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - nick</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - clear</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 是否应该显示详细的命令用法。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 false，Essentials 会将所有使用情况折叠成一条使用消息。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">verbose-command-usages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这些命令是当开启了/socialspy命令时可以看到的玩家私聊</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以添加一些来自其他插件的命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者移除一些你不想看到的私聊命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 - &#39;*&#39; 则为禁用所有指令.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">socialspy-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">msg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">w</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mail</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">m</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">whisper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">emsg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">er</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">reply</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ereply</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">action</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">describe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">eaction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">edescribe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">etell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ewhisper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 来自禁言玩家的私人和公共消息是否应该出现在社交间谍中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果是这样，它们将与普通玩家发送的区别开来。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">socialspy-listen-muted-players</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 社交间谍应该监视私人消息还是只监视上面列表中的命令。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为 false，social spy 将仅监视上面列表中的命令。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">socialspy-messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下设置监听玩家何时对世界进行改变。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用其他插件来控制速度和飞行，你应该将这些设置为 false。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家改变世界时，EssentialsX 是否应该重置他们的飞行？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果玩家没有essentials.fly，这将禁用飞行。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">world-change-fly-reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家改变世界时，我们是否应该根据他们的权限重置他们的速度？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果没有essentials.speed，这会将玩家的速度重置为默认值。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果玩家没有essentials.speed.bypass，这会将他们的速度重置为上面指定的最大值。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">world-change-speed-reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁言命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家被禁言时，这些命令将被禁用。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 &#39;*&#39; 禁用每个命令。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 默认情况下已禁用 Essentials 消息传递命令。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 它只注意 root 命令，之后不注意 args(它眼里 /f chat 和 /f 一样)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mute-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">f</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kittycannon</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # - &#39;*&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你不想使用权限系统，你可以在下面定义一个“玩家权限”列表。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用受支持的权限系统，此列表无效。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用的是不受支持的权限系统，只需删除此部分即可。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 白名单你希望默认给予玩家的命令和权限(其他一切都是操作)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这些是没有“必需品”的权限。 部分。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 要启用此功能，请将 use-bukkit-permissions 设置为 false。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">player-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">afk</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">afk.auto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">back.ondeath</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">balance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">balance.others</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">balancetop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chat.color</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chat.format</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chat.shout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">chat.question</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">clearinventory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">compass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">depth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">delhome</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">getpos</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">geoip.show</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">help</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">helpop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">home</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">home.others</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ignore</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">itemdb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kits.tools</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">list</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mail</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mail.send</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">me</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">motd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">msg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">msg.color</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nick</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">near</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pay</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ping</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">protect</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rules</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">realname</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">seen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sethome</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">setxmpp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.create.protection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.create.trade</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.break.protection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.break.trade</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.balance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.buy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.disposal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.enchant</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.free</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.gamemode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.heal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.kit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.mail</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.protection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.repair</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.sell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.time</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.trade</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.warp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">signs.use.weather</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">spawn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">suicide</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">time</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tpa</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tpaccept</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tpahere</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tpdeny</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">warp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">warp.list</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">worth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xmpp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用此选项强制基于op权限的权限处理程序，而不管检测到已安装的权限插件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你想要自定义权限插件的基于超级权限的权限(使用通配符)，这很有用。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你希望通过上面的 \`player-commands\` 部分使用 EssentialsX 的内置权限，请将其设置为 false。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-bukkit-permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当该选项开启后 (例如. delay &lt; 0) 则玩家使用过一次该项工具包以后</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将从玩家的kit列表中删去该项可用工具包</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">skip-used-one-time-kits-from-kit-list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用后，只要玩家的盔甲槽是空的，就会自动装备领取的kit包中的盔甲。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kit-auto-equip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确定 /createkit 命令的功能。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果这是true，/createkit 将给用户一个带有kit代码的链接。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为 false，/createkit 将直接将该kit工具包添加到 kits.yml 配置文件中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为false。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pastebin-createkit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确定 /createkit 是否会使用 NBT 项目序列化生成套件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果这是真的，/createkit 会将项目存储为 NBT； 否则，它将使用 Essentials 的人类可读项目格式。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 通过使用 NBT 序列化，/createkit 可以存储具有复杂元数据的项目，例如具有自定义属性的潜影盒和武器。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 警告：此选项仅适用于 1.15.2+ Paper 服务器，它将绕过来自其他插件(如 Magic)的任何自定义序列化程序。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 警告：在启用此选项的情况下通过 /createkit 创建工具包时，你将无法使用这些工具包项目降级你的服务器。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此选项仅影响 /createkit - 你仍然可以使用 Essentials 的人类可读项目格式在 \`kits.yml\` 中手动创建套件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为false。 应该是说，开启后kit可以存nbt的东西了</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-nbt-serialization-in-createkit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 木牌控制</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看网页 http://wiki.ess3.net/wiki/Sign_Tutorial 可以了解如何使用这些.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除#可以激活相应的木牌功能. 想禁用所有的木牌功能， 使用命令/remove 每个牌子.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当其他任何类型木牌启用时，木牌彩字支持将默认启用.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 木牌彩字并不是真实的彩字， 是使用颜色代码实现， 当拥有木牌彩字权限时才会有效.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">enabledSigns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- color</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- balance</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- buy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- sell</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- trade</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- free</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- warp</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- kit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- mail</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- enchant</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- gamemode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- heal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- info</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- spawnmob</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- repair</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- time</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- weather</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- anvil</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- cartography</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- disposal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- grindstone</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- loom</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- smithing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- workbench</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家与牌子之间互动的时间间隔</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 数值用该在1-20之间，20将几乎没有间隔.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 较小的数值可以有效减少延迟，但是可能会惹怒玩家</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sign-use-per-second</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许在 1.13 及更高版本的现有标志上使用项目 ID。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你不能在新标志上使用物品 ID，但这将允许玩家与标志进行交互</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 放在 1.13 之前。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-old-id-signs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 标志名称列表 Essentials 不应保护。 此功能在以下情况下特别有用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 另一个插件提供了 EssentialsX 提供的标志，但 Essentials 会覆盖。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如，如果一个插件提供了一个 [kit] 标志，并且你希望使用他们的而不是</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 的，然后只需在下面添加工具包，Essentials 将不会保护它。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 有关更多信息，请参阅 https://github.com/drtshock/Essentials/pull/699。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">unprotected-sign-names</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #- kit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当自动备份被取消时，使用批处理/bash 命令来备份.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务器在执行备份命令前会先保存世界，并禁用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在备份期间保存以防止世界损坏或其他冲突。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 也可以使用 /backup 手动触发备份。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">backup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以分钟为单位的间隔。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为true，即使没有玩家在线，备份任务也会运行。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  always-run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 除非你在此处添加有效的备份命令或脚本，否则此功能将毫无用处。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 使用 &#39;save-all&#39; 来简单地强制定期保存世界而无需备份。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 下面的示例命令使用 rdiff-backup: https://rdiff-backup.net/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #command: &#39;rdiff-backup World1 备份/World1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此设置为 true 以启用每个 warp 的权限。 驿站:或者用权限组插件来给权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">per-warp-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当使用/list命令时，将玩家按组分类.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以隐藏或合并组，在下面设定/list的分类.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更加详细的说明和示例请查看wiki: http://wiki.ess3.net/wiki/List</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 列出需要合并的组</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #Staff：所有者管理员版主</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    Admins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">owner admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 被限制的组，可以显示的玩家名字数量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #builder：20</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 隐藏的组</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     #default: hidden</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 没有组的玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #Players: &#39;*&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在使用昵称的玩家旁边显示 /list 中的真实ID。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">real-names-on-list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 控制台输出更多东西。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置所有消息的语言文件.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果没有设置，将使用默认语言文件.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如，使用中文语言文件，设置locale为zh，即可使用语言文件&quot;messages_zh.properties&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不要忘记去除&quot;#&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看更多信息，请访问 http://wiki.ess3.net/wiki/Locale</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#locale: en</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当开启上帝模式的人离开服务器时关闭那人的上帝模式。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">remove-god-on-disconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动AFK   驿站:使用命令/afk 暂时离开</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此超时(以秒为单位)后，用户将被设置为 AFK。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此功能需要玩家拥有essentials.afk.auto 节点。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 -1 表示没有超时。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto-afk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 挂机太久就给老子踢啦！</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在此超时(以秒为单位)后，用户将被踢出服务器。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#essentials.afk.kickexempt 节点覆盖此功能。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 -1 表示没有超时。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auto-afk-kick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此设置为true，如果玩家是AFK，冻结玩家，如果玩家是AFK。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 驿站:大概是说让挂机玩家不被生物打扰。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这也会为 AFK 玩家启用临时上帝模式。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家必须使用命令 /afk 离开 AFK 模式。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">freeze-afk-players</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家AFK时，是否能够捡起物品</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用这个，当你不希望人们在暴民陷阱中闲置时。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-item-pickup-while-afk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此设置控制玩家是否在交互时自动退出afk模式。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当此设置为 false 时，玩家需要使用 /afk 命令手动取消 AFK。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cancel-afk-on-interact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家移动时会自动移除 afk 状态吗？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 无论此设置如何，玩家都会在聊天/命令中从 AFK 中移除。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用它以减少服务器延迟。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cancel-afk-on-move</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家发送聊天消息时是否自动移除 afk 状态？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cancel-afk-on-chat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当其他玩家睡觉时，是否忽略 AFK 玩家？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此设置为false时，如果有玩家在AFK，玩家将无法跳过夜晚。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拥有节点 Essentials.sleepingignored 权限的用户将始终被忽略。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sleep-ignores-afk-players</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当其他玩家试图睡觉时，是否应该忽略消失的玩家？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当此设置为 false 时，如果消失的玩家没有睡觉，玩家将无法跳过夜晚。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拥有节点 Essentials.sleepingignored 权限的用户将始终被忽略。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sleep-ignores-vanished-player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置玩家AFK时的列表名称。 默认情况下为 none，它指定 Essentials</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不应干扰 AFK 玩家的列表名称。 none我改成了 挂机中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以使用颜色代码，使用 {USERNAME} 玩家的名称或 {PLAYER} 作为玩家的显示名称。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">afk-list-name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;挂机中&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家进入或退出AFK模式时，是否聊天栏通知其他玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 发给整个服务器的人，还是只发给这个挂机的玩家?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当此设置为 false 时，只有准备挂机的玩家会收到afk通知</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">broadcast-afk-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以在此处禁用 Minecraft 的死亡消息。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">death-messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 应该如何处理拥有 Essentials.keepinv 权限的玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拥有消失诅咒附魔的物品或装备?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以将其设置为“keep”(保留项目)、“掉落”(删除项目)或“delete”(删除项目)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为“keep”</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vanishing-items-policy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keep</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 应该如何处理拥有 Essentials.keepinv 权限的玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#拥有绑定诅咒附魔的物品或装备?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以将其设置为“keep”(保留项目)、“drop”(删除项目)或“delete”(删除项目)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为“keep”</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">binding-items-policy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keep</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家死亡时，他人会收到他的死亡坐标吗？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">send-info-after-death</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否关闭加入、退出游戏的提示消息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当启用后， 具有对应权限的玩家加入、离开游戏将不会在公屏上显示消息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此外，拥有essentials.silentjoin.vanish 的人将在加入时消失。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-silent-join-quit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以在此处设置自定义加入和退出消息。 将此设置为“none”以使用默认的 Minecraft 消息，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或将此设置为 &quot;&quot; 以完全隐藏消息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用变量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {PLAYER} - 玩家的显示名。(昵称)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {USERNAME} - 玩家的用户名。(ID)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {PREFIX} - 玩家的前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {SUFFIX} - 玩家的后缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {ONLINE} - 在线玩家数量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {UNIQUE} - 加入服务器的唯一玩家数量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {UPTIME} - 服务器运行时间</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-join-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;a+&amp;e]&amp;6比驿站丑的 {USERNAME} 加入了游戏&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-quit-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;c-&amp;e]&amp;6比驿站丑的 {USERNAME} 退出了游戏&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以在此处为新玩家(和更换ID的老玩家?)设置加入提示。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 仅当用户之前加入并更改了用户名时才会使用此消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这将显示而不是 custom-join-message，因此如果你打算保持它们相似，请确保它们匹配。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此设置为“none”以对每个连接使用上面的“custom-join-message”。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用变量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {PLAYER} - 玩家的显示名。(昵称)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {USERNAME} - 玩家的用户名。(ID)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {OLDUSERNAME} - 这个玩家旧的名字。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {PREFIX} - 玩家的前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {SUFFIX} - 玩家的后缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {ONLINE} - 在线玩家数量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {UNIQUE} - 加入服务器的唯一玩家数量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {UPTIME} - 服务器运行时间</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">custom-new-username-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&amp;e[&amp;a+&amp;e]&amp;6比驿站丑的新玩家 {USERNAME} 加入了游戏&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Essentials 是否用语言文件中的“服务器已满”消息覆盖原版“服务器已满”的文本？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 false 以保留原版消息。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">use-custom-server-full-message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家数量达到一定限制时，你可以禁用加入和退出消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家人数低于此数字时，将始终显示加入/退出消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此设置为 -1 以始终显示加入和退出消息，无论玩家人数如何。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hide-join-quit-messages-above</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用上帝模式的世界。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">no-god-in-worlds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  - world_nether</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为true，启用每个世界传送单独的权限.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 支持 /world， /back， /tp[a|o][here|all]，但是不支持 warps.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给予玩家某个世界的传送权限 essentials.world.&lt;worldname&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不包括 /home 命令， 下面有单独的设定.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">world-teleport-permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若在使用/give或/item命令时如果没有填写数量.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果这个数值设置小于1，那么给予最大叠加数量的物品</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果超大堆叠没有开启，那么数量大于正常堆叠数量(64)时，将给予1组以上物品.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default-stack-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 超大堆叠允许玩家堆叠物品超过正常最大堆叠.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果玩家拥有essentials.oversizedstacks权限，当使用 /give 或 /item时可以获得超大堆叠物品.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 超大堆叠物品的上限是多少?</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">oversized-stacksize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许修理附魔盔甲和武器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为false，你仍然可以允许某些玩家修理.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用essentials.repair.enchanted权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">repair-enchanted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在kits和物品生成时，允许 &#39;不安全的&#39; 附魔.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 警告: 混乱结合和超过常规等级的附魔可能导致客户端，服务端或者插件崩溃.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">unsafe-enchantments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /tree 和 /bigtree 命令可以生成树的玩家的最大范围。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tree-command-range-limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否想要essentials插件保留 /back 坐标在&quot;teleport listener&quot;?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你设置为true，一些插件可以获得传送坐标.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">register-back-in-listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家登录后，多少秒后可以造成攻击伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">login-attack-delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置最大飞行速度， 速度从 0.1 到 1.0 之间</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-fly-speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置每分钟可以发送的最大邮件数量.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-walk-speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置一分钟内可以发送的最大邮件量。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mails-per-minute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置/tempban 可以临时封禁的最大时间.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 -1 可禁用此功能， 另外 essentials.tempban.unlimited 权限可以覆盖此设置.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-mute-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 /tempban 可以使用的最长时间(以秒为单位)。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 -1 禁用，essentials.tempban.unlimited 可用于覆盖。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-tempban-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更改默认的 /reply 功能。 这可以使用 /rtoggle 在每个玩家的基础上进行更改。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为真，/r 转到你最后发消息的人，否则第一个发消息给你的人。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为假，/r 转到最后一个给你发消息的人。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">last-message-reply-recipient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为特定玩家启用了 last-message-reply-recipient，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这指定了持续时间，以秒为单位，需要经过</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#reply-recipient 在收到消息时更新。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为 180(3 分钟)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">last-message-reply-recipient-timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更改默认的 /reply 功能。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为true，/reply 将不会检查你正在回复的人是否已经消失。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为 false，玩家将无法/回复因消失而无法再看到的玩家。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">last-message-reply-vanished</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换是否左键单击带有牛奶桶的生物会将它们变成婴儿。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">milk-bucket-easter-egg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换是否应在加入时向玩家发送他们飞行状态是否开启</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">send-fly-enable-on-join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 true 以启用 per-world 权限，以便使用 Essentials 命令为各个世界设置时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这适用于/time、/day、/eday、/night、/enight、/etime。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许某人使用essentials.time.world.&lt;worldname&gt; 传送到一个世界。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">world-time-permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为 Essentials 命令和外部命令指定冷却时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 所有命令都不以正斜杠 (/) 开头。 代替 /msg，写 msg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 支持通配符。 例如。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &#39;*i*&#39;: 50</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为所有包含字母 i 的命令添加 50 秒的冷却时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># EssentialsX 通过使用插入符号启动命令来支持正则表达式 ^</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如，要针对以ban而不是banip开头的命令，将使用以下命令：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;^ban([^ip])( .*)?&#39;: 60 # 60 秒 /ban 冷却时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：如果你有一个以 ^ 开头的命令，那么你可以使用反斜杠 (\\) 对其进行转义。 例如 \\^命令：123</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">command-cooldowns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># feed: 100 # /feed 命令有 100 秒的冷却时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;*&#39;: 5 # 所有命令的冷却时间为 5 秒</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 命令冷却时间是否应该在服务器关闭后持续存在</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">command-cooldown-persistence</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NPC余额是否应该在余额排名功能中列出，例如/balancetop。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># NPC 余额可以包含 FactionsUUID 插件中的派系等功能。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">npcs-in-balance-ranking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家潜行时允许批量买卖标志。 应该是 /sell 命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当一个标志一次出售或购买一件物品并且玩家想要一次出售一堆时，这很有用。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-bulk-buy-sell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许使用 /sell 命令出售具有自定义名称的物品。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这可能有助于防止玩家意外出售命名物品。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-selling-named-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 加入玩家的 MOTD 显示延迟，以毫秒为单位。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 MOTD 命令或权限被禁用，这将无效。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这也可以设置为 -1 以完全禁用加入 MOTD。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">delay-motd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认情况下应启用其补充确认命令的命令列表。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为空，最新的有效命令列表见最新的源码config.yml。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">default-enabled-confirm-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- 支付 pay</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- 清库存 clearinventory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当玩家从监狱中获释后，Essentials 应该将他们传送到哪里？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以设置为“返回”让他们传送到他们入狱前的位置，“产卵”让他们</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 传送生成，或“关闭”不让它们传送。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">teleport-when-freed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">back</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否只应在用户在线时计算入狱时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为真，被监禁的玩家的时间只会在他们在线时减少。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jail-online-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置超时时间，以秒为单位，玩家在请求被取消之前接受 tpa。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 0 表示没有超时。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tpa-accept-cancellation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 任何玩家可以同时挂起的 tpa 请求的最大数量。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一旦超过此阈值，旧请求将立即超时。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认为 5。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tpa-max-requests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家可以直接把物品戴在头上。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-direct-hat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许游戏内玩家在运行 /broadcastworld 时指定一个世界。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果为 false，则在游戏中运行 /broadcastworld 将始终向玩家的当前世界发送消息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这不会影响从控制台运行命令，这里总是需要一个世界。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-world-in-broadcastworld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 认为水方块是“安全的”，因此允许玩家传送</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 /home 或 /spawn 等命令到被占用的位置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 按水块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">is-water-safe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># usermap 是否应该在保存用户名之前尝试清理用户名？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果你使用 Minecraft 中国，你应该只将其更改为 false。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">safe-usermap-names</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当命令块执行命令时，Essentials 是否应该输出日志？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：&lt;x&gt;，&lt;y&gt;，&lt;z&gt; 处的 CommandBlock 发出服务器命令：/&lt;command&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log-command-block-commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 /fireball 生成的射弹的最大速度。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-projectile-speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># EssentialsX 是否应该检查更新？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为 true，EssentialsX 将在新版本可用时显示通知。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这使用了公共 GitHub API，不会发送或存储任何识别信息。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                        Homes                         | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # 允许玩家在白天设置他床所在的位置为家.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#此设置在 Minecraft 1.15+ 中无效，因为 Minecraft 将始终允许玩家在白天设置他们的床位。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">update-bed-at-daytime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 true 将给予玩家跨越世界传送回家的权限</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这个设置只适用于&#39;/home&#39;命令.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对于其他传送命令，给予玩家多世界间传送的权限 essentials.world.&lt;世界名称&gt; 可以允许玩家跨世界传送</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">world-home-permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许玩家拥有多个家.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家拥有多个家需要有essentials.sethome.multiple权限， 默认 &#39;default&#39; 下面.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义不同权限的不同家的数量例如:essentials.sethome.multiple.vip</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用有 essentials.sethome.multiple.unlimited 权限的玩家将不被此项设置所限制.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看更多信息，请访问 http://wiki.ess3.net/wiki/Multihome</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create the &#39;home-rank&#39; below， and give the matching permission: essentials.sethome.multiple.&lt;home-rank&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For more information， visit http://wiki.ess3.net/wiki/Multihome</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sethome-multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  vip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  staff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在这个例子中，拥有 &#39;essentials.sethome.multiple&#39; 和 &#39;essentials.sethome.multiple.vip&#39; 的人将拥有 5 个家。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请记住，他们必须拥有两个权限节点才能设置多个家。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 控制玩家是否需要“essentials.home.compass”权限才能指向</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家第一个家的指南针。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此保留为 false 将保留 Essentials 的原始行为，即始终</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 改变指南针的方向指向他们的第一个家。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">compass-towards-home-perm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果没有设置家，你想让玩家去出生点吗？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果设置为false，玩家在没有设置家的情况下运行/home时不会被传送。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spawn-if-no-home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否应该要求玩家确认他们试图覆盖的房屋？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">confirm-home-overwrite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                       Economy                        | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看更多信息，请访问 http://wiki.ess3.net/wiki/Essentials_Economy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以使用 /setworth 命令控制出售给服务器的物品的价值。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义新玩家开始的平衡(应该是说默认的钱)。 默认为 0。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">starting-balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义玩家每次使用命令时所要花的钱，空格由&quot;-&quot;代替，带有&quot;example&quot;的是例子.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一些命令例如/repair拥有独立的花费，可以在essentials wiki查看更多信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">command-costs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # /example costs $1000 PER USE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #example: 1000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # /kit tools costs $1500 PER USE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #kit-tools: 1500</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置该项为一个你想使用的货币符号(该项请勿乱动)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Remember， if you want to use special characters in this document，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># such as accented letters， you MUST save the file as UTF-8， not ANSI.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">currency-symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此选项以使货币符号出现在金额的末尾而不是开头。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如，欧元符号通常出现在当前金额之后。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">currency-symbol-suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置一个玩家所允许拥有的最大钱数.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这个数量最大为10万亿(1个1，13个0)，这是由于JAVA的限制.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">max-money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000000000000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置一个玩家所允许拥有的最小钱数 (必须大于最大金额的负数).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为0，将完全禁用透支/贷款.用户需要&#39;essentials.eco.loan&quot;权限，钱数才能低于0.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">min-money</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-10000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为true来记录所有玩家的交易记录(译注，仅记录Essentials所支持的交易命令和功能).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">economy-log-enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此功能还可以通过 Vault 记录来自其他插件的所有事务。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这可能会导致经济日志快速填满，因此只能用于测试目的！</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">economy-log-update-enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 /pay 中最低的可使用金额。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">minimum-pay-amount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用此功能以阻止尝试/支付另一个忽略他们的用户的用户。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pay-excludes-ignore-list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 余额小于或等于 $0 的用户是否应该显示在 balance-top 中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 false 将不会在 balance-top 中显示余额 &lt;= 0 的人。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：重新加载配置后，你还必须运行“/baltop force”才能显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">show-zero-baltop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 货币格式，不包括符号。 有关符号配置，请参阅currency-symbol-format-locale。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &quot;#，##0.00&quot; 是大多数国家/地区显示货币的方式。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#currency-format: &quot;#，##0.00&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 格式化货币符号。 一些语言环境使用 ， 和 . 可以互换。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 由于 Minecraft 字体渲染错误，某些格式无法在游戏中正确显示。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For 1.234，50 use de-DE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For 1，234.50 use en-US</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For 1&#39;234，50 use fr-ch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#currency-symbol-format-locale: en-US</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                         Help                         | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否设置输入&quot;/help&quot;时，显示其它插件的命令.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">non-ess-in-help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 隐藏没给出权限的插件.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以添加权限到对应玩家或用户组，使之对其显示.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 个人权限设置是:essentials.help.&lt;plugin&gt;，任何人有essentials.*或&#39;*&#39;将能看到所有帮助.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果下面的设置开启，你可以使用否定命令来移除权限，之后该插件的帮助将不会被看到.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hide-permissionless-help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                   EssentialsX Chat                   | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你需要安装 EssentialsChat.jar！.还有，不推荐ess全家桶，用别的聊天插件吧</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 有关详细信息，请参阅 https://essentialsx.net/wiki/Module-Breakdown.html。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">chat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置聊天半径，如果安装了EssentialsChat，这将设置玩家喊话的可见范围，以格为单位.设置为0则允许全图聊天.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意开启了间谍模式(权限:essentials.chat.spy)的玩家将看到所有聊天内容，无视该设置.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拥有&quot;essentials.chat.shout&quot;权限的玩家可以忽视该设置，只要在聊天内容前面加上&quot;!&quot;符号即可(小写感叹号)；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者拥有&quot;essentials.chat.question&quot;权限的玩家可以忽视该设置，只要在聊天内容前面加上&quot;?&quot;符号即可(小写问号)；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你可以添加使用上两行方法的花销，在上经济设置中的&quot;command-costs&quot;下添加&quot;chat-shout&quot;和&quot;chat-question&quot;的设置即可.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 聊天格式，可以有两种，你可以定义所有聊天为标准格式.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 或者你可以给一个用户组特定的聊天格式，提供一些额外的变化.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 想了解更多的默认聊天格式的信息，请查看wiki: http://wiki.ess3.net/wiki/Chat_Formatting</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 可用变量</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># {MESSAGE} - 聊天消息的内容。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {USERNAME} - 发件人的用户名。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {DISPLAYNAME} - 发件人的显示名称。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {NICKNAME} - 发件人的 Essentials 昵称。 如果发件人没有昵称，则显示用户名。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {PREFIX} - 发件人的前缀，由权限插件提供。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {SUFFIX} - 发件人的后缀，由权限插件提供。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {GROUP} - 发件人的主要组名，由权限插件提供。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {WORLD} - 发送者当前世界的世界别名。 有关详细信息，请参阅下面的世界别名部分。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {WORLDNAME} - 发送者当前世界的全名。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {SHORTWORLDNAME} - 发送者当前世界的第一个字符。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {TEAMNAME} - 发件人的记分牌团队名称。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {TEAMPREFIX} - 发件人的记分牌团队前缀。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # {TEAMSUFFIX} - 发件人的记分板球队后缀。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;{DISPLAYNAME}&gt; {MESSAGE}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #format: &#39;&amp;7[{GROUP}]&amp;r {DISPLAYNAME}&amp;7:&amp;r {MESSAGE}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #format: &#39;&amp;7{PREFIX}&amp;r {DISPLAYNAME}&amp;r &amp;7{SUFFIX}&amp;r: {MESSAGE}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group-formats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认值：&#39;{WORLDNAME} {DISPLAYNAME}&amp;7:&amp;r {MESSAGE}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 管理员：&#39;{WORLDNAME} &amp;c[{GROUP}]&amp;r {DISPLAYNAME}&amp;7:&amp;c {MESSAGE}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 如果你使用组格式，请确保删除“#”以允许读取设置。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 注意：组名区分大小写，因此你必须将它们与你的权限插件匹配。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 你可以使用权限来控制玩家是否可以在聊天消息中使用格式化代码。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 有关更多信息，请参阅 https://essentialsx.net/wiki/Color-Permissions.html。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 世界别名允许你用聊天格式中的不同名称替换世界名称。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 如果你使用世界别名，请确保删除开头的“#”以允许读取设置。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  world-aliases</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  plots: &quot;&amp;dP&amp;r&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  creative: &quot;&amp;eC&amp;r&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 是否默认让玩家进入喊叫模式。 (应该是说喊话)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  shout-default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 玩家的喊叫模式是否应该持续重启。 (野兽前辈的喊叫模式嘛awa)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  persist-shout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否应该启用聊天问题。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  question-enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                 EssentialsX Protect                  | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你需要安装 EssentialsX Protect 才能使用此部分。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 了解更多信息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">protect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 总体的物理现象或行为的设置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  prevent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 阻止以下现象(译注:true就是阻止，false是允许，这里需要注意一下)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lava-flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 岩浆的流动</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    water-flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 水的流动</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    water-bucket-flow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 水桶水的流动</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fire-spread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 火的传播</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lava-fire-spread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 岩浆引起的火的传播</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lava-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 打火石产生火</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    flint-fire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 闪电引起的火的传播</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lightning-fire-spread</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 传送门的创造</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    portal-creation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 TNT的爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 TNT对玩家造成伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-playerdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 TNT矿车 爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 应该是物品损坏</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-minecart-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 TNT矿车 爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-minecart-playerdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 TNT矿车 对玩家造成伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    tnt-minecart-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 tnt-矿车-物品损坏 ???</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fireball-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 火球的爆炸(译注:恶魂发射的火球)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fireball-fire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 火球的燃烧</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fireball-playerdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 火球对玩家造成伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fireball-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 火球项目伤害 ???</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    witherskull-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 凋零攻击的爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    witherskull-playerdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 凋零攻击对玩家照成伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    witherskull-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #凋零骷髅头?物品伤害 ???</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    wither-spawnexplosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 凋零出生时的爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    wither-blockreplace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 阻止 凋零破坏方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    creeper-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 爬行者的爆炸</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    creeper-playerdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 爬行者对玩家造成伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    creeper-itemdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 不知道什么玩意啊哈哈哈 ???</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    creeper-blockdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 爬行者炸毁方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ender-crystal-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 末影水晶破坏方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enderdragon-blockdamage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 末影龙破坏方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enderman-pickup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 末影人拾取方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    villager-death</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 村民被杀死</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    bed-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 床爆炸(应该是吧)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    respawn-anchor-explosion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 若改为true，怪物将不会跟随玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 具有权限&quot;essentials.protect.entitytarget.bypass&quot;的玩家将无视该项.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    entitytarget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止 僵尸破门</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    zombie-door-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 防止掠夺者窃取方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ravager-thief</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 防止羊吃掉草</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    sheep-eat-grass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 防止某些转换。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    transformation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 阻止苦力怕变闪电苦力怕</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      charged-creeper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 阻止村民成为僵尸村民。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      zombie-villager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 阻止僵尸村民被治愈。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      villager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 防止村民被闪电击中时变成女巫。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      witch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 防止猪被闪电击中时变成僵尸猪人。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      zombie-pigman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 防止僵尸变成淹死成溺尸。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      drowned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 防止哞菇被闪电击中时变色。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      mooshroom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 防止生成生物。 如果缺少一个生物，你可以按照以下格式添加它。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      creeper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 爬行者     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      skeleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 骷髅       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      spider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 蜘蛛       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      giant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 巨型僵尸   的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      zombie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 僵尸       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      slime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 史莱姆     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      ghast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 恶魂       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      pig_zombie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 僵尸猪人   的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      enderman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 末影人     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      cave_spider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 洞穴蜘蛛   的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      silverfish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 蠹虫       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      blaze</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 烈焰人     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      magma_cube</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 岩浆史莱姆 的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      ender_dragon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 末影龙     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      pig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 猪         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      sheep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 羊         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      cow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 牛         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      chicken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 鸡         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      squid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 乌贼       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      wolf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 狼         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      mushroom_cow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 哞菇       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      snowman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 雪人       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      ocelot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 豹猫       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      iron_golem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 铁傀儡     的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      villager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 村民       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      wither</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 凋零       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      bat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 蝙蝠       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      witch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 女巫       的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      horse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 马         的生成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      phantom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #阻止 幻翼         的生成</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 爬行者可以爆炸的最大高度，-1将允许它在任何位置爆炸.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 如果你想要彻底阻止它的爆炸的话，设置上面的prevent一栏中的creeper-explosion为true.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  creeper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    max-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 取消几种默认的物理现象或行为(译注:伤害大多数对玩家而言，对怪物仍有效)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  disable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消掉落伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    fall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 拥有&quot;essentials.protect.pvp&quot;权限的玩家将仍可以攻击其他玩家</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 若设置为true，没有上述权限的玩家将无法攻击其他玩家</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    pvp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消溺水和窒息的伤害</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # (分为两项，通常，你会想要设置两项为同样设置)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    drown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    suffocate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消岩浆伤害，但掉落岩浆中的物品将仍被烧成灰烬</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lavadmg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消弓箭伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    projectiles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消仙人掌伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    contactdmg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消火焰伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    firedmg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消被雷劈的伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    lightning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 取消&quot;凋零&quot;效果伤害</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    wither</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 禁用某些天气</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    weather</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      storm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      thunder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      lightning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |                EssentialsX AntiBuild                 | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你需要安装 EssentialsX AntiBuild 才能使用此部分。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 和 http://wiki.ess3.net/wiki/AntiBuild 了解更多信息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 玩家是否可以建造:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 设置为 true 可以禁用那些没有权限玩家的建造</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家建造</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 玩家是否可以使用物品(当玩家没有build权限的时候):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 设置为 true 可以禁用那些没有权限玩家的使用物品</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家使用物品</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 玩家无法建造时是否提示玩家</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    warn-on-build-disallow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 当以下方块被放置或破坏，或物品被使用时会出现警告</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 你加载了一次Essentials后，就可以在plugins/Essentials/items.csv中找到物品ID列表.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    on-placement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LAVA，TNT，LAVA_BUCKET</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    on-use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LAVA_BUCKET</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    on-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  blacklist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止玩家放置以下方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    placement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LAVA，TNT，LAVA_BUCKET</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止玩家使用以下物品</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LAVA_BUCKET</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止玩家破坏以下方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止活塞推动以下方块</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    piston</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 阻止发射器发射以下物品</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    dispenser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># |            EssentialsX Spawn + New Players           | #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># +------------------------------------------------------+ #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">############################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你需要安装 EssentialsX Spawn 才能使此部分正常工作。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请参阅 https://essentialsx.net/wiki/Module-Breakdown.html 了解更多信息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">newbies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否显示某玩家第一次进服时的欢迎信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 若开启，编辑内容，{DISPLAYNAME}将自动转换为玩家名字.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 若取消，改为&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #announce-format: &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  announce-format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;7[&amp;b驿站&amp;7]&amp;a欢迎大傻蛋来服务器！&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 当我们第一次出生时，出现在哪个出生点？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 如果你想要使用世界自带的出生点，则设置为&quot;none&quot;.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  spawnpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">newbies</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 是否想要玩家第一次进入服务器时赠送新手礼物? 设置为 &#39;&#39;禁用此功能.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 这个赠送不会花费金钱，也可以给予权限.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #kit: &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  kit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tools</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们应该使用什么优先级来处理重生？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将此设置为 none，如果你想要原版的重生。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 lowest， 如果你想使用 Multiverse 处理重生.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 high， 如果你想使用 EssentialsSpawn插件 处理重生.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置为 highest， 如果你想强制使用 EssentialsSpawn插件 处理重生.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：只有在服务器重新启动后，更改才会生效。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">respawn-listener-priority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">high</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 我们应该使用什么优先级来处理加入服务器时的生成？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请参阅 respawn-listener-priority 以获取可能的值。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：更改此设置可能会影响或破坏 spawn-on-join 功能。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：只有在服务器重新启动后，更改才会生效。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spawn-join-listener-priority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">high</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当用户死亡时，他们应该在他们的第一个家或床上重生，而不是重生点？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">respawn-at-home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当用户死亡时，他们应该在他们的床上重生而不是重生点吗？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># respawn-at-home(上图)的值必须为true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">respawn-at-home-bed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当用户死亡时，Essentials Spawn 是否应该尊重用户的重生锚点？</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">respawn-at-anchor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将所有加入的玩家传送到出生点</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spawn-on-join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># \`guests\` 的以下值表明组 \`guests\` 中的所有玩家在加入时都将被传送到出生点。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#spawn-on-join: 客人</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下面的列表值表明，组 \`guests\` 和 \`admin\` 中的所有玩家在加入时都将被传送到出生点。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#spawn-on-join:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- guests</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#- admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文件结尾 &lt;-- 到此， 你已经完成了ESS的设置.</span></span></code></pre></div>`,1)]))}const y=i(p,[["render",h]]);export{g as __pageData,y as default};
