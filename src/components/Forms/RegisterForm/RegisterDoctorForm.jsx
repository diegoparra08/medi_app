import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ButtonTwo } from "../../Buttons/Buttons";
import { HomeButton } from "../../Buttons/Buttons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export const RegisterDoctorForm = () => {

    const [visible, setVisible] = useState(false);

    const showPassword = (e) => {
        e.preventDefault();
        setVisible(!visible)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {

        console.log(data);

        try {
            const endpoint = 'http://localhost:3001/doctor/create'

            const response = await axios.post(endpoint, data);

            if (response.status === 400) {
                alert('El usuario ya existe')
            } else if (response.status === 200) {
                console.log('Se creo el usuario con exito')
            }
        } catch (error) {
            throw new Error('Algo salió mal: ' + error.message)
        }
    }



    return (
        <div>
            <div className="w-full bg-white rounded-lg shadow md:mt-0  xl:p-0">
                <div className="p-6 space-y-4 md:space-y-0 sm:p-8 md:justify-center">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl">
                        Registrar nuevo profesional
                    </h1>
                    <form className="space-y-4 lg:flex lg:flex-row lg:justify-center lg:space-x-10 lg:space-y-0 lg:pt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:w-1/2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-customBlue5">Nombre</label>
                                <input type="text" name="name" id="name" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Pedro Pérez"
                                    {...register("name",
                                        {
                                            required: true, minLength: 2,
                                            pattern: /^[^0-9]*$/
                                        })}
                                />

                            </div>
                            {errors.name?.type === "required" && (
                                <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1 '>
                                    *Ingrese el nombre del profesional
                                </span>
                            )}

                            {errors.name?.type === "minLength" && (
                                <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                    *Ingrese al menos 2 caracteres
                                </span>
                            )}
                            {errors.name?.type === "pattern" && (
                                <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1' >
                                    *Ingrese solo letras
                                </span>
                            )}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-customBlue5">Correo Electronico</label>
                                <input type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"
                                    {...register("email",
                                        { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                                />
                                {errors.email?.type === "required" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Ingrese su correo electronico
                                    </span>)}
                                {errors.email?.type === "pattern" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Formato de correo no válido
                                    </span>)}
                            </div>
                            <div>
                                <label htmlFor="specialty" className="block mb-2 text-sm font-medium text-customBlue5">Especialidad(es)</label>
                                <select name="specialty" id="specialty" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    {...register("specialty",
                                        { required: true })}
                                >
                                    <option value="">Seleccione una especialidad</option>
                                    <option value="Cardiología">Cardiología</option>
                                    <option value="Ortopedía">Ortopedía</option>

                                    {/* {Specialties.map((specialty) => 
                                    <option key={specialty.id}>{specialty.specialty_name}</option>)
                                    } */}

                                </select>

                                {errors.specialty?.type === "required" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Debe ingresar al menos una especialidad
                                    </span>)}

                            </div>
                            <div>
                                <label htmlFor="education" className="block mb-2 text-sm font-medium text-customBlue5">Educación (opcional)</label>
                                <input name="education" id="education" placeholder="En un parrafo describa la educación" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    {...register("education",
                                        {
                                            required: false, minLength: 2,
                                            pattern: /^[^0-9]*$/
                                        })}
                                />


                                {errors.education?.type === "minLength" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Ingrese al menos 2 caracteres
                                    </span>
                                )}
                                {errors.education?.type === "pattern" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1' >
                                        *Ingrese solo letras
                                    </span>
                                )}

                            </div>

                        </div>
                        <div className="lg:w-1/2">


                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-customBlue5">Contraseña</label>
                                <div className="flex items-center space-x-1">
                                    <input type={visible ? "text" : "password"} name="password" id="password" placeholder="8 caracteres minimo" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        {...register("password",
                                            { required: true, pattern: /^.{8,}$/ })}
                                    />
                                    <span className="text-customBlue5"
                                        onClick={(e) => showPassword(e)}>{visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                                </div>
                                {errors.password?.type === "required" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Debe crear una contraseña
                                    </span>)}
                                {errors.password?.type === "pattern" && (
                                    <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                        *Debe tener al menos 8 caracteres
                                    </span>)}
                            </div>
                            <div className="grid grid-cols-2 items-center gap-2 w-full">
                                <div>
                                    <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-customBlue5">Fecha de Nacimiento</label>
                                    <input type="date" name="birthday" id="birthday" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        {...register("birthday",
                                            { required: true })}
                                    />
                                    {errors.birthday?.type === "required" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Ingrese su fecha de nacimiento
                                        </span>)}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-customBlue5">Teléfono</label>
                                    <input type="tel" name="phone" id="phone" placeholder="+57 3001234567" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        {...register("phone",
                                            { required: true, pattern: /^[0-9]+$/ })}
                                    />
                                    {errors.phone?.type === "required" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Ingrese su número de celular
                                        </span>)}
                                    {errors.phone?.type === "pattern" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Ingrese solo números
                                        </span>)}


                                </div>
                            </div>
                            <div className="mt-4">

                                <ButtonTwo label={'Registrar Doctor'} />

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterDoctorForm;




