<template lang="pug">
NPopover.max-w-192px.w-max(
  trigger='click'
  style='background-color: white; padding: 0px; height: 100%; border-radius: 10px'
  arrow-style='background-color: #fff'
  content-style='overflow: auto; width:100%'
  :show='visible'
  @update:show='updateShow'
  display-directive='show'
  :show-arrow="true"
)
  template(#trigger)
    .flex.items-center.rounded-2xl.py-1.pl-1.pr-4(class='border-2 border-white cursor-pointer select-none focus:outline-none')
      img.rounded-full.w-6.h-6.border.border-white.bg-cover.flex-shrink-0(:src='account?.avatar || appIcon' loading='lazy')
      .ml-2.text-white.overflow-hidden.text-ellipsis.font-semibold.w-max(class='max-w-[150px]') {{account?.first_name}} {{ account?.last_name }}
  .w-full.select-none.flex.flex-col.rounded-10px.overflow-hidden(@click='updateShow(false)')  
    nuxt-link.flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100' to='/account')
      Icon.flex-shrink-0(name='mdi:account' size='16')
      span Tài khoản của tôi
    .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
      Icon.flex-shrink-0(name='mdi:calendar' size='16')
      span Đặt chỗ của tôi
    .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
      Icon.flex-shrink-0(name='mdi:calendar-outline' size='16')
      span Lịch sử đặt phòng
    .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
      Icon.flex-shrink-0(name='mdi:shield-key-outline' size='16')
      span Đổi mật khẩu
    hr
    .flex.items-center.gap-3.py-2.px-4.text-red-500(class='cursor-pointer hover:bg-gray-100' @click='logout')
      Icon.flex-shrink-0(name='mdi:logout' size='16')
      span Đăng xuất 


</template>

<script setup lang="ts">
import type { IUser } from '~/dtos'

import appIcon from '@/assets/images/logo-origin.jpg'

// Define Props
defineProps<{
  account: IUser | undefined
}>()

// --------- POPOVER HANDELER -----------
const visible = ref(false)
// update show popover
const updateShow = (val: boolean) => (visible.value = val)

// logout
const { logout } = useAuth()
</script>

<style scoped></style>
