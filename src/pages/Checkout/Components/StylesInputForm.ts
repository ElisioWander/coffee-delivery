import styled from 'styled-components'

export const InputContainer = styled.div`
  input[name='cep'] {
    width: 12.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;

  font-size: 0.875rem;

  border: none;
  border: 1px solid ${(props) => props.theme['white-500']};
  border-radius: 0.25rem;

  color: ${(props) => props.theme['gray-400']};

  background-color: ${(props) => props.theme['white-400']};

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }

  :focus {
    outline: 0;
    border: 1px solid ${(props) => props.theme['yellow-900']};

    &::placeholder {
      color: transparent;
    }
  }
`

export const ErrorMessage = styled.p`
  padding: 0.25rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme['red-100']};
`
