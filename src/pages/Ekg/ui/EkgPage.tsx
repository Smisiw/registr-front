import React from 'react';
import EkgForm from "@/widgets/Appointment/ui/EkgForm";

const EkgPage = ({appointmentId}: {appointmentId: string}) => {
    return (
        <>
            <EkgForm appointmentId={appointmentId}/>
        </>
    );
};

export default EkgPage;