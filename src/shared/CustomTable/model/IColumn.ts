import {ReactNode} from "react";
import {ColumnType} from "antd/es/table";
import {DefaultOptionType} from "rc-select/es/Select";

interface filter {
    text: string
    value: string
    children?: filter[]
}
export interface IColumn extends ColumnType<any>{
    key: string
    title: string
    dataIndex: string
    sorter: boolean
    width?: number
    dataType: "string" | "phone" | "address" | "date" | "boolean"
    render? (data: any): ReactNode
    filters?: filter[]
}

export interface IAvailableColumns extends DefaultOptionType{
    title: string
    value: string
    disabled?: boolean
}