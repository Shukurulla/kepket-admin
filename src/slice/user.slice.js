import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },
  reducers: {
    getUserStart: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getUserFailure, getUserStart, getUserSuccess } =
  userSlice.actions;
export default userSlice.reducer;
