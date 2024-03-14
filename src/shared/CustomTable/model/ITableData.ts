import {TablePaginationConfig} from "antd/es/table/interface";

export interface ITableData {
    data: any,
    paginationParams: TablePaginationConfig,
    filters: string | null,
    sortParams: {columnKey: string, sort: boolean} | null
}