'use client'
import React, {useState} from 'react';
import {login} from "@/entities/Session/api";
import styles from "./LoginForm.module.css"
import {Card, Form, Input, Space, Typography} from "antd";
import SubmitButton from "@/shared/Buttons/ui/SubmitButton";
import {ILoginForm} from "@/entities/Session/model/ILoginForm";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const [form] = Form.useForm()
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter()
    const formSubmitHandler = async (values: ILoginForm) => {
        try {
            await login(values)
            let defaultPage = localStorage.getItem("defaultPage")
            if (!defaultPage){
                localStorage.setItem("defaultPage", '/patients')
                defaultPage = '/patients'
            }
            router.push(defaultPage)
        } catch (e: {error_code: number, message: string} | any) {
            setErrorMessage(e.message)
        }
    }
    return (
        <Space className={styles.container} >
            <Card title={"Авторизация"} className={styles.form}>
                <Form
                    form={form}
                    layout={"vertical"}
                    onFinish={formSubmitHandler}
                >
                    <Typography.Text type={"danger"}>
                        {errorMessage}
                    </Typography.Text>
                    <Form.Item
                        label={"Логин:"}
                        name={"login"}
                        rules={[{required: true}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label={"Пароль:"}
                        name={"password"}
                        rules={[{required: true}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <SubmitButton form={form}>
                            Войти
                        </SubmitButton>
                    </Form.Item>
                </Form>
            </Card>
        </Space>

    );
};

export default LoginForm;