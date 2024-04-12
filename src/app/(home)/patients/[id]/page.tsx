import React from 'react';
import PatientsPage from "@/pages/Patients/ui/PatientsPage";

const Page = ({params}: {params: {id: number}}) => {
    return (
        <>
            {params.id}
        </>
    );
};

export default Page;