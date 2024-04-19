import React from 'react';
import PatientCreate from "@/entities/Patient/ui/PatientCreate";
import PatientChoose from "@/entities/Patient/ui/PatientChoose";

const AppointmentNew = ({status}: {status: string}) => {
    return (
        <>
            {(status == "create")
                ? (<PatientCreate/>)
                : (<PatientChoose/>)
            }
        </>
    );
};

export default AppointmentNew;