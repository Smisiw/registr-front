import React from 'react';
import ComplaintsForm from "@/widgets/Appointment/ui/ComplaintsForm";

const ComplaintsPage = ({appointmentId}: {appointmentId: string}) => {
    return (
        <>
            <ComplaintsForm appointmentId={appointmentId}/>
        </>
    );
};

export default ComplaintsPage;