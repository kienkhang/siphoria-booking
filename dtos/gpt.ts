type GPTRole = 'system' | 'assistant' | 'user'

interface GPTMessage {
  role: GPTRole
  content: string
}
