<template lang="pug">
NPopover(
  trigger='click'
  :show-arrow='false'
  style='margin: 0; margin-bottom: 16px; padding: 0; border-radius: 16px;'
  :show='isFocus'
)
  template(#trigger)
    .checkin-out.flex.items-center.gap-1(:class='["px-4 text-xs h-full rounded-60px hover:bg-eerie-black/[0.08]" , {"shadow-search":isFocus}]' @click='focus="guests"')
      div(class='flex-shrink-0 i-custom-guests text-crayola w-[18px] h-[18px]')
      span {{ `${ form.n_o_a } adult, ${ form.n_o_c } Child, ${ form.n_o_r } Rooms` }}
  .rounded-16px.bg-white.w-320px.overflow-y-auto.hide-scroll.mt-2.flex.flex-col.p-3.gap-8.shadow-search(v-auto-animate)
    //- SharedSearchGuestItem( :target="{ name:'Adult', value:form?.n_o_a }" @increment="increAdult()" @decrement="decreAdult()")
    //- SharedSearchGuestItem( :target="{ name:'Children', value:form?.n_o_c }" @increment="increChildren()" @decrement="decreChildren()")
    //- SharedSearchGuestItem( :target="{ name:'Rooms', value:form?.n_o_r }" @increment="increRoom()" @decrement="decreRoom()")
    SharedSearchGuestItem(
      v-for='g in guests'
      :target='g'
      @increment='increment'
      @decrement='decrement'
    )
      
</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

// Composable route
const route = useRoute()
// Destruct form and focus value
const { form, focus } = storeToRefs(useSearchHotel())
// isFocus guests tab
const isFocus = computed(() => focus.value === 'guests')
// Check route exist adults && childrens, rooms ->
const adults = computed(() => route.query?.n_o_a as string)
const childrens = computed(() => route.query?.n_o_c as string)
const rooms = computed(() => route.query?.n_o_r as string)
// Update "form" useSeachHotel
onBeforeMount(() => {
  form.value.n_o_a = adults.value ? +adults.value : form.value.n_o_a
  form.value.n_o_c = childrens.value ? +childrens.value : form.value.n_o_c
  form.value.n_o_r = rooms.value ? +rooms.value : form.value.n_o_r
})

// Define guests array
const guests = computed(() => {
  return [
    {
      id: '64acdaa1-2881-49fe-b469-944964fb709f',
      translate: 'the_header.adults',
      name: 'Adults',
      value: form.value.n_o_a
    },
    {
      id: 'f8a928a6-3422-45c4-946b-b01ac7f4e96e',
      translate: 'the_header.childrens',
      name: 'Childrens',
      value: form.value.n_o_c
    },
    {
      id: 'a564dbce-f655-4e51-ad88-67152177576e',
      translate: 'the_header.rooms',
      name: 'Rooms',
      value: form.value.n_o_r
    }
  ]
})

function increment(targetName: string) {
  switch (targetName) {
    case 'adults':
      if (form.value.n_o_a < 10) form.value.n_o_a += 1
      break
    case 'childrens':
      if (form.value.n_o_c < 10) form.value.n_o_c += 1
      break
    case 'rooms':
      if (form.value.n_o_r < 10) form.value.n_o_r += 1
      break
    default:
      break
  }
}
function decrement(targetName: string) {
  switch (targetName) {
    case 'adults':
      if (form.value.n_o_a > 1) form.value.n_o_a -= 1
      break
    case 'childrens':
      if (form.value.n_o_c > 0) form.value.n_o_c -= 1
      break
    case 'rooms':
      if (form.value.n_o_r > 1) form.value.n_o_r -= 1
      break

    default:
      break
  }
}
</script>

<style scoped></style>
