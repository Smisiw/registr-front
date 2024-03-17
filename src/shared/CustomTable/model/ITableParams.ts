import {TablePaginationConfig} from "antd/es/table/interface";

export interface ITableParams {
    currentPage: number,
    filters: string | null,
    sortParams: {columnKey: string, sort: boolean} | null
}