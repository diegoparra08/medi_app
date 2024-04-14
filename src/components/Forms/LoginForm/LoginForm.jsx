import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

import { ButtonOne, ButtonTwo } from "../../Buttons/Buttons"
import { HomeButton, HomeButtonDark } from "../../Buttons/Buttons"
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export const LoginForm = () => {

    const [form, setForm] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleRegister, setVisibleRegister] = useState(false);

    const showPassword = (e) => {
        e.preventDefault();
        setVisible(!visible)
    }
    const showPasswordRegister = (e) => {
        e.preventDefault();
        setVisibleRegister(!visibleRegister)
    }


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const onSubmit = async (data) => {

        console.log(data);

        try {
            // const endpoint = 'https://medi-app-server.vercel.app/user/signup'
            const endpoint = "http://localhost:3001/user/signup"

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

    const onSubmitLoginForm = async (data) => {
     
        // const endpoint = 'https://medi-app-server.vercel.app/user/login'
        const endpoint = "http://localhost:3001/user/login"

        const response = await axios.post(endpoint, data);

        if (response.status === 403) {
            alert("Contraseña incorrecta")
        } else if (response.status === 200) {
            console.log("Inicio de Sesión exitoso")
        }
    }
    

    return (

        <div className="flex flex-col justify-center lg:flex-row lg:items-center bg-customBlue5">

            <div className="hidden lg:w-1/2 lg:h-screen lg:bg-customBlue5 lg:flex lg:flex-col lg:items-center" >
                <div className="mb-auto mt-4 w-full flex flex-row justify-left">
                    <HomeButton />
                </div>
                <img className="w-64 h-64"
                    src="/src/images/docsLoginNB.png" alt="Doctors" />
            </div>

            <section className="bg-blue-50 lg:w-1/2 flex flex-col justify-left">
                <div className="mt-8 mb-0 lg:hidden flex flex-row items-start">
                    <HomeButtonDark />
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-customBlue5">
                        <img className="w-8 h-8 mr-2" src="/src/images/logo1NB.png" alt="logo" />
                        MediApp
                    </div>
                    {form ? (<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-2 md:space-y-0 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl">
                                Ingresa a tu cuenta
                            </h1>
                            <form className="space-y-4" action="#" onSubmit={handleSubmit(onSubmitLoginForm)}>
                                <div>
                                    <label htmlFor="loginEmail" className="block mb-2 text-sm font-medium text-customBlue5">Correo Electronico</label>
                                    <input type="email" name="loginEmail" id="loginEmail" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"
                                        {
                                        ...register("loginEmail",
                                            { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                                    />

                                    {errors.loginEmail?.type === "required" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Ingrese su correo electronico
                                        </span>)}
                                    {errors.loginEmail?.type === "pattern" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Ingrese un correo válido
                                        </span>)}
                                </div>
                                <div>
                                    <label htmlFor="loginPassword" className="block mb-2 text-sm font-medium text-customBlue5">Contraseña</label>
                                    <div className="flex items-center space-x-1">
                                        <input
                                            type={visible ? "text" : "password"} name="loginPassword" id="loginPassword" placeholder="••••••••"
                                            className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            {...register("loginPassword", { required: true, pattern: /^.{8,}$/ })}
                                        />


                                        <span className="text-customBlue5"
                                            onClick={(e) => showPassword(e)}>{visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                                    </div>
                                    {errors.loginPassword?.type === "required" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Debe crear una contraseña
                                        </span>)}
                                    {errors.loginPassword?.type === "pattern" && (
                                        <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1'>
                                            *Debe tener al menos 8 caracteres
                                        </span>)}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">

                                        </div>
                                        <div className="ml-3 text-sm">

                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-customBlue5 hover:underline">¿Olvidaste tu contraseña?</a>
                                </div>
                                <div className="flex flex-row w-full space-x-2">
                                    <ButtonTwo label={'Iniciar Sesión'} />
                                    <h2>O</h2>
                                    <button className="flex items-center border border-gray-400 rounded-md bg-white px-1">
                                        <FcGoogle />
                                        <p className="text-sm ml-1">Iniciar Sesión con Google</p>
                                    </button>
                                </div>

                                <p className="text-sm font-light text-customBlue5">
                                    ¿No estás registrado aún? <a href="#" onClick={() => setForm(false)} className="font-medium text-customBlue4 hover:underline">Registrarte</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    ) : (

                        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl">
                                    Crea tu cuenta
                                </h1>
                                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="relative">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-customBlue5">Nombre</label>
                                        <input type="text" name="name" id="name" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Pedro Pérez"
                                            {...register("name",
                                                {
                                                    required: true, minLength: 2,
                                                    pattern: /^[^0-9]*$/
                                                })}
                                        />
                                        {errors.name?.type === "required" && (
                                            <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16 ml-1 '>
                                                *Ingrese su nombre
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
                                    </div>
                                    <div className="relative">
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
                                                *Ingrese un correo válido
                                            </span>)}
                                    </div>
                                    <div>

                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-customBlue5">Contraseña</label>
                                        <div className="flex items-center space-x-1">
                                            <input type={visibleRegister ? "text" : "password"} name="password" id="password" placeholder="8 caracteres minimo" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                {...register("password",
                                                    { required: true, pattern: /^.{8,}$/ })}
                                            />
                                            <span className="text-customBlue5"
                                                onClick={(e) => showPasswordRegister(e)}>{visibleRegister ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
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
                                    <div className="grid grid-cols-2 items-start gap-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-customBlue5">Fecha de Nacimiento</label>
                                            <input type="date" name="birthday" id="birthday" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                {...register("birthday",
                                                    { required: true })}
                                            />
                                            {errors.birthday?.type === "required" && (
                                                <span className='text-customBlue5 text-xs sm:text-sm mt-12 sm:mt-16  ml-1'>
                                                    *Ingrese su fecha de nacimiento
                                                </span>)}
                                        </div>
                                        <div className="relative">
                                            <label htmlFor="phone" className="block mb-2 mt-0 last:text-sm font-medium text-customBlue5">Teléfono</label>
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

                                    <ButtonTwo label={'Registrarse'} />

                                    <p className="text-sm font-light text-customBlue5">
                                        ¿Ya tienes una cuenta? <a href="#" onClick={() => setForm(true)} className="font-medium text-customBlue4 hover:underline">Iniciar Sesión</a>
                                    </p>
                                </form>
                            </div>
                        </div>

                    )}
                </div>
            </section>
        </div>
    )
}

