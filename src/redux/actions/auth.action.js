import { Post } from "../../config/requests";
import {
  loging_Requested,
  login_Success,
  login_Failed,
  logout,
} from "../reducers/auth.reducers/auth.reducer";
import {
  signup_Requested,
  signup_Success,
  signup_Failed,
} from "../reducers/auth.reducers/signup.reducer";

export const login = (loginData) => {
  return async function (dispatch) {
    dispatch(loging_Requested());
    const result = await Post("/login", loginData);
    // console.log(result);
    dispatch(login_Success());

    // let result;
    // Post("/login", loginData)
    //   .then((data) => {
    //     console.log(data);
    //     result = data;
    //     dispatch(login_Success());
    //   })
    //   .catch((err) => {
    //     dispatch(login_Failed());
    //   });
    return result;
  };
};

export const userSignup = (signupData) => {
  return async function (dispatch) {
    dispatch(signup_Requested());
    let result;
    Post("/signup", signupData)
      .then((result) => {
        dispatch(signup_Success());
      })
      .catch((err) => {
        dispatch(signup_Failed({ msg: err.massage }));
      });

    return result;
  };
};

export const logoutUser = () => {
  return async function (dispatch) {
    dispatch(logout());
    return;
  };
};
