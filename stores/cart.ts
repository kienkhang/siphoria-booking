import type { ICart } from '~/dtos/cart'

const useCartStore = defineStore('cart__store', () => {
  const carts = ref<ICart[]>()

  return {
    carts
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))

export { useCartStore }
