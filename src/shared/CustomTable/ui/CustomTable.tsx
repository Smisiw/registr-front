'use client';
import {useState} from "react";
import {TablePaginationConfig} from "antd/es/table/interface";
import {Pagination, Table, TreeSelect} from "antd";
import {IAvailableColumns, IColumn, ITableParams} from "@/shared/CustomTable";
import styles from "./CustomTable.module.css"


interface props {
    columns: IColumn[]
    availableColumns: IAvailableColumns[]
    selectedColumns: string[]
    setSelectedColumns(selectedColumns: string[]): void
    data: {
        data: any
        total: number
    }
    tableParams: ITableParams
    setTableParams(data: ITableParams): void
}


export function CustomTable({columns, availableColumns, selectedColumns, setSelectedColumns, data, tableParams, setTableParams} : props) {
    const [visibleColumns, setVisibleColumns] = useState<IColumn[]>(columns.filter(item => selectedColumns.includes(item.key)));
    const handlePaginationChange = (
        current: number
) => {
        setTableParams(
            {
                ...tableParams,
                currentPage: current
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
                className={styles.selector}
                treeData={availableColumns}
                value={selectedColumns}
                onChange={handleColumnsChange}
                showSearch={false}
                treeCheckable={true}
                variant={"outlined"}
            />
            <Table
                className={styles.table}
                columns={visibleColumns}
                rowKey={(record) => record.id}
                dataSource={data.data}
                pagination={false}
                onChange={()=>{}}
                scroll={{x: 900, y: 200}}
                virtual={true}
                size={"middle"}
                bordered={false}
            />
            <Pagination
                className={styles.pagination}
                current={tableParams.currentPage}
                pageSize={1}
                total={data.total}
                onChange={handlePaginationChange}
                itemRender={(
                    page,
                    type,
                    originalItem
                ) => {
                    if (type == "prev" || type == "next") {
                        return (<div className={styles.paginationItemNav}>{originalItem}</div>)
                    }
                    if (page == tableParams.currentPage) {
                        return  (<span className={styles.paginationItemActive}>{originalItem}</span>)
                    }
                    return (<span className={styles.paginationItem}>{originalItem}</span>)
                }}
            />
        </div>

    )
}