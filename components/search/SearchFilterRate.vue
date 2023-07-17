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
      span.mr-2 {{ $t('search_page.rate') }}
      div(:class='["w-4 h-4 i-custom-chevron-down transition-all", {"rotate-180": show}]')
  .rounded-16px.bg-white.w-320px.overflow-y-auto.hide-scroll.mt-2.flex.flex-col.p-3.gap-8.shadow-search(v-auto-animate)
    .flex.flex-col.gap-4
      span.text-lg.font-bold Khoảng giá
      n-checkbox-group.flex.flex-col.gap-3(v-model:value="rates")
        n-checkbox( value="2" )
          n-rate(readonly :value='2')
        n-checkbox( value="3" )
          n-rate(readonly :value='3')
        n-checkbox( value="4" )
          n-rate(readonly :value='4')
        n-checkbox( value="5" )
          n-rate(readonly :value='5')
      .h-1px.bg-platinum
      .flex.items-center.justify-between
        BaseButton.text-red-500(class='px-2 py-1 rounded-md hover:bg-red-500 hover:text-white' @click='clearFilter()') Xoá
        .flex.items-center.gap-2
          BaseButton(class='px-3 py-2 text-white rounded-md bg-x11' @click='show = false') Huỷ
          BaseButton(class='px-3 py-2 text-white rounded-md bg-vivid' @click="doSearch()") Chọn


</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

// route composables
const route = useRoute()
const router = useRouter()

const show = ref(false)
// Handle search with filter
const { form } = storeToRefs(useSearchHotel())

// Define rates checkbox group
const rates = ref([])

watch(rates, () => {
  if (rates.value.length > 0) {
    form.value.rate = rates.value.join(',')
  } else {
    form.value.rate = undefined
  }
})

// Do search
function doSearch() {
  // Turnoff popup
  show.value = false
  // redirect to search page
  if (rates.value.length > 0)
    router.push({
      path: '/search',
      query: form.value
    })
}

function clearFilter() {
  form.value.rate = undefined
  doSearch()
}
</script>

<style scoped></style>
