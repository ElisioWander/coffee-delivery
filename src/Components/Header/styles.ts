import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;

  padding: 2rem 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme['white-300']};

  position: fixed;
  left: 0;

  z-index: 1;

  background-color: ${(props) => props.theme['white-200']};
`

export const HeaderContent = styled.nav`
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`

export const Actions = styled.div`
  min-width: 13.0625rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  gap: 0.76rem;
`

export const Location = styled.span`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 768px) {
    visibility: hidden;
  }
`

export const Cart = styled.div`
  height: 100%;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-100']};

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const CartWithItem = styled(Cart)`
  position: relative;
  cursor: pointer;

  span {
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8.35px;

    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.975rem;
    letter-spacing: -0.06rem;

    color: ${(props) => props.theme['white-100']};
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
