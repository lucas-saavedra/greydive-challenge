import { NavLink } from "react-router-dom"
import EyeIcon from "../assets/EyeIcon.jsx"
import { nameList } from '../helpers/db.js'
import './TesterList.css'
const TesterList = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center tester__list align-items-center">
        <div className=" display-4">
          {
            nameList.map((item) => {
              return <NavLink
                to={item.name}
                key={item.id}
                className="nav-link text-white h3 text-capitalize"
              >
                Testeador {item.id} <EyeIcon />
              </NavLink>

            })
          }
        </div>

      </div>

    </div>
  )
}

export default TesterList