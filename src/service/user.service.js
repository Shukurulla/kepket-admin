import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
} from "../slice/user.slice";
import axios from "./api";

const UserService = {
  async getUser(dispatch) {
    dispatch(getUserStart());
    try {
      const { data } = await axios.get("/users");
      dispatch(getUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getUserFailure(error.response.data));
    }
  },
};
export default UserService;
