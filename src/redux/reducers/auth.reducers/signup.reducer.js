import { createSlice } from "@reduxjs/toolkit";
export const registration = createSlice({
  name: "registration",
  initialState: {
    reducers: {
      signup_Requested: (state) => {
        (state.signingUp = true),
         
          (state.msg = "signingUp"),
          (state.user = user);
      },
      signup_Success: (state) => {
        (state.signup = true),
          (state.msg = "signup in successfully");
        state.user = user;
      },
      signup_Failed: (state) => {
       
          (state.msg = "signup fail check password or email");
      },
    },
  },
});

export const {signup_Requested,signup_Success,signup_Failed}=registration.actions
export default  registration.reducer