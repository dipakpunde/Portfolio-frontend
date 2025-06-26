import axios from "axios";

export const baseURL = "https://portfolio-backend-6rs9.onrender.com";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
