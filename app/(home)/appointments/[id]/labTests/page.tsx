import React from 'react';
import LabTestsPage from "@/pages_/LabTests/LabTestsPage";

const Page = ({
                  params
              }: {
    params: {
        id: string
    }
}) => {
    return (
        <>
            <LabTestsPage appointmentId={params.id}/>
        </>
    );
};

export default Page;