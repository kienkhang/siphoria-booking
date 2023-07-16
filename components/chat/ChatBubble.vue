<template lang="pug">
NPopover(
  trigger='click'
  style='background-color: white; padding: 0px; height: 100%; border-radius: 10px;'
  arrow-style='background-color: #fff'
  content-style='width:100%'
  :show='visible'
  display-directive='show'
  :show-arrow="true"
  placement='top'
)
  template(#trigger)
    .rounded-full.w-16.h-16.flex.items-center.justify-center.select-none.cursor-pointer.shadow-lg.fixed.right-5.z-50.bg-white(:class="[{'bottom-5':!visibleFooter},{'bottom-36':visibleFooter}]" @click='toggleShow')
      .w-10.h-10(class='i-custom-logo-origin?bg')
  .rounded-md.w-96.h-450px.flex.flex-col.relative
    ChatContainer.scrollbar-gradient(v-model='visible')
    .absolute.chat-function.max-h-40.px-3.py-2.min-h-36px.bottom-2.inset-x-0.bg-white.border-t
      ChatMessage

  
</template>

<script setup lang="ts">
const props = defineProps<{
  visibleFooter: false
}>()
const visible = ref(false)

function toggleShow() {
  visible.value = !visible.value
}
</script>

<style scoped></style>
