import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import {AxiosError} from "axios";
import axiosInstance from "@/shared/axiosConfig/axiosConfig";

export const createPatient = async (values: IPatientNew): Promise<void> => {
    if (values.birth_date) {
        values.birth_date= new Date(values.birth_date).toLocaleDateString()
    }
    if (values.dod) {
        values.dod= new Date(values.dod).toLocaleDateString()
    }    if (values.last_hospitalization_date) {
        values.last_hospitalization_date= new Date(values.last_hospitalization_date).toLocaleDateString()
    }
    console.log(values)
    try {
        await axiosInstance.post("patients", values)
    } catch (e: AxiosError | any) {
        return Promise.reject(e.response.data)
    }
}