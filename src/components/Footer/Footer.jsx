import { Link } from "react-router-dom"
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai"
import logo from '../../images/logo1NB.png'

const Footer = () => {
    return(
        <footer className="bg-customBlue5 py-6 px-10 flex flex-col mt-8">
            <div className="grid grid-cols-4 text-white mt-5">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-20 h-20" />
                    <span className='text-2xl'>MediApp</span>
                </div>
                <div className="text-center flex flex-col">
                    <p className="mb-2">
                        <Link to='/book' className="hover:text-customBlue3 font-bold">Agenda Tu Cita</Link>
                    </p>
                    <p>
                        <Link to='/book' className=" hover:text-customBlue3 font-bold">Agenda Tu Cita</Link>
                    </p>
                </div>
                <div className="text-center flex flex-col">
                    <p className="mb-2">
                        <Link to='/about' className=" hover:text-customBlue3 font-bold">Sobre Nosotros</Link>
                    </p>
                    <p>
                        <Link to='/book' className="hover:text-customBlue3 font-bold">Servicios</Link>
                    </p>
                </div>
                <div className="text-center flex flex-col">
                    <p className="mb-2">
                        <Link to='/faqs' className="hover:text-customBlue3 font-bold">FAQS</Link>
                    </p>
                    <p>
                        <Link to='/contact' className="hover:text-customBlue3 font-bold">Contactanos</Link>
                    </p>
                </div>
            </div>

            <hr className="mx-14 my-7"/>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 items-center gap-1 w-32">
                    <Link to='/contact' className="">
                        <AiOutlineFacebook size={30} color="white"/>
                    </Link>
                    <Link to='/contact'>
                        <AiOutlineInstagram size={30} color="white"/>
                    </Link>
                    <Link to='/contact'>
                        <AiOutlineMail size={30} color="white"/>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;