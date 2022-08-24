import * as zod from 'zod'

// esquema de validação utilizado para validar os campos do formulário de compra do café
export const finalizeOrderSchemaValidation = zod.object({
  cep: zod
    .string()
    .min(8, { message: 'Mínimo de 8 caracteres' })
    .max(8, 'Maximo de 8 caracteres'),
  street: zod.string().min(1, { message: 'Nome da rua é obrigatório' }),
  number: zod
    .string()
    .min(1, { message: 'Número da residência é obrigatório' }),
  complement: zod.string(),
  district: zod.string().min(1, { message: 'Nome do bairro é obrigatório' }),
  city: zod.string().min(1, { message: 'Nome da cidade é obrigatório' }),
  uf: zod.string().min(1, { message: 'Obrigatório' }),
  paymentType: zod.enum(['Cartão de crédito', 'Cartão de débito', 'Dinheiro']),
})

export type FinalizeOrderData = zod.infer<typeof finalizeOrderSchemaValidation>
