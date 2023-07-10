<template lang="pug">
.p-8.bg-ghost-white.rounded-xl
  .flex.items-center.justify-between
    .flex.items-center.gap-2
      .w-10.h-10.flex-shrink-0(class='i-mdi:wallet-outline')
      .wallet
        p.text-lg.font-bold My wallet
        p.text-sm Total Balance
    .total-balance.text-2xl.font-bold {{ VND('' + balance) }} VND
  .mt-6.flex.items-center.gap-5
    BaseButton(
      class='gap-2 py-2 pl-3 pr-5 bg-white border rounded-lg border-vivid text-vivid hover:bg-vivid hover:text-white'
      @click='$emit("top-up")'
    ) 
      .w-6.h-6(class='i-mdi:wallet-plus')
      span Top Up
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

defineEmits<{
  (e: 'top-up'): void
}>()

const { account } = storeToRefs(useAccountStore())

const balance = computed(() => account.value?.wallet.balance)
</script>

<style scoped></style>
