import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'
import { useFormatter } from '../../../hooks/useFormatter'
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
  const [amount, setAmount] = useState(cart.amount)

  const { deleteCoffeeFromCart, updateCoffeeInCart } = useCart()
  const { currencyFormatted: priceFormatted } = useFormatter(cart.totalPrice)

  function handleDeleteCoffeeFromCart(coffeeId: string) {
    deleteCoffeeFromCart(coffeeId)
  }

  function handleIncrementCoffeeAmount() {
    setAmount(amount + 1)

    const newPrice = cart.totalPrice + cart.price

    const updateCartItem = {
      id: cart.id,
      amount,
      totalPrice: newPrice,
    }

    updateCoffeeInCart(updateCartItem)
  }

  function handleDecrementCoffeeAmount() {
    if (amount > 1) {
      setAmount(amount - 1)

      const newPrice = cart.totalPrice - cart.price

      const updateCartItem = {
        id: cart.id,
        amount,
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
