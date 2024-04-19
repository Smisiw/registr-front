'use client'
import React, {useState} from 'react';
import {Card, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Space, Spin, Typography} from "antd";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";
import {useParams} from "next/navigation";
import {useGetDiagnoseFields} from "@/entities/Appointment/api/diagnoseApi";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import {labTestsCreate, useGetLabTestsFields} from "@/entities/Appointment/api/labTestsApi";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {complaintsCreate, useGetComplaintsFields} from "@/entities/Appointment/api/complaintsApi";

const ComplaintsCreate = ({appointmentId}: { appointmentId: string}) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetComplaintsFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await complaintsCreate(appointmentId, values)
        } catch (e: any) {
            setErrorMessage(e.message)
        }
    }
    if (fieldsError) return <div>Ошибка загрузки</div>
    if (fieldsIsLoading) return <Spin/>

    return (
        <Card>
            <Form
                form={form}
                layout={"vertical"}
                onFinish={formSubmitHandler}
            >
                <Typography.Text type={"danger"}>
                    {errorMessage}
                </Typography.Text>
                <h2>Жалобы</h2>
                {fields.complaints.map(field => (
                        <Form.Item
                            key={field.name}
                            name={field.name}
                            valuePropName={"checked"}
                            initialValue={false}
                        >
                            <Checkbox>{field.displayName}</Checkbox>
                        </Form.Item>
                ))}
                <Form.Item
                    style={{width: "100%"}}
                    label={"Примечание"}
                    name={"note"}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item
                    label={"Рост"}
                    name={"height"}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label={"Вес"}
                    name={"weight"}
                >
                    <InputNumber/>
                <Form.Item
                    label={"ИМТ"}
                    name={"bmi"}
                >
                    <Input disabled={true} value={form.getFieldValue("weight")/form.getFieldValue("height")^2}/>
                </Form.Item>
                </Form.Item>
                <Form.Item
                    label={"Систолическое АД"}
                    name={"systolic_bp"}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label={"Диастолическое АД"}
                    name={"diastolic_bp"}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label={"ЧСС"}
                    name={"heart_rate"}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label={"Дистанция 6-минутной ходьбы"}
                    name={"six_min_walk_distance"}
                >
                    <InputNumber/>
                </Form.Item>
                <h2>Клиническое состояние</h2>
                {fields.conditions.map(field => (
                    <Form.Item
                        key={field.name}
                        name={field.name}
                        valuePropName={"checked"}
                        initialValue={false}
                    >
                        <Checkbox>{field.displayName}</Checkbox>
                    </Form.Item>
                ))}
                <Form.Item
                    style={{width: "100%"}}
                    label={"Примечание"}
                    name={"other_symptoms"}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item>
                    <SubmitButton form={form}>
                        Сохранить
                    </SubmitButton>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ComplaintsCreate;