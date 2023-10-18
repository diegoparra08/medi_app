import { useState } from "react";
import { Link } from "react-router-dom"

import logo from '../../images/logo1NB.png'


export const Nav = () => {

    const [menuHidden, setMenuHidden] = useState(true)

    const toggleMenu = () => {
        setMenuHidden(!menuHidden);
    };

    return (
        <div>
            <nav className="bg-customBlue5 px-5 md:px-10 flex justify-between items-center md:justify-evenly flex-wrap relative">
            <img src={logo} alt="logo Med center" className="w-24 h-24 md:w-28 md:h-28" />

                <div className="block mr-2 md:hidden">
                    <button onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-customBlue border-customBlue">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className={`${menuHidden ? 'hidden' : 'flex flex-col items-center'} w-full  items-center flex-grow   md:flex md:flex-row md:justify-evenly md:flex-wrap md:w-auto`}>
            
                <Link to='/book' className="text-customBlue">Agenda Tu Cita</Link>
                <Link to='/specialties' className="text-customBlue">Especialidades</Link>
                <Link to='/about' className="text-customBlue">Acerca de Nosotros</Link>
                <Link to='/login' className="text-customBlue">Log In</Link>

                </div>
            </nav>
        </div>
    )
}

