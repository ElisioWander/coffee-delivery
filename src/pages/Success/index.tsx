import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCart } from '../../Context/CartContext'

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

  return (
    <SuccessContainer>
      <SuccessContent>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <SuccessInfos>
          <DeliveryDestination>
            <header>
              <MapPin size={16} weight="bold" />
            </header>
            <p>
              Entrega em{' '}
              <span>
                <strong>{finalizedOrder.street}</strong>,{' '}
                {finalizedOrder.number}
                <br />
                {finalizedOrder.district} - {finalizedOrder.city},{' '}
                {finalizedOrder.uf}
              </span>
            </p>
          </DeliveryDestination>
          <DeliveryTimer>
            <header>
              <Timer size={16} weight="bold" />
            </header>

            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </DeliveryTimer>
          <DeliveryPayment>
            <header>
              <CurrencyDollar size={16} weight="bold" />
            </header>

            <p>
              Pagamento na entrega
              <br />
              <strong>{finalizedOrder.payment}</strong>
            </p>
          </DeliveryPayment>
        </SuccessInfos>
      </SuccessContent>

      <img src={deliveryMotorcycleImg} alt="" />
    </SuccessContainer>
  )
}
