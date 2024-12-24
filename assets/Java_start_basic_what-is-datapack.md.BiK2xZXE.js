import{_ as i,c as a,a5 as n,o as l}from"./chunks/framework.O9ad3XaM.js";const g=JSON.parse('{"title":"什么是数据包？","description":"","frontmatter":{"title":"什么是数据包？","sidebar_position":6},"headers":[],"relativePath":"Java/start/basic/what-is-datapack.md","filePath":"nitwikit/docs-java/start/basic/what-is-datapack.md","lastUpdated":1730974396000}'),p={name:"Java/start/basic/what-is-datapack.md"};function h(t,s,k,e,E,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="什么是数据包" tabindex="-1">什么是数据包？ <a class="header-anchor" href="#什么是数据包" aria-label="Permalink to &quot;什么是数据包？&quot;">​</a></h1><p>数据包是从Minecraft逻辑结构层面修改我的世界，他可以添加或覆盖游戏中几乎一切的元素。一定程度下可以代替Mod，但它并不会改变原版的内容。</p><p>其功能可用于覆盖或添加新的函数、进度、战利品表、物品修饰器、配方、结构、标签、维度、世界生成等</p><h1 id="数据包的存放位置" tabindex="-1">数据包的存放位置 <a class="header-anchor" href="#数据包的存放位置" aria-label="Permalink to &quot;数据包的存放位置&quot;">​</a></h1><p>数据包是存放于我的世界存档目录下 <code>world/datapacks</code> 它既可以是文件夹亦可以是压缩包。当你加入时数据包将为该世界启用。</p><h1 id="数据包注意事项" tabindex="-1">数据包注意事项 <a class="header-anchor" href="#数据包注意事项" aria-label="Permalink to &quot;数据包注意事项&quot;">​</a></h1><p>数据包是存在加载顺序的，在数据包各个功能同一个分类下不同的加载顺序会导致不同的结果也就是不同的覆盖产生。</p><p>这个顺序存储在 <code>world/level.dat</code> 。您可以通过单人创建存档时调整数据包的位置决定数据包的加载顺序</p><p>您可以通过 <code>/datapack</code> 查看已经加载或未加载的数据包</p><h1 id="相关资源下载" tabindex="-1">相关资源下载 <a class="header-anchor" href="#相关资源下载" aria-label="Permalink to &quot;相关资源下载&quot;">​</a></h1><p><strong>常见数据包的下载</strong>：</p><table tabindex="0"><thead><tr><th>名称</th><th>介绍</th></tr></thead><tbody><tr><td><a href="https://www.planetminecraft.com/data-packs/" target="_blank" rel="noreferrer">PlanetMinecraft</a></td><td>比较老牌的我的世界资源网站了，东西比较全</td></tr><tr><td><a href="https://modrinth.com/datapacks" target="_blank" rel="noreferrer">Modrinth</a></td><td>新兴的我的世界资源平台，东西比较全</td></tr><tr><td><a href="https://www.9minecraft.net/category/minecraft-data-packs/" target="_blank" rel="noreferrer">9Minecraft</a></td><td>比较老牌的我的世界资源网站了，界面不太符合中国习惯，不太推荐</td></tr></tbody></table><p><strong>数据包工具及扩展资源</strong>：</p><table tabindex="0"><thead><tr><th>名称</th><th>介绍</th></tr></thead><tbody><tr><td><a href="https://misode.github.io/upgrader/" target="_blank" rel="noreferrer">Datapack Upgrader</a></td><td>自动升级数据包版本，未测试</td></tr><tr><td><a href="https://map.jacobsjo.eu/" target="_blank" rel="noreferrer">Datapack Map</a></td><td>查看世界生成数据包对应种子的地图</td></tr><tr><td><a href="https://misode.github.io/" target="_blank" rel="noreferrer">Datapack Maker</a></td><td>数据包生成器，适用于大部分环境</td></tr><tr><td><a href="https://vanillatweaks.net/picker/datapacks/" target="_blank" rel="noreferrer">vanilla tweaks</a></td><td>常用数据包的结合体，可以集成下载</td></tr><tr><td><a href="https://mcreator.net/about" target="_blank" rel="noreferrer">MCCreator</a></td><td>生成/制作初级数据包的不二之选，推荐</td></tr></tbody></table><h1 id="数据包结构" tabindex="-1">数据包结构 <a class="header-anchor" href="#数据包结构" aria-label="Permalink to &quot;数据包结构&quot;">​</a></h1><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">数据包名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─pack.mcmeta</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 用于识别数据包及存储数据包信息。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─pack.png</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 数据包的图片(可选)。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─advancements</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定进度名.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─display</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 进度的显示信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  ├─title</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 进度标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  ├─description</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 进度描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  ├─icon</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 进度图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─criteria</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 进度达成条件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  └─特定条件名.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     ├─trigger</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 触发条件类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     └─conditions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 具体的条件参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─loot_tables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定物品或实体的战利品表.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─pools</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 战利品池列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  └─特定战利品池.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     ├─rolls</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 战利品生成次数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     ├─entries</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 战利品条目</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │  └─特定条目.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 条目类型，如 item、loot_table 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │     ├─name</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 物品或战利品表名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │     └─functions</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 可选的函数列表，用于修改战利品</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │        └─特定函数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │           ├─function</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 函数类型，如 set_nbt、enchant_with_levels 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     │           └─arguments</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 函数参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─recipes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定合成配方.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成配方类型，如 crafting_shaped、crafting_shapeless 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─group</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成组名(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─ingredients</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成所需的材料列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  └─特定材料.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     ├─item</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 物品名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     └─count</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 物品数量(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─result</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        ├─item</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成后的物品名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        └─count</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 合成后的物品数量(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─tags</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─blocks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定方块标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 方块名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─fluids</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定流体标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 流体名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─items</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定物品标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 物品名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─entity_types</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定实体类型标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 实体类型名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─functions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定函数标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 函数名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─predicates</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定谓词标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 谓词名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─damage_types</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定伤害类型标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 伤害类型名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─enchantments</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定附魔标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 附魔名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─game_events</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定游戏事件标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 游戏事件名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─其他可能的标签类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─特定标签.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        ├─replace</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否替换已有标签(可选)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        └─values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 对应名称列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─functions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定函数文件.mcfunction</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─各种命令语句</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 可以是游戏中的各种命令，用于实现特定的逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─predicates</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定谓词.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─condition</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 谓词条件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  ├─特定条件类型.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  │  └─参数</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据条件类型而定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─result</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 谓词结果，通常是布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─dimension_types</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─特定维度类型.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     ├─effects</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 维度效果列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │  └─特定效果.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     ├─特定效果类型</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如 fog_color、ambient_light 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     │     └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据效果类型而定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 维度类型参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │           ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │           └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─worldgen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─biome</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定生物群系.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─features</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 生物群系特征列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │  └─特定特征.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     ├─特定特征类型</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如 lake、flower 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     └─参数</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据特征类型而定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─properties</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 生物群系属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │  └─特定属性.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 属性名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 属性值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─configured_carver</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定雕刻器.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 雕刻器类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─biomes</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 适用的生物群系列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 雕刻器参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │        └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─configured_feature</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定配置特征.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 特征类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─placement</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 放置规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │  └─特定放置规则.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     ├─规则类型</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如 height_range、on_ground 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     └─参数</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据规则类型而定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 特征参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │        └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─configured_structure_feature</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定配置结构特征.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 结构特征类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─placement</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 放置规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │  └─特定放置规则.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     ├─规则类型</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如 surface_rule、biome_filter 等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     └─参数</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 根据规则类型而定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     └─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 结构特征参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │        └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │           └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─noise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │  └─特定噪声设置.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─noise_type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 噪声类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     ├─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 噪声参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │  └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  │     │     └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─processor_list</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │     └─特定处理器列表.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        ├─processors</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 处理器列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │  └─特定处理器.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │     ├─type</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 处理器类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │     └─parameters</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 处理器参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │        └─特定参数.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │           ├─名称</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │        │           └─值</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 参数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─其他可能的子文件夹，具体取决于数据包的功能需求。</span></span></code></pre></div><h1 id="数据包的编写" tabindex="-1">数据包的编写 <a class="header-anchor" href="#数据包的编写" aria-label="Permalink to &quot;数据包的编写&quot;">​</a></h1><p>太多了，详情请参阅 <a href="https://minecraft.fandom.com/wiki/Data_pack" target="_blank" rel="noreferrer">Minecraft Wiki</a></p>`,18)]))}const c=i(p,[["render",h]]);export{g as __pageData,c as default};
