import React from 'react';
import {CustomTable} from "@/shared/CustomTable";
import {PatientColumns} from "@/features/PatientsTable/config/PatientColumns";

const PatientTable = () => {
    return (
        <CustomTable columns={PatientColumns} availableColumns={} selectedColumns={} setSelectedColumns={} paginationParams={} setPaginationParams={} data={} setData={}></CustomTable>
    );
};

export default PatientTable;