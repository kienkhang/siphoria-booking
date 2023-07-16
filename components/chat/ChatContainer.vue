<template lang="pug">
.flex.flex-col.gap-4
  .chat-wrapper.p-5.h-full.w-full
    .title
      p.text-base.font-bold Hướng dẫn viên AI
      p.text-sm.text-x11 Powered by gpt-3.5-turbo.
    .overflow-auto.mt-4.w-full.h-300px.py-2(ref='el')
      .flex.flex-col.gap-3
        ChatCharacter(v-for='message in messages' :key='message.content' :chat='message')
        Vue3Lottie(
          v-if='isWaiting'
          :animation-data='loading'
          width="75px"
          height="75px"
        )
        .message-end


</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import loading from '@/constants/lottie/loading.json'

const show = defineModel<boolean>('modelValue')

const { messages, isLoading: isWaiting } = storeToRefs(useChatGPT())

const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el)
function scrollToBottom() {
  if (el.value) {
    y.value = el.value.scrollHeight
  }
}

watch([messages], () => {
  scrollToBottom()
})
watch([show], () => {
  scrollToBottom()
})
</script>

<style scoped></style>
