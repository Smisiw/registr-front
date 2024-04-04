import {IColumn} from "@/shared/CustomTable/model/IColumn";
import React from "react";
import searchTableFilter from "@/shared/CustomTable/ui/searchTableFilter";
import dateTableFilter from "@/shared/CustomTable/ui/dateTableFilter";

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
        dataIndex: 'full_name',
        key: 'full_name',
        dataType: "string",
        filterDropdown: searchTableFilter,
        sorter: true,
        width: 200,
    },
    {
        title: 'Пол',
        dataIndex: 'gender',
        key: 'gender',
        dataType: "boolean",
        sorter: false,
        filters: [
            { text: 'М', value: 'М' },
            { text: 'Ж', value: 'Ж' }
        ],
        width: 70,
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
        title: 'Дата рождения',
        dataIndex: 'birth_date',
        key: 'birth_date',
        dataType: "date",
        filterDropdown: dateTableFilter,
        sorter: true,
        render(data: Date): React.ReactNode {
            return `${data}`
        },
        width: 130,
    },
    {
        title: 'Дата смерти',
        dataIndex: 'dod',
        key: 'dod',
        dataType: "date",
        filterDropdown: dateTableFilter,
        sorter: false,
        render(data: any): React.ReactNode {
            return `${data || ""}`
        },
        width: 150,
    },
    {
        title: 'Место жительства',
        dataIndex: 'location',
        key: 'location',
        dataType: "string",
        filters: [
            { text: 'НСО', value: 'НСО' },
            { text: 'Новосиюирск', value: 'Новосибирск' },
            { text: 'другое', value: 'другое' }
        ],
        sorter: false,
        width: 130,
    },
    {
        title: 'Район',
        dataIndex: 'district',
        key: 'district',
        dataType: "string",
        sorter: false,
        width: 130,
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
        dataType: "address",
        sorter: false,
        width: 300,
    },
    {
        title: 'Телефон',
        dataIndex: 'phone',
        key: 'phone',
        dataType: "phone",
        sorter: false,
        width: 120,
    },
    {
        title: 'Поликлиника',
        dataIndex: 'clinic',
        key: 'clinic',
        dataType: "string",
        sorter: false,
        width: 150,
    },
    {
        title: 'Примечание',
        dataIndex: 'patient_note',
        key: 'patient_note',
        dataType: "string",
        sorter: false,
        width: 150,
    },
    {
        title: 'Направивший врач',
        dataIndex: 'referring_doctor',
        key: 'referring_doctor',
        dataType: "string",
        filterDropdown: searchTableFilter,
        sorter: false,
        width: 200,
    },
    {
        title: 'Направившая мед. организация',
        dataIndex: 'referring_clinic_organization',
        key: 'referring_clinic_organization',
        dataType: "string",
        filterDropdown: searchTableFilter,
        sorter: false,
        width: 160,
    },
    {
        title: 'Категория инвалидности',
        dataIndex: 'disability',
        key: 'disability',
        dataType: "string",
        filters: [
            { text: 'нет', value: 'нет' },
            { text: 'I', value: 'I' },
            { text: 'II', value: 'II' },
            { text: 'III', value: 'III' },
            { text: 'отказ', value: 'отказ' }
        ],
        sorter: false,
        width: 160,
    },
    {
        title: 'Льготное обеспечение препаратами',
        dataIndex: 'lgota_drugs',
        key: 'lgota_drugs',
        dataType: "string",
        filters: [
            { text: 'нет', value: 'нет' },
            { text: 'да', value: 'да' },
            { text: 'ССЗ', value: 'ССЗ' }
        ],
        sorter: false,
        width: 130,
    },
    {
        title: 'Госпитализации',
        dataIndex: 'has_hospitalization',
        key: 'has_hospitalization',
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
        title: 'Количество госпитализаций',
        dataIndex: 'count_hospitalization',
        key: 'count_hospitalization',
        dataType: "string",
        filterDropdown: searchTableFilter,
        sorter: false,
        width: 150,
    },
    {
        title: 'Дата последней госпитализации',
        dataIndex: 'last_hospitalization_date',
        key: 'last_hospitalization_date',
        dataType: "date",
        filterDropdown: dateTableFilter,
        sorter: true,
        render(data: Date): React.ReactNode {
            return `${data || ""}`
        },
        width: 180,
    },

]