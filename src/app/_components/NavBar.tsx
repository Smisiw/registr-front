import React from 'react';
import NavItem from "@/app/_components/NavItem";

type NavItem = {
    href: string,
    icon: string,
    name: string,
}
const navigation: NavItem[] = [
    {href: `/patients`, icon: ``, name: `Список пациентов`},
    {href: `/appointment`, icon: ``, name: `Список приемов`},
    {href: `/hospitalisations`, icon: ``, name: `Список госпитализаций`}
]
const NavBar = () => {
    return (
        <nav>
            <ul>
                {navigation.map(({href, icon, name}) => {
                    <NavItem href={href} icon={icon} name={name} />
                })}
            </ul>
        </nav>
    );
};

export default NavBar;