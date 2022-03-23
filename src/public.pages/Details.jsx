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
      navigate("/") //solo para ver si funciona
    } catch (err) {
      navigate("/error")
    }
  }




  if (!medicxDetails) {
    return <h3>...caragn2</h3>
  }

  return (
    <div>
    <img src={medicxDetails.imgMed} alt="foto" width={"50px"} />
    <h4>{medicxDetails.nombreCompleto}</h4>
    <p>Especializacion: {medicxDetails.especializacion}</p>
    <p>Capacitacion en género: {medicxDetails.capacitaciones}</p>
    <p>Provincia: {medicxDetails.provincia}</p>
    <p>Ciudad: {medicxDetails.ciudad}</p>
    <p>Guardias en: {medicxDetails.centroDeSalud} <br />
    Días y Horarios: {medicxDetails.diasYhorario}</p>
    <p>Atiende por: {medicxDetails.atiendePor}</p>
    <p>Contacto: {medicxDetails.contacto}</p>

    { isCliente && <button onClick={ handleGuardar }  >Guardar Médicx</button> }
    <p>Acreditación de capacitación:</p>
    <img src={medicxDetails.imgCapacitaciones} alt="acreditación" width={"30px"} height={"30px"}/>
    </div>

    
  )
}

export default Details