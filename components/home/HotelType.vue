<template lang="pug">
.max-w-7xl.mx-auto
  .font-bold.text-3xl.text-center {{$t('home_page.type_of_hotel')}}
  .flex.items-center.justify-center.gap-6.w-full.mt-10.overflow-x-auto
    HomeHotelTypeItem(v-for='hotelType in hotelTypes' :key='hotelType.id' :hotel-type='hotelType')
</template>

<script setup lang="ts">
const { t } = useI18n()
const hotelTypes = ref([
  {
    id: 'd9f38828-7997-4f2f-9e6c-5111df3c85b0',
    name: 'home_page.hotel',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/hotel.png?updatedAt=1686822916303',
    url: ''
  },
  {
    id: '0ee35dad-9341-4639-8c6c-6d35f09edb33',
    name: 'home_page.resort',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/resort.jpg?updatedAt=1686822915518',
    url: ''
  },
  {
    id: '332c86e7-1cfa-484a-9ebb-3a139dc9b8a7',
    name: 'home_page.homestay',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/homestay.jpg?updatedAt=1686822915371',
    url: ''
  }
])
</script>

<style scoped></style>
