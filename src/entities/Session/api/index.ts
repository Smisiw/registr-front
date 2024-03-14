import {deleteCookie, hasCookie, setCookie} from "cookies-next";
import {redirect} from "next/navigation";
import {ILoginForm} from "@/entities/Session/model/ILoginForm";

export const login = (formData: FormData): void => {
    const loginForm: ILoginForm = {
        mail: formData.get("mail"),
        password: formData.get("password")
    }
    //Запрос на сервер
    const token = "123"
    setCookie('authToken', token)
    let defaultPage = localStorage.getItem("defaultPage")
    if (!defaultPage){
        localStorage.setItem("defaultPage", '/patients')
        defaultPage = '/patients'
    }
    redirect(defaultPage)
}

export const logout = () => {
    deleteCookie('authToken')
    redirect('/auth')
}

export const isAuthenticated = ():boolean => {
    return hasCookie('authToken');
}

export const getRole = () => {

}