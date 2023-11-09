import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { doctorActions } from "../../redux/actions/rootActions";

const { getAllDoctors } = doctorActions

const ViewAllDoctors = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [])

    const { doctors } = useSelector(state => state.doctors);

    return (
        <div>
            <h1>Lista de Doctores</h1>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>{doctor.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewAllDoctors;