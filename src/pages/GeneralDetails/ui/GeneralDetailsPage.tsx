import React from 'react';
import GeneralDetailsForm from "@/widgets/Appointment/ui/GeneralDetailsForm";

const GeneralDetailsPage = ({appointmentId, status}: {appointmentId: string, status: string}) => {
    return (
        <>
            <GeneralDetailsForm appointmentId={appointmentId} status={status}/>
        </>
    );
};

export default GeneralDetailsPage;