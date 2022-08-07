import { createContext, ReactNode, useContext, useState } from 'react'

type CoffeeData = {
  id: string
  image: string
  name: string
  amount: number
  price: string
}

type UpdatedCoffee = {
  id: string
  amount: number
}

type CartContextData = {
  cartItems: CoffeeData[]
  addCoffeeToCart: (coffeeAdded: CoffeeData) => void
  updateCoffeeInCart: (updatedCoffee: UpdatedCoffee) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CoffeeData[]>([])

  function addCoffeeToCart(coffeeAdded: CoffeeData) {
    setCartItems((state) => [...state, coffeeAdded])
  }

  function updateCoffeeInCart(updatedCoffee: UpdatedCoffee) {}

  return (
    <CartContext.Provider
      value={{ cartItems, addCoffeeToCart, updateCoffeeInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
