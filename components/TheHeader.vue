<template lang="pug">
div(class='bg-crayola')
  .max-w-7xl.mx-auto.px-4(class='sm:px-6 lg:px-8')
    .flex.justify-between.items-center(class='h-16')
      div(class='w-48 h-12 cursor-pointer i-custom-logo-text-nocolor')
      .flex.items-center.gap-4
        Icon.cursor-pointer(name='mdi:cart-outline' color='white' size='32')
        //- div(class='flex-shrink-0 w-8 h-8 text-white cursor-pointer select-none i-mdi:cart-outline')
        SharedLanguageSelect
        AuthButton
</template>

<script setup lang="ts"></script>

<style scoped></style>
