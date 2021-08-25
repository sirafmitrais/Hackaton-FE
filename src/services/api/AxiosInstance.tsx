import axios from "axios";
import instanceInterceptor from "./InterceptorService";

const apiAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const apiAxiosDummy = axios.create({
  baseURL: "https://gorest.co.in/public/v1/",
});

class instance {
    static apiInstance(){
        instanceInterceptor.responseInterceptor(apiAxiosInstance);
        instanceInterceptor.requestInterceptor(apiAxiosInstance);
        return apiAxiosInstance;
    }
}

class instanceDummy {
    static apiInstance(){
      instanceInterceptor.requestInterceptor(apiAxiosDummy)
      instanceInterceptor.requestInterceptor(apiAxiosDummy)
      return apiAxiosDummy;
    }
}

export default { instance, instanceDummy};