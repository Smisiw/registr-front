'use client'
import React from 'react';
import Image from "next/image";
import exitIcon from "@/shared/icons/ExitIcon.svg"
import styles from "./LogoutButton.module.css"
import {logout} from "@/entities/Session/api";

const LogoutButton = () => {
    return (
        <a className={styles.link} href="" onClick={logout}>
            <Image src={exitIcon} alt="Выход" width={16} height={16}/>
            <span className={styles.linkText}>Выход</span>
        </a>
    );
};

export default LogoutButton;