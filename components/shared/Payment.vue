<template lang="pug">
BaseButton(class='gap-3 p-3 font-medium text-white bg-pink-600' @click='doPaymentWithMomo')
  //- .w-5.h-5(class='i-custom-vietnam?bg')
  span Momo
</template>

<script setup lang="ts">
import { paymentApi } from '@/apis/payment'
const { execute, isFinished, data } = paymentApi.withMomo()

function doPaymentWithMomo() {
  execute()
}

until(isFinished)
  .toBeTruthy()
  .then(() => {
    const redirectUrl = data.value.payUrl
    window.location.replace(redirectUrl)
  })

// const kkk = {
//   status_code: 200,
//   message: 'Tạo thanh toán thành công',
//   data: {
//     amount: 50000,
//     message: 'Thành công.',
//     orderId: 'MOMO_3c17e7fa-135d-11ee-b2c3-2604b7452afa',
//     partnerCode: 'MOMOQDD420220927',
//     payUrl:
//       'https://test-payment.momo.vn/v2/gateway/pay?t=TU9NT1FERDQyMDIyMDkyN3xNT01PXzNjMTdlN2ZhLTEzNWQtMTFlZS1iMmMzLTI2MDRiNzQ1MmFmYQ',
//     requestId: '67a069931000076',
//     responseTime: 1687700167542,
//     resultCode: 0
//   }
// }
</script>

<style scoped></style>
