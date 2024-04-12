'use client'
import React from 'react';
import styles from "@/widgets/SideBar/ui/SideBar.module.css";
import {navRoutes} from "@/widgets/SideBar/config/navRoutes";
import {INavItem} from "@/widgets/SideBar/model/INavItem";
import NavItem from "@/widgets/SideBar/ui/NavItem";
import {useParams, usePathname} from "next/navigation";

const NavBar = () => {
    const pathName = usePathname()
    const params = useParams()
    return (
        <nav className={styles.topNav}>
            <h1 className={styles.logo}>Logo</h1>
            <ul className={styles.ul}>
                {(pathName == "/patients/new" || pathName == "/appointments/new")
                    ? navRoutes.appointment.map(({href, Icon, name}: INavItem) =>
                        <li className={styles.li} key={href}><NavItem disabled={true} href={href} Icon={Icon} name={name} /></li>
                    )
                    : (params && pathName?.startsWith(`/appointments/${params?.id}`))
                        ? navRoutes.appointment.map(({href, Icon, name}: INavItem) =>
                            <li className={styles.li} key={href}><NavItem href={href} Icon={Icon} name={name} /></li>
                        )
                        : navRoutes.general.map(({href, Icon, name}: INavItem) =>
                        <li className={styles.li} key={href}><NavItem href={href} Icon={Icon} name={name} /></li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;