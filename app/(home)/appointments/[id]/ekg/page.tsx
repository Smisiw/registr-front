import React from 'react';
import EkgPage from "@/pages/Ekg/ui/EkgPage";

const Page = ({
                  params
              }: {
    params: {
        id: string
    }
}) => {
    return (
        <>
            <EkgPage appointmentId={params.id}/>
        </>
    );
};

export default Page;