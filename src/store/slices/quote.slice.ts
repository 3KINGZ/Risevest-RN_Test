import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getQuote } from "../../api/index";

export const fetchQuote = createAsyncThunk(
  "fetchQuote",
  async (data: any, thunkAPI) => {
    try {
      const response = await getQuote();
      return response.data;
    } catch (error) {
      console.log("error in catch", error.response);
    }
  },
);

export const quoteSlice: any = createSlice({
  name: "quote",
  initialState: {
    loading: false,
    quote: {
      quote:
        "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so that you have money to invest. You can't win until you do this.",
      author: "Dave Ramsey",
    },
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuote.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      fetchQuote.fulfilled || fetchQuote.rejected,
      (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      },
    );
  },
});

export default quoteSlice.reducer;
