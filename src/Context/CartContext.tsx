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
  updateCoffeeInCartAction,
} from '../reducers/cart/actions'
import { CardItemsData, CartReducer } from '../reducers/cart/reduce'

export type UpdatedCoffee = {
  id: string
  amount: number
  totalPrice: number
}

export type FinalizeOrderData = {
  number: string
  cep: string
  street: string
  complement: string
  district: string
  city: string
  uf: string
  paymentType: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
}

type CartContextData = {
  cartItems: CardItemsData[]
  finalizedOrder: FinalizeOrderData | null
  addCoffeeToCart: (coffeeAdded: CardItemsData) => void
  updateCoffeeInCart: (updatedCoffee: UpdatedCoffee) => void
  deleteCoffeeFromCart: (deletedCoffeeId: string) => void
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
          finalizedOrder: null,
        }
      }
    },
  )

  const { cartItems, finalizedOrder } = cartState

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

  function getFinalizedOrderData(data: FinalizeOrderData) {
    dispatch(getFinalizedOrderDataAction(data))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        finalizedOrder,
        addCoffeeToCart,
        updateCoffeeInCart,
        deleteCoffeeFromCart,
        getFinalizedOrderData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
