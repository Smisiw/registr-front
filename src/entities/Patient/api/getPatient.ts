import axiosInstance from "@/app/axiosProvider/axiosProvider";
import useSWR from "swr";

export const getPatient = async ({key, patientId}: {key: string, patientId: string}) => {
    return axiosInstance.get(key + patientId).then(res => res.data)
}

export const useGetPatient = (patientId: string) => {
    const {data, error, isLoading} = useSWR({key: 'patients/', patientId}, getPatient)
    return {data, error, isLoading}
}