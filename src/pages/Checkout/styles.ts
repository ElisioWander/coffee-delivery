import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  padding: 9rem 0;

  @media (max-width: 1136px) {
    max-width: 40rem;

    display: flex;
    flex-direction: column;

    margin: 0 auto;
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
  border-radius: 0.375rem 2.75rem;

  background-color: ${(props) => props.theme['white-300']};

  @media (max-width: 396px) {
    padding: 1rem;
  }
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

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
