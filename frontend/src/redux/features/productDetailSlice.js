import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constants/status";
import axios from "axios";

const { IDLE, ERROR, LOADING } = STATUSES;

const initialState = {
  status: IDLE,
  myData: "",
};

const productDetailSlice = createSlice({
  name: "productDetail",
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

export const { setProducts, setStatus } = productDetailSlice.actions;

export default productDetailSlice.reducer;

// THUNK MIDDLEWARE FOR THE API CALLS

export const getProductDetails = (id) => {
  const URL = "";
  return async function getProductDetailsThunk(dispatch, getState) {
    dispatch(setStatus(LOADING));
    try {
      const { data } = await axios.get(`${URL}/product/${id}`);
      dispatch(setProducts(data));
      dispatch(setStatus(IDLE));
    } catch (error) {
      dispatch(setStatus(ERROR));
    }
  };
};
