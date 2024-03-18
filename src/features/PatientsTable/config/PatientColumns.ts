import {IColumn} from "@/shared/CustomTable/model/IColumn";
import React from "react";

export const PatientColumns: IColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        dataType: "string",
        sorter: true,
        width: 200,
    },
    {
        title: 'ФИО',
        dataIndex: 'fullName',
        key: 'fullName',
        dataType: "string",
        sorter: true,
        width: 200,
    },
    {
        title: 'Пол',
        dataIndex: 'gender',
        key: 'gender',
        dataType: "boolean",
        sorter: false,
        render: (gender) => `${gender? "М" : "Ж"}`,
        filters: [
            { text: 'М', value: 'male' },
            { text: 'Ж', value: 'female' }
        ],
        width: 70,
    },
    {
        title: 'Телефон',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        dataType: "phone",
        sorter: false,
        width: 120,
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
        dataType: "address",
        sorter: false,
        width: 400,
    },
    {
        title: 'Дата рождения',
        dataIndex: 'dateBirth',
        key: 'dateBirth',
        dataType: "date",
        filters: [],
        sorter: true,
        render(data: Date): React.ReactNode {
            return `${data.toLocaleDateString()}`
        },
        width: 130,
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age',
        dataType: "string",
        filters: [],
        sorter: true,
        width: 110,
    },
    {
        title: 'Снилс',
        dataIndex: 'snils',
        key: 'snils',
        dataType: "string",
        sorter: false,
        width: 130,
    },
    {
        title: 'Направивший врач',
        dataIndex: 'referringDoctor',
        key: 'referringDoctor',
        dataType: "string",
        sorter: false,
        width: 200,
    },
    {
        title: 'Направившая мед. организация',
        dataIndex: 'referringMedicalOrganization',
        key: 'referringMedicalOrganization',
        dataType: "string",
        filters: [],
        sorter: false,
        width: 160,
    },
    {
        title: 'Хроническая сердечная недостаточность (подтверждённый)',
        dataIndex: 'isCHFConfirmed',
        key: 'isCHFConfirmed',
        dataType: "boolean",
        filters: [
            { text: 'Да', value: 'true' },
            { text: 'Нет', value: 'false' }
        ],
        sorter: false,
        render(data: any): React.ReactNode {
            return data? "Да" : "Нет"
        },
        width: 160,
    },
    {
        title: 'Дата постановки диагноза ХСН',
        dataIndex: 'dateDiagnosisCHF',
        key: 'dateDiagnosisCHF',
        dataType: "date",
        filters: [],
        sorter: true,
        render(data: Date): React.ReactNode {
            return `${data.toLocaleDateString()}`
        },
        width: 180,
    },
    {
        title: 'Госпитализации',
        dataIndex: 'wasHospitalised',
        key: 'wasHospitalised',
        dataType: "boolean",
        filters: [
            { text: 'Да', value: 'true' },
            { text: 'Нет', value: 'false' }
        ],
        sorter: false,
        render(data: any): React.ReactNode {
            return data? "Да" : "Нет"
        },
        width: 140,
    },
    {
        title: 'Льготное обеспечение препаратами',
        dataIndex: 'preferentialDrugs',
        key: 'preferentialDrugs',
        dataType: "string",
        filters: [
            { text: 'Нет', value: 'no' },
            { text: 'Да', value: 'yes' },
            { text: 'ССЗ', value: 'ssz' }
        ],
        sorter: false,
        render(data: any): React.ReactNode {
            return data=="no"? "Нет" : data=="yes"? "Да" : "ССЗ"
        },
        width: 130,
    },
    {
        title: 'Примечание',
        dataIndex: 'note',
        key: 'note',
        dataType: "string",
        sorter: false,
        width: 150,
    },
    {
        title: 'Номер карты МИС',
        dataIndex: 'MISCardNumber',
        key: 'MISCardNumber',
        dataType: "string",
        sorter: false,
        width: 150,
    },
    {
        title: 'Дата смерти',
        dataIndex: 'dateDeath',
        key: 'dateDeath',
        dataType: "date",
        filters: [],
        sorter: false,
        render(data: any): React.ReactNode {
            return `${data?.toLocaleDateString() || ""}`
        },
        width: 150,
    },

]