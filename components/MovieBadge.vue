<template>
  <span class="badge">
    <Icon v-if="icon" :name="icon" mode="svg" :customize="customize" size="8" />
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string
  backgroundColor?: string
}>()
const customize = (content: string) => {
  return content
    .replace(/stroke="[^"]*"/g, `stroke="white"`) // Change stroke color to white
}
</script>

<style scoped>
.badge {
  @apply flex items-center gap-[2px] text-[11px] py-[2px] px-[6px] rounded-lg;
}
</style>
