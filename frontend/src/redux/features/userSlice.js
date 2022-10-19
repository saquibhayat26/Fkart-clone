import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  mobile: "",
  email: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state["firstname"] = action.payload.firstname;
      state["lastname"] = action.payload.lastname;
      state["username"] = action.payload.username;
      state["mobile"] = action.payload.mobile;
      state["email"] = action.payload.email;
      state["loggedIn"] = true;
    },
    removeUser: (state, action) => {
      state["firstname"] = "";
      state["lastname"] = "";
      state["username"] = "";
      state["mobile"] = "";
      state["email"] = "";
      state["loggedIn"] = false;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
