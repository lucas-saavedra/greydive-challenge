import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className=" py-3" style={{ backgroundColor: '#7a93ac' }}>
            <Link className="text-decoration-none text-white rounded p-3 h4 text-center" to="/">Inicio</Link>
        </nav>
    )
}
export default Navbar