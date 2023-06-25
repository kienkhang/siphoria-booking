<template lang="pug">
div Callback from redirect url

</template>

<script setup lang="ts">
const route = useRoute()

onMounted(() => {
  console.log({ ...route })
})
</script>

<style scoped></style>
