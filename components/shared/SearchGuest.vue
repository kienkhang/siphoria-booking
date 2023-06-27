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
    SharedSearchGuestItem( :target="{ name:'Adult', value:form?.n_o_a }" @increment="increAdult()" @decrement="decreAdult()")
    SharedSearchGuestItem( :target="{ name:'Children', value:form?.n_o_c }" @increment="increChildren()" @decrement="decreChildren()")
    SharedSearchGuestItem( :target="{ name:'Rooms', value:form?.n_o_r }" @increment="increRoom()" @decrement="decreRoom()")
      
</template>

<script setup lang="ts">
import { useSearchHotel } from '~/composables/home/useSearchHotel'

const { form, focus } = storeToRefs(useSearchHotel())
// isFocus guests tab
const isFocus = computed(() => focus.value === 'guests')

function increAdult() {
  if (form.value.n_o_a !== undefined && form.value.n_o_a >= 1) {
    form.value.n_o_a += 1
  }
}
function decreAdult() {
  if (form.value.n_o_a !== undefined && form.value.n_o_a > 1) {
    form.value.n_o_a -= 1
  }
}
function increChildren() {
  if (form.value.n_o_c !== undefined && form.value.n_o_c >= 0) {
    form.value.n_o_c += 1
  }
}
function decreChildren() {
  if (form.value.n_o_c !== undefined && form.value.n_o_c > 0) {
    form.value.n_o_c -= 1
  }
}
function increRoom() {
  if (form.value.n_o_r !== undefined && form.value.n_o_r >= 1) {
    form.value.n_o_r += 1
  }
}
function decreRoom() {
  if (form.value.n_o_r !== undefined && form.value.n_o_r > 1) {
    form.value.n_o_r -= 1
  }
}
</script>

<style scoped></style>
