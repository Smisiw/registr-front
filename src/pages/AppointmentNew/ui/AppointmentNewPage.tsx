import React from 'react';
import AppointmentNew from "@/widgets/Appointment/ui/AppointmentNew";

const AppointmentNewPage = ({status}: {status: string}) => {
    return (
        <>
            <AppointmentNew status={status}/>
        </>
    );
};

export default AppointmentNewPage;