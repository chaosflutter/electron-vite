<script setup lang="ts">
import BarLeft from '../Component/BarLeft.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ipcRenderer } from 'electron'
import { onMounted } from 'vue'
onMounted(() => {
  ipcRenderer.invoke('showWindow')
})
</script>

<template>
  <BarLeft />
  <div class="pageBox">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.pageBox {
  flex: 1;
  height: 100%;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  display: flex;
  margin-top: -1px;
}
</style>
