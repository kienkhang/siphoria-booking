<template lang="pug">
.py-4.px-6.rounded-2xl.flex.flex-col.gap-6.bg-white.border.border-platinum
  //- === RATEPLAN INFOMATION ===
  .rateplan-information
    //- Rate plan name and nums of room 
    .flex.items-center.justify-between
      span.text-lg.font-medium {{ ratePlans.name }}
      .flex.items-center.rounded-lg.pl-4.pr-2.py-2.border.cursor-not-allowed.select-none
        span.mr-2 {{ form.n_o_r }} Phòng
        div(:class='["w-4 h-4 i-custom-chevron-down transition-all"]')
    //- Rate plan free
    .flex.items-center.gap-3.mt-4
      .w-6.h-6(class='i-material-symbols:restaurant')
      span {{ freeText }}
  //- === ROOM NIGHT AND RATE PACKAGE INFOMATION ===
  //- Sold out
  .sold-out(v-if='isSoldOut')
    .rounded-md.p-2.px-3.w-max.border.border-red-400.bg-red-100
      span.font-bold.text-pink-600 Sold out
  .no-sold-out.flex.flex-col.gap-6(v-else)
    .prices-and-actions.flex.items-center.justify-between 
      .average-price
        span.text-xs.text-x11 Average Price per Night
        .flex.items-center.gap-2.cursor-pointer(@click='toggleDetail()')
          span.text-xl.font-medium {{ VND( averagePrice + '') }} VND / night
          div(:class='["w-6 h-6 i-custom-chevron-down transition-all", {"rotate-180": showDetail}]' )
      //- Action
      .flex.items-center
        BaseButton.mr-3(class='h-10 px-4 border border-crayola text-crayola rounded-3xl') Add to cart
        BaseButton(class='h-10 px-4 text-white border bg-crayola rounded-3xl') Book now

    //- 
    //- Detail rate-package, show if showDetail
    div(v-if='showDetail')
      .w-full.h-1px.bg-platinum.mb-6
      .flex.items-center.justify-between.gap-3(v-for='rate in detailRate')
        span.font-semibold {{ rate.dayoff }}
        span.font-medium {{ VND( rate.price  + '') }} VND
    .w-full.h-1px.bg-platinum
    .total-price.flex.items-center.justify-between
      span.text-lg.font-medium Total
      span.text-2xl.font-bold.text-green-700 {{ VND( averagePrice + '') }} VND
  
  

  

</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'
interface RatePlan {
  id: string
  name: string
  type: number
  status: number
  free_breakfast: boolean
  free_lunch: boolean
  free_dinner: boolean
  rate_packages: {
    available_at: string
    currency: string
    price: number
    updated_at: number
  }[]
}
const props = defineProps<{
  ratePlans: RatePlan
  roomNights: {
    id: string
    inventory: number
    remain: number
    availability_at: string
    updated_at: number
  }[]
  soldOut: boolean
}>()

// Dayjs composables
const dayjs = useDayjs()

const { form } = storeToRefs(useSearchHotel())

//- Rate plan free
const freeText = computed(() => {
  let result = 'Free '
  if (props.ratePlans.free_breakfast) {
    result += 'breakfast,'
  } else if (props.ratePlans.free_lunch) {
    result += ' lunch,'
  } else if (props.ratePlans.free_dinner) {
    result += ' dinner'
  }
  return result + ' for people'
})

// Total Price
const totalPrice = computed(() => {
  return props.ratePlans.rate_packages.reduce((sumTemp, ratePackage) => {
    return sumTemp + ratePackage.price
  }, 0)
})
// Avarage Price = total / (num of rate)
const averagePrice = computed(() => totalPrice.value / props.ratePlans.rate_packages.length)

// handler sold out show
const isSoldOut = computed(() => {
  return props.soldOut || props.ratePlans.rate_packages.length < 0
})
// show detail rate package
const showDetail = ref(false)
function toggleDetail() {
  showDetail.value = !showDetail.value
}
// Show detail rate
const detailRate = computed(() => {
  return props.ratePlans.rate_packages.map((rp) => {
    return {
      dayoff: dayjs(rp.available_at).format('DD MMM, YYYY'),
      price: rp.price
    }
  })
})
</script>

<style scoped></style>
