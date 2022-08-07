import { Minus, Plus, Trash } from 'phosphor-react'
import { FormFields } from './Components/FormFields'

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

import selectedCoffeeImage from '../../assets/coffee-type/expresso-tradicional.svg'

export function Checkout() {
  return (
    <Form>
      <FormFields />

      <FinalizeOrderContainer>
        <span>Cafés selecionados</span>

        <FinalizeOrderContent>
          <SelectedOrder>
            <SelectedOrderInfos>
              <img src={selectedCoffeeImage} alt="" />

              <SelectedOrderDetails>
                <span>Expresso Tradicional</span>

                <SelectedOrderActions>
                  <AddCoffee>
                    <Minus size={14} weight="bold" />
                    1
                    <Plus size={14} weight="bold" />
                  </AddCoffee>
                  <RemoveCoffee>
                    <Trash size={16} />
                    Remover
                  </RemoveCoffee>
                </SelectedOrderActions>
              </SelectedOrderDetails>
            </SelectedOrderInfos>

            <Price>R$ 9,90</Price>
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
          </CalcTotalSection>

          <FinalizeOrderButton type="submit">
            Confirmar Pedido
          </FinalizeOrderButton>
        </FinalizeOrderContent>
      </FinalizeOrderContainer>
    </Form>
  )
}
