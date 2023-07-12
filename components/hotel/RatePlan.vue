<template lang="pug">
.py-4.px-6.rounded-2xl.flex.flex-col.gap-6.bg-white.border.border-platinum
  //- === RATEPLAN INFOMATION ===
  .rateplan-information
    //- Rate plan name and nums of room 
    .flex.items-center.justify-between
      span.text-lg.font-medium {{ ratePlans.name }}
      .flex.items-center.rounded-lg.pl-4.pr-2.py-2.border.cursor-not-allowed.select-none
        span.mr-2 {{ $t('hotel_detail_page.room_quantity', { count: `${searchForm.n_o_r}` }) }}
        div(:class='["w-4 h-4 i-custom-chevron-down transition-all"]')
    //- Show remain
    .flex.items-center.gap-2.mt-4(v-if='!isSoldOut')
      .w-6.h-6(class='i-custom-logo-origin?bg')
      span.text-crayola.font-medium.animate-pulse Còn lại {{ countRemain }} phòng
      
  //- === ROOM NIGHT AND RATE PACKAGE INFOMATION ===
  //- Sold out
  .sold-out(v-if='isSoldOut')
    .rounded-md.p-2.px-3.w-max.border.border-red-400.bg-red-100
      span.font-bold.text-pink-600  {{ $t('hotel_detail_page.sold_out') }}
  .no-sold-out.flex.flex-col.gap-6.hide-scroll(v-auto-animate v-else)
    .prices-and-actions.flex.items-center.justify-between 
      .average-price
        span.text-xs.text-x11 {{ $t('hotel_detail_page.average_price_per_night') }}
        .flex.items-center.gap-2.cursor-pointer(@click='toggleDetail()')
          span.text-xl.font-medium {{ VND( averagePrice + '') }} VND / {{ $t('hotel_detail_page.night') }}
          div(:class='["w-6 h-6 i-custom-chevron-down transition-all", {"rotate-180": showDetail}]' )
      //- Action
      .flex.items-center
        BaseButton.mr-3(class='h-10 px-4 border border-crayola text-crayola rounded-3xl' @click="addToCart()") {{ $t('hotel_detail_page.add_to_cart') }}
        BaseButton(class='h-10 px-4 text-white border bg-crayola rounded-3xl' @click="bookNow()") {{ $t('hotel_detail_page.book_now') }}

    //- 
    //- Detail rate-package, show if showDetail
    div(v-if='showDetail')
      .w-full.h-1px.bg-platinum.mb-6
      .flex.items-center.justify-between(v-for='rate in detailRate' class='space-y-3')
        span.font-semibold {{ rate.dayoff }}
        span.font-medium {{ VND( rate.price  + '') }} VND
    .w-full.h-1px.bg-platinum
    .total-price.flex.items-center.justify-between
      span.text-lg.font-medium {{ $t('hotel_detail_page.total') }}
      span.text-2xl.font-bold.text-green-700 {{ VND( totalPrice + '') }} VND
  
  

  

</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'
import { useAuthStore } from '~/stores/auth'
import { useCart } from '@/composables/cart/useCart'

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
  roomId: string
}>()

// Route & Router Composables
const route = useRoute()
const router = useRouter()
// Dayjs composables
const dayjs = useDayjs()

// ==== HANDLER SHOW SOLD OUT ====
const isSoldOut = computed(() => {
  return props.soldOut || props.ratePlans.rate_packages.length <= 0
})

// ==== HANDLER COUNT REMAIN ====
const countRemain = computed(() => {
  const remains = props.roomNights.map((rn) => rn.remain)
  return Math.min(...remains)
})

// ===== HANDLER SHOW INFO RATE PLAN ====
// - Rate plan free
const freeText = computed(() => {
  let result = 'Free '
  if (props.ratePlans.free_breakfast) result += 'breakfast,'
  else if (props.ratePlans.free_lunch) result += ' lunch,'
  else if (props.ratePlans.free_dinner) result += ' dinner'

  // concat string to show free text
  return `${result} for people`
})

// Total Price
const totalPrice = computed(() => {
  return props.ratePlans.rate_packages.reduce((sumTemp, ratePackage) => {
    return sumTemp + ratePackage.price
  }, 0)
})
// Avarage Price = total / (num of rate)
const averagePrice = computed(() =>
  Math.ceil(totalPrice.value / props.ratePlans.rate_packages.length)
)

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

// =========== HANDLER ADD TO CART AND PAYMENTS ========
// Destruct useAuth
const { openAuthModal } = useAuthStore()
const { isAuthorized, account } = storeToRefs(useAuthStore())

// search hotel form, includes: from date, to date, number of guests
const { form: searchForm } = storeToRefs(useSearchHotel())
// Get hotel id from url
const hotelId = computed(() => route.params?.id as string)
// Define add to cart & booking form
const addToCartForm = computed(() => ({
  from_date: searchForm.value.from,
  hotel_id: hotelId.value,
  number_of_adults: searchForm.value.n_o_a,
  number_of_children: searchForm.value.n_o_c,
  number_of_rooms: searchForm.value.n_o_r,
  rate_plan_id: props.ratePlans.id,
  room_type_id: props.roomId,
  to_date: searchForm.value.to,
  userId: account.value?.id
}))

// Destruct useAdd and useBook from useCart
const { addToCart: add, bookNow: book } = useCart()
const { executeApi: callAdd } = add(addToCartForm)
const { executeApi: callBook, data: sessionId } = book(addToCartForm)

// =========== ADD TO CART =============
async function addToCart() {
  // If not authoried -> go to login
  if (!isAuthorized.value) {
    openAuthModal()
    return
  }
  await callAdd()
  // Else -> Add to cart
}

// ============ BOOK NOW ==============
async function bookNow() {
  // If not authoried -> go to login
  if (!isAuthorized.value) {
    openAuthModal()
    return
  }
  await callBook()
  // Else -> redirect to payment
}

// when user choosen book-now -> receive sessionId from response => redirect to checkout page
whenever(sessionId, () => {
  router.push({ name: 'checkout', query: { id: sessionId.value } })
})
</script>

<style scoped></style>
