<template lang="pug">
.w-full.p-8.rounded-2xl.shadow-bar.bg-white(v-auto-animate)
  AccountWalletTab.mb-7(
    :tab='selectedTab'
    @change-tab='changeTab'
  )
  .overview-tab(v-if='selectedTab === "overview"')
    AccountWalletBalance(@top-up="changeTab('top-up')")
  .topup-tab(v-else-if='selectedTab === "top-up"')
    AccountWalletTopUp
  .topup-history-tab(v-else-if='selectedTab === "history"')
    AccountWalletHistory

</template>

<script setup lang="ts">
// select function
const selectedTab = ref('overview')
// every change tab -> fetch api
function changeTab(tab: string) {
  selectedTab.value = tab
}
</script>

<style scoped></style>
