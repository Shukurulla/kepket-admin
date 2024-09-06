import { createSlice } from "@reduxjs/toolkit";

const dishesSlice = createSlice({
  name: "Dish",
  initialState: {
    isLoading: false,
    dishes: [],
  },
  reducers: {
    getDishesStart: (state) => {
      state.isLoading = true;
    },
    getDishesSuccess: (state, action) => {
      state.isLoading = false;
      state.dishes = action.payload;
    },
    getDishesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getDishesFailure, getDishesStart, getDishesSuccess } =
  dishesSlice.actions;

export default dishesSlice.reducer;
