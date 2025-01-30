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

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.querySelector(".VPHero").addEventListener("mousemove", (event) => {
  })
})
</script>

<style lang="scss">
.container {
}

.VPHome {
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 400px;
    position: fixed;
    top: var(--vp-nav-height);
    left: 0;
    z-index: -1;
    background: url(/bg.jpeg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center 30%;
    transition: opacity 0.3s;
    opacity: 0;
  }

  &:after {
    content: "";
    width: 100%;
    height: 400px;
    position: fixed;
    top: var(--vp-nav-height);
    left: 0;
    z-index: -1;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(6px);
    transition: opacity 0.3s;
    opacity: 0;
  }
}

.image-container .VPImage {
  width: 300px;
  height: 300px;
}

.VPHero {
  margin-bottom: 40px;
}
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
  .VPHome::before,
  .VPHome::after {
    opacity: 0;
  }
  .VPHero {
    color: #515c67;
    .tagline {
      color: #414853 !important;
    }
  }
  html.dark {
    .VPHero {
      color: rgba(255, 255, 245, 0.86);
      .tagline {
        color: rgba(235, 235, 245, 0.6) !important;
      }
    }
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
  .image-container{
    transform: translate(-32px, -10px) !important;
  }
  .VPHome::before,
  .VPHome::after {
    opacity: 1 !important;
  }
  .VPHero {
    color: rgba(255, 255, 245, 0.86);
    .tagline {
      color: rgba(235, 235, 245, 0.6) !important;
    }
  }
}

</style>
