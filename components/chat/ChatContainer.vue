<template lang="pug">
.flex.flex-col.gap-4
  .chat-wrapper.p-5.h-full.w-full
    .title
      p.text-base.font-bold Hướng dẫn viên AI
      p.text-sm.text-x11 Powered by gpt-3.5-turbo.
    .overflow-auto.mt-4.w-full.h-300px.py-2(ref='msgBox')
      .flex.flex-col.gap-3(ref='msgWrapper')
        ChatCharacter(v-for='(message,idx) in messages' :key='message.content+idx' :chat='message')
        Vue3Lottie(
          v-if='isWaiting'
          :animation-data='loading'
          width="75px"
          height="75px"
        )
      .message-end(ref='bottom')


</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import loading from '@/constants/lottie/loading.json'

const show = defineModel<boolean>('modelValue')

const { messages, isLoading: isWaiting } = storeToRefs(useChatGPT())

const msgBox = ref<HTMLElement | null>(null)
const bottom = ref<HTMLElement | null>(null)
const msgWrapper = ref<HTMLElement | null>(null)

const bottomVisible = useElementVisibility(bottom)

const needToScroll = ref(false)

watch(bottomVisible, () => {
  needToScroll.value = !bottomVisible.value
  if (!bottomVisible.value) 
    scrollToBottom()
  
})

const { height } = useElementSize(msgWrapper)

function scrollToBottom() {
  if (!msgBox.value) 
    return
  
  // msgBox.value.scrollTop = msgBox.value.scrollHeight
  msgBox.value.scrollTop = height.value
}

watch([show], () => {
  scrollToBottom()
})
// After message change -> loading show
// Debounce 50ms wait loading show then scroll to bottom
watchDebounced(
  messages,
  () => {
    scrollToBottom()
  },
  {
    debounce: 50
  }
)
</script>

<style scoped></style>
