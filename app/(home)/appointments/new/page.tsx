import React from 'react';
import AppointmentNewPage from "@/pages/AppointmentNew/ui/AppointmentNewPage";

const Page = ({
                  searchParams
              }: {
    searchParams: {
        status: string
    }
}) => {
    return (
        <>
            <AppointmentNewPage status={searchParams.status}/>
        </>
    );
};

export default Page;