import { Minus, Plus, Trash } from 'phosphor-react'
import { FormFields } from './Components/FormFields'
import { useCart } from '../../Context/CartContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  AddCoffee,
  CalcTotal,
  CalcTotalItens,
  CalcTotalSection,
  CalcTotalShipping,
  FinalizeOrderContainer,
  FinalizeOrderContent,
  Form,
  FinalizeOrderButton,
  RemoveCoffee,
  SelectedOrder,
  SelectedOrderActions,
  SelectedOrderDetails,
  SelectedOrderInfos,
  Price,
} from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/')
    }

    window.scroll(0, 0)
  }, [cartItems, navigate])

  return (
    <Form>
      <FormFields />

      <FinalizeOrderContainer>
        <span>Cafés selecionados</span>

        <FinalizeOrderContent>
          {cartItems?.map((item) => (
            <SelectedOrder key={item.id}>
              <SelectedOrderInfos>
                <img src={item.image} alt="" />

                <SelectedOrderDetails>
                  <span>{item.name}</span>

                  <SelectedOrderActions>
                    <AddCoffee>
                      <Minus size={14} weight="bold" />
                      {item.amount}
                      <Plus size={14} weight="bold" />
                    </AddCoffee>
                    <RemoveCoffee>
                      <Trash size={16} />
                      Remover
                    </RemoveCoffee>
                  </SelectedOrderActions>
                </SelectedOrderDetails>
              </SelectedOrderInfos>

              <Price>R$ {item.price}</Price>
            </SelectedOrder>
          ))}

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
