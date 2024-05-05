import {ITableData} from "@/shared/CustomTable";
import {IPatientTable} from "@/entities/Patient/model/IPatientTable";

export interface IAppointmentTableData extends ITableData{
    data: IPatientTable[]
}