import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { CoffeeCard } from './Components/CoffeeCard'

import {
  CoffeeItem,
  CoffeeSection,
  HomeContainer,
  IntroContainer,
  IntroContent,
  IntroGrid,
  PackageItem,
  ShoppingCartItem,
  TimerItem,
} from './styles'

import homeCoffeePoster from '../../assets/home-coffee-poster.svg'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContent>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde <br /> estiver, a
            qualquer hora
          </p>

          <IntroGrid>
            <ShoppingCartItem>
              <span>
                <ShoppingCart />
              </span>
              Compra simples e segura
            </ShoppingCartItem>
            <PackageItem>
              <span>
                <Package />
              </span>
              Embalagem mantém o café intacto
            </PackageItem>
            <TimerItem>
              <span>
                <Timer />
              </span>
              Entrega rápida e rastreada
            </TimerItem>
            <CoffeeItem>
              <span>
                <Coffee />
              </span>
              O café chega fresquinho até você
            </CoffeeItem>
          </IntroGrid>
        </IntroContent>

        <img src={homeCoffeePoster} alt="" />
      </IntroContainer>

      <CoffeeSection>
        <h1>Nossos Cafés</h1>

        <CoffeeCard />
      </CoffeeSection>
    </HomeContainer>
  )
}
