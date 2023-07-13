<template lang="pug">
NPopover(
  trigger='click'
  :show-arrow='false'
  style='margin: 0; margin-bottom: 16px; padding: 0; border-radius: 16px;'
  :show='isFocus'
)
  template(#trigger)
    .location.flex.items-center.gap-1(:class='["px-4 text-xs h-full rounded-60px max-w-[250px] hover:bg-eerie-black/[0.08]" , {"shadow-search":isFocus}]' @click='focus = "location"' v-auto-animate)
      div(class='flex-shrink-0 i-custom-location text-crayola w-[18px] h-[18px]')
      span.truncate {{ selectedProvince ? selectedProvince.label : "Where are you going ?" }}
      .flex.flex-col.gap-1(v-if='isFocus')
        span.truncate.px-3.font-semibold Location
        input.text-xs.h-max(
          type='text' 
          placeholder='Where are you going?'
          class='py-0 bg-transparent border-0 focus:outline-none focus:ring-0' 
          v-model='search' 
          ref='searchRef'
          )
  .rounded-16px.bg-white.w-640px.max-h-500px.overflow-y-auto.hide-scroll.mt-2.shadow-search(v-auto-animate ref='target')
    .flex.items-center.gap-3.px-8.h-16(class='transition-all hover:bg-eerie-black/[0.08] select-none cursor-pointer' v-for='province in provincesFormated' @click='doSelectProvince(province)')
      div(class='w-6 h-6 i-custom-location')
      span.font-medium {{ province.label }}

</template>

<script setup lang="ts">
import provinces from '@/constants/provinces.json'
import { useSearchHotel } from '~/composables/home/useSearchHotel'

// Composable route
const route = useRoute()
// composable dayjs
const dayjs = useDayjs()
// mapped province
const provinceOptions = provinces.map((p) => {
  return {
    label: p.name,
    value: p.code
  }
})
// search value
const search = ref('')
// auto focus input if mounted
const searchRef = ref()
whenever(searchRef, () => {
  searchRef.value?.focus()
})
// province after search
const provincesFormated = computed(() => {
  if (search.value) {
    return provinceOptions.filter((province) => {
      return search.value
        .toLowerCase()
        .split(' ')
        .every((val) => province.label.toLowerCase().includes(val))
    })
  }
  return provinceOptions
})
// destruct useSearchHotel
const { form, focus } = storeToRefs(useSearchHotel())
// Check route exist city ->
const cityFormUrl = computed(() => route.query?.city as string)
onBeforeMount(() => {
  form.value.city = cityFormUrl.value ? +cityFormUrl.value : form.value.city
})
// isFocus location tab
const isFocus = computed(() => focus.value === 'location')
const selectedProvince = ref<{
  label: string
  value: number
}>(
  provincesFormated.value.find((province) => {
    const cityCode = cityFormUrl.value ? +cityFormUrl.value : form.value.city
    return province.value === cityCode
  })!
)

// select province function
function doSelectProvince(province: { label: string; value: number }) {
  // Reset search
  search.value = ''
  // Set selectedProvice
  selectedProvince.value = province
  // Set selected city
  form.value.city = province.value
  // remove focus
  focus.value = ''
}
</script>

<style scoped></style>
