<template lang="pug">
.flex.gap-6
  figure.h-32.w-32.rounded.overflow-hidden
    nuxt-img(
        :src='photo[0] || defaultPhoto'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
    )
  .time-out-in.flex-1
    .flex.gap-6.h-full
      SharedBookingTime(axis='vertical', :from='fromTime', :to='toTime')
      .flex-1
        LazyCartInfo(:cart='cart')
        

</template>

<script setup lang="ts">
import { defaultPhoto } from '@/constants/index'
import type { ICart } from '~/dtos/cart'

const props = defineProps<{
  cart: ICart
}>()

const dayjs = useDayjs()

const fromTime = computed(() => props.cart.start_at)
const toTime = computed(() => props.cart.end_at)

const photo = computed(() => Image2Array(props.cart.hotel.hotel_photos))

const cutFromTime = computed(() => ({
  date: dayjs(fromTime.value).format('DD'),
  month: dayjs(fromTime.value).format('MMMM'),
  year: dayjs(fromTime.value).format('YYYY')
}))

const cutToTime = computed(() => ({
  date: dayjs(toTime.value).format('DD'),
  month: dayjs(toTime.value).format('MMMM'),
  year: dayjs(toTime.value).format('YYYY')
}))
</script>

<style scoped></style>
