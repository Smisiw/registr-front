export interface IPatient {
    id: number,
    name: string,
    last_name: string,
    patronymic: string,
    gender: "М" | "Ж",
    birth_date: Date | string,
    dod?: Date | string,
    location: "НСО" | "Новосибирск" | "другое",
    district: string,
    address: string,
    phone: number,
    clinic: string,
    patient_note?: string,
    referring_doctor?: string,
    referring_clinic_organization?: string,
    disability: "нет" | "I" | "II" | "III" | "отказ",
    lgota_drugs: "нет" | "да" | "ССЗ",
    has_hospitalization: boolean,
    count_hospitalization?: number,
    last_hospitalization_date?: Date | string,
}