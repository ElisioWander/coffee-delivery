import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  background-color: rgba(22, 22, 22, 0.8);
`

export const SpinnerContent = styled.div`
  width: 90%;
  max-width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding: 1.5rem;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['white-200']};

  @keyframes go-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  svg {
    animation: go-rotating 1s infinite;
    color: ${(props) => props.theme['yellow-500']};
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.6;

    color: ${(props) => props.theme['gray-500']};
  }
`
