import React from 'react';
import DrugTherapyCreate from "@/entities/Appointment/ui/DrugTherapyCreate";
import DiagnoseCreate from "@/entities/Appointment/ui/DiagnoseCreate";
import LabTestsCreate from "@/entities/Appointment/ui/LabTestsCreate";
import EkgsCreate from "@/entities/Appointment/ui/EkgsCreate";
import ComplaintsCreate from "@/entities/Appointment/ui/ComplaintsCreate";

const Page = () => {
    return (
        <div>
            <ComplaintsCreate appointmentId={"1"}/>
        </div>
    );
};

export default Page;