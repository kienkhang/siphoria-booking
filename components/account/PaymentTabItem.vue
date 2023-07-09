<template lang="pug">
.flex.items-center.gap-2.rounded-lg.py-2.text-sm.transition-all.select-none.cursor-pointer(:class="['pr-4 ',{ 'pl-2 bg-crayola text-white': active},{'pl-4 border border-platium':!active}]" @click='changeTabDebounce')
  .w-5.h-5.flex-shrink-0(class='i-material-symbols:check-small-rounded' v-if='active')
  span {{ tab.name }}
</template>

<script setup lang="ts">
defineProps<{
  tab: {
    key: string
    name: string
  }
  active: boolean
}>()

const emit = defineEmits<{
  (e: 'change-tab'): void
}>()

function changeTabDebounce() {
  emit('change-tab')
}
</script>

<style scoped></style>
