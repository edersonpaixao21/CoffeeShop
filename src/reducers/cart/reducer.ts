import { Coffee } from "../../contexts/ProductsContext/ProductsContext";
import { ActionTypes } from "./actions";

export function cartReducer(state: Coffee[] ,action: any){

  switch(action.type){
    case ActionTypes.ADD_PRODUCT_TO_CART :
      return action.payload.productIsAlreadyInCart ? 
      state.map(item =>{
        const quantityUpdated = item.quantity + action.payload.productsFiltered[0].quantity;
        return item.id === action.payload.productsFiltered[0].id ?
        {...item, quantity: quantityUpdated}
        : item 
      }) : [...state, action.payload.productsFiltered[0]]
            
      case ActionTypes.REMOVE_PRODUCT_FROM_CART :
      return action.payload.productsFiltered

      case ActionTypes.ADD_PRODUCT_QUANTITY_IN_CART :
        return state.map(item =>{
          const currentQuantity = item.quantity
          return item.id === action.payload.id ?
          {...item, quantity: currentQuantity + 1} 
          : item
        }) 

      case ActionTypes.REMOVE_PRODUCT_QUANTITY_IN_CART:
        return state.map(item =>{
          const currentQuantity = item.quantity
          return item.id === action.payload.id  && item.quantity > 1?
          {...item, quantity: currentQuantity - 1} 
          : item
        })
      
      default: return state;
  }
}