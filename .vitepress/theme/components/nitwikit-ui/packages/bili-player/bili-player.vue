<template>
  <div class="bili-player">
    <iframe class="bili-player__inner" :src="iframeSrc" scrolling="no" border="0" frameborder="no" framespacing="0"
      allowfullscreen="true"></iframe>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<NwImageProps>(), {
});

const iframeSrc = computed(() => `//player.bilibili.com/player.html?isOutside=true&bvid=${props.bvId}&autoPlay=false`);
</script>

<script lang="ts">
interface NwImageProps {
  title: string;
  src: string;
  bvId: string;
}
</script>

<style lang="scss" scoped>
.bili-player {
  width: 100%;
  height: 400px;

  &__inner {
    width: 100%;
    height: 100%;
  }
}
</style>
