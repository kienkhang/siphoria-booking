<template lang="pug">
NPopover(
  trigger='click'
  :show-arrow='false'
  style='margin: 0; margin-bottom: 16px; padding: 0; border-radius: 16px;'
  placement='bottom-start'
  v-model:show='show'
)
  template(#trigger)
    .flex.items-center.rounded-lg.px-4.py-2.border.cursor-pointer.select-none
      span.mr-3 Price
      div(:class='["w-4 h-4 i-custom-chevron-down transition-all", {"rotate-180": show}]')
  .rounded-16px.bg-white.w-320px.overflow-y-auto.hide-scroll.mt-2.flex.flex-col.p-3.gap-8.shadow-search(v-auto-animate)
    | Filter Price


</template>

<script setup lang="ts">
const show = ref(false)
</script>

<style scoped></style>
