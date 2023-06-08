<template lang="pug">
TheHeader
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'My Home page'
})

const { getToken } = useAuthStorage()

const { getMe } = useAuth()
const { executeAPI } = getMe()

onMounted(() => {
  executeAPI()
})
</script>

<style scoped></style>
