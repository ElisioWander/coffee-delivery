import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  padding: 9rem 0;

  @media (max-width: 658px) {
    display: flex;
    flex-direction: column;
  }
`

export const FinalizeOrderContainer = styled.div`
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

export const FinalizeOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  background-color: ${(props) => props.theme['white-300']};
`

export const SelectedOrder = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem 1.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['white-500']};
`

export const SelectedOrderInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const SelectedOrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    line-height: 1.3rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SelectedOrderActions = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddCoffee = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;

  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['white-500']};

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['purple-500']};

    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme['purple-900']};
    }
  }
`

export const RemoveCoffee = styled.button`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0 0.5rem;

  border: none;
  border-radius: 0.375rem;

  font-size: 0.75rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['white-500']};

  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    color: ${(props) => props.theme['gray-500']};
    background-color: ${(props) => props.theme['white-600']};

    svg {
      color: ${(props) => props.theme['purple-900']};
    }
  }
`

export const Price = styled.span`
  font-weight: 700;
  line-height: 1.3rem;
`

export const CalcTotalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CalcTotalBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    line-height: 1.1375rem;
  }

  span:last-child {
    font-size: 1rem;
  }
`

export const CalcTotalItens = styled(CalcTotalBase)``

export const CalcTotalShipping = styled(CalcTotalBase)``

export const CalcTotal = styled(CalcTotalBase)`
  span,
  span:last-child {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.625rem;

    color: ${(props) => props.theme['gray-500']};
  }
`

export const FinalizeOrderButton = styled.button`
  padding: 0.75rem 0.5rem;

  border: 2px solid transparent;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4rem;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme['white-100']};
  background-color: ${(props) => props.theme['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-900']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
    border: 2px solid ${(props) => props.theme['white-300']};
  }
`
