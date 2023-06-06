<template lang="pug">
FormKit(type='form' v-model:model-value='signupData' name='signup_form' id='signup_form' @submit="doSignup()" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='Email' name="email" placeholder='Nhập email của bạn' validation="required|email" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    FormKit(type='text' label='Họ' name="first_name" placeholder='Nhập họ của bạn' validation="required" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    FormKit(type='text' label='Tên' name="last_name" placeholder='Nhập tên của bạn' validation="required" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    FormKit(type="password" label='Mật khẩu' name='password' placeholder='Nhập mật khẩu của bạn' validation="required|length:6" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
      //- Confirm rule: ``name = [field_name]_confirm & validation: confirm
    FormKit(type="password" label='Xác nhận mật khẩu' name='password_confirm' placeholder='Nhập lại mật khẩu của bạn' validation="required|confirm" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    FormKit(type="submit" name='Signup' input-class='w-full') Signup

</template>

<script setup lang="ts">


const signupData = reactive({
  email: '',
  first_name: '',
  last_name: '',
  password: ''
})

const doSignup = async () => {
  console.log('😃😦😧 ~ signupData:', { ...signupData })
}
</script>

<style scoped></style>
