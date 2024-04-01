'use client'
import React from 'react';
import {Button, Card, DatePicker, Flex, Form, Input, Radio, Space} from "antd";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";

export const PatientNewForm = () => {
    const [form] = Form.useForm()
    return (
        <Card
            title={"Карточка пациента"}
        >
            <Form
                form={form}
                layout={"vertical"}
            >
                <Flex
                    justify={"space-between"}
                    wrap={"wrap"}
                >
                    <Form.Item
                        style={{width: "30%"}}
                        label={"Имя"}
                        name={"name"}
                        rules={[{required: true, message: 'Введите имя'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "30%"}}
                        label={"Фамилия"}
                        name={"lastname"}
                        rules={[{required: true, message: 'Введите фамилию'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "30%"}}
                        label={"Отчество"}
                        name={"patronymic"}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "20%"}}
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
                        style={{width: "20%"}}
                        label={"Дата рождения"}
                        name={"dateBirth"}
                        rules={[{required: true, message: 'Введите дату рождения'}]}
                    >
                        <DatePicker style={{width: 200}} placeholder={"__.__.____"} format={"DD.MM.YYYY"}/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "20%"}}
                        label={"Телефон"}
                        name={"phoneNumber"}
                        rules={[{required: true, message: 'Введите номер телефона'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "30%"}}
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
                        style={{width: "30%"}}
                        label={"Район"}
                        name={"area"}
                        rules={[{required: true, message: 'Введите район'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "30%"}}
                        label={"Адрес"}
                        name={"address"}
                        rules={[{required: true, message: 'Введите адрес'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        style={{width: "30%"}}
                        label={"Поликлиника"}
                        name={"clinic"}
                        rules={[{required: true, message: 'Введите поликлинику'}]}
                    >
                        <Input/>
                    </Form.Item>
                </Flex>
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