import React from 'react';
import ComplaintsPage from "@/pages/Complaints/ui/ComplaintsPage";

const Page = ({
                  params
              }: {
    params: {
        id: string
    }
}) => {
    return (
        <>
            <ComplaintsPage appointmentId={params.id}/>
        </>
    );
};

export default Page;