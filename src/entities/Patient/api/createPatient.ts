import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import axiosInstance from "@/app/axiosProvider/axiosProvider";

export const createPatient = async (values: IPatientNew)=> {
    if (values.birth_date) {
        values.birth_date= new Date(values.birth_date).toLocaleDateString()
    }
    if (values.dod) {
        values.dod= new Date(values.dod).toLocaleDateString()
    }    if (values.last_hospitalization_date) {
        values.last_hospitalization_date= new Date(values.last_hospitalization_date).toLocaleDateString()
    }
    return axiosInstance.post("patients", values).then(res => res.data)
}