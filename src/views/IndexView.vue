<script setup lang="ts">
import Menu from '@/components/Menu.vue'
</script>

<template>
  <a-flex style="width: 100%; height: 100%" vertical>
    <div class="headContainer"></div>
    <a-flex style="height: 100%">
      <Menu style="height: 100%"></Menu>
      <div style="height: 100%;">

      </div>
    </a-flex>
  </a-flex>
</template>

<style scoped>
.headContainer {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #e3e3e3;
}
</style>
