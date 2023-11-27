import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";

import { doctorActions } from "../../redux/actions/rootActions";

import { ButtonTwo } from "../../components/Buttons/Buttons"
import doc from '../../images/docprofile.jpeg'

const { getDoctorById } = doctorActions;

const DoctorDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDoctorById(id))
    }, [])

    const { doctorDetail } = useSelector(state => state.doctorDetail);
    const { Specialties, education, name, email, phone, birthday } = doctorDetail;
    console.log('acass', Specialties);

    console.log(doctorDetail);

    return (

        <div className="w-80 h-88 p-4 border rounded-lg shadow-md flex flex-col justify-between my-2 mx-2">
            <div >
                <img className="rounded-lg" src={doc} alt="Doctorimg" />
            </div>

            <h2 className="text-lg font-bold text-customBlue5">{name}</h2>

            <ul className="p-1 space-y-1">
                <h2>Especialidades</h2>
                {Specialties && Specialties.map((specialty) => (
                    <li className="font-semibold text-md text-customBlue4"
                        key={specialty.id}>{specialty.specialty_name}</li>
                ))}
            </ul>

            {education &&
                <p className="font-semibold text-md text-customBlue4">{education}</p>
            }
            <h2>Informacion de contacto</h2>

            <h3>{email}</h3>
            <h3>{phone}</h3>

            <h2>Fecha nacimiento</h2>

            <h3>{birthday}</h3>


            <div className="mt-auto">
                <ButtonTwo label={'Accion especial'} />
            </div>
        </div>
    )
}

export default DoctorDetail;

