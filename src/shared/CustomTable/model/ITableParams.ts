import {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {Key} from "react";

export interface ITableParams {
    currentPage: number,
    filters: Record<string, FilterValue | null>,
    sortParams: { columnKey: Key, order: "ascend" | "descend" } | null
}