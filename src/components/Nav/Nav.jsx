import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

import { ButtonOne } from "../Buttons/Buttons";

import logo from '../../images/logo1NB.png'


export const Nav = () => {

    const navigate = useNavigate();

    const [menuHidden, setMenuHidden] = useState(true)

    const toggleMenu = () => {
        setMenuHidden(!menuHidden);
    };

    const handleHomeClick = () => {
        navigate('/')
    }

    const handleLogInClick = () => {
        navigate('/login')
    }


    return (
        <div>
            <nav className="bg-customBlue5 px-5 md:px-10 flex justify-between items-center md:justify-evenly flex-wrap relative">
                <div className="flex items-center">
                <img src={logo} alt="logo Med center" className="w-20 h-20" onClick={handleHomeClick} />
                <h1 className="text-white text-2xl"><strong>M</strong>ediApp</h1>
                </div>
                <div className="block mr-2 md:hidden">
                    <button onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-customBlue border-customBlue">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className={`${menuHidden ? 'hidden' : 'flex flex-col items-center'} w-full  items-center flex-grow mb-4 md:mb-0 md:flex md:flex-row md:justify-evenly md:flex-wrap md:w-auto`}>

                    <Link to='/book' className="text-white hover:text-customBlue3 font-bold">Agenda Tu Cita</Link>
                    <Link to='/specialties' className="text-white hover:text-customBlue3 font-bold">Especialidades</Link>
                    <Link to='/about' className="text-white hover:text-customBlue3 font-bold">Acerca de Nosotros</Link>
                    <ButtonOne label={'Iniciar Sesión'} onClick={handleLogInClick} />
                </div>
            </nav>
        </div>
    )
}

