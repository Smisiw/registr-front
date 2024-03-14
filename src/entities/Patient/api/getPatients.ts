import {IPatient} from "@/entities/Patient/model/IPatient";
import {IPatientsTableData} from "@/features/PatientsTable";

export const getPatients = (): IPatientsTableData => {
  //Запрос на сервер
    const patients : IPatient[] = [
        {
            id: 1,
            fullName: "Иванов Иван Иванович",
            gender: "М",
            dateBirth: new Date("2000-01-01"),
            age: 24,
            phoneNumber: "88888888888",
            address: "Улица Пушкина д.1",
            snils: "123123123123"
        },
        {
            id: 2,
            fullName: "Тест Тест",
            gender: "М",
            dateBirth: new Date("1979-03-01"),
            age: 45,
            phoneNumber: "12341234124",
            address: "Улица Пушкина д.1",
            snils: "123123123321"
        }
        ]
    return {
        data: patients,
        paginationParams: {
            current: 1,
            pageSize: 2,
            total: patients.length
        },
        sortParams: null,
        filters: null
    }
}