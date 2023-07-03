<template lang="pug">
.py-4.px-6.rounded-2xl.flex.flex-col.gap-6
  //- === RATEPLAN INFOMATION ===
  .rateplan-information
    //- Rate plan name and nums of room 
    .flex.items-center.justify-between
      span.text-lg.font-medium {{ ratePlans.name }}
      .flex.items-center.rounded-lg.pl-4.pr-2.py-2.border.cursor-pointer.select-none
        span.mr-2 {{ form.n_o_r }}
        div(:class='["w-4 h-4 i-custom-chevron-down transition-all", {"rotate-180": show}]')
    //- Rate plan free
    .flex.items-center.gap-3.mt-4
      i-material-symbols:restaurant.w-6.h-6 {{ freeText }}
  //- === ROOM NIGHT AND RATE PACKAGE INFOMATION ===
  .prices-and-actions.flex.items-center.justify-between 
    //- Price
    .average-price
      span.text-xs.text-x11 Average Price per Night
      .flex.items-center.gap-2
        span.text-xl.font-bold {{averagePrice}} VND
    //- Action
    BaseButton(class='h-10 px-4 border border-crayola text-crayola rounded-3xl') Add to cart
    BaseButton(class='h-10 px-4 text-white border bg-crayola rounded-3xl') Book now

  
  

  

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
  }
}>()

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
// Avarage Price
const averagePrice = computed(() => {
  let total = 0
  // Sum price
  props.ratePlans.rate_packages.forEach((rp) => (total += rp.price))
  return total / props.ratePlans.rate_packages.length
})
</script>

<style scoped></style>
