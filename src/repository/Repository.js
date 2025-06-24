import axios from "axios";

export const baseURL = "http://localhost:3001";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
