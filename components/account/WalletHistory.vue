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

const { calculatedPaging, page, filter } = storeToRefs(useWallet())
// Destruct get top up history function call
const { getTopUpHistory } = useWallet()
const { executeApi: fetchHistory, isLoading } = getTopUpHistory()

// Dayjs composables
const dayjs = useDayjs()
// Data to fill table
// define type
type TTransactionTable = {
  date: string
  amount: string
  method: string
  currency: string
  status: string
}
// map data
const data = computed<TTransactionTable[]>(() =>
  calculatedPaging.value.data.map((transaction) => {
    return {
      date: dayjs(transaction.created_at).format('YYYY-MM-DD'),
      amount: `${VND('' + transaction.amount)} VND`,
      method: transaction.method,
      currency: transaction.currency,
      status: transaction.status
    }
  })
)

// Trigger when update page
function updatePage() {
  calculatedPaging.value.changeServerPage(() => {
    filter.value.page = calculatedPaging.value.alpha
    fetchHistory()
  })
}

//

onMounted(() => {
  fetchHistory()
})

//
function createColumns(): DataTableColumns<TTransactionTable> {
  return [
    {
      title: 'Top-up Date',
      key: 'date',
      align: 'center'
    },
    {
      title: 'Currency',
      key: 'currency',
      align: 'center'
    },
    {
      title: 'Method',
      key: 'method',
      align: 'center',
      render(row) {
        return h(
          'span',
          {
            class: 'uppercase font-medium'
          },
          row.method
        )
      }
    },
    {
      title: 'Amount',
      key: 'amount',
      align: 'center',
      render(row) {
        return h(
          'span',
          {
            class: 'text-vivid font-semibold'
          },
          row.amount
        )
      }
    },
    {
      title: 'Status',
      key: 'status',
      align: 'center',
      render(row) {
        return h(
          'div',
          {
            class:
              row.status === 'success'
                ? 'w-20 mx-auto px-2 py-1 border border-crayola text-crayola font-medium bg-white rounded-lg select-none'
                : 'w-20 mx-auto px-2 py-1 border border-red-500 text-red-500 font-medium bg-white rounded-lg select-none'
          },
          row.status === 'success' ? 'Success' : 'Fail'
        )
      }
    }
  ]
}

const columns = createColumns()
</script>

<style scoped></style>
