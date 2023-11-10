import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ButtonTwo } from "../../Buttons/Buttons";
import { specialtyActions } from "../../../redux/actions/rootActions";
const { getAllSpecialties } = specialtyActions;


export const BookAppForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSpecialties())
    }, [])

    const { specialties } = useSelector(state => state.specialties);

    return (

        <div className="h-screen bg-blue-50 flex flex-col justify-center">

            <div className="flex justify-center">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-2 md:space-y-0 sm:p-8">
                        <h2 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl">
                            Agenda Tu Cita
                        </h2>
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-customBlue5">Especialidad</label>

                                <select type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" >

                                <option value="">Seleccione</option>
                                {specialties.map((specialty) =>
                                    <option key={specialty.id}>{specialty.specialty_name}</option>)
                                }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-customBlue5">Nombre del especialista</label>
                                <select type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" >

                                    <option value="">Juanito dominguez</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-2 w-full">
                                <div>
                                    <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-customBlue5">Fecha</label>
                                    <input type="date" name="birthday" id="birthday" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-customBlue5">Hora</label>

                                    <select type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" >

                                        <option value="">12:00</option>

                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row w-full space-x-2">
                                <ButtonTwo label={'Reservar Cita'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

