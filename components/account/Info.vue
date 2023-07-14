<template lang="pug">
.w-full
  .w-full.h-288px.relative(:style='{background: `url("${bgImg}") no-repeat center/cover`}')
    .max-w-7xl.absolute(class='w-full -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-2/4')
      div(class='w-1/4')
        SharedAvatar.mx-auto
  .max-w-7xl.w-full.flex.justify-center.mx-auto
    div(class='w-1/4')
    .mt-5.mb-9(class='w-3/4')
      span.text-4xl.font-bold {{account?.first_name}} {{account?.last_name}}
      .mt-2
        span.flex.items-center.select-none 
          span {{$t('account_page.membership_rank')}} &nbsp
          span.text-vivid.font-bold.cursor-pointer(v-if='rank')  {{$t(`account_page.${rank.id}`)}}
    
  
</template>

<script setup lang="ts">
import { useAccountStore } from '~/stores/account'
import _values from 'lodash-es/values'
import bgImg from '@/assets/images/phuquoc_resize.jpg'

// destruct account store
const { account } = storeToRefs(useAccountStore())

const { benefits } = useCardMember()
const rank = computed(() => {
  const arr = _values(benefits.value)
  return arr.find((benefit) => benefit.rank_id === account.value?.user_rank.rank_id)
})
</script>

<style scoped></style>
