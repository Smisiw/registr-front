'use client';
import {useContext, useState} from "react";
import {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {Pagination, Table, Tag, TreeSelect} from "antd";
import {DEFAULT_TABLE_PAGE_SIZE, IAvailableColumns, IColumn, ITableData, ITableParams} from "@/shared/CustomTable";
import styles from "./CustomTable.module.css"
import {useRouter} from "next/navigation";


interface props {
    columns: IColumn[]
    availableColumns: IAvailableColumns[]
    selectedColumns: string[]
    setSelectedColumns(selectedColumns: string[]): void
    data: ITableData
    tableParams: ITableParams
    setTableParams(data: ITableParams): void
}


export function CustomTable({columns, availableColumns, selectedColumns, setSelectedColumns, data, tableParams, setTableParams} : props) {
    const [visibleColumns, setVisibleColumns] = useState<IColumn[]>(columns.filter(item => selectedColumns.includes(item.key)));
    const router = useRouter()
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

    const handleTableChange = (pagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sortParams: SorterResult<any> | SorterResult<any>[]
    ) => {
        setTableParams(
            {
                ...tableParams,
                filters: {
                    ...tableParams.filters,
                    ...filters
                },
                sortParams: sortParams instanceof Array
                    ? null
                    : (sortParams.order && sortParams.columnKey)
                        ?
                        {
                            columnKey: sortParams.columnKey,
                            order: sortParams.order
                        }
                        : null
            }
        )
    }

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
                tagRender={(props) => (
                    <Tag
                        closable={props.closable}
                        onClose={props.onClose}
                    >
                        {props.label}
                    </Tag>)}
                onChange={handleColumnsChange}
                showSearch={false}
                treeCheckable={true}
                variant={"outlined"}
            />
            <Table
                className={styles.table}
                columns={visibleColumns}
                rowKey={(record) => record.id}
                loading={data.loading}
                onRow={(record, index) => {
                    return {
                        onClick: () => {router.push(`/patients/${record.id}`)}
                    }
                }}
                rowClassName={styles.tableRow}
                dataSource={data.data}
                pagination={false}
                onChange={handleTableChange}
                scroll={{x: 900, y: 200}}
                virtual={true}
                size={"middle"}
                bordered={false}
            />
            {/*TODO: можно вынести пагинацию в отдельный компонент*/}
            <Pagination
                className={styles.pagination}
                current={tableParams.currentPage}
                pageSize={DEFAULT_TABLE_PAGE_SIZE}
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