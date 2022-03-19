import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginMedicxService } from '../../services/auth.services';

function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    const user = { email, password }
    try {

      //conexión al server para hacer logIn
      const response = await loginMedicxService(user)
      const { authToken } = response.data

      //recibir el Token y guardarlo en localStorage
      localStorage.setItem ("authToken", authToken)

      navigate("/")

    } catch(err){
      if(err?.response?.status === 400) {
        setErrorMessage(err.message.data.errorMessage)
      } else {
        navigate("/error")
      }

    }

  }


  return (
    <div>
        <h1>LogIn</h1>

        <form onSubmit={ handleSubmit }>
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