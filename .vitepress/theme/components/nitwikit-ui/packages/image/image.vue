<template>
  <div class="nw-image">
    <img class="nw-image__inner" ref="nwImageRef" :src="props.src" :alt="props.alt" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css'

const props = withDefaults(defineProps<NwImageProps>(), {
});

const nwImageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  const viewer = new Viewer(nwImageRef.value);
})
</script>

<script lang="ts">
interface NwImageProps {
  src: string;
  alt: string;
}
</script>

<style lang="scss"></style>
