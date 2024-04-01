import React from 'react';
import BackLink from "@/shared/BackLink/ui/BackLink";
import dynamic from "next/dynamic";
import {Space} from "antd";

const PatientNew = () => {
    const PatientNewForm = dynamic(() => import('../../../widgets/PatientNewForm/ui/PatientNewForm'), {ssr: false})
    return (
        <>
            <Space size={"middle"}>
                <BackLink href={"/patients"}/>
                <h2>Новый пациент</h2>
            </Space>
            <PatientNewForm/>
        </>
    );
};

export default PatientNew;