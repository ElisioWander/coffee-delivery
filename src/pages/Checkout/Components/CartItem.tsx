import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'
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
  price: string
}

interface CartItemProps {
  cart: CartData
}

export function CartItem({ cart }: CartItemProps) {
  const [amount, setAmount] = useState(cart.amount)

  const { deleteCoffeeFromCart, updateCoffeeInCart } = useCart()

  function handleDeleteCoffeeFromCart(coffeeId: string) {
    deleteCoffeeFromCart(coffeeId)
  }

  function handleIncrementCoffeeAmount() {
    setAmount(amount + 1)

    const updateAmount = {
      id: cart.id,
      amount,
    }

    updateCoffeeInCart(updateAmount)
  }

  function handleDecrementCoffeeAmount() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const coffeePrice = parseInt(cart.price)
  const coffeeAmount = amount
  const coffeeTotalPrice = coffeePrice * coffeeAmount

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

      <Price>R$ {coffeeTotalPrice}</Price>
    </SelectedOrder>
  )
}
