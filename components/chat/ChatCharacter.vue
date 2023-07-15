<template lang="pug">
.flex.gap-2
  figure.rounded-full.overflow-hidden.w-10.h-10.p-2.flex.items-center.justify-center.flex-shrink-0.border
    nuxt-img(
      :src="avatar", 
      alt="Chat character avatar", 
      class='object-cover object-center w-full h-full',
      loading='lazy'
      decoding='async'
    )
  .user.flex.flex-col.gap-1
    span.font-bold {{ name }}
    .content
      pre.whitespace-pre-wrap.text-white.py-2.px-3.rounded-md(
        v-if='chat.role==="user"'
        class='bg-[rgb(59,130,246)]'
      ) {{ chat.content }}
      pre.whitespace-pre-wrap.border.py-2.px-3.rounded-md(v-else) {{ chat.content }}


</template>

<script setup lang="ts">
import logo from '@/assets/icons/logo-origin.svg'
import user from '@/assets/icons/user.svg'
import { useAccountStore } from '~/stores/account'

const props = defineProps<{
  chat: GPTMessage
}>()

const { account } = storeToRefs(useAccountStore())

const name = computed(() => {
  switch (props.chat.role) {
    case 'user':
      return 'You'
    case 'assistant':
    case 'system':
      return 'OpenAI'
  }
})

const avatar = computed(() => {
  switch (props.chat.role) {
    case 'user':
      return user
    case 'assistant':
    case 'system':
      return logo
  }
})
</script>

<style scoped></style>
