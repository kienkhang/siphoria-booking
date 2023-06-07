<template lang="pug">
BaseButton.px-4.py-2.border.border-white.text-white(class='hover:bg-white hover:text-green-500' )
  span(@click='show = true') Đăng nhập / Đăng ký
AuthModal(v-model:show='show')
</template>

<script setup lang="ts">
const show = ref(false)
</script>

<style scoped></style>
