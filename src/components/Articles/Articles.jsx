import { Link } from "react-router-dom";
import { ButtonTwo } from "../Buttons/Buttons";


const Articles = () => {
    return ( 
        <div>
           
            <div className="flex flex-col my-4 items-center h-[40%] lg:flex lg:flex-row lg:justify-center">
            
            <div
            className="flex w-full flex-col rounded-md mb-4 bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-[97%] lg:max-w-[47%] lg:mx-4 lg:mb-0"
            style={{ backgroundImage: 'url("/src/images/articles1.jpeg")' }}
            >
                <div className="w-full">
                    <h4 className="mb-[14px] max-w-full text-xl font-bold text-customBlue5 md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[85%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                   Recuerda que la vacunación de los niños es muy importante
                    </h4>
                    <p className="mb-[40px] max-w-full text-base font-medium rounded-md bg-white bg-opacity-30 p-2 text-customBlue5 md:w-[64%] lg:w-[72%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
                    La vacunación en niños protege contra enfermedades graves, previene su propagación y garantiza un futuro más saludable y seguro.
                    </p>
                    <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                    <ButtonTwo label={'Conoce más'} />
                    <Link to='/book' className="text-customBlue5 font-medium text-lightPrimary hover:scale-105 2xl:ml-2">Agenda tu cita</Link>
                    </div>
                </div>
            </div>

            <div
            className="flex w-full flex-col rounded-md mb-4 bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] max-w-[97%] lg:max-w-[47%] lg:mx-4 lg:mb-0"
            style={{ backgroundImage: 'url("/src/images/articles2.jpg")' }}
            >
                <div className="w-full">
                    <h4 className="mb-[14px] max-w-full text-xl font-bold text-customBlue5 md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[85%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                    Estate atento a los signos del cáncer y hacer revisiones a tiempo
                    </h4>
                    <p className="mb-[40px] max-w-full text-base font-medium rounded-md bg-white bg-opacity-30 p-2 text-customBlue5 md:w-[64%] lg:w-[72%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
                    Es vital estar atento a los signos del cáncer, ya que la detección temprana aumenta las posibilidades de tratamiento efectivo. Consulta a partir de los 40 años.
                    </p>
                    <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                    <ButtonTwo label={'Conoce más'} />
                    <Link to='/book' className="text-customBlue5 font-medium text-lightPrimary hover:scale-105 2xl:ml-2">Agenda tu cita</Link>
                    </div>
                </div>
            </div>
              
            </div>
        </div>
     );
}
 
export default Articles;