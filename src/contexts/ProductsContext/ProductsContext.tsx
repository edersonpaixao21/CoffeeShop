import { createContext, ReactNode, useReducer} from "react";

import { CoffeesApi } from '../../coffeesApi'
import { ActionTypes } from "../../reducers/products/actions";
import { productsReducer } from "../../reducers/products/reducer";

export interface Coffee{
  id: number;
  title: string;
  description: string;
  quantity: number;
  label: string[];
  image: string;
  price: number;
}

interface ProductsContextType{
  products: Coffee[];
  handleAddProductQuantity: (id:number) => void;
  handleRemoveProductQuantity: (id:number) => void;
  resetProductQuantity: (id:number) => void;
}

interface ProductsContextProviderProps{
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsContextProvider({children}: ProductsContextProviderProps){
  const allCoffees = CoffeesApi ;

  const [products, dispatch] = useReducer(
  productsReducer
  , allCoffees);

  function handleAddProductQuantity(id:number){
    dispatch({
      type: ActionTypes.ADD_PRODUCT_QUANTITY,
      payload: {
        id
      }
    })
  }

  function handleRemoveProductQuantity(id:number){
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_QUANTITY,
      payload: {
        id
      }
    })
  }

  function resetProductQuantity(id : number){
    dispatch({
      type: ActionTypes.RESET_PRODUCT_QUANTITY,
      payload: {
        id
      }
    })
  }

  return(
    <ProductsContext.Provider value={{
      products,
      handleAddProductQuantity,
      handleRemoveProductQuantity,
      resetProductQuantity
      }}>
        { children }
      </ProductsContext.Provider>
  )
}