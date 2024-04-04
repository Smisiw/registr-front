import axios, {AxiosError} from "axios";
import {logout} from "@/entities/Session/api";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

axiosInstance.defaults.headers.common["Content-Type"] = "application/json"
axiosInstance.interceptors.request.use(
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

axiosInstance.interceptors.response.use(
    null,
    (error: AxiosError) => {
        if (error.response?.status==401) {
            logout()
        } else
        return Promise.reject(error)
    }
)


export default axiosInstance