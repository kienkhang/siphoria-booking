const useCartStore = defineStore('cart__store', () => {
  const cart = ref()

  return {
    cart
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))

export { useCartStore }
