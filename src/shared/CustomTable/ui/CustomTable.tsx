'use client';
import {useState} from "react";
import {FilterValue, TablePaginationConfig} from "antd/es/table/interface";
import {Table, TreeSelect} from "antd";
import {IAvailableColumns, IColumn, ITableData} from "@/shared/CustomTable";


interface props {
    columns: IColumn[]
    availableColumns: IAvailableColumns[]
    selectedColumns: string[]
    setSelectedColumns(selectedColumns: string[]): void
    data: ITableData
    setData(data: ITableData): void
}


export function CustomTable({columns, availableColumns, selectedColumns, setSelectedColumns, data, setData} : props) {
    const [visibleColumns, setVisibleColumns] = useState<IColumn[]>(columns.filter(item => selectedColumns.includes(item.key)));
    const handleTableChange = (
        pagination: TablePaginationConfig
        //filters
        //sortParams
    ) => {
        setData(
            {
                ...data,
                paginationParams: pagination
                //filters
                //sortParams
            }
        );
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
                   dataSource={data.data}
                   pagination={data.paginationParams}
                   onChange={handleTableChange}
                   scroll={{x: 900, y: 200}}
                   virtual={true}
                   size={"middle"}
                   bordered={false}
            />
        </div>

    )
}