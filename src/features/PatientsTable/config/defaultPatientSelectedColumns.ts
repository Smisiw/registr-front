'use client'
export const defaultPatientSelectedColumns = () => {
    const patientsSelectedColumns = localStorage.getItem("patientsSelectedColumns")
    if(patientsSelectedColumns){
        return patientsSelectedColumns.split(",")
    }
    else {
        return ["id", "full_name", "gender", "age", "location", "district", "address"]
    }
}
//TODO: Исправить ошибку в консоле с localStorage