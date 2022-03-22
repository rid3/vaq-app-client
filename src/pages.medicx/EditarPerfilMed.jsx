import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCuentaService, updatePerfilService } from '../services/medicx.services'
import { getDetailsService } from '../services/public.services'
import { uploadImage } from '../services/cloudinary.services'



function EditarPerfil() {

  //controlo la información que voy a manejar
  const [ nombreCompleto, setNombreCompleto ] = useState("")
  const [ especializacion, setEspecializacion ] = useState("")
  const [ capacitaciones, setCapacitaciones ] = useState("")
  const [ imgCapacitacion, setImgCapacitacion ] = useState("")
  const [ imgMed, setImgMed ] = useState ("")
  const [ provincia, setProvincia ] = useState("")
  const [ ciudad, setCiudad ] = useState("")
  const [ centroDeSalud, setCentroDeSalud ] = useState ("")
  const [ diasYhorario, setDiasYhorario ] = useState("")
  const [ atiendePor, setAtiendePor ] = useState("")
  const [ contacto, setContacto ] = useState("")

  //recibe el input que pone el usuario
  const handleNombreCompleto = (e) => setNombreCompleto(e.target.value)
  const handleEspecializacion = (e) => setEspecializacion (e.target.value)
  const handleCapacitaciones = (e) => setCapacitaciones (e.target.value)
  const handleProvincia = (e) => setProvincia (e.target.value)
  const handleCiudad = (e) => setCiudad (e.target.value)
  const handleCentroDeSalud = (e) => setCentroDeSalud (e.target.value)
  const handleDiasYhorario = (e) => setDiasYhorario (e.target.value)
  const handleAtiendePor = (e) => setAtiendePor (e.target.value)
  const handleContacto = (e) => setContacto (e.target.value)

  //lidiar con imágenes
  const handleImgCapacitacion = (e) => setImgCapacitacion (e.target.value)
  // const handleImgMed = (e) => setImgMed (e.target.value)

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
      setCentroDeSalud(response.data.centroDeSalud)
      setDiasYhorario(response.data.diasYhorario)
      setAtiendePor(response.data.atiendePor)
      setContacto(response.data.contacto)
      setImgMed(response.data.imgMed)
      setImgCapacitacion(response.data.imgCapacitacion)
    } catch (err) {
      navigate("/error")
    }
  }

  //FILE UPLOAD ----------------------------------------------

  // const handleImgCapacitacion = (e) => {

  //   const uploadData = new FormData()
  //   uploadData.append("imgCapacitacion", e.target.files[0]);

  //    uploadImage
  //    .uploadImage(uploadData)
  //   .then(response => {
  //     setImgCapacitacion(response.fileUrl);
  //   })
  //   .catch(err => console.log("error al cargar la imagen", err));
  // }

  // const handleImgMed = (e) => {

  //   const uploadData = new FormData()
  //   uploadData.append("imgMed", e.target.files[0]);

  //   uploadImage
  //   .uploadImage(uploadData)
  //   .then(response => {
  //     setImgMed(response.fileUrl);
  //   })
  //   .catch(err => console.log("error al cargar la imagen", err));
  // }
// SALE LA TERCERA PRUEBITAAA----------------------------------------------


const handleFileUpload = (e) => {
  const uploadData = new FormData ();
  uploadData.append("imgMed", e.target.files[0])

  uploadImage(uploadData)
  .then ( response => {
    setImgMed(response.fileUrl);
  })
  .catch (err => console.log("error uploading la img", err)) 

}
  //-----------------------------------------------------------


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     await updatePerfilService (id, { nombreCompleto, especializacion, capacitaciones, provincia, ciudad, centroDeSalud, diasYhorario, atiendePor, imgMed, imgCapacitacion, contacto})
      navigate("/")
    } catch (err) {
      navigate("/error")
    }
  }
  //   uploadImage
  //   .updatePerfilService ({ nombreCompleto, especializacion, capacitaciones, provincia, ciudad, centroDeSalud, diasYhorario, atiendePor, imgMed, imgCapacitacion })
  //   .then (res => {
  //     setNombreCompleto("");
  //     setCapacitaciones("");
  //     setEspecializacion("");
  //     setProvincia("");
  //     setCiudad("");
  //     setCentroDeSalud("");
  //     setDiasYhorario("");
  //     setAtiendePor("");
  //     setImgCapacitacion("");
  //     setImgMed("");
  //     navigate ("/");
  //   })
  //   .catch(err=> console.log("error while uploading", err))
  // }

  
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

        <form onSubmit={ handleSubmit } >

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
          <input type="file" name="imgMed" value= {imgMed} onChange = { (e) => handleFileUpload(e) } />
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

          <label htmlFor="centroDeSalud">Guardias en centor de salud: </label>
          <input type="text" name="centroDeSalud" value={centroDeSalud} onChange = { handleCentroDeSalud } />
          <br />
          <br />

          <label htmlFor="diasYhorario">Días y Horarios: </label>
          <input type="text" name="diasYHorario" value={diasYhorario} onChange = { handleDiasYhorario }/>
          <br />
          <br />

          <label htmlFor="atiendePor">Atiende por (obras sociales, particular, ambos): </label>
          <input type="text" name="atiendePor" value={atiendePor} onChange = { handleAtiendePor }/>
          <br />
          <br />

    
          <label htmlFor="contacto">Contacto: </label>
          <input type="text" name="contacto" value={contacto} onChange = { handleContacto }/>
          <br />
          <br />


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