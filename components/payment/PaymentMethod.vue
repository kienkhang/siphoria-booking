<template lang="pug">
.w-full.rounded-lg.py-4.px-6.bg-white.border
  .flex.flex-col.gap-4
    span.text-lg.font-bold Contact details 
    //- Method
    //- siphoria wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-logo-origin?bg')
        span.font-medium Siphoria
    //- momo wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-momo?bg')
        span.font-medium Momo
    //- VNPAY wallet
    .flex.items-center.justify-between.py-4.h-14.pr-8
      .flex.items-center.gap-4
        .w-6.h-6(class='i-custom-logo-origin')
        span.font-medium VNPay
</template>

<script setup lang="ts"></script>

<style scoped></style>
