import { FormFields } from './Components/FormFields'
import { useCart } from '../../Context/CartContext'
import { CartItem } from './Components/CartItem'
import { EmptyCart } from './Components/EmptyCart'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useValidation } from '../../hooks/useValidation'

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

export type FinalizeOrderData = {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  payment: string
}

export function Checkout() {
  const navigate = useNavigate()

  const { cartItems, paymentMethod, getFinalizedOrderData } = useCart()
  const { finalizeOrderSchemaValidation } = useValidation()

  const finalizeOrderForm = useForm<FinalizeOrderData>({
    resolver: zodResolver(finalizeOrderSchemaValidation),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: '',
    },
  })

  const { handleSubmit } = finalizeOrderForm

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  async function handleFinalizeOrder(data: FinalizeOrderData) {
    const orderData = {
      ...data,
      uf: data.uf.toUpperCase(),
      payment: paymentMethod,
    }

    getFinalizedOrderData(orderData)

    navigate('/success')
  }

  return (
    <Form onSubmit={handleSubmit(handleFinalizeOrder)}>
      <FormProvider {...finalizeOrderForm}>
        <FormFields />
      </FormProvider>

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
