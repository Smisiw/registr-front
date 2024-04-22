import React from 'react';
import DrugTherapyForm from "@/widgets/Appointment/ui/DrugTherapyForm";

const DrugTherapyPage = ({appointmentId}: {appointmentId: string}) => {
    return (
        <>
            <DrugTherapyForm appointmentId={appointmentId}/>
        </>
    );
};

export default DrugTherapyPage;