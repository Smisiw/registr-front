import React from 'react';
import ComplaintsPage from "@/pages_/Complaints/ComplaintsPage";

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