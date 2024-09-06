import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoading: false,
    restaurant: {},
    error: null,
  },
  reducers: {
    getRestaurantStart: (state) => {
      state.isLoading = true;
    },
    getRestaurantSuccess: (state, action) => {
      state.isLoading = false;
      state.restaurant = action.payload;
    },
    getRestaurantFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getRestaurantFailure,
  getRestaurantStart,
  getRestaurantSuccess,
} = authSlice.actions;

export default authSlice.reducer;
