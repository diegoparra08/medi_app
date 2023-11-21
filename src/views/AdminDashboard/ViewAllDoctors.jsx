import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { doctorActions } from "../../redux/actions/rootActions";

import { ButtonTwo } from "../../components/Buttons/Buttons";

const { getAllDoctors } = doctorActions;

const ViewAllDoctors = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [])

    const { doctors } = useSelector(state => state.doctors);
    

    return (
        <div>
            <h1>Doctores</h1>

            <div className="flex space-x-4">
            <ButtonTwo label={'Ordenar A-Z'}/>
            <ButtonTwo label={'Ordenar Z-A'}/>
            </div>

            <ul className="flex flex-col items-center md:grid grid-cols-2">
                {doctors.map((doctor) => (
                    <li className="flex flex-row bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-[95%] md:w-3/4 lg:w-3/5 p-2 mt-3"
                    key={doctor.id}>{doctor.name}
                    <div className="ml-auto mr-2">
                   <ButtonTwo label={'Ver detalle'}/>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewAllDoctors;