import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.25rem;
  border-radius: 0.375rem 2.25rem;

  background-color: ${(props) => props.theme['white-300']};

  > img {
    width: 7.75rem;
    height: 7.75rem;

    margin-top: -40px;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  p {
    margin: 0.5rem 0 2.0625rem 0;

    font-size: 0.875rem;
    line-height: 1.1375rem;
    text-align: center;

    color: ${(props) => props.theme['gray-300']};
  }
`

export const CoffeeType = styled.div`
  display: flex;
  gap: 0.25rem;

  > span {
    margin: 1rem 0 1.25rem 0;

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    padding: 0.25rem 0.5rem;
    border: 0;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-900']};
    background-color: ${(props) => props.theme['yellow-100']};
  }
`

export const CardBuySection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8125rem;
`

export const Price = styled.span`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.1375rem;
  }

  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.95rem;
`

export const CoffeeAmount = styled.div`
  height: 2.375rem;

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

export const CartItem = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0.375rem;

  cursor: pointer;

  background-color: ${(props) => props.theme['purple-900']};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }

  svg {
    color: ${(props) => props.theme['white-300']};
  }
`
