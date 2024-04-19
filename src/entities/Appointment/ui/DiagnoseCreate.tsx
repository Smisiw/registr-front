'use client'
import React, {useState} from 'react';
import {Card, Checkbox, Col, Form, Input, Radio, Row, Space, Spin, Typography} from "antd";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import {diagnoseCreate, useGetDiagnoseFields} from "@/entities/Appointment/api/diagnoseApi";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {IDiagnose} from "@/entities/Appointment/model/IDiagnose";


const DiagnoseCreate = ({appointmentId, data}: { appointmentId: string, data?: IDiagnose }) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetDiagnoseFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await diagnoseCreate(appointmentId, values)
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
                title={"Диагноз"}
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
                <Row gutter={48}>
                    <Col span={10}>
                        <Space
                            direction={"vertical"}
                            size={"middle"}
                        >
                            <Form.Item
                                label={"Диагноз"}
                                name={"diagnose"}
                                initialValue={data?.diagnose}
                            >
                                <Input/>
                            </Form.Item>
                            <Card title={"Классификации"}>
                                <Space
                                    direction={"vertical"}
                                    size={"middle"}
                                >
                                    <Form.Item
                                        label={"по ФВ"}
                                        name={"classification_adjacent_release"}
                                        initialValue={data?.classification_adjacent_release}
                                    >
                                        <Radio.Group>
                                            <Space>
                                                <Radio value={"низкая"}>низкая</Radio>
                                                <Radio value={"умеренно-сниженная"}>умеренно-сниженная</Radio>
                                                <Radio value={"сохранная"}>сохранная</Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                        label={"по стадии НК"}
                                        name={"classification_nc_stage"}
                                        initialValue={data?.classification_nc_stage}
                                    >
                                        <Radio.Group>
                                            <Space>
                                                <Radio value={1}>1</Radio>
                                                <Radio value={2}>2</Radio>
                                                <Radio value={3}>3</Radio>
                                                <Radio value={4}>4</Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                        label={"по функциональному классу"}
                                        name={"classification_func_classes"}
                                        initialValue={data?.classification_func_classes}
                                    >
                                        <Radio.Group>
                                            <Space>
                                                <Radio value={"I"}>I</Radio>
                                                <Radio value={"IIа"}>IIа</Radio>
                                                <Radio value={"IIб"}>IIб</Radio>
                                                <Radio value={"III"}>III</Radio>
                                            </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                </Space>
                            </Card>
                        </Space>
                    </Col>
                    <Col span={12}>
                        <Card
                            title={"Сопутствующие заболевания"}
                        >
                            <Row gutter={[32, 16]}>
                                {fields.map(field => (
                                    <>
                                        <Col span={10}>
                                            <Form.Item
                                                name={field.booleanName}
                                                valuePropName={"checked"}
                                                initialValue={data?.[field.booleanName] || false}
                                            >
                                                <Checkbox>{field.displayName}</Checkbox>
                                            </Form.Item>
                                        </Col>
                                        <Col span={14}>
                                            <Form.Item
                                                name={field.textName}
                                                initialValue={data?.[field.textName] || ""}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        </Col>
                                    </>
                                ))}
                            </Row>
                        </Card>


                    </Col>
                </Row>

            </Card>
        </Form>
    );
};

export default DiagnoseCreate;