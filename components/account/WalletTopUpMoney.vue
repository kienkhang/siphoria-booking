<template lang="pug">
.flex.items-center.gap-4.select-none
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(100000)') {{ VND(''+100000) }}
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(200000)') {{ VND(''+200000) }}
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(500000)') {{ VND(''+500000) }}
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(1000000)') {{ VND(''+1000000) }}
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(2000000)') {{ VND(''+2000000) }}
  .rounded-3xl.px-4.py-2.cursor-pointer(class='font-bold transition-all border border-x11 text-x11 hover:border-crayola hover:text-crayola' @click='select(5000000)') {{ VND(''+5000000) }}


</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'select-money', value: number): void
}>()

function select(price: number) {
  emit('select-money', price)
}
</script>

<style scoped></style>
