<template lang="pug">
.flex.flex-col.gap-4
  .chat-wrapper.p-5.h-full.w-full
    .title
      p.text-base.font-bold Hướng dẫn viên AI
      p.text-sm.text-x11 Powered by gpt-3.5-turbo.
    .overflow-auto.mt-4.w-full.h-300px.py-2
      .flex.flex-col.gap-3
        ChatCharacter(v-for='message in messages' :key='message.content' :chat='message')
  


</template>

<script setup lang="ts">
const { messages } = storeToRefs(useChatGPT())
</script>

<style scoped></style>
