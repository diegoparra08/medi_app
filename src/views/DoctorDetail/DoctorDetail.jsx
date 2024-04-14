import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { doctorActions } from "../../redux/actions/rootActions";
import { ButtonTwo } from "../../components/Buttons/Buttons";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
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


    return (

        <div className="w-[45rem] h-88 p-4 border rounded-lg shadow-md flex  gap-10 mx-auto mt-20 ">
            <div >
                <img className="rounded-lg w-80" src={doc} alt="Doctorimg" />
            </div>
            <div>
                <h2 className="text-lg font-bold text-customBlue5">{name}</h2>

                <h2 className="mb-2 font-semibold">Especialidades:</h2>
                <ul className="flex gap-2">
                    {Specialties && Specialties.map((specialty) => (
                        <li className="font-semibold text-md text-customBlue4"
                            key={specialty.id}>{specialty.specialty_name}</li>
                    ))}
                </ul>
                {education &&
                    <p className="font-semibold text-md text-customBlue4 mb-2">{education}</p>}
                <h2 className="mb-2 font-semibold">Contacto:</h2>
                <div className="flex mb-2">
                    <MdMail size={22} className='text-customBlue4 mr-2' />
                    <h3 className="mr-4">{email}</h3>
                    <FaPhoneAlt size={22} className='text-customBlue4 mr-2' />
                    <h3>{phone}</h3>
                </div>
                <h2 className="mb-2 font-semibold">Fecha nacimiento: <span className="font-normal">{birthday}</span></h2>
                <div className="mt-auto">
                    <ButtonTwo label={'Accion especial'} />
                </div>
            </div>
        </div>
    )
}

export default DoctorDetail;

