<template lang="pug">
.rounded-xl.border.p-2.mt-3
  label.px-3.text-sm.cursor-pointer(:for='name') {{ $t('account_page.my_wallet.amount') }}
  .flex.items-center.justify-between.gap-4.p-r-3
    input(
      type='text'
      :id='name' 
      :name='name'
      v-model='maskInput' 
      v-maska:[options]
      class='inline-block text-sm border-0 max-w-150px focus:border-crayola focus:outline-none focus:ring-0 '
    )
    span.text-sm.flex-shrink-0 VND
</template>

<script setup lang="ts">
import type { MaskaDetail } from 'maska'

defineProps<{
  name: string
}>()

const price = defineModel<number>('price')

const maskInput = ref(`${price.value}`)

const options = reactive({
  mask: ['#', '##', '###', '#,###', '##,###', '###,###', '#,###,###', '##,###,###'],
  onMaska(detail: MaskaDetail) {
    price.value = +detail.unmasked
  }
})

// Hanlde select money
function selectMoney(p: number) {
  maskInput.value = `${p}`
}

watch(price, () => {
  if (price.value) selectMoney(price.value)
})
</script>

<style scoped></style>
