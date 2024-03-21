import React from 'react';
import PatientNewForm from "@/widgets/PatientNewForm/ui/PatientNewForm";
import BackLink from "@/shared/BackLink/ui/BackLink";

const PatientNew = () => {
    return (
        <>
            <BackLink/>
            <h2>Новый пациент</h2>
            <PatientNewForm/>
        </>
    );
};

export default PatientNew;