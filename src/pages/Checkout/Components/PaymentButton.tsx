import { ReactNode } from 'react'
import { useCart } from '../../../Context/CartContext'
import { Button } from './StylesPaymentButton'

interface PaymentButtonProps {
  icon: ReactNode
  payment: string
}

export function PaymentButton({ icon, payment }: PaymentButtonProps) {
  const { getSelectedPaymentMethod } = useCart()

  function handleGetSelectedPaymentMethod(payment: string) {
    getSelectedPaymentMethod(payment)
  }

  return (
    <Button
      onClick={() => handleGetSelectedPaymentMethod(payment)}
      type="button"
    >
      {icon}
      {payment}
    </Button>
  )
}
