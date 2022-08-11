import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormFieldsTitle } from './FormFieldsTitle'
import { PaymentButton } from './PaymentButton'
import { useFormContext } from 'react-hook-form'
import { FinalizeOrderData } from '../index'
import { InputForm } from './InputForm'

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

// todas as formas de pagamento do café
const payment = [
  {
    icon: <CreditCard />,
    type: 'Cartão de crédito',
  },
  {
    icon: <Bank />,
    type: 'Cartão de débito',
  },
  {
    icon: <Money />,
    type: 'Dinheiro',
  },
]

export function FormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FinalizeOrderData>()

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
            <InputForm
              type="text"
              placeholder="CEP"
              error={errors.cep}
              {...register('cep')}
            />
            <InputForm
              type="text"
              placeholder="Rua"
              error={errors.street}
              {...register('street')}
            />
            <InputGrupFlex>
              <InputForm
                type="text"
                placeholder="Número"
                error={errors.number}
                {...register('number')}
              />
              <InputForm
                type="text"
                placeholder="Complemento"
                error={errors.complement}
                {...register('complement')}
              />
            </InputGrupFlex>
            <InputGrupGrid>
              <InputForm
                type="text"
                placeholder="Bairro"
                error={errors.district}
                {...register('district')}
              />
              <InputForm
                type="text"
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
              />
              <InputForm
                type="text"
                placeholder="UF"
                error={errors.uf}
                {...register('uf')}
              />
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
            {payment.map((method) => (
              <PaymentButton
                key={method.type}
                icon={method.icon}
                payment={method.type}
              />
            ))}
          </PaymentMethod>
        </PaymentMethodSection>
      </FormFieldsContent>
    </FormFieldsContainer>
  )
}
