import React, {Dispatch, useState} from 'react';
import {Button, Card, Col, DatePicker, Form, Input, Row, Space, Spin, Typography} from "antd";
import {labTestsCreate, useGetLabTestsFields} from "@/entities/Appointment/api/labTestsApi";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {FormStatus} from "@/entities/Appointment/model/FormStatus";

const LabTestsEdit = ({setStatus, appointmentId, data}: { setStatus: Dispatch<FormStatus>, appointmentId: string, data: any }) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetLabTestsFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await labTestsCreate(appointmentId, values)
            setStatus("display")
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
                    <Space>
                        <Form.Item>
                            <Button onClick={() => setStatus("display")}>
                                Отмена
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <SubmitButton form={form}>
                                Сохранить
                            </SubmitButton>
                        </Form.Item>
                    </Space>
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
                                                    initialValue={data[field.textName]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    initialValue={data[field.dateName]}
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
                                                    initialValue={data[field.textName]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    initialValue={data[field.dateName]}
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
                                                initialValue={data[field.textName]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label={"Дата"}
                                                name={field.dateName}
                                                initialValue={data[field.dateName]}
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
                                                    initialValue={data[field.textName]}
                                                >
                                                    <Input/>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label={"Дата"}
                                                    name={field.dateName}
                                                    initialValue={data[field.dateName]}
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
                            initialValue={data.note}
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

export default LabTestsEdit;