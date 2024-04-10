import Axios from "axios";
import Cookies from "js-cookie";

const url = 'http://localhost:4000'

const imageUploadApi = Axios.create({
    baseURL : `${url}`,
    headers:{
        'Accept' : 'application/json',
        'Content-Type' : "multipart/form-data"
    }
});

imageUploadApi.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`;
export default imageUploadApi;