import React from 'react';
import DiagnosePage from "@/pages/Diagnose/ui/DiagnosePage";

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