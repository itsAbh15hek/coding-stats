import { toast } from "react-toastify";
import { publicRequest, userRequest } from "../../requestMethods";
import {
  deleteUserSuccess,
  loginSuccess,
  updateSuccess,
  userFailure,
  userStart,
} from "../userSlice";

// function to log into the website
export const login = async (dispatch, user) => {
  // start fetching
  dispatch(userStart());
  try {
    // api call
    const res = await publicRequest.post("/user/login", user);
    // update state if login successfull
    dispatch(loginSuccess(res.data));
    toast("Logged In Successfully!");
  } catch (error) {
    // update state if login unsuccessfull
    dispatch(userFailure(error?.response?.data?.message));
    toast(error?.response?.data?.message);
  }
};

// function to register the user
export const signup = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/user/signup", user);
    toast("User Registered!");
    login(dispatch, { username: user.username, password: user.password });
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
    toast(error?.response?.data?.message);
  }
};
// function to update password
export const updatePassword = async (dispatch, passwords) => {
  dispatch(userStart());
  try {
    const res = await userRequest.patch("/user/updateMyPassword", {
      ...passwords,
    });
    dispatch(updateSuccess(res.data));
    toast("Password updated Successfully!");
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
    toast(error?.response?.data?.message);
  }
};

// function to delete the user
export const deleteUser = async (dispatch, password) => {
  dispatch(userStart());
  try {
    const res = await userRequest.post("/user/deleteMe", {
      password: password,
    });
    toast("Your account has been deleted");
    dispatch(deleteUserSuccess());
  } catch (error) {
    dispatch(userFailure(error?.response?.data?.message));
    toast(error?.response?.data?.message);
  }
};
