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
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <Actions>
          <Location>
            <MapPin weight="fill" size={22} />
            Belo Horizonte, MG
          </Location>
          {cartItems.length === 0 ? (
            <NavLink to="/checkout">
              <Cart>
                <ShoppingCart weight="fill" size={22} />
              </Cart>
            </NavLink>
          ) : (
            <NavLink to="/checkout">
              <CartWithItem>
                <ShoppingCart weight="fill" size={22} />
                <span>{cartItems.length}</span>
              </CartWithItem>
            </NavLink>
          )}
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
