import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/status";
import axios from "axios";

const { IDLE, ERROR, LOADING } = STATUSES;

const initialState = {
  status: IDLE,
  myData: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.myData = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// THUNK MIDDLEWARE FOR THE API CALLS

export const fetchProducts = () => {
  const URL = "";
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(LOADING));
    try {
      const { data } = await axios.get(`${URL}/products`);
      dispatch(setProducts(data));
      dispatch(setStatus(IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(ERROR));
    }
  };
};
