import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const FormFieldsContainer = styled.div`
  > span {
    display: block;
    margin-bottom: 0.9375rem;

    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4625rem;

    color: ${(props) => props.theme['gray-500']};
  }
`

export const FormFieldsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormFieldsInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: none;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['white-300']};

  @media (max-width: 658px) {
    padding: 1.5rem;
  }
`

export const InputGrup = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 658px) {
    input,
    input:first-child {
      width: 100%;
    }
  }
`

export const InputGrupFlex = styled.div`
  display: flex;
  gap: 0.75rem;

  div:last-child {
    flex: 1;
  }

  @media (max-width: 658px) {
    display: flex;
    flex-direction: column;
  }
`

export const InputGrupGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 0.75rem;

  @media (max-width: 658px) {
    display: flex;
    flex-direction: column;
  }
`

export const PaymentMethodSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: none;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['white-300']};

  @media (max-width: 658px) {
    padding: 1.5rem;
  }
`

export const PaymentMethod = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 658px) {
    display: flex;
    flex-direction: column;
  }
`

export const PaymentButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 0.375rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['white-500']};

  transition: all 0.1s;

  &:hover {
    color: ${(props) => props.theme['gray-500']};
    background-color: ${(props) => props.theme['white-600']};
  }

  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PaymentMethodErrorMessage = styled.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme['red-100']};
`
