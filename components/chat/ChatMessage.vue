<template lang="pug">
.flex.items-end.gap-3
  .w-6.h-6.cursor-pointer.select-none(class='i-mdi:brain text-crayola hover:animate-pulse')
  n-input(
    placeholder="Type your message"
    type="textarea"
    size="small"
    v-model:value='mess'
    :autosize="{ minRows: 1, maxRows: 3 }"
  )
  .w-6.h-6.cursor-pointer.select-none(class='i-material-symbols:send-rounded hover:animate-pulse text-crayola' @click='doChat()')

</template>

<script setup lang="ts">
const { chat: doChat } = useChatGPT()
const { userMess: mess } = storeToRefs(useChatGPT())
</script>

<style scoped></style>
