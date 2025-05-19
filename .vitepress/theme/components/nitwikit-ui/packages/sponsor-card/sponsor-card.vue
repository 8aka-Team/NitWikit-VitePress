<template>
  <div class="vp-doc">
    {{ sponsors }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  sponsors: string
}>()
</script>