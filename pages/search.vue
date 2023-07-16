<template lang="pug">
.w-full.h-full
  LazySearchHeader
  .max-w-1440px.mx-auto
    LazySearchFilter.mt-8
    .w-full.mx-auto.mt-9
      .grid.grid-cols-1.gap-12.justify-items-center(class='md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' v-if='hotels.length > 0')
        LazySharedHotelCard(v-for='hotel in hotels' :hotel='hotel' :key='hotel?.id')
      SharedEmptySearch(
        v-else
        :empty='notFound'
      )
  
</template>

<script setup lang="ts">
import useHotel from '~/composables/useHotel'

definePageMeta({
  layout: 'home',
  title: 'Siphoria | Search Hotel'
})

const dayjs = useDayjs()
// route hooks
const route = useRoute()
const router = useRouter()
// Get url string
const query = computed(() => route.query)

// ===== PREVENT USER EDIT URL ======
const fromDate = computed(() => query.value.from as string)
const toDate = computed(() => query.value.to as string)
onBeforeMount(() => {
  // if from date <= today or from_date > to_date => redirect to home
  if (
    fromDate.value &&
    toDate.value &&
    (+dayjs(fromDate.value) <= +dayjs() || +dayjs(toDate.value) <= +dayjs(fromDate.value))
  ) {
    router.push('/')
  }
})
// ===== END PREVENT USER EDIT URL ======

// search hotel with composable
const { searchHotel, hotels } = useHotel()

const { executeApi: callSearchApi } = searchHotel(query)

// mounted and change query -> call api
onMounted(() => {
  callSearchApi()
})

watch(query, () => {
  callSearchApi()
})

// NOT FOUND DATA
const { t } = useI18n()
const notFound = reactive({
  size: 128,
  title: 'search_page.not_found_title',
  content: 'search_page.not_found_content'
})
</script>

<style scoped></style>
