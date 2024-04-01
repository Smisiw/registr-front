'use client'
import React from 'react';
import {Button, Card, Checkbox, DatePicker, Flex, Form, Input, InputNumber, Radio, Space} from "antd";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";

export const PatientNewForm = () => {
    const [form] = Form.useForm()
    const hasHospitalization : boolean = Form.useWatch("has_hospitalization", form)
    return (
        <Card
            title={"Карточка пациента"}
        >
            <Form
                form={form}
                layout={"vertical"}
            >
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 300}}
                        label={"Имя"}
                        name={"name"}
                        rules={[{required: true, message: 'Введите имя'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Фамилия"}
                        name={"last_name"}
                        rules={[{required: true, message: 'Введите фамилию'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Отчество"}
                        name={"patronymic"}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 200}}
                        label={"Пол"}
                        name={"gender"}
                        rules={[{required: true, message: 'Выберите пол'}]}
                    >
                        <Radio.Group>
                            <Space size={"large"}>
                                <Radio value={"male"}>Мужской</Radio>
                                <Radio value={"female"}>Женский</Radio>
                            </Space>

                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Дата рождения"}
                        name={"birth_date"}
                        rules={[{required: true, message: 'Введите дату рождения'}]}
                    >
                        <DatePicker style={{width: 200}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Дата смерти"}
                        name={"dod"}
                    >
                        <DatePicker style={{width: 200}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Телефон"}
                        name={"phone"}
                        rules={[{required: true, message: 'Введите номер телефона'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 300}}
                        label={"Место жительства"}
                        name={"location"}
                        rules={[{required: true, message: 'Выберите место жительства'}]}
                    >
                        <Radio.Group>
                            <Radio value={"NSO"}>НСО</Radio>
                            <Radio value={"Novosibirsk"}>Новосибирск</Radio>
                            <Radio value={"other"}>другое</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        style={{width: 200}}
                        label={"Район"}
                        name={"district"}
                        rules={[{required: true, message: 'Введите район'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: 300}}
                        label={"Адрес"}
                        name={"address"}
                        rules={[{required: true, message: 'Введите адрес'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Space>
                <Form.Item
                    style={{width: "30%"}}
                    label={"Поликлиника"}
                    name={"clinic"}
                    rules={[{required: true, message: 'Введите поликлинику'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    style={{width: "30%"}}
                    label={"Направивший врач"}
                    name={"referring_doctor"}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    style={{width: "30%"}}
                    label={"Направившее учреждение"}
                    name={"referring_clinic_organization"}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    style={{width: 300}}
                    label={"Категория инвалидности"}
                    name={"disability"}
                    rules={[{required: true, message: 'Выберите категорию инвалидности'}]}
                >
                    <Radio.Group>
                        <Radio value={"no"}>Нет</Radio>
                        <Radio value={"I"}>I</Radio>
                        <Radio value={"II"}>II</Radio>
                        <Radio value={"III"}>III</Radio>
                        <Radio value={"refusal"}>Отказ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    style={{width: 300}}
                    label={"Льготное обеспечение препаратами"}
                    name={"lgota_drugs"}
                    rules={[{required: true, message: 'Выберите вид льготы'}]}
                >
                    <Radio.Group>
                        <Radio value={"yes"}>Да</Radio>
                        <Radio value={"no"}>Нет</Radio>
                        <Radio value={"ssz"}>ССЗ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Space size={"large"}>
                    <Form.Item
                        style={{width: 200}}
                        name={"has_hospitalization"}
                        valuePropName={"checked"}
                        rules={[{required: true}]}
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
                            >
                                <InputNumber style={{width: 180}}/>
                            </Form.Item>
                            <Form.Item
                                style={{width: 300}}
                                label={"Дата последней госпитализации"}
                                name={"last_hospitalization_date"}
                                rules={[{required: true, message: "Введите дату последней госпитализации"}]}
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
                >
                    <Input.TextArea/>
                </Form.Item>
                <Space size={"large"}>
                    <Form.Item>
                        <Button htmlType={"reset"}>
                            Отмена
                        </Button>
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

export default PatientNewForm;