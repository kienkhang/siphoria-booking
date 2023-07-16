import { useStorage } from '@vueuse/core'
import chatApi from '~/apis/chat'
import { characters } from '@/constants/gpt'

const useChatGPT = defineStore('useChatGPT', () => {
  const logs = useStorage('logs', '')

  // Current messages log
  const messages = ref<GPTMessage[]>([])
  // is Chating
  const isChating = computed(() => messages.value.length > 0)
  // User message
  const userMess = ref('')
  const isTyping = computed(() => userMess.value.length > 0)
  // mounted with chat gpt

  onMounted(() => {
    // init message
    if (!logs.value) {
      // characters is system message in @/constants/gpt.ts
      // Set logs in local
      logs.value = JSON.stringify([characters[0]])
    }
    // Reload page to parse log to localstore to messages
    messages.value = JSON.parse(logs.value)
  })

  const isLoading = ref(false)

  async function gptGenerate(chatMessages: GPTMessage[]) {
    isLoading.value = true
    const apiBody = {
      model: 'gpt-3.5-turbo',
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 512
    }
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CHAT_GPT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiBody)
    })
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        messages.value.push({
          role: 'assistant',
          content: data.choices[0].message.content
        })
        logs.value = JSON.stringify([...messages.value])
      })
      .finally(() => (isLoading.value = false))
  }

  async function chat() {
    if (isLoading.value) return
    if (userMess.value === '') return

    const newMessage: GPTMessage = {
      role: 'user',
      content: userMess.value
    }
    messages.value.push(newMessage)
    logs.value = JSON.stringify([...messages.value])
    userMess.value = ''
    // Chat with GPT
    await gptGenerate(messages.value)
  }

  const reset = () => {
    // Reset chat in progress
    logs.value = JSON.stringify([characters[0]])
    // Reload page to parse log to localstore to messages
    messages.value = JSON.parse(logs.value)
  }

  // Regenerate
  async function reGenerate() {
    if (messages.value.length - 1 <= 0) {
      return
    }
    const role = messages.value[messages.value.length - 1].role
    // Check last chat is assistant
    // remove last chat -> and resend messages
    if (role === 'assistant') {
      messages.value.pop()
      logs.value = JSON.stringify([...messages.value])
      // resend api
      await gptGenerate(messages.value)
    } else if (role === 'system') {
      return
    }
    // Check last chat is user -> resend messages
    else {
      // resend api
      await gptGenerate(messages.value)
    }
  }

  return {
    logs,
    userMess,
    messages,
    isTyping,
    isChating,
    isLoading,
    chat,
    reset,
    reGenerate
  }
})

export { useChatGPT }
