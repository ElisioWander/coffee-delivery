import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
`

export const HeaderContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`

export const Actions = styled.div`
  width: 13.0625rem;
  display: flex;
  gap: 0.76rem;

  span {
    display: flex;
    align-items: center;
  }
`

export const Location = styled.span`
  flex: 1;
  gap: 0.25rem;

  padding: 0.5rem;

  font-size: 0.875rem;
  border-radius: 0.375rem;

  color: ${(props) => props.theme['purple-900']};
  background-color: ${(props) => props.theme['purple-100']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Cart = styled.span`
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-100']};

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`
