import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/useReducer";

const initialState = {
  total: 0,
  cartList: []
}

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) => {
    const updatedCartList = [...state.cartList, product];
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        total: state.total + product.price,
        cartList: updatedCartList
      }
    })
  }

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(cart => cart.id !== product.id);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        total: state.total - product.price,
        cartList: updatedCartList
      }
    })
  }

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
}