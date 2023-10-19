import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';
import { MdHome } from "react-icons/md"

export const ButtonOne = (props) => {

    return (

        <div>

            <button className='bg-white rounded-md shadow-lg py-1 px-2 text-customBlue5 font-bold hover:scale-105 hover:bg-customBlue3 hover:text-white'
                onClick={props.onClick}> {props.label} </button>

        </div>

    );
}

export const ButtonTwo = (props) => {

    return (

        <div>

            <button className='bg-customBlue5 rounded-md shadow-lg py-1 px-2 text-white font-bold hover:scale-105 hover:bg-customBlue3 hover:text-white'
                onClick={props.onClick}> {props.label} </button>

        </div>

    );
}

export const HomeButton = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <div>
            <button className='flex flex-col mx-2 my-2 justify-center items-center bg-customBlue5 rounded-sm shadow-lg py-2 px-3 text-white font-bold hover:scale-105 hover:bg-customBlue3 hover:text-white text-3xl'
                onClick={handleHomeClick}>
                <MdHome />
        
            </button>
        </div>
    );
}


ButtonOne.propTypes = {    //Es para verificar el tipo de props que se pasan al componente, se instaló PropTypes
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};
