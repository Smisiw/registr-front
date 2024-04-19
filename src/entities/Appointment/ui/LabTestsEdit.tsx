import React, {useState} from 'react';
import {Card, DatePicker, Form, Input, Space, Spin, Typography} from "antd";
import {labTestsUpdate, useGetLabTestsFields} from "@/entities/Appointment/api/labTestsApi";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {IDiagnose} from "@/entities/Appointment/model/IDiagnose";

const LabTestsEdit = ({appointmentId, data}: { appointmentId: string, data: IDiagnose }) => {
    const [form] = Form.useForm()
    const {fields, error: fieldsError, isLoading: fieldsIsLoading} = useGetLabTestsFields()
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await labTestsUpdate(appointmentId, values)
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
                <h2>Гормональный анализ крови</h2>
                {fields.hormonal_blood_analysis.map(field => (
                    <Space key={field.textName}>
                        <Form.Item
                            name={field.textName}
                            label={field.displayName}
                            initialValue={data[field.textName]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={field.dateName}
                            initialValue={data[field.dateName]}
                        >
                            <DatePicker format={"DD.MM.YYYY"}/>
                        </Form.Item>
                    </Space>
                ))}
                <h2>Общий анализ крови</h2>
                {fields.general_blood_analysis.map(field => (
                    <Space key={field.textName}>
                        <Form.Item
                            name={field.textName}
                            label={field.displayName}
                            initialValue={data[field.textName]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={field.dateName}
                            initialValue={data[field.dateName]}
                        >
                            <DatePicker format={"DD.MM.YYYY"}/>
                        </Form.Item>
                    </Space>
                ))}
                <h2>Биохимический анализ крови</h2>
                {fields.blood_chemistry.map(field => (
                    <Space key={field.textName}>
                        <Form.Item
                            name={field.textName}
                            label={field.displayName}
                            initialValue={data[field.textName]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={field.dateName}
                            initialValue={data[field.dateName]}
                        >
                            <DatePicker format={"DD.MM.YYYY"}/>
                        </Form.Item>
                    </Space>
                ))}
                <h2>Общий анализ мочи</h2>
                {fields.general_urine_analysis.map(field => (
                    <Space key={field.textName}>
                        <Form.Item
                            name={field.textName}
                            label={field.displayName}
                            initialValue={data[field.textName]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={field.dateName}
                            initialValue={data[field.dateName]}
                        >
                            <DatePicker format={"DD.MM.YYYY"}/>
                        </Form.Item>
                    </Space>
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

export default LabTestsEdit;