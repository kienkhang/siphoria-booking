<template lang="pug">
AuthRedirect
</template>

<script setup lang="ts">
import { authApi } from '~/apis/auth'

definePageMeta({
  layout: 'empty'
})
const route = useRoute()
const router = useRouter()

const token = computed(() => route.query?.token as string)

until(token)
  .toBeTruthy()
  .then(async () => {
    const { execute } = authApi.verify(token.value)
    await execute()
    router.push('/')
  })
console.log('😃😦😧 ~ route:', { ...route })
</script>
