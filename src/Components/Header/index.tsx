import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../Context/CartContext'
import { NavLink } from 'react-router-dom'

import {
  Actions,
  Cart,
  CartWithItem,
  HeaderContainer,
  HeaderContent,
  Location,
} from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  const { cartItems } = useCart()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Actions>
          <Location>
            <MapPin size={22} />
            Juiz de Fora, MG
          </Location>
          {cartItems.length === 0 ? (
            <Cart>
              <ShoppingCart size={22} />
            </Cart>
          ) : (
            <NavLink to="/checkout">
              <CartWithItem>
                <ShoppingCart size={22} />
                <span>{cartItems.length}</span>
              </CartWithItem>
            </NavLink>
          )}
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
