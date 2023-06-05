<template lang="pug">
TheHeader
div(@click='incre()') {{ count }}

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'My Home page'
})

const count = ref(0)

const incre = () => {
  count.value += 1
}
</script>

<style scoped></style>
