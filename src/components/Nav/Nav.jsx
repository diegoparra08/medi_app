import { Link } from "react-router-dom"


export const Nav = () => {
    return(
        <div>
            <nav>

                <h1>Aca la nav</h1>
                <Link to='/book'>Agenda Tu Cita</Link>
                <Link to='/specialties'>Especialidades</Link>
                <Link to='/about'>Acerca de Nosotros</Link>
                <Link to='/login'>Log In</Link>
                </nav>
        </div>
    )
}

