import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

const Api = axios.create({
  baseURL: "https://reqres.in/api/"
});

Api.interceptors.request.use(
  config => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default Api;
