import NavItem from "./NavItem";
import {INavItem} from "@/widgets/SideBar/model/INavItem";
import {navRoutes} from "@/widgets/SideBar/config/navRoutes";
import ProfileLink from "@/entities/Profile/ui/ProfileLink";
import LogoutButton from "@/entities/Session/ui/LogoutButton";
import styles from "./SideBar.module.css"

const SideBar = () => {
    return (
        <aside className={styles.sideBar}>
            <nav className={styles.topNav}>
                <h1 className={styles.logo}>Logo</h1>
                <ul className={styles.ul}>
                    {navRoutes.top.map(({href, icon, name}: INavItem) =>
                        <li className={styles.li} key={href}><NavItem href={href} icon={icon} name={name} /></li>
                    )}
                </ul>
            </nav>
            <nav className={styles.bottomNav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <ProfileLink/>
                    </li>
                    {navRoutes.bottom.map(({href, icon, name}: INavItem) =>
                        <li className={styles.li} key={href}><NavItem href={href} icon={icon} name={name} /></li>
                    )}
                    <li className={styles.li}>
                        <LogoutButton/>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;