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

    static createTitle(title: string) {
        return axios
        .post('',{title})
        .then((res) => {
            const response = res.data
            return response
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteTitle(idTitle: string){
        return axios
        .delete(`/${idTitle}`)
        .then((res) => {
            const response = res.data;
            return response;
        })
        .catch((err) => {
            throw err;
        });
    }

    static update(idTitle: string, title: string){
        return axios
        .patch(`/${idTitle}`, { title })
        .then((res) => {
            const response = res.data;
            return response;
        })
        .catch((err) => {
            throw err;
        });
    }
    
}

export default SimpleSrv;