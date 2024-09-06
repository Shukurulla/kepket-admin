import {
  getRestaurantFailure,
  getRestaurantStart,
  getRestaurantSuccess,
} from "../slice/auth.slice";
import axios from "./api";
const AuthService = {
  async signUp(dispatch, navigate, value) {
    dispatch(getRestaurantStart());
    try {
      const { data } = await axios.post("/restaurants", value);
      dispatch(getRestaurantSuccess(data.restaurant));
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        navigate("/dashboard");
      } else {
        dispatch(getRestaurantFailure(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(getRestaurantFailure(error.message));
    }
  },
};

export default AuthService;
