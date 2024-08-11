import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0
  },
  reducers: {
    add(state, action) {
      state.cartList.push(action.payload);
      state.total += action.payload.price;
    },
    remove(state, action) {
      state.cartList = state.cartList.filter(cartItem => cartItem.id !== action.payload.id);
      state.total -= action.payload.price;
    },
  }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;