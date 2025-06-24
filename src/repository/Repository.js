import axios from "axios";

export const baseURL = "https://portfolio-backend-six-orpin.vercel.app/";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
