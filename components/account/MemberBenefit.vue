<template lang="pug">
.p-6.bg-ghost-white.rounded-10px
  span.text-20px.font-bold {{$t('account_page.exclusive_benefits')}}
  .grid.grid-cols-2.gap-8.mt-6
    //- Item 1 
    .flex.items-center.gap-3
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:cash-sync')
      span {{$t('account_page.benefits.cashback', {cash:Math.floor(benefit.cashback * 100)})}}
    //- Item 1 
    .flex.items-center.gap-3(v-if='benefit.member_gift')
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:gift-outline')
      span {{$t('account_page.benefits.member_only_gifts')}}
    //- Item 1 
    //- .flex.items-center.gap-3
    //-   .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
    //-     .text-white(class='w-6 h-6 i-mdi:ticket-percent-outline')
    //-   span 1 exclusive quarterly gift
    //- Item 1 
    .flex.items-center.gap-3(v-if='benefit.priority_checkin')
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:star-outline')
      span {{$t('account_page.benefits.priority_check_ins')}}

</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

const { getTypeByRank, generateCard } = useCardMember()

// get user rank
const { account } = storeToRefs(useAccountStore())
const rankId = computed(() => account.value?.user_rank.rank_id)
const card = computed(() => getTypeByRank(rankId.value))

// filter benefit
const benefit = computed(() => generateCard(card.value).benefit)
</script>

<style scoped></style>
