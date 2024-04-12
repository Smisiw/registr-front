'use client'
import React from 'react';
import ExitIcon from "@/shared/icons/ExitIcon"
import styles from "./LogoutButton.module.css"
import {logout} from "@/entities/Session/api";

const LogoutButton = () => {
    return (
        <a className={styles.link} href="" onClick={logout}>
            <ExitIcon/>
            <span className={styles.linkText}>Выход</span>
        </a>
    );
};

export default LogoutButton;