<template lang="pug">
UPopover(mode='click' class='h-8' :close-delay='50')
  .flex.items-center.rounded-2xl.py-1.pl-1.pr-4(class='border-2 border-white focus:outline-none')
    img.rounded-full.w-6.h-6.border.border-white.bg-cover.flex-shrink-0(src='https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg' loading='lazy')
    .ml-2.text-white.overflow-hidden.text-ellipsis.font-semibold.w-max(class='max-w-[150px]') {{account?.full_name}}
  template(#panel='{ close }')
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
        span Tài khoản của tôi
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
        span Đặt chỗ của tôi
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
        span Lịch sử đặt phòng
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
        span Đổi mật khẩu
      .flex.items-center.gap-3.py-2.px-4(class='cursor-pointer hover:bg-gray-100')
        span Đăng xuất 

</template>

<script setup lang="ts">
import type { IUser } from '~/dtos'

defineProps<{
  account: IUser | undefined
}>()
</script>

<style scoped></style>
