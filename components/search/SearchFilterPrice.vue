<template lang="pug">
NPopover(
  trigger='click'
  :show-arrow='false'
  style='margin: 0; margin-bottom: 16px; padding: 0; border-radius: 16px;'
  placement='bottom-start'
  v-model:show='show'
)
  template(#trigger)
    .flex.items-center.rounded-lg.px-4.py-2.border.cursor-pointer.select-none
      span.mr-3 {{ $t('search_page.price') }}
      div(:class='["w-4 h-4 i-custom-chevron-down transition-all", {"rotate-180": show}]')
  .rounded-16px.bg-white.w-500px.overflow-y-auto.hide-scroll.mt-2.flex.flex-col.p-5.gap-8.shadow-search(v-auto-animate)
    .flex.flex-col.gap-4
      span.text-lg.font-bold {{ $t('search_page.price') }}
      n-slider( :min='0' :max='30000000' :step='100000' range v-model:value='range')
      .flex.items-center
        SharedPriceInput(v-model:price='minPrice' name='price1')
        .px-2 -
        SharedPriceInput(v-model:price='maxPrice' name='price2')
      .h-1px.bg-platinum
      .flex.items-center.justify-between
        BaseButton.text-red-500(class='px-2 py-1 rounded-md hover:bg-red-500 hover:text-white' @click='clearFilter()') {{ $t('search_page.delete') }}
        .flex.items-center.gap-2
          BaseButton(class='px-3 py-2 text-white rounded-md bg-x11' @click='show = false') {{ $t('search_page.cancel') }}
          BaseButton(class='px-3 py-2 text-white rounded-md bg-vivid' @click="doSearch()") {{ $t('search_page.select') }}

</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

const route = useRoute()
const router = useRouter()

// Show filter pricé
const show = ref(false)

// Handle select range
const range = ref([0, 3000000])

// Handle search with filter
const { form } = storeToRefs(useSearchHotel())
// Define minprice maxprice
const minPrice = ref(0)
const maxPrice = ref(3000000)
// each change range -> set min max
watch(range, () => {
  if (range.value) {
    minPrice.value = Math.min(...range.value)
    maxPrice.value = Math.max(...range.value)
    form.value.min_price = minPrice.value
    form.value.max_price = maxPrice.value
  }
})

watch([minPrice, maxPrice], () => {
  if (range.value) {
    range.value[0] = minPrice.value
    range.value[1] = maxPrice.value
  }
})

// Do search
function doSearch() {
  // Turnoff popup
  show.value = false
  // redirect to search page
  router.push({
    path: '/search',
    query: form.value
  })
}

function clearFilter() {
  form.value.min_price = undefined
  form.value.max_price = undefined
  doSearch()
}
</script>

<style scoped></style>
