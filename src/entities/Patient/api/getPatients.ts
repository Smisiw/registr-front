import {IPatientTable} from "@/entities/Patient/model/IPatientTable";
import {TablePaginationConfig} from "antd/es/table/interface";
import {ITableParams} from "@/shared/CustomTable";

export const getPatients = (
    props: ITableParams = {
        currentPage: 1,
        filters: {},
        sortParams: null}
): { data: IPatientTable[], total: number } => {
  //Запрос на сервер
    console.log("getPatients")
    const patients : IPatientTable[] = [
        {
            id: 1,
            full_name: "Иванов Иван Иванович",
            gender: "М",
            birth_date: new Date("2000-01-01"),
            age: 24,
            phone: 88888888888,
            address: "Улица Пушкина д.1",
            count_hospitalization: 3,
            last_hospitalization_date: new Date(),
            has_hospitalization: false,
            lgota_drugs: "no",
            location: "NSO",
            district: "Ленинский",
            disability: "no"
        },
        {
            id: 2,
            full_name: "Тест Тест",
            gender: "М",
            birth_date: new Date("1979-03-01"),
            age: 45,
            phone: 12341234124,
            address: "Улица Пушкина д.1",
            count_hospitalization: 0,
            last_hospitalization_date: new Date(),
            has_hospitalization: false,
            lgota_drugs: "no",
            location: "NSO",
            district: "Центральный",
            disability: "no"
        }
    ]
    return {data: patients, total: patients.length}
}