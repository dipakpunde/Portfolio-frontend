import axios from "axios";

export const baseURL = "https://portfolio-backend-gamma-neon.vercel.app";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
