import { NavLink } from "react-router-dom"


const BackButton = ({ className = "btn btn-primary" }) => {
    return (
        <NavLink to="/" className={className}>Volver</NavLink>
    )
}

export default BackButton