import React, {useState} from 'react';
import {useGetCurrentLabTestsData} from "@/entities/Appointment/api/labTestsApi";
import {useGetAppointmentStatus} from "@/entities/Appointment/api/appointmentApi";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";
import EkgEdit from "@/entities/Appointment/ui/EkgEdit";
import EkgCreate from "@/entities/Appointment/ui/EkgCreate";

const EkgForm = ({appointmentId}: {appointmentId: string}) => {
    const {currentData, error: currentDataError, isLoading: currentDataIsLoading} = useGetCurrentLabTestsData(appointmentId)
    const {appointmentStatus, isLoading: statusIsLoading, error: statusError} = useGetAppointmentStatus(appointmentId)
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
                ? (<EkgEdit appointmentId={appointmentId} data={currentData} setStatus={setStatus}/>)
                : (status == "edit")
                    ? (<EkgEdit setStatus={setStatus} appointmentId={appointmentId} data={currentData}/>)
                    : (<EkgCreate setStatus={setStatus} appointmentId={appointmentId}/>)
            }
        </>
    );
};

export default EkgForm;