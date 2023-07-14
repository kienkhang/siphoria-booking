<template lang="pug">
NModal(
  :show='show' 
  @mask-click='closeModal'
)
  .bg-white.max-w-2xl.w-full.rounded-xl.h-600px.px-5.py-6.relative.overflow-auto.hide-scroll
    .flex.flex-col.gap-6
      .title
        p.text-2xl.font-bold Upgrade
        p.text-xs have an accumulated annual spending of 1 billion VND to get a free upgrade

      .hr-custom.h-1px.bg-platinum

      .flex.items-center.gap-4
        .w-80px.rounded-md.overflow-hidden.cursor-pointer.relative(class='min-h-50px' v-for='c in upgradableList' :key='c.benefit.id' :style='c.background' @click='chooseBenefit(c.benefit.id)')
          .absolute.w-6.h-6.top-1.right-1(:class='{"i-material-symbols:check-circle-rounded text-crayola": selectedBenefitId === c.benefit.id}')
      
      .flex.justify-between
        .rank-name
          p.rank-name.font-bold.text-lg {{cardBenefit.name}}
          p Annual
        .rank-price
          p.rank-name.font-bold.text-lg {{ VND(''+ cardBenefit.price) }} VND
          p /year
      .flex.flex-col.gap-4
        .flex.items-center.gap-3
          .w-4.h-4(class='i-mdi:check bg-crayola')
          p {{ Math.floor(cardBenefit.cashback * 100) }}% cashback on every purchase
        .flex.items-center.gap-3(v-if='cardBenefit.member_gift')
          .w-4.h-4(class='i-mdi:check bg-crayola')
          p Member-only gifts
        .flex.items-center.gap-3(v-if='cardBenefit.priority_checkin')
          .w-4.h-4(class='i-mdi:check bg-crayola')
          p Priority check-ins


      .hr-custom.h-1px.bg-platinum

      SharedSelectMethod(
        :method='form.method'
        :is-topup='false'
        :is-enough-money='isEnoughMoney'
        @select-method='selectPayMethod'
      )
      BaseButton.mt-6(class='justify-center w-full h-10 px-4 text-white border bg-crayola rounded-3xl' @click="doUpgrade()")
        .w-4.h-4(class='i-custom-load' v-if='isLoading')
        span(v-else) Pay 

    .absolute.top-3.right-3
      button.w-5.h-5(class='cursor-pointer select-none i-mdi:close' @click='closeModal()')
       
</template>

<script setup lang="ts">
import { usersApi } from '~/apis/users'
import { useAccountStore } from '~/stores/account'

type TCard = 'gold' | 'silver' | 'platinum' | 'diamond'
// Define Props
defineProps<{
  show: boolean
}>()
// Define Emits
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void
}>()

function closeModal() {
  emit('update:show', false)
}

// HANDLE PREVIEW CARD
const { account } = storeToRefs(useAccountStore())

const { generateCard, getTypeByRank, benefits } = useCardMember()
// GET card user's type
const cardType = computed(() => getTypeByRank(account.value?.user_rank.rank_id))
const userCard = computed(() => generateCard(cardType.value))
// GET upgradable list
const upgradableList = computed(() => {
  const available = []
  for (const key in benefits.value) {
    if (
      benefits.value[key as keyof typeof benefits.value].cashback > userCard.value.benefit.cashback
    ) {
      available.push(key)
    }
  }
  return available.map((rank) => generateCard(rank as TCard))
})

// Select benefit id
const selectedBenefitId = ref(upgradableList.value[0].benefit.id || benefits.value.diamond.id)
// GET card with benefit id
const cardBenefit = computed(
  () => benefits.value[selectedBenefitId.value as keyof typeof benefits.value]
)

// UPGRADE MEMBER FORM
const form = ref({
  rank_to: cardBenefit.value.rank_id,
  method: 'momo'
})

// SELECT card with benefit id
function chooseBenefit(benefitId: string) {
  selectedBenefitId.value = benefitId
  form.value.rank_to = cardBenefit.value.rank_id
}

function selectPayMethod(_method: TPaymentMethod) {
  form.value.method = _method
}

const isEnoughMoney = computed(() => account.value!.wallet.balance >= cardBenefit.value.price)

const { execute, isLoading, data } = usersApi.updateRank(form)

async function doUpgrade() {
  try {
    execute({ data: form.value })
  } catch (e: any) {
    throw e
  }
}

whenever(data, () => {
  window.location.replace(data.value?.payUrl)
})
</script>

<style scoped></style>
