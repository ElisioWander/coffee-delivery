import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;

    color: ${(props) => props.theme['gray-500']};

    span {
      display: block;

      font-size: 0.875rem;
      line-height: 1.1375rem;

      color: ${(props) => props.theme['gray-400']};
    }
  }
`
