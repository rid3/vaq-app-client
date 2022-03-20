import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signupMedicxService } from '../../services/auth.services';

function SignupMed() {

    const [ nombreCompleto, setNombreCompleto ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ especializacion, setEspecializacion ] = useState("")
    const [ capacitaciones, setCapacitaciones ] = useState("")

    const navigate = useNavigate();

    const [ errorMessage, setErrorMessage ] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
    
       const medicx = { nombreCompleto, email, password, especializacion, capacitaciones }
       //mandar al usuario medicx al BE para crear el registro
      try {
        await signupMedicxService(medicx)
        navigate("/login/medicx")

      } catch (err){ //los errores del BE (err)
        if(err.response && err.response.status === 400) {
          setErrorMessage(err.response.data.errorMessage)
         } else {
          navigate("/error")
         }
        }
   } 

  return (
    <div>
        <h1>Sign Up como Medicx</h1>

        <form onSubmit={ handleSubmit } >

            <br />
            <br />
            <label htmlFor="nombreCompleto">Nombre Completo: </label>
            <input 
            type="text" 
            name="nombreCompleto" 
            value={nombreCompleto} 
            onChange= { (event) => setNombreCompleto (event.target.value) }
            />

            <br />
            <br />
            <label htmlFor="email">Email: </label>
            <input 
            type="email" 
            name="email" 
            value={email} 
            onChange= { (event) => setEmail (event.target.value) }
            />

            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input 
            type="password" 
            name="password" 
            value={password} 
            onChange= { (event) => setPassword (event.target.value) }
            />     

            <br />
            <br />
            <label htmlFor="especialilzacion">Especialización: </label>
            <input 
            type="text" 
            name="especializacion" 
            value={especializacion} 
            onChange= { (event) => setEspecializacion (event.target.value) }
            />
            
            <br />
            <br />
            <label htmlFor="capacitaciones">Capacitaciones: </label>
            <input 
            type="text" 
            name="capacitaciones" 
            value={capacitaciones} 
            onChange= { (event) => setCapacitaciones (event.target.value) }
            />
            <br />
            <br />
            <br />
            <button>Sing Up</button>
            <br />
            <br />

        </form>

        <p>{errorMessage}</p>

    </div>
  )
}

export default SignupMed;