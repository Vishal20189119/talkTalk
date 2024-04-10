import Axios from "axios";
import Cookies from "js-cookie";

const url = 'http://localhost:4000'

const api = Axios.create({
    baseURL : `${url}`,
    headers:{
        'Accept' : 'application/json',
        'Content-Type' : "application/json"
    }
});

api.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`;
export default api;