const path = 'payments'
class Payment {
  withMomo = () => {
    const url = `${path}/create-momo`
    return useGet({ url })
  }
}

const paymentApi = new Payment()

export { paymentApi }
