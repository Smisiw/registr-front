'use client'
import React, {useState} from 'react';
import {Card, Checkbox, DatePicker, Form, Input, Select, Space, Spin, Typography} from "antd";

import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {drugTherapyCreate, useGetDrugTherapyFields} from "@/entities/Appointment/api/drugTherapyApi";

const DrugTherapyCreate = ({appointmentId}: { appointmentId: string}) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetDrugTherapyFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            console.log(values)
        } catch (e: any) {
            setErrorMessage(e.message)
        }
    }
    if (fieldsError) return <div>Ошибка загрузки</div>
    if (fieldsIsLoading) return <Spin></Spin>

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
                <h2>ЭКГ</h2>
                <Form.Item
                    label={"Дата"}
                    name={"date_ekg"}
                >
                    <DatePicker format={"DD.MM.YYYY"}/>
                </Form.Item>
                {fields.map(field => (
                <Form.List name={field.id} key={field.id}>
                    { () =>
                        <Space>
                            <Form.Item
                                name={"isActive"}
                                valuePropName={"checked"}
                                initialValue={false}
                            >
                                <Checkbox>{field.displayName}</Checkbox>
                            </Form.Item>
                            <Form.Item
                                name={"medicine_prescription_id"}
                            >
                                <Select
                                    options={field.medicine_prescriptions.map(data => ({
                                        label: data.displayName,
                                        value: data.id,
                                    }))}
                                />
                            </Form.Item>
                            <Form.Item
                                name={"dose"}
                            >
                                Доза: <Input/>
                            </Form.Item>
                            <Form.Item
                                name={"note"}
                            >
                                Примечание: <Input/>
                            </Form.Item>
                        </Space>
                    }
                </Form.List>
                ))}

                <Form.Item
                    style={{width: "100%"}}
                    label={"Примечание"}
                    name={"note"}
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

export default DrugTherapyCreate;