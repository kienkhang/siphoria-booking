<template lang="pug">
.w-full
  .w-full.p-8.rounded-2xl.shadow-bar.bg-white
    //- Title & Upgrade button
    .flex.justify-between.items-center
      span.text-4xl.font-bold Membership Card
      BaseButton.px-4.py-2.border.border-vivid.text-vivid.rounded-lg(class='hover:bg-vivid hover:text-white' @click='openUpgrade')
        span.font-medium Upgrade
      AccountUpgradeCardModal(
        v-model:show='showUpgrade'
      )
    //- membership card
    .flex.items-center.gap-6.mt-6
      AccountMemberCard(:user='user').flex-1
      AccountMemberBenefit.flex-1


  .w-full.p-8.rounded-2xl.shadow-bar.bg-white.mt-4
    //- Title & Update Infomation button
    .flex.justify-between.items-center
      span.text-4xl.font-bold Personal information
      BaseButton.px-4.py-2.border.border-vivid.text-vivid.rounded-lg(class='hover:bg-vivid hover:text-white' @click='showUpdate = true')
        span.font-medium Update profile
      AccountUpdateModal(v-model:show='showUpdate')
    //- Member information
    .mt-6
      AccountDetailInfo
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

// Update
const showUpdate = ref(false)
// show upgrade card modal
const showUpgrade = ref(false)

function openUpgrade() {
  showUpgrade.value = true
}

// Show Card by account
const { account } = storeToRefs(useAccountStore())
const user = computed(() => {
  return {
    rankId: account.value?.user_rank.id,
    name: account.value?.full_name,
    phone: account.value?.phone,
    begin: account.value?.user_rank.begin_at,
    expired: account.value?.user_rank.expired_at
  }
})
</script>

<style scoped></style>
