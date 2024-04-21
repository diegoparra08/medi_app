import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDoctors, fetchAllSpecialties } from "../../redux";

import DoctorCard from '../../components/Cards/DoctorCard'
import { useState } from "react";


export const Specialties = () => {

    const dispatch = useDispatch();
    const [filtered, setFiltered] = useState(false);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        dispatch(fetchAllSpecialties());
        dispatch(fetchAllDoctors());
    }, [dispatch])

    const { specialties } = useSelector(state => state.specialty);

    const { doctors } = useSelector(state => state.doctor);

    const filterDoctors = (selectedSpecialtyId) => {

        if (!selectedSpecialtyId) {
            setFilteredDoctors([]);
            setFiltered(false);
            return;
        }

        const filteredDoctors = doctors.filter((doctor) => {
            return doctor.Specialties.some(specialty => specialty.specialty_name === selectedSpecialtyId);
        });

        setFilteredDoctors(filteredDoctors);
        setFiltered(true);
    };


    return (
        <div className="flex flex-col items-center pt-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl mb-2 text-center">
                Selecciona la especialidad para la que quieres agendar tu cita</h1>

            <select className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] md:w-3/4 lg:w-3/5 p-2.5 mt-3 mx-auto"
                name="specialties" id="specialties"
                onChange={(e) => filterDoctors(e.target.value)}
            >
                <option value="">Selecciona</option>
                {specialties && specialties.map((specialty) => (
                    <option key={specialty.id}>{specialty.specialty_name}</option>
                ))}
            </select>
            <div className="mt-5 md:grid md:grid-cols-2 lg:grid-cols-3">
                {filtered && filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} name={doctor.name} specialties={doctor.Specialties} />
                ))}
            </div>

        </div>
    )
}

