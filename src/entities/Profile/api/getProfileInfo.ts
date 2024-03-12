import {IProfileInfo} from "@/entities/Profile/model/IProfileInfo";
import {Dispatch} from "react";
import defaultUserImage from "@/shared/images/defaultuser.jpg"

export async function getProfileInfo(setProfileInfo: Dispatch<IProfileInfo>, setLoading: Dispatch<boolean>): Promise<void> {
    setLoading(true)
    //Запрос на сервер
    const profileInfo = {
        avatar: defaultUserImage,
        fullName: "Константин Лукин",
        jobTitle: "Врач кардиолог"
    }
    setProfileInfo(profileInfo)
    setLoading(false)
}