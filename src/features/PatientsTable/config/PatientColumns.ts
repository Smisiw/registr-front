import {IColumn} from "@/shared/CustomTable/model/IColumn";

export const PatientColumns: IColumn[] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        dataType: "string",
        sortAvailable: true,
        width: 200,
    },
    {
        title: 'ФИО',
        dataIndex: 'fullName',
        key: 'fullName',
        dataType: "string",
        sortAvailable: true,
        width: 200,
    },
    {
        title: 'Пол',
        dataIndex: 'gender',
        key: 'gender',
        dataType: "string",
        sortAvailable: false,
        render: (gender) => `${gender? "М" : "Ж"}`,
        filters: [
            { text: 'М', value: 'male' },
            { text: 'Ж', value: 'female' }
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        width: 100,
    },
    {
        title: 'Телефон',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
        dataType: "phone",
        sortAvailable: false,
        width: 120,
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
        dataType: "address",
        sortAvailable: false,
        width: 400,
    },
    {
        title: 'Дата рождения',
        dataIndex: 'dateBirth',
        key: 'dateBirth',
        dataType: "date",
        sortAvailable: true,
        width: 200,
    },
    {
        title: 'Снилс',
        dataIndex: 'snils',
        key: 'snils',
        dataType: "string",
        sortAvailable: false,
        width: 130,
    }
]