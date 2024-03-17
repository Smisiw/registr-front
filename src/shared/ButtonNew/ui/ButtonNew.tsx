import React from 'react';
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import styles from "./Button.module.css"

interface props{
    children?: React.ReactNode,
    href?: string
}
const ButtonNew = ({children, href}: props) => {
    return (
        <>
            <Button type={"primary"} className={styles.button} href={href}>{children}<PlusOutlined /></Button>
        </>
    );
};

export default ButtonNew;