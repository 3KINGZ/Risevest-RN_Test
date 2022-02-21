import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

import { login, register } from "api";
import { deleteItem, RootNavigation } from "utils";
import { routes } from "navigation/routes";

export const signUp = createAsyncThunk("register", async (data: any) => {
  try {
    const response = await register(data);
    console.log("register success", response);
    RootNavigation.navigate(routes.createAccountSuccess);
    return response.data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Signup error",
      text2: error?.message,
    });
  }
});

export const signIn = createAsyncThunk("login", async (data: any) => {
  try {
    const response = await login(data);
    console.log("login success", response.data);
    if (!response.message) {
      return response.data;
    }
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Login error",
      text2: error?.message,
    });
  }
});

export const authSlice: any = createSlice({
  name: "auth",
  initialState: {
    signingUp: false,
    loggingIn: false,
    account: {
      first_name: "",
      last_name: "",
      email_address: "",
      password: "",
      username: "",
      phonenumber: "",
      date_of_birth: "",
    },
    user: null,
  },
  reducers: {
    setAccountField: (state, action) => {
      console.log("acc payl", action.payload);
      const { key, value } = action.payload;
      const account = { ...state.account };
      account[key] = value;
      state.account = { ...account };
    },
    resetAccount: (state, action) => {
      state.account = {
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
        username: "",
        phonenumber: "",
        date_of_birth: "",
      };
    },
    logout: (state, action) => {
      state.user = null;
      deleteItem("@user");
    },
    syncAuthData: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.signingUp = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.signingUp = false;
      state.account = {
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
        username: "",
        phonenumber: "",
        date_of_birth: "",
      };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.signingUp = false;
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.loggingIn = true;
    });
    builder.addCase(signIn.fulfilled || signIn.rejected, (state, action) => {
      state.loggingIn = false;
      state.user = action.payload;
    });
  },
});

export const { setAccountField, resetAccount, logout, syncAuthData } =
  authSlice.actions;

export default authSlice.reducer;
