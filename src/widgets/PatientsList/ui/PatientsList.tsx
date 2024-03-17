'use client'
import React, {KeyboardEventHandler, useEffect, useState} from 'react';
import PatientTable from "@/features/PatientsTable/ui/PatientTable";
import {getPatients} from "@/entities/Patient/api/getPatients";
import {IPatient} from "@/entities/Patient/model/IPatient";
import {ITableParams} from "@/shared/CustomTable";
import SearchBar from "@/shared/SearchBar/ui/SearchBar";
import ButtonNew from "@/shared/ButtonNew/ui/ButtonNew";
import styles from "./PatientsList.module.css"

const PatientsList = () => {
    const [
        patientsTableParams,
        setPatientsTableParams
    ] = useState<ITableParams>({
            currentPage: 1,
            filters: null,
            sortParams: null
        }
    )
    const [patients, setPatients] = useState<{ data: IPatient[], total: number }>()
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        setLoading(true)
        setPatients(getPatients(patientsTableParams))
        setLoading(false)
    }, [patientsTableParams]);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchHandler()
        }, 1000)
        return () => clearTimeout(timer)
    }, [searchValue]);

    const searchHandler = () => {
        setPatientsTableParams(
            {
                ...patientsTableParams,
                filters: searchValue==""? null : `{fullName=${searchValue}`
            }
        )
    }

    const onChangeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <>
            {
                (loading)
                    ? (<div>Loading...</div>)
                    : (!patients)
                        ? (<div>Не удалось получить информацию о пациентах</div>)
                        : (<>
                            <h2>Список пациентов</h2>
                            <div className={styles.container}>
                                <SearchBar
                                    value={searchValue}
                                    onChange={onChangeSearchHandler}
                                    onPressEnter={searchHandler}
                                />
                                <ButtonNew href={"/patients/new"}>Новый пациент</ButtonNew>
                            </div>
                            <PatientTable
                                data={patients}
                                tableParams={patientsTableParams}
                                setTableParams={setPatientsTableParams}
                            />
                            </>
                        )
            }

        </>
    );
};

export default PatientsList;