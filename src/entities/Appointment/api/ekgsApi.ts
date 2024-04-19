import axiosInstance from "@/app/axiosProvider/axiosProvider";
import {AxiosError} from "axios";
import useSWR from "swr";
import {IBooleanFields, IIntegerFields} from "@/entities/Appointment/model/IFormDataFields";

const getFields = async (key: string) => {
    return axiosInstance.get(key).then(res => res.data)
}

const getData = async ({key, appointmentId}: {key: string, appointmentId: string}) => {
    return axiosInstance.get(key + appointmentId).then(res => res.data)
}

export const useGetEkgFields = (): {
    fields: {
        ekg: IBooleanFields[],
        echo_ekg: {
            integer_fields: IIntegerFields[],
            boolean_fields: IBooleanFields[]
        }
    }
    error: AxiosError,
    isLoading: boolean
} => {
    const {data, error, isLoading} = useSWR(
        'appointments/block/ekg/fields',
        getFields
    )
    return {fields: data, error, isLoading}
}

export const useGetCurrentEkgData = (appointmentId: string) => {
    const {data, error, isLoading} = useSWR({
        key: 'appointments/block/ekg/',
        appointmentId
    }, getData)
    return {currentData: data, error, isLoading}
}


export const ekgCreate = async (appointment_id: string, values: any) => {
    return axiosInstance.post('appointments/block/ekg/create', {appointment_id, ...values}).then(res => res.data)
}
export const ekgUpdate = async (appointment_id: string, values: any) => {
    return axiosInstance.patch('appointments/block/ekg/update/' + appointment_id, values).then(res => res.data)
}