'use client'
import React, {useState} from 'react';
import {Button, Card, Checkbox, DatePicker, Form, Input, InputNumber, Radio, Space, Typography} from "antd";
import {IPatientNew} from "@/entities/Patient/model/IPatientNew";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {updatePatient} from "@/entities/Patient/api/updatePatient";
import {IPatient} from "@/entities/Patient/model/IPatient";
import dayjs from "dayjs";
import Link from "next/link";

const PatientEdit = ({data}: {data: IPatient}) => {
    const [form] = Form.useForm()
    const hasHospitalization : boolean = Form.useWatch("has_hospitalization", form)
    const [errorMessage, setErrorMessage] = useState("")
    const formSubmitHandler = async (values: IPatientNew)=> {
        try {
            await updatePatient(data.id, values)
        } catch (e: any) {
            setErrorMessage(e.response.data.message)
        }
    }

    return (
        <Card
            title={"Карточка пациента"}
        >
            <Form
                form={form}
                layout={"vertical"}
                onFinish={formSubmitHandler}
            >
                <Typography.Text type={"danger"}>
                    {errorMessage}
                </Typography.Text>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 300}}
                        label={"Имя"}
                        name={"name"}
                        rules={[{required: true, message: 'Введите имя'}]}
                        initialValue={data.name}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Фамилия"}
                        name={"last_name"}
                        rules={[{required: true, message: 'Введите фамилию'}]}
                        initialValue={data.last_name}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Отчество"}
                        name={"patronymic"}
                        initialValue={data.patronymic}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Space size={50}>
                    <Form.Item
                        style={{width: 200}}
                        label={"Пол"}
                        name={"gender"}
                        rules={[{required: true, message: 'Выберите пол'}]}
                        initialValue={data.gender}
                    >
                        <Radio.Group>
                            <Space size={"large"}>
                                <Radio value={"М"}>Мужской</Radio>
                                <Radio value={"Ж"}>Женский</Radio>
                            </Space>

                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Дата рождения"}
                        name={"birth_date"}
                        rules={[{required: true, message: 'Введите дату рождения'}]}
                        initialValue={dayjs(data.birth_date, "DD.MM.YYYY")}
                    >
                        <DatePicker style={{width: 200}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Дата смерти"}
                        name={"dod"}
                        initialValue={data.dod? dayjs(data.dod, "DD.MM.YYYY") : null}
                    >
                        <DatePicker style={{width: 200}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Телефон"}
                        name={"phone"}
                        rules={[{required: true, message: 'Введите номер телефона'}]}
                        initialValue={data.phone}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Space size={75}>
                    <Form.Item
                        style={{width: 300}}
                        label={"Место жительства"}
                        name={"location"}
                        rules={[{required: true, message: 'Выберите место жительства'}]}
                        initialValue={data.location}
                    >
                        <Radio.Group>
                            <Radio value={"НСО"}>НСО</Radio>
                            <Radio value={"Новосибирск"}>Новосибирск</Radio>
                            <Radio value={"другое"}>другое</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Район"}
                        name={"district"}
                        rules={[{required: true, message: 'Введите район'}]}
                        initialValue={data.district}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Адрес"}
                        name={"address"}
                        rules={[{required: true, message: 'Введите адрес'}]}
                        initialValue={data.address}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 350}}
                        label={"Поликлиника"}
                        name={"clinic"}
                        rules={[{required: true, message: 'Введите поликлинику'}]}
                        initialValue={data.clinic}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 350}}
                        label={"Направивший врач"}
                        name={"referring_doctor"}
                        initialValue={data.referring_doctor}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 350}}
                        label={"Направившее учреждение"}
                        name={"referring_clinic_organization"}
                        initialValue={data.referring_clinic_organization}
                    >
                        <Input/>
                    </Form.Item>
                </Space>

                <Form.Item
                    style={{width: 300}}
                    label={"Категория инвалидности"}
                    name={"disability"}
                    rules={[{required: true, message: 'Выберите категорию инвалидности'}]}
                    initialValue={data.disability}
                >
                    <Radio.Group>
                        <Radio value={"нет"}>Нет</Radio>
                        <Radio value={"I"}>I</Radio>
                        <Radio value={"II"}>II</Radio>
                        <Radio value={"III"}>III</Radio>
                        <Radio value={"отказ"}>Отказ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    style={{width: 300}}
                    label={"Льготное обеспечение препаратами"}
                    name={"lgota_drugs"}
                    rules={[{required: true, message: 'Выберите вид льготы'}]}
                    initialValue={data.lgota_drugs}
                >
                    <Radio.Group>
                        <Radio value={"да"}>Да</Radio>
                        <Radio value={"нет"}>Нет</Radio>
                        <Radio value={"ССЗ"}>ССЗ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 200}}
                        name={"has_hospitalization"}
                        valuePropName={"checked"}
                        required={false}
                        initialValue={data.has_hospitalization}
                    >
                        <Checkbox>Госпитализации</Checkbox>
                    </Form.Item>
                    { hasHospitalization && (
                        <>
                            <Form.Item
                                style={{width: 200}}
                                label={"Количество госпитализаций"}
                                name={"count_hospitalization"}
                                rules={[{required: true, message: "Введите количество госпитализаций"}]}
                                initialValue={data.count_hospitalization}
                            >
                                <InputNumber style={{width: 180}}/>
                            </Form.Item>
                            <Form.Item
                                style={{width: 300}}
                                label={"Дата последней госпитализации"}
                                name={"last_hospitalization_date"}
                                rules={[{required: true, message: "Введите дату последней госпитализации"}]}
                                initialValue={data.last_hospitalization_date? dayjs(data.last_hospitalization_date, "DD.MM.YYYY") : null}
                            >
                                <DatePicker style={{width: 210}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                            </Form.Item>
                        </>
                    )}
                </Space>

                <Form.Item
                    style={{width: "100%"}}
                    label={"Примечание"}
                    name={"patient_note"}
                    initialValue={data.patient_note}
                >
                    <Input.TextArea/>
                </Form.Item>
                <Space size={"large"}>
                    <Form.Item>
                        <Link href={`${data.id}/`}>
                            <Button>
                                Отмена
                            </Button>
                        </Link>
                    </Form.Item>
                    <Form.Item>
                        <SubmitButton form={form}>
                            Сохранить
                        </SubmitButton>
                    </Form.Item>
                </Space>
            </Form>
        </Card>
    );
};

export default PatientEdit;