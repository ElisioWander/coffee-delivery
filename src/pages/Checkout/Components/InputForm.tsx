import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { ErrorMessage, Input, InputContainer } from './StylesInputForm'

interface InputBaseProps {
  type: string
  placeholder: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { type, placeholder, error, ...rest },
  ref,
) => {
  return (
    <InputContainer>
      <Input
        type={type}
        id={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
}

export const InputForm = forwardRef(InputBase)
