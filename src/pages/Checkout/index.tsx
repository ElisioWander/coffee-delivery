import { FormFields } from './Components/FormFields'
import { useCart } from '../../Context/CartContext'
import { CartItem } from './Components/CartItem'

import {
  CalcTotal,
  CalcTotalItens,
  CalcTotalSection,
  CalcTotalShipping,
  FinalizeOrderContainer,
  FinalizeOrderContent,
  Form,
  FinalizeOrderButton,
} from './styles'
import { EmptyCart } from './Components/EmptyCart'

export function Checkout() {
  const { cartItems } = useCart()

  return (
    <Form>
      <FormFields />

      <FinalizeOrderContainer>
        <span>Cafés selecionados</span>

        <FinalizeOrderContent>
          {cartItems.length !== 0 ? (
            cartItems.map((cart) => <CartItem key={cart.id} cart={cart} />)
          ) : (
            <EmptyCart />
          )}

          <CalcTotalSection>
            <CalcTotalItens>
              <span>Total de itens</span>
              <span>R$ 29,27</span>
            </CalcTotalItens>
            <CalcTotalShipping>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </CalcTotalShipping>
            <CalcTotal>
              <span>Total</span>
              <span>R$ 33,20</span>
            </CalcTotal>
          </CalcTotalSection>

          <FinalizeOrderButton type="submit">
            Confirmar Pedido
          </FinalizeOrderButton>
        </FinalizeOrderContent>
      </FinalizeOrderContainer>
    </Form>
  )
}
