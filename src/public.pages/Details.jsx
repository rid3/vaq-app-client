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
    <p> <b>Especialización </b> : {medicxDetails.especializacion}</p>
    <hr />
    <p> <b>Capacitación en género</b>: {medicxDetails.capacitaciones}</p>
    <hr />
    <p> <b>Provincia</b> : {medicxDetails.provincia}</p>
    <hr />
    <p> <b>Ciudad</b> : {medicxDetails.ciudad}</p>
    <hr />
    <p> <b>Guardias en</b> : {medicxDetails.centroDeSalud}</p> <br />
    <hr />
    <p> <b>Días y Horarios</b> : {medicxDetails.diasYhorario}</p>
    <hr />
    <p> <b>Atiende por</b>(obra social, particular, ambos): {medicxDetails.atiendePor}</p>
    <hr />
    <p> <b>Contacto</b> : {medicxDetails.contacto}</p>
    <hr />


    { isCliente && <button onClick={ handleGuardar }  >Guardar Médicx</button> }
    <p><b>Acreditación:</b></p>
    <div className='imgDetails'>
    <img src={medicxDetails.imgMed} alt="foto" width={"50%"} />
    </div>

    </div>

    
  )
}

export default Details