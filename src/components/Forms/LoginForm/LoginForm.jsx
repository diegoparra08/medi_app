import { ButtonTwo } from "../../Buttons/Buttons"
import { HomeButton, HomeButtonDark } from "../../Buttons/Buttons"

export const LoginForm = () => {
    return (
        <div className="flex flex-col justify-center lg:flex-row lg:items-center bg-customBlue5">

            <div className="hidden lg:w-1/2 lg:h-screen lg:bg-customBlue5 lg:flex lg:flex-col lg:items-center" >
                <div className="mb-auto mt-4">
                    <HomeButton />
                </div>
                <img className="w-64 h-64"
                    src="/src/images/docsLoginNB.png" alt="Doctors" />
            </div>

            <section className="bg-blue-50 lg:w-1/2 flex flex-col items-center">
                <div className="mt-8 mb-0 lg:hidden">
                    <HomeButtonDark />
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-customBlue5">
                        <img className="w-8 h-8 mr-2" src="/src/images/logo1NB.png" alt="logo" />
                        MediApp
                    </div>

                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-customBlue5 md:text-2xl">
                                Inicia Sesión en tu cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-customBlue5">Correo Electronico</label>
                                    <input type="email" name="email" id="email" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-customBlue5">Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-blue-50 border border-customBlue5 text-customBlue5 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
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
                                <ButtonTwo label={'Iniciar Sesión'} />

                                <p className="text-sm font-light text-customBlue5">
                                    ¿No estás registrado aún? <a href="#" className="font-medium text-customBlue4 hover:underline">Registrarte</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

