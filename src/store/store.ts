import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import plansReducer from "./slices/plans.slice";
import userReducer from "./slices/user.slice";
import quoteReducer from "./slices/quote.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plans: plansReducer,
    user: userReducer,
    quote: quoteReducer,
  },
});
