import { ReactNode } from 'react'
import { Header } from './StylesFormFieldsTitle'

interface FormFieldsInputsTitleProps {
  title: string
  description: string
  icon: ReactNode
}

export function FormFieldsTitle({
  title,
  description,
  icon,
}: FormFieldsInputsTitleProps) {
  return (
    <Header>
      {icon}
      <h2>
        {title}
        <span>{description}</span>
      </h2>
    </Header>
  )
}
