import axios from "axios";

export const baseURL = "http://localhost:10000";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
