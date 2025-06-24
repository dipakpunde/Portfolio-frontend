import axios from "axios";

export const baseURL = "https://portfolio-frontend-2hi6.vercel.app/";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
