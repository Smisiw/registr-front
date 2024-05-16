import React from 'react';
import EkgPage from "@/pages_/Ekg/EkgPage";

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