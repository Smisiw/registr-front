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
            fullName: "Иванов Иван Иванович",
            gender: "М",
            dateBirth: new Date("2000-01-01"),
            age: 24,
            phoneNumber: "88888888888",
            address: "Улица Пушкина д.1",
            snils: 12312312312,
            isCHFConfirmed: false,
            dateDiagnosisCHF: new Date(),
            wasHospitalised: false,
            preferentialDrugs: "no",
            MISCardNumber: 1
        },
        {
            id: 2,
            fullName: "Тест Тест",
            gender: "М",
            dateBirth: new Date("1979-03-01"),
            age: 45,
            phoneNumber: "12341234124",
            address: "Улица Пушкина д.1",
            snils: 12312312332,
            isCHFConfirmed: false,
            dateDiagnosisCHF: new Date(),
            wasHospitalised: false,
            preferentialDrugs: "no",
            MISCardNumber: 2
        }
    ]
    return {data: patients, total: patients.length}
}