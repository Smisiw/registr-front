import React from 'react';
import DiagnosePage from "@/pages/DiagnosePage/ui/DiagnosePage";

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