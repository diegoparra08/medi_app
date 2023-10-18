import { useNavigate } from "react-router-dom";

const HomeButton = () => {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/')
    }

    return ( 
        <div>
            <button onClick={handleHomeClick}>
                Home
            </button>
        </div>
     );
}
 
export default HomeButton;