import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    remove: (state, { payload: id }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== id;
      });
    },
    increase: (state, actions) => {
      const id = actions.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const id = payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
export const { clearCart, increase, remove, decrease,calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
