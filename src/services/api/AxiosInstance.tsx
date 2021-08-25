import axios from "axios";
import instanceInterceptor from "./InterceptorService";

const apiAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

class instance {
    static apiInstance(){
        instanceInterceptor.responseInterceptor(apiAxiosInstance);
        instanceInterceptor.requestInterceptor(apiAxiosInstance);
        return apiAxiosInstance;
    }
}

export default instance;