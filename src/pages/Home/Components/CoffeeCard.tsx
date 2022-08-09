import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'

import {
  AddCoffee,
  CardBuySection,
  CardContent,
  CartItem,
  CoffeeAmount,
  CoffeeType,
  Price,
} from './StylesCoffeeCard'

type CoffeeData = {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: string
}

interface CoffeeCardProps {
  coffee: CoffeeData
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)

  const { cartItems, addCoffeeToCart, updateCoffeeInCart } = useCart()

  const coffeeAlreadyExists = cartItems.find((item) => item.id === coffee.id)

  function handleAddCoffeeToCart() {
    if (coffeeAlreadyExists) {
      const updatedCoffee = {
        id: coffee.id,
        amount,
      }

      updateCoffeeInCart(updatedCoffee)
    } else {
      const coffeeAdded = {
        id: coffee.id,
        image: coffee.image,
        name: coffee.name,
        amount,
        price: coffee.price,
      }

      addCoffeeToCart(coffeeAdded)
    }
  }

  function handleIncrementCoffeeAmount() {
    setAmount(amount + 1)
  }

  function handleDecrementCoffeeAmount() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const parsedCoffeeType = coffee.type.map((item) => (
    <span key={item}>{item.split('  ')}</span>
  ))

  return (
    <CardContent>
      <img src={coffee.image} alt="" />

      <CoffeeType>{parsedCoffeeType}</CoffeeType>

      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <CardBuySection>
        <Price>
          <span>R$</span>
          {coffee.price}
        </Price>
        <CoffeeAmount>
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
          <CartItem>
            <ShoppingCart onClick={handleAddCoffeeToCart} size={22} />
          </CartItem>
        </CoffeeAmount>
      </CardBuySection>
    </CardContent>
  )
}
