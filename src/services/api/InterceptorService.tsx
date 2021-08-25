import { AxiosInstance } from "axios";

const successHandler = (response: any) => {
  return response;
};

const requestHandler = (request: any) => {
  return request;
};

const instanceInterceptor = {
  responseInterceptor: (instance: any) => {},
  requestInterceptor: (instance: any) => {},
};

export default instanceInterceptor;
