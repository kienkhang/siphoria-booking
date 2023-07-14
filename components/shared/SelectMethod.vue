<template lang="pug">
.w-full.rounded-lg.py-4.px-6.bg-white.border
  .flex.flex-col.gap-4
    span.text-lg.font-bold Payment method
    //- Method
    //- siphoria wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='$emit("select-method","siphoria")' :class='[{"pointer-events-none bg-x11/30 text-x11": !isEnoughMoney }]' v-if='!isTopup')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-logo-origin?bg')
        span.font-medium Siphoria
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='method === "siphoria"')
      span.text-sm.font-medium {{ VND(''+100000) }} VND
    //- momo wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='$emit("select-method","momo")')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-momo?bg')
        span.font-medium Momo
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='method === "momo"')
    //- VNPAY wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='$emit("select-method","vnpay")')
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-vnpay?bg')
        span.font-medium VNPay
        .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='method === "vnpay"')
    //- Stripe wallet
    //- .flex.items-center.justify-between.py-4.h-14.pr-8.pl-4.select-none.cursor-pointer(class='rounded-md hover:bg-platinum' @click='$emit("select-method","stripe")')
    //-   .flex.items-center.gap-4
    //-     .w-6.h-6(class='i-custom-stripe?bg')
    //-     span.font-medium Stripe
    //-     .w-8.h-8(class='text-green-600 i-material-symbols:check-small-rounded' v-if='method === "stripe"')
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    method: TPaymentMethod
    isTopup: boolean
    isEnoughMoney: boolean
  }>(),
  {
    isTopup: false,
    isEnoughMoney: false,
    method: 'momo'
  }
)

defineEmits<{
  (e: 'select-method', value: TPaymentMethod): void
}>()

// Top-up not show siphoria wallet
</script>

<style scoped></style>
