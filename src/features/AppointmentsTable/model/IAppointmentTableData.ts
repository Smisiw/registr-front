import {ITableData} from "@/shared/CustomTable";
import {IAppointmentTable} from "@/entities/Appointment/model/IAppointmentTable";

export interface IAppointmentTableData extends ITableData{
    data?: IAppointmentTable[]
}