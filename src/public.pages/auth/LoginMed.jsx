import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginMedicxService, verifyService } from '../../services/auth.services';

function Login(props) {

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
      //console.log("authToken", authToken)

      //recibir el Token y guardarlo en localStorage
      localStorage.setItem ("authToken", authToken)
      props.setIsLoggedIn(true)

      const verifyUser = await verifyService()
      if (verifyUser.data.userRole === "medicx") {
        navigate("/")
      } else {
        navigate("/")
      }


    } catch(err){
      if(err?.response?.status === 400) {
        //console.log(errorMessage)
        setErrorMessage(err.response.data.errorMessage)
      } else if (err?.response?.status === 401)
      {
        setErrorMessage(err.response.data.errorMessage)
      } 
      else {
        navigate("/error")
      }

    }

  }


  return (
    <div>
        <h1>Log In Medicx</h1>

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