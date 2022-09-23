import { Coffee } from "../../contexts/ProductsContext/ProductsContext";
import { ActionTypes } from "./actions";

export function productsReducer(state: Coffee[], action: any){

  switch(action.type){
    case ActionTypes.ADD_PRODUCT_QUANTITY :
      return state.map(product =>{
        const currentQuantity = product.quantity;
        return product.id === action.payload.id ?
        {...product, quantity: currentQuantity + 1} 
        : product
      }) 

    case ActionTypes.REMOVE_PRODUCT_QUANTITY :
      return state.map(product =>{
        const currentQuantity = product.quantity;
        return product.id === action.payload.id && currentQuantity > 1?
        {...product, quantity: currentQuantity - 1} 
        : product
      }) 

    case ActionTypes.RESET_PRODUCT_QUANTITY :
      return state.map(product =>{
        return product.id === action.payload.id ? 
        {...product, quantity: 1} 
        : product
      })

    default : return state;
    
  }
}