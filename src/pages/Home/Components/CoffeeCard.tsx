import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'
import { priceFormatter } from '../../../utils/formatter'

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
  price: number
}

interface CoffeeCardProps {
  coffee: CoffeeData
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  // estado inicial da quantidade de café do mesmo tipo
  const [amount, setAmount] = useState(1)

  const { addCoffeeToCart } = useCart()

  // preço de unidade * quantidade = preço total
  const coffeeTotalPrice = coffee.price * amount

  // formatando o preço de unidade para reais R$
  const coffeePrice = priceFormatter.format(coffee.price)

  function handleAddCoffeeToCart() {
    const coffeeAdded = {
      id: coffee.id,
      image: coffee.image,
      name: coffee.name,
      amount,
      price: coffee.price,
      totalPrice: coffeeTotalPrice,
    }

    addCoffeeToCart(coffeeAdded)
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
        <Price>{coffeePrice}</Price>
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
          <CartItem onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartItem>
        </CoffeeAmount>
      </CardBuySection>
    </CardContent>
  )
}
