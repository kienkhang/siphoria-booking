<template lang="pug">
.flex.gap-6.h-36.justify-between
  LazyAccountMyBookingGallery.w-40.flex-shrink-0(:photos='photos')
  LazyAccountMyBookingInfo(:booking='booking')
  .flex.flex-col.justify-between.items-end
    SharedBookingTime(axis='horizontal', :from='startAt', :to='endAt')
    //- Price
    //- .total-price.text-2xl.font-bold {{ VND(''+totalPrice) }} VND
    //- icon delete
    button.flex.items-center.text-red-600.font-medium.w-max.pr-4.pl-2.py-2.gap-2.select-none.cursor-pointer(
      class='hover:bg-red-500/[0.05] rounded-lg transition-all'
      @click='cancel()'
    )
      div(class='w-18px h-18px i-ph:x')
      span {{$t('account_page.my_bookings.cancel')}}

</template>

<script setup lang="ts">
const props = defineProps<{
  booking: IPayment
}>()

const startAt = computed(() => props.booking.start_at)
const endAt = computed(() => props.booking.end_at)
const photos = computed(() => Image2Array(props.booking.hotel.hotel_photos))

// ========== HANDLE CANCEL BOOKINNG ===============
const paymentId = computed(() => {
  return {
    payment_id: props.booking.id
  }
})
const { cancelBooking } = useCancelBooking()
const { executeApi: callCancel } = cancelBooking(paymentId)

const dialog = useDialog()
function cancel() {
  dialog.info({
    title: 'Thông báo',
    content: 'Thao tác sẽ gửi huỷ yêu cầu đặt phòng. Bạn chắc chắn ?',
    positiveText: 'Đồng ý',
    negativeText: 'Huỷ',
    async onPositiveClick() {
      await callCancel()
      dialog.destroyAll()
    },
    onNegativeClick() {
      dialog.destroyAll()
    }
  })
}
</script>

<style scoped></style>
