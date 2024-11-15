import{_ as e,c as t,a5 as l,o as i}from"./chunks/framework.Dzz2jpra.js";const m=JSON.parse('{"title":"白名单制度","description":"","frontmatter":{"title":"白名单制度","slug":"/Sundry/Advance/management/player-management/whitelist","sidebar_position":4},"headers":[],"relativePath":"nitwikit/docs/advance/management/player-management/whitelist.md","filePath":"nitwikit/docs/advance/management/player-management/whitelist.md","lastUpdated":1727754229000}'),o={name:"nitwikit/docs/advance/management/player-management/whitelist.md"};function r(n,a,s,c,d,h){return i(),t("div",null,a[0]||(a[0]=[l('<h1 id="白名单制度" tabindex="-1">白名单制度 <a class="header-anchor" href="#白名单制度" aria-label="Permalink to &quot;白名单制度&quot;">​</a></h1><p>为了保证服务器中所有的玩家都可信，你可能需要为服务器配置白名单。没有白名单的服务器将面临以下风险：</p><ol><li>同一个玩家使用多个帐号进服，同时领取多份限量奖励。</li><li>不怀好意的陌生人在管理员和玩家不知情的情况下进入服务器并对其进行破坏，事后无法追究其责任。</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>开启白名单的服务器将面临更大的管理压力，包括但不限于你需要长期在线来随时给新玩家添加白名单，并为离开服务器的玩家解绑白名单。<br> 如果你选择让玩家自助申请白名单，你或你的技术人员还需要学习、部署、配置和维护相关软件。</p></div><h2 id="机器人绑定白名单" tabindex="-1">机器人绑定白名单 <a class="header-anchor" href="#机器人绑定白名单" aria-label="Permalink to &quot;机器人绑定白名单&quot;">​</a></h2><p>让玩家根据指引与机器人交流来自助绑定白名单，</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>非常建议使用拥有绑定白名单功能的机器人实现绑定，否则你可能需要自行开发软件或人工操作来解决 <strong>退群玩家仍可进服</strong>、<strong>同玩家为多个帐号绑定白名单</strong> 等一系列问题。</p></div><h3 id="准备内容" tabindex="-1">准备内容 <a class="header-anchor" href="#准备内容" aria-label="Permalink to &quot;准备内容&quot;">​</a></h3><ul><li>一个可以保证长期工作的群机器人</li></ul><h3 id="操作方法" tabindex="-1">操作方法 <a class="header-anchor" href="#操作方法" aria-label="Permalink to &quot;操作方法&quot;">​</a></h3><p>以下机器人均已内置了玩家自助绑定白名单功能：</p><ul><li><a href="https://gitee.com/dlcn/dlscq/wikis/%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8/5.%20%E9%85%8D%E7%BD%AE%E5%91%BD%E4%BB%A4%E5%92%8C%E6%AD%A3%E5%88%99#%E5%90%AF%E7%94%A8%E7%BB%91%E5%AE%9A%E7%99%BD%E5%90%8D%E5%8D%95%E5%91%BD%E4%BB%A4" target="_blank" rel="noreferrer">DLS</a>：需要玩家交流群</li></ul><h2 id="人工添加白名单" tabindex="-1">人工添加白名单 <a class="header-anchor" href="#人工添加白名单" aria-label="Permalink to &quot;人工添加白名单&quot;">​</a></h2><p>除了使用机器人，你也可以手动完成添加白名单工作。由于人工操作繁琐，只建议在不便于搭建玩家自助绑定白名单功能时使用。</p><h3 id="准备内容-1" tabindex="-1">准备内容 <a class="header-anchor" href="#准备内容-1" aria-label="Permalink to &quot;准备内容&quot;">​</a></h3><ul><li>保证长期在线随时响应玩家的管理员团队：你可以让服务器的客服团队来完成此工作。</li><li>一个用于记录玩家身份和 ID 对应关系的文档。</li></ul><h3 id="操作方法-1" tabindex="-1">操作方法 <a class="header-anchor" href="#操作方法-1" aria-label="Permalink to &quot;操作方法&quot;">​</a></h3><ol><li><p><strong>所有负责添加白名单的人都必须拥有使用 <code>whitelist</code> 指令的权限。</strong> 你可以通过以下几种方式：</p><ul><li>为服务器机器人配置特定响应机制，机器人响应指定管理员的指定命令来执行<code>whitelist</code>命令</li><li>在授予这些管理员游戏内管理员，这样他们就可以在游戏内使用 <code>whitelist</code> 指令了。BDS 服务器不支持在游戏内使用该命令，你可以为服务器安装插件或模组等来实现。注意这种方式可能需要管理员们启动游戏并进入服务器才能添加白名单，需要在游戏的启动和服务器连接过程上耗费大量时间。</li><li>在支持多用户的<a href="./../../../process/deploy/optional-mode.html#面板">面板</a>上为这些管理员授予控制台的操作权限</li><li>将服务器的后台交给这些管理员(<strong>不推荐</strong> ，这会导致部分管理员获得其不需要的权限并产生安全隐患)</li></ul></li><li><p><strong>为负责相关工作的管理团队培训</strong> 。</p><ol><li>为其安排值班时间保证管理团队在线时间尽可能长，以便及时响应玩家。</li><li>要求除重大事件外，优先响应新玩家添加白名单需求。</li><li>得知玩家游戏 ID 后，立刻在服务器上进行添加白名单操作。添加完成后，立刻通知玩家。最后才在白名单文档上记录玩家身份和 ID 的对应关系。</li><li>监控玩家退群、注销论坛等表明其离开玩家社区的操作，并立即移除玩家对应的白名单，并在玩家白名单文档上进行标记或删除操作。</li></ol></li></ol><div class="warning custom-block"><p class="custom-block-title">不要过于相信玩家！</p><p><strong>不要因为要求玩家在玩家交流平台上使用游戏 ID 作为昵称就不记录玩家身份与游戏 ID 的对应关系</strong> 。一些玩家会趁管理员不注意将自己的昵称修改为他人的或无效的游戏 ID 来在事故追责中隐藏身份逃脱处罚。</p></div>',19)]))}const u=e(o,[["render",r]]);export{m as __pageData,u as default};
