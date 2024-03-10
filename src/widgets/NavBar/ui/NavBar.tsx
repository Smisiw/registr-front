import NavItem from "@/widgets/NavBar/ui/NavItem";
import {INavItem} from "@/widgets/NavBar/model/INavItem";
import {routes} from "@/widgets/NavBar/config/routes";

const NavBar = () => {
    return (
        <nav>
            <ul>
                {routes.map(({href, icon, name}: INavItem) =>
                    <NavItem key={href} href={href} icon={icon} name={name} />
                )}
            </ul>
        </nav>
    );
};

export default NavBar;