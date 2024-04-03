import axios, {AxiosError} from "axios";
import {logout} from "@/entities/Session/api";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

instance.defaults.headers.common["Content-Type"] = "application/json"
instance.interceptors.request.use(
    config => {
        if (!config.headers.Authorization) {
            const token = localStorage.getItem("authToken");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    null,
    (error: AxiosError) => {
        if (error.response?.status==401) {
            logout()
        } else
        return Promise.reject(error)
    }
)


export default instance