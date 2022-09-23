import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

import { toast } from "react-toastify";
import { addProductQuantityInCartAction, addProductToCartAction, removeProductFromCartAction, removeProductQuantityInCartAction } from "../../reducers/cart/actions";
import { cartReducer } from "../../reducers/cart/reducer";

import { Coffee, ProductsContext } from "../ProductsContext/ProductsContext";

interface CartContextProps{
  cart: Coffee[];
  handleAddProductToCart: (id: number) => void;
  handleAddProductQuantityInCart: (id: number) => void;
  handleRemoveProductQuantityInCart: (id: number) => void;
  handleRemoveProductFromCart: (id: number) => void;
}

interface CartContextProviderProps{
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps){
  const { products, resetProductQuantity } = useContext(ProductsContext)

  const initCartState = () => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart')
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }else {
        return []
      }}

  const [cart, dispatch] = useReducer(
    cartReducer, 
    [], 
    initCartState)

  function handleAddProductToCart(id: number){
    const updatedCart = [...cart];
    const productsFiltered = products.filter( product => product.id === id);
    const productIsAlreadyInCart = updatedCart.find(product => product.id === productsFiltered[0].id);

    dispatch(addProductToCartAction(productsFiltered, productIsAlreadyInCart ))
    
    resetProductQuantity(id)

    toast.success('Item adicionado ao carrinho com sucesso!')
  }

  function handleAddProductQuantityInCart(id: number){
    dispatch(addProductQuantityInCartAction(id))
  }

  function handleRemoveProductQuantityInCart(id: number){
    dispatch(removeProductQuantityInCartAction(id))
  }

  function handleRemoveProductFromCart(id: number){
    const cartUpdated = [...cart];
    const productsFiltered = cartUpdated.filter(item => item.id !== id);

    dispatch(removeProductFromCartAction(productsFiltered))
  }

  useEffect(() =>{
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(cart))
  },[cart])

  return(
    <CartContext.Provider value={{
      cart,
      handleAddProductToCart,
      handleAddProductQuantityInCart,
      handleRemoveProductQuantityInCart,
      handleRemoveProductFromCart
      }}>
        { children }
      </CartContext.Provider>
  )
}
