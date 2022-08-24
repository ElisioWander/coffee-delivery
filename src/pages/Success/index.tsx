import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCart } from '../../Context/CartContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  DeliveryDestination,
  DeliveryPayment,
  DeliveryTimer,
  SuccessContainer,
  SuccessContent,
  SuccessInfos,
} from './Styles'

import deliveryMotorcycleImg from '../../assets/delivery-motorcycle.svg'

export function Success() {
  const { finalizedOrder } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    // impedindo o acesso a pagina de sucesso se nenhum pedido tiver sido finalizado
    if (!finalizedOrder) {
      navigate('/')
    }
  }, [finalizedOrder, navigate])

  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <SuccessInfos>
          <DeliveryDestination>
            <header>
              <MapPin size={16} weight="fill" />
            </header>
            <p>
              Entrega em{' '}
              <span>
                <strong>{finalizedOrder?.street}</strong>,{' '}
                {finalizedOrder?.number}
                <br />
                {finalizedOrder?.district} - {finalizedOrder?.city},{' '}
                {finalizedOrder?.uf}
              </span>
            </p>
          </DeliveryDestination>
          <DeliveryTimer>
            <header>
              <Timer size={16} weight="fill" />
            </header>

            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryTimer>
          <DeliveryPayment>
            <header>
              <CurrencyDollar size={16} weight="fill" />
            </header>

            <p>
              Pagamento na entrega
              <br />
              <strong>{finalizedOrder?.paymentType}</strong>
            </p>
          </DeliveryPayment>
        </SuccessInfos>
      </SuccessContent>

      <img src={deliveryMotorcycleImg} alt="" />
    </SuccessContainer>
  )
}
