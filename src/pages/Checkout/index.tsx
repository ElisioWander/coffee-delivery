import { Minus, Plus, Trash } from 'phosphor-react'
import { FormFields } from './Components/FormFields'

import selectedCoffeeImage from '../../assets/coffee-type/expresso-tradicional.svg'
import {
  AddCoffee,
  CalcTotal,
  CalcTotalItens,
  CalcTotalSection,
  CalcTotalShipping,
  FinalizeOrderContainer,
  Form,
  SelectedOrder,
  SelectedOrderContent,
} from './styles'

export function Checkout() {
  return (
    <Form>
      <FormFields />

      <FinalizeOrderContainer>
        <span>Cafés selecionados</span>

        <SelectedOrder>
          <SelectedOrderContent>
            <img src={selectedCoffeeImage} alt="" />

            <header>
              <span>Expresso Tradicional</span>
              <span>R$19,99</span>
            </header>
            <footer>
              <AddCoffee>
                <Minus size={14} weight="bold" />
                1
                <Plus size={14} weight="bold" />
              </AddCoffee>
              <button>
                <Trash />
                Remover
              </button>
            </footer>
          </SelectedOrderContent>
        </SelectedOrder>

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

          <button type="submit">Confirmar Pedido</button>
        </CalcTotalSection>
      </FinalizeOrderContainer>
    </Form>
  )
}
