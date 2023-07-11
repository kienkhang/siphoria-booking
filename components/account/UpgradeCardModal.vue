<template lang="pug">
NModal(
  :show='show' 
  @mask-click='closeModal'
)
  .bg-white.max-w-2xl.w-full.rounded-xl.h-600px
</template>

<script setup lang="ts">
// Define Props
const props = defineProps<{
  show: boolean
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

function closeModal() {
  emit('update:show', false)
}
</script>

<style scoped></style>
