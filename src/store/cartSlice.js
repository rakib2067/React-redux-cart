import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialCartState = { items: [], totalQuantity: 0, changed: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.itemId,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        //
        existingItem.quantity++;
        existingItem.totalPrice = (
          parseFloat(existingItem.totalPrice) + parseFloat(newItem.price)
        ).toFixed(2);
      }
    },
    removeItem(state, action) {
      state.totalQuantity--;
      state.changed = true;
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== itemId);
      } else {
        existingItem.totalPrice = (
          parseFloat(existingItem.totalPrice) - parseFloat(existingItem.price)
        ).toFixed(2);
        existingItem.quantity = existingItem.quantity - 1;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
