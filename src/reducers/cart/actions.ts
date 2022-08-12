import { UpdatedCoffee } from '../../Context/CartContext'
import { FinalizeOrderData } from '../../pages/Checkout'
import { CardItemsData } from './reduce'

export enum ActionType {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  UPDATE_COFFEE_IN_CART = 'UPDATE_COFFEE_IN_CART',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
  GET_SELECTED_PAYMENT_METHOD = 'GET_SELECTED_PAYMENT_METHOD',
  GET_FINALIZED_ORDER_DATA = 'GET_FINALIZED_ORDER_DATA',
}

export function addCoffeeToCartAction(coffeeAdded: CardItemsData) {
  return {
    type: ActionType.ADD_COFFEE_TO_CART,
    payload: {
      coffeeAdded,
    },
  }
}

export function updateCoffeeInCartAction(updatedCoffee: UpdatedCoffee) {
  const { amount, id, totalPrice } = updatedCoffee

  return {
    type: ActionType.UPDATE_COFFEE_IN_CART,
    payload: {
      amount,
      id,
      totalPrice,
    },
  }
}

export function deleteCoffeeFromCartAction(deletedCoffeeId: string) {
  return {
    type: ActionType.DELETE_COFFEE_FROM_CART,
    payload: {
      deletedCoffeeId,
    },
  }
}

export function getSelectedPaymentMethodAction(payment: string) {
  return {
    type: ActionType.GET_SELECTED_PAYMENT_METHOD,
    payload: {
      payment,
    },
  }
}

export function getFinalizedOrderDataAction(data: FinalizeOrderData) {
  return {
    type: ActionType.GET_FINALIZED_ORDER_DATA,
    payload: {
      data,
    },
  }
}
