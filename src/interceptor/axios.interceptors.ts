import axios, {AxiosRequestConfig, AxiosRequestHeaders} from "axios";

export const AxiosInterceptor = () => {
//     const updateHeader = (request: AxiosRequestConfig) => {
//         const token = "1234567890"
//         const newHeaders = {
//             Authorization: token,
//             "Content-Type": "application/json",
//         }
//         request.headers = {
//             Authorization: token,
//             "Content-Type": "application/json",
//         };
//         return request;
//     }
//     axios.interceptors.request.use((request) => {
//         console.log("Starting Request", request)
//         if(request.url?.includes("assets")) return request;
//         return updateHeader(request);
//     });
};