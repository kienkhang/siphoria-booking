<template lang="pug">
.max-w-7xl.mx-auto
  .font-bold.text-3xl.text-center {{$t('home_page.popular_location')}}
  .flex.items-center.justify-center.gap-6.w-full.mt-10.overflow-x-auto
    HomeFamousPlaceItem(v-for='place in places' :key='place.id' :place='place')

</template>

<script setup lang="ts">
const { t } = useI18n()
const places = ref([
  {
    id: '44c1b09b-2d27-47d8-81d8-30da31568863',
    name: 'ho_chi_minh',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/hochiminh.jpg?updatedAt=1686818926686',
    url: ''
  },
  {
    id: '572334bd-d372-4a7e-98f1-17c054153e22',
    name: 'ha_noi',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/hanoi.jpg?updatedAt=1686818926324',
    url: ''
  },
  {
    id: 'cb4d4138-7d8c-4f74-86dd-28d43d7f37a1',
    name: 'phu_quoc',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/phuquoc.jpg?updatedAt=1686818926852',
    url: ''
  },
  {
    id: '78b1e4fd-239d-4571-9490-daa4de121162',
    name: 'hoi_an',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/hoian.jpg?updatedAt=1686818927217',
    url: ''
  },
  {
    id: 'd32f47f3-d268-4911-ab86-7bb9ef966d37',
    name: 'da_nang',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/danang.jpg?updatedAt=1686818927053',
    url: ''
  },
  {
    id: '042005d7-28d1-4d92-8ef7-10231b41251c',
    name: 'khanh_hoa',
    imageUrl: 'https://ik.imagekit.io/b4bytdpcj/siphoria/khanhhoa.jpg?updatedAt=1686818925546',
    url: ''
  }
])
</script>

<style scoped></style>
