import {IColumn} from "@/shared/CustomTable/model/IColumn";

export const PatientColumns: IColumn[] = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        dataType: "string",
        sortAvailable: true,
        width: 200,
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
        key: 'lastName',
        dataType: "string",
        sortAvailable: true,
        width: 200,
    },
    {
        title: 'Отчество',
        dataIndex: 'patronymic',
        key: 'patronymic',
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
        dataIndex: 'date_birth',
        key: 'date_birth',
        dataType: "date",
        sortAvailable: true,
        width: 100,
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