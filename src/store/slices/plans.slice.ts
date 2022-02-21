import { getPlans } from "../../api/index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

import { createPlan } from "api";
import { RootNavigation } from "utils";
import { routes } from "navigation/routes";

export const _createPlan = createAsyncThunk(
  "createPlan",
  async (data: any, thunkAPI) => {
    try {
      const response = await createPlan(data);
      console.log("register success", response);
      thunkAPI.dispatch(resetPlanField());
      RootNavigation.navigate(routes.createPlanSuccess);
      console.log("errr in try", response);
      return response.data;
    } catch (error) {
      console.log("error in catch", error.response);
      Toast.show({
        type: "error",
        text1: "Unable to create plan",
        text2: error?.response?.data?.message,
      });
    }
  },
);

export const fetchPlans = createAsyncThunk("fetchPlans", async () => {
  try {
    const response = await getPlans();
    console.log("register success", response);
    return response.data;
  } catch (error) {
    console.log("fetch plan err", error.response);
    // Toast.show({
    //   type: "error",
    //   text1: "Unable to create plan",
    //   text2: error?.message,
    // });
  }
});

export const plansSlice: any = createSlice({
  name: "plans",
  initialState: {
    fetchingPlans: false,
    creatingPlan: false,
    plans: [
      {
        id: "d7ad09e6-f731-48a5-a136-f798752653e4",
        created_at: "2022-02-08T07:22:24.994Z",
        plan_name: "Travel",
        invested_amount: 2000,
        total_returns: 220,
        target_amount: 3539.82,
        maturity_date: "2024-12-31T23:00:00.000Z",
        user_id: "cc1cfbfd-2778-4a97-83b6-129199626f3e",
      },
    ],
    plan: {},
    newPlan: {
      plan_name: "",
      maturity_date: "",
      target_amount: "",
    },
  },
  reducers: {
    setPlanField: (state, action) => {
      console.log("acc payl", action.payload);
      const { key, value } = action.payload;
      const newPlan = { ...state.newPlan };
      newPlan[key] = value;
      state.newPlan = { ...newPlan };
    },
    resetPlanField: (state, action) => {
      state.newPlan = {
        plan_name: "",
        maturity_date: "",
        target_amount: "",
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(_createPlan.pending, (state, action) => {
      state.creatingPlan = true;
    });
    builder.addCase(_createPlan.fulfilled, (state, action) => {
      state.creatingPlan = false;
    });
    builder.addCase(_createPlan.rejected, (state, action) => {
      state.creatingPlan = false;
    });

    builder.addCase(fetchPlans.pending, (state, action) => {
      state.fetchingPlans = true;
    });
    builder.addCase(
      fetchPlans.fulfilled || fetchPlans.rejected,
      (state, action) => {
        state.fetchingPlans = false;
      },
    );
  },
});

export const { setPlanField, resetPlanField } = plansSlice.actions;

export default plansSlice.reducer;
