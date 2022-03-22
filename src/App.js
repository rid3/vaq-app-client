import './App.css';
import { Routes, Route } from "react-router-dom";
//import routes:
import Home from "../src/public.pages/Home"
import Navbar from './components/Navbar';
import SignUp from './public.pages/auth/SignUp';
import LoginMed from './public.pages/auth/LoginMed';
import LoginCli from "./public.pages/auth/LoginCli"
import Error from "./public.pages/misfuctions/Error";
import NotFound from "./public.pages/misfuctions/Notfound"
import SignupMed from './public.pages/auth/SignupMed';
import SignupCli from './public.pages/auth/SignupCli';
import PerfilMedicx from './pages.medicx/PerfilMedicx';
import PerfilCliente from './pages.cliente/PerfilCliente';
import PerfilesMed from './public.pages/PerfilesMed';
import Details from "./public.pages/Details"
import EditarPerfilMed from './pages.medicx/EditarPerfilMed';
import EditarPerfilCli from "./pages.cliente/EditarPerfilCli"

import { useEffect, useState } from "react"
import { verifyService } from './services/auth.services';



function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState (false)

  // const [ isMedicx, setIsMedicx ] = useState(false)
  // const [ isCliente, setIsCliente ] = useState(false)

  useEffect(() => {
    verifyUser()
  },[])
  
  const verifyUser = async () => {
    //conectar con el server y validar el token
    try {
      await verifyService()
      setIsLoggedIn(true)
      // if(props.role === "medicx") {
      //   setIsMedicx(true)
      // } else if (props.role === "cliente") {
      //   setIsCliente(true)
      // }
      // if (props.authToken.data.role === "medicx") {
      //   setIsMedicx(true)
      // } else if (props.authToken.data.role === "cliente") {
      //   setIsCliente(true)
      // }
    } catch (err) {
      setIsLoggedIn(false)
      // setIsCliente(false)
      // setIsMedicx(false)
    }
    
  }

  // useEffect(() => {
  //   verifyCliente()
  // },[])

  // const verifyCliente = async () => {
  //   try {
  //     await isClienteService()
  //     setIsCliente(true)
  //   } catch (err) {
  //     setIsCliente(false)
  //   }
  // } 
  // MÁS PRUEBAS PARA ISCLIENT ISMEDICX CON AUTHTOKEN - algo con el localStorage?


  return (
    <div className="App">

    <Navbar 
    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
    //  isCliente={isCliente} setIsCliente = {setIsCliente}
    // isMedicx={isMedicx} setIsMedicx = {setIsMedicx}
    />

    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path="/signup"  element = { <SignUp /> } /> 
    <Route path="/signup/medicx" element= { <SignupMed/> } />
    <Route path="/signup/cliente"  element={ <SignupCli /> }  />

    <Route path="/perfilesmed" element = { <PerfilesMed /> } />
    <Route path="/:id/details" element = { <Details /> } />

    <Route path="/login/medicx"  element = { <LoginMed setIsLoggedIn={setIsLoggedIn} /> } />
    <Route path="/login/cliente" element = { <LoginCli setIsLoggedIn={setIsLoggedIn} /> } />

    <Route path="/perfilmedicx" element = {<PerfilMedicx /> } />
    <Route path="/:id/editperfilmed" element = { <EditarPerfilMed /> } />

    <Route path="/perfilcliente" element = {<PerfilCliente /> } />
    <Route path="/:id/editperfilcli" element = { <EditarPerfilCli /> }/>

    <Route path="/error"  element = { <Error/> } />
    <Route path="*"    element = { <NotFound/> } />


    </Routes>
     
    </div>
  );
}

export default App;
