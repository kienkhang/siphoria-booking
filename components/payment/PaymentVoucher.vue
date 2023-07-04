<template lang="pug">
.py-4.px-6.bg-white.border.rounded-lg
  FormKit(type='form' :actions='false' @submit='apply')
    FormKit(type='text', name='voucher', label='Voucher' inner-class='max-w-none')

</template>

<script setup lang="ts">
function apply() {
  console.log('Apply voucher')
}
</script>

<style scoped></style>
