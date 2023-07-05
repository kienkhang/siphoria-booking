<template lang="pug">
div(class='sticky z-50 w-full')
  .w-full.bg-green-cyan
    .max-w-7xl.mx-auto.px-4(class='sm:px-6 lg:px-8')
      .flex.items-center.justify-between(class='h-16')
        nuxt-link(class='w-48 h-12 cursor-pointer i-custom-logo-text-nocolor?bg' to='/')
        LazySharedSearchHotelBar
        .flex.items-center.gap-4
          //- Icon.cursor-pointer(name='mdi:cart-outline' color='white' size='24')
          nuxt-link(
            class='flex-shrink-0 w-6 h-6 text-white cursor-pointer select-none i-mdi:cart-outline?mask'
            to='/cart'
            )
          LazySharedLanguageSelect
          //- LazySharedPayment
          AuthButton(v-if='!isLogin')
          LazyAuthProfileDropdown(:account='account' v-else)
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

// Check account exist
const { account } = storeToRefs(useAccountStore())
const isLogin = computed(() => !!account.value)
</script>

<style scoped></style>
