import { Coffee } from "../../contexts/ProductsContext/ProductsContext";

export enum ActionTypes{
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  ADD_PRODUCT_QUANTITY_IN_CART = 'ADD_PRODUCT_QUANTITY_IN_CART',
  REMOVE_PRODUCT_QUANTITY_IN_CART = 'REMOVE_PRODUCT_QUANTITY_IN_CART',
}

export function addProductToCartAction(productsFiltered: Coffee[], productIsAlreadyInCart: Coffee ){
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      productIsAlreadyInCart,
      productsFiltered,
    }
  }
}

export function removeProductFromCartAction(productsFiltered : Coffee[]){
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productsFiltered
    }
  }
}

export function addProductQuantityInCartAction(id: number){
  return {
    type: ActionTypes.ADD_PRODUCT_QUANTITY_IN_CART,
    payload: {
      id
    }
  }
}

export function removeProductQuantityInCartAction(id: number){
  return {
    type: ActionTypes.REMOVE_PRODUCT_QUANTITY_IN_CART,
    payload: {
      id
    }
  }
}