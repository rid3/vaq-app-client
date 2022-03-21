import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginClienteService } from '../../services/auth.services';

function Login(props) {

  const [ emailCliente, setEmailCliente ] = useState("");
  const [ passwordCliente, setPasswordCliente ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const user = { emailCliente, passwordCliente }
    try {

      //conexión al server para hacer logIn
      const response = await loginClienteService(user)
      const { authToken } = response.data
      console.log("authToken", authToken)

      //recibir el Token y guardarlo en localStorage
      localStorage.setItem ("authToken", authToken)
      props.setIsLoggedIn(true)

      navigate("/perfilcliente")

    } catch(err){
      if(err?.response?.status === 400) {
        setErrorMessage(err.response.data.errorMessage)
      } else if (err?.response?.status === 401)
      {
        setErrorMessage(err.response.data.errorMessage)
      }  else {
        navigate("/error")
      }

    }

  }


  return (
    <div>
        <h1>Log In Cliente</h1>

        <form onSubmit={ handleSubmit }>
            <br />
            <br />
            <label htmlFor="emailCliente">Email: </label>
            <input 
            type="email" 
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

            <br />
            <br />
            <br />

            <button>Log In</button>
            <br />
            <br />

        </form>

        <p>{errorMessage}</p>


    </div>
  )
}

export default Login