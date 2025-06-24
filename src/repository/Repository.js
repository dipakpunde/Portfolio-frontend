import axios from "axios";

export const baseURL = "https://portfolio-backend-u91o.onrender.com";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
