'use client'
export const defaultPatientSelectedColumns = () => {
    const patientsSelectedColumns = localStorage.getItem("patientsSelectedColumns")
    if(patientsSelectedColumns){
        return patientsSelectedColumns.split(",")
    }
    else {
        return ["id", "fullName", "gender", "dateBirth", "address", "snils"]
    }
}
//TODO: Исправить ошибку в консоле с localStorage