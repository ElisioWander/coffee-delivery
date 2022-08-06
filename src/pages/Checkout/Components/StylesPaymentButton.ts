import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid transparent;
  border-radius: 0.375rem;

  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => props.theme['gray-400']};
  background-color: ${(props) => props.theme['white-500']};

  transition: all 0.1s;

  &:hover {
    color: ${(props) => props.theme['gray-500']};
    background-color: ${(props) => props.theme['white-600']};
  }

  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['purple-500']};
  }
`
