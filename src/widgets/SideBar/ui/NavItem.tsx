'use client'
import React, {ReactElement} from 'react';
import Link from "next/link";
import {INavItem} from "@/widgets/SideBar/model/INavItem";
import Image from "next/image";
import {useActivePath} from "@/widgets/SideBar/api/helper";
import styles from "../ui/NavItem.module.css"


const NavItem = ({href, icon, name} : INavItem) : ReactElement => {
    const isActivePath = useActivePath()
    return (
            <Link href={href} className={isActivePath(href)? styles.activeLink : styles.link}>
                <Image className={styles.linkIcon} src={icon} alt={name} width={16} height={16}/>
                <span className={styles.linkText}>{name}</span>
            </Link>
    );
};

export default NavItem;