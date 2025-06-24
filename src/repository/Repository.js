import axios from "axios";

export const baseURL = "https://portfolio-backend-yj3ldqrip-dipak-pundes-projects.vercel.app";
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
