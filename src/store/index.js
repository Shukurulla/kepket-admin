import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slice/user.slice";
import RestaurantReducer from "../slice/auth.slice";
import DishesReducer from "../slice/dish.slice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    restaurant: RestaurantReducer,
    dish: DishesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
