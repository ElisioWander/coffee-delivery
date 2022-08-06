import { ReactNode } from 'react'
import { Button } from './StylesPaymentButton'

interface PaymentButtonProps {
  icon: ReactNode
  name: string
}

export function PaymentButton({ icon, name }: PaymentButtonProps) {
  return (
    <Button type="button">
      {icon}
      {name}
    </Button>
  )
}
