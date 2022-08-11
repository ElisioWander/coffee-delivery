import { CircleNotch } from 'phosphor-react'
import { SpinnerOverlay, SpinnerContent } from './styles'

export function Loading() {
  return (
    <SpinnerOverlay>
      <SpinnerContent>
        <CircleNotch size={32} weight="bold" />

        <h1>Seu pedido esté sendo finalizado!</h1>
      </SpinnerContent>
    </SpinnerOverlay>
  )
}
