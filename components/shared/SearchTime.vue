<template lang="pug">
.checkin-out.flex.items-center.gap-1(:class='["px-4 h-full rounded-60px hover:bg-eerie-black/[0.08]",{"shadow-search":isFocus}]' @click='focus = "checkin_checkout"')
  div(class='flex-shrink-0 i-custom-calendar text-crayola w-[18px] h-[18px]')
  span {{stayTimeFormat}}
  .relative
    NDatePicker(
      type='daterange' 
      v-model:value='stayTime' 
      :show='isFocus' 
      placement='bottom'
      :close-on-select='true'
      :update-value-on-close='true'
      :clearable='true'
      class='absolute invisible -translate-x-1/2 left-1/2' 
      )

</template>

<script setup lang="ts">
import { useSearchHotel } from '@/composables/home/useSearchHotel'
// Handler time
// import dayjs handl format time
const dayjs = useDayjs()

const { form, focus } = storeToRefs(useSearchHotel())

const isFocus = computed(() => focus.value === 'checkin_checkout')
// Array range time
const stayTime = ref()
// Exist stayTime -> set from and to
whenever(stayTime, () => {
  form.value.from = dayjs(stayTime.value[0]).format('YYYY-MM-DD')
  form.value.to = dayjs(stayTime.value[1]).format('YYYY-MM-DD')
})
// Show date in search bar
const stayTimeFormat = computed(() => {
  if (stayTime.value) {
    return `${dayjs(stayTime.value[0]).format('DD MMM, YYYY')} - ${dayjs(stayTime.value[1]).format(
      'DD MMM, YYYY'
    )}`
  }
  return `${dayjs().format('DD MMM, YYYY')} - ${dayjs().format('DD MMM, YYYY')}`
})
</script>

<style scoped></style>
