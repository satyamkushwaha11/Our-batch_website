import { createSlice } from "@reduxjs/toolkit";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
   loging_Requested: (state) => {
      state.logging=true,
      state.loggedIn=false,
      state.msg="logging",
      state.user=user
    },
    login_Success: (state) => {
      state.logging=false,
      state.loggedIn=true,
      state.msg="logged in successfully"
      state.user=user
    },
    login_Failed: (state) => {
      state.logging=false,
      state.loggedIn=false,
      state.msg="logging fail check password or email"
    },
  logout: (state) => {
      state.msg="logged out"
    },
  },
});

// Action creators are generated for each case reducer function
export const { loging_Requested, loging_success, login_Failed, logout } =
  authentication.actions;

export default authentication.reducer;
