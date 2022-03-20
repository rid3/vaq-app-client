import { NavLink } from "react-router-dom"; 

function Navbar() {
  return (
    <div>

    <NavLink to="/">
        Home
    </NavLink>

    <NavLink to="/signup">
        Sign Up
    </NavLink>

    <NavLink to ="/login/medicx">
      Log In Medicx
    </NavLink>

    <NavLink to ="/login/cliente">
      Log In Cliente
    </NavLink>

    <NavLink to ="/perfilesmed">
      Perfiles Medicxs
    </NavLink>

    </div>
  )
}

export default Navbar