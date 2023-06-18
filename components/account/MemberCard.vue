<template lang="pug">
.p-6.rounded-20px.flex.flex-col.bg-cover.select-none(class='min-h-240px' :style='cardBg')
  .flex.justify-between.items-center
    div(class='i-custom-logo-text-nocolor?bg h-14 w-28')
    span.font-bold.uppercase(:style='cardText') {{cardType}}
  .flex-1.flex.flex-col.justify-center.font-bold(:style='cardText')
    span.uppercase {{account?.full_name}}
    span {{  account?.phone }}
  .flex.items-center.gap-4
    .flex.flex-col.gap-2px 
      span.uppercase.font-bold(:style='cardText') MEMBER SINCE
      span(:style='cardText') {{beginAt}}
    .flex.flex-col.gap-2px 
      span.uppercase.font-bold(:style='cardText') valid thru
      span(:style='cardText') {{expiredAt}}


</template>

<script setup lang="ts">
// defineProps<{
//   card: any
// }>()
import platinumImg from '@/assets/images/card/platinum.png'
import diamondImg from '@/assets/images/card/diamond.png'
import goldImg from '@/assets/images/card/gold.png'
import silverImg from '@/assets/images/card/silver.png'
import { useAccountStore } from '~/stores/account'

// Define 4 types background
const platinumBg = {
  background: `url('${platinumImg}') no-repeat center/cover`
}
const diamondBg = {
  background: `url('${diamondImg}') no-repeat center/cover`
}
const goldBg = {
  background: `url('${goldImg}') no-repeat center/cover`
}
const silverBg = {
  background: `url('${silverImg}') no-repeat center/cover`
}

// Define 3 types text
const normalText = {
  color: 'white'
}

const platinumText = {
  background:
    'linear-gradient(270deg, #CFCFCF 0%, #FFFFFF 23%, #C6C6C6 41%, #E4E4E4 59%, #989898 77%, #9E9E9E 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  'background-clip': 'text',
  'text-fill-color': 'transparent',
  'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
}
const diamondText = {
  background:
    'linear-gradient(270deg, #FBC926 -12.39%, #E7D28E -12.38%, #C3922E 128.28%, #DBCEA5 128.29%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  'background-clip': 'text',
  'text-fill-color': 'transparent',
  'text-shadow': '0px 0px 5px rgba(0, 0, 0, 0.25)'
}

// Define card type
const cardType = ref<'gold' | 'silver' | 'platinum' | 'diamond'>('diamond')

// calculate card background with card type
const cardBg = computed(() => {
  switch (cardType.value) {
    //  is gold card
    case 'gold':
      return goldBg
    //  is silver card
    case 'silver':
      return silverBg
    //  is platinum card
    case 'platinum':
      return platinumBg
    //  is diamond card
    case 'diamond':
      return diamondBg
    // default return silver
    default:
      return silverBg
  }
})
// calculate card text base card type
const cardText = computed(() => {
  switch (cardType.value) {
    //  is gold or silver card
    case 'gold':
    case 'silver':
      return normalText
    //  is platinum card
    case 'platinum':
      return platinumText
    //  is diamond card
    case 'diamond':
      return diamondText
    // default return normal text
    default:
      return normalText
  }
})

// =================== GET RANK FROM ACCOUNT ==============
// Handler dayjs
const dayjs = useDayjs()
const { account } = storeToRefs(useAccountStore())

const userRank = computed(() => account.value?.user_rank)
const beginAt = computed(() => dayjs(userRank.value?.begin_at).format('MMM DD, YYYY'))
const expiredAt = computed(() => dayjs(userRank.value?.expired_at).format('MMM DD, YYYY'))

watch(userRank, () => {
  switch (userRank.value?.rank.id) {
    case 'f4c363f1-a942-4f39-8f92-9ae93ed42966':
      cardType.value = 'silver'
      break
    case 'e4aabc1c-dd29-47c3-84b9-f56d0cb72e66':
      cardType.value = 'gold'
      break
    case 'e39df027-d9e9-49a8-aa4b-b7047266f02d':
      cardType.value = 'platinum'
      break
    case 'f6bf35e5-73a7-45c9-8c61-ae6c6a40e912':
      cardType.value = 'diamond'
      break

    default:
      cardType.value = 'silver'
      break
  }
})
</script>

<style scoped></style>
