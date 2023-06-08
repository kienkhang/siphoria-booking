<template lang="pug">
div Google

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'Google Callback'
})

const route = useRoute()

onMounted(() => {
  console.log(route.query)
})
</script>
