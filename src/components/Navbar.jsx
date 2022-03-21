import { NavLink, useNavigate } from "react-router-dom"; 

function Navbar(props) {

  const navigate = useNavigate()

  const handleClick = () => {
    props.setIsLoggedIn(false)
    navigate("/")

  }

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

    <button onClick={ handleClick } >Log Out</button>

    </div>
  )
}

export default Navbar