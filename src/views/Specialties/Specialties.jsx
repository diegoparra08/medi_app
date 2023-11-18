import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specialtyActions, doctorActions } from "../../redux/actions/rootActions";
const { getAllSpecialties } = specialtyActions;


export const Specialties = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSpecialties());
        // dispatch(getAllDoctors());
    }, [dispatch])

    const { specialties } = useSelector(state => state.specialties);
    //const { doctors } = useSelector(state => state.doctors);


    return (
        <div>
                <select className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] mt-3 mx-auto"
                 name="specialties" id="specialties">
                {specialties && specialties.map((specialty) => (
                    <option key={specialty.id}>{specialty.specialty_name}</option>
                ))}
                </select>
            
        </div>
    )
}

