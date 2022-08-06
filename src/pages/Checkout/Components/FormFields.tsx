import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormFieldsTitle } from './FormFieldsTitle'
import { PaymentButton } from './PaymentButton'

import {
  FormFieldsContainer,
  FormFieldsContent,
  FormFieldsInputs,
  InputGrup,
  InputGrupFlex,
  InputGrupGrid,
  PaymentMethod,
  PaymentMethodSection,
} from './StylesFormFields'

export function FormFields() {
  return (
    <FormFieldsContainer>
      <span>Complete seu pedido</span>

      <FormFieldsContent>
        <FormFieldsInputs>
          <FormFieldsTitle
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size={22} color="#C47F17" />}
          />

          <InputGrup>
            <input type="text" name="cep" placeholder="CEP" />
            <input type="text" name="street" placeholder="Rua" />
            <InputGrupFlex>
              <input type="text" name="number" placeholder="Número" />
              <input type="text" name="complement" placeholder="Complementp" />
            </InputGrupFlex>
            <InputGrupGrid>
              <input type="text" name="district" placeholder="Bairro" />
              <input type="text" name="city" placeholder="Cidade" />
              <input type="text" name="uf" placeholder="UF" />
            </InputGrupGrid>
          </InputGrup>
        </FormFieldsInputs>

        <PaymentMethodSection>
          <FormFieldsTitle
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size={22} color="#8047F8" />}
          />

          <PaymentMethod>
            <PaymentButton icon={<CreditCard />} name="Cartão de crédito" />
            <PaymentButton icon={<Bank />} name="Cartão de débito" />
            <PaymentButton icon={<Money />} name="Dinheiro" />
          </PaymentMethod>
        </PaymentMethodSection>
      </FormFieldsContent>
    </FormFieldsContainer>
  )
}
