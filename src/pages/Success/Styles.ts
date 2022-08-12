import styled from 'styled-components'

export const SuccessContainer = styled.div`
  height: 100vh;

  padding-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`

export const SuccessContent = styled.div`
  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${(props) => props.theme['yellow-900']};
  }

  > h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;

    margin: 0.25rem 0 2.5rem 0;
  }
`

export const SuccessInfos = styled.main`
  width: 27.125rem;
  height: 16.875rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  margin: 1px;
  border-radius: 6px 32px;

  margin-left: auto;

  position: relative;

  background-color: ${(props) => props.theme['white-200']};

  &::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    margin: -1px;
    border-radius: inherit;

    z-index: -1;

    background-image: linear-gradient(95deg, #dbac2c, #8047f8);
  }

  @media (max-width: 448px) {
    width: 100%;
  }
`
export const DeliverySectionBase = styled.div`
  display: flex;
  gap: 0.75rem;

  header {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;

    color: ${(props) => props.theme['white-200']};
  }
`

export const DeliveryDestination = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['purple-500']};
  }

  span {
    text-transform: capitalize;
  }
`

export const DeliveryTimer = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`

export const DeliveryPayment = styled(DeliverySectionBase)`
  header {
    background-color: ${(props) => props.theme['yellow-900']};
  }
`
