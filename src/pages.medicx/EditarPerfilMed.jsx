import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCuentaService, updatePerfilService } from '../services/medicx.services'
import { getDetailsService } from '../services/public.services'

function EditarPerfil(props) {

  const [ nombreCompleto, setNombreCompleto ] = useState("")
  const [ especializacion, setEspecializacion ] = useState("")
  const [ capacitaciones, setCapacitaciones ] = useState("")
  const [ imgCapacitacion, setImgCapacitacion ] = useState("")
  const [ imgMed, setImgMed ] = useState ("")
  const [ provincia, setProvincia ] = useState("")
  const [ ciudad, setCiudad ] = useState("")

  const handleNombreCompleto = (e) => setNombreCompleto(e.target.value)
  const handleEspecializacion = (e) => setEspecializacion (e.target.value)
  const handleCapacitaciones = (e) => setCapacitaciones (e.target.value)
  const handleProvincia = (e) => setProvincia (e.target.value)
  const handleCiudad = (e) => setCiudad (e.target.value)
  
  const handleImgCapacitacion = (e) => setImgCapacitacion (e.target.value)
  const handleImgMed = (e) => setImgMed (e.target.value)

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect (() => {
    getMedicxDetails()
  }, [])

  const getMedicxDetails = async () => {
    try {
      const response = await getDetailsService(id)
      setNombreCompleto(response.data.nombreCompleto)
      setEspecializacion(response.data.especializacion)
      setCapacitaciones(response.data.capacitaciones)
      setProvincia(response.data.provincia)
      setCiudad(response.data.ciudad)
    } catch (err) {
      navigate("/error")
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await updatePerfilService (id, { nombreCompleto, especializacion, capacitaciones, provincia, ciudad })
      navigate("/")
    } catch (err) {

    }
  }

  const handleClick = async () => {
    try {
      await deleteCuentaService(id)
      navigate("/")
    } catch(err){
      navigate("/error")
    }
  }


  return (
    <div>
        <h2>Editando Perfil Público</h2>

        <form onSubmit={ handleSubmit } enctype="multipart/form-data" >

          <label htmlFor="nombreCompleto">Nombre Completo: </label>
          <input type="text" name="nombreCompleto" value={nombreCompleto} onChange = { handleNombreCompleto } />
          <br />
          <br />

          <label htmlFor="especializacion">Especialización: </label>
          <input type="text" name="especializacion" value={especializacion} onChange = { handleEspecializacion } />
         <br />
         <br />

          <label htmlFor="capacitaciones">Capacitaciones: </label>
          <input type="text" name="capacitaciones" value={capacitaciones} onChange = { handleCapacitaciones } />
          <br />
          <br />

          <label htmlFor="imgCapacitacion">Img Credenciales Capacitación: </label>
          <input type="file" name="imgCapacitacion" value = { imgCapacitacion } onChange = { handleImgCapacitacion }/> 
          <br />
          <br />
          <label htmlFor="imgMed">Img de Perfil: </label>
          <input type="file" name="imgMed" value= {imgMed} onChange = { handleImgMed } />
          <br />
          <br /> 

          <label htmlFor="provincia">Provincia: </label>
          <input type="text" name="provincia" value={provincia} onChange = { handleProvincia } />
          <br />
          <br />

          <label htmlFor="ciudad">Ciudad: </label>
          <input type="text" name="ciudad" value={ciudad} onChange = { handleCiudad } />
          <br />
          <br />
{/* 
          <label htmlFor="centroDeSalud">Guardias en centor de salud: </label>
          <input type="text" name="centroDeSalud" value={centroDeSalud} onChange = { handleCentroDeSalud } />
          <br />
          <br />

          <label htmlFor="diasYhorarios">Días y Horarios: </label>
          <input type="text" name="diasYHorarios" value={diasYhorarios} onChange = { handleDiasYhorarios }/>
          <br />
          <br />

          <label htmlFor="obraSocial">Obra Social: </label>
          <input type="radio" name="atiendePor" value={obraSocial} onChange = { handleObraSocial }/>
          <br />
          <br />

          <label htmlFor="particular">Particular</label>
          <input type="radio" name="atiendePor" value= {particular} onChange = { handleParticular } />
          <br />
          <br />

          <label htmlFor="ambos">Obra Social y Particular</label>
          <input type="radio" name="atiendePor" value={ambos} onChange = { handleAmbos } />
          <br />
          <br />
          <br /> */}

          <button>Editar Perfil</button>
          <br />
          <br />
          <br />

          <button onClick={ handleClick } >Eliminar cuenta</button>
        </form>

        
    </div>
  )
}

export default EditarPerfil