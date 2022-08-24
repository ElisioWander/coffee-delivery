import { FormFields } from './Components/FormFields'
import { useCart } from '../../Context/CartContext'
import { CartItem } from './Components/CartItem'
import { EmptyCart } from './Components/EmptyCart'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../Components/Loading'
import { usePrices } from '../../hooks/usePrices'
import {
  FinalizeOrderData,
  finalizeOrderSchemaValidation,
} from '../../utils/zodValidation'

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

export function Checkout() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const { cartItems, getFinalizedOrderData } = useCart()
  const { shippingFormatted, totalFormatted, totalOfItems } = usePrices()

  // passando a validação do formuário
  // verificar validação no hook useValidation
  const finalizeOrderForm = useForm<FinalizeOrderData>({
    resolver: zodResolver(finalizeOrderSchemaValidation),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = finalizeOrderForm

  // etápa final do pedido
  // função para enviar o pedido
  function handleFinalizeOrder(data: FinalizeOrderData) {
    setIsLoading(true)

    const orderData = {
      ...data,
      uf: data.uf.toUpperCase(),
    }

    try {
      // setTimeout para simular o tempo de carregamento de uma aplicação real
      setTimeout(() => {
        getFinalizedOrderData(orderData)

        navigate('/success')
      }, 2000)
    } catch (error) {
      console.log(error)
      navigate('/')
    }
  }

  const isCartItemEmpty = cartItems.length === 0 || isSubmitting

  return (
    <>
      {isLoading && <Loading />}

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
                <span>{totalOfItems}</span>
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
    </>
  )
}
