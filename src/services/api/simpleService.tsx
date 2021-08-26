import axios from "axios";

class SimpleSrv {
    static SimpleFun(id: string) {
        return 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            console.log(res)
            res.data
        })
        .catch( err => {
            console.log(err)
        })
    }
    
}

export default SimpleSrv;