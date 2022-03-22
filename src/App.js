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

  const [ isUserRole, setUserRole ] = useState(null)

  const [ isCliente, setIsCliente ] = useState(false)

  const [ isMedicx, setIsMedicx ] = useState(false)

  const [ userId, setUserId] = useState(null)
  

  useEffect(() => {
    verifyUser()
  },[])
  
  const verifyUser = async () => {
    //conectar con el server y validar el token
    try {
     const response = await verifyService()
      setIsLoggedIn(true)
      setUserId(response.data.userId)
      setUserRole(response.data.userRole) 
      if (response.data.userRole === "cliente") {
        setIsCliente(true)
      }  else if (response.data.userRole === "medicx" ) {
        setIsMedicx(true)
      }
    } catch (err) {
      setIsLoggedIn(false)
    } 
  }


  return (
    <div className="App">

    <Navbar 
    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isCliente={isCliente} setIsCliente={setIsCliente} isMedicx={isMedicx} setIsMedicx={setIsMedicx}
    />

    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path="/signup"  element = { <SignUp /> } /> 
    <Route path="/signup/medicx" element= { <SignupMed/> } />
    <Route path="/signup/cliente"  element={ <SignupCli /> }  />

    <Route path="/perfilesmed" element = { <PerfilesMed /> } />
    <Route path="/:id/details" element = { <Details isCliente={isCliente} setIsCliente={setIsCliente}/> } />

    <Route path="/login/medicx"  element = { <LoginMed setIsLoggedIn={setIsLoggedIn} isUserRole={isUserRole} verifyUser = {verifyUser}/> } />
    <Route path="/login/cliente" element = { <LoginCli setIsLoggedIn={setIsLoggedIn} isUserRole={isUserRole} verifyUser = {verifyUser} /> } />

    <Route path="/perfilmedicx" element = {<PerfilMedicx userId={userId}/> } />
    <Route path="/perfilmedicx/edit/:id" element = { <EditarPerfilMed /> } />

    <Route path="/perfilcliente" element = {<PerfilCliente userId={userId} /> } />
    <Route path="/perfilcliente/edit/:id" element = { <EditarPerfilCli /> }/>

    <Route path="/error"  element = { <Error/> } />
    <Route path="*"    element = { <NotFound/> } />


    </Routes>
     
    </div>
  );
}

export default App;
