import axios from "axios";

import { TIME_OUT, BASE_URL } from "./config";
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
instance.interceptors.request.use(
  (config) => {
    console.log("请求被拦截");
    return config;
  },
  (err) => {}
);
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);
export default instance;
