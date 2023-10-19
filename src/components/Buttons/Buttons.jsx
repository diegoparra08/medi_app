
import PropTypes from 'prop-types';

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
 
ButtonOne.propTypes = {    //Es para verificar el tipo de props que se pasan al componente, se instaló PropTypes
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  };
