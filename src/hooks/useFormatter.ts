export function useFormatter(value: number | null) {
  const currencyFormatted = value?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return { currencyFormatted }
}
