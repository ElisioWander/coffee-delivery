import { FormFieldsTitle } from './FormFieldsTitle'
import { Controller, useFormContext } from 'react-hook-form'
import { InputForm } from './InputForm'
import { FinalizeOrderData } from '../../../utils/zodValidation'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  FormFieldsContainer,
  FormFieldsContent,
  FormFieldsInputs,
  InputGrup,
  InputGrupFlex,
  InputGrupGrid,
  PaymentButton,
  PaymentMethod,
  PaymentMethodErrorMessage,
  PaymentMethodSection,
} from './StylesFormFields'

export function FormFields() {
  const {
    register,
    control,
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

          <Controller
            control={control}
            name="paymentType"
            render={({ field }) => {
              return (
                <PaymentMethod
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PaymentButton value="Cartão de crédito">
                    <CreditCard />
                    Cartão de crédito
                  </PaymentButton>
                  <PaymentButton value="Cartão de débito">
                    <Bank />
                    Cartão de débito
                  </PaymentButton>
                  <PaymentButton value="Dinheiro">
                    <Money />
                    Dinheiro
                  </PaymentButton>
                  {errors.paymentType && (
                    <PaymentMethodErrorMessage>
                      Escolha o meio de pagamento
                    </PaymentMethodErrorMessage>
                  )}
                </PaymentMethod>
              )
            }}
          />
        </PaymentMethodSection>
      </FormFieldsContent>
    </FormFieldsContainer>
  )
}
