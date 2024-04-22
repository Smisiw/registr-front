import React from 'react';
import DiagnoseForm from "@/widgets/Appointment/ui/DiagnoseForm";

const DiagnosePage = ({appointmentId}: {appointmentId: string}) => {
    return (
        <>
            <DiagnoseForm appointmentId={appointmentId}/>
        </>
    );
};

export default DiagnosePage;