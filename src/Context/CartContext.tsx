import { createContext, ReactNode, useContext, useState } from 'react'
import { FinalizeOrderData } from '../pages/Checkout'

type CardItemsData = {
  id: string
  image: string
  name: string
  amount: number
  price: number
  totalPrice: number
}

type UpdatedCoffee = {
  id: string
  amount: number
  totalPrice: number
}

type CartContextData = {
  cartItems: CardItemsData[]
  finalizedOrder: FinalizeOrderData
  paymentMethod: string
  addCoffeeToCart: (coffeeAdded: CardItemsData) => void
  updateCoffeeInCart: (updatedCoffee: UpdatedCoffee) => void
  deleteCoffeeFromCart: (deletedCoffeeId: string) => void
  getSelectedPaymentMethod: (payment: string) => void
  getFinalizedOrderData: (data: FinalizeOrderData) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CardItemsData[]>([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [finalizedOrder, setFinalizedOrder] = useState({} as FinalizeOrderData)

  function addCoffeeToCart(coffeeAdded: CardItemsData) {
    setCartItems((state) => [...state, coffeeAdded])
  }

  function updateCoffeeInCart(updatedCoffee: UpdatedCoffee) {
    const { amount, id, totalPrice } = updatedCoffee

    setCartItems((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, amount, totalPrice }
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

  function getSelectedPaymentMethod(payment: string) {
    setPaymentMethod(payment)
  }

  function getFinalizedOrderData(data: FinalizeOrderData) {
    setFinalizedOrder(data)
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        paymentMethod,
        finalizedOrder,
        addCoffeeToCart,
        updateCoffeeInCart,
        deleteCoffeeFromCart,
        getSelectedPaymentMethod,
        getFinalizedOrderData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
