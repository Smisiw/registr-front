import {IAvailableColumns} from "@/shared/CustomTable";

export const availablePatientColumns: IAvailableColumns[] = [
    {
        title: 'ID',
        value: 'id',
        disabled: true,
    },
    {
        title: 'ФИО',
        value: 'fullName',
        disabled: true,
    },
    {
        title: 'Пол',
        value: 'gender',
    },
    {
        title: 'Телефон',
        value: 'phoneNumber',
    },
    {
        title: 'Адрес',
        value: 'address',
    },
    {
        title: 'Дата рождения',
        value: 'dateBirth',
    },
    {
        title: 'Снилс',
        value: 'snils',
    },
]