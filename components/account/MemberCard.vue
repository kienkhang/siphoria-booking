<template lang="pug">
.p-6.rounded-20px.flex.flex-col.bg-cover.select-none(class='min-h-240px' :style='cardGenerated.background')
  .flex.justify-between.items-center
    div(class='i-custom-logo-text-nocolor?bg h-14 w-28')
    span.font-bold.uppercase(:style='cardGenerated.text') {{ card }}
  .flex-1.flex.flex-col.justify-center.font-bold(:style='cardGenerated.text')
    span.uppercase {{user.name}}
    span {{  user.phone }}
  .flex.items-center.gap-4
    .flex.flex-col.gap-2px 
      span.uppercase.font-bold(:style='cardGenerated.text') MEMBER SINCE
      span(:style='cardGenerated.text') {{beginAt}}
    .flex.flex-col.gap-2px 
      span.uppercase.font-bold(:style='cardGenerated.text') valid thru
      span(:style='cardGenerated.text') {{expiredAt}}


</template>

<script setup lang="ts">
type TCard = 'gold' | 'silver' | 'platinum' | 'diamond'
const props = defineProps<{
  user: {
    rankId: string
    name: string
    phone?: string
    begin: string
    expired: string
  }
}>()

// composables dayjs
const dayjs = useDayjs()

// Destruct useCardMember
const { generateCard, getTypeByRank } = useCardMember()
// Get type of card by rank id
const card = computed(() => getTypeByRank(props.user.rankId))
// Generate background and card text
const cardGenerated = computed(() => generateCard(card.value))

// =================== GET RANK FROM ACCOUNT ==============

const beginAt = computed(() => dayjs(props.user.begin).format('MMM DD, YYYY'))
const expiredAt = computed(() => dayjs(props.user.expired).format('MMM DD, YYYY'))
</script>

<style scoped></style>
