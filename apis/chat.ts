const chatOpenAIUrl = 'https://api.openai.com/v1/chat/completions'
class ChatGPT {
  chat = (logs: string) => {
    return usePost({
      url: chatOpenAIUrl,
      data: logs,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CHAT_GPT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      requiredToken: false
    })
  }
}

const chatApi = new ChatGPT()

export default chatApi
