<template lang="pug">
div(class='fixed z-50 w-full')
  .w-full.bg-green-cyan
    .max-w-7xl.mx-auto.px-4(class='sm:px-6 lg:px-8')
      .flex.items-center.justify-between(class='h-16')
        nuxt-link(class='w-48 h-12 cursor-pointer i-custom-logo-text-nocolor?bg' to='/')
        SharedSearchHotelBar
        .flex.items-center.gap-4
          //- Icon.cursor-pointer(name='mdi:cart-outline' color='white' size='24')
          div(class='flex-shrink-0 w-8 h-8 text-white cursor-pointer select-none i-mdi:cart-outline?mask')
          SharedLanguageSelect
          //- LazySharedPayment
          AuthButton(v-if='!isLogin')
          AuthProfileDropdown(:account='account' v-else)
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

// Check account exist
const { account } = storeToRefs(useAccountStore())
const isLogin = computed(() => !!account.value)
</script>

<style scoped></style>
