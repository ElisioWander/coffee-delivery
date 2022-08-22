import { useCart } from '../Context/CartContext'
import { priceFormatter } from '../utils/formatter'

export function usePrices() {
  const { cartItems } = useCart()

  // um array com todos os totalPrice dos cafés que foram enviados para o carrinho
  const arrayTotalPriceOfItems = cartItems.map((item) => item.totalPrice)

  // somatória de todos os totalPrice que foram enviados para o carrinho
  const totalPriceOfItems = arrayTotalPriceOfItems
    ? arrayTotalPriceOfItems.reduce((acc, item) => {
        return acc + item
      }, 0)
    : 1

  const shipping = 3.5
  const total = totalPriceOfItems + shipping

  // formatar os valores de frete, total dos items do carrinho somados e o total
  // de itens comprados para reais R$
  const totalOfItems = priceFormatter.format(totalPriceOfItems)
  const shippingFormatted = priceFormatter.format(shipping)
  const totalFormatted = priceFormatter.format(total)

  return { totalOfItems, shippingFormatted, totalFormatted }
}
