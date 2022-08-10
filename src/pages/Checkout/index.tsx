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
import { useFormatter } from '../../hooks/useFormatter'

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

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const { cartItems, paymentMethod, getFinalizedOrderData } = useCart()
  const { finalizeOrderSchemaValidation } = useValidation()

  const arrayTotalPriceOfItems = cartItems.map((item) => item.totalPrice)

  const totalPriceOfItems = arrayTotalPriceOfItems
    ? arrayTotalPriceOfItems.reduce((acc, item) => {
        return acc + item
      }, 0)
    : 1

  const shipping = 4.8
  const total = totalPriceOfItems + shipping

  const { currencyFormatted: shippingFormatted } = useFormatter(shipping)
  const { currencyFormatted: totalFormatted } = useFormatter(total)

  const isCartItemEmpty = cartItems.length === 0

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

  async function handleFinalizeOrder(data: FinalizeOrderData) {
    const orderData = {
      ...data,
      uf: data.uf.toUpperCase(),
      payment: paymentMethod,
    }

    setTimeout(() => {
      getFinalizedOrderData(orderData)

      navigate('/success')
    }, 2000)
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
              <span>{cartItems.length}</span>
            </CalcTotalItens>
            <CalcTotalShipping>
              <span>Entrega</span>
              <span>{!isCartItemEmpty ? shippingFormatted : '0'}</span>
            </CalcTotalShipping>
            <CalcTotal>
              <span>Total</span>
              <span>{!isCartItemEmpty ? totalFormatted : '0'}</span>
            </CalcTotal>
          </CalcTotalSection>

          <FinalizeOrderButton type="submit" disabled={isCartItemEmpty}>
            Confirmar Pedido
          </FinalizeOrderButton>
        </FinalizeOrderContent>
      </FinalizeOrderContainer>
    </Form>
  )
}
