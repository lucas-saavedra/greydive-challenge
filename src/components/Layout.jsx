import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    return (
        <>
            <nav className="py-3" style={{ backgroundColor: '#7a93ac' }}>
                <Link className="text-decoration-none text-white rounded p-3 h4" to="/">Inicio</Link>
            </nav>
            <div className="container">
                {children}
            </div>

        </>

    )
}

export default Layout