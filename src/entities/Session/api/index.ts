import {deleteCookie, setCookie} from "cookies-next";
import {redirect} from "next/navigation";
import {ILoginForm} from "@/entities/Session/model/ILoginForm";
import axiosInstance from "../../../shared/axiosConfig/axiosConfig"
import {AxiosError, AxiosResponse} from "axios";

export const login = async (loginForm: ILoginForm): Promise<void> => {
    try {
        const {data}: AxiosResponse<{token: string}, AxiosError> = await axiosInstance.post("auth/login/", loginForm)
        setCookie('authToken', data.token)
        localStorage.setItem("authToken", data.token)
    } catch (e: AxiosError | any) {
        return Promise.reject(e.response.data)
    }
}

export const logout = () => {
    deleteCookie('authToken')
    localStorage.removeItem("authToken")
    if (window){
        window.location.href = "/auth"
    } else {
        redirect('/auth')
    }

}

export const isAuthenticated = ():boolean => {
    return !!localStorage.getItem("authToken");
}

export const getRole = () => {

}