import { Coffee, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { EmptyCartContainer } from './StylesEmptyCart'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <ShoppingCart size={42} />

      <p>
        Seu Carrinho de compras se encontra vazio. <br />
        Navegue pelos nossos produtos agora.
      </p>
      <NavLink to="/">
        <a>
          Ver produtos
          <Coffee size={16} weight="bold" />
        </a>
      </NavLink>
    </EmptyCartContainer>
  )
}
