import React from 'react';
import DiagnosePage from "@/pages_/Diagnose/DiagnosePage";

const Page = ({params}:
    {params: {
        id: string
    }}
) => {
    return (
        <>
            <DiagnosePage appointmentId={params.id}/>
        </>
    );
};

export default Page;