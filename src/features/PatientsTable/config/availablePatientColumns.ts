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
        title: 'Возраст',
        value: 'age',
    },
    {
        title: 'Снилс',
        value: 'snils',
    },
    {
        title: 'Направивший врач',
        value: 'referringDoctor',
    },
    {
        title: 'Направившая мед. организация',
        value: 'referringMedicalOrganization',
    },
    {
        title: 'Хроническая сердечная недостаточность (подтверждённый)',
        value: 'isCHFConfirmed',
    },
    {
        title: 'Дата постановки диагноза ХСН',
        value: 'dateDiagnosisCHF',
    },
    {
        title: 'Госпитализации',
        value: 'wasHospitalised',
    },
    {
        title: 'Льготное обеспечение препаратами',
        value: 'preferentialDrugs',
    },
    {
        title: 'Номер карты МИС',
        value: 'MISCardNumber',
    },
    {
        title: 'Дата смерти',
        value: 'dateDeath',
    },
    {
        title: 'Примечание',
        value: 'note',
    },

]