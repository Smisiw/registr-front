'use client'
import React from 'react';
import {useGetPatient} from "@/entities/Patient/api/getPatient";
import PatientEdit from "@/entities/Patient/ui/PatientEdit";
import PatientDisplay from "@/entities/Patient/ui/PatientDisplay";


const PatientInfo = ({patientId, status}: {patientId: string, status: string}) => {
    const {data, error, isLoading} = useGetPatient(patientId)

    if (error) return <div>Ошибка загрузки</div>
    if (isLoading) return <div>Загрузка</div>

    return (
        <>
            {(status == "edit")
                ? (<PatientEdit data={data}/>)
                : (<PatientDisplay data={data}/>)
            }
        </>
    );
};

export default PatientInfo;