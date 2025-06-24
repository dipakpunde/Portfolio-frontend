import axios from "axios";

export const baseURL = "https://portfolio-frontend-omega-five.vercel.app/";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
