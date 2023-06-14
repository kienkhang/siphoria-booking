<template lang="pug">
FormKit(type='form' v-model:model-value="changeData" name='update_profile_form' id='update_profile_form' @submit="doUpdate" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type="password" label='Old password' name='password' :placeholder='$t("form.signup_form.password_placeholder")' validation="required|length:6")
    FormKit(type="password" label='New password' name='new_password' :placeholder='$t("form.signup_form.password_placeholder")' validation="required|length:6")
      //- Confirm rule: ``name = [field_name]_confirm & validation: confirm
    FormKit(type="password" label='Confirm password' name='new_password_confirm' :placeholder='$t("form.signup_form.confirm_password_placeholder")' validation="required|confirm")
    FormKit(type="submit" name='update' input-class='w-full') Change
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
// UPDATE PASSWORD HANDLER
// Define change password form
const changeData = reactive({
  password: '',
  new_password: ''
})
// Destruct composable useAuth
const { changePassword } = useAuth()
// Destruct api call function
const { executeAPI: executeChange } = changePassword(changeData)
async function doUpdate() {
  try {
    // Call api login
    await executeChange()
    // close modal
    emit('closeModal')
    // show notification
    toast.success('Đổi mật khẩu thành công')
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // show notification
    toast.error(error?.response?.data?.message)
  }
}
</script>

<style scoped></style>
