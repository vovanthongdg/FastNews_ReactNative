import axios from "axios";

const getApi = axios.create({
    baseURL: 'http://13.250.231.139/api/'
})

export default getApi;
