import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUserDetail } from "../../api/index";
import { syncAuthData } from "store/slices/auth.slice";
import { storeValue } from "./../../utils/cache";

export const updateUserDetail = createAsyncThunk(
  "createPlan",
  async (data, thunkAPI) => {
    try {
      const response = await getUserDetail();
      await storeValue("@user", JSON.stringify(response.data));
      thunkAPI.dispatch(syncAuthData(response.data));
      return response.data;
    } catch (error) {
      //err
    }
  },
);

export const userSlice: any = createSlice({
  name: "user",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateUserDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      updateUserDetail.fulfilled || updateUserDetail.rejected,
      (state, action) => {
        state.loading = false;
      },
    );
  },
});

export default userSlice.reducer;
