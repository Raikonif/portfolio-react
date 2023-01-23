import axios, {AxiosResponse, AxiosRequestConfig, Axios} from 'axios';
import { BASE_URL_API } from '~/constants/constants';
const serviceJson = axios.create({
    baseURL: BASE_URL_API,
    headers: {
        "Content-Type": "application/json",
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
});
