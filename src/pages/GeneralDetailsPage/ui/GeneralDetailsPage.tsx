import React from 'react';
import PatientInfo from "@/widgets/PatientInfo/ui/PatientInfo";

const GeneralDetailsPage = ({patientId, status}: {patientId: string, status: string}) => {
    return (
        <>
            <PatientInfo patientId={patientId} status={status}/>
        </>
    );
};

export default GeneralDetailsPage;