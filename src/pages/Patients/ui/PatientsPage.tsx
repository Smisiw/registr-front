import React from 'react';
import dynamic from "next/dynamic";

const PatientsPage = () => {
    const PatientsList = dynamic(() => import('@/widgets/PatientsList/ui/PatientsList'), {ssr: false, loading: () => <div>Загрузка...</div>})
    return (
        <>
            <PatientsList/>
        </>
    );
};

export default PatientsPage;