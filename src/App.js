import './App.css';
import { Routes, Route } from "react-router-dom";
//import routes:
import Home from "../src/public.pages/Home"
import Navbar from './components/Navbar';
import SignUp from './public.pages/auth/SignUp';
import Login from './public.pages/auth/Login';
import Error from "./public.pages/misfuctions/Error";
import NotFound from "./public.pages/misfuctions/Notfound"
import SignupMed from './public.pages/auth/SignupMed';
import SignupCli from './public.pages/auth/SignupCli';
import PerfilMedicx from './pages.medicx/PerfilMedicx';
import PerfilCliente from './pages.cliente/PerfilCliente';


function App() {
  return (
    <div className="App">

    <Navbar />

    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path="/signup"  element = { <SignUp /> } /> 
    <Route path="/signup/medicx" element= { <SignupMed/> } />
    <Route path="/signup/cliente"  element={ <SignupCli /> }  />

    <Route path="/login"  element = { <Login /> } />

    <Route path="/perfilmedicx" element = {<PerfilMedicx /> } />
    <Route path="/perfilcliente" element = {<PerfilCliente /> } />

    <Route path="/error"  element = { <Error/> } />
    <Route path="*"    element = { <NotFound/> } />


    </Routes>
     
    </div>
  );
}

export default App;
