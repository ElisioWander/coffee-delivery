import { FinalizeOrderData } from '../../pages/Checkout'
import { ActionType } from './actions'

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
  paymentMethod: string
  finalizedOrder: FinalizeOrderData | null
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionType.ADD_COFFEE_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.coffeeAdded],
      }

    case ActionType.UPDATE_COFFEE_IN_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((coffee) => {
          if (coffee.id === action.payload.id) {
            return {
              ...coffee,
              amount: action.payload.amount,
              totalPrice: action.payload.totalPrice,
            }
          } else {
            return coffee
          }
        }),
      }

    case ActionType.DELETE_COFFEE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (coffee) => coffee.id !== action.payload.deletedCoffeeId,
        ),
      }

    case ActionType.GET_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload.payment,
      }
    case ActionType.GET_FINALIZED_ORDER_DATA:
      return {
        ...state,
        cartItems: [],
        finalizedOrder: action.payload.data,
      }

    default:
      return state
  }
}
