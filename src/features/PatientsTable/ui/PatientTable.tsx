'use client'
import React, {useEffect, useState} from 'react';
import {CustomTable, ITableParams} from "@/shared/CustomTable";
import {PatientColumns} from "@/features/PatientsTable/config/PatientColumns";
import {availablePatientColumns} from "@/features/PatientsTable/config/availablePatientColumns";
import {defaultPatientSelectedColumns} from "@/features/PatientsTable/config/defaultPatientSelectedColumns";
import {IPatientTableData} from "@/features/PatientsTable/model/IPatientTableData";


interface props {
    tableParams: ITableParams
    setTableParams(data: ITableParams): void
    data: IPatientTableData
}
const PatientTable = ({tableParams, setTableParams, data}: props) => {
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