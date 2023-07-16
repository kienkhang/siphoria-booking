<template lang="pug">
NModal(:show='show' @mask-click.prevent='close')
  .bg-white(class='w-[400px] p-10 rounded-md flex flex-col items-center justify-center gap-5 dark:bg-black-olive')
    .w-full.h-auto(class='i-custom-logo-origin?bg')
    span.font-medium {{ content }}
    .grid.grid-cols-2.gap-2
      button.btn-close.p-2.rounded-md.bg-crayola.transition-all.text-white(class='hover:bg-opacity-90 active:animate-scale' @click.prevent='doActions()') Đồng ý
      button.btn-close.p-2.rounded-md.transition-all(class='hover:bg-onyx hover:bg-red-500 hover:text-white active:animate-scale' @click.prevent='close()') Đóng lại

</template>

<script setup lang="ts">
// modal
defineProps({
  show: {
    type: Boolean,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
// define emit
const emit = defineEmits<{
  (e: 'update:show', val: boolean): void
  (e: 'action'): void
}>()

// close modal
const close = () => {
  emit('update:show', false)
}

// do actions
const doActions = () => {
  emit('action')
  close()
}
</script>

<style scoped></style>
