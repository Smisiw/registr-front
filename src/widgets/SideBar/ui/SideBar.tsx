import NavItem from "./NavItem";
import {INavItem} from "@/widgets/SideBar/model/INavItem";
import {navRoutes} from "@/widgets/SideBar/config/navRoutes";
import ProfileLink from "@/entities/Profile/ui/ProfileLink";
import LogoutButton from "@/entities/Session/ui/LogoutButton";
import styles from "./SideBar.module.css"
import NavBar from "@/widgets/SideBar/ui/NavBar";
import SettingsButton from "@/features/Settings/ui/SettingsButton";

const SideBar = () => {
    return (
        <aside className={styles.sideBar}>
            <NavBar/>
            <nav className={styles.bottomNav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <ProfileLink/>
                    </li>
                    <li className={styles.li}>
                        <SettingsButton/>
                    </li>
                    <li className={styles.li}>
                        <LogoutButton/>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;