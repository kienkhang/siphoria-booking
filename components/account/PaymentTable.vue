<template lang="pug">
div
  NDataTable(
    :columns='columns',
    :data='data',
    :bordered='true',
    :loading='isLoading'
  )
  .flex.flex-row-reverse.pt-6 
    NPagination(
      v-model:page='page'
      :page-count='calculatedPaging?.total_pages'
      @update:page='updatePage'
    )

</template>

<script setup lang="ts">
import { type DataTableColumns } from 'naive-ui'
type PaymentTable = {
  date: string
  booking_id: string
  hotel: string
  stay: string
  price: string
}
// dayjs composable
const dayjs = useDayjs()
// useMessage
const mess = useMessage()

// define columns name
// date, booking_id, hotel, checkin, checkout, value, action
function createColumns({
  viewDetail,
  copyBooking
}: {
  viewDetail: (bookingId: string) => void
  copyBooking: (bookingId: string) => void
}): DataTableColumns<PaymentTable> {
  return [
    {
      title: 'Booking Date',
      key: 'date'
      // align: 'center'
    },
    {
      title: 'Booking ID',
      key: 'booking_id',
      ellipsis: true,
      render(row) {
        return h(
          'div',
          {
            class: 'flex items-center gap-2'
          },
          [
            // Booking id
            h(
              'span',
              {
                class: 'truncate'
              },
              row.booking_id
            ),
            // Icon copy
            h('div', {
              class: 'w-4 h-4 i-ph:copy flex-shrink-0 cursor-pointer',
              onClick: () => copyBooking(row.booking_id)
            })
          ]
        )
      }
      // align: 'center'
    },
    {
      title: 'Hotel',
      key: 'hotel'
      // align: 'center'
    },
    {
      title: 'Stay',
      key: 'stay'
      // align: 'center'
    },
    {
      title: 'Price',
      key: 'price',
      // align: 'center'
      render(row) {
        return h(
          'span',
          {
            class: 'text-vivid font-semibold'
          },
          row.price
        )
      }
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render(row) {
        return h(
          'button',
          {
            class:
              'text-sm px-4 py-1 rounded-lg border border-platinum active:focus:scale-95 hover:bg-crayola hover:text-white transition-all',
            onClick: () => viewDetail(row.booking_id)
          },
          'Details'
        )
      }
    }
  ]
}

// Destruct function call booking history data
const { getBookingHistory } = useBookingHistory()
const { executeApi: fetchPayments, isLoading } = getBookingHistory()
// Destruct data to fill the table
const { calculatedPaging, filter, page } = storeToRefs(useBookingHistory())
// data filled
const data = computed(() =>
  calculatedPaging.value.data.map((payment) => {
    return {
      date: dayjs(payment.updated_at).format('YYYY-MM-DD'),
      booking_id: payment.id,
      hotel: payment.hotel.name,
      stay: `${dayjs(payment.start_at).format('YYYY-MM-DD')} - ${dayjs(payment.end_at).format(
        'YYYY-MM-DD'
      )}`,
      // checkout: dayjs(payment.end_at).format('YYYY-MM-DD'),
      price: `${VND('' + payment.total_price)} VND`
    }
  })
)
// table state is 'history' | 'refunded' | 'cancel'
const tableState = computed(() => filter.value.state)
// each table state change -> reset page to 1
watch(tableState, () => {
  page.value = 1
})
// ---- HANDLE PAGING HOTEL ----
const updatePage = async () => {
  calculatedPaging.value.changeServerPage(() => {
    filter.value.page = calculatedPaging.value.alpha
    fetchPayments()
  })
}

// destruct useClipboard
const { copy } = useClipboard()
// create columns
const columns = createColumns({
  viewDetail(bookingId) {
    console.log('pay', bookingId)
  },
  copyBooking(bookingId) {
    copy(bookingId)
    mess.success('Copied')
  }
})
</script>

<style scoped></style>
