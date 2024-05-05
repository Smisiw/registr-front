import {IColumn} from "@/shared/CustomTable/model/IColumn";
import React from "react";
import searchTableFilter from "@/shared/CustomTable/ui/searchTableFilter";
import dateTableFilter from "@/shared/CustomTable/ui/dateTableFilter";

export const AppointmentColumns: IColumn[] = [
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
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        dataType: "date",
        filterDropdown: dateTableFilter,
        sorter: true,
        render(data: Date): React.ReactNode {
            return `${data}`
        },
        width: 130,
    }
]