import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailsService } from '../services/public.services'

function Details() {

  const [ medicxDetails, setMedicxDetails ] = useState (null)
  
  const { id } = useParams()

  const navigate = useNavigate()

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

  if (!medicxDetails) {
    return <h3>...caragn2</h3>
  }

  return (
    <div>

    <h4>{medicxDetails.nombreCompleto}</h4>
    <img src={medicxDetails.imgMed} alt="foto" />
    <p>Especializacion: {medicxDetails.especializacion}</p>
    <p>Capacitacion en género: {medicxDetails.capacitaciones}</p>
    <p>Acreditación: {medicxDetails.imgCapacitaciones}</p>
    <p>Provincia: {medicxDetails.provincia}</p>
    <p>Ciudad: {medicxDetails.ciudad}</p>
    <p>Guardias en: {medicxDetails.centroDeSalud} <br />
    Días y Horarios: {medicxDetails.diasYhorario}</p>
    <p>Atiende por: {medicxDetails.atiendePor}</p>

    </div>
    
  )
}

export default Details