import { ButtonTwo } from "../../components/Buttons/Buttons"
import doc from '../../images/docprofile.jpeg'

const DoctorDetail = () => {
    return(
       
            <div className="w-80 h-88 p-4 border rounded-lg shadow-md flex flex-col justify-between my-2 mx-2">
            <div >
                <img className="rounded-lg" src={doc} alt="Doctorimg" />
            </div>

            <h2 className="text-lg font-bold text-customBlue5">{'Pedro'}</h2>
            <ul className="p-1 space-y-1">
                <li className="font-semibold text-md text-customBlue4">Pediatria</li>

                {/* {specialties && specialties.map((specialty) => ( */}
                    {/* <li key={specialty.id}>{specialty.specialty_name}</li> */}
                {/* ))} */}
            </ul>

            <div className="mt-auto">
                <ButtonTwo label={'Agendar Cita'} />
            </div>
        </div>
    )
}

export default DoctorDetail;

