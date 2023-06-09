<template lang="pug">
div Google

</template>

<script setup lang="ts">
definePageMeta({
  // layout: 'empty',
  title: 'Google Callback'
})

const route = useRoute()
const router = useRouter()
const code = computed(() => route.query?.code as string)

const { loginGG } = useAuth()
const { executeApi } = loginGG(code)

until(code)
  .toBeTruthy()
  .then(async () => {
    await executeApi()
    router.push('/')
  })

onMounted(() => {
  console.log(route.query)
})
</script>
