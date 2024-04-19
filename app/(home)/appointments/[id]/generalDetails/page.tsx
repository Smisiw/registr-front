import React from 'react';
import GeneralDetailsPage from "@/pages/GeneralDetailsPage/ui/GeneralDetailsPage";

const Page = ({
      params,
      searchParams
    }: {
    params: {
        id: string
    },
    searchParams: {
        status: string
    }
}) => {
    return (
        <>
            <GeneralDetailsPage status={searchParams.status} patientId={params.id}/>
        </>
    );
};

export default Page;