import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 

import { doctorActions } from "../../redux/actions/rootActions";

import { ButtonTwo } from "../../components/Buttons/Buttons";

const { getAllDoctors } = doctorActions;

const ViewAllDoctors = () => {
    const dispatch = useDispatch();
 

    useEffect(() => {
        dispatch(getAllDoctors())
    }, [dispatch])

    const { doctors } = useSelector(state => state.doctors);
    const [doctorsList, setDoctorsList] = useState(doctors);
    const [isOrdered, setIsOrdered] = useState(false);

    const orderByName = (list, order) => {

        const sortedDoctors = list.slice().sort((a, b) => {
            if (order === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (order === 'desc') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });

        setDoctorsList(sortedDoctors);
        setIsOrdered(true);
    };



    return (
        <div className="flex flex-col items-center">
            <h1>Doctores</h1>

            <div className="flex space-x-4">
                <ButtonTwo label={'Ordenar A-Z'} onClick={() => orderByName(doctors, 'asc')} />
                <ButtonTwo label={'Ordenar Z-A'} onClick={() => orderByName(doctors, 'desc')} />
            </div>

            <ul className="flex flex-col items-center md:grid grid-cols-2 w-full">
                {isOrdered ? (
                    doctorsList.map((doctor) => (
                        <li
                            className="flex flex-row items-center justify-center bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  md:w-3/4 lg:w-3/5 p-2 mt-3 mx-auto"
                            key={doctor.id}
                        >
                            {doctor.name}
                            <Link to={`/doctor/${id}`}>
                            <div className="ml-auto mr-2">
                                <ButtonTwo label={'Ver detalle'}/>

                            </div>
                            </Link>
                            
                        </li>
                    ))
                ) : (
                    doctors.map((doctor) => (
                        <li
                            className="flex flex-row items-center justify-center bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  md:w-3/4 lg:w-3/5 p-2 mt-3 mx-auto"
                            key={doctor.id}
                        >
                            {doctor.name}
                            <Link to={`/doctor/${doctor.id}`}>
                            <div className="ml-auto mr-2">
                                <ButtonTwo label={'Ver detalle'}/>

                            </div>
                            </Link>
                        </li>
                    ))
                )}
            </ul>

        </div>
    );
}

export default ViewAllDoctors;