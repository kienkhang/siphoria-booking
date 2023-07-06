<template lang="pug">
FormKit(type='form' v-model:model-value='signupData' name='signup_form' id='signup_form' @submit="doSignup()" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='Email' name="email" :placeholder='$t("form.signup_form.email_placeholder")' validation="required|email")
    FormKit(type='text' :label='$t("form.signup_form.first_name")' name="first_name" :placeholder='$t("form.signup_form.first_name_placeholder")' validation="required")
    FormKit(type='text' :label='$t("form.signup_form.last_name")' name="last_name" :placeholder='$t("form.signup_form.last_name_placeholder")' validation="required")
    FormKit(type="password" :label='$t("form.signup_form.password")' name='password' :placeholder='$t("form.signup_form.password_placeholder")' validation="required|length:6")
      //- Confirm rule: ``name = [field_name]_confirm & validation: confirm
    FormKit(type="password" :label='$t("form.signup_form.confirm_password")' name='password_confirm' :placeholder='$t("form.signup_form.confirm_password_placeholder")' validation="required|confirm")
    FormKit(type="submit" name='Signup' input-class='w-full') {{$t("form.signup_form.signup")}}

</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

// TOAST HANDLER
const toast = useToast()
// Signup HANDLER
const signupData = reactive({
  email: '',
  first_name: '',
  last_name: '',
  password: ''
})

const { signup } = useAuth()
const { executeAPI } = signup(signupData)

async function doSignup() {
  try {
    // Call api signup
    await executeAPI()
    // close modal
    emit('closeModal')
    // toast message
    toast.add({
      id: 'auth__signup',
      title: 'Thông báo',
      description: 'Đăng ký thành công, vui lòng kiểm tra email xác thực',
      color: 'primary',
      timeout: 8000
    })
  } catch (error: any) {
    // close modal
    emit('closeModal')
    // toast error
    toast.add({
      id: 'auth__signup',
      title: 'Có lỗi xảy ra',
      description: 'Đăng ký thất bại',
      color: 'rose'
    })
  }

  // emit('closeModal')
}
</script>

<style scoped></style>
