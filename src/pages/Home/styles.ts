import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.main`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;
`

export const IntroContent = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
  }

  p {
    margin-top: 1rem;

    font-size: 1.5rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['gray-500']};
  }
`

export const IntroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 4.125rem;
`

export const IntroGridCardBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-bottom: 1.25rem;

  span {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    color: ${(props) => props.theme['white-200']};
  }
`

export const ShoppingCartItem = styled(IntroGridCardBase)`
  span {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`

export const PackageItem = styled(IntroGridCardBase)`
  span {
    background-color: ${(props) => props.theme['gray-400']};
  }
`

export const TimerItem = styled(IntroGridCardBase)`
  span {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`

export const CoffeeItem = styled(IntroGridCardBase)`
  span {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
export const CoffeeSection = styled.section`
  padding: 2rem 0 9.8125rem 0;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;

    margin-bottom: 2.125rem;

    color: ${(props) => props.theme['gray-500']};
  }
`
