import axios from "axios";
import { env } from "./config.ts";

const instance = axios.create({
  baseURL: env.VITE_API_ENDPOINT,
  timeout: 15000,
});
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
