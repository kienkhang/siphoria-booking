interface ISearchHotel {
  from: string
  to: string
  n_o_a: number
  n_o_c: number
  n_o_r: number
  city: number
}
const useSearchHotel = defineStore('home__useSeachHotel', () => {
  // Import dayjs lib
  const dayjs = useDayjs()

  // focus type
  const focus = ref<'location' | 'checkin_checkout' | 'guests' | ''>('')

  const isFocus = computed(() => focus.value !== '')

  // form to search
  const form = reactive<ISearchHotel>({
    city: 79,
    from: dayjs(Date.now() + 86400000).format('YYYY-MM-DD'),
    to: dayjs(Date.now() + 86400000 * 2).format('YYYY-MM-DD'),
    n_o_a: 2,
    n_o_c: 0,
    n_o_r: 1
  })

  return { focus, form, isFocus }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useSearchHotel, import.meta.hot))

export { useSearchHotel }
