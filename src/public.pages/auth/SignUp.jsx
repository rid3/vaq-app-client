import { NavLink } from "react-router-dom"

function Signup() {
  return (
    <div>

<h1>SIGN UP </h1>

<NavLink to="/signup/medicx" >Crear cuenta como Médicx</NavLink>
<br />
<br />
<br />

<NavLink to="/signup/cliente" >Crear cuenta como Cliente </NavLink>

    </div>
  )
}

export default Signup