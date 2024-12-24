<p align="center">
  <a href="https://github.com/tuanzisama/nitwikit-vitepress">
    <img src="https://raw.githubusercontent.com/tuanzisama/NitWikit-VitePress/refs/heads/main/public/book.png" width="200" height="200" alt="NitWikit-VitePress">
  </a>
</p>

<div align="center">
  
# NitWikit-VitePress

👉 一群笨蛋们写的 Minecraft 开服教程 (VitePress 版) 👈

</div>

## 💡 关于此项目

文档内容均来自 [NitWikit↗](https://github.com/8aka-Team/NitWikit)，本仓库不存储内容。

（基于 [`Git Tools - Submodules`](https://git-scm.com/book/en/v2/Git-Tools-Submodules) 技术）

## 🤔 如何工作的？

正如你所见，此仓库实质上并不存储 `NitWikit`，也不直接修改其内容。实现方式更类似 `Spigot` (一款 Minecraft Java版核心) 给 Minecraft 本体打补丁 (Patch) 的方式运行的。

## ⌨️ 本地开发 & 调试

```bash
git clone https://github.com/8aka-Team/NitWikit.git --recurse-submodules
pnpm install
pnpm docs:dev
```

<details>
    <summary>运行失败？</summary>

如果你已经克隆了项目但忘记了 `--recurse-submodules`，那么可以运行 `git submodule update --init`。如果还要初始化、抓取并检出任何嵌套的子模块， 请使用简明的 `git submodule update --init --recursive`。

</details>

## 📢 许可证&声明

### 本仓库

(指本仓库**除** `docs/nitwikit` 目录外的所有数据，即使用 `Git Tools - Submodules` 技术所引用的 `NitWikit` 之数据)

[LGPL v3.0](https://opensource.org/license/lgpl-3-0)

### wiki 内容

(指本仓库 `docs/nitwikit` 目录内的数据)

- 你不能声称这是你的作品
- 未经作者允许,你不得将本作品用于如下途径：
  - 改编或转载
  - 盈利
- 你可以将本作品在不经授权的情况下用于：
  - 带有出处的引用

(查看更多关于 `wiki 内容` 的声明请参阅 [`8aka-Team/NitWikit#声明`](https://github.com/8aka-Team/NitWikit?tab=readme-ov-file#-%E5%A3%B0%E6%98%8E))
