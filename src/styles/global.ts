import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  @keyframes go-back {
    0% {
      transform: translateX(150px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes go-ahead {
    0% {
      transform: translateX(-150px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  body {
    background-color: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-400']};

    -webkit-font-smoothing: antialiased;
  }

  h1 {
    color: ${(props) => props.theme['gray-700']};
  }

  h2, h3 {
    color: ${(props) => props.theme['gray-500']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
