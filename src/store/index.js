import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";
const { configureStore, createSlice } = require("@reduxjs/toolkit");
const { createStore } = require("redux");

const store = configureStore({ reducer: { ui: uiSlice, cart: cartSlice } });

export default store;
