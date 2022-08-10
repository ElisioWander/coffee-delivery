import { createContext, ReactNode, useContext, useState } from 'react'
import { FinalizeOrderData } from '../pages/Checkout'
import coffeeData from '../../coffee-data.json'

type CoffeeData = {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: string
}

type CardItemsData = {
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
  coffees: CoffeeData[]
  cartItems: CardItemsData[]
  finalizedOrder: FinalizeOrderData
  paymentMethod: string
  addCoffeeToCart: (coffeeAdded: CardItemsData) => void
  updateCoffeeInCart: (updatedCoffee: UpdatedCoffee) => void
  deleteCoffeeFromCart: (deletedCoffeeId: string) => void
  getFinalizedOrderData: (data: FinalizeOrderData) => void
  getSelectedPaymentMethod: (payment: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CardItemsData[]>([])
  const [finalizedOrder, setFinalizedOrder] = useState({} as FinalizeOrderData)
  const [paymentMethod, setPaymentMethod] = useState('')

  const coffees = coffeeData

  function addCoffeeToCart(coffeeAdded: CardItemsData) {
    setCartItems((state) => [...state, coffeeAdded])
  }

  function updateCoffeeInCart(updatedCoffee: UpdatedCoffee) {
    const { amount, id } = updatedCoffee

    setCartItems((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, amount }
        } else {
          return coffee
        }
      }),
    )
  }

  function deleteCoffeeFromCart(deletedCoffeeId: string) {
    setCartItems((state) =>
      state.filter((coffee) => coffee.id !== deletedCoffeeId),
    )
  }

  function getFinalizedOrderData(data: FinalizeOrderData) {
    setFinalizedOrder(data)
  }

  function getSelectedPaymentMethod(payment: string) {
    setPaymentMethod(payment)
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        cartItems,
        finalizedOrder,
        paymentMethod,
        addCoffeeToCart,
        updateCoffeeInCart,
        deleteCoffeeFromCart,
        getFinalizedOrderData,
        getSelectedPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
