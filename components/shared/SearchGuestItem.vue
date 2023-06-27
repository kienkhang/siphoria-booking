<template lang="pug">
.flex.items-center.justify-between(class='')
  span.font-semibold {{ target.name }}
  .flex.items-center.gap-3.rounded-full.p-1.border.border-alabaster
    BaseButton.h-10.w-10.justify-center.rounded-full(class='bg-x11' @click='$emit("decrement")')
      div(class='w-6 h-6 i-mdi:minus')
    span.text-28px {{target.value}}
    BaseButton.h-10.w-10.justify-center.rounded-full.text-white(class='bg-eerie-black' @click='$emit("increment")')
      div(class='w-6 h-6 i-mdi:plus' )
</template>

<script setup lang="ts">
defineProps<{
  target: {
    name: string
    value?: number
  }
}>()

defineEmits<{
  (e: 'increment'): void
  (e: 'decrement'): void
}>()
</script>

<style scoped></style>
