import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((id) => newItem.itemId);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        //
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== itemId);
        state.totalQuantity--;
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        state.totalQuantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
