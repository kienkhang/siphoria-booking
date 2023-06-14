<template lang="pug">
FormKit(type='form' v-model:model-value="updateData" name='update_profile_form' id='update_profile_form' @submit="doUpdate" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='First name' name="first_name" :placeholder='"First name"' validation="required")
    FormKit(type='text' label='Last name' name="last_name" :placeholder='"Last name"' validation="required")
    FormKit(type='text' label='Phone' name="phone" :placeholder='"Phone"' validation="required")
    FormKit(type="submit" name='update' input-class='w-full') Update
    //- FormKit(type='text' label='First name' name="first_name" :placeholder='$t("form.login_form.email_placeholder")' validation="required")
    //- FormKit(type='text' label='Last name' name="last_name" :placeholder='$t("form.login_form.email_placeholder")' validation="required")
    //- FormKit(type='text' label='Phone' name="phone" :placeholder='$t("form.login_form.email_placeholder")' validation="required")
    //- FormKit(type="submit" name='login' input-class='w-full') {{$t('form.login_form.login')}}


</template>

<script setup lang="ts">
// Define Emits
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

// TOAST HANDLER
const toast = useMessage()
// UPDATE PROFILE HANDLER
// Define update profile form
const updateData = reactive({
  first_name: '',
  last_name: '',
  phone: ''
})
// Destruct composable useAuth
const { updateProfile } = useAuth()
// Destruct api call function
const { executeAPI: executeUpdate } = updateProfile(updateData)
async function doUpdate() {
  try {
    // Call api login
    await executeUpdate()
    // close modal
    emit('closeModal')
    // show notification
    toast.success('Thay đổi thông tin thành công')
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.error(error?.response?.data?.message)
  }
}
</script>

<style scoped></style>
