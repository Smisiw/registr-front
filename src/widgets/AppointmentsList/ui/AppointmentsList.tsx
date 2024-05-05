'use client'
import React, {useEffect, useState} from 'react';
import PatientTable from "@/features/PatientsTable/ui/PatientTable";
import {getPatients} from "@/entities/Patient/api/getPatients";
import {IPatientTable} from "@/entities/Patient/model/IPatientTable";
import {ITableParams} from "@/shared/CustomTable";
import SearchBar from "@/shared/SearchBar/ui/SearchBar";
import ButtonNew from "@/shared/Buttons/ui/ButtonNew";
import styles from "./AppointmentsList.module.css"

const AppointmentsList = () => {
    const [
        appointmentsTableParams,
        setAppointmentsTableParams
    ] = useState<ITableParams>({
            currentPage: 1,
            filters: {},
            sortParams: null
        }
    )
    const [appointments, setAppointments] = useState<{ data: IPatientTable[], total: number }>({
        data: [],
        total: 0
    })
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        const dataHandler = async () =>  {
            try {
                setLoading(true)
                setAppointments(await getPatients(appointmentsTableParams))
                setLoading(false)
            } catch (e) {

            }
        }
        dataHandler()

    }, [JSON.stringify(appointmentsTableParams)]);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchHandler()
        }, 1000)
        return () => clearTimeout(timer)
    }, [searchValue]);

    const searchHandler = () => {
        setAppointmentsTableParams(
            {
                ...appointmentsTableParams,
                filters: {
                    ...appointmentsTableParams.filters,
                    fullName: searchValue==""? null : [searchValue]}
            }
        )
    }

    const onChangeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <>
                {
 (<>
                                <h2>Список пациентов</h2>
                                <div className={styles.container}>
                                    <SearchBar
                                        value={searchValue}
                                        onChange={onChangeSearchHandler}
                                        onPressEnter={searchHandler}
                                    />
                                    <ButtonNew href={"/appointments/new/?status=create"}>Новый пациент</ButtonNew>
                                </div>
                                <PatientTable
                                    data={{...appointments, loading}}
                                    tableParams={appointmentsTableParams}
                                    setTableParams={setAppointmentsTableParams}
                                />
                                </>
                            )
                }
        </>
    );
};

export default AppointmentsList;