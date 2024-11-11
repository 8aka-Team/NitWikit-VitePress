<template>
  <div class="nw-tabitem">
    <div class="nw-tabitem__content" v-if="tabValue === props.value" v-html="slotContent">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, createVNode, inject, onMounted, render, useSlots } from 'vue';
import { TabProvide } from './tab.vue';
import { useMarkdownIt } from '../../../../composables/markdown-it';

const markdownIt = useMarkdownIt()
const $store = inject<TabProvide['$store']>("$store")
const slots = useSlots()
const props = withDefaults(defineProps<TabItemProps>(), {
});

const tabValue = computed(() => {
  return $store?.tabValue.value
})

onMounted(() => {
  $store?.tabItems.value.push({ label: props.label ?? props.lable ?? props.value, value: props.value })
  if (props.default) {
    $store!.tabValue.value = props.value
  }
})


const slotContent = computed(() => {
  const vnode = createVNode('div', null, { default: slots.default })

  const wrapperEl = document.createElement('div')
  render(vnode, wrapperEl)

  const html = wrapperEl.innerHTML;
  return markdownIt.renderInline(html)
})
</script>

<script lang="ts">
interface TabItemProps {
  value: string;
  label: string;
  /**
   * 兼容原文档错误写法
   */
  lable?: string;
  default: boolean
}
</script>

<style lang="scss"></style>
