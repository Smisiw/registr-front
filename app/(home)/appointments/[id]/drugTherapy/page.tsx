import React from 'react';
import DrugTherapyPage from "@/pages/DrugTherapy/ui/DrugTherapyPage";

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