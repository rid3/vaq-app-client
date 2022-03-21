import { NavLink, useNavigate } from "react-router-dom"; 

function Navbar(props) {

  const { isLoggedIn, setIsLoggedIn } = props
  // const { isMedicx, setIsMedicx } = props
  // const { isCliente, setIsCliente } = props

  const navigate = useNavigate()

  const handleClick = () => {
    setIsLoggedIn(false)
    // setIsCliente(false)
    // setIsMedicx(false)
    localStorage.removeItem("authToken")
    navigate("/")

  }

  return (
    <div>

    <NavLink to="/"> Home </NavLink>
    
    <NavLink to ="/perfilesmed"> Perfiles Medicxs </NavLink>
    
    { !isLoggedIn && <NavLink to="/signup"> Sign Up </NavLink> }

    { !isLoggedIn && <NavLink to ="/login/medicx"> Log In Medicx </NavLink> }

    { !isLoggedIn && <NavLink to ="/login/cliente"> Log In Cliente </NavLink> }

    {/* { isCliente && <NavLink to="/perfilcliente" > Perfil PrivCli </NavLink> }

    { isMedicx && <NavLink to="/perfilmedicx" > Perfil PrivMed</NavLink> } */}
    

    { isLoggedIn && <button onClick={ handleClick } >Log Out</button> }

    </div>
  )
}

export default Navbar