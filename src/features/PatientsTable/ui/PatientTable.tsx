'use client'
import React, {useEffect, useState} from 'react';
import {CustomTable, ITableParams} from "@/shared/CustomTable";
import {PatientColumns} from "@/features/PatientsTable/config/PatientColumns";
import {availablePatientColumns} from "@/features/PatientsTable/config/availablePatientColumns";
import {defaultPatientSelectedColumns} from "@/features/PatientsTable/config/defaultPatientSelectedColumns";
import {IPatientTable} from "@/entities/Patient/model/IPatientTable";


interface props {
    data: {data: IPatientTable[], total: number}
    tableParams: ITableParams
    setTableParams(data: ITableParams): void
}
const PatientTable = ({data, tableParams, setTableParams}: props) => {
    const [selectedColumns, setSelectedColumns] = useState<string[]>(defaultPatientSelectedColumns)

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
            tableParams={tableParams}
            setTableParams={setTableParams}
        />
    );
};

export default PatientTable;