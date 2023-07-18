<template lang="pug">
.py-4.px-6.bg-white.border.rounded-lg
  FormKit(type='form' :actions='false' @submit='apply')
    .flex.items-end.gap-3
      FormKit(type='text', v-model='form.code' name='voucher', label='Voucher' inner-class='max-w-none')
      FormKit(type="submit" name='apply' input-class='w-full') Apply
</template>

<script setup lang="ts">
import { usersApi } from '~/apis/users'

const route = useRoute()
// get session id
const sessionId = computed(() => route.query?.id as string)
const form = ref({
  session_id: route.query?.id as string,
  code: ''
})

// -------------------------- FETCH CHECKOUT SESSION --------------------------
const { getCheckoutPayments } = usePayment()
// destruct fetch api calling
const { executeApi: fetchPayments } = getCheckoutPayments({ session_id: sessionId.value })

const { execute } = usersApi.applyVoucher(form)

async function executeApi() {
  try {
    await execute({ data: form.value })
    fetchPayments()
  } catch (error) {
    throw error
  }
}

async function apply() {
  await executeApi()
}
</script>

<style scoped></style>
