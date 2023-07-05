<template lang="pug">
.w-full.rounded-lg.py-4.px-6.bg-white.border
  .flex.flex-col.gap-4
    span.text-lg.font-bold Payment method
    //- Method
    //- siphoria wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='selectPayment("siphoria")' :class='[{"pointer-events-none bg-x11/30 text-x11": isNotEnoughMoney }]')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-logo-origin?bg')
        span.font-medium Siphoria
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='selectedPayment === "siphoria"')
      span.text-sm.font-medium {{ VND(''+100000) }} VND
    //- momo wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='selectPayment("momo")')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-momo?bg')
        span.font-medium Momo
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='selectedPayment === "momo"')
    //- VNPAY wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='selectPayment("vnpay")')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-vnpay?bg')
        span.font-medium VNPay
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='selectedPayment === "vnpay"')
</template>

<script setup lang="ts">
type TPaymentMethod = 'momo' | 'vnpay' | 'siphoria'

const { payForm } = storeToRefs(usePayment())

const selectedPayment = computed(() => payForm.value.pay_method)

function selectPayment(method: TPaymentMethod) {
  payForm.value.pay_method = method
}

const isNotEnoughMoney = computed(() => true)
</script>

<style scoped></style>
