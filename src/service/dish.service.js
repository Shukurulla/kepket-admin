import {
  getDishesFailure,
  getDishesStart,
  getDishesSuccess,
} from "../slice/dish.slice";
import axios from "./api";

const DishService = {
  async getAllDish(dispatch, id) {
    dispatch(getDishesStart());
    try {
      const { data } = await axios.get(`/dishes/${id}`);
      dispatch(getDishesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getDishesFailure());
    }
  },
};
export default DishService;
