import {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {Key} from "react";
import {DataIndex} from "rc-table/es/interface";

export interface ITableParams {
    currentPage: number,
    filters: Record<string, FilterValue | null>,
    sortParams: { columnKey: DataIndex, order: "ascend" | "descend" } | null
}