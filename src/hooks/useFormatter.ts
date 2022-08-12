export function useFormatter(value: number | null) {
  const currency = value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return { currency }
}
