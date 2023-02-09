import axios, { AxiosResponse, AxiosRequestConfig, Axios, AxiosError } from 'axios';
import { BASE_URL_API } from '../constants/constants';


const service = axios.create({
    baseURL: BASE_URL_API,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const localStorageSession = getSession();
    if (localStorageSession) {
        config.headers.Authorization = localStorageSession;
    }
    return config;
};

const onRequestError = (error: any): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

service.interceptors.request.use(onRequest, onRequestError);
service.interceptors.response.use(onResponse, onResponseError);

const createApi = (url: string, headers: Object) => {
    const api = axios.create({
        baseURL: url,
        headers: headers
    })
    const getResource = async (resource: string): Promise<any> => {
        try {
            const { data } = await api.get(resource,
                //      {
                //     headers: {
                //         Authorization: "1234567890",
                //     }
                // }
            );
            return data;
        } catch (error) {
            console.log('error', error);
        }
    }

    const postResource = async (resource: string, data_var: any): Promise<any> => {
        try {
            const { data } = await api.post(resource, data_var, {
                // headers: {
                //     Authorization: "1234567890",
                // }
            });
            return data;
        } catch (error) {
            console.log('error', error);
        }
    }

    const putResource = async (resource: string, data_var: any): Promise<any> => {
        try {
            const { data } = await api.put(resource, data_var, {
                headers: {
                    Authorization: "1234567890",
                }
            });
            return data;
        } catch (error) {
            console.log('error', error);
        }
    }

    const deleteResource = async (resource: string, id: string): Promise<any> => {
        try {
            const { data } = await api.delete(`${resource}/${id}`, {
                headers: {
                    Authorization: "1234567890",
                }
            })
            return data;
        } catch (error) {
            console.log('error', error);
        }

    }
    return { getResource, postResource, putResource, deleteResource }
}
const headers = {
    "Content-Type": "application/json"
    // "Authorization": "1234567890nan"
}
const ApiService = createApi(BASE_URL_API, headers);

export default ApiService;