import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { CoffeeCard } from './Components/CoffeeCard'
import coffeeData from '../../coffee-data'

import {
  CoffeeCardContainer,
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
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </ShoppingCartItem>
            <PackageItem>
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </PackageItem>
            <TimerItem>
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </TimerItem>
            <CoffeeItem>
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </CoffeeItem>
          </IntroGrid>
        </IntroContent>

        <img src={homeCoffeePoster} alt="" />
      </IntroContainer>

      <CoffeeSection>
        <h1>Nossos Cafés</h1>

        <CoffeeCardContainer>
          {coffeeData?.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeCardContainer>
      </CoffeeSection>
    </HomeContainer>
  )
}
