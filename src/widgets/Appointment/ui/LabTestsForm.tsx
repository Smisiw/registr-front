import React, {useState} from 'react';
import {useGetAppointmentStatus} from "@/entities/Appointment/api/appointmentApi";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";
import {useGetCurrentLabTestsData} from "@/entities/Appointment/api/labTestsApi";
import LabTestsEdit from "@/entities/Appointment/ui/LabTestsEdit";
import LabTestsCreate from "@/entities/Appointment/ui/LabTestsCreate";

const LabTestsForm = ({appointmentId}: {appointmentId: string}) => {
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
                ? (<LabTestsEdit appointmentId={appointmentId} data={currentData} setStatus={setStatus}/>)
                : (status == "edit")
                    ? (<LabTestsEdit setStatus={setStatus} appointmentId={appointmentId} data={currentData}/>)
                    : (<LabTestsCreate setStatus={setStatus} appointmentId={appointmentId}/>)
            }
        </>
    );
};

export default LabTestsForm;