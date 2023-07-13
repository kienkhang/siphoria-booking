<template lang="pug">

LazyTheHeader
slot
.p-t-10.w-full
LazyTheFooter(v-if='!isCart')
</template>

<script setup lang="ts">
const route = useRoute()

const isCart = computed(() => route.name === 'cart')
</script>
