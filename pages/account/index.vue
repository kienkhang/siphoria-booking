<template lang="pug">
.w-full
  .w-full.p-8.rounded-2xl.shadow-bar.bg-white
    //- Title & Upgrade button
    .flex.justify-between.items-center
      span.text-4xl.font-bold Membership Card
      BaseButton.px-4.py-2.border.border-vivid.text-vivid(class='hover:bg-vivid hover:text-white')
        span.font-medium Upgrade
    //- membership card
    .flex.items-center.gap-6.mt-6
      AccountMemberCard.flex-1
      AccountMemberBenefit.flex-1


  .w-full.p-8.rounded-2xl.shadow-bar.bg-white.mt-4
</template>

<script setup lang="ts"></script>

<style scoped></style>
