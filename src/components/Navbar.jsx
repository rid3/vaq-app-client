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

    <NavLink to ="/login">
      Log In
    </NavLink>

    </div>
  )
}

export default Navbar