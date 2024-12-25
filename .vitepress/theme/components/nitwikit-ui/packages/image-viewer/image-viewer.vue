<script lang="ts" setup>
import { onActivated, onMounted, onBeforeUnmount, ref } from 'vue'

import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css'

const instance = ref()

onMounted(() => {
  instance.value = new Viewer(document.querySelector('.vp-doc'));
})

onBeforeUnmount(() => {
  instance.value?.destroy()
})
</script>