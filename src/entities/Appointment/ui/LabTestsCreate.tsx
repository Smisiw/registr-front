'use client'
import React, {Dispatch, useState} from 'react';
import {Card, Col, DatePicker, Form, Input, Row, Space, Spin, Typography} from "antd";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {labTestsCreate, useGetLabTestsFields} from "@/entities/Appointment/api/labTestsApi";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";

const LabTestsCreate = ({setStatus, appointmentId}: { setStatus: Dispatch<FormStatus>, appointmentId: string}) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetLabTestsFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await labTestsCreate(appointmentId, values)
            setStatus("edit")
        } catch (e: any) {
            setErrorMessage(e.message)
        }
    }
    if (fieldsError) return <div>Ошибка загрузки</div>
    if (fieldsIsLoading) return <Spin/>

    return (
        <Form
            form={form}
            layout={"inline"}
            onFinish={formSubmitHandler}
        >
            <Card
                title={"Лабораторные тесты"}
                extra={
                    <Form.Item>
                        <SubmitButton form={form}>
                            Сохранить
                        </SubmitButton>
                    </Form.Item>
                }
            >
                <Typography.Text type={"danger"}>
                    {errorMessage}
                </Typography.Text>
                <Row gutter={[32, 16]} align={"middle"}>
                    <Col span={12}>
                        <Space
                            direction={"vertical"}
                            size={"middle"}
                        >
                            <Card
                                title={"Гормональный анализ крови"}
                            >
                                <Row gutter={[32, 16]}>
                                    {fields.hormonal_blood_analysis.map(field => (
                                        <>
                                            <Col span={5}>
                                                {field.displayName}:
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item
                                                    name={field.textName}
                                                    rules={[{required: true, message: "заполните поле"}]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    rules={[{required: true, message: "введите дату"}]}
                                                >
                                                    <DatePicker format={"DD.MM.YYYY"}/>
                                                </Form.Item>
                                            </Col>
                                        </>
                                    ))}
                                </Row>
                            </Card>
                            <Card
                                title={"Общий анализ крови"}
                            >
                                <Row gutter={[32, 16]}>
                                    {fields.general_blood_analysis.map(field => (
                                        <>
                                            <Col span={5}>
                                                {field.displayName}:
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item
                                                    name={field.textName}
                                                    rules={[{required: true, message: "заполните поле"}]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    rules={[{required: true, message: "введите дату"}]}
                                                >
                                                    <DatePicker format={"DD.MM.YYYY"}/>
                                                </Form.Item>
                                            </Col>
                                        </>
                                    ))}
                                </Row>
                            </Card>
                        </Space>

                    </Col>
                    <Col span={12}>
                        <Card
                            title={"Общий анализ мочи"}
                        >
                            <Row gutter={[32, 16]}>
                                {fields.general_urine_analysis.map(field => (
                                    <>
                                        <Col span={6}>
                                            {field.displayName}:
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                name={field.textName}
                                                rules={[{required: true, message: "заполните поле"}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label={"Дата"}
                                                name={field.dateName}
                                                rules={[{required: true, message: "введите дату"}]}
                                            >
                                                <DatePicker format={"DD.MM.YYYY"}/>
                                            </Form.Item>
                                        </Col>
                                    </>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            title={"Биохимический анализ крови"}
                        >
                            <Row gutter={[32, 16]}>
                                {fields.blood_chemistry.map(field => (
                                    <Col span={12} key={field.textName}>
                                        <Row gutter={32}>
                                            <Col span={4}>
                                                {field.displayName}:
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    name={field.textName}
                                                    rules={[{required: true, message: "заполните поле"}]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    rules={[{required: true, message: "введите дату"}]}
                                                >
                                                    <DatePicker format={"DD.MM.YYYY"}/>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Row>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            style={{width: "100%"}}
                            name={"note"}
                        >
                            Примечание:
                            <Input.TextArea style={{height: 100}}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
        </Form>
    );
};

export default LabTestsCreate;