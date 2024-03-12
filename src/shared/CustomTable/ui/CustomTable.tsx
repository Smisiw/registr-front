'use client';
import {useEffect, useState} from "react";
import {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import axios from "axios";
import {Table, TreeSelect} from "antd";
import {IAvailableColumns, IColumn} from "@/shared/CustomTable";

interface TableParams {
    pagination?: TablePaginationConfig;
    sortField?: string;
    sortOrder?: string;
    filters?: Record<string, FilterValue>;
}


interface props {
    columns: IColumn[]
    availableColumns: IAvailableColumns
    selectedColumns: string[]
    setSelectedColumns(selectedColumns: string[]): void
    paginationParams: TablePaginationConfig
    setPaginationParams(paginationParams: TablePaginationConfig): void
    data: any
    setData(data: any): void
}


export function CustomTable<T>({columns, availableColumns, selectedColumns, setSelectedColumns, paginationParams, setPaginationParams, data, setData} : props) {

    const [loading, setLoading] = useState(false);
    const [visibleColumns, setVisibleColumns] = useState<IColumn[]>([]);
    const handleTableChange = (
        pagination: TablePaginationConfig
    ) => {
        setPaginationParams(pagination);
        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== paginationParams?.pageSize) {
            setData([]);
        }
    };

    const handleColumnsChange = (newValue: string[]) => {
        setSelectedColumns(newValue);
        const newColumns: IColumn[] = columns.filter(item => newValue.includes(item.key));
        setVisibleColumns(newColumns);
    };

    return (
        <div className={"flex flex-col"}>
            <TreeSelect
                className={"m-2"}
                treeData={availableColumns}
                value={selectedColumns}
                onChange={handleColumnsChange}
                showSearch={false}
                treeCheckable={true}
            />
            <Table className={'m-2'}
                   columns={visibleColumns}
                   rowKey={(record) => record.id}
                   dataSource={data}
                   pagination={paginationParams}
                   loading={loading}
                   onChange={handleTableChange}
                   scroll={{x: 900, y: 200}}
                   virtual={false}
            />
        </div>

    )
}