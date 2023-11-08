import { NavLink } from "react-router-dom"

function NavBar(){

    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/juicepage">Juices</NavLink>
            <NavLink to="/storepage">Stores</NavLink>
        </div>
        )
}

export default NavBar