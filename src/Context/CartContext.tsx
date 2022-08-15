import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import {
  addCoffeeToCartAction,
  deleteCoffeeFromCartAction,
  getFinalizedOrderDataAction,
  getSelectedPaymentMethodAction,
  updateCoffeeInCartAction,
} from '../reducers/cart/actions'
import { FinalizeOrderData } from '../pages/Checkout'
import { CardItemsData, CartReducer } from '../reducers/cart/reduce'

export type UpdatedCoffee = {
  id: string
  amount: number
  totalPrice: number
}

type CartContextData = {
  cartItems: CardItemsData[]
  paymentMethod: string
  finalizedOrder: FinalizeOrderData | null
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
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cartItems: [],
      paymentMethod: '',
      finalizedOrder: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-club:cartState-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return {
          cartItems: [],
          paymentMethod: '',
          finalizedOrder: null,
        }
      }
    },
  )

  const { cartItems, paymentMethod, finalizedOrder } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-club:cartState-1.0.0', stateJSON)
  }, [cartState])

  function addCoffeeToCart(coffeeAdded: CardItemsData) {
    dispatch(addCoffeeToCartAction(coffeeAdded))
  }

  function updateCoffeeInCart(updatedCoffee: UpdatedCoffee) {
    dispatch(updateCoffeeInCartAction(updatedCoffee))
  }

  function deleteCoffeeFromCart(deletedCoffeeId: string) {
    dispatch(deleteCoffeeFromCartAction(deletedCoffeeId))
  }

  function getSelectedPaymentMethod(payment: string) {
    dispatch(getSelectedPaymentMethodAction(payment))
  }

  function getFinalizedOrderData(data: FinalizeOrderData) {
    dispatch(getFinalizedOrderDataAction(data))
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
