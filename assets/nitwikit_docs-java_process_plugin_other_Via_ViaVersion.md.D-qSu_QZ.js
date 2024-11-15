import{_ as a,c as r,a5 as o,o as t}from"./chunks/framework.Dzz2jpra.js";const p=JSON.parse('{"title":"ViaVersion","description":"","frontmatter":{"title":"ViaVersion","sidebar_position":2},"headers":[],"relativePath":"nitwikit/docs-java/process/plugin/other/Via/ViaVersion.md","filePath":"nitwikit/docs-java/process/plugin/other/Via/ViaVersion.md","lastUpdated":1730974396000}'),i={name:"nitwikit/docs-java/process/plugin/other/Via/ViaVersion.md"};function l(n,e,s,h,c,u){return t(),r("div",null,e[0]||(e[0]=[o('<h1 id="viaversion" tabindex="-1">ViaVersion <a class="header-anchor" href="#viaversion" aria-label="Permalink to &quot;ViaVersion&quot;">​</a></h1><p>ViaVersion 是Via三件套的核心，提供了向上兼容，如果你想要向下兼容，可以再安装 ViaBackwards 和 ViaRewind</p><ul><li><strong>向上兼容：</strong> 支持新版本客户端进服</li><li><strong>向下兼容：</strong> 支持旧版本客户端进服</li></ul><p><a href="https://ci.viaversion.com/job/ViaVersion/" target="_blank" rel="noreferrer">下载地址</a></p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><p>方块材质纹理看起来不对时尝试将配置文件 <code>serverside-blockconnections</code> 改为<code>true</code>。</p><p>新版本的物品特性无法在旧版本游戏内使用是因为 ViaVersion 致力于兼容性而不是添加新的特性。</p><p>玩家被踢出时提示 <code>sending too many packets</code> 请修改配置文件 <code>max-pps</code>(推荐修改为原来的两倍以防恶意攻击)</p><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><h3 id="hologram-patch-默认值-false-布尔值" tabindex="-1">hologram-patch - 默认值：false (布尔值) <a class="header-anchor" href="#hologram-patch-默认值-false-布尔值" aria-label="Permalink to &quot;hologram-patch - 默认值：false (布尔值)&quot;">​</a></h3><p>在 1.9 和 1.11 中，修改了全息影像的某些高度值。如果你在服务器上手动使用盔甲支架，这可能与你无关，但如果你使用全息显示器等插件，则你的盔甲支架可能看起来高于 1.9+，但也可能低于 1.11+。要解决此问题，你可以启用此选项。</p><h3 id="hologram-e-默认值-0-96-整数" tabindex="-1">Hologram-E - 默认值：-0.96(整数) <a class="header-anchor" href="#hologram-e-默认值-0-96-整数" aria-label="Permalink to &quot;Hologram-E - 默认值：-0.96(整数)&quot;">​</a></h3><p>当上述情况成立时，全息影像应向 1.9 及以上客户端偏移多少。我们的实验表明，-0.96 效果最好。对于 1.11，这是相反的。</p><h3 id="piston-animation-patch-默认值-false-布尔值" tabindex="-1">piston-animation-patch - 默认值：false(布尔值) <a class="header-anchor" href="#piston-animation-patch-默认值-false-布尔值" aria-label="Permalink to &quot;piston-animation-patch - 默认值：false(布尔值)&quot;">​</a></h3><p>我们应该禁用 1.11/1.11.1 客户端的活塞动画吗？在某些情况下，当发射大量活塞时，它会使它们崩溃。</p><h3 id="chat-nbt-fix-默认值-true-布尔值" tabindex="-1">chat-nbt-fix - 默认值：true(布尔值) <a class="header-anchor" href="#chat-nbt-fix-默认值-true-布尔值" aria-label="Permalink to &quot;chat-nbt-fix - 默认值：true(布尔值)&quot;">​</a></h3><p>在 1.12 及更高版本中，聊天中显示的 nbt 数据在删除索引数组的标签后略有格式更改，此选项将剥离该数据。</p><h3 id="quick-move-action-fix-默认值-false-布尔值" tabindex="-1">quick-move-action-fix - 默认值：false(布尔值) <a class="header-anchor" href="#quick-move-action-fix-默认值-false-布尔值" aria-label="Permalink to &quot;quick-move-action-fix - 默认值：false(布尔值)&quot;">​</a></h3><p>由于 Minecraft 在 1.12 shift 双击中的某些项目无法正常工作，此补丁允许发送额外信息来修复此问题(仅适用于基于 1.8-1.11.2 bukkit 的服务器)。</p><h3 id="team-colour-fix-默认值-true-布尔值" tabindex="-1">team-colour-fix - 默认值：true(布尔值) <a class="header-anchor" href="#team-colour-fix-默认值-true-布尔值" aria-label="Permalink to &quot;team-colour-fix - 默认值：true(布尔值)&quot;">​</a></h3><p>由于 Minecraft 1.13 中名牌颜色的更改是基于团队颜色而不是前缀，因此此修复会更改它，使其成为前缀中的最后一种颜色。</p><h3 id="disable-1-13-auto-complete-默认值-false-布尔值" tabindex="-1">disable-1_13-auto-complete - 默认值：false(布尔值) <a class="header-anchor" href="#disable-1-13-auto-complete-默认值-false-布尔值" aria-label="Permalink to &quot;disable-1_13-auto-complete - 默认值：false(布尔值)&quot;">​</a></h3><p>1.13 有完整的TAB补全，可能会触发在 Spigot 上的刷屏，你可以使用此选项完全禁用它。</p><h3 id="_1-13-tab-complete-delay-默认值-0-整数" tabindex="-1">1_13-tab-complete-delay - 默认值：0(整数) <a class="header-anchor" href="#_1-13-tab-complete-delay-默认值-0-整数" aria-label="Permalink to &quot;1_13-tab-complete-delay - 默认值：0(整数)&quot;">​</a></h3><p>引入 Tab 符完成延迟(每秒 20 次刻度)，如果在刻度内发生另一个请求，则该请求将被取消。这可用于允许选项卡完成，但不经常，例如。100 个刻度表示每 5 秒完成一次。</p><h3 id="serverside-blockconnections-默认值-false-布尔值" tabindex="-1">serverside-blockconnections - 默认值：false(布尔值) <a class="header-anchor" href="#serverside-blockconnections-默认值-false-布尔值" aria-label="Permalink to &quot;serverside-blockconnections - 默认值：false(布尔值)&quot;">​</a></h3><p>在 1.13 中，Mojang 更改了由服务器处理的块连接，因此我们需要计算块所需的连接(这包括跨块)，此功能将对性能产生影响，因为在处理围栏、窗格、门等时可能需要额外的计算。</p><h3 id="reduce-blockstorage-memory-默认值-false-布尔值" tabindex="-1">reduce-blockstorage-memory - 默认值：false(布尔值) <a class="header-anchor" href="#reduce-blockstorage-memory-默认值-false-布尔值" aria-label="Permalink to &quot;reduce-blockstorage-memory - 默认值：false(布尔值)&quot;">​</a></h3><p>由于存储块的开销，我们提供了通过不存储非重要块来减少开销的选项。启用此选项后，围栏、玻璃板等将无法连接到实心方块。</p><h3 id="flowerstem-when-block-above-默认值-false-布尔值" tabindex="-1">flowerstem-when-block-above - 默认值：false(布尔值) <a class="header-anchor" href="#flowerstem-when-block-above-默认值-false-布尔值" aria-label="Permalink to &quot;flowerstem-when-block-above - 默认值：false(布尔值)&quot;">​</a></h3><p>这是一个块连接选项，其中花茎用于装饰目的，启用它们将阻止我们连接它们。</p><h3 id="vine-climb-fix-默认值-false-布尔值" tabindex="-1">vine-climb-fix - 默认值：false(布尔值) <a class="header-anchor" href="#vine-climb-fix-默认值-false-布尔值" aria-label="Permalink to &quot;vine-climb-fix - 默认值：false(布尔值)&quot;">​</a></h3><p>未连接到方块的藤蔓将被映射到空中，否则 1.13+ 可以爬上它们。</p><h3 id="change-1-9-hitbox-默认值-false-布尔值" tabindex="-1">change-1_9-hitbox - 默认值：false(布尔值) <a class="header-anchor" href="#change-1-9-hitbox-默认值-false-布尔值" aria-label="Permalink to &quot;change-1_9-hitbox - 默认值：false(布尔值)&quot;">​</a></h3><p>这改变了 1.9+ 玩家的命中框，因此在玩家潜行时不会发生击退错误。</p><h3 id="change-1-14-hitbox-默认值-false-布尔值" tabindex="-1">change-1_14-hitbox - 默认值：false(布尔值) <a class="header-anchor" href="#change-1-14-hitbox-默认值-false-布尔值" aria-label="Permalink to &quot;change-1_14-hitbox - 默认值：false(布尔值)&quot;">​</a></h3><p>这改变了命中框，以便 1.14+ 玩家可以潜入方块下，这可能会让玩家被射弹错过。</p><h3 id="truncate-1-14-books-默认值-false-布尔值" tabindex="-1">truncate-1_14-books - 默认值：false(布尔值) <a class="header-anchor" href="#truncate-1-14-books-默认值-false-布尔值" aria-label="Permalink to &quot;truncate-1_14-books - 默认值：false(布尔值)&quot;">​</a></h3><p>现在在 1.14 中，页面限制更大，因此这将限制页面数为 50 而不是 100(因为某些反漏洞利用软件可能会踢玩家)。</p><h3 id="fix-infested-block-breaking-默认值-true-布尔值" tabindex="-1">fix-infested-block-breaking - 默认值：true(布尔值) <a class="header-anchor" href="#fix-infested-block-breaking-默认值-true-布尔值" aria-label="Permalink to &quot;fix-infested-block-breaking - 默认值：true(布尔值)&quot;">​</a></h3><p>被感染的块在未来的客户端中可以立即被破坏，使它们无法在旧服务器上被破坏，这会将它们变回石头。</p><h3 id="fix-low-snow-collision-默认值-false-布尔值" tabindex="-1">fix-low-snow-collision - 默认值：false(布尔值) <a class="header-anchor" href="#fix-low-snow-collision-默认值-false-布尔值" aria-label="Permalink to &quot;fix-low-snow-collision - 默认值：false(布尔值)&quot;">​</a></h3><p>1.13 对 1 层雪没有碰撞，这会发送 2 层雪来产生类似的效果。</p><h3 id="fix-non-full-blocklight-默认值-true-布尔值" tabindex="-1">fix-non-full-blocklight - 默认值：true(布尔值) <a class="header-anchor" href="#fix-non-full-blocklight-默认值-true-布尔值" aria-label="Permalink to &quot;fix-non-full-blocklight - 默认值：true(布尔值)&quot;">​</a></h3><p>修复了 1.14 客户端对非完整块的轻量级值为 0 的问题</p><h3 id="fix-1-14-health-nan-默认值-true-布尔值" tabindex="-1">fix-1_14-health-nan - 默认值：true (布尔值) <a class="header-anchor" href="#fix-1-14-health-nan-默认值-true-布尔值" aria-label="Permalink to &quot;fix-1_14-health-nan - 默认值：true (布尔值)&quot;">​</a></h3><p>修复了当运行状况设置为 Float.NaN 时不显示漫游动画的问题</p><h3 id="use-1-15-instant-respawn-默认值-false-布尔值" tabindex="-1">use-1_15-instant-respawn - 默认值：false(布尔值) <a class="header-anchor" href="#use-1-15-instant-respawn-默认值-false-布尔值" aria-label="Permalink to &quot;use-1_15-instant-respawn - 默认值：false(布尔值)&quot;">​</a></h3><p>是否应该在 1.15+ 客户端上立即重生而不显示死亡屏幕。</p><h3 id="ignore-long-1-16-channel-names-默认值-true-布尔值" tabindex="-1">ignore-long-1_16-channel-names - 默认值：true(布尔值) <a class="header-anchor" href="#ignore-long-1-16-channel-names-默认值-true-布尔值" aria-label="Permalink to &quot;ignore-long-1_16-channel-names - 默认值：true(布尔值)&quot;">​</a></h3><p>如果忽略超过 32 个字符的插件通道名称，CraftBukkit 在 1.16 之前将此限制硬编码，因此假设任何运行 ViaVersion 的软件都有它。</p><h3 id="forced-use-1-17-resource-pack-默认值-false-布尔值" tabindex="-1">forced-use-1_17-resource-pack - 默认值：false(布尔值) <a class="header-anchor" href="#forced-use-1-17-resource-pack-默认值-false-布尔值" aria-label="Permalink to &quot;forced-use-1_17-resource-pack - 默认值：false(布尔值)&quot;">​</a></h3><p>1.17 客户端将被迫接受连接时的资源包，如果拒绝，则断开连接。</p><h3 id="resource-pack-1-17-prompt-默认值-字符串" tabindex="-1">resource-pack-1_17-prompt - 默认值：&#39;&#39;(字符串) <a class="header-anchor" href="#resource-pack-1-17-prompt-默认值-字符串" aria-label="Permalink to &quot;resource-pack-1_17-prompt - 默认值：&#39;&#39;(字符串)&quot;">​</a></h3><p>1.17 客户端在加入时将显示此消息。</p><h3 id="cache-1-17-light-默认值-true-布尔值" tabindex="-1">cache-1_17-light - 默认值：true(布尔值) <a class="header-anchor" href="#cache-1-17-light-默认值-true-布尔值" aria-label="Permalink to &quot;cache-1_17-light - 默认值：true(布尔值)&quot;">​</a></h3><p>缓存在卸载块之前会变亮，以允许后续块更新数据包，而不是在发送第一个块数据时立即取消缓存。</p><p>仅在你知道自己在做什么时才禁用此功能。</p><h3 id="armor-toggle-fix-默认值-true-布尔值" tabindex="-1">armor-toggle-fix- 默认值：true(布尔值) <a class="header-anchor" href="#armor-toggle-fix-默认值-true-布尔值" aria-label="Permalink to &quot;armor-toggle-fix- 默认值：true(布尔值)&quot;">​</a></h3><p>强制更新 1.19.4+ 玩家的库存，当他们试图在预先占用的插槽中交换盔甲时。</p><h2 id="_1-8-服务器上的高版本客户端选项" tabindex="-1">1.8 服务器上的高版本客户端选项 <a class="header-anchor" href="#_1-8-服务器上的高版本客户端选项" aria-label="Permalink to &quot;1.8 服务器上的高版本客户端选项&quot;">​</a></h2><p>此选项仅适用于你使用 1.8 服务器时，这些选项可以在功能已更改的未来版本中实现一致的视觉效果/游戏玩法。</p><h3 id="prevent-collision-默认值-true-布尔值" tabindex="-1">prevent-collision - 默认值：true(布尔值) <a class="header-anchor" href="#prevent-collision-默认值-true-布尔值" aria-label="Permalink to &quot;prevent-collision - 默认值：true(布尔值)&quot;">​</a></h3><p>在 1.9 中，玩家现在可以互相推搡。为了防止在发送记分牌团队时出现这种情况，ViaVersion 可以将冲突设置为不发生，以便游戏玩法保持平衡。(像 ColoredTags 这样的插件使用团队)</p><h3 id="auto-team-默认值-true-布尔值" tabindex="-1">auto-team - 默认值：true(布尔值) <a class="header-anchor" href="#auto-team-默认值-true-布尔值" aria-label="Permalink to &quot;auto-team - 默认值：true(布尔值)&quot;">​</a></h3><p>大多数服务器不使用记分牌插件，在这种情况下，我们会将自己的团队发送给玩家，以防止他们与其他玩家发生冲突。</p><p>如果你使用像 ColoredTags 这样的插件，你应该将其关闭。此外，如果你在使用 Bungee 和团队时遇到问题，请考虑将其关闭。</p><h3 id="suppress-metadata-errors-默认值-false-布尔值" tabindex="-1">suppress-metadata-errors - 默认值：false(布尔值) <a class="header-anchor" href="#suppress-metadata-errors-默认值-false-布尔值" aria-label="Permalink to &quot;suppress-metadata-errors - 默认值：false(布尔值)&quot;">​</a></h3><p>由于 1.9 及更高版本对实体数据发送方式的更改，一些插件发送的数据我们找不到 1.9 的等效数据</p><p>(通常意味着他们做错了什么！发生这种情况时，我们会告诉你配置中的所有信息，</p><p>你需要调试并找出导致这种情况的插件并联系作者(这些与称为 Datawatcher 的 NMS 类有关)。</p><p>或者，你可以抑制元数据错误，但这意味着生物在 1.9 到 1.8 上可能看起来不同，但大多数时候这很好。</p><h3 id="shield-blocking-default-true-布尔值-注意-在-bungeecord-上-客户端将无法看到它们盾牌阻挡" tabindex="-1">shield-blocking - default： true (布尔值) - 注意：在 BungeeCord 上，客户端将无法看到它们盾牌阻挡 <a class="header-anchor" href="#shield-blocking-default-true-布尔值-注意-在-bungeecord-上-客户端将无法看到它们盾牌阻挡" aria-label="Permalink to &quot;shield-blocking - default： true (布尔值) - 注意：在 BungeeCord 上，客户端将无法看到它们盾牌阻挡&quot;">​</a></h3><p>在 1.9 中，删除了右键单击剑时的阻挡动画。无法模拟 1.9 无法看到 1.8 的阻挡，作为替代方案，你可以直观地将这些视为盾牌。</p><p>这些不会改变任何游戏玩法，只允许 1.9 看到客户端阻止并用剑自己执行阻止操作。禁用此功能将意味着 1.9 客户端将无法看到也无法正确阻挡。</p><h3 id="simulate-pt-默认值-true-布尔值" tabindex="-1">simulate-pt - 默认值：true(布尔值) <a class="header-anchor" href="#simulate-pt-默认值-true-布尔值" aria-label="Permalink to &quot;simulate-pt - 默认值：true(布尔值)&quot;">​</a></h3><p>在 1.9 中，玩家滴答不再由客户端发送数据包触发。因此，如果我们不模拟向他们发送包裹，他们将无法进食、正确使用弓箭、喝药水。如果你有一个非常简单的服务器，你可以禁用它，但建议你不要这样做。</p><h3 id="nms-player-ticking-默认值-true-布尔值-此功能仅在-spigot-sponge-上可用。-在-bungeecord-上-它将使用数据包滴答声" tabindex="-1">nms-player-ticking - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它将使用数据包滴答声) <a class="header-anchor" href="#nms-player-ticking-默认值-true-布尔值-此功能仅在-spigot-sponge-上可用。-在-bungeecord-上-它将使用数据包滴答声" aria-label="Permalink to &quot;nms-player-ticking - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它将使用数据包滴答声)&quot;">​</a></h3><p>为了模拟玩家滴答声，我们使用 NMS 作为发送数据包的替代方案，因为发送数据包可能会导致反作弊问题。</p><p>如果你在使用 ViaVersion 时遇到 TPS 问题，建议你尝试将其设置为 false，因为它可能会减少对 TPS 的影响。</p><p>(尽管它仍然会在那里，只是没有标记为 ViaVersion，因为它是内部服务器滴答作响)</p><h3 id="bossbar-patch-默认值-true-布尔值" tabindex="-1">bossbar-patch - 默认值：true(布尔值) <a class="header-anchor" href="#bossbar-patch-默认值-true-布尔值" aria-label="Permalink to &quot;bossbar-patch - 默认值：true(布尔值)&quot;">​</a></h3><p>在 1.9 中，bossbar 的处理方式不同，通过数据包发送，而不是使用生物。</p><p>我们是否应该自动发送正确的数据包以使 bossbar 正常工作？如果你遇到出现太多bossbar的问题，你可以禁用此功能。</p><h3 id="bossbar-anti-flicker-默认值-false-布尔值" tabindex="-1">bossbar-anti-flicker - 默认值：false(布尔值) <a class="header-anchor" href="#bossbar-anti-flicker-默认值-false-布尔值" aria-label="Permalink to &quot;bossbar-anti-flicker - 默认值：false(布尔值)&quot;">​</a></h3><p>由于 bossbar 的变化，一些插件会不断更新 boss 栏上的生命值，这可能会导致闪烁，启用此选项将修复生命值。</p><p>但是，这将防止运行状况下降，除非你遇到闪烁问题，否则不建议这样做。</p><h3 id="use-new-effect-indicator-默认值-true-布尔值" tabindex="-1">use-new-effect-indicator - 默认值：true(布尔值) <a class="header-anchor" href="#use-new-effect-indicator-默认值-true-布尔值" aria-label="Permalink to &quot;use-new-effect-indicator - 默认值：true(布尔值)&quot;">​</a></h3><p>在 1.9 中，在屏幕左上角引入了一个新的效果指示器。启用此选项将允许玩家在左上角看到他们的有效药水效果，</p><p>这对 1.9+ 玩家来说可能是一个优势，如果你发现这种情况，你可能希望禁用。</p><h3 id="use-new-deathmessages-默认值-false-布尔值" tabindex="-1">use-new-deathmessages - 默认值：false(布尔值) <a class="header-anchor" href="#use-new-deathmessages-默认值-false-布尔值" aria-label="Permalink to &quot;use-new-deathmessages - 默认值：false(布尔值)&quot;">​</a></h3><p>在 1.9 中，死亡信息被添加到重生屏幕中。启用此选项将允许死亡的玩家在重生屏幕上看到他们的死亡信息。</p><h3 id="item-cache-默认值-true-布尔值-此功能仅在-spigot-sponge-上可用。-在-bungeecord-上-它仍然可以工作-但效率较低-导致服务器发送-1-个额外的数据包" tabindex="-1">item-cache - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它仍然可以工作，但效率较低，导致服务器发送 1 个额外的数据包) <a class="header-anchor" href="#item-cache-默认值-true-布尔值-此功能仅在-spigot-sponge-上可用。-在-bungeecord-上-它仍然可以工作-但效率较低-导致服务器发送-1-个额外的数据包" aria-label="Permalink to &quot;item-cache - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它仍然可以工作，但效率较低，导致服务器发送 1 个额外的数据包)&quot;">​</a></h3><p>在 1.9 中，对项目使用方式的数据包更改意味着它们不会发送到服务器。物品缓存允许 ViaVersion 保存玩家持有的物品，</p><p>这允许一种有效的方式告诉服务器玩家正在使用哪些物品已被移除。</p><p>不建议禁用此功能，因为替代方法是在数据包到达时查找项目，这可能会导致延迟并可能导致服务器崩溃。</p><h3 id="replace-pistons-默认值-false-布尔值" tabindex="-1">replace-pistons- 默认值：false(布尔值) <a class="header-anchor" href="#replace-pistons-默认值-false-布尔值" aria-label="Permalink to &quot;replace-pistons- 默认值：false(布尔值)&quot;">​</a></h3><p>此选项也会影响 1.9/1.9.1 服务器。 在 1.10.1 中，Mojang 引入了一种确保特殊区块发送数据的方法。这也引入了一个崩溃问题，这意味着当发送块 36(扩展活塞特殊块)时，它会使客户端崩溃。 作为故障保护，你可以启用此选项，我们将发送下面指定的替换 ID。(此问题仅在你使用36号方块时才会影响你)</p><h3 id="replacement-piston-id-默认值-0-整数" tabindex="-1">replacement-piston-id - 默认值：0(整数) <a class="header-anchor" href="#replacement-piston-id-默认值-0-整数" aria-label="Permalink to &quot;replacement-piston-id - 默认值：0(整数)&quot;">​</a></h3><p>启用上一个选项时，应该发送哪个块 ID，默认情况下它是 air 0，因为36号方块与 air 非常相似。</p><h3 id="force-json-transform-默认值-false-布尔值" tabindex="-1">force-json-transform - 默认值：false(布尔值) <a class="header-anchor" href="#force-json-transform-默认值-false-布尔值" aria-label="Permalink to &quot;force-json-transform - 默认值：false(布尔值)&quot;">​</a></h3><p>当发送 JSON 时出现问题时，我们是否应该强制发送它而不是抛出错误？这可能会导致在极少数情况下发送不正确的 JSON，禁用它将显示负责的错误。</p><h3 id="minimize-cooldown-默认值-true-布尔值" tabindex="-1">minimize-cooldown - 默认值：true (布尔值) <a class="header-anchor" href="#minimize-cooldown-默认值-true-布尔值" aria-label="Permalink to &quot;minimize-cooldown - 默认值：true (布尔值)&quot;">​</a></h3><p>尝试减少 1.8 版本中物品命中时的视觉冷却时间。</p><h3 id="left-handed-handling-默认值-true-布尔值" tabindex="-1">left-handed-handling - 默认值：true(布尔值) <a class="header-anchor" href="#left-handed-handling-默认值-true-布尔值" aria-label="Permalink to &quot;left-handed-handling - 默认值：true(布尔值)&quot;">​</a></h3><p>这样，左手就可以在较新的客户端的 1.8 服务器上使用。</p>',106)]))}const f=a(i,[["render",l]]);export{p as __pageData,f as default};
