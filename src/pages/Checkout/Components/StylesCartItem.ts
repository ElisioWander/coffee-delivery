import styled from 'styled-components'

export const SelectedOrder = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem 0.25rem 1.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['white-500']};

  @media (max-width: 396px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
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

  @media (max-width: 396px) {
    width: 100%;
    display: block;
    text-align: end;
  }
`
