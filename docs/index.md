---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NitWikit"
  text: "笨蛋 MC 开服教程"
  tagline: 一群笨蛋们写的 Minecraft 开服教程
  actions:
    - theme: brand
      text: 快速开始 🥵
      link: /intro
  image:
    src: /book.png
    alt: NitWikit (VitePress)

features:
  - title: 「简单」
    details: 手把手教你,甚至双击就可以完成
  - title: 「详细」
    details: 充实的内容,让你新手变大佬
  - title: 「现代」
    details: 基于 MC 社区最新内容编写,保持更新
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #b7b7b7 30%, #312104);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #b7b7b7 50%, #312104 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.image-container .VPImage {
  width: 300px;
  height: 300px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
