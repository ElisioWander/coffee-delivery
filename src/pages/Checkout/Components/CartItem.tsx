import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'
import { priceFormatter } from '../../../utils/formatter'
import {
  AddCoffee,
  Price,
  RemoveCoffee,
  SelectedOrder,
  SelectedOrderActions,
  SelectedOrderDetails,
  SelectedOrderInfos,
} from './StylesCartItem'

type CartData = {
  id: string
  image: string
  name: string
  amount: number
  price: number
  totalPrice: number
}

interface CartItemProps {
  cart: CartData
}

export function CartItem({ cart }: CartItemProps) {
  // quantidade de café do mesmo tipo
  const [amount, setAmount] = useState(cart.amount)

  const { deleteCoffeeFromCart, updateCoffeeInCart } = useCart()

  // formatando o preço total relacionado a quantidade de café do mesmo tipo
  const priceFormatted = priceFormatter.format(cart.totalPrice)

  function handleDeleteCoffeeFromCart(coffeeId: string) {
    deleteCoffeeFromCart(coffeeId)
  }

  function handleIncrementCoffeeAmount() {
    // newAmount foi criado para armazenar o valor atualizado
    // do estado 'amount' e enviar para a atualização do coffee no cart
    const newAmount = amount + 1
    setAmount(newAmount)

    // atualizando o preço total do café de acordo com a quantidade
    const newPrice = cart.totalPrice + cart.price

    const updateCartItem = {
      id: cart.id,
      amount: newAmount,
      totalPrice: newPrice,
    }

    updateCoffeeInCart(updateCartItem)
  }

  function handleDecrementCoffeeAmount() {
    if (amount > 1) {
      // newAmount foi criado para armazenar o valor atualizado
      // do estado 'amount' e enviar para a atualização do coffee no cart
      const newAmount = amount - 1
      setAmount(newAmount)

      // atualizando o preço total do café de acordo com a quantidade
      const newPrice = cart.totalPrice - cart.price

      const updateCartItem = {
        id: cart.id,
        amount: newAmount,
        totalPrice: newPrice,
      }

      updateCoffeeInCart(updateCartItem)
    }
  }

  return (
    <SelectedOrder>
      <SelectedOrderInfos>
        <img src={cart.image} alt="" />

        <SelectedOrderDetails>
          <span>{cart.name}</span>

          <SelectedOrderActions>
            <AddCoffee>
              <Minus
                onClick={handleDecrementCoffeeAmount}
                size={14}
                weight="bold"
              />
              {amount}
              <Plus
                onClick={handleIncrementCoffeeAmount}
                size={14}
                weight="bold"
              />
            </AddCoffee>
            <RemoveCoffee
              type="button"
              onClick={() => handleDeleteCoffeeFromCart(cart.id)}
            >
              <Trash size={16} />
              Remover
            </RemoveCoffee>
          </SelectedOrderActions>
        </SelectedOrderDetails>
      </SelectedOrderInfos>

      <Price>{priceFormatted}</Price>
    </SelectedOrder>
  )
}
