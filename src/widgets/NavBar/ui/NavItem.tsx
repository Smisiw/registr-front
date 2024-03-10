import React, {ReactElement} from 'react';
import Link from "next/link";
import {INavItem} from "../model/INavItem";


const NavItem = ({href, icon, name} : INavItem) : ReactElement => {
    return (
        <li key={href}>
            <Link href={href}>

                <span>{name}</span>
            </Link>
        </li>
    );
};

export default NavItem;