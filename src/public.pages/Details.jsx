import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailsService } from '../services/public.services'
import { guardarService } from "../services/cliente.services"

function Details(props) {

  const [ medicxDetails, setMedicxDetails ] = useState (null)
  const { id } = useParams()
  const navigate = useNavigate()
  const { isCliente } = props


  useEffect (() => {
    getMedicxDetails()
  }, [])

  const getMedicxDetails = async () => {

    try {
      const response = await getDetailsService(id)
      setMedicxDetails(response.data)
    } catch (err) {
      navigate("/error")
    }
  }

  const handleGuardar = async () => {
    try {
      
      await guardarService(id)
      navigate("/") 
    } catch (err) {
      navigate("/error")
    }
  }




  if (!medicxDetails) {
    return <h3>...caragn2</h3>
  }

  return (

    <div className='details' >

    <h1>{medicxDetails.nombreCompleto}</h1>
    <hr />
    <p>Especializacion: {medicxDetails.especializacion}</p>
    <hr />
    <p>Capacitacion en género: {medicxDetails.capacitaciones}</p>
    <hr />
    <p>Provincia: {medicxDetails.provincia}</p>
    <hr />
    <p>Ciudad: {medicxDetails.ciudad}</p>
    <hr />
    <p>Guardias en: {medicxDetails.centroDeSalud}</p> <br />
    <hr />
    <p>Días y Horarios: {medicxDetails.diasYhorario}</p>
    <hr />
    <p>Atiende por: {medicxDetails.atiendePor}</p>
    <hr />
    <p>Contacto: {medicxDetails.contacto}</p>
    <hr />


    { isCliente && <button onClick={ handleGuardar }  >Guardar Médicx</button> }

    <div className='imgDetails'>
    <img src={medicxDetails.imgMed} alt="foto" width={"50%"} />
    <img src={medicxDetails.imgCapacitaciones} alt="acreditación" width={"30px"} height={"30px"}/>

    </div>

    {/* <p>Acreditación de capacitación:</p> */}
    </div>

    
  )
}

export default Details