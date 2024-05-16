import React from 'react';
import PatientPage from "@/pages_/Patient/PatientPage";

const Page = ({
    params,
    searchParams
}: {
    params: {
        id: string
    },
    searchParams: {
        status: string
    }
}) => {
    return (
        <>
            <PatientPage patientId={params.id} status={searchParams.status} />
        </>
    );
};

export default Page;