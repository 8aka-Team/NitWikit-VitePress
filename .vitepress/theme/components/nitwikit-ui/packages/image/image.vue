<template>
  <div class="nw-image">
    <img ref="nwImageRef" :src="props.src" :alt="props.alt" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css'

const props = withDefaults(defineProps<NwImageProps>(), {
});

const nwImageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  const viewer = new Viewer(nwImageRef.value, {
    viewed() {
      viewer.zoomTo(1);
    },
  });
})
</script>

<script lang="ts">
interface NwImageProps {
  src: string;
  alt: string;
}
</script>

<style lang="scss"></style>
