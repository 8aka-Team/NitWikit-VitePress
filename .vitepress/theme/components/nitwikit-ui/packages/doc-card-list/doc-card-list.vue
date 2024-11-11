<template>
  <div class="nw-doc-card">
    <div class="doc-card" v-for="(item, index) in cardList" :key="index" @click="onDocCardClickHandler(item)">
      <p class="doc-card__title">{{ item.text }}</p>
      <p class="doc-card__summary" v-if="item.items.length !== 0">
        {{ item.items.length }}个项目
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vitepress'
import { DefaultTheme, useSidebar } from 'vitepress/theme'
import { useRouter } from 'vitepress';

const sidebar = useSidebar()
const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path.replace(/.html$/, ''))

const cardList = ref<DefaultTheme.SidebarItem[]>([])

onMounted(() => {
  const currentModule = sidebar.sidebar.value.find(item => `/${item.link}` === currentPath.value)
  cardList.value = currentModule?.items ?? [];
})

const onDocCardClickHandler = (item: DefaultTheme.SidebarItem) => {
  router.go(item.link)
}

</script>

<style lang="scss">
.nw-doc-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  .doc-card {
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 30px;
    transition: all .3s;
    border: 1px solid transparent;
    cursor: pointer;

    &__title {
      font-size: 22px;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__summary {
      font-size: 14px;
      margin-top: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      border-color: var(--vp-code-color);
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width :600px) {
  .nw-doc-card {
    grid-template-columns: 1fr;
  }
}
</style>
