import {INavItem} from "@/widgets/SideBar/model/INavItem";
import patientsIcon from "@/shared/icons/PatientsIcon"
import appointmentsIcon from "@/shared/icons/AppointmentsIcon"
import hospitalizationsIcon from "@/shared/icons/HospitalizationsIcon"
import statisticsIcon from "@/shared/icons/StatisticsIcon"
import helpIcon from "@/shared/icons/HelpIcon"
import generalDetails from "@/shared/icons/generalDetails"
import diagnose from "@/shared/icons/diagnose.png"
import shoks from "@/shared/icons/shoks.png"
import labTests from "@/shared/icons/labTests.png"
import complaints from "@/shared/icons/complaints.png"
import ekgs from "@/shared/icons/ekgs.png"
import drugTherapy from "@/shared/icons/drugTherapy.png"


export const navRoutes: {general: INavItem[], appointment: INavItem[]} = {
    general: [
        {href: `/patients`, Icon: patientsIcon, name: `Пациенты`},
        {href: `/appointments`, Icon: appointmentsIcon, name: `Приемы`},
        {href: `/hospitalizations`, Icon: hospitalizationsIcon, name: `Госпитализации`},
        {href: `/statistics`, Icon: statisticsIcon, name: `Статистика`},
        {href: `/help`, Icon: helpIcon, name: `Помощь`}
    ],
    appointment: [
        {href: `/generalDetails`, Icon: generalDetails, name: `Общие сведения`},
        // {href: `/diagnose`, Icon: diagnose, name: `Диагноз`},
        // {href: `/shoks`, Icon: shoks, name: `Шкала ШОКС`},
        // {href: `/labTests`, Icon: labTests, name: `Лабораторные тесты`},
        // {href: `/complaints`, Icon: complaints, name: `Жалобы`},
        // {href: `/ekgs`, Icon: ekgs, name: `ЭКГ и ЭХО-КГ`},
        // {href: `/drugTherapy`, Icon: drugTherapy, name: `Лекарственная терапия`}
    ]
}