import React from 'react';
import LabTestsPage from "@/pages/LabTests/ui/LabTestsPage";

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