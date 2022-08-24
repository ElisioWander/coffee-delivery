import { ActionType } from './actions'
import produce from 'immer'
import { FinalizeOrderData } from '../../Context/CartContext'

export type CardItemsData = {
  id: string
  image: string
  name: string
  amount: number
  price: number
  totalPrice: number
}

type CartState = {
  cartItems: CardItemsData[]
  coffeeAmount: number
  finalizedOrder: FinalizeOrderData | null
}

const INITIAL_STATE: CartState = {
  cartItems: [],
  coffeeAmount: 1,
  finalizedOrder: null,
}

export function CartReducer(state = INITIAL_STATE, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionType.ADD_COFFEE_TO_CART: {
        const { coffeeAdded } = action.payload

        const itemInCartIndex = draft.cartItems.findIndex(
          (item) => item.id === coffeeAdded.id,
        )

        if (itemInCartIndex >= 0) {
          draft.cartItems[itemInCartIndex] = coffeeAdded
        } else {
          draft.cartItems.push(coffeeAdded)
        }

        break
      }

      case ActionType.UPDATE_COFFEE_IN_CART: {
        const { id, amount, totalPrice } = action.payload

        const updatedCoffee = draft.cartItems.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              amount,
              totalPrice,
            }
          } else {
            return coffee
          }
        })

        draft.cartItems = updatedCoffee

        break
      }

      case ActionType.DELETE_COFFEE_FROM_CART: {
        const filteredCartItems = draft.cartItems.filter(
          (coffee) => coffee.id !== action.payload.deletedCoffeeId,
        )

        draft.cartItems = filteredCartItems

        break
      }

      case ActionType.GET_FINALIZED_ORDER_DATA:
        draft.cartItems = []
        draft.finalizedOrder = action.payload.data

        break

      default:
        return draft
    }
  })
}
