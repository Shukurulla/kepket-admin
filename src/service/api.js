import axios from "axios";
axios.defaults.baseURL = "https://kep-ket-api.vercel.app/api";
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
export default axios;
