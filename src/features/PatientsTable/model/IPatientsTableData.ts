import {ITableData} from "@/shared/CustomTable";
import {IPatient} from "@/entities/Patient/model/IPatient";

export interface IPatientsTableData extends ITableData{
    data: IPatient[]
}