<template lang="pug">
div

</template>

<script setup lang="ts">
const route = useRoute()

const params = computed(() => route.params)
console.log('😃😦😧 ~ params:', params.value)
const query = computed(() => route.query)
console.log('😃😦😧 ~ query:', query.value)
</script>

<style scoped></style>
