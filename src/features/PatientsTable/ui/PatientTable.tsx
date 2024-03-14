'use client'
import React, {useEffect, useState} from 'react';
import {CustomTable} from "@/shared/CustomTable";
import {PatientColumns} from "@/features/PatientsTable/config/PatientColumns";
import {availablePatientColumns} from "@/features/PatientsTable/config/availablePatientColumns";
import {defaultPatientSelectedColumns} from "@/features/PatientsTable/config/defaultPatientSelectedColumns";
import {IPatientsTableData} from "@/features/PatientsTable";


interface props {
    data: IPatientsTableData
    setData(data: IPatientsTableData): void
}
const PatientTable = ({data, setData}: props) => {
    const [selectedColumns, setSelectedColumns] = useState<string[]>(defaultPatientSelectedColumns())

    useEffect(() => {
        localStorage.setItem("patientsSelectedColumns", selectedColumns.toString())
    }, [selectedColumns]);

    return (
        <CustomTable
            columns={PatientColumns}
            availableColumns={availablePatientColumns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            data={data}
            setData={setData}
        />
    );
};

export default PatientTable;