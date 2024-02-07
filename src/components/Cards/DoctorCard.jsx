
import { useState } from "react";
import { ButtonTwo } from "../Buttons/Buttons";
import doc from '../../images/docprofile.jpeg'

const DoctorCard = ({ name, specialties }) => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const showModalBookAppointment = () => {
        setButtonClicked(true)
    };

    const closeModalBookAppointment = () => {
        setButtonClicked(false)
    };

    return (
        <div>
            <div className="w-80 h-88 p-4 border rounded-lg shadow-md flex flex-col justify-between my-2 mx-2">
                <div >
                    <img className="rounded-lg" src={doc} alt="Doctorimg" />
                </div>

                <h2 className="text-lg font-bold text-customBlue5">{name}</h2>
                <ul className="p-1 space-y-1">
                    {specialties && specialties.map((specialty) => (
                        <li className="font-semibold text-md text-customBlue4"
                            key={specialty.id}>{specialty.specialty_name}</li>
                    ))}
                </ul>

                <div className="mt-auto">
                    <ButtonTwo
                        label={'Agendar Cita'}
                        onClick={() => showModalBookAppointment()}
                    />
                </div>

            </div>
            {buttonClicked && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <form className="space-y-4 bg-slate-100 rounded-lg h-3/5 w-4/5 md:h-3/5 lg:w-3/5 px-3" action="#">
                        <div>
                            <label htmlFor="email" className="block mt-10 lg:mt-4 mb-1 text-md font-bold text-customBlue5">Especialidad</label>
                            <select name="especialtyProvisional" id="" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] md:w-3/4 lg:w-3/5 p-2.5">Aca ira la especialidad</select>

                        </div>
                        <div>
                            <label htmlFor="password" className="block mt-4 mb-1 text-md font-bold text-customBlue5">Nombre del especialista</label>
                            <select name="nameSpecialistProvisional" id="" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] md:w-3/4 lg:w-3/5 p-2.5">Aca ira el nombre del doctor</select>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-2 w-full">
                            <div>
                                <label htmlFor="birthday" className="block mb-1 text-md font-bold text-customBlue5">Fecha</label>
                                <input type="date" name="birthday" id="birthday" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-md font-bold text-customBlue5">Hora</label>

                                <select type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" >

                                    <option value="">12:00</option>

                                </select>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <div>
                                <ButtonTwo label={'Confirmar'} />
                            </div>
                            <div >
                                <ButtonTwo label={'Cancelar'} onClick={() => closeModalBookAppointment()} />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>


    );
}

export default DoctorCard;