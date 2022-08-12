import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../Context/CartContext'
import { useFormatter } from '../../../hooks/useFormatter'

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

  const { cartItems, addCoffeeToCart, updateCoffeeInCart } = useCart()

  // buscando no array que armazena todos os itens que foram selecionados
  // para verificar se o item que será adicionado já existe ou não
  const coffeeAlreadyExists = cartItems.find((item) => item.id === coffee.id)

  // preço de unidade * quantidade = preço total
  const coffeePrice = coffee.price
  const coffeeTotalPrice = coffeePrice * amount

  // formatando o preço de unidade para reais R$
  const { currencyFormatted: priceFormatted } = useFormatter(coffeePrice)

  function handleAddCoffeeToCart() {
    if (coffeeAlreadyExists) {
      // se o item já existir no carrinho de comprar então ele apenas
      // será atualizado passando valores novos que podem ser alterados
      const updatedCoffee = {
        id: coffee.id,
        amount,
        price: coffee.price,
        totalPrice: coffeeTotalPrice,
      }

      updateCoffeeInCart(updatedCoffee)
    } else {
      // enviar o item selecionado para o carrinho
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
        <Price>{priceFormatted}</Price>
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
