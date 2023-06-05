<template lang="pug">
HDialog(:open='show' @close='closeModal' class="relative z-10")
  //- div(class="fixed inset-0 overflow-y-auto" @click='$emit("mask-click")')
  div(class="fixed inset-0 bg-black bg-opacity-25" @click='$emit("mask-click")')
    div(class="flex min-h-full items-center justify-center")
      HDialogPanel(:class='class')
        slot
</template>

<script setup lang="ts">

// Define Props
const props = defineProps<{
  show: boolean
  class?: string
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
  (e: 'mask-click'): void
}>()

const closeModal = () => {
  emit('update:show', false)
}
</script>

<style scoped></style>
