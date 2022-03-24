import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singupClienteService } from "../../services/auth.services";


function SignupCli() {

    const [ nombre, setNombre ] = useState("")
    const [ emailCliente, setEmailCliente ] = useState("")
    const [ pronombres, setPronombres ] = useState ("")
    const [ passwordCliente, setPasswordCliente ] = useState("")

    const [ errorMessage, setErrorMessage ] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const cliente = { nombre, emailCliente, pronombres, passwordCliente }

        try {
            await singupClienteService(cliente)
            navigate("/login/cliente")
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setErrorMessage(err.response.data.errorMessage)
            } else {
                navigate("/error")
            }
        } 
    }

  return (
    <div>
    <h1>Sign Up como Paciente</h1>

    <form onSubmit={ handleSubmit }>
        
        <label htmlFor="nombre">Nombre: </label>
        <input 
        type="text" 
        name="nombre" 
        value={nombre}
        onChange= { (event) => setNombre (event.target.value) }
         />

         <br />
         <br />

        <label htmlFor="pronombres">Pronombres: </label>
        <input 
        type="text" 
        name="pronombres" 
        value={pronombres}
        onChange= { (event) => setPronombres (event.target.value) }
         />
           <br />
         <br />

        <label htmlFor="emailCliente">Email: </label>
        <input 
        type="text" 
        name="emailCliente" 
        value={emailCliente}
        onChange= { (event) => setEmailCliente (event.target.value) }
         />
           <br />
         <br />

        <label htmlFor="passwordCliente">Password: </label>
        <input 
        type="password" 
        name="passwordCliente" 
        value={passwordCliente}
        onChange= { (event) => setPasswordCliente (event.target.value) }
         /> 
         <p>La contraseña debe contener aunque sea: una letra minúscula, una mayúscula, un carácter y un número.</p>

<br />
         <br />

         <button>Sign Up</button>

    </form>
    <p>{errorMessage}</p>
    
    
    </div>
  )
}

export default SignupCli