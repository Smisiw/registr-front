import {ITableData} from "@/shared/CustomTable";
import {IPatientTable} from "@/entities/Patient/model/IPatientTable";

export interface IPatientTableData extends ITableData{
    data?: IPatientTable[]
}