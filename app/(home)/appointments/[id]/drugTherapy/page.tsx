import React from 'react';
import DrugTherapyPage from "@/pages_/DrugTherapy/DrugTherapyPage";

const Page = ({
                  params
              }: {
    params: {
        id: string
    }
}) => {
    return (
        <>
            <DrugTherapyPage appointmentId={params.id}/>
        </>
    );
};

export default Page;