<template>
  <div class="nw-tab">
    <div class="nw-tab__header">
      <div class="nw-tab-item" v-for="(item, index) in tabItems" :key="index"
        :class="{ 'is-active': tabValue === item.value }" @click="onTabItemClickHandler(item)">
        {{ item.label }}
      </div>
    </div>
    <div class="nw-tab__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, ref } from 'vue';

const props = withDefaults(defineProps<TabProps>(), {
});

const tabValue = ref<string>('');
const tabItems = ref<TabItem[]>([]);

const onTabItemClickHandler = (item: TabItem) => {
  tabValue.value = item.value
}

onMounted(() => {
  if (props.defaultValue) {
    tabValue.value = props.defaultValue
  }
})

provide<TabProvide['$store']>("$store", { tabValue, tabItems })
</script>

<script lang="ts">
import { Ref } from 'vue';

interface TabProps {
  defaultValue?: string
}

export interface TabProvide {
  $store: {
    tabValue: Ref<string>
    tabItems: Ref<TabItem[]>
  }
}

type TabItem = Record<'label' | 'value', string>;
</script>

<style lang="scss">
.nw-tab {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    margin-bottom: 10px;

    .nw-tab-item {
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      transition: all .3s;
      border-radius: 10px;
      position: relative;

      &.is-active {
        color: var(--vp-code-color);

        &::after {
          opacity: 1;
        }

        &:hover {
          border-radius: 10px 10px 0 0;
        }
      }

      &:hover {
        background-color: #EEEEEE;
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: var(--vp-code-color);
        opacity: 0;
        transition: all .3s;
      }
    }
  }
}
</style>
