import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};

const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    payTotal: (state, action) => {
      console.log(action.payload);
      state.price = action.payload;
    },
  },
});

export const { payTotal } = totalSlice.actions;

export default totalSlice.reducer;
