import React, {useState} from 'react';
import {useParams} from "next/navigation";
import {useGetCurrentDiagnoseData, useGetPreviousDiagnoseData} from "@/entities/Appointment/api/diagnoseApi";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";
import {useGetAppointmentStatus} from "@/entities/Appointment/api/appointmentApi";
import DiagnoseDisplay from "@/entities/Appointment/ui/DiagnoseDisplay";
import DiagnoseEdit from "@/entities/Appointment/ui/DiagnoseEdit";
import DiagnoseCreate from "@/entities/Appointment/ui/DiagnoseCreate";

const DiagnoseForm = () => {
    const params = useParams<{id?: string}>()
    const {currentData, error: currentDataError, isLoading: currentDataIsLoading} = useGetCurrentDiagnoseData(params?.id)
    const {previousData, error: previousDataError, isLoading: previousDataIsLoading} = useGetPreviousDiagnoseData(params?.id)
    const {appointmentStatus, isLoading: statusIsLoading, error: statusError} = useGetAppointmentStatus(params?.id)
    const [status, setStatus] = useState<FormStatus>()
    if (currentData && appointmentStatus == "completed"){
        setStatus("display")
    } else if (currentData) {
        setStatus("edit")
    } else {
        setStatus("create")
    }
    return (
        <>
            {(status == "display")
                ? (<DiagnoseDisplay data={currentData} setStatus={setStatus}/>)
                : (status == "edit")
                    ? (<DiagnoseEdit appointmentId={params?.id || ""} data={currentData}/>)
                    : (<DiagnoseCreate appointmentId={params?.id || ""} data={previousData}/>)
            }
        </>
    );
};

export default DiagnoseForm;