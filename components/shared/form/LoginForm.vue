<template lang="pug">
FormKit(type='form' v-model:model-value="loginData" name='login_form' id='login_form' @submit="doLogin()" :actions='false' style='width: 100%; padding: 16px;')
  .flex.flex-col.gap-2
    FormKit(type='text' label='Email' name="email" placeholder='Nhập email của bạn' validation="required|email" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    FormKit(type="password" label='Password' name='password' placeholder='Nhập mật khẩu của bạn' validation="required|length:1" input-class='transition-all border-2 rounded-lg border-x11 focus:border-crayola focus:shadow-input placeholder-x11')
    .flex(class='flex-row-reverse')
      .forgot-pass.font-medium.capitalize.cursor-pointer.select-none.text-crayola(class='hover:opacity-90') Forget Password?
    FormKit(type="submit" name='login' input-class='w-full') Login


</template>

<script setup lang="ts">


const loginData = reactive({
  email: '',
  password: ''
})

const doLogin = async () => {
  console.log('😃😦😧 ~ loginData:', { ...loginData })
}
</script>

<style scoped></style>
