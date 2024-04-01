'use client'
import React from 'react';
import {login} from "@/entities/Session/api";
import styles from "./LoginForm.module.css"

const LoginForm = () => {
    return (
        <>
            <form action={login} className={styles.container}>
                <div className={styles.form}>
                <h1>Авторизация</h1>
                <label htmlFor="login" >Логин:</label>
                <input type="text" name="login" required={true}/>
                <label htmlFor="password">Пароль:</label>
                <input type="password" name="password" required={true}/>
                <button type="submit">Войти</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;