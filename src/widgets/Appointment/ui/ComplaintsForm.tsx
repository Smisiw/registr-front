import React, {useState} from 'react';
import {useGetAppointmentStatus} from "@/entities/Appointment/api/appointmentApi";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";
import {useGetCurrentComplaintsData} from "@/entities/Appointment/api/complaintsApi";
import ComplaintsCreate from "@/entities/Appointment/ui/ComplaintsCreate";
import ComplaintsEdit from "@/entities/Appointment/ui/ComplaintsEdit";

const ComplaintsForm = ({appointmentId}: {appointmentId: string}) => {
    const {data, error: currentDataError, isLoading: currentDataIsLoading} = useGetCurrentComplaintsData(appointmentId)
    const {appointmentStatus, isLoading: statusIsLoading, error: statusError} = useGetAppointmentStatus(appointmentId)
    const [status, setStatus] = useState<FormStatus>()
    if (data && appointmentStatus == "completed"){
        setStatus("display")
    } else if (data) {
        setStatus("edit")
    } else {
        setStatus("create")
    }
    return (
        <>
            {(status == "display")
                ? (<ComplaintsEdit appointmentId={appointmentId} data={data} setStatus={setStatus}/>)
                : (status == "edit")
                    ? (<ComplaintsEdit setStatus={setStatus} appointmentId={appointmentId} data={data}/>)
                    : (<ComplaintsCreate setStatus={setStatus} appointmentId={appointmentId}/>)
            }
        </>
    );
};

export default ComplaintsForm;