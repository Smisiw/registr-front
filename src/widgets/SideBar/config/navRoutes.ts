import {INavItem} from "@/widgets/SideBar/model/INavItem";
import patientsIcon from "@/shared/icons/PatientsIcon.svg"
import appointmentsIcon from "@/shared/icons/AppointmentsIcon.svg"
import hospitalizationsIcon from "@/shared/icons/HospitalizationsIcon.svg"
import statisticsIcon from "@/shared/icons/StatisticsIcon.svg"
import helpIcon from "@/shared/icons/HelpIcon.svg"
import settingsIcon from "@/shared/icons/SettingsIcon.svg"

export const navRoutes: {top: INavItem[], bottom: INavItem[]} = {
    top: [
        {href: `/patients`, icon: patientsIcon, name: `Пациенты`},
        {href: `/appointment`, icon: appointmentsIcon, name: `Приемы`},
        {href: `/hospitalizations`, icon: hospitalizationsIcon, name: `Госпитализации`},
        {href: `/statistics`, icon: statisticsIcon, name: `Статистика`},
        {href: `/help`, icon: helpIcon, name: `Помощь`}
    ],
    bottom: [
        {href: `/settings`, icon: settingsIcon, name: `Помощь`}
    ]
}