// import axios from "axios";

import instances from './AxiosInstance'


const axios = instances.instancePlaceHolder.apiInstance()

class SimpleSrv {
    static getListTitle() {
        return axios.get('')
        .then( (res) => {
            const response = res.data
            return response
        })
        .catch( err => {
            console.log(err)
        })
    }
    
}

export default SimpleSrv;