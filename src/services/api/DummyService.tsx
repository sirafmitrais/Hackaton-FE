import instances from './AxiosInstance';

export const axios = instances.instanceDummy.apiInstance();

const USERPATH = '/users'
const POSTPATH = "/posts";
const COMMENTPATH = "/comments";
const TODOPATH = "/todos";

class DummyAPI{

    static getUsers(){
        return axios
            .get(`${USERPATH}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                throw err;
            });
    }

    static getPost(){
        return axios
            .get(`${POSTPATH}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                throw err;
            })
    }

    static getComment(){
        return axios
            .get(`${COMMENTPATH}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                throw err;
            })
    }

    static getTodo(){
        return axios
            .get(`${TODOPATH}`)
            .then(res => {
                const response = res.data;
                return response;
            })
            .catch(err => {
                throw err;
            })
    }


}