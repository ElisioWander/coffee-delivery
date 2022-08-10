import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  padding: 2rem 0;

  > svg {
    color: ${(props) => props.theme['yellow-500']};
  }

  p {
    text-align: center;
    line-height: 1.75rem;
  }

  a {
    height: 2.875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.75rem 0.5rem;

    border-radius: 0.375rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;

    color: ${(props) => props.theme['white-100']};
    background-color: ${(props) => props.theme['purple-900']};

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`
