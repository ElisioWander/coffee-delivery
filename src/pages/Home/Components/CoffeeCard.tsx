import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import {
  AddCoffee,
  CardBuySection,
  CardContainer,
  CardContent,
  CartItem,
  CoffeeAmount,
  Price,
} from './StylesCoffeeCard'

import coffeeImage from '../../../assets/coffee-type/expresso-tradicional.svg'

export function CoffeeCard() {
  return (
    <CardContainer>
      <CardContent>
        <img src={coffeeImage} alt="" />
        <span>TRADICIONAL</span>

        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <CardBuySection>
          <Price>
            <span>R$</span>9,90
          </Price>
          <CoffeeAmount>
            <AddCoffee>
              <Minus size={14} weight="bold" />
              1
              <Plus size={14} weight="bold" />
            </AddCoffee>
            <CartItem>
              <ShoppingCart size={22} />
            </CartItem>
          </CoffeeAmount>
        </CardBuySection>
      </CardContent>
      <CardContent>
        <img src={coffeeImage} alt="" />

        <span>TRADICIONAL</span>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <CardBuySection>
          <Price>
            <span>R$</span>9,90
          </Price>
          <CoffeeAmount>
            <AddCoffee>
              <Minus size={14} weight="bold" />
              1
              <Plus size={14} weight="bold" />
            </AddCoffee>
            <CartItem>
              <ShoppingCart size={22} />
            </CartItem>
          </CoffeeAmount>
        </CardBuySection>
      </CardContent>
    </CardContainer>
  )
}
