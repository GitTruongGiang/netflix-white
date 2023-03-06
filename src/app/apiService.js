import axios from "axios";
import { BASE_URL } from "./confing";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start request", request);
    return request;
  },
  function (err) {
    console.log("Request Error", err);
    return Promise.reject(err);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Start Response", response);
    return response;
  },
  function (err) {
    console.log("Response Error", err);
    return Promise.reject(err);
  }
);

export default apiService;
