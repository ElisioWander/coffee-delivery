import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  Actions,
  Cart,
  HeaderContainer,
  HeaderContent,
  Location,
} from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Actions>
          <Location>
            <MapPin size={22} />
            Juiz de Fora, MG
          </Location>
          <Cart>
            <ShoppingCart size={22} />
          </Cart>
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
