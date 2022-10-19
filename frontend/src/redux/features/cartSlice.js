import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/status";

const { IDLE, ERROR, LOADING } = STATUSES;

const initialState = {
  cartData: [],
  cartStatus: IDLE,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartIndex = state.cartData.findIndex(
        (product) => product._id === action.payload._id
      );
      if (cartIndex >= 0) {
        state.cartData[cartIndex].quantity += 1;
      } else {
        state.cartData.push(action.payload);
      }
    },
    removeFromCartQuantity: (state, action) => {
      const cartIndex = state.cartData.findIndex(
        (product) => product._id === action.payload
      );
      if (state.cartData[cartIndex].quantity > 1) {
        state.cartData[cartIndex].quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      if (action.payload === []) {
        state.cartData = state.cartData.splice(0, state.cartData.length);
      } else {
        const filterdProduct = state.cartData.filter(
          (product) => product._id !== action.payload
        );
        state.cartData = filterdProduct;
      }
    },
    setStatus: (state, action) => {
      state.cartStatus = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, removeFromCartQuantity, setStatus } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCartProducts = (id) => {
  const URL = "";
  return async function getCartProductsThunk(dispatch, getState) {
    dispatch(setStatus(LOADING));
    try {
      const { data } = await axios.get(`${URL}/product/${id}`);
      dispatch(addToCart(data));
      dispatch(setStatus(IDLE));
    } catch (error) {
      dispatch(setStatus(ERROR));
    }
  };
};
