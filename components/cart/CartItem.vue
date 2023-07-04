<template lang="pug">
.flex.gap-6
  figure.h-32.w-32.rounded.overflow-hidden
    nuxt-img(
        :src='defaultPhoto'
        alt="Yeah", 
        class='object-cover object-center w-full h-full',
        loading='lazy'
        decoding='async'
    )
  .time-out-in 

  .flex-1.flex.flex-col

</template>

<script setup lang="ts">
import { defaultPhoto } from '@/constants/index'

const dayjs = useDayjs()
const fromTime = '2023-04-01'
const toTime = '2023-04-04'

const cutFromTime = computed(() => ({
  date: dayjs(fromTime).get('D'),
  month: dayjs(fromTime).get('M') + 1,
  year: dayjs(fromTime).get('y')
}))

const cutToTime = computed(() => ({
  date: dayjs(toTime).get('D'),
  month: dayjs(toTime).get('M') + 1,
  year: dayjs(toTime).get('y')
}))
</script>

<style scoped></style>
