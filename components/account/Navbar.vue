<template lang="pug">
.w-full.flex.flex-col.px-8.shadow-bar.rounded-2xl.select-none.bg-white
  nuxt-link.flex.items-center.gap-4.py-8(v-for='nav in navbars' :class='["cursor-pointer border-b border-platinum last:border-0",{"text-vivid":nav.pathName === currentPath},{"text-x11":nav.pathName !== currentPath}]' :to='nav.pathName')
    .nav-icon(:class='[nav.iconClass]')
    span.font-semibold.text-lg {{ $t(`account_page.navbar.${nav.titleKey}`) }}


</template>

<script setup lang="ts">
// use route
const route = useRoute()

const currentPath = computed(() => route.path)

const navbars = [
  {
    id: 'acf75bc4-10e1-44cf-aebf-1b902fba6644',
    pathName: '/account',
    titleKey: 'profile',
    iconClass: 'i-mdi:account-outline?mask w-6 h-6 flex-shrink-0'
  },
  {
    id: 'dea25f9c-da4d-4f27-9a65-d2eefaee7a9f',
    pathName: '/account/wallet',
    titleKey: 'my_wallet',
    iconClass: 'i-mdi:wallet-outline?mask w-6 h-6 flex-shrink-0'
  },
  {
    id: 'c910d903-7817-45eb-83bb-7067be258161',
    pathName: '/account/booking',
    titleKey: 'my_bookings',
    iconClass: 'i-mdi:calendar?mask w-6 h-6 flex-shrink-0'
  },
  {
    id: 'e0de4736-807b-4dcc-bdbf-30d95718ba52',
    pathName: '/account/history',
    titleKey: 'my_history',
    iconClass: 'i-mdi:calendar-outline?mask w-6 h-6 flex-shrink-0'
  }
]
</script>

<style scoped></style>
