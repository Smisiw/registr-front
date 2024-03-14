'use client'
import React, {useState} from 'react';
import PatientTable from "@/features/PatientsTable/ui/PatientTable";
import {getPatients} from "@/entities/Patient/api/getPatients";
import {IPatientsTableData} from "@/features/PatientsTable";

const PatientsList = () => {
    const [patientsTableData, setPatientsTableData] = useState<IPatientsTableData>(getPatients)
    return (
        <>
            <PatientTable data={patientsTableData} setData={setPatientsTableData}/>
        </>
    );
};

export default PatientsList;