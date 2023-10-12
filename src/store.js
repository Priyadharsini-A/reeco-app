import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductReducer";

const store = configureStore({
  reducer: {
    Product: ProductReducer,
  },
});
export default store;
