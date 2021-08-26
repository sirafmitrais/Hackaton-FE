import axios from "axios";
import instanceInterceptor from "./InterceptorService";

const apiAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const apiAxiosInstance2 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
})

class instance {
    static apiInstance(){
        instanceInterceptor.responseInterceptor(apiAxiosInstance);
        instanceInterceptor.requestInterceptor(apiAxiosInstance);
        return apiAxiosInstance;
    }
}

class instancePlaceHolder {
  static apiInstance() {
    instanceInterceptor.responseInterceptor(apiAxiosInstance2);
    instanceInterceptor.requestInterceptor(apiAxiosInstance2);
    return apiAxiosInstance2;
  }
}

export default  {instance, instancePlaceHolder};