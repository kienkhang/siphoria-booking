<template lang="pug">
.flex.items-end.gap-3
  NPopover.max-w-192px.w-max(
    trigger='click'
    style='background-color: white; padding: 0px; height: 100%; border-radius: 10px'
    arrow-style='background-color: #fff'
    content-style='overflow: auto; width:100%'
    display-directive='if'
    placement="top-start"
    :show-arrow="true"
  )
    template(#trigger)
      .w-6.h-6.cursor-pointer.select-none(class='i-mdi:brain text-crayola hover:animate-pulse')
    .w-full.select-none.flex.flex-col.rounded-10px.overflow-hidden.shadow-lg
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100' @click='renew()')
        Icon.flex-shrink-0(name='pepicons-pop:arrows-spin' size='16')
        span Tạo lại câu trả lời
      .flex.items-center.gap-3.py-2.px-4(class='text-red-500 cursor-pointer hover:bg-gray-100' @click='reset()')
        Icon.flex-shrink-0(name='mdi:close' size='16')
        span Làm mới
      ChatConfirm(
        :content='"Bạn chắc chắn tạo lại câu trả lời chứ ?"'
        v-model:show='confirmGenerate'
        @action="doRenew"
      )
      ChatConfirm(
        :content='"Bạn chắc chắn tạo lại đoạn chat chứ ?"'
        v-model:show='confirmReset'
        @action="doReset"
      )
  n-input(
    placeholder="Type your message"
    type="textarea"
    size="small"
    v-model:value='mess'
    :autosize="{ minRows: 1, maxRows: 3 }"
    @keydown.enter.prevent='doChat()'
  )
  .w-6.h-6.cursor-pointer.select-none(class='i-material-symbols:send-rounded hover:animate-pulse text-crayola' @click='doChat()')

</template>

<script setup lang="ts">
const { chat: doChat, reset: doReset, reGenerate: doRenew } = useChatGPT()
const { userMess: mess } = storeToRefs(useChatGPT())

// // --------- POPOVER HANDLER -----------
// const visible = ref(false)
// // update show popover
// const toggleShow = () => (visible.value = !visible.value)

// -------- CONFIRM HANDLER --------------
const confirmReset = ref(false)
const confirmGenerate = ref(false)

function reset() {
  confirmReset.value = true
}
function renew() {
  confirmGenerate.value = true
}
</script>

<style scoped></style>
