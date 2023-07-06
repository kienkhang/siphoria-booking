function VND(moneyString: string) {
  return moneyString.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function Image2Array(text: string) {
  if (!text) return []
  const imgs = text.split(';')
  return imgs
}

export { VND, Image2Array }
