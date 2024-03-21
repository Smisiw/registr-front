'use client'
import React from 'react';
import {LeftOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import styles from "./BackLink.module.css"

const BackLink = () => {
    const router = useRouter()
    return (
        <>
            <a className={styles.link} onClick={router.back}>
                <LeftOutlined />
            </a>
        </>
    );
};

export default BackLink;