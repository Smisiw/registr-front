import React from 'react';
import LabTestsForm from "@/widgets/Appointment/ui/LabTestsForm";

const LabTestsPage = ({appointmentId}: {appointmentId: string}) => {
    return (
        <>
            <LabTestsForm appointmentId={appointmentId}/>
        </>
    );
};

export default LabTestsPage;