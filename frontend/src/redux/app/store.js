import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productDetailReducer from "../features/productDetailSlice";
import productReducer from "../features/productSlice";
import userReducer from "../features/userSlice";
import totalReducer from "../features/totalSlice";

export const store = configureStore({
  reducer: {
    total: totalReducer,
    user: userReducer,
    product: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});
