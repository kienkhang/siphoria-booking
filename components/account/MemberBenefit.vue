<template lang="pug">
.p-6.bg-ghost-white.rounded-10px
  span.text-20px.font-bold Exclusive Benefits
  .grid.grid-cols-2.gap-8.mt-6
    //- Item 1 
    .flex.items-center.gap-3
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:cash-sync')
      span {{benefit?.cashback}}% cashback on every purchase
    //- Item 1 
    .flex.items-center.gap-3(v-if='benefit?.member_gift')
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:gift-outline')
      span Member-only gifts
    //- Item 1 
    //- .flex.items-center.gap-3
    //-   .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
    //-     .text-white(class='w-6 h-6 i-mdi:ticket-percent-outline')
    //-   span 1 exclusive quarterly gift
    //- Item 1 
    .flex.items-center.gap-3(v-if='benefit?.priority_checkin')
      .flex.justify-center.items-center.flex-shrink-0.bg-vivid.text-white.rounded-full(class='w-9 h-9 bg-vivid')
        .text-white(class='w-6 h-6 i-mdi:star-outline')
      span Priority check-ins

</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

const benefits = ref([
  {
    id: 'silver',
    database_id: 'f4c363f1-a942-4f39-8f92-9ae93ed42966',
    name: 'Silver',
    cashback: 1,
    member_gift: false,
    priority_checkin: false
  },
  {
    id: 'gold',
    name: 'Gold',
    database_id: 'e4aabc1c-dd29-47c3-84b9-f56d0cb72e66',
    cashback: 3,
    member_gift: true,
    priority_checkin: false
  },
  {
    id: 'platinum',
    name: 'Platinum',
    database_id: 'e39df027-d9e9-49a8-aa4b-b7047266f02d',
    cashback: 5,
    member_gift: true,
    priority_checkin: false
  },
  {
    id: 'diamond',
    name: 'Diamond',
    database_id: 'f6bf35e5-73a7-45c9-8c61-ae6c6a40e912',
    cashback: 7,
    member_gift: true,
    priority_checkin: true
  }
])

// get user rank
const { account } = storeToRefs(useAccountStore())
const rankId = computed(() => account.value?.user_rank.rank_id)
// filter benefit
const benefit = computed(() => benefits.value.find((card) => card.database_id === rankId.value))
</script>

<style scoped></style>
