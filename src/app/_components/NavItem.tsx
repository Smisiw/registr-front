import React from 'react';
import Link from "next/link";


const NavItem = ({href, icon, name}) => {
    return (
        <li key={href}>
            <Link href={href}>

                <span>{name}</span>
            </Link>
        </li>
    );
};

export default NavItem;